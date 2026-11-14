import { useState } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import {
  PORTFOLIO_PROFILE,
  PROOF_METRICS,
  ProjectItem,
} from './data/portfolioData';
import { Header } from './components/Header';
import { ImageWithFallback } from './components/ImageWithFallback';
import { ProjectsSection } from './components/ProjectsSection';
import { BiographySection } from './components/BiographySection';
import { SkillsSection } from './components/SkillsSection';
import { ConnectSection } from './components/ConnectSection';
import { ProjectModal } from './components/ProjectModal';
import { ContactModal } from './components/ContactModal';

const MARQUEE_PHRASES = [
  'Selected Works',
  'MERN Stack',
  'Full-Stack Web Apps',
  'Firebase & AI',
  'Google Cloud',
  'UI Prototyping',
];

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-[#FAFAFA] text-zinc-950">
      <Header onOpenContact={() => setContactOpen(true)} />

      <main>
        {/* Hero Split */}
        <section className="mx-auto max-w-6xl px-6 pb-16 pt-12 lg:px-8 lg:pb-20 lg:pt-16">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left column: Typographic hierarchy */}
            <div className="flex flex-col justify-between py-2 lg:col-span-7">
              <div>
                <p className="text-sm font-medium text-zinc-600">
                  {PORTFOLIO_PROFILE.roleTitle} · {PORTFOLIO_PROFILE.location}
                </p>

                <h1 className="mt-5 font-display text-[clamp(2.25rem,4vw,3.75rem)] font-semibold leading-[1.06] tracking-tight text-zinc-950">
                  {PORTFOLIO_PROFILE.headline}
                </h1>

                <p className="mt-6 max-w-xl text-base leading-[1.7] text-zinc-600 sm:text-lg">
                  {PORTFOLIO_PROFILE.lead}
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#1D4ED8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 whitespace-nowrap shrink-0"
                >
                  <span>View Selected Work</span>
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </a>

                <a
                  href="#biography"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-800 transition-colors duration-150 hover:border-zinc-400 hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] whitespace-nowrap shrink-0"
                >
                  <span>Read Biography</span>
                  <ArrowRight className="h-4 w-4 text-zinc-500" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Right column: Matching-height editorial portrait */}
            <div className="lg:col-span-5">
              <figure className="relative aspect-square h-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 lg:aspect-auto lg:min-h-[440px]">
                <ImageWithFallback
                  src={PORTFOLIO_PROFILE.portrait}
                  alt={PORTFOLIO_PROFILE.portraitAlt}
                  fallbackTitle={PORTFOLIO_PROFILE.name}
                  fallbackSubtitle={PORTFOLIO_PROFILE.roleTitle}
                  className="h-full w-full object-cover object-top"
                />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-5 pb-4 pt-12 text-xs font-medium text-white">
                  {PORTFOLIO_PROFILE.portraitCaption}
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Full-Width 4-Column Quantitative Proof Strip */}
        <section
          aria-label="Key career metrics"
          className="border-t border-b border-zinc-200 bg-white"
        >
          <div className="mx-auto grid max-w-6xl grid-cols-2 divide-y divide-zinc-200 px-6 sm:divide-y-0 sm:divide-x lg:grid-cols-4 lg:px-8">
            {PROOF_METRICS.map((metric, idx) => (
              <div
                key={metric.label}
                className={`py-6 sm:px-6 lg:py-8 ${
                  idx === 0 ? 'sm:pl-0' : ''
                } ${idx === PROOF_METRICS.length - 1 ? 'sm:pr-0' : ''} ${
                  idx % 2 === 0 ? 'pr-4' : 'pl-4'
                }`}
              >
                <div className="font-mono text-2xl font-medium tabular-nums tracking-tight text-zinc-950 sm:text-3xl">
                  {metric.value}
                </div>
                <div className="mt-1.5 text-xs leading-snug text-zinc-500 sm:text-sm">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Subtle Editorial Section Divider Ribbon */}
        <div
          aria-hidden="true"
          className="overflow-hidden border-b border-zinc-200 bg-[#FAFAFA] py-3"
        >
          <div className="animate-editorial-marquee flex w-max items-center gap-8 whitespace-nowrap text-xs font-medium text-zinc-400">
            {[...MARQUEE_PHRASES, ...MARQUEE_PHRASES, ...MARQUEE_PHRASES].map(
              (phrase, i) => (
                <span key={`${phrase}-${i}`} className="inline-flex items-center gap-8">
                  <span>{phrase}</span>
                  <span>·</span>
                </span>
              )
            )}
          </div>
        </div>

        <ProjectsSection onSelectProject={setSelectedProject} />
        <BiographySection />
        <SkillsSection />
        <ConnectSection onOpenContact={() => setContactOpen(true)} />
      </main>

      <footer className="border-t border-zinc-200 bg-[#FAFAFA] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center lg:px-8">
          <div className="text-xs text-zinc-500">
            © 2026 {PORTFOLIO_PROFILE.name} · {PORTFOLIO_PROFILE.location}
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-zinc-600">
            <a href="#projects" className="hover:text-zinc-950 whitespace-nowrap shrink-0">
              Projects
            </a>
            <a href="#biography" className="hover:text-zinc-950 whitespace-nowrap shrink-0">
              Biography
            </a>
            <a href="#skills" className="hover:text-zinc-950 whitespace-nowrap shrink-0">
              Skills
            </a>
            <a href="#connect" className="hover:text-zinc-950 whitespace-nowrap shrink-0">
              Connect
            </a>
            <a
              href="#top"
              className="text-zinc-950 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-950 whitespace-nowrap shrink-0"
            >
              Back to top
            </a>
          </div>
        </div>
      </footer>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
}
