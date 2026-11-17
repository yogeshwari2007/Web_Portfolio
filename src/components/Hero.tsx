"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowDown, Mail, Sparkles, Terminal, Code2, Compass, Calendar, Pin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Hero: React.FC = () => {
  const {
    heroIntro,
    heroHeadline,
    rotatingRoles,
    heroOneLiner,
    heroSupporting,
    handwrittenNote,
    availability,
  } = portfolioData.personal;

  // Rotating roles index
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % rotatingRoles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [rotatingRoles.length]);

  // Live date display formatted cleanly
  const [currentDateStr, setCurrentDateStr] = useState("");

  useEffect(() => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      day: "numeric",
      month: "short",
    };
    setCurrentDateStr(`${now.toLocaleDateString("en-US", options)} • Bengaluru, IN`);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[94vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          {/* Top Status, Live Date & Intro */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase bg-[#FCEBF1] border border-[#F2D5E0] text-[#D66B91]">
              <Sparkles className="w-3.5 h-3.5 text-[#E88BAA]" />
              {heroIntro}
            </span>

            {/* Live Date Pill */}
            {currentDateStr && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white border border-[#F2D5E0] text-[#765968] shadow-sm">
                <Calendar className="w-3 h-3 text-[#E88BAA]" />
                {currentDateStr}
              </span>
            )}

            {/* Availability Indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium bg-white border border-[#F2D5E0] text-[#765968] shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E88BAA] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D66B91]" />
              </span>
              <span>{availability}</span>
            </div>
          </div>

          {/* Main Heading with Animated Text Reveal */}
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-[#422634] leading-[1.06]"
            >
              <span className="bg-gradient-to-r from-[#422634] via-[#5A3849] to-[#D66B91] bg-clip-text text-transparent">
                {heroHeadline}
              </span>
            </motion.h1>

            {/* Dynamic Rotating Roles */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-heading text-xl sm:text-2xl lg:text-3xl font-medium text-[#765968] py-1">
              <span className="shrink-0 select-none">Aspiring</span>
              <div className="relative inline-flex items-center min-h-[46px] sm:min-h-[54px] min-w-[170px] sm:min-w-[270px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingRoles[roleIndex]}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="inline-block font-bold text-[#D66B91] whitespace-nowrap leading-normal underline decoration-[#E88BAA]/60 underline-offset-4 decoration-2 py-1"
                  >
                    {rotatingRoles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* One-liner Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-[#765968] leading-relaxed max-w-xl"
          >
            {heroOneLiner}
          </motion.p>

          {/* Supporting line */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-sm sm:text-base text-[#8C6E7E] max-w-lg leading-relaxed border-l-2 border-[#E88BAA] pl-4 py-0.5"
          >
            {heroSupporting}
          </motion.p>

          {/* Action Buttons with Elevated Hover */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            {/* Primary button: Dusty rose with white text */}
            <button
              onClick={() => scrollTo("projects")}
              className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm bg-[#E88BAA] text-white shadow-soft hover:bg-[#D66B91] hover:shadow-card-hover hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>

            {/* Secondary button: White background with pink border */}
            <button
              onClick={() => scrollTo("contact")}
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm bg-white text-[#422634] border-2 border-[#F2D5E0] hover:border-[#E88BAA] hover:bg-[#FCEBF1]/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-sm"
            >
              <Mail className="w-4 h-4 text-[#D66B91] group-hover:scale-110 transition-transform" />
              <span>Get In Touch</span>
            </button>
          </motion.div>

          {/* Quick Info Badges */}
          <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-[#8C6E7E]">
            <span className="flex items-center gap-1.5 font-medium text-[#422634]">
              <Compass className="w-3.5 h-3.5 text-[#E88BAA]" />
              BIT Bengaluru
            </span>
            <span className="text-[#F2D5E0]">•</span>
            <span className="flex items-center gap-1.5 font-medium text-[#422634]">
              <Code2 className="w-3.5 h-3.5 text-[#E88BAA]" />
              Frontend &amp; Core CS
            </span>
            <span className="text-[#F2D5E0]">•</span>
            <span>Bengaluru, India</span>
          </div>
        </div>

        {/* Right Column: Visual Card + Floating Handwritten Note */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 relative flex flex-col items-center"
        >
          {/* Subtle Ambient Backing Glow */}
          <div className="absolute inset-0 bg-[#E88BAA]/15 blur-2xl rounded-3xl -z-10" />

          {/* Floating Handwritten-style Personal Note */}
          <motion.div
            initial={{ opacity: 0, y: -20, rotate: -4 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            whileHover={{ rotate: 0, scale: 1.03 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute -top-7 -right-2 z-20 bg-[#FFFDF7] border border-[#F2D5E0] rounded-2xl p-3.5 shadow-soft max-w-[240px] select-none cursor-pointer"
          >
            {/* Faux Washi Tape decoration */}
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#FCEBF1]/80 border-t border-b border-[#F2D5E0] rotate-1" />
            <p className="text-xs text-[#422634] font-serif italic text-center leading-relaxed pt-1">
              &quot;{handwrittenNote}&quot;
            </p>
            <div className="flex items-center justify-center gap-1 mt-1 text-[10px] text-[#D66B91] font-mono">
              <span>— Yogeshwari</span>
            </div>
          </motion.div>

          {/* Profile & Tech Window Card */}
          <div className="w-full rounded-3xl bg-white border border-[#F2D5E0] p-6 shadow-soft-lg relative overflow-hidden mt-6">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#F2D5E0]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#E88BAA] inline-block opacity-80" />
                <span className="w-3 h-3 rounded-full bg-[#F5C2D2] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#E5D2DA] inline-block" />
                <span className="ml-2 text-xs font-mono text-[#765968] flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#D66B91]" />
                  developer.profile.ts
                </span>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#D66B91] bg-[#FCEBF1] px-2.5 py-0.5 rounded-full border border-[#F2D5E0] font-semibold">
                ACTIVE
              </span>
            </div>

            {/* Code content */}
            <div className="font-mono text-xs sm:text-[13px] leading-relaxed space-y-2 text-[#765968]">
              <div>
                <span className="text-[#D66B91] font-semibold">const</span>{" "}
                <span className="text-[#422634] font-bold">developer</span> = &#123;
              </div>
              <div className="pl-4">
                <span className="text-[#8C6E7E]">name:</span>{" "}
                <span className="text-[#B84D73] font-medium">&quot;Yogeshwari S&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#8C6E7E]">institution:</span>{" "}
                <span className="text-[#B84D73] font-medium">&quot;BIT Bengaluru&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#8C6E7E]">roles:</span> [
                <span className="text-[#D66B91]">&quot;Developer&quot;</span>,{" "}
                <span className="text-[#D66B91]">&quot;Learner&quot;</span>,{" "}
                <span className="text-[#D66B91]">&quot;Creator&quot;</span>],
              </div>
              <div className="pl-4">
                <span className="text-[#8C6E7E]">curiosityDriven:</span>{" "}
                <span className="text-[#D66B91] font-semibold">true</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#8C6E7E]">mindset:</span>{" "}
                <span className="text-[#A03E67] font-medium">&quot;Build, experiment, iterate&quot;</span>
              </div>
              <div>&#125;;</div>

              <div className="pt-3 border-t border-[#F2D5E0] text-[#8C6E7E] text-[11px] flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-[#D66B91] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E88BAA] inline-block animate-pulse" />
                  Ready to collaborate
                </span>
                <span className="text-[#A38795]">Next.js 14 • React</span>
              </div>
            </div>

            {/* Interactive button to try terminal */}
            <div className="mt-5 pt-4 border-t border-[#F2D5E0] flex items-center justify-between">
              <span className="text-xs text-[#8C6E7E]">Interactive console below:</span>
              <button
                type="button"
                onClick={() => scrollTo("terminal")}
                className="text-xs font-mono font-semibold text-[#D66B91] hover:text-[#422634] flex items-center gap-1 transition-colors"
              >
                <span>Launch Terminal</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
