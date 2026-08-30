import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { NAV } from '@/constants/testIds/portfolio';

const links = [
  { label: 'Work', href: '#work', id: NAV.linkWork, count: '06' },
  { label: 'Service', href: '#services', id: NAV.linkServices, count: '04' },
  { label: 'Experience', href: '#experience', id: NAV.linkAbout, count: '03' },
  { label: 'Contact', href: '#contact', id: NAV.linkContact },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-[100] pt-4 md:pt-6 px-4 md:px-8 flex justify-center"
    >
      <div className={`nav-pill flex items-center gap-2 md:gap-4 px-3 md:px-4 py-2 md:py-2.5 transition-shadow duration-500 ${scrolled ? 'shadow-lg' : ''}`}>
        <a href="#top" data-testid={NAV.brand} className="flex items-center gap-2 pl-2 pr-3 py-1 rounded-full bg-white/70 border border-black/5">
          <span className="relative inline-flex">
            <span className="absolute inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 opacity-60 animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <span className="text-[11px] md:text-[12px] font-medium tracking-tight text-neutral-800">
            Available for Films
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              data-testid={l.id}
              className="group relative flex items-center gap-1 px-3 py-1.5 rounded-full text-[13px] font-medium text-neutral-700 hover:text-black hover:bg-white/80 transition-colors duration-300"
            >
              <span>{l.label}</span>
              {l.count && (
                <span className="text-[9px] text-neutral-400 tabular-nums -mt-2">{l.count}</span>
              )}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          data-testid={NAV.cta}
          className="group flex items-center gap-1.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full pl-4 pr-3 py-2 text-[12px] md:text-[13px] font-medium transition-colors duration-300"
        >
          Let&apos;s Talk
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform duration-300" strokeWidth={2} />
        </a>
      </div>
    </motion.header>
  );
};
