import React, { useEffect, useState } from 'react';
import { AlertCircle, CheckCircle2, Loader2, Mail, Send, X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  fallbackEmail: string;
  formspreeEndpoint: string;
}

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  fallbackEmail,
  formspreeEndpoint,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && status !== 'submitting') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, status]);

  if (!isOpen) return null;

  const resetForm = () => {
    setStatus('idle');
    setErrorMessage('');
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleClose = () => {
    if (status === 'submitting') return;
    if (status === 'success') {
      resetForm();
    } else {
      setStatus('idle');
      setErrorMessage('');
    }
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) return;

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
          _subject: `Portfolio Message from ${trimmedName}`,
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok) {
        setStatus('success');
        return;
      }

      const apiError =
        data && Array.isArray(data.errors) && data.errors.length > 0
          ? data.errors.map((err: { message?: string }) => err.message).filter(Boolean).join(', ')
          : 'Failed to send message. Please try again or email directly.';

      setStatus('error');
      setErrorMessage(apiError);
    } catch {
      setStatus('error');
      setErrorMessage('Network error while sending. Please check your connection or email directly.');
    }
  };

  const mailtoSubject = encodeURIComponent(`Portfolio Message from ${name || 'Visitor'}`);
  const mailtoBody = encodeURIComponent(`${message}\n\n— ${name} (${email})`);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={handleClose}
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
          onClick={handleClose}
          disabled={status === 'submitting'}
          aria-label="Close contact dialog"
          className="absolute top-5 right-5 p-2 rounded-full bg-black/60 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer disabled:opacity-50"
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

        {status === 'success' ? (
          <div className="space-y-6 py-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#caff00]/10 border border-[#caff00]/30 text-slate-200">
              <CheckCircle2 size={22} className="text-[#caff00] shrink-0 mt-0.5" />
              <div className="text-sm space-y-1">
                <p className="font-bold text-white">Message sent!</p>
                <p className="text-slate-300">
                  Thanks for reaching out, {name.trim()}. Your message has been delivered and I&apos;ll get back to you soon.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={resetForm}
                className="btn-secondary text-sm cursor-pointer"
              >
                Send Another
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="btn-primary text-sm cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {status === 'error' && errorMessage && (
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-200 text-xs">
                <AlertCircle size={18} className="text-red-400 shrink-0 mt-0.5" />
                <div className="space-y-1.5">
                  <p>{errorMessage}</p>
                  <a
                    href={`mailto:${fallbackEmail}?subject=${mailtoSubject}&body=${mailtoBody}`}
                    className="inline-flex items-center gap-1.5 text-[#caff00] hover:underline font-medium"
                  >
                    <Mail size={14} /> Send via Email App instead
                  </a>
                </div>
              </div>
            )}

            <div>
              <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                disabled={status === 'submitting'}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-white/10 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-[#caff00] transition-colors disabled:opacity-60"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                disabled={status === 'submitting'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-white/10 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-[#caff00] transition-colors disabled:opacity-60"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                disabled={status === 'submitting'}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project, idea, or opportunity..."
                className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-white/10 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-[#caff00] transition-colors resize-none disabled:opacity-60"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleClose}
                disabled={status === 'submitting'}
                className="btn-secondary text-sm cursor-pointer disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-primary text-sm cursor-pointer disabled:opacity-70"
              >
                {status === 'submitting' ? (
                  <>
                    Sending... <Loader2 size={16} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
