import { WebSocketServer, WebSocket } from 'ws';
import { createServer } from 'http';
import { parse } from 'url';

// Этот сервер предназначен для деплоя на Render.com или Railway.app
// Он перенаправляет WebSocket соединения напрямую в Google Gemini API.
// Так как Render находится в Европе/США, блокировки РФ не действуют.

const port = process.env.PORT || 8080;
const server = createServer((req, res) => {
    // Простой health-check для Render, чтобы сервис не падал
    if (req.url === '/health' || req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ 
            status: 'ok', 
            service: 'LingoBro Proxy', 
            region: process.env.RENDER_REGION || 'Unknown' 
        }));
        return;
    }
    res.writeHead(404);
    res.end();
});

const wss = new WebSocketServer({ noServer: true });

server.on('upgrade', (request, socket, head) => {
    const { pathname, query } = parse(request.url, true);

    // Целевой URL Google Gemini
    // Мы сохраняем путь (например /v1beta/models/...) и параметры запроса
    const targetUrl = new URL(`wss://generativelanguage.googleapis.com${request.url}`);

    console.log(`[Proxy] Connecting to: ${targetUrl.pathname}`);

    // Создаем соединение с Google
    const googleSocket = new WebSocket(targetUrl, {
        headers: {
            // Пробрасываем важные заголовки (особенно Host)
            'Host': 'generativelanguage.googleapis.com',
            'User-Agent': request.headers['user-agent'] || 'LingoBro-Proxy',
            // API Key и Client ID обычно идут в query params, но если в хедерах - прокидываем
            ...(request.headers['x-goog-api-key'] && { 'x-goog-api-key': request.headers['x-goog-api-key'] }),
            ...(request.headers['x-goog-api-client'] && { 'x-goog-api-client': request.headers['x-goog-api-client'] }),
        }
    });

    googleSocket.on('open', () => {
        // Как только Google ответил, подтверждаем апгрейд клиенту (браузеру)
        wss.handleUpgrade(request, socket, head, (clientSocket) => {
            
            // Пайпинг сообщений: Клиент -> Прокси -> Google
            clientSocket.on('message', (data, isBinary) => {
                if (googleSocket.readyState === WebSocket.OPEN) {
                    googleSocket.send(data, { binary: isBinary });
                }
            });

            // Пайпинг сообщений: Google -> Прокси -> Клиент
            googleSocket.on('message', (data, isBinary) => {
                if (clientSocket.readyState === WebSocket.OPEN) {
                    clientSocket.send(data, { binary: isBinary });
                }
            });

            // Обработка закрытия
            clientSocket.on('close', () => googleSocket.close());
            googleSocket.on('close', () => clientSocket.close());

            // Обработка ошибок
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
    console.log(`LingoBro Proxy Server listening on port ${port}`);
});