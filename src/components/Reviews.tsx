import React from "react";
import { TESTIMONIALS } from "../data";
import { Quote, MessageSquare } from "lucide-react";

export default function Reviews() {
  return (
    <section 
      id="reviews" 
      className="relative py-24 bg-[#F5EED8] text-[#1A2A3A] texture-water overflow-hidden border-b border-[#1B6CA8]/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-display italic text-lg text-[#1B6CA8] mb-1">
            Co o nas piszą nasi goście?
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight leading-tight uppercase">
            Słowo od Stałych Bywalców
          </h2>
          <div className="w-[35px] h-[3px] bg-[#1B6CA8] mx-auto mt-4" />
        </div>

        {/* Staggered editorial layout cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-6">
          {TESTIMONIALS.map((t, idx) => {
            // Apply different rotate angles for responsive styling rhythm
            const rotations = ["rotate-[-0.6deg]", "rotate-[0.5deg]", "rotate-[-0.4deg]"];
            const colors = ["bg-[#FDFAF4]", "bg-[#FAF5E8]", "bg-[#FDFAF4]"];
            return (
              <div 
                key={idx}
                className={`py-10 px-8 rounded-xl shadow-md border border-[#1B6CA8]/5 flex flex-col justify-between ${colors[idx % 3]} ${rotations[idx % 3]} hover:rotate-0 hover:scale-101 hover:shadow-xl transition-all duration-300`}
              >
                <div>
                  <Quote size={28} className="text-[#1B6CA8]/30 mb-6 shrink-0" />
                  <p className="font-sans text-[17px] text-[#1A2A3A] leading-relaxed italic mb-8">
                    &bdquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="border-t border-[#1B6CA8]/10 pt-4 flex justify-between items-center">
                  <span className="font-display font-bold text-sm text-[#1A2A3A]">
                    {t.author}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#C4922A] bg-[#C4922A]/5 px-2 py-0.5 rounded font-semibold whitespace-nowrap">
                    {t.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Handwritten subtitle in center */}
        <div className="text-center mt-16">
          <p className="font-accent text-[#C4922A] text-3xl leading-none rotate-[-1deg]">
            Wróć do nas raz... a będziesz wracać zawsze!
          </p>
        </div>

      </div>
    </section>
  );
}
