import { useState, useEffect } from 'react';
import landingBg from '../asset/wallpaperflare.com_wallpaper.jpg';

const TITLE = 'TEK TERRAIN LLC';
const TYPING_MS = 120;

export default function Landing() {
  const [displayLength, setDisplayLength] = useState(0);

  useEffect(() => {
    if (displayLength >= TITLE.length) return;
    const t = setTimeout(() => setDisplayLength((n) => n + 1), TYPING_MS);
    return () => clearTimeout(t);
  }, [displayLength]);

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center pt-24 pb-20 px-4 text-white relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${landingBg})` }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col justify-center items-center w-full">
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            style={{ color: '#FFA500', fontFamily: 'Arial, sans-serif' }}
            aria-label={TITLE}
          >
            {TITLE.slice(0, displayLength)}
            {displayLength < TITLE.length && (
              <span className="animate-pulse" aria-hidden>|</span>
            )}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
          <a
            href="#home"
            className="bg-white/10 backdrop-blur-sm rounded-lg py-12 px-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center block border border-white/10"
          >
            <span className="text-2xl md:text-3xl font-bold text-white">
              systemsfor.<span className="text-[#FFA500]">space</span>
            </span>
          </a>
          <a
            href="#about"
            className="bg-white/10 backdrop-blur-sm rounded-lg py-12 px-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center block border border-white/10"
          >
            <span className="text-2xl md:text-3xl font-bold text-white">
              systemsfor.<span className="text-[#FFA500]">earth</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
