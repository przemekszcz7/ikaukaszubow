import React from "react";
import { motion } from "motion/react";
import { FISH_MENU, FISH_SETS_MENU } from "../data";

export default function FishMenu() {
  return (
    <section
      id="ryby-menu"
      className="py-32 md:py-40 bg-[#16202C] text-[#FDFAF5]"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* Header - Asymmetric: heading takes 35%, body takes 45%, 20% empty */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-b border-[#FDFAF5]/10 pb-16 mb-20 items-baseline">
          
          {/* Column 1: Heading takes 35% (approx 4 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-sans font-normal text-[0.7rem] uppercase tracking-[0.25em] text-[#1B6CA8] block">
                Sekcja 01 — Tradycyjny Połów
              </span>
              <svg className="w-6 h-3 text-[#1B6CA8]" viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M2 6 Q 6 2, 10 6 T 18 6 T 22 6" />
              </svg>
            </div>
            <h2 className="font-display font-normal text-[2rem] sm:text-[2.5rem] text-[#FDFAF5] tracking-tight leading-none">
              Smażalnia Ryb
            </h2>
          </div>

          {/* Column 2: Body takes 45% (approx 5 cols) */}
          <div className="lg:col-span-5">
            <p className="font-sans font-light text-[1rem] leading-[1.8] text-[#FDFAF5]/70">
              Codzienny połów z bałtyckich kutrów, chrupiąca tradycyjna panierka lub delikatny wypiek z pieca konwekcyjnego. Wszystkie ryby przygotowujemy od podstaw na bieżąco.
            </p>
          </div>

          {/* Column 3: Beautiful minimalist line-art fish decoration with a floating swim animation */}
          <div className="lg:col-span-2 hidden lg:grid place-items-center text-[#1B6CA8] opacity-25">
            <motion.div
              animate={{ 
                x: [0, 8, -4, 0],
                y: [0, -3, 3, 0],
                rotate: [0, 2, -1, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="w-full"
            >
              <svg className="w-full h-auto max-w-[100px] mx-auto" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="0.8">
                <path d="M5 25 C 20 8, 55 8, 75 25 C 82 28, 95 32, 95 35 C 95 30, 95 20, 95 15 C 95 18, 82 22, 75 25 M5 25 C 20 42, 55 42, 75 25" style={{ strokePath: 1 }} />
                <path d="M22 14 L 22 36 M38 10 L 38 40 M54 10 L 54 40 M70 14 L 70 36 M8 25 L 82 25" />
                <circle cx="16" cy="21" r="1.2" fill="currentColor" />
              </svg>
            </motion.div>
          </div>
        </div>
 
        {/* Real typographic printed menu: Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16">
          
          {/* Column 1: Ryby z patelni i pieca */}
          <div className="space-y-10 font-sans">
            <h3 className="font-display font-light italic text-2xl text-[#FDFAF5] pb-4 border-b border-[#FDFAF5]/10">
              Ryby z patelni i pieca (cena za 100g)
            </h3>
            
            <div className="space-y-6">
              {FISH_MENU.items.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: Math.min(idx * 0.05, 0.45) }}
                  className="group"
                >
                  <div className="flex justify-between items-baseline gap-2">
                    <span className="font-display font-normal text-lg text-[#FDFAF5] tracking-wide group-hover:text-[#1B6CA8] transition-colors duration-250">
                      {item.name}
                    </span>
                    {/* Typographic dot leader */}
                    <div className="flex-grow border-b border-dotted border-[#FDFAF5]/15 mx-2" />
                    <span className="font-mono text-sm font-medium text-[#FDFAF5]/90 whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  {item.desc && (
                    <p className="font-sans font-light text-xs text-[#FDFAF5]/50 italic mt-1.5 max-w-[90%]">
                      {item.desc}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
 
          {/* Column 2: Zestawy Rybne */}
          <div className="space-y-10 font-sans">
            <h3 className="font-display font-light italic text-2xl text-[#FDFAF5] pb-4 border-b border-[#FDFAF5]/10">
              Gotowe Zestawy Obiadowe
            </h3>
            
            <div className="space-y-6">
              {FISH_SETS_MENU.items.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: Math.min(idx * 0.05, 0.45) }}
                  className="group"
                >
                  <div className="flex justify-between items-baseline gap-2">
                    <span className="font-display font-normal text-lg text-[#FDFAF5] tracking-wide group-hover:text-[#1B6CA8] transition-colors duration-250">
                      {item.name}
                      {item.size && (
                        <span className="font-sans text-[10px] text-[#FDFAF5]/40 uppercase tracking-widest ml-2 font-normal">
                          ({item.size})
                        </span>
                      )}
                    </span>
                    {/* Typographic dot leader */}
                    <div className="flex-grow border-b border-dotted border-[#FDFAF5]/15 mx-2" />
                    <span className="font-mono text-sm font-medium text-[#FDFAF5]/90 whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  {item.desc && (
                    <p className="font-sans font-light text-xs text-[#FDFAF5]/50 italic mt-1.5 max-w-[90%]">
                      {item.desc}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
 
        </div>
 
      </div>
    </section>
  );
}
