"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Heart, Award, Code, Compass } from "lucide-react";

interface EasterEggModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EasterEggModal: React.FC<EasterEggModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#422634]/40 backdrop-blur-sm"
          />

          {/* Celebratory floating particles */}
          <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            {[...Array(16)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: "50vw",
                  y: "50vh",
                  opacity: 1,
                  scale: 0.5,
                }}
                animate={{
                  x: `${Math.random() * 90 + 5}vw`,
                  y: `${Math.random() * 80 + 10}vh`,
                  opacity: [1, 1, 0],
                  scale: [0.5, 1.2, 0.8],
                  rotate: Math.random() * 360,
                }}
                transition={{
                  duration: 2.5 + Math.random() * 1.5,
                  ease: "easeOut",
                }}
                className="absolute text-xl"
              >
                {["✨", "🌸", "💻", "💖", "✦", "🎉", "🌟", "🌷"][i % 8]}
              </motion.div>
            ))}
          </div>

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg bg-white border-2 border-[#E88BAA] rounded-3xl p-6 sm:p-8 shadow-card-hover z-50 text-center overflow-hidden"
          >
            {/* Top Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-xl bg-[#FFF7FA] border border-[#F2D5E0] text-[#765968] hover:text-[#422634] hover:bg-[#FCEBF1] transition-colors"
              aria-label="Close easter egg"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-[#FCEBF1] border border-[#F2D5E0] text-[#D66B91] mb-4">
              <Award className="w-4 h-4 text-[#E88BAA]" />
              Achievement Unlocked: Super Curious!
            </div>

            {/* Title */}
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#422634] mb-3">
              You Found the Secret Easter Egg! 🌸
            </h3>

            {/* Content text */}
            <div className="space-y-3 text-sm text-[#765968] leading-relaxed mb-6">
              <p>
                <em className="font-serif italic text-base text-[#D66B91]">
                  &quot;Curiosity is the engine of achievement.&quot;
                </em>
              </p>
              <p>
                As a Computer Science student at BIT Bengaluru, I truly believe great software lives in the details—from the underlying algorithms to delightful micro-interactions.
              </p>
              <p className="text-xs text-[#8C6E7E] bg-[#FFF7FA] p-3 rounded-xl border border-[#F2D5E0]">
                💡 <strong>Fun Fact:</strong> You clicked my logo 5 times to reveal this! Thank you for taking the time to explore every corner of my work.
              </p>
            </div>

            {/* Interactive button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#E88BAA] text-white font-semibold text-sm hover:bg-[#D66B91] transition-colors shadow-soft"
              >
                Back to Exploring ✨
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
