import { FadeUp, SectionHeader } from './Reveal';

const experience = [
  { org: 'Stupid Studios', role: 'Founder / Writer / Director', period: '2023 — Now' },
  { org: 'The Gentlemen', role: 'Directed & Edited', period: 'Feature Short · 2026' },
  { org: 'Aval Naan Mazhai', role: 'Writer / Cinematographer', period: 'Romance · 2025' },
  { org: 'Thani Kaattu Raja', role: 'Director / Producer', period: 'Thriller · 2025' },
  { org: 'Majnu / Ariyaasanam', role: 'Director / Editor', period: 'Shorts · 2024–2025' },
];

export const Experience = () => {
  return (
    <section id="experience" className="relative px-4 md:px-8 py-16 md:py-24">
      <div className="relative bg-neutral-900 text-neutral-100 rounded-3xl overflow-hidden px-6 md:px-14 py-16 md:py-20">
        {/* Watermark */}
        <span
          aria-hidden
          className="pointer-events-none select-none absolute -top-4 right-0 font-display leading-none uppercase whitespace-nowrap"
          style={{
            fontSize: 'clamp(4rem, 14vw, 12rem)',
            color: 'transparent',
            WebkitTextStroke: '1.5px rgba(255,255,255,0.08)',
          }}
        >
          Experience
        </span>

        <div className="relative flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14">
          <FadeUp>
            <span className="text-[11px] tracking-[0.15em] text-white/50 uppercase">/ 04</span>
            <h2 className="font-display uppercase mt-2 leading-[0.9] tracking-[-0.03em] text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              <span className="text-white/40">/</span>Experience
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-[13px] text-white/60 max-w-xs md:text-right">
              3+ years, 28+ short films &mdash; independent, self-taught, and still learning.
            </p>
          </FadeUp>
        </div>

        <div className="relative divide-y divide-white/10 border-y border-white/10">
          {experience.map((e, i) => (
            <FadeUp key={e.org} delay={i * 0.06}>
              <div className="grid grid-cols-12 items-center gap-4 py-5 md:py-6">
                <span className="col-span-1 text-[11px] text-white/40 tabular-nums">0{i + 1}</span>
                <div className="col-span-6 md:col-span-5">
                  <div className="text-[15px] md:text-lg font-medium text-white">{e.org}</div>
                </div>
                <div className="col-span-5 md:col-span-3 text-[13px] text-white/60">{e.role}</div>
                <div className="hidden md:block md:col-span-3 text-[13px] text-white/50 text-right">{e.period}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};
