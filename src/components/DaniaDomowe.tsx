import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MEAT_MENU,
  PIEROGI_MENU,
  SOUPS_MENU,
  BREAKFAST_MENU,
  ACC_MENU,
  KIDS_MENU,
  FASTFOOD_MENU,
  SALAD_MENU
} from "../data";

export default function DaniaDomowe() {
  const categories = [
    { id: "meat", label: MEAT_MENU.title, data: MEAT_MENU },
    { id: "soups", label: SOUPS_MENU.title, data: SOUPS_MENU },
    { id: "pierogi", label: PIEROGI_MENU.title, data: PIEROGI_MENU },
    { id: "breakfast", label: BREAKFAST_MENU.title, data: BREAKFAST_MENU },
    { id: "kids", label: KIDS_MENU.title, data: KIDS_MENU },
    { id: "fastfood", label: FASTFOOD_MENU.title, data: FASTFOOD_MENU },
    { id: "salads", label: SALAD_MENU.title, data: SALAD_MENU },
    { id: "additions", label: ACC_MENU.title, data: ACC_MENU }
  ];

  const [activeTab, setActiveTab] = useState("meat");
  const activeCategory = categories.find((cat) => cat.id === activeTab) || categories[0];

  return (
    <section
      id="domowe-menu"
      className="py-32 md:py-40 bg-[#FDFAF5] text-[#16202C]"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Title and Category Navigation (Contained Text Block, Breathing space) */}
          <div className="lg:col-span-4 space-y-12">
            
            {/* Clean Section Identifier */}
            <div className="space-y-4 max-w-[480px]">
              <div className="flex items-center gap-3">
                <span className="font-sans font-normal text-[0.7rem] uppercase tracking-[0.25em] text-[#1B6CA8] block">
                  Sekcja 02 — Kuchnia Domowa
                </span>
                <svg className="w-5 h-5 text-[#1B6CA8] animate-[spin_10s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 3v18M3 12h18" strokeDasharray="1 1" />
                  <path d="M12 6l2 6-2 6-2-6z" fill="currentColor" fillOpacity="0.1" />
                </svg>
              </div>
              <h2 className="font-display font-normal text-[2rem] sm:text-[2.5rem] text-[#16202C] tracking-tight leading-none">
                Obiady Domowe &amp; Śniadania
              </h2>
              <p className="font-sans font-light text-[0.95rem] leading-[1.8] text-[#16202C]/60 pt-2">
                Domowe jedzenie przygotowywane z sercem. Nasza kuchnia wraca do tradycji lokalnych smaków pomorskiej wsi.
              </p>
            </div>

            {/* Vertical/Stack Category Navigation - luxurious negative space */}
            <div className="flex flex-col items-start space-y-3 pt-6 border-l border-[#1B6CA8]/10 pl-6">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`relative font-sans text-[0.75rem] uppercase tracking-[0.15em] transition-all duration-350 py-1.5 cursor-pointer text-left ${
                    activeTab === cat.id
                      ? "text-[#1B6CA8] font-normal pl-4"
                      : "text-[#16202C]/40 hover:text-[#16202C] pl-0"
                  }`}
                >
                  {activeTab === cat.id && (
                    <motion.span
                      layoutId="activeTabIndicator"
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#1B6CA8]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {cat.label}
                </button>
              ))}
            </div>

          </div>

          {/* Right Column: Menu List Items (Fills the remaining 8 columns) */}
          <div className="lg:col-span-8 space-y-8 lg:pl-12">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="space-y-8"
              >
                {/* Optional category subnote */}
                {activeCategory.data.subtitle && (
                  <p className="font-sans font-light text-xs text-[#16202C]/50 italic mb-8 pb-3 border-b border-[#16202C]/5">
                    * {activeCategory.data.subtitle}
                  </p>
                )}

                <div className="space-y-6">
                  {activeCategory.data.items.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: Math.min(idx * 0.05, 0.4) }}
                      className="group py-3 first:pt-0 last:pb-0"
                    >
                      <div className="flex justify-between items-baseline gap-2">
                        <span className="font-display font-normal text-lg text-[#16202C] tracking-wide group-hover:text-[#1B6CA8] transition-colors duration-250">
                          {item.name}
                          {item.size && (
                            <span className="font-sans text-[10px] text-[#16202C]/45 uppercase tracking-widest ml-2 font-normal">
                              {item.size}
                            </span>
                          )}
                        </span>
                        
                        {/* Dot leader */}
                        <div className="flex-grow border-b border-dotted border-[#16202C]/10 mx-2" />
                        
                        <span className="font-mono text-sm font-medium text-[#1B6CA8] whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                      {item.desc && (
                        <p className="font-sans font-light text-xs text-[#16202C]/50 italic mt-1.5 max-w-[90%]">
                          {item.desc}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}
