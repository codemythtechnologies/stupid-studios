import { Youtube, Instagram, Mail } from 'lucide-react';
import { CHANNEL_URL } from '@/data/films';

const INSTAGRAM_URL = 'https://www.instagram.com/sri__srini/';

const socials = [
  { icon: Youtube, label: 'YouTube', href: CHANNEL_URL },
  { icon: Instagram, label: 'Instagram', href: INSTAGRAM_URL },
  { icon: Mail, label: 'Email', href: 'mailto:sri20srini09@gmail.com' },
];

export const Footer = () => {
  return (
    <footer className="relative border-t border-neutral-200 px-6 md:px-14 pt-16 pb-8 overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="max-w-md">
          <div className="flex items-center gap-2 mb-5">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-display uppercase text-[13px] tracking-[0.1em] text-neutral-900">
              Stupid Studios
            </span>
          </div>
          <p className="text-neutral-600 text-[14px] leading-relaxed">
            An independent short-film collective. Subscribe on YouTube to catch every new release first.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-[11px] tracking-[0.15em] text-neutral-500 uppercase">Follow</span>
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`footer-social-${s.label.toLowerCase()}`}
                className="group flex items-center gap-3 text-neutral-700 hover:text-neutral-900 transition-colors duration-300"
              >
                <Icon className="w-4 h-4" strokeWidth={1.5} />
                <span className="text-[13px]">{s.label}</span>
              </a>
            );
          })}
        </div>
      </div>

      <div className="mt-14 -mb-4">
        <h2 className="font-display uppercase leading-[0.85] tracking-[-0.05em] outline-text select-none" style={{ fontSize: 'clamp(4rem, 18vw, 16rem)' }}>
          Stupid Studios
        </h2>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row justify-between gap-3 text-[11px] tracking-wide text-neutral-500">
        <span>&copy; {new Date().getFullYear()} Stupid Studios. All rights reserved.</span>
        <span>Crafted frame by frame.</span>
      </div>
    </footer>
  );
};
