import { WebSocketServer, WebSocket } from 'ws';
import { createServer } from 'http';
import { parse } from 'url';
import { readFile } from 'fs';
import { join, extname, dirname } from 'path';
import { fileURLToPath } from 'url';

// Получаем __dirname в ES модулях
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Этот сервер выполняет две функции:
// 1. Отдает статические файлы сайта (Frontend) из папки dist
// 2. Работает как Proxy для WebSocket к Google Gemini API

const port = process.env.PORT || 8080;

// MIME типы для статики
const MIME_TYPES = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.wav': 'audio/wav',
    '.mp3': 'audio/mpeg'
};

const server = createServer((req, res) => {
    const { pathname } = parse(req.url);

    // 1. Health check для Render
    if (pathname === '/health') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'ok' }));
        return;
    }

    // 2. Раздача статики (Frontend)
    // Если корень - отдаем index.html, иначе пытаемся найти файл
    let filePath = join(__dirname, 'dist', pathname === '/' ? 'index.html' : pathname);
    
    const ext = extname(filePath);
    let contentType = MIME_TYPES[ext] || 'application/octet-stream';

    readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // Если файл не найден, для SPA (Single Page App) часто возвращают index.html
                // Но у нас ресурсы (js/css) должны быть точными.
                // Если это не ресурс, а маршрут - отдаем index.html
                if (!ext) {
                     readFile(join(__dirname, 'dist', 'index.html'), (error, html) => {
                        if (error) {
                            res.writeHead(500);
                            res.end('Error loading site');
                        } else {
                            res.writeHead(200, { 'Content-Type': 'text/html' });
                            res.end(html);
                        }
                     });
                } else {
                    res.writeHead(404);
                    res.end('Not found');
                }
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
});

const wss = new WebSocketServer({ noServer: true });

server.on('upgrade', (request, socket, head) => {
    // Целевой URL Google Gemini
    const targetUrl = new URL(`wss://generativelanguage.googleapis.com${request.url}`);

    console.log(`[Proxy] Connecting to: ${targetUrl.pathname}`);

    const googleSocket = new WebSocket(targetUrl, {
        headers: {
            'Host': 'generativelanguage.googleapis.com',
            'User-Agent': request.headers['user-agent'] || 'LingoBro-Proxy',
            ...(request.headers['x-goog-api-key'] && { 'x-goog-api-key': request.headers['x-goog-api-key'] }),
            ...(request.headers['x-goog-api-client'] && { 'x-goog-api-client': request.headers['x-goog-api-client'] }),
        }
    });

    googleSocket.on('open', () => {
        wss.handleUpgrade(request, socket, head, (clientSocket) => {
            clientSocket.on('message', (data, isBinary) => {
                if (googleSocket.readyState === WebSocket.OPEN) {
                    googleSocket.send(data, { binary: isBinary });
                }
            });

            googleSocket.on('message', (data, isBinary) => {
                if (clientSocket.readyState === WebSocket.OPEN) {
                    clientSocket.send(data, { binary: isBinary });
                }
            });

            clientSocket.on('close', () => googleSocket.close());
            googleSocket.on('close', () => clientSocket.close());

            clientSocket.on('error', (e) => console.error('[Client Error]', e.message));
            googleSocket.on('error', (e) => console.error('[Google Error]', e.message));
        });
    });

    googleSocket.on('error', (err) => {
        console.error('[Google Connection Error]', err.message);
        socket.write('HTTP/1.1 502 Bad Gateway\r\n\r\n');
        socket.destroy();
    });
});

server.listen(port, () => {
    console.log(`LingoBro Server listening on port ${port}`);
});