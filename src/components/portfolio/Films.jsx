import { useState } from 'react';
import { Play, ArrowUpRight } from 'lucide-react';
import { films } from '@/data/films';
import { FILMS } from '@/constants/testIds/portfolio';
import { FadeUp, FadeUpGroup, FadeUpItem, SectionHeader } from './Reveal';

const FALLBACK_IMGS = [
  'https://images.unsplash.com/photo-1625690303837-654c9666d2d0?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
  'https://images.unsplash.com/photo-1577190651915-bf62d54d5b36?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
  'https://images.unsplash.com/photo-1485846234645-a62644f84728?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
];

const FilmCard = ({ film, onOpen, large, index }) => {
  const [src, setSrc] = useState(film.thumb);

  return (
    <FadeUpItem>
      <button
        onClick={() => onOpen(film)}
        data-testid={FILMS.card}
        className={`group relative block w-full overflow-hidden text-left rounded-2xl bg-neutral-200 ${
          large ? 'aspect-[16/10]' : 'aspect-[4/3]'
        }`}
      >
        <img
          src={src}
          alt={film.title}
          loading="lazy"
          onError={() => setSrc(FALLBACK_IMGS[index % FALLBACK_IMGS.length])}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[900ms] ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* top row */}
        <span className="absolute top-4 left-4 text-[10px] tracking-[0.15em] uppercase bg-white/90 text-neutral-900 px-2.5 py-1 rounded-full">
          {film.kind}
        </span>
        <span className="absolute top-4 right-4 flex items-center gap-1.5 text-[11px] tracking-wide bg-black/40 backdrop-blur text-white px-2.5 py-1 rounded-full">
          {film.duration}
        </span>

        {/* play badge */}
        <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white text-neutral-900 scale-90 group-hover:scale-100 transition-transform duration-300 shadow-xl">
            <Play className="w-6 h-6 fill-current ml-1" />
          </span>
        </span>

        {/* bottom copy */}
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 text-white">
          <div className="flex items-center gap-2 text-[11px] tracking-wide text-white/70 mb-2">
            <span>{film.genre}</span>
            <span>&middot;</span>
            <span>{film.year}</span>
            <span>&middot;</span>
            <span>{film.views} views</span>
          </div>
          <h3 className={`font-display uppercase leading-[0.95] tracking-[-0.03em] ${large ? 'text-3xl md:text-5xl' : 'text-xl md:text-2xl'}`}>
            {film.title}
          </h3>
        </div>

        {/* corner arrow */}
        <span className="absolute bottom-5 right-5 w-9 h-9 rounded-full bg-white/90 text-neutral-900 flex items-center justify-center translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
        </span>
      </button>
    </FadeUpItem>
  );
};

export const Films = ({ onOpen }) => {
  const [feature, ...rest] = films;
  return (
    <section id="work" data-testid={FILMS.section} className="relative px-6 md:px-14 py-20 md:py-28">
      <SectionHeader
        prefix="01"
        label="Selected Work"
        subtitle="Click any frame to watch it right here — pulled straight from the channel."
        watermark="Portfolio"
      />

      <FadeUpGroup className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5">
        <div className="lg:col-span-2">
          <FilmCard film={feature} onOpen={onOpen} large index={0} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-5">
          {rest.slice(0, 2).map((f, i) => (
            <FilmCard key={f.id} film={f} onOpen={onOpen} index={i + 1} />
          ))}
        </div>
        {rest.slice(2).map((f, i) => (
          <FilmCard key={f.id} film={f} onOpen={onOpen} index={i + 3} />
        ))}
      </FadeUpGroup>
    </section>
  );
};
