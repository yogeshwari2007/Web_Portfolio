"use client";

import React from "react";
import { portfolioData, TimelineItem } from "@/data/portfolioData";
import { Sparkles, Calendar, Milestone, Compass, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const JourneyTimeline: React.FC = () => {
  const { sectionHeading, subtitle, milestones } = portfolioData.journey;

  return (
    <section id="journey" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#FFF7FA]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase bg-[#FCEBF1] border border-[#F2D5E0] text-[#D66B91]">
            <Milestone className="w-3.5 h-3.5 text-[#E88BAA]" />
            Chronicle of Growth
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#422634] tracking-tight">
            {sectionHeading}
          </h2>
          <p className="text-[#765968] text-base sm:text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Timeline Track & Cards */}
        <div className="relative">
          {/* Vertical central spine line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#E88BAA] via-[#F2D5E0] to-[#E88BAA]/30" />

          <div className="space-y-10 md:space-y-14">
            {milestones.map((item: TimelineItem, index: number) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-6 md:gap-10`}
                >
                  {/* Left / Right Content Card */}
                  <div className="w-full md:w-[46%]">
                    <div className="p-6 rounded-2xl bg-white border border-[#F2D5E0] shadow-soft hover:border-[#E88BAA] hover:shadow-card-hover transition-all duration-300 group">
                      {/* Top meta tags */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="font-mono text-xs font-bold text-[#D66B91] bg-[#FCEBF1] px-2.5 py-1 rounded-md border border-[#F2D5E0]">
                          {item.year}
                        </span>
                        <span className="text-[11px] font-mono text-[#8C6E7E] uppercase tracking-wider">
                          {item.period}
                        </span>
                      </div>

                      {/* Title & Institution */}
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-[#422634] group-hover:text-[#D66B91] transition-colors mb-1">
                        {item.title}
                      </h3>
                      {item.institution && (
                        <p className="text-xs font-medium text-[#D66B91] flex items-center gap-1.5 mb-3">
                          <Compass className="w-3.5 h-3.5 text-[#E88BAA]" />
                          {item.institution}
                        </p>
                      )}

                      {/* Description */}
                      <p className="text-sm text-[#765968] leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Highlights / Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#F2D5E0]">
                        {item.highlights.map((badge) => (
                          <span
                            key={badge}
                            className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-[#FFF7FA] border border-[#F2D5E0] text-[#422634] font-medium"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Node Indicator */}
                  <div className="hidden md:flex items-center justify-center relative z-10 w-9 h-9 rounded-full bg-white border-2 border-[#E88BAA] shadow-soft text-[#D66B91]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E88BAA] animate-pulse" />
                  </div>

                  {/* Empty Spacer Column for Alignment */}
                  <div className="hidden md:block w-full md:w-[46%]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
