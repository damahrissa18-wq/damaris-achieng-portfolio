import { BIOGRAPHY, EXPERIENCE } from '../data/portfolioData';

export function BiographySection() {
  return (
    <section
      id="biography"
      className="border-t border-zinc-200 bg-white py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="border-b border-zinc-200 pb-8">
          <p className="text-xs font-medium text-[#2563EB]">Background & Journey</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            Biography & Experience
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left column: Narrative & Experience */}
          <div className="lg:col-span-7">
            <div className="max-w-[65ch] space-y-5 text-base leading-[1.7] text-zinc-700">
              {BIOGRAPHY.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-14">
              <h3 className="font-display text-xl font-semibold tracking-tight text-zinc-950">
                Journey & Milestones
              </h3>
              <div className="mt-6 divide-y divide-zinc-200 border-t border-b border-zinc-200">
                {EXPERIENCE.map((item) => (
                  <div
                    key={`${item.organization}-${item.period}`}
                    className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-12 sm:gap-6"
                  >
                    <div className="font-mono text-xs font-medium tabular-nums text-zinc-500 sm:col-span-3 sm:pt-1">
                      {item.period}
                    </div>
                    <div className="sm:col-span-9">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h4 className="font-display text-base font-semibold text-zinc-950">
                          {item.role}
                        </h4>
                        <span className="text-xs text-zinc-500">
                          {item.organization} · {item.location}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                        {item.summary}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: Personal Statement, Focus Highlights & Recent Milestones */}
          <div className="space-y-10 lg:col-span-5">
            <figure className="rounded-2xl border border-zinc-200 bg-[#FAFAFA] p-6 sm:p-8">
              <blockquote className="text-sm leading-relaxed text-zinc-700 sm:text-[15px]">
                “{BIOGRAPHY.quote.text}”
              </blockquote>
              <figcaption className="mt-5 border-t border-zinc-200 pt-4">
                <div className="text-sm font-semibold text-zinc-950">
                  {BIOGRAPHY.quote.attribution}
                </div>
                <div className="mt-0.5 text-xs text-zinc-500">
                  {BIOGRAPHY.quote.context}
                </div>
              </figcaption>
            </figure>

            {/* Focus Highlights */}
            <div className="border-t border-zinc-200 pt-8">
              <h3 className="font-display text-lg font-semibold tracking-tight text-zinc-950">
                Key Highlights
              </h3>
              <div className="mt-4 space-y-5">
                {BIOGRAPHY.highlights.map((highlight) => (
                  <div key={highlight.label}>
                    <div className="text-sm font-semibold text-zinc-950">
                      {highlight.label}
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-600">
                      {highlight.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent GitHub Activity */}
            <div className="border-t border-zinc-200 pt-8">
              <h3 className="font-display text-lg font-semibold tracking-tight text-zinc-950">
                Recent GitHub Milestones
              </h3>
              <ul className="mt-4 divide-y divide-zinc-200">
                {BIOGRAPHY.milestones.map((item) => (
                  <li key={item.title} className="py-3.5 first:pt-0 last:pb-0">
                    <div className="font-mono text-xs tabular-nums text-zinc-500">
                      {item.year}
                    </div>
                    <div className="mt-1 text-sm font-medium text-zinc-900">
                      {item.title}
                    </div>
                    <div className="mt-0.5 text-xs text-zinc-500">{item.venue}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
