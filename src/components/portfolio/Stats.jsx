import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { FadeUpGroup, FadeUpItem } from './Reveal';

const stats = [
  { value: 28, suffix: '+', label: 'Short Films Released' },
  { value: 150, suffix: 'K+', label: 'Total Views' },
  { value: 12, suffix: '', label: 'Genres Explored' },
  { value: 100, suffix: '%', label: 'Independent' },
];

const Counter = ({ value, suffix }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const dur = 1600;
    const tick = (t) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display font-semibold tabular-nums">
      {n}
      {suffix}
    </span>
  );
};

export const Stats = () => {
  return (
    <section className="px-6 md:px-12 py-20 md:py-28 border-y border-white/10">
      <FadeUpGroup className="grid grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-6" stagger={0.1}>
        {stats.map((s) => (
          <FadeUpItem key={s.label} className="flex flex-col">
            <span className="text-[5rem] md:text-[7rem] leading-none text-white">
              <Counter value={s.value} suffix={s.suffix} />
            </span>
            <span className="mt-4 text-[11px] tracking-[0.25em] uppercase text-white/50">
              {s.label}
            </span>
          </FadeUpItem>
        ))}
      </FadeUpGroup>
    </section>
  );
};
