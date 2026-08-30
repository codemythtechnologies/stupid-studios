import { motion } from 'framer-motion';
import { FadeUp } from './Reveal';

const reviews = [
  {
    quote:
      'The pacing in Thani Kaattu Raja gave me chills. Genuinely feels like a theatre release, not a YouTube short.',
    name: 'Karthik R.',
    role: 'Subscriber',
  },
  {
    quote:
      'Aval Naan Mazhai is proof that you don\u2019t need a big budget to make people cry. Beautiful, honest filmmaking.',
    name: 'Divya S.',
    role: 'Film Student',
  },
  {
    quote:
      'Every release keeps getting sharper. The lighting and sound design punch way above their weight.',
    name: 'Aravind M.',
    role: 'Indie Creator',
  },
];

export const Testimonials = () => {
  return (
    <section className="px-6 md:px-14 py-20 md:py-28 border-t border-neutral-200">
      <FadeUp>
        <span className="text-[11px] tracking-[0.15em] text-neutral-500 uppercase">/ 05</span>
        <h2 className="font-display uppercase mt-2 leading-[0.9] tracking-[-0.03em] text-neutral-900 max-w-4xl" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <span className="text-neutral-400">/</span>Word on the street
        </h2>
      </FadeUp>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
        {reviews.map((r, i) => (
          <motion.blockquote
            key={r.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl border border-neutral-200 p-8 md:p-10 flex flex-col justify-between min-h-[280px]"
          >
            <p className="font-serif-italic text-2xl leading-snug text-neutral-800">
              &ldquo;{r.quote}&rdquo;
            </p>
            <footer className="mt-6 pt-5 border-t border-neutral-200">
              <div className="text-[14px] font-medium text-neutral-900">{r.name}</div>
              <div className="text-[11px] tracking-wide text-neutral-500 mt-1">{r.role}</div>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
};
