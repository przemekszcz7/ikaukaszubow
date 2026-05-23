import React from "react";
import { motion } from "motion/react";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="py-32 md:py-40 bg-[#FDFAF5] text-[#16202C]"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left column: Traditional Maritime Navigation Star decoration */}
        <div className="lg:col-span-4 hidden lg:flex flex-col items-center justify-center text-[#1B6CA8]/20 select-none">
          <svg className="w-48 h-48 animate-[spin_6h_linear_infinite]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
            <circle cx="50" cy="50" r="45" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="10" />
            <path d="M50 5 L50 95 M5 50 L95 50 M18 18 L82 82 M18 82 L82 18" strokeWidth="0.5" />
            <polygon points="50,2 54,46 50,50 46,46" fill="currentColor" />
            <polygon points="50,98 54,54 50,50 46,54" fill="currentColor" />
            <polygon points="98,50 54,54 50,50 54,46" fill="currentColor" />
            <polygon points="2,50 46,54 50,50 46,46" fill="currentColor" />
          </svg>
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#16202C]/30 mt-6 select-none">[ GDYNIA Bulwar Nadmorski ]</span>
        </div>

        {/* Right column handles the text block (max 480px content inside 8 columns) */}
        <div className="lg:col-span-8 space-y-12 max-w-[540px]">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-sans font-normal text-[0.7rem] uppercase tracking-[0.25em] text-[#1B6CA8] block">
                Sekcja 04 — Serce Kuchni
              </span>
              <svg className="w-5 h-5 text-[#1B6CA8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2v14M12 22a8 8 0 0 1-8-8h2a6 6 0 0 0 12 0h2a8 8 0 0 1-8 8z" />
                <circle cx="12" cy="5" r="2" />
              </svg>
            </div>
            <h2 className="font-display font-light italic text-[2rem] sm:text-[3rem] text-[#16202C] leading-none tracking-tight">
              O nas i Pani Irence
            </h2>
          </div>

          <div className="font-sans font-light text-[#16202C]/80 text-[1rem] leading-[1.8] space-y-6">
            <p>
              Smażalnia ryb i obiady domowe „IKA u Kaszuba” to miejsce pełne autentycznych nadmorskich smaków, zlokalizowane w samym sercu Gdyni przy al. Jana Pawła II. Nasza kuchnia tętni życiem dzięki tradycyjnym recepturom powtarzanym z pokolenia na pokolenie.
            </p>
            <p>
              Dla naszych gości jesteśmy domem z widokiem na morze. Zapraszamy rano na ciepłe śniadania, w południe na porządny obiad rybny, a wieczorami na chłodne koktajle. Poczuj się u nas swobodnie, odpocznij przy szumie fal i zjedz tak, jak gotuje się tylko u prawdziwych przyjaciół.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
