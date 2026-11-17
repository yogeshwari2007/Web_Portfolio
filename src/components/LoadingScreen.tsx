"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsLoading(false);
      return;
    }

    // Elegant minimal loading duration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 850);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FFF7FA] pointer-events-none"
        >
          {/* Ambient soft glow */}
          <div className="absolute w-64 h-64 bg-[#E88BAA]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Logo container */}
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-white border border-[#F2D5E0] shadow-soft"
            >
              <span className="font-heading font-extrabold text-2xl tracking-tight text-[#422634]">
                YS
              </span>
              <motion.span
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                className="w-2.5 h-2.5 rounded-full bg-[#E88BAA] ml-1 self-end mb-4"
              />
            </motion.div>

            {/* Subtle progress bar */}
            <div className="w-28 h-1 bg-[#FCEBF1] rounded-full overflow-hidden mt-5 border border-[#F2D5E0]">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.75, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-[#E88BAA] to-[#D66B91] rounded-full"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[11px] font-mono text-[#8C6E7E] mt-3 tracking-widest uppercase"
            >
              Curating portfolio...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
