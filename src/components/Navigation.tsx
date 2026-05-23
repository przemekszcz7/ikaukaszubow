import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RESTAURANT_IMAGES } from "../data";

interface NavigationProps {
  onScrollTo: (elementId: string) => void;
}

export default function Navigation({ onScrollTo }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Start", target: "hero" },
    { label: "Menu Rybne", target: "ryby-menu" },
    { label: "Dania Domowe", target: "domowe-menu" },
    { label: "Kawiarnia & Bar", target: "drinki-menu" },
    { label: "O Nas", target: "about" },
    { label: "Kontakt", target: "contact" }
  ];

  const handleLinkClick = (target: string) => {
    setIsOpen(false);
    onScrollTo(target);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FDFAF5]/98 backdrop-blur-md py-4 border-b border-[#16202C]/5"
          : "bg-transparent py-6"
      } text-[#16202C]`}
    >
      <div className="max-w-[1200px] mx-auto pl-4 lg:pl-6 pr-4 lg:pr-8 flex justify-between items-center">
        {/* Brand name — Cormorant Garamond 300 Italic */}
        <div
          onClick={() => handleLinkClick("hero")}
          className="cursor-pointer flex items-center gap-2 select-none whitespace-nowrap"
        >
          <span className="font-display font-light italic text-lg tracking-tight hover:text-[#1B6CA8] transition-colors whitespace-nowrap">
            IKA u Kaszuba
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-x-5 xl:gap-x-8">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => handleLinkClick(link.target)}
              className="relative font-sans font-normal text-[0.7rem] uppercase tracking-[0.2em] text-[#16202C]/75 hover:text-[#1B6CA8] transition-colors cursor-pointer group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#1B6CA8] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <a
            href="tel:501571221"
            className="font-sans font-normal text-[0.7rem] uppercase tracking-[0.15em] border border-[#1B6CA8] hover:bg-[#1B6CA8] hover:text-[#FDFAF5] transition-all px-4 py-1.5 text-[#1B6CA8]"
          >
            rezerwacja
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center space-x-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="font-sans font-normal text-[0.7rem] uppercase tracking-[0.2em] select-none text-[#16202C] cursor-pointer"
          >
            {isOpen ? "zamknij" : "menu"}
          </button>
        </div>
      </div>

      {/* Mobile drawer simple list */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-full left-0 right-0 bg-[#FDFAF5] border-b border-[#16202C]/10 py-6 px-6 shadow-sm overflow-hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.target}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  onClick={() => handleLinkClick(link.target)}
                  className="w-full text-left font-sans font-normal text-[0.75rem] uppercase tracking-[0.2em] text-[#16202C] py-2 border-b border-[#16202C]/5"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                href="tel:501571221"
                className="w-full text-center font-sans font-normal text-[0.75rem] uppercase tracking-[0.2em] bg-[#1B6CA8] text-[#FDFAF5] py-3 mt-2 block"
              >
                zadzwoń: 501 571 221
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
