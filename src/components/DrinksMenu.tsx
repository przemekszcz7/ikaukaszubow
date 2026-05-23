import React from "react";
import { motion } from "motion/react";
import { DRINKS_ALCO_MENU, DRINKS_COLD_MENU, DESSERT_MENU, DRINKS_HOT_MENU } from "../data";

export default function DrinksMenu() {
  return (
    <section
      id="drinki-menu"
      className="py-32 md:py-40 bg-[#F0EAD8] text-[#16202C]"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-b border-[#16202C]/10 pb-16 mb-20 items-baseline">
          
          {/* Column 1: Heading */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-sans font-normal text-[0.7rem] uppercase tracking-[0.25em] text-[#1B6CA8] block">
                Sekcja 03 — Wieczorne Odprężenie
              </span>
              <svg className="w-6 h-3 text-[#1B6CA8]" viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M2 4 Q 6 1, 10 4 T 18 4 T 22 4" />
                <path d="M2 8 Q 6 5, 10 8 T 18 8 T 22 8" opacity="0.5" />
              </svg>
            </div>
            <h2 className="font-display font-normal text-[2rem] sm:text-[2.5rem] text-[#16202C] tracking-tight leading-none">
              Nasz Bar &amp; Kawiarnia
            </h2>
          </div>

          {/* Column 2: Tagline */}
          <div className="lg:col-span-5">
            <p className="font-display italic text-2xl sm:text-3xl text-[#16202C]/80 font-light">
              Zimne. Dobrze zrobione.
            </p>
          </div>

          {/* Column 3: Beautiful minimalist ship/sailboat ornament - swaying gently on invisible waves */}
          <div className="lg:col-span-2 hidden lg:grid place-items-center text-[#1B6CA8] opacity-35">
            <motion.div
              animate={{
                y: [0, -5, 4, -2, 0],
                rotate: [0, 4, -3, 2, 0]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M2 20h20M12 2v18M12 4l7 7H12M12 6l-6 5h6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Dynamic typographic menu columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16">
          
          {/* Column 1: Piwa i autorskie drinki */}
          <div className="space-y-12">
            <div>
              <h3 className="font-display font-light italic text-2xl text-[#16202C] pb-4 border-b border-[#16202C]/10 mb-8 font-sans">
                {DRINKS_ALCO_MENU.title}
              </h3>

              <div className="space-y-6">
                {DRINKS_ALCO_MENU.items.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.45, delay: Math.min(idx * 0.05, 0.4) }}
                    className="group"
                  >
                    <div className="flex justify-between items-baseline gap-2">
                       <span className="font-display font-normal text-lg text-[#16202C] tracking-wide group-hover:text-[#1B6CA8] transition-colors duration-250">
                        {item.name}
                        {item.size && (
                          <span className="font-sans text-[10px] text-[#16202C]/50 uppercase tracking-widest ml-2 font-normal">
                            ({item.size})
                          </span>
                        )}
                      </span>
                      {/* Typographic dot leader */}
                      <div className="flex-grow border-b border-dotted border-[#16202C]/15 mx-2" />
                      <span className="font-mono text-sm font-medium text-[#1B6CA8] whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    {item.desc && (
                      <p className="font-sans font-light text-xs text-[#16202C]/60 italic mt-1.5 max-w-[90%]">
                        {item.desc}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Napoje Zimne, Gorące i Słodycze */}
          <div className="space-y-16">
            
            {/* Sub-block: Gofry i Słodkości */}
            <div>
              <h3 className="font-display font-light italic text-2xl text-[#16202C] pb-4 border-b border-[#16202C]/10 mb-8 font-sans">
                {DESSERT_MENU.title}
              </h3>
              
              <div className="space-y-6">
                {DESSERT_MENU.items.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.45, delay: Math.min(idx * 0.05, 0.4) }}
                    className="group"
                  >
                    <div className="flex justify-between items-baseline gap-2">
                       <span className="font-display font-normal text-lg text-[#16202C] tracking-wide group-hover:text-[#1B6CA8] transition-colors duration-250">
                        {item.name}
                      </span>
                      {/* Typographic dot leader */}
                      <div className="flex-grow border-b border-dotted border-[#16202C]/15 mx-2" />
                      <span className="font-mono text-sm font-medium text-[#1B6CA8] whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    {item.desc && (
                      <p className="font-sans font-light text-xs text-[#16202C]/60 italic mt-1.5 max-w-[90%]">
                        {item.desc}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sub-block: Napoje Zimne */}
            <div>
              <h3 className="font-display font-light italic text-2xl text-[#16202C] pb-4 border-b border-[#16202C]/10 mb-8 font-sans">
                {DRINKS_COLD_MENU.title}
              </h3>
              
              <div className="space-y-6">
                {DRINKS_COLD_MENU.items.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.45, delay: Math.min(idx * 0.05, 0.4) }}
                    className="group"
                  >
                    <div className="flex justify-between items-baseline gap-2">
                       <span className="font-display font-normal text-lg text-[#16202C] tracking-wide group-hover:text-[#1B6CA8] transition-colors duration-250">
                        {item.name}
                        {item.size && (
                          <span className="font-sans text-[10px] text-[#16202C]/50 uppercase tracking-widest ml-2 font-normal">
                            ({item.size})
                          </span>
                        )}
                      </span>
                      {/* Typographic dot leader */}
                      <div className="flex-grow border-b border-dotted border-[#16202C]/15 mx-2" />
                      <span className="font-mono text-sm font-medium text-[#1B6CA8] whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    {item.desc && (
                      <p className="font-sans font-light text-xs text-[#16202C]/60 italic mt-1.5 max-w-[90%]">
                        {item.desc}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sub-block: Napoje Gorące */}
            <div>
              <h3 className="font-display font-light italic text-2xl text-[#16202C] pb-4 border-b border-[#16202C]/10 mb-8 font-sans">
                {DRINKS_HOT_MENU.title}
              </h3>
              
              <div className="space-y-6">
                {DRINKS_HOT_MENU.items.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.45, delay: Math.min(idx * 0.05, 0.4) }}
                    className="group"
                  >
                    <div className="flex justify-between items-baseline gap-2">
                       <span className="font-display font-normal text-lg text-[#16202C] tracking-wide group-hover:text-[#1B6CA8] transition-colors duration-250">
                        {item.name}
                        {item.size && (
                          <span className="font-sans text-[10px] text-[#16202C]/50 uppercase tracking-widest ml-2 font-normal">
                            ({item.size})
                          </span>
                        )}
                      </span>
                      {/* Typographic dot leader */}
                      <div className="flex-grow border-b border-dotted border-[#16202C]/15 mx-2" />
                      <span className="font-mono text-sm font-medium text-[#1B6CA8] whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    {item.desc && (
                      <p className="font-sans font-light text-xs text-[#16202C]/60 italic mt-1.5 max-w-[90%]">
                        {item.desc}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
