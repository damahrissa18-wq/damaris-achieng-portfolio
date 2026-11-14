import { useMemo, useState } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import {
  PROJECTS,
  ProjectCategory,
  ProjectItem,
} from '../data/portfolioData';
import { ImageWithFallback } from './ImageWithFallback';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

const FILTER_TABS: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'fullstack', label: 'Full-Stack & MERN' },
  { id: 'web', label: 'Web & Tools' },
  { id: 'cloud', label: 'AI & Cloud' },
];

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return PROJECTS;
    return PROJECTS.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
      <div className="flex flex-col gap-6 border-b border-zinc-200 pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-medium text-[#2563EB]">Selected Works</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            Projects Showcase
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-600">
            Production interfaces, design token compilers, and low-latency tooling built for engineering and operations teams.
          </p>
        </div>

        {/* Interactive segmented filter control */}
        <div
          role="tablist"
          aria-label="Filter projects by discipline"
          className="inline-flex flex-wrap items-center gap-1 self-start rounded-lg bg-zinc-100 p-1 md:self-auto"
        >
          {FILTER_TABS.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(tab.id)}
                className={`min-h-[38px] rounded-md px-3.5 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                  isActive
                    ? 'bg-white text-zinc-950 shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic Bento Grid */}
      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {filteredProjects.map((project, idx) => {
          const isFeaturedSpan = activeCategory === 'all' && idx === 0;
          return (
            <article
              key={project.id}
              className={`group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-colors duration-200 hover:border-zinc-300 ${
                isFeaturedSpan ? 'lg:col-span-2 lg:grid lg:grid-cols-12 lg:items-stretch' : ''
              }`}
            >
              <button
                type="button"
                onClick={() => onSelectProject(project)}
                aria-label={`Open case study for ${project.title}`}
                className={`relative block overflow-hidden bg-zinc-100 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#2563EB] ${
                  isFeaturedSpan ? 'aspect-[16/10] lg:col-span-7 lg:aspect-auto lg:h-full' : 'aspect-[4/3]'
                }`}
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.imageAlt}
                  fallbackTitle={project.title}
                  fallbackSubtitle={project.categoryLabel}
                  className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                />
              </button>

              <div
                className={`flex flex-1 flex-col justify-between p-6 sm:p-8 ${
                  isFeaturedSpan ? 'lg:col-span-5' : ''
                }`}
              >
                <div>
                  {/* Zero-pill unboxed metadata */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500">
                    <span>{project.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">{project.year}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.clientOrOrg}</span>
                  </div>

                  <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-zinc-950 sm:text-2xl">
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="text-left transition-colors hover:text-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-sm"
                    >
                      {project.title}
                    </button>
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-[15px]">
                    {project.summary}
                  </p>

                  {/* Measurable outcome strip */}
                  <div className="mt-6 grid grid-cols-3 gap-4 border-t border-zinc-100 pt-5">
                    {project.outcomes.map((outcome) => (
                      <div key={outcome.label}>
                        <div className="font-mono text-sm font-medium tabular-nums text-zinc-950 sm:text-base">
                          {outcome.value}
                        </div>
                        <div className="mt-0.5 text-[11px] leading-snug text-zinc-500">
                          {outcome.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-100 pt-5">
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    {project.stack.slice(0, 3).map((tech, techIndex) => (
                      <span key={tech} className="inline-flex items-center gap-2">
                        <span>{tech}</span>
                        {techIndex < Math.min(project.stack.length, 3) - 1 && (
                          <span aria-hidden="true">·</span>
                        )}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-950 whitespace-nowrap shrink-0"
                    >
                      <Github className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Code</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="inline-flex min-h-[38px] items-center gap-1 rounded-lg bg-zinc-950 px-3.5 py-1.5 text-xs font-medium text-white transition-colors hover:bg-[#2563EB] whitespace-nowrap shrink-0"
                    >
                      <span>Case Study</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
