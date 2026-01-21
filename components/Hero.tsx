import React, { useState, useEffect, useRef } from 'react';
import { Play, Star, Mic, LayoutDashboard, Flame, Trophy, Book, Zap, Search, X, Volume2, Download, StopCircle, Loader2, Lock, Settings, Server, CheckCircle2, ShieldCheck, RefreshCw, AlertCircle, Rocket, Globe2, AlertTriangle, ExternalLink, MessageCircle, Trash2 } from 'lucide-react';
import { GoogleGenAI, LiveServerMessage, Modality, Blob } from "@google/genai";

// --- КОНФИГУРАЦИЯ ---
const DEFAULT_PROXY_URL = ''; 

export const Hero: React.FC = () => {
  const [showDemo, setShowDemo] = useState(false);
  
  return (
    <section id="hero" className="relative pt-24 pb-8 lg:pt-32 lg:pb-12 overflow-hidden">
      
      {/* Background Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          
          {/* Text Content */}
          <div className="lg:w-5/12 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 mb-4 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-ping"></span>
              <span className="text-xs font-medium text-teal-300 uppercase tracking-wider">AI 2.0 уже доступен</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
              Учи языки <br />
              <span className="gradient-text">как босс</span>
            </h1>
            
            <p className="text-lg text-slate-400 mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Забудь про скучные карточки. LingoBro — это твой личный AI-собеседник, который готов болтать 24/7 на любые темы.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
              <button className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-teal-500/25 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                <Play fill="currentColor" size={18} />
                Попробовать
              </button>
              <button 
                onClick={() => setShowDemo(true)}
                className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-bold border border-slate-700 transition-all flex items-center justify-center gap-2 hover:border-teal-500/50"
              >
                <Star className="text-yellow-400" size={18} />
                Live Демо
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover" src={`https://picsum.photos/100/100?random=${i}`} alt="User" />
                ))}
              </div>
              <p>Более <span className="text-white font-bold">10,000+</span> счастливых бро</p>
            </div>
          </div>

          {/* VISUALS - Desktop Dashboard */}
          <div className="lg:w-7/12 relative z-10 w-full">
            
            {/* Desktop Mockup (Visible on LG screens) */}
            <div className="hidden lg:block relative rounded-xl bg-[#0f172a] border border-slate-700 shadow-2xl overflow-hidden aspect-[16/10] animate-float transform rotate-1 hover:rotate-0 transition-transform duration-500">
                 {/* Sidebar */}
                 <div className="absolute left-0 top-0 bottom-0 w-48 bg-[#0B1120] border-r border-slate-800 p-4 flex flex-col">
                    <div className="flex items-center gap-2 mb-8 px-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-teal-400 to-purple-500"></div>
                         <span className="font-bold text-sm">LingoBro</span>
                    </div>
                    <div className="space-y-1">
                        <div className="bg-blue-600 text-white p-2 rounded-lg font-medium text-xs flex gap-2 items-center">
                            <LayoutDashboard size={14} /> Главная
                        </div>
                        <div className="text-slate-400 p-2 rounded-lg font-medium text-xs flex gap-2 items-center">
                            <Book size={14} /> Словарь
                        </div>
                         <div className="text-slate-400 p-2 rounded-lg font-medium text-xs flex gap-2 items-center">
                            <Mic size={14} /> Разговор
                        </div>
                         <div className="text-slate-400 p-2 rounded-lg font-medium text-xs flex gap-2 items-center">
                            <Trophy size={14} /> Рейтинг
                        </div>
                    </div>
                    <div className="mt-auto">
                        <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                            <div className="text-[10px] text-slate-500 mb-1">Твой план</div>
                            <div className="text-xs font-bold text-teal-400">Premium ✨</div>
                        </div>
                    </div>
                 </div>

                 {/* Dashboard Content */}
                 <div className="ml-48 p-6 bg-[#0f172a] h-full flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1">Здорова, Хока! 👋</h3>
                            <p className="text-xs text-slate-400">Готов прокачать свой English?</p>
                        </div>
                        <div className="px-3 py-1 bg-slate-800 rounded-full text-[10px] text-green-400 border border-green-900 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Система в норме
                        </div>
                    </div>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                        <div className="bg-[#1e293b] p-3 rounded-lg border border-slate-700/50">
                            <div className="flex items-center gap-2 mb-1">
                                <div className="p-1 bg-orange-500/10 rounded text-orange-500"><Flame size={12} /></div>
                                <span className="text-[10px] uppercase text-slate-400 font-bold">Дней</span>
                            </div>
                            <div className="text-xl font-bold text-white">12 🔥</div>
                        </div>
                        <div className="bg-[#1e293b] p-3 rounded-lg border border-slate-700/50">
                             <div className="flex items-center gap-2 mb-1">
                                <div className="p-1 bg-blue-500/10 rounded text-blue-500"><Trophy size={12} /></div>
                                <span className="text-[10px] uppercase text-slate-400 font-bold">Уровень</span>
                            </div>
                            <div className="text-xl font-bold text-white">B1</div>
                        </div>
                        <div className="bg-[#1e293b] p-3 rounded-lg border border-slate-700/50">
                             <div className="flex items-center gap-2 mb-1">
                                <div className="p-1 bg-teal-500/10 rounded text-teal-500"><Book size={12} /></div>
                                <span className="text-[10px] uppercase text-slate-400 font-bold">Слов</span>
                            </div>
                            <div className="text-xl font-bold text-white">1,240</div>
                        </div>
                    </div>

                    {/* Big Action Cards */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                         <div className="bg-blue-600 p-4 rounded-xl text-white relative overflow-hidden group cursor-pointer hover:bg-blue-500 transition-colors">
                            <div className="relative z-10">
                                <div className="mb-2 p-2 bg-white/20 w-fit rounded-lg"><Zap size={16}/></div>
                                <h4 className="font-bold text-sm mb-1">Начать тренировку</h4>
                                <p className="text-blue-100 text-[10px] mb-3 opacity-80">Карточки или написание слов.</p>
                                <button className="bg-white/20 px-3 py-1.5 rounded text-[10px] font-bold hover:bg-white/30 transition-colors">Погнали</button>
                            </div>
                            <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-blue-400 rounded-full opacity-20 blur-xl group-hover:scale-150 transition-transform"></div>
                         </div>
                         <div className="bg-[#2e1065] border border-purple-500/30 p-4 rounded-xl text-white relative overflow-hidden group cursor-pointer hover:border-purple-500/60 transition-colors">
                            <div className="relative z-10">
                                <div className="mb-2 p-2 bg-purple-500/20 w-fit rounded-lg"><Search size={16} className="text-purple-300"/></div>
                                <h4 className="font-bold text-sm mb-1">Джунгли Слов</h4>
                                <p className="text-purple-200 text-[10px] mb-3 opacity-70">Ищи новые идиомы и сленг.</p>
                                <button className="bg-purple-500/20 text-purple-200 px-3 py-1.5 rounded text-[10px] font-bold hover:bg-purple-500/30 transition-colors">Искать</button>
                            </div>
                             <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-purple-500 rounded-full opacity-10 blur-xl"></div>
                         </div>
                    </div>
                    
                    {/* Bottom Quote */}
                    <div className="mt-auto bg-[#1e293b] p-3 rounded-lg border border-slate-700/50 text-center">
                        <p className="text-[10px] text-slate-400 italic">"Границы моего языка означают границы моего мира."</p>
                    </div>
                 </div>
            </div>

            {/* Mobile Mockup (Visible on small screens) */}
            <div className="lg:hidden relative mx-auto border-slate-800 bg-slate-900 border-[8px] rounded-[2.5rem] h-[500px] w-[280px] shadow-2xl flex flex-col overflow-hidden animate-float">
               {/* Screen Content */}
              <div className="w-full h-full rounded-[2rem] overflow-hidden bg-slate-900 relative">
                
                {/* Status Bar */}
                <div className="flex justify-between px-6 pt-4 text-xs text-white">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <span>5G</span>
                    <div className="w-4 h-2.5 border border-white rounded-sm relative"><div className="bg-white absolute inset-0.5 w-2"></div></div>
                  </div>
                </div>

                {/* App UI */}
                <div className="p-4 flex flex-col h-full relative">
                  <div className="flex items-center justify-between mb-6 mt-2">
                     <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-teal-400 to-purple-500 flex items-center justify-center">
                            <span className="font-bold text-xs">AI</span>
                        </div>
                        <span className="font-bold text-white">Bro</span>
                     </div>
                     <div className="bg-slate-800 p-2 rounded-full"><Mic size={16} /></div>
                  </div>

                  {/* Chat Bubbles */}
                  <div className="space-y-4 flex-1 overflow-hidden relative">
                    <div className="bg-slate-800 rounded-2xl rounded-tl-none p-3 max-w-[85%] animate-pulse">
                      <p className="text-sm text-slate-200">Йо! Как прошел твой день? Ready to practice?</p>
                    </div>
                    <div className="bg-teal-600 rounded-2xl rounded-tr-none p-3 max-w-[85%] self-end ml-auto">
                      <p className="text-sm text-white">Yeah, totally! I went to the gym.</p>
                    </div>
                    <div className="bg-slate-800 border border-teal-500/30 rounded-2xl rounded-tl-none p-3 max-w-[85%] mt-2">
                      <div className="flex items-start gap-2">
                        <MessageCircle size={14} className="text-teal-400 mt-1 shrink-0" />
                         <div>
                            <p className="text-xs text-teal-400 font-semibold mb-1">Tip:</p>
                            <p className="text-sm text-slate-200">Лучше сказать: <span className="italic text-teal-200">"I hit the gym today."</span></p>
                         </div>
                      </div>
                    </div>
                  </div>

                  {/* Mic Button UI */}
                  <div className="mt-auto mb-6">
                    <div className="flex justify-center items-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/40 cursor-pointer hover:scale-105 transition-transform">
                            <Mic className="text-white w-8 h-8" />
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LIVE DEMO MODAL */}
      {showDemo && <DemoModal onClose={() => setShowDemo(false)} />}
    </section>
  );
};

// --- AUDIO HELPERS ---
function createBlob(data: Float32Array): Blob {
  const l = data.length;
  const int16 = new Int16Array(l);
  for (let i = 0; i < l; i++) {
    int16[i] = data[i] * 32768;
  }
  
  let binary = '';
  const bytes = new Uint8Array(int16.buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  const base64 = btoa(binary);

  return {
    data: base64,
    mimeType: 'audio/pcm;rate=16000',
  };
}

function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}


// --- LIVE DEMO MODAL ---
interface ChatMessage {
    role: 'user' | 'ai';
    text: string;
    id: string;
}

const STORAGE_KEY = 'lingobro_demo_turns';
const PROXY_STORAGE_KEY = 'lingobro_proxy_url';

const DemoModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [status, setStatus] = useState<'intro' | 'connecting' | 'connected' | 'error' | 'finished'>('intro');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const MAX_TURNS = 3;
  
  // Settings Mode
  const [showSettings, setShowSettings] = useState(false);

  // Logic: 
  // 1. Check local storage
  // 2. If storage key exists (even if empty string), use it.
  // 3. If storage key DOES NOT exist (null), use DEFAULT.
  const [proxyUrl, setProxyUrl] = useState(() => {
     if (typeof window !== 'undefined') {
         const saved = localStorage.getItem(PROXY_STORAGE_KEY);
         if (saved !== null) return saved; 
     }
     return DEFAULT_PROXY_URL;
  });
  
  const saveSettings = () => {
    // Basic sanitation
    const cleaned = proxyUrl.trim().replace(/\/$/, "");
    localStorage.setItem(PROXY_STORAGE_KEY, cleaned);
    setProxyUrl(cleaned);
    setShowSettings(false);
  };
  
  const resetEverything = () => {
      localStorage.removeItem(PROXY_STORAGE_KEY);
      localStorage.removeItem(STORAGE_KEY);
      setProxyUrl(DEFAULT_PROXY_URL);
      setTurnCount(0);
      setStatus('intro');
      setErrorMessage('');
      alert("Настройки сброшены.");
  }

  // Initialize turn count from local storage
  const [turnCount, setTurnCount] = useState(() => {
    if (typeof window !== 'undefined') {
        return parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10);
    }
    return 0;
  });
  
  const sessionRef = useRef<any>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const inputContextRef = useRef<AudioContext | null>(null);
  const nextStartTimeRef = useRef<number>(0);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());
  
  const currentTurnTextRef = useRef<{user: string, ai: string}>({user: '', ai: ''});
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isCleanDisconnectRef = useRef(false);

  useEffect(() => {
      if (turnCount >= MAX_TURNS) {
          setStatus('finished');
      }
  }, [turnCount]);

  useEffect(() => {
    return () => {
        isCleanDisconnectRef.current = true;
        disconnect();
    };
  }, []);

  useEffect(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const disconnect = () => {
    if (sessionRef.current) {
      sessionRef.current.then((s:any) => s.close()).catch(() => {});
      sessionRef.current = null;
    }
    sourcesRef.current.forEach(source => {
      try { source.stop(); } catch(e) {}
    });
    sourcesRef.current.clear();

    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    if (inputContextRef.current) {
      inputContextRef.current.close();
      inputContextRef.current = null;
    }
  };

  const updateMessage = (role: 'user' | 'ai', text: string) => {
    setMessages(prev => {
        const lastMsg = prev[prev.length - 1];
        if (!lastMsg || lastMsg.role !== role) {
             if (!text.trim()) return prev;
             return [...prev, { role, text, id: Date.now().toString() }];
        } else {
             const newMessages = [...prev];
             newMessages[newMessages.length - 1] = { ...lastMsg, text };
             return newMessages;
        }
    });
  };

  const startSession = async () => {
    if (turnCount >= MAX_TURNS) {
        setStatus('finished');
        return;
    }

    isCleanDisconnectRef.current = false;
    setStatus('connecting');
    setErrorMessage('');
    setMessages([]);
    currentTurnTextRef.current = { user: '', ai: '' };

    try {
        const apiKey = process.env.API_KEY;
        if (!apiKey) {
            throw new Error("API Key is missing. Please create a .env file with API_KEY=...");
        }

        const clientOptions: any = { apiKey: apiKey };
        
        // --- SANITIZE PROXY URL ---
        const activeProxy = proxyUrl.trim().replace(/\/$/, "");

        if (activeProxy) {
            clientOptions.baseUrl = activeProxy;
        }

        const ai = new GoogleGenAI(clientOptions);
        
        // 1. Setup Audio Output
        const outputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({sampleRate: 24000});
        audioContextRef.current = outputCtx;
        const outputNode = outputCtx.createGain();
        outputNode.connect(outputCtx.destination);
        nextStartTimeRef.current = 0;

        // 2. Setup Audio Input
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            throw new Error("Microphone access is not supported. Check browser permissions or HTTPS/Localhost.");
        }

        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        
        const inputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({sampleRate: 16000});
        inputContextRef.current = inputCtx;
        
        const source = inputCtx.createMediaStreamSource(stream);
        const scriptProcessor = inputCtx.createScriptProcessor(4096, 1, 1);
        
        // 3. Connect Live API
        const sessionPromise = ai.live.connect({
            model: 'gemini-2.5-flash-native-audio-preview-12-2025',
            config: {
                responseModalities: [Modality.AUDIO],
                inputAudioTranscription: {},
                outputAudioTranscription: {},
                systemInstruction: "You are LingoBro, a super cool, energetic and friendly English tutor. Keep your responses short (under 2 sentences), encouraging, and casual. Use slang like 'Bro', 'Awesome', 'Sick'. Your goal is to get the user to speak English. If they speak Russian, gently nudge them to English. Speak fast and confident.",
                speechConfig: {
                    voiceConfig: {prebuiltVoiceConfig: {voiceName: 'Kore'}},
                },
            },
            callbacks: {
                onopen: () => {
                    setStatus('connected');
                    setMessages([{ role: 'ai', text: "Yo! I'm LingoBro. Let's practice! Say something in English.", id: 'init' }]);
                    source.connect(scriptProcessor);
                    scriptProcessor.connect(inputCtx.destination);
                },
                onmessage: async (message: LiveServerMessage) => {
                    if (message.serverContent?.inputTranscription) {
                        const text = message.serverContent.inputTranscription.text;
                        if (text) {
                            currentTurnTextRef.current.user += text;
                            updateMessage('user', currentTurnTextRef.current.user);
                        }
                    }
                    if (message.serverContent?.outputTranscription) {
                         const text = message.serverContent.outputTranscription.text;
                         if (text) {
                             currentTurnTextRef.current.ai += text;
                             updateMessage('ai', currentTurnTextRef.current.ai);
                         }
                    }

                    if (message.serverContent?.turnComplete) {
                        currentTurnTextRef.current = { user: '', ai: '' };
                        setTurnCount(prev => {
                            const newCount = prev + 1;
                            localStorage.setItem(STORAGE_KEY, newCount.toString());
                            if (newCount >= MAX_TURNS) {
                                isCleanDisconnectRef.current = true;
                                setTimeout(() => stopSession(), 4000);
                            }
                            return newCount;
                        });
                    }

                    const base64Audio = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
                    if (base64Audio && audioContextRef.current) {
                        setIsSpeaking(true);
                        const ctx = audioContextRef.current;
                        const now = ctx.currentTime;
                        const startTime = Math.max(nextStartTimeRef.current, now);
                        const audioBuffer = await decodeAudioData(decode(base64Audio), ctx, 24000, 1);
                        const sourceNode = ctx.createBufferSource();
                        sourceNode.buffer = audioBuffer;
                        sourceNode.connect(outputNode);
                        sourceNode.addEventListener('ended', () => {
                            sourcesRef.current.delete(sourceNode);
                            if (sourcesRef.current.size === 0) setIsSpeaking(false);
                        });
                        sourceNode.start(startTime);
                        sourcesRef.current.add(sourceNode);
                        nextStartTimeRef.current = startTime + audioBuffer.duration;
                    }

                    if (message.serverContent?.interrupted) {
                        sourcesRef.current.forEach(s => { try { s.stop(); } catch(e) {} });
                        sourcesRef.current.clear();
                        nextStartTimeRef.current = 0;
                        setIsSpeaking(false);
                        currentTurnTextRef.current.ai = ''; 
                    }
                },
                onclose: (e: CloseEvent) => {
                    if (isCleanDisconnectRef.current) {
                        const saved = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10);
                        if (saved >= MAX_TURNS) setStatus('finished');
                        else setStatus('intro');
                    } else {
                        console.error("Unexpected closure", e);
                        setErrorMessage("Соединение разорвано. Если вы в РФ, убедитесь что указан корректный прокси.");
                        setStatus('error');
                    }
                },
                onerror: (e: any) => {
                    console.error("Connection Error:", e);
                    isCleanDisconnectRef.current = false;
                    setErrorMessage("Ошибка подключения к серверу.");
                    setStatus('error');
                }
            }
        });

        sessionRef.current = sessionPromise;

        scriptProcessor.onaudioprocess = (e) => {
            const inputData = e.inputBuffer.getChannelData(0);
            const pcmBlob = createBlob(inputData);
            if (sessionRef.current) {
                sessionRef.current.then((session: any) => {
                    try {
                        session.sendRealtimeInput({ media: pcmBlob });
                    } catch(e) {
                        // Ignore send errors if session is closing
                    }
                });
            }
        };

    } catch (err: any) {
        console.error("Setup error:", err);
        setErrorMessage("Не удалось инициализировать подключение.");
        setStatus('error');
    }
  };

  const stopSession = () => {
      isCleanDisconnectRef.current = true; // Mark as intentional
      disconnect();
      const saved = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10);
      if (saved >= MAX_TURNS) setStatus('finished');
      else setStatus('intro');
  };
  
  const handleModalClose = () => {
      isCleanDisconnectRef.current = true; // Mark as intentional
      disconnect();
      onClose();
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm" onClick={handleModalClose}></div>
        
        {/* Modal Content */}
        <div className="relative w-full max-w-md bg-[#020617] border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[600px] animate-fade-in">
            
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-[#0f172a]">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-teal-400 to-purple-500 flex items-center justify-center shadow-lg shadow-teal-500/20">
                        <span className="font-bold text-white text-xs">AI</span>
                    </div>
                    <div>
                        <h3 className="font-bold text-white">LingoBro Live</h3>
                        <div className="flex items-center gap-1.5">
                            <span className={`w-2 h-2 rounded-full ${status === 'connected' ? 'bg-green-500' : (status === 'error' ? 'bg-red-500' : 'bg-slate-500')}`}></span>
                            <span className="text-[10px] text-slate-400 uppercase tracking-wide">
                                {status === 'connected' ? 'On Air' : (status === 'finished' ? 'Ended' : (status === 'error' ? 'Error' : status))}
                            </span>
                        </div>
                    </div>
                </div>
                
                <div className="flex items-center gap-2">
                     <button 
                        onClick={() => setShowSettings(!showSettings)} 
                        className={`p-2 rounded-full transition-colors ${showSettings || proxyUrl ? 'text-teal-400 bg-teal-500/10' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
                        title="Connection Settings"
                     >
                        <Settings size={20} />
                    </button>
                    <button onClick={handleModalClose} className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white">
                        <X size={20} />
                    </button>
                </div>
            </div>

            {/* SETTINGS VIEW */}
            {showSettings ? (
                <div className="flex-1 p-6 bg-[#020617] animate-fade-in overflow-y-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-slate-800 rounded-lg"><Server size={20} className="text-teal-400"/></div>
                        <h3 className="text-lg font-bold text-white">Настройки сервера</h3>
                    </div>
                    
                    <div className="space-y-6">
                        <div>
                            <label className="block text-xs font-medium text-slate-400 mb-2">PROXY URL (RENDER / RAILWAY)</label>
                            <input 
                                type="text" 
                                value={proxyUrl}
                                onChange={(e) => setProxyUrl(e.target.value)}
                                placeholder="https://my-app.onrender.com"
                                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:ring-2 focus:ring-teal-500 outline-none placeholder:text-slate-600"
                            />
                            {!proxyUrl ? (
                                <p className="mt-2 text-[10px] text-yellow-500 flex items-center gap-1">
                                    <AlertTriangle size={12}/> Вставьте ссылку на ваш прокси, чтобы работало в РФ
                                </p>
                            ) : (
                                <p className="mt-2 text-[10px] text-teal-400 flex items-center gap-1">
                                    <ShieldCheck size={12}/> Прокси активен
                                </p>
                            )}
                        </div>
                        
                        {/* DEPLOY INSTRUCTIONS */}
                        <div className="bg-slate-900 rounded-xl p-4 border border-slate-800">
                           <div className="flex items-center gap-2 mb-3">
                                <Rocket size={16} className="text-teal-400"/>
                                <h4 className="text-xs font-bold text-slate-300">Как запустить без VPN?</h4>
                           </div>
                           <p className="text-[10px] text-slate-400 leading-relaxed mb-3">
                               Вам нужен свой сервер в Европе/США, который будет пересылать запросы в Google. Мы уже подготовили код (<code>server.js</code>).
                           </p>
                           
                           <ol className="text-[10px] text-slate-400 list-decimal pl-4 space-y-2 mb-3">
                                <li>
                                    <span className="text-white">Залейте этот код на GitHub.</span>
                                    <br/>(Создайте репозиторий и загрузите файлы проекта)
                                </li>
                                <li>
                                    <span className="text-white">Разверните на Render.com (Бесплатно).</span>
                                    <br/>Создайте "New Web Service", подключите репозиторий. Команда старта: <code>node server.js</code>.
                                </li>
                                <li>
                                    <span className="text-white">Скопируйте полученный URL.</span>
                                    <br/>Вставьте его в поле выше (например <code>https://lingobro.onrender.com</code>).
                                </li>
                           </ol>
                           <a href="https://render.com" target="_blank" className="inline-flex items-center gap-1 text-[10px] text-blue-400 hover:text-blue-300">
                               Перейти на Render <ExternalLink size={10} />
                           </a>
                        </div>

                        <div className="pt-2 flex flex-col gap-3">
                            <button 
                                onClick={saveSettings}
                                className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all"
                            >
                                <CheckCircle2 size={18} className="text-teal-400" /> Сохранить настройки
                            </button>
                            
                            <button 
                                onClick={resetEverything}
                                className="w-full text-xs text-red-500 hover:text-red-400 py-2 flex items-center justify-center gap-1 transition-colors"
                            >
                                <Trash2 size={12} /> Сбросить настройки
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                /* MAIN VIEW */
                <div className="flex-1 flex flex-col bg-[#020617] relative overflow-hidden">
                    
                    {status === 'intro' && (
                        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center animate-fade-in-up">
                            <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Mic size={32} className="text-teal-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Начни разговор</h3>
                            <p className="text-slate-400 text-sm max-w-xs mx-auto mb-8">
                                Скажи "Hello!" или "Let's practice".
                                <br/><span className="text-xs text-slate-500 mt-2 block">(Доступно {MAX_TURNS - turnCount} бесплатных фраз)</span>
                            </p>
                            <button 
                                onClick={startSession}
                                className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-teal-500/25 transition-all transform hover:scale-105 flex items-center gap-2"
                            >
                                <Mic size={18} /> Start Chat
                            </button>
                            {proxyUrl ? (
                                <div className="mt-4 flex items-center gap-1.5 text-[10px] text-teal-500/70 bg-teal-500/10 px-2 py-1 rounded">
                                    <Server size={10} /> Прокси активен
                                </div>
                            ) : (
                                <div className="mt-4 flex items-center gap-1.5 text-[10px] text-yellow-500/70 bg-yellow-500/10 px-2 py-1 rounded">
                                    <AlertTriangle size={10} /> Прямое подключение (Нужен VPN)
                                </div>
                            )}
                        </div>
                    )}

                    {status === 'connecting' && (
                        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                            <Loader2 className="w-12 h-12 text-teal-500 animate-spin mx-auto mb-4" />
                            <p className="text-slate-400 text-sm">Подключаем нейросеть...</p>
                        </div>
                    )}

                    {status === 'connected' && (
                        <div className="flex-1 flex flex-col relative h-full">
                            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                {messages.map((msg) => (
                                    <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}>
                                        {msg.role === 'ai' && (
                                            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0 mr-2 mt-2">
                                                {isSpeaking && msg.id === messages[messages.length-1].id ? (
                                                     <Volume2 size={14} className="text-teal-400 animate-pulse" />
                                                ) : (
                                                    <span className="text-[10px] font-bold text-teal-500">AI</span>
                                                )}
                                            </div>
                                        )}
                                        <div className={`max-w-[80%] p-3 rounded-2xl ${
                                            msg.role === 'user' 
                                                ? 'bg-teal-600 rounded-tr-none text-white' 
                                                : 'bg-slate-800 rounded-tl-none text-slate-200 border border-slate-700'
                                        }`}>
                                            <p className="text-sm">{msg.text}</p>
                                        </div>
                                    </div>
                                ))}
                                <div ref={messagesEndRef} className="h-4"></div>
                            </div>

                            <div className="p-4 bg-[#0f172a] border-t border-slate-800 flex items-center justify-center gap-4">
                                 <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${isSpeaking ? 'bg-teal-500/20 text-teal-400' : 'bg-slate-800 text-slate-500'}`}>
                                    {isSpeaking ? <Volume2 size={24} className="animate-pulse" /> : <Mic size={24} />}
                                 </div>
                                 <button onClick={stopSession} className="absolute right-4 p-2 bg-red-500/10 text-red-400 rounded-full hover:bg-red-500/20 transition-colors">
                                    <StopCircle size={20} />
                                 </button>
                            </div>
                        </div>
                    )}

                    {status === 'error' && (
                        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center animate-fade-in">
                             <div className="w-16 h-16 bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                <X size={32} className="text-red-500" />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2">Ошибка сети</h4>
                            <p className="text-red-300 mb-2 max-w-xs text-sm">{errorMessage}</p>
                            
                            <p className="text-[10px] text-slate-500 mb-6 max-w-xs">
                                Google блокирует подключения из РФ. 
                                Чтобы исправить это, настройте Proxy в меню настроек (шестеренка).
                            </p>

                            <div className="flex gap-3">
                                <button onClick={() => setStatus('intro')} className="px-5 py-2 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition-colors text-sm">
                                    Отмена
                                </button>
                                <button onClick={startSession} className="px-5 py-2 rounded-xl bg-red-600 text-white hover:bg-red-500 transition-colors text-sm font-bold">
                                    Повторить
                                </button>
                            </div>
                        </div>
                    )}

                    {status === 'finished' && (
                        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center animate-fade-in bg-slate-950/80 backdrop-blur-sm z-20">
                             <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-teal-500/30">
                                <Lock size={32} className="text-teal-400" />
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-2">Лимит исчерпан</h4>
                            <p className="text-slate-400 text-sm mb-8 max-w-xs mx-auto leading-relaxed">
                                Ты потратил все бесплатные сообщения ({MAX_TURNS}). Чтобы болтать без ограничений, скачай полное приложение LingoBro!
                            </p>
                            
                            <div className="w-full space-y-3">
                                <button className="w-full bg-teal-500 hover:bg-teal-400 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-teal-500/25 transform hover:scale-[1.02]">
                                    <Download size={20} /> Скачать на iPhone
                                </button>
                                <button className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all border border-slate-700">
                                    <Download size={20} /> Скачать на Android
                                </button>
                            </div>
                            
                            <button onClick={handleModalClose} className="mt-6 text-xs text-slate-500 hover:text-white uppercase tracking-wider font-medium">Закрыть</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    </div>
  );
};