import { useEffect } from 'react';
import { ArrowUpRight, Github, X } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';
import { ImageWithFallback } from './ImageWithFallback';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

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
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/70 p-4 backdrop-blur-xs sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-zinc-200 bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-white/95 text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="aspect-[16/10] w-full overflow-hidden border-b border-zinc-200 bg-zinc-100">
          <ImageWithFallback
            src={project.image}
            alt={project.imageAlt}
            fallbackTitle={project.title}
            fallbackSubtitle={project.categoryLabel}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500">
            <span>{project.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums">{project.year}</span>
            <span aria-hidden="true">·</span>
            <span>{project.clientOrOrg}</span>
            <span aria-hidden="true">·</span>
            <span>{project.role}</span>
          </div>

          <h2
            id="project-modal-title"
            className="mt-3 font-display text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl"
          >
            {project.title}
          </h2>

          <p className="mt-4 text-base leading-relaxed text-zinc-700">{project.summary}</p>

          <div className="mt-6 border-t border-zinc-200 pt-6">
            <h3 className="text-sm font-semibold text-zinc-950">Architecture & Implementation</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              {project.architectureNotes}
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 border-t border-zinc-200 pt-6 sm:grid-cols-3">
            {project.outcomes.map((outcome) => (
              <div key={outcome.label}>
                <div className="font-mono text-xl font-medium tabular-nums text-zinc-950">
                  {outcome.value}
                </div>
                <div className="mt-1 text-xs text-zinc-500">{outcome.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-zinc-200 pt-6">
            <div className="text-xs font-medium text-zinc-500">Core Stack</div>
            <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-zinc-800">
              {project.stack.map((tech, index) => (
                <span key={tech} className="inline-flex items-center gap-2">
                  <span>{tech}</span>
                  {index < project.stack.length - 1 && (
                    <span className="text-zinc-300" aria-hidden="true">
                      /
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-zinc-200 pt-6">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1D4ED8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 whitespace-nowrap shrink-0"
            >
              <span>Inspect Case Study</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[42px] items-center gap-2 rounded-lg border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 whitespace-nowrap shrink-0"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              <span>Source Repository</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
