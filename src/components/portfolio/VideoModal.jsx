import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';
import { FILMS } from '@/constants/testIds/portfolio';

export const VideoModal = ({ film, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = film ? 'hidden' : '';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [film, onClose]);

  return (
    <AnimatePresence>
      {film && (
        <motion.div
          data-testid={FILMS.modal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10"
        >
          <button
            data-testid={FILMS.modalClose}
            onClick={onClose}
            className="absolute top-6 right-6 flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors z-10"
          >
            Close <X className="w-5 h-5" />
          </button>

          <motion.div
            initial={{ scale: 0.92, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.92, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl"
          >
            <div className="mb-4 flex items-baseline gap-4">
              <span className="text-[#E11D48] text-[11px] tracking-[0.2em] uppercase">{film.genre}</span>
              <h3 className="font-display font-semibold text-2xl md:text-3xl uppercase">{film.title}</h3>
            </div>
            <div className="relative w-full aspect-video border border-white/10 bg-black overflow-hidden">
              <iframe
                key={film.youtubeId}
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${film.youtubeId}?autoplay=1&rel=0`}
                title={film.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


