import { motion } from 'framer-motion';

// Softer, more natural scroll-in reveals
export const FadeUp = ({ children, delay = 0, className = '', y = 20 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2, margin: '0px 0px -8% 0px' }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export const FadeUpGroup = ({ children, className = '', stagger = 0.08 }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.15, margin: '0px 0px -8% 0px' }}
    variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
  >
    {children}
  </motion.div>
);

export const FadeUpItem = ({ children, className = '', y = 22 }) => (
  <motion.div
    className={className}
    variants={{
      hidden: { opacity: 0, y },
      show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
    }}
  >
    {children}
  </motion.div>
);

// Section header with slash prefix and giant outlined watermark
export const SectionHeader = ({ prefix = '01', label, subtitle, watermark, id }) => (
  <div id={id} className="relative flex flex-wrap items-end justify-between gap-6 mb-12 md:mb-16">
    <FadeUp>
      <div className="flex items-center gap-3">
        <span className="text-[11px] tracking-[0.15em] text-neutral-500 uppercase">/ {prefix}</span>
      </div>
      <h2 className="font-display uppercase mt-2 leading-[0.9] tracking-[-0.03em] text-neutral-900" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
        <span className="text-neutral-400">/</span>{label}
      </h2>
    </FadeUp>
    {subtitle && (
      <FadeUp delay={0.1}>
        <p className="text-[13px] leading-relaxed text-neutral-500 max-w-xs md:text-right">
          {subtitle}
        </p>
      </FadeUp>
    )}
    {watermark && (
      <span
        aria-hidden
        className="pointer-events-none select-none absolute -top-6 right-0 font-display leading-none uppercase outline-text whitespace-nowrap"
        style={{ fontSize: 'clamp(4rem, 12vw, 10rem)', opacity: 0.5 }}
      >
        {watermark}
      </span>
    )}
  </div>
);
