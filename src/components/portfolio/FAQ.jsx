import { FadeUp, SectionHeader } from './Reveal';
import { CHANNEL_URL } from '@/data/films';

const faqs = [
  {
    q: 'What genres do you work in?',
    a: 'Mostly thrillers, romance and comedy — always mood over budget, with natural-light framing and performance doing the heavy lifting.',
  },
  {
    q: 'How many films have you made?',
    a: '28+ short films since 2023 — from taut thrillers like Thani Kaattu Raja to tender romances like Aval Naan Mazhai.',
  },
  {
    q: 'Is this a one-person show?',
    a: 'It\u2019s a small collective, not a studio. Writing, direction, cinematography and editing all happen in-house — no outside crew, no shortcuts.',
  },
  {
    q: 'Where can I watch everything?',
    a: (
      <>
        Every release, trailer and teaser lives on our{' '}
        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 decoration-neutral-400 hover:decoration-neutral-900 text-neutral-900"
        >
          YouTube channel
        </a>
        .
      </>
    ),
  },
  {
    q: 'Got a script or want to collaborate?',
    a: (
      <>
        Always open to a good story. Reach out through the{' '}
        <a
          href="#contact"
          className="underline underline-offset-2 decoration-neutral-400 hover:decoration-neutral-900 text-neutral-900"
        >
          contact section
        </a>{' '}
        below.
      </>
    ),
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="relative px-6 md:px-14 py-20 md:py-28 border-t border-neutral-200">
      <SectionHeader
        prefix="05"
        label="Good to Know"
        subtitle="A few honest answers instead of borrowed praise."
        watermark="FAQ"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-10 md:gap-y-12">
        {faqs.map((f, i) => (
          <FadeUp key={f.q} delay={i * 0.06} className="border-t border-neutral-200 pt-6">
            <div className="flex items-baseline gap-4">
              <span className="text-[12px] tabular-nums text-neutral-400">/ 0{i + 1}</span>
              <h3 className="font-display uppercase text-xl md:text-2xl tracking-[-0.02em] text-neutral-900">
                {f.q}
              </h3>
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-neutral-600 md:pl-11 max-w-lg">
              {f.a}
            </p>
          </FadeUp>
        ))}
      </div>
    </section>
  );
};
