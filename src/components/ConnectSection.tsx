import { useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Globe,
  Linkedin,
  Mail,
} from 'lucide-react';
import {
  PORTFOLIO_PROFILE,
  PROFESSIONAL_PROFILES,
} from '../data/portfolioData';

interface ConnectSectionProps {
  onOpenContact: () => void;
}

function getProfileIcon(id: string) {
  switch (id) {
    case 'github':
      return Github;
    case 'linkedin':
      return Linkedin;
    case 'mastodon':
      return Globe;
    default:
      return ArrowUpRight;
  }
}

export function ConnectSection({ onOpenContact }: ConnectSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="connect"
      className="border-t border-zinc-200 bg-white py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-zinc-200 pb-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-xs font-medium text-[#2563EB]">
              Professional Profiles & Contact
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              Elsewhere & Direct Contact
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-zinc-600">
              Explore open-source repositories, technical writing, and full career history across my professional profiles, or reach out directly.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 lg:col-span-5 lg:justify-end">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] whitespace-nowrap shrink-0"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-emerald-700" aria-hidden="true" />
                  <span>Copied {PORTFOLIO_PROFILE.email}</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-zinc-500" aria-hidden="true" />
                  <span>{PORTFOLIO_PROFILE.email}</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1D4ED8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 whitespace-nowrap shrink-0"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              <span>Send Inquiry</span>
            </button>
          </div>
        </div>

        {/* Professional profile directory */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROFESSIONAL_PROFILES.map((profile) => {
            const Icon = getProfileIcon(profile.id);
            return (
              <a
                key={profile.id}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-zinc-200 bg-[#FAFAFA] p-6 transition-colors duration-150 hover:border-zinc-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <Icon
                      className="h-5 w-5 text-zinc-700 transition-colors group-hover:text-[#2563EB]"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    <ArrowUpRight
                      className="h-4 w-4 text-zinc-400 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-950"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-zinc-950">
                    {profile.platform}
                  </h3>
                  <div className="mt-0.5 font-mono text-xs text-zinc-500">
                    {profile.handle}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                    {profile.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
