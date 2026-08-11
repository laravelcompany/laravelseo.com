import React, { useState, useRef, useEffect } from 'react';
import type { FormEvent } from 'react';
import { Send, Bot, User, ChevronDown, Loader2, Search, Phone, Video, MoreVertical, Smile, Paperclip } from 'lucide-react';

const MODELS = [
  { id: 'hf.co/laravelcompany/laravelseo:latest', name: 'Laravel SEO (3.2B)' },
  { id: 'hf.co/laravelcompany/laravelmail:latest', name: 'Laravel Mail (3.2B)' },
  { id: 'neural-chat:7b', name: 'Neural Chat (7B)' },
] as const;

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const EXAMPLE_CONVOS = [
  { name: 'SEO Audit Help', preview: 'How do I audit my Laravel site?', time: '2m' },
  { name: 'Meta Tags Guide', preview: 'Generate optimized meta tags...', time: '1h' },
  { name: 'Schema Markup', preview: 'Add JSON-LD to my pages...', time: '3h' },
];

function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [model, setModel] = useState<string>(MODELS[0].id);
  const [isStreaming, setIsStreaming] = useState(false);
  const [modelDropdownOpen, setModelDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Auto-scrolling intentionally disabled

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setModelDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isStreaming) return;

    const userMessage: Message = { role: 'user', content: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsStreaming(true);

    const assistantMessage: Message = { role: 'assistant', content: '' };
    setMessages((prev) => [...prev, assistantMessage]);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model,
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
          stream: true,
        }),
      });

      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }

      const reader = res.body?.getReader();
      if (!reader) throw new Error('No response body');

      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed) continue;
          try {
            const json = JSON.parse(trimmed);
            if (json.message?.content) {
              setMessages((prev) => {
                const updated = [...prev];
                const last = updated[updated.length - 1];
                if (last.role === 'assistant') {
                  last.content += json.message.content;
                }
                return [...updated];
              });
            }
          } catch {
            // skip malformed JSON lines
          }
        }
      }
    } catch (err) {
      setMessages((prev) => {
        const updated = [...prev];
        const last = updated[updated.length - 1];
        if (last.role === 'assistant') {
          last.content = `Error: ${err instanceof Error ? err.message : 'Failed to get response'}. Please try again.`;
        }
        return [...updated];
      });
    } finally {
      setIsStreaming(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const selectedModel = MODELS.find((m) => m.id === model);

  return (
    <div className="w-full border border-slate-700/50 rounded-xl overflow-hidden bg-slate-900/80">
      <div className="grid grid-cols-1 md:grid-cols-3 h-[600px]">
        {/* Sidebar */}
        <div className={`md:col-span-1 border-r border-slate-700/50 flex flex-col min-h-0 bg-slate-900/60 ${sidebarOpen ? '' : 'hidden md:flex'}`}>
          <div className="p-4 border-b border-slate-700/50">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="block w-full rounded-lg border border-slate-700 bg-slate-800/50 pl-10 pr-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/50 focus:outline-none transition-all"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            <ul className="divide-y divide-slate-700/50">
              {EXAMPLE_CONVOS.map((convo, i) => (
                <li
                  key={i}
                  className={`p-4 hover:bg-slate-800/50 cursor-pointer transition-colors ${i === 0 ? 'bg-violet-500/10' : ''}`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center">
                        <Bot className="w-5 h-5 text-violet-400" />
                      </div>
                      <span className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-slate-900 ${i === 0 ? 'bg-green-400' : 'bg-slate-500'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-200 truncate">{convo.name}</p>
                      <p className="text-sm text-slate-500 truncate">{convo.preview}</p>
                    </div>
                    <span className="text-xs font-medium text-slate-500">{convo.time}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="md:col-span-2 flex flex-col min-h-0 bg-slate-900/40">
          {/* Chat Header */}
          <div className="p-4 bg-slate-900/80 border-b border-slate-700/50 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-violet-400" />
                </div>
                <span className="absolute -top-0.5 -left-0.5 w-3.5 h-3.5 rounded-full border-2 border-slate-900 bg-green-400" />
              </div>
              <div>
                <h3 className="text-base font-medium text-slate-200">SEO Agent</h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-green-400">Active now</span>
                  <span className="text-xs text-slate-600">|</span>
                  <span className="text-xs text-slate-500">{selectedModel?.name}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setModelDropdownOpen(!modelDropdownOpen)}
                  className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-1.5 text-xs text-slate-300 hover:border-slate-600 transition-colors"
                >
                  {selectedModel?.name}
                  <ChevronDown className={`w-3 h-3 transition-transform ${modelDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {modelDropdownOpen && (
                  <div className="absolute right-0 z-10 mt-1 w-56 rounded-lg border border-slate-700 bg-slate-800 shadow-xl">
                    {MODELS.map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => {
                          setModel(m.id);
                          setModelDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-sm transition-colors ${
                          m.id === model
                            ? 'bg-violet-600/20 text-violet-300'
                            : 'text-slate-300 hover:bg-slate-700'
                        } ${m.id === MODELS[0].id ? 'rounded-t-lg' : ''} ${m.id === MODELS[MODELS.length - 1].id ? 'rounded-b-lg' : ''}`}
                      >
                        {m.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button type="button" className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full border border-slate-700 bg-slate-800/50 text-slate-400 hover:text-slate-200 hover:border-slate-600 transition-colors">
                <Phone className="w-4 h-4" />
              </button>
              <button type="button" className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full border border-slate-700 bg-slate-800/50 text-slate-400 hover:text-slate-200 hover:border-slate-600 transition-colors">
                <Video className="w-4 h-4" />
              </button>
              <button type="button" className="flex items-center justify-center w-8 h-8 rounded-full border border-slate-700 bg-slate-800/50 text-slate-400 hover:text-slate-200 hover:border-slate-600 transition-colors">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-16 h-16 rounded-2xl bg-violet-500/15 flex items-center justify-center mb-4 border border-violet-500/20">
                  <Bot className="w-8 h-8 text-violet-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-200 mb-2">SEO Agent</h3>
                <p className="text-slate-500 max-w-sm text-sm">
                  Ask me about Laravel SEO optimization, meta tags, structured data, site audits, or any SEO strategy questions.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-6 w-full max-w-md">
                  {[
                    'How do I add meta tags in Laravel?',
                    'What is JSON-LD structured data?',
                    'Run an SEO audit on my site',
                    'Best SEO practices for Laravel',
                  ].map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => {
                        setInput(suggestion);
                        inputRef.current?.focus();
                      }}
                      className="text-left px-3 py-2 rounded-lg border border-slate-700/50 bg-slate-800/30 text-sm text-slate-400 hover:bg-slate-800 hover:text-slate-200 hover:border-slate-600 transition-all"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-4 h-4 text-violet-400" />
                  </div>
                )}
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-violet-600 text-white rounded-br-sm'
                      : 'bg-slate-800/80 text-slate-200 border border-slate-700/50 rounded-bl-sm'
                  }`}
                >
                  <div className="whitespace-pre-wrap break-words">{msg.content}</div>
                  {msg.role === 'assistant' && msg.content === '' && isStreaming && i === messages.length - 1 && (
                    <div className="flex items-center gap-1.5 text-slate-400 mt-1">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Thinking...</span>
                    </div>
                  )}
                </div>
                {msg.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-slate-700/80 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-4 h-4 text-slate-300" />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-4 bg-slate-900/80 border-t border-slate-700/50">
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full border border-slate-700 bg-slate-800/50 text-slate-400 hover:text-slate-200 hover:border-slate-600 transition-colors shrink-0"
              >
                <Paperclip className="w-4 h-4" />
              </button>
              <button
                type="button"
                className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full border border-slate-700 bg-slate-800/50 text-slate-400 hover:text-slate-200 hover:border-slate-600 transition-colors shrink-0"
              >
                <Smile className="w-4 h-4" />
              </button>
              <div className="flex-1 relative">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  rows={1}
                  className="block w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/50 focus:outline-none transition-all resize-none"
                  style={{ minHeight: '42px', maxHeight: '120px' }}
                />
              </div>
              <button
                type="submit"
                disabled={!input.trim() || isStreaming}
                className="rounded-xl bg-linear-to-r from-violet-600 to-pink-600 px-4 py-2.5 font-medium text-white transition-all hover:from-violet-500 hover:to-pink-500 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shrink-0"
              >
                {isStreaming ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ChatInterface);
