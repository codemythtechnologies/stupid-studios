import { Film, Scissors, Aperture, Sparkles, ArrowUpRight } from 'lucide-react';
import { FadeUp, SectionHeader } from './Reveal';

const services = [
  { icon: Film, no: '01', title: 'Direction', desc: 'Story-driven direction that puts performance and mood above spectacle.' },
  { icon: Aperture, no: '02', title: 'Cinematography', desc: 'Natural-light framing and deliberate camera language for every scene.' },
  { icon: Scissors, no: '03', title: 'Editing & Sound', desc: 'Rhythm-first cuts, sound design and colour that shape the final feel.' },
  { icon: Sparkles, no: '04', title: 'VFX & Post', desc: 'Practical-first visual effects and grading that stay invisible.' },
];

export const Services = () => {
  return (
    <section id="services" className="relative px-6 md:px-14 py-20 md:py-28 border-t border-neutral-200">
      <SectionHeader
        prefix="03"
        label="Service"
        subtitle="A full independent pipeline — from the first draft to the final export."
        watermark="Service"
      />

      <div className="grid grid-cols-1 divide-y divide-neutral-200 border-y border-neutral-200">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <FadeUp key={s.title} delay={i * 0.05}>
              <a href="#contact" className="list-row group flex items-center justify-between gap-6 py-6 md:py-8">
                <div className="flex items-center gap-6 md:gap-10">
                  <span className="text-[12px] text-neutral-400 tabular-nums font-medium">/ 0{i + 1}</span>
                  <div className="flex items-center gap-4">
                    <Icon className="w-5 h-5 text-neutral-500 group-hover:text-neutral-900 transition-colors duration-300" strokeWidth={1.5} />
                    <h3 className="font-display uppercase text-2xl md:text-4xl tracking-[-0.03em] text-neutral-900">
                      {s.title}
                    </h3>
                  </div>
                </div>
                <div className="hidden md:flex items-center gap-6">
                  <p className="text-[13px] text-neutral-500 max-w-[280px] leading-relaxed">{s.desc}</p>
                  <span className="w-10 h-10 rounded-full bg-neutral-100 group-hover:bg-neutral-900 group-hover:text-white text-neutral-900 flex items-center justify-center transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" strokeWidth={2} />
                  </span>
                </div>
                <span className="md:hidden w-9 h-9 rounded-full bg-neutral-100 text-neutral-900 flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                </span>
              </a>
            </FadeUp>
          );
        })}
      </div>
    </section>
  );
};
