import { useState, useRef, useEffect, type FormEvent } from 'react';
import { Send, Bot, User, ChevronDown, Loader2 } from 'lucide-react';

const API_BASE = 'https://ai.izdrail.com';

const MODELS = [
  { id: 'gemma4:e4b', name: 'Gemma 4 (8B)' },
  { id: 'neural-chat:7b', name: 'Neural Chat (7B)' },
  { id: 'hf.co/yannelli/Laravel-11-Llama-3.2-1B-Instruct-GGUF:Q4_K_M', name: 'Llama 3.2 (1B)' },
  { id: 'hf.co/laravelcompany/laravelmail:latest', name: 'Laravel Mail (3.2B)' },
] as const;

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [model, setModel] = useState<string>(MODELS[0].id);
  const [isStreaming, setIsStreaming] = useState(false);
  const [modelDropdownOpen, setModelDropdownOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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
      const res = await fetch(`${API_BASE}/api/chat`, {
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
    <div className="flex flex-col h-[calc(100vh-200px)] min-h-[500px]">
      {/* Model Selector */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-sm text-slate-400">Model:</span>
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setModelDropdownOpen(!modelDropdownOpen)}
            className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 hover:border-slate-600 transition-colors"
          >
            {selectedModel?.name}
            <ChevronDown className={`w-4 h-4 transition-transform ${modelDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          {modelDropdownOpen && (
            <div className="absolute z-10 mt-1 w-64 rounded-lg border border-slate-700 bg-slate-800 shadow-xl">
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
                  }`}
                >
                  {m.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto rounded-xl border border-slate-700 bg-slate-900/50 p-4 space-y-4">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="w-16 h-16 rounded-2xl bg-violet-500/20 flex items-center justify-center mb-4">
              <Bot className="w-8 h-8 text-violet-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">AI Assistant</h3>
            <p className="text-slate-400 max-w-sm">
              Ask me anything about Laravel SEO, web development, or AI-powered tools.
            </p>
          </div>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.role === 'assistant' && (
              <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center shrink-0 mt-1">
                <Bot className="w-4 h-4 text-violet-400" />
              </div>
            )}
            <div
              className={`max-w-[80%] rounded-xl px-4 py-3 text-sm leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-violet-600 text-white'
                  : 'bg-slate-800 text-slate-200 border border-slate-700'
              }`}
            >
              <div className="whitespace-pre-wrap break-words">{msg.content}</div>
              {msg.role === 'assistant' && msg.content === '' && isStreaming && i === messages.length - 1 && (
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Thinking...</span>
                </div>
              )}
            </div>
            {msg.role === 'user' && (
              <div className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center shrink-0 mt-1">
                <User className="w-4 h-4 text-slate-300" />
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={handleSubmit} className="mt-4 flex gap-3">
        <textarea
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          rows={1}
          className="flex-1 resize-none rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
          style={{ minHeight: '48px', maxHeight: '120px' }}
        />
        <button
          type="submit"
          disabled={!input.trim() || isStreaming}
          className="rounded-xl bg-linear-to-r from-violet-600 to-pink-600 px-4 py-3 font-medium text-white transition-all hover:from-violet-500 hover:to-pink-500 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isStreaming ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Send className="w-5 h-5" />
          )}
        </button>
      </form>
    </div>
  );
}
