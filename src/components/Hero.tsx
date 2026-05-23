import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { RESTAURANT_IMAGES, INSTAGRAM_GALLERY } from "../data";

interface HeroProps {
  onScrollToMenu: () => void;
}

export default function Hero({ onScrollToMenu }: HeroProps) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % INSTAGRAM_GALLERY.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#FDFAF5] flex flex-col justify-center pt-32 pb-24 px-6 md:px-12 max-w-[1200px] mx-auto overflow-hidden"
    >
      {/* Decorative absolute ship steering wheel watermark - slow constant rotating animation */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
        className="absolute -right-24 top-[10%] opacity-[0.04] text-[#16202C] pointer-events-none hidden lg:block select-none origin-center"
      >
        <svg className="w-[450px] h-[450px]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
          <circle cx="50" cy="50" r="30" />
          <circle cx="50" cy="50" r="10" />
          <circle cx="50" cy="50" r="4" />
          <line x1="50" y1="10" x2="50" y2="90" />
          <line x1="10" y1="50" x2="90" y2="50" />
          <line x1="21.7" y1="21.7" x2="78.3" y2="78.3" />
          <line x1="21.7" y1="78.3" x2="78.3" y2="21.7" />
          <circle cx="50" cy="8" r="1.5" fill="currentColor" />
          <circle cx="50" cy="92" r="1.5" fill="currentColor" />
          <circle cx="8" cy="50" r="1.5" fill="currentColor" />
          <circle cx="92" cy="50" r="1.5" fill="currentColor" />
          <circle cx="20.3" cy="20.3" r="1.5" fill="currentColor" />
          <circle cx="79.7" cy="79.7" r="1.5" fill="currentColor" />
          <circle cx="20.3" cy="79.7" r="1.5" fill="currentColor" />
          <circle cx="79.7" cy="20.3" r="1.5" fill="currentColor" />
        </svg>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full z-10">
        
        {/* Left Column: 60% Space for clean typography */}
        <div className="lg:col-span-7 space-y-10 text-left">
          
          <div className="space-y-4">
            {/* Elegant fine-line ship anchor icon & label */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 text-[#1B6CA8]"
            >
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="5" r="2" />
                <path d="M12 7v11M9 11h6M12 21c-4 0-7-3-7-7h2c0 2.8 2.2 5 5 5s5-2.2 5-5h2c0 4-3 7-7 7z" />
              </svg>
              <span className="font-sans font-normal text-[0.7rem] uppercase tracking-[0.25em] block">
                Gdynia, Bulwar Nadmorski
              </span>
            </motion.div>

            {/* Title - Cormorant Garamond 300 Italic */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-light italic text-[#16202C] leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
            >
              Świeża ryba.
              <br />
              Kuchnia morza.
            </motion.h1>
            
            {/* Secondary identifier */}
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="font-display font-normal text-xl sm:text-2xl text-[#16202C]/60 italic"
            >
              Smażalnia IKA u Kaszuba
            </motion.h2>
          </div>

          {/* Spacer Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-12 h-[1px] bg-[#1B6CA8] origin-left" 
          />

          {/* Body Prose in DM Sans 300 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
            className="space-y-6 max-w-[480px]"
          >
            <p className="font-sans font-light text-[#16202C]/80 text-[1rem] leading-[1.8]">
              Poranny zaciąg z bałtyckich kutrów, chrupiąca flądra prosto z patelni, domowa kuchnia tworzona według dawnych przepisów przez Panią Irenkę oraz chłodne wieczory przy bulwarze z orzeźwiającym drinkiem.
            </p>
            <p className="font-sans font-light text-[#16202C]/60 text-[0.85rem] leading-[1.8] italic">
              * Naszym znakiem rozpoznawczym jest zupa rybna po Kaszubsku. Zupa bez kompromisów — gotowana powoli z miłością i pasją.
            </p>
          </motion.div>

          {/* Call to action - ONE button colored in --sea, the other outline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button
              onClick={onScrollToMenu}
              className="font-sans font-normal text-[0.7rem] uppercase tracking-[0.2em] bg-[#1B6CA8] text-[#FDFAF5] px-8 py-4 transition-all hover:bg-[#16202C] cursor-pointer"
            >
              Karta dań
            </button>
            <a
              href="#contact"
              className="font-sans font-normal text-[0.7rem] uppercase tracking-[0.2em] border border-[#16202C]/20 text-[#16202C]/80 px-8 py-4 text-center hover:border-[#16202C] hover:text-[#16202C] transition-all"
            >
              Lokalizacja i godziny
            </a>
          </motion.div>

        </div>

        {/* Right Column: 40% Space for Image (Aspect proportion, pure, no borders or cards) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative w-full h-full"
        >
          <div className="aspect-[4/5] w-full bg-[#F0EAD8] overflow-hidden relative">
            {INSTAGRAM_GALLERY.map((img, index) => (
              <div
                key={img.url}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentImgIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <img
                  src={img.url}
                  alt={img.label}
                  className="w-full h-full object-cover brightness-95 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Carousel images are displayed clean without overlays */}
              </div>
            ))}
          </div>

          {/* Tiny slide index counter */}
          <div className="absolute bottom-4 right-4 z-30 flex gap-1 bg-black/30 backdrop-blur-xs px-2.5 py-1 text-[9px] font-mono text-white/80 lowercase">
            <span>[ {currentImgIndex + 1} / {INSTAGRAM_GALLERY.length} ]</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
