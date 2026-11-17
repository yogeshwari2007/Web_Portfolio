"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Sparkles, BookOpen, Laptop, Compass, Headphones, Music2, Radio } from "lucide-react";
import { motion } from "framer-motion";

export const CurrentlySection: React.FC = () => {
  const { sectionHeading, subtitle, learning, building, exploring, listening } =
    portfolioData.currently;

  return (
    <section id="currently" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center sm:text-left mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase bg-[#FCEBF1] border border-[#F2D5E0] text-[#D66B91]">
            <Radio className="w-3.5 h-3.5 text-[#E88BAA] animate-pulse" />
            Live Snapshot
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#422634] tracking-tight">
            {sectionHeading}
          </h2>
          <p className="text-[#765968] text-base sm:text-lg max-w-2xl">
            {subtitle}
          </p>
        </div>

        {/* 4 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          {/* Card 1: Currently Learning (Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 p-6 sm:p-7 rounded-3xl bg-white border border-[#F2D5E0] shadow-soft hover:border-[#E88BAA] hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#F2D5E0]">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-[#FCEBF1] text-[#D66B91]">
                    <BookOpen className="w-5 h-5 text-[#E88BAA]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#422634]">
                      {learning.title}
                    </h3>
                    <p className="text-xs text-[#8C6E7E]">{learning.subtitle}</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono uppercase bg-[#FCEBF1] text-[#D66B91] px-2.5 py-1 rounded-full border border-[#F2D5E0] font-semibold">
                  {learning.badge}
                </span>
              </div>

              <ul className="space-y-2.5">
                {learning.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#765968]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E88BAA] shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-4 mt-6 border-t border-[#F2D5E0] text-[11px] font-mono text-[#8C6E7E] flex items-center justify-between">
              <span>Coursework &amp; Self-study</span>
              <span className="text-[#D66B91] font-semibold">Daily practice</span>
            </div>
          </motion.div>

          {/* Card 2: Currently Building (Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 p-6 sm:p-7 rounded-3xl bg-white border border-[#F2D5E0] shadow-soft hover:border-[#E88BAA] hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#F2D5E0]">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-[#FCEBF1] text-[#D66B91]">
                    <Laptop className="w-5 h-5 text-[#E88BAA]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#422634]">
                      {building.title}
                    </h3>
                    <p className="text-xs text-[#8C6E7E]">{building.subtitle}</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono uppercase bg-[#FCEBF1] text-[#D66B91] px-2.5 py-1 rounded-full border border-[#F2D5E0] font-semibold">
                  {building.badge}
                </span>
              </div>

              <ul className="space-y-2.5">
                {building.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#765968]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D66B91] shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-4 mt-6 border-t border-[#F2D5E0] text-[11px] font-mono text-[#8C6E7E] flex items-center justify-between">
              <span>Next.js • TypeScript • C</span>
              <span className="text-[#D66B91] font-semibold">Building in public</span>
            </div>
          </motion.div>

          {/* Card 3: Currently Exploring (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 p-6 sm:p-7 rounded-3xl bg-white border border-[#F2D5E0] shadow-soft hover:border-[#E88BAA] hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#F2D5E0]">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-[#FCEBF1] text-[#D66B91]">
                    <Compass className="w-5 h-5 text-[#E88BAA]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#422634]">
                      {exploring.title}
                    </h3>
                    <p className="text-xs text-[#8C6E7E]">{exploring.subtitle}</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono uppercase bg-[#FCEBF1] text-[#D66B91] px-2.5 py-1 rounded-full border border-[#F2D5E0] font-semibold">
                  {exploring.badge}
                </span>
              </div>

              <ul className="space-y-2.5">
                {exploring.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#765968]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E88BAA] shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-4 mt-6 border-t border-[#F2D5E0] text-[11px] font-mono text-[#8C6E7E] flex items-center justify-between">
              <span>Frontend Design Frontiers</span>
              <span className="text-[#D66B91] font-semibold">Design + Code</span>
            </div>
          </motion.div>

          {/* Card 4: Currently Listening To (Span 7) - With Music Wave Visualizer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-7 p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#FFF7FA] via-white to-[#FCEBF1] border border-[#F2D5E0] shadow-soft hover:border-[#E88BAA] hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#F2D5E0]">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-white border border-[#F2D5E0] text-[#D66B91] shadow-sm">
                    <Headphones className="w-5 h-5 text-[#E88BAA]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#422634]">
                      Currently Listening To
                    </h3>
                    <p className="text-xs text-[#8C6E7E]">{listening.genre}</p>
                  </div>
                </div>

                {/* Animated Music Visualizer Waves */}
                <div className="flex items-end gap-1 h-5 px-3 py-1 rounded-full bg-white border border-[#F2D5E0] shadow-sm">
                  <motion.span
                    animate={{ height: ["40%", "100%", "30%", "80%"] }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                    className="w-1 bg-[#E88BAA] rounded-full inline-block"
                  />
                  <motion.span
                    animate={{ height: ["80%", "30%", "100%", "40%"] }}
                    transition={{ repeat: Infinity, duration: 0.9, ease: "easeInOut", delay: 0.2 }}
                    className="w-1 bg-[#D66B91] rounded-full inline-block"
                  />
                  <motion.span
                    animate={{ height: ["50%", "90%", "40%", "100%"] }}
                    transition={{ repeat: Infinity, duration: 1.1, ease: "easeInOut", delay: 0.4 }}
                    className="w-1 bg-[#E88BAA] rounded-full inline-block"
                  />
                  <motion.span
                    animate={{ height: ["90%", "40%", "80%", "30%"] }}
                    transition={{ repeat: Infinity, duration: 1.0, ease: "easeInOut", delay: 0.1 }}
                    className="w-1 bg-[#D66B91] rounded-full inline-block"
                  />
                </div>
              </div>

              {/* Music Details */}
              <div className="p-4 rounded-2xl bg-white border border-[#F2D5E0] shadow-sm space-y-2 mb-3">
                <div className="flex items-center gap-2">
                  <Music2 className="w-4 h-4 text-[#E88BAA]" />
                  <span className="font-heading font-bold text-base text-[#422634]">
                    {listening.track}
                  </span>
                </div>
                <div className="text-xs text-[#D66B91] font-mono">
                  {listening.artist}
                </div>
                <p className="text-xs text-[#765968] italic pt-1 leading-relaxed border-t border-[#F2D5E0]/60">
                  &quot;{listening.note}&quot;
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-[#F2D5E0] text-[11px] font-mono text-[#8C6E7E] flex items-center justify-between">
              <span>Coding Session Soundscape</span>
              <span className="text-[#E88BAA] font-semibold">Lo-Fi Beats</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
