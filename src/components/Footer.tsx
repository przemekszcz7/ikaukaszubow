import React from "react";
import { CONTACT_INFO } from "../data";

export default function Footer() {
  return (
    <footer className="bg-[#16202C] text-[#FDFAF5]/70 py-24 border-t border-[#FDFAF5]/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 space-y-16">
        
        {/* Minimal clean layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Brand name and the singular, rare gold accent line (takes 5 columns) */}
          <div className="md:col-span-5 space-y-6">
            <div>
              <span className="font-display font-light italic text-2xl text-[#FDFAF5] block">
                IKA u Kaszuba
              </span>
              
              {/* Thin --gold line: 60px, appears once in the entire footer as a deliberate rare accent — the ONLY gold line on the entire page */}
              <div className="w-[60px] h-[1px] bg-[#C8A95A] mt-4" />
            </div>

            <p className="font-sans font-light text-xs text-[#FDFAF5]/50 leading-relaxed max-w-sm">
              Autentyczny smak nadmorskiej tradycji i domowej gościnności szefowej kuchni, Pani Irenki, na Bulwarze Nadmorskim w Gdyni.
            </p>
          </div>

          {/* Column 2: Location (takes 3 columns) */}
          <div className="md:col-span-3 space-y-4 font-sans font-light text-xs sm:text-sm">
            <span className="font-sans font-normal text-[0.65rem] uppercase tracking-[0.2em] text-[#1B6CA8] block">
              Adres
            </span>
            <p className="leading-relaxed text-[#FDFAF5]/80">
              al. Jana Pawła II 2
              <br />
              81-001 Gdynia
            </p>
          </div>

          {/* Column 3: Contact & Hours (takes 4 columns) */}
          <div className="md:col-span-4 space-y-4 font-sans font-light text-xs sm:text-sm">
            <span className="font-sans font-normal text-[0.65rem] uppercase tracking-[0.2em] text-[#1B6CA8] block">
              Kontakt &amp; Rezerwacje
            </span>
            <p className="text-[#FDFAF5]/80">
              Otwieramy o 09:00 rano.
            </p>
            <div className="space-y-2 pt-2">
              <a 
                href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, "")}`} 
                className="font-mono text-sm font-normal text-[#1B6CA8] hover:text-[#FDFAF5] transition-colors block"
              >
                tel. {CONTACT_INFO.phone}
              </a>
              <a
                href={CONTACT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[0.7rem] uppercase tracking-[0.15em] text-[#FDFAF5]/50 hover:text-[#1B6CA8] transition-colors block"
              >
                nasz facebook →
              </a>
            </div>
          </div>

        </div>

        {/* Foot bar */}
        <div className="pt-12 border-t border-[#FDFAF5]/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[9px] font-mono uppercase tracking-[0.25em] text-[#FDFAF5]/30">
          <span>
            © {new Date().getFullYear()} IKA U KASZUBA. WSZELKIE PRAWA ZASTRZEŻONE.
          </span>
          <span className="font-sans font-light">
            Gdynia, Bulwar Nadmorski.
          </span>
        </div>

      </div>
    </footer>
  );
}
