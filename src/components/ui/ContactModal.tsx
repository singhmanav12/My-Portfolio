import React, { useEffect, useState } from 'react';
import { CheckCircle2, Mail, Send, X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  fallbackEmail: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, fallbackEmail }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
    onClose();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  const mailtoSubject = encodeURIComponent(`Portfolio Message from ${name}`);
  const mailtoBody = encodeURIComponent(`${message}\n\n— ${name} (${email})`);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={handleResetAndClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        className="glass-card bg-[#111111] border border-white/15 max-w-lg w-full overflow-hidden shadow-2xl p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleResetAndClose}
          aria-label="Close contact dialog"
          className="absolute top-5 right-5 p-2 rounded-full bg-black/60 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        <div className="mb-6 pr-10">
          <p className="text-xs font-mono uppercase tracking-widest text-[#caff00] mb-2">
            Direct Message
          </p>
          <h3 id="contact-modal-title" className="text-3xl font-black uppercase tracking-tight text-white">
            Let's Talk
          </h3>
          <p className="text-sm text-slate-400 mt-2">
            Have an idea, project, or opportunity? Drop a message below.
          </p>
        </div>

        {submitted ? (
          <div className="space-y-5 py-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#caff00]/10 border border-[#caff00]/30 text-slate-200">
              <CheckCircle2 size={22} className="text-[#caff00] shrink-0 mt-0.5" />
              <div className="text-sm space-y-1">
                <p className="font-bold text-white">Message captured (UI preview)</p>
                <p className="text-slate-300">
                  Backend storage/delivery isn&apos;t connected yet, so this message hasn&apos;t been sent to an inbox or database.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <a
                href={`mailto:${fallbackEmail}?subject=${mailtoSubject}&body=${mailtoBody}`}
                className="btn-secondary text-sm"
              >
                <Mail size={16} /> Send via Email App
              </a>
              <button
                type="button"
                onClick={handleResetAndClose}
                className="btn-primary text-sm cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-white/10 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-[#caff00] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-white/10 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-[#caff00] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project, idea, or opportunity..."
                className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-white/10 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-[#caff00] transition-colors resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="btn-secondary text-sm cursor-pointer"
              >
                Cancel
              </button>
              <button type="submit" className="btn-primary text-sm cursor-pointer">
                Send Message <Send size={16} />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
