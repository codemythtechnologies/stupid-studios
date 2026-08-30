import { motion } from 'framer-motion';
import { Play, ArrowDown, Sparkles } from 'lucide-react';
import { HERO } from '@/constants/testIds/portfolio';
import { CHANNEL_URL } from '@/data/films';
import HERO_PHOTO from '@/assets/hero-photo.png';

export const Hero = ({ onWatchReel }) => {
  return (
    <section
      id="top"
      data-testid={HERO.section}
      className="relative px-6 md:px-14 pt-14 md:pt-20 pb-16 md:pb-24 overflow-hidden"
    >
      {/* top meta */}
      <div className="flex flex-wrap items-start justify-between gap-6 mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3 text-[12px] text-neutral-500"
        >
          <span className="h-px w-8 bg-neutral-400" />
          <span className="tracking-wide">Independent Filmmakers</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-right max-w-[240px] text-[12px] leading-relaxed text-neutral-500"
        >
          A story-first collective crafting cinematic shorts &mdash;<br />
          written, shot &amp; directed in-house.
        </motion.div>
      </div>

      {/* Massive outlined title + portrait */}
      <div className="relative">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display leading-[0.86] tracking-[-0.06em] uppercase select-none"
          style={{ fontSize: 'clamp(3.5rem, 15vw, 15rem)' }}
        >
          <span className="block text-neutral-900">Stupid</span>
          <span className="block outline-text -mt-2 md:-mt-6">Studios</span>
        </motion.h1>

        {/* Floating portrait card */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: -2, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, rotate: -4, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="absolute right-0 top-8 sm:top-4 md:top-6 z-20 pointer-events-none select-none"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            <img
              src={HERO_PHOTO}
              alt="Sri — Founder &amp; Director, Stupid Studios"
              className="w-[46vw] max-w-[190px] sm:w-[34vw] sm:max-w-[220px] md:max-w-[300px] lg:max-w-[360px] h-auto drop-shadow-[0_25px_45px_rgba(20,20,20,0.28)]"
            />

            {/* Pinned label */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="absolute -left-3 sm:-left-4 md:-left-10 bottom-2 sm:bottom-6 md:bottom-10 rotate-[4deg] bg-neutral-900 text-white rounded-xl md:rounded-2xl px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2.5 shadow-lg"
            >
              <span className="flex items-center gap-1 sm:gap-1.5 text-[8px] sm:text-[10px] md:text-[11px] tracking-wide whitespace-nowrap">
                <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" />
                Founder &amp; Director
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom row */}
      <div className="mt-32 sm:mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="md:col-span-5"
        >
          <p className="font-serif-italic text-3xl md:text-4xl leading-[1.05] text-neutral-800">
            We make films with<br />
            <span className="text-neutral-900">Zero Budget.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05 }}
          className="md:col-span-4 md:col-start-8 text-neutral-600 text-[14px] leading-relaxed"
        >
          28+ short films across thrillers, romance and comedy &mdash; every frame written, shot and directed independently.
        </motion.div>
      </div>

      {/* Action row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.2 }}
        className="mt-10 md:mt-14 flex flex-wrap items-center justify-between gap-6"
      >
        <div className="flex items-center gap-4">
          <button
            onClick={onWatchReel}
            data-testid={HERO.watchReel}
            className="group flex items-center gap-3 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full pl-2 pr-6 py-2 transition-colors duration-300"
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-neutral-900 group-hover:scale-95 transition-transform duration-300">
              <Play className="w-4 h-4 fill-current ml-0.5" />
            </span>
            <span className="text-[13px] font-medium">Watch Latest</span>
          </button>
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-medium text-neutral-700 hover:text-neutral-900 border-b border-neutral-400 hover:border-neutral-900 pb-0.5 transition-colors duration-300"
          >
            YouTube Channel &rarr;
          </a>
        </div>

        <div className="flex items-center gap-2 text-neutral-500" data-testid={HERO.scrollCue}>
          <span className="text-[11px] tracking-wide">Scroll</span>
          <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
            <ArrowDown className="w-4 h-4" />
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
};
