import { useState } from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';

export function SkillsSection() {
  const [selectedGroupIndex, setSelectedGroupIndex] = useState<string>('all');

  const visibleGroups =
    selectedGroupIndex === 'all'
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((group) => group.index === selectedGroupIndex);

  return (
    <section
      id="skills"
      className="border-t border-zinc-200 bg-[#FAFAFA] py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 border-b border-zinc-200 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium text-[#2563EB]">Technical Matrix</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              Skills & Engineering Capabilities
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-600">
              Core languages, rendering pipelines, and infrastructure practices verified across multi-year production deployments.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter skill disciplines"
            className="inline-flex flex-wrap items-center gap-1 self-start rounded-lg bg-zinc-200/70 p-1 md:self-auto"
          >
            <button
              type="button"
              role="tab"
              aria-selected={selectedGroupIndex === 'all'}
              onClick={() => setSelectedGroupIndex('all')}
              className={`min-h-[38px] rounded-md px-3.5 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                selectedGroupIndex === 'all'
                  ? 'bg-white text-zinc-950 shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              All Disciplines
            </button>
            {SKILL_GROUPS.map((group) => {
              const isActive = selectedGroupIndex === group.index;
              return (
                <button
                  key={group.index}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedGroupIndex(group.index)}
                  className={`min-h-[38px] rounded-md px-3.5 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                    isActive
                      ? 'bg-white text-zinc-950 shadow-xs'
                      : 'text-zinc-600 hover:text-zinc-950'
                  }`}
                >
                  {group.title.split('&')[0].trim()}
                </button>
              );
            })}
          </div>
        </div>

        <div
          className={`mt-10 grid grid-cols-1 gap-6 ${
            visibleGroups.length === 1 ? 'lg:grid-cols-1' : 'lg:grid-cols-3'
          }`}
        >
          {visibleGroups.map((group) => (
            <div
              key={group.index}
              className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8"
            >
              <div>
                <h3 className="font-display text-lg font-semibold tracking-tight text-zinc-950">
                  <span className="mr-2 font-mono text-sm font-medium tabular-nums text-[#2563EB]">
                    {group.index}
                  </span>
                  {group.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {group.description}
                </p>

                <div className="mt-6 divide-y divide-zinc-100 border-t border-zinc-100">
                  {group.items.map((skill) => (
                    <div key={skill.name} className="py-4 last:pb-0">
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="text-sm font-semibold text-zinc-950">
                          {skill.name}
                        </span>
                        <span className="font-mono text-xs tabular-nums text-zinc-500 whitespace-nowrap shrink-0">
                          {skill.context}
                        </span>
                      </div>
                      <p className="mt-1.5 text-xs leading-relaxed text-zinc-600">
                        {skill.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
