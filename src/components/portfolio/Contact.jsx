import { Youtube, Instagram, Mail, ArrowUpRight } from 'lucide-react';
import { CONTACT } from '@/constants/testIds/portfolio';
import { CHANNEL_URL } from '@/data/films';
import { FadeUp } from './Reveal';

const EMAIL = 'sri20srini09@gmail.com';
const INSTAGRAM_URL = 'https://www.instagram.com/sri_srini/';

const socials = [
  { icon: Youtube, label: 'YouTube', href: CHANNEL_URL },
  { icon: Instagram, label: 'Instagram', href: INSTAGRAM_URL },
  { icon: Mail, label: 'Email', href: `mailto:${EMAIL}` },
];

export const Contact = () => {
  return (
    <section id="contact" data-testid={CONTACT.section} className="relative px-6 md:px-14 py-20 md:py-28 border-t border-neutral-200">
      <div className="relative bg-white rounded-3xl border border-neutral-200 px-6 md:px-14 py-16 md:py-20 overflow-hidden">
        <FadeUp>
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 border border-neutral-200 rounded-full px-3 py-1.5 text-[12px] font-medium text-neutral-700 bg-neutral-50">
              <span className="relative inline-flex">
                <span className="absolute inline-flex h-2 w-2 rounded-full bg-emerald-500 opacity-60 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for New Project
            </span>
          </div>
        </FadeUp>

        <FadeUp delay={0.08}>
          <h2 className="font-display uppercase text-center mt-8 leading-[0.9] tracking-[-0.03em] text-neutral-900" style={{ fontSize: 'clamp(2.75rem, 7vw, 6rem)' }}>
            Got a story<br />in mind?
          </h2>
        </FadeUp>

        <FadeUp delay={0.16}>
          <p className="mt-8 text-neutral-600 text-center max-w-lg mx-auto leading-relaxed text-[15px]">
            A script, a collaboration, a wild idea &mdash; drop us a line and let&apos;s make something worth watching.
          </p>
        </FadeUp>

        <FadeUp delay={0.24}>
          <div className="mt-10 flex justify-center">
            <a
              href={`mailto:${EMAIL}`}
              data-testid={CONTACT.submit}
              className="group inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full pl-6 pr-4 py-3.5 text-[13px] font-medium transition-colors duration-300"
            >
              Email Us
              <span className="w-7 h-7 rounded-full bg-white text-neutral-900 flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform duration-300" strokeWidth={2.2} />
              </span>
            </a>
          </div>
        </FadeUp>

        <FadeUp delay={0.32}>
          <div className="mt-12 flex items-center justify-center gap-8 flex-wrap">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`contact-social-${s.label.toLowerCase()}`}
                  className="group flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors duration-300"
                >
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                  <span className="text-[13px] font-medium">{s.label}</span>
                </a>
              );
            })}
          </div>
        </FadeUp>
      </div>
    </section>
  );
};
