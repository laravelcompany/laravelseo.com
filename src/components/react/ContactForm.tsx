import { useState, type FormEvent } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, phone })
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong');
        return;
      }

      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
      setPhone('');
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === 'success' && (
        <div class="rounded-lg border border-emerald-700 bg-emerald-900/50 p-4 text-emerald-300 text-sm">
          Your message has been sent successfully! We will get back to you soon.
        </div>
      )}
      {status === 'error' && (
        <div class="rounded-lg border border-red-700 bg-red-900/50 p-4 text-red-300 text-sm">
          {errorMsg}
        </div>
      )}
      <div>
        <label for="name" class="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          class="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
          placeholder="John Doe"
        />
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-slate-300 mb-2">Your Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          class="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
          placeholder="john@example.com"
        />
      </div>
      <div>
        <label for="phone" class="block text-sm font-medium text-slate-300 mb-2">Phone (optional)</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          class="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
          placeholder="+1 (555) 123-4567"
        />
      </div>
      <div>
        <label for="message" class="block text-sm font-medium text-slate-300 mb-2">Message</label>
        <textarea
          id="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          class="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
          placeholder="How can we help you?"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        class="w-full rounded-lg bg-linear-to-r from-violet-600 to-pink-600 px-6 py-3 font-semibold text-white transition-all hover:from-violet-500 hover:to-pink-500 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
