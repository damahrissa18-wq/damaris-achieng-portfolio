import { FormEvent, useEffect, useState } from 'react';
import { Check, Copy, Mail, Send, X } from 'lucide-react';
import { PORTFOLIO_PROFILE } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Full-Stack Web Development');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please complete your name, email address, and project summary.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setError('');
    setSubmitted(false);
    onClose();
  };

  const mailtoHref = `mailto:${PORTFOLIO_PROFILE.email}?subject=${encodeURIComponent(
    `[Portfolio Inquiry] ${topic} — ${name || 'Prospective Collaboration'}`
  )}&body=${encodeURIComponent(message)}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/70 p-4 backdrop-blur-xs sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close contact dialog"
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="pr-10">
          <p className="text-xs font-medium text-[#2563EB]">Direct Inquiry</p>
          <h2
            id="contact-modal-title"
            className="mt-1 font-display text-2xl font-semibold tracking-tight text-zinc-950"
          >
            Start a Conversation
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">
            Available for advisory engagements, design system architecture, and principal-level product collaborations.
          </p>
        </div>

        {/* Direct copy email strip */}
        <div className="mt-5 flex items-center justify-between gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3">
          <div className="flex min-w-0 items-center gap-2.5">
            <Mail className="h-4 w-4 shrink-0 text-zinc-500" aria-hidden="true" />
            <span className="truncate font-mono text-xs text-zinc-800">
              {PORTFOLIO_PROFILE.email}
            </span>
          </div>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex min-h-[36px] shrink-0 items-center gap-1.5 rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-xs font-medium text-zinc-800 transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] whitespace-nowrap"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-700" aria-hidden="true" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 text-zinc-500" aria-hidden="true" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>

        {submitted ? (
          <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-zinc-950">
              <Check className="h-4 w-4 text-[#2563EB]" aria-hidden="true" />
              <span>Inquiry Draft Prepared</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              Thank you, {name}. Your note regarding <span className="font-medium text-zinc-900">{topic}</span> is ready to send via your default mail client, or you can copy {PORTFOLIO_PROFILE.email} above.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={mailtoHref}
                className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-[#2563EB] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1D4ED8] whitespace-nowrap shrink-0"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                <span>Open in Mail App</span>
              </a>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex min-h-[42px] items-center rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 whitespace-nowrap shrink-0"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
            <div>
              <label htmlFor="contact-name" className="block text-xs font-medium text-zinc-700">
                Your Name
              </label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jordan Chen"
                className="mt-1.5 w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-sm text-zinc-950 placeholder:text-zinc-400 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-xs font-medium text-zinc-700">
                Email Address
              </label>
              <input
                id="contact-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jordan@company.com"
                className="mt-1.5 w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-sm text-zinc-950 placeholder:text-zinc-400 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
              />
            </div>

            <div>
              <label htmlFor="contact-topic" className="block text-xs font-medium text-zinc-700">
                Engagement Focus
              </label>
              <select
                id="contact-topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-sm text-zinc-950 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
              >
                <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                <option value="MERN & Firebase MVP">MERN & Firebase MVP</option>
                <option value="UI/UX & Frontend Collaboration">UI/UX & Frontend Collaboration</option>
                <option value="Open-Source & Community">Open-Source & Community</option>
              </select>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-medium text-zinc-700">
                Project Context
              </label>
              <textarea
                id="contact-message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share a brief overview of your timeline, team, and technical goals."
                className="mt-1.5 w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-sm text-zinc-950 placeholder:text-zinc-400 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
              />
            </div>

            {error && (
              <p role="alert" className="text-xs font-medium text-rose-700">
                {error}
              </p>
            )}

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex min-h-[42px] items-center rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 whitespace-nowrap shrink-0"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-[#2563EB] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1D4ED8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 whitespace-nowrap shrink-0"
              >
                <span>Prepare Message</span>
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
