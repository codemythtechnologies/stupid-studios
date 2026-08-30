import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import '@/App.css';
import { Toaster } from '@/components/ui/sonner';
import { Navbar } from '@/components/portfolio/Navbar';
import { Hero } from '@/components/portfolio/Hero';
import { Marquee } from '@/components/portfolio/Marquee';
import { Films } from '@/components/portfolio/Films';
import { About } from '@/components/portfolio/About';
import { Services } from '@/components/portfolio/Services';
import { Experience } from '@/components/portfolio/Experience';
import { FAQ } from '@/components/portfolio/FAQ';
import { Contact } from '@/components/portfolio/Contact';
import { Footer } from '@/components/portfolio/Footer';
import { VideoModal } from '@/components/portfolio/VideoModal';
import { films } from '@/data/films';

function App() {
  const [activeFilm, setActiveFilm] = useState(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 0.9,
      touchMultiplier: 1.6,
      smoothWheel: true,
    });
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onAnchor = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el, { offset: -30, duration: 1.6 });
      }
    };
    document.addEventListener('click', onAnchor);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('click', onAnchor);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen text-[#111]">
      <div className="sky-bg" aria-hidden="true" />
      <div className="grain-overlay" aria-hidden="true" />
      <Navbar />

      <div className="relative z-10 px-3 md:px-6 pt-24 md:pt-28 pb-6">
        <div className="card-shell max-w-[1400px] mx-auto">
          <main>
            <Hero onWatchReel={() => setActiveFilm(films[0])} />
            <Marquee />
            <Films onOpen={setActiveFilm} />
            <About />
            <Services />
            <Experience />
            <FAQ />
            <Contact />
            <Footer />
          </main>
        </div>
      </div>

      <VideoModal film={activeFilm} onClose={() => setActiveFilm(null)} />
      <Toaster position="bottom-right" theme="light" />
    </div>
  );
}

export default App;
