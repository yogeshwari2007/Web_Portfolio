"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowDown, Mail, Sparkles, Terminal, Code2, Compass } from "lucide-react";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  const { heroIntro, heroHeadline, heroOneLiner, heroSupporting, availability } =
    portfolioData.personal;

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
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
        >
          {/* Top Status & Label */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase bg-[#FCEBF1] border border-[#F2D5E0] text-[#D66B91]">
              <Sparkles className="w-3.5 h-3.5 text-[#E88BAA]" />
              {heroIntro}
            </span>

            {/* Availability Indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium bg-white border border-[#F2D5E0] text-[#765968] shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E88BAA] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D66B91]" />
              </span>
              <span>{availability}</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-2">
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-[#422634] leading-[1.08]">
              <span className="bg-gradient-to-r from-[#422634] via-[#5A3849] to-[#D66B91] bg-clip-text text-transparent">
                {heroHeadline}
              </span>
            </h1>
            <p className="font-heading text-lg sm:text-xl lg:text-2xl font-medium text-[#D66B91]">
              Computer Science & Engineering Student
            </p>
          </div>

          {/* One-liner Introduction */}
          <p className="text-base sm:text-lg text-[#765968] leading-relaxed max-w-xl">
            {heroOneLiner}
          </p>

          {/* Supporting line */}
          <p className="text-sm sm:text-base text-[#8C6E7E] max-w-lg leading-relaxed border-l-2 border-[#E88BAA] pl-4 py-0.5">
            {heroSupporting}
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            {/* Primary button: Dusty rose with white text */}
            <button
              onClick={() => scrollTo("projects")}
              className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm bg-[#E88BAA] text-white shadow-soft hover:bg-[#D66B91] hover:shadow-card-hover transition-all duration-300"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>

            {/* Secondary button: White background with pink border */}
            <button
              onClick={() => scrollTo("contact")}
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm bg-white text-[#422634] border-2 border-[#F2D5E0] hover:border-[#E88BAA] hover:bg-[#FCEBF1]/50 transition-all duration-300 shadow-sm"
            >
              <Mail className="w-4 h-4 text-[#D66B91] group-hover:scale-110 transition-transform" />
              <span>Get In Touch</span>
            </button>
          </div>

          {/* Quick Info Badges */}
          <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-[#8C6E7E]">
            <span className="flex items-center gap-1.5 font-medium text-[#422634]">
              <Compass className="w-3.5 h-3.5 text-[#E88BAA]" />
              BIT Bengaluru
            </span>
            <span className="text-[#F2D5E0]">•</span>
            <span className="flex items-center gap-1.5 font-medium text-[#422634]">
              <Code2 className="w-3.5 h-3.5 text-[#E88BAA]" />
              Frontend & Core CS
            </span>
            <span className="text-[#F2D5E0]">•</span>
            <span>Bengaluru, India</span>
          </div>
        </motion.div>

        {/* Right Column: Sleek Elegant Visual Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="lg:col-span-5 relative"
        >
          {/* Subtle Ambient Backing Glow */}
          <div className="absolute inset-0 bg-[#E88BAA]/15 blur-2xl rounded-3xl -z-10" />

          {/* Window / Profile Card */}
          <div className="rounded-2xl bg-white border border-[#F2D5E0] p-5 sm:p-6 shadow-soft-lg relative overflow-hidden">
            {/* Header / Traffic lights */}
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
                <span className="text-[#8C6E7E]">role:</span>{" "}
                <span className="text-[#B84D73] font-medium">&quot;Software Developer &amp; Student&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#8C6E7E]">college:</span>{" "}
                <span className="text-[#B84D73] font-medium">&quot;BIT Bengaluru&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#8C6E7E]">passions:</span> [
                <span className="text-[#D66B91]">&quot;Frontend&quot;</span>,{" "}
                <span className="text-[#D66B91]">&quot;Problem Solving&quot;</span>,{" "}
                <span className="text-[#D66B91]">&quot;Next.js&quot;</span>],
              </div>
              <div className="pl-4">
                <span className="text-[#8C6E7E]">openToOpportunities:</span>{" "}
                <span className="text-[#D66B91] font-semibold">true</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#8C6E7E]">philosophy:</span>{" "}
                <span className="text-[#A03E67] font-medium">&quot;Learn by building &amp; experimenting&quot;</span>
              </div>
              <div>&#125;;</div>

              <div className="pt-3 border-t border-[#F2D5E0] text-[#8C6E7E] text-[11px] flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-[#D66B91] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E88BAA] inline-block animate-pulse" />
                  Ready to collaborate
                </span>
                <span className="text-[#A38795]">UTF-8 • TypeScript</span>
              </div>
            </div>

            {/* Floating Mini Tags */}
            <div className="mt-5 pt-4 border-t border-[#F2D5E0] flex flex-wrap gap-2">
              <span className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-[#FCEBF1] border border-[#F2D5E0] text-[#422634] font-medium hover:border-[#E88BAA] transition-colors">
                #NextJS
              </span>
              <span className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-[#FCEBF1] border border-[#F2D5E0] text-[#422634] font-medium hover:border-[#E88BAA] transition-colors">
                #TypeScript
              </span>
              <span className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-[#FCEBF1] border border-[#F2D5E0] text-[#422634] font-medium hover:border-[#E88BAA] transition-colors">
                #React
              </span>
              <span className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-[#FCEBF1] border border-[#F2D5E0] text-[#422634] font-medium hover:border-[#E88BAA] transition-colors">
                #C_Lang
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
