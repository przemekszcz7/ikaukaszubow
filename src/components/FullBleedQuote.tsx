import React from "react";
import { motion } from "motion/react";

export default function FullBleedQuote() {
  return (
    <section
      className="relative w-full bg-[#16202C] text-[#FDFAF5]/85 py-36 md:py-44 flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Absolute positioned fine-line compass background watermark */}
      <div className="absolute inset-0 opacity-[0.02] text-[#FDFAF5] pointer-events-none flex items-center justify-center select-none">
        <svg className="w-[500px] h-[500px]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <circle cx="50" cy="50" r="40" />
          <circle cx="50" cy="50" r="38" strokeDasharray="1 1" />
          <path d="M50 2 L50 98 M2 50 L98 50 M14.6 14.6 L85.4 85.4 M14.6 85.4 L85.4 14.6" />
          <polygon points="50,10 53,47 50,50 47,47" fill="currentColor" />
          <polygon points="50,90 53,53 50,50 47,53" fill="currentColor" />
          <polygon points="90,50 53,53 50,50 53,47" fill="currentColor" />
          <polygon points="10,50 47,53 50,50 47,47" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto space-y-10 z-10">
        
        {/* Large centered Cormorant 300 italic quote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.85 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className="font-display font-light italic leading-tight tracking-tight text-[#FDFAF5]"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
        >
          Kaszub nad morzem
          <br />
          gotuje tak jak morze
          <br />
          mu podpowiada.
        </motion.p>

        {/* Animated Double Wavy Sea line divider, centered */}
        <div className="flex justify-center pt-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.6, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            className="text-[#1B6CA8]"
          >
            <svg className="w-16 h-4" viewBox="0 0 80 16" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M0 8 Q 10 3, 20 8 T 40 8 T 60 8 T 80 8" />
              <path d="M0 12 Q 10 7, 20 12 T 40 12 T 60 12 T 80 12" opacity="0.5" />
            </svg>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
