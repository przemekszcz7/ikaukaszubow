import React from "react";
import { HOURLY_TIMETABLE, CONTACT_INFO } from "../data";

export default function HoursAndLocation() {
  return (
    <section 
      id="contact" 
      className="bg-[#F0EAD8] text-[#16202C] py-32 md:py-40"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-b border-[#16202C]/10 pb-16 mb-20 items-baseline">
          <div className="lg:col-span-12 space-y-4 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="font-sans font-normal text-[0.7rem] uppercase tracking-[0.25em] text-[#1B6CA8] block">
                Sekcja 05 — Rezerwacja i Odwiedziny
              </span>
              <svg className="w-5 h-5 text-[#1B6CA8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 3l1.5 5.5L19 12l-5.5 1.5L12 21l-1.5-5.5L5 12l5.5-1.5L12 3z" fill="currentColor" fillOpacity="0.1" />
              </svg>
            </div>
            <h2 className="font-display font-light italic text-[2.2rem] sm:text-[3rem] text-[#16202C] tracking-tight leading-none">
              Godziny i lokalizacja
            </h2>
          </div>
        </div>

        {/* Dynamic Minimalist Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: Time Table (Takes 5 columns) */}
          <div className="lg:col-span-5 space-y-8">
            <span className="font-sans font-normal text-[0.7rem] uppercase tracking-[0.2em] text-[#1D79BC]">
              Godziny otwarcia
            </span>
            
            <div className="divide-y divide-[#16202C]/10 font-sans font-light text-sm space-y-2 pt-4">
              {HOURLY_TIMETABLE.map((row) => (
                <div key={row.day} className="flex justify-between items-baseline py-3 text-[#16202C]">
                  <span className="capitalize font-normal text-[#16202C]/80">{row.day}</span>
                  <span className="font-mono text-xs tracking-wider text-[#16202C]/60">{row.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Spacer Column (Takes 1 column) */}
          <div className="lg:col-span-1 hidden lg:block" />

          {/* Column 2: Exact Location & Phone (Takes 6 columns) */}
          <div className="lg:col-span-6 space-y-12">
            
            <div className="space-y-6">
              <span className="font-sans font-normal text-[0.7rem] uppercase tracking-[0.2em] text-[#1D79BC] block">
                Nasz adres
              </span>
              
              <div className="space-y-4">
                <p className="font-display font-light text-2xl text-[#16202C]">
                  Smażalnia IKA u Kaszuba
                </p>
                <p className="font-sans font-style text-[0.95rem] leading-[1.8] text-[#16202C]/70">
                  al. Jana Pawła II 2
                  <br />
                  81-001 Gdynia
                  <br />
                  (przy samym Bulwarze Nadmorskim)
                </p>
              </div>
            </div>

            <div className="space-y-4 border-t border-[#16202C]/10 pt-8">
              <span className="font-sans font-normal text-[0.65rem] uppercase tracking-[0.2em] text-[#16202C]/40 block">
                Kontakt i pomoc telefoniczna
              </span>
              <a 
                href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, "")}`} 
                className="font-display font-light italic text-2xl text-[#1B6CA8] hover:text-[#16202C] transition-colors block"
              >
                {CONTACT_INFO.phone}
              </a>
              <span className="font-sans font-light text-xs text-[#16202C]/60 block pb-1">
                * Zapraszamy również do kontaktu za pośrednictwem profilu Facebook.
              </span>
            </div>

          </div>

        </div>

        {/* Map Container - pure full bleed colored iframe integration */}
        <div className="mt-20 border border-[#16202C]/10">
          <div 
            className="w-full h-[400px] overflow-hidden"
            dangerouslySetInnerHTML={{ __html: CONTACT_INFO.mapsIFrame }} 
          />
        </div>

      </div>
    </section>
  );
}
