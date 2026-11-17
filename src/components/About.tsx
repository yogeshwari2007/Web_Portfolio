"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { GraduationCap, MapPin, Sparkles, BookOpen, Quote, Heart, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export const About: React.FC = () => {
  const { sectionHeading, subtitle, paragraphs, quickStats } = portfolioData.about;

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center sm:text-left mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase bg-[#FCEBF1] border border-[#F2D5E0] text-[#D66B91]">
            <Sparkles className="w-3.5 h-3.5 text-[#E88BAA]" />
            Background &amp; Story
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#422634] tracking-tight">
            {sectionHeading}
          </h2>
          <p className="text-[#765968] text-base sm:text-lg max-w-2xl">
            {subtitle}
          </p>
        </div>

        {/* Content Layout - Clean Typography-Focused Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Biography Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Highlighted Quote Callout */}
            <div className="p-6 rounded-2xl bg-white border border-[#F2D5E0] shadow-soft relative overflow-hidden">
              <div className="absolute top-4 right-4 text-[#FCEBF1] select-none pointer-events-none">
                <Quote className="w-16 h-16 opacity-60" />
              </div>
              <div className="flex items-start gap-3 relative z-10">
                <div className="p-2 rounded-xl bg-[#FCEBF1] text-[#D66B91] shrink-0 mt-0.5">
                  <Heart className="w-4 h-4 fill-[#E88BAA] text-[#E88BAA]" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#422634] mb-1">
                    Building With Purpose
                  </h3>
                  <p className="text-sm text-[#765968] italic leading-relaxed">
                    &quot;I believe in learning by building, experimenting, and constantly challenging myself to turn abstract logic into delightful real-world experiences.&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Bio paragraphs */}
            <div className="space-y-4 text-[#765968] text-base sm:text-lg leading-relaxed bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-[#F2D5E0] shadow-soft">
              {paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className={idx === 0 ? "text-[#422634] font-medium text-lg leading-relaxed" : ""}
                >
                  {p}
                </p>
              ))}

              <div className="pt-4 mt-2 border-t border-[#F2D5E0] flex items-center justify-between text-xs text-[#8C6E7E] font-mono">
                <span>Bangalore Institute of Technology</span>
                <span className="text-[#D66B91] font-semibold">Bengaluru, Karnataka</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Highlights & Academic Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-[#F2D5E0] shadow-soft hover:border-[#E88BAA] transition-colors group">
                <div className="flex items-center gap-2 text-[#D66B91] text-xs font-mono uppercase tracking-wider mb-2">
                  <div className="p-1.5 rounded-lg bg-[#FCEBF1] group-hover:bg-[#E88BAA] group-hover:text-white transition-colors">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  Education
                </div>
                <div className="text-sm font-bold text-[#422634]">B.E. Computer Science</div>
                <div className="text-xs text-[#8C6E7E] mt-0.5">Bangalore Inst. of Technology</div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#F2D5E0] shadow-soft hover:border-[#E88BAA] transition-colors group">
                <div className="flex items-center gap-2 text-[#D66B91] text-xs font-mono uppercase tracking-wider mb-2">
                  <div className="p-1.5 rounded-lg bg-[#FCEBF1] group-hover:bg-[#E88BAA] group-hover:text-white transition-colors">
                    <MapPin className="w-4 h-4" />
                  </div>
                  Location
                </div>
                <div className="text-sm font-bold text-[#422634]">Bengaluru, India</div>
                <div className="text-xs text-[#8C6E7E] mt-0.5">Silicon Valley of India</div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#F2D5E0] shadow-soft hover:border-[#E88BAA] transition-colors group">
                <div className="flex items-center gap-2 text-[#D66B91] text-xs font-mono uppercase tracking-wider mb-2">
                  <div className="p-1.5 rounded-lg bg-[#FCEBF1] group-hover:bg-[#E88BAA] group-hover:text-white transition-colors">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  Core Focus
                </div>
                <div className="text-sm font-bold text-[#422634]">Frontend &amp; Core CS</div>
                <div className="text-xs text-[#8C6E7E] mt-0.5">React, Next.js, Algorithms</div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#F2D5E0] shadow-soft hover:border-[#E88BAA] transition-colors group">
                <div className="flex items-center gap-2 text-[#D66B91] text-xs font-mono uppercase tracking-wider mb-2">
                  <div className="p-1.5 rounded-lg bg-[#FCEBF1] group-hover:bg-[#E88BAA] group-hover:text-white transition-colors">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  Approach
                </div>
                <div className="text-sm font-bold text-[#422634]">Learn by Building</div>
                <div className="text-xs text-[#8C6E7E] mt-0.5">Hands-on practical projects</div>
              </div>
            </div>

            {/* Current Journey Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#FCEBF1] to-white border border-[#F2D5E0] shadow-soft space-y-3">
              <h4 className="font-heading font-bold text-base text-[#422634] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E88BAA]" />
                Current Engineering Journey
              </h4>
              <p className="text-xs text-[#765968] leading-relaxed">
                Balancing structured academic foundations in data structures, algorithms, and computer systems with modern frontend exploration in Next.js, TypeScript, and interactive web architecture.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono">
                <span className="px-2.5 py-1 rounded-md bg-white border border-[#F2D5E0] text-[#422634]">
                  CS Fundamentals
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white border border-[#F2D5E0] text-[#422634]">
                  Modern Web
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white border border-[#F2D5E0] text-[#422634]">
                  Problem Solving
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
