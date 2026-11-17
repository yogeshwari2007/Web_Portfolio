"use client";

import React from "react";
import { portfolioData, SkillCategory } from "@/data/portfolioData";
import {
  Code,
  Globe,
  Wrench,
  Sparkles,
  Info,
  CheckCircle2,
  Terminal,
  Cpu,
  Layers,
  FileCode,
  GitBranch,
  Monitor,
  Presentation,
} from "lucide-react";
import { motion } from "framer-motion";

export const Skills: React.FC = () => {
  const { sectionHeading, subtitle, note, categories } = portfolioData.skills;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Programming":
        return <Cpu className="w-5 h-5 text-[#D66B91]" />;
      case "Web Development":
        return <Globe className="w-5 h-5 text-[#D66B91]" />;
      case "Tools & Workflow":
      case "Tools":
        return <Wrench className="w-5 h-5 text-[#D66B91]" />;
      default:
        return <Code className="w-5 h-5 text-[#D66B91]" />;
    }
  };

  const getSkillIcon = (skillName: string) => {
    switch (skillName.toLowerCase()) {
      case "c":
        return <Terminal className="w-4 h-4 text-[#D66B91]" />;
      case "java":
        return <Cpu className="w-4 h-4 text-[#D66B91]" />;
      case "python":
        return <FileCode className="w-4 h-4 text-[#E88BAA]" />;
      case "html":
        return <Globe className="w-4 h-4 text-[#D66B91]" />;
      case "css":
        return <Layers className="w-4 h-4 text-[#E88BAA]" />;
      case "javascript":
        return <FileCode className="w-4 h-4 text-[#D66B91]" />;
      case "react":
        return <Sparkles className="w-4 h-4 text-[#E88BAA]" />;
      case "next.js":
        return <Layers className="w-4 h-4 text-[#422634]" />;
      case "git":
      case "github":
        return <GitBranch className="w-4 h-4 text-[#D66B91]" />;
      case "vs code":
        return <Monitor className="w-4 h-4 text-[#E88BAA]" />;
      case "powerpoint":
        return <Presentation className="w-4 h-4 text-[#D66B91]" />;
      default:
        return <Code className="w-4 h-4 text-[#D66B91]" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center sm:text-left mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase bg-[#FCEBF1] border border-[#F2D5E0] text-[#D66B91]">
            <Sparkles className="w-3.5 h-3.5 text-[#E88BAA]" />
            Capabilities &amp; Learning
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#422634] tracking-tight">
            {sectionHeading}
          </h2>
          <p className="text-[#765968] text-base sm:text-lg max-w-2xl">
            {subtitle}
          </p>

          {/* Important Learning Note Banner */}
          <div className="inline-flex items-center gap-2.5 p-3 sm:px-4 sm:py-2.5 rounded-xl bg-white border border-[#F2D5E0] text-xs sm:text-sm text-[#765968] max-w-2xl text-left mt-2 shadow-soft">
            <Info className="w-4 h-4 text-[#D66B91] shrink-0" />
            <span>
              <strong className="text-[#422634] font-medium">Learning Focus:</strong> {note}
            </span>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat: SkillCategory, catIndex: number) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="rounded-2xl bg-white border border-[#F2D5E0] p-6 flex flex-col justify-between hover:border-[#E88BAA] hover:shadow-card-hover transition-all duration-300 group shadow-soft"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#F2D5E0]">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#FCEBF1] border border-[#F2D5E0] group-hover:bg-[#E88BAA] group-hover:text-white transition-colors">
                      {getCategoryIcon(cat.category)}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-[#422634]">
                        {cat.category}
                      </h3>
                      <p className="text-xs text-[#8C6E7E] line-clamp-1">
                        {cat.tagline}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#D66B91] bg-[#FCEBF1] px-2.5 py-0.5 rounded-full border border-[#F2D5E0] font-semibold">
                    {cat.skills.length}
                  </span>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-[#FFF7FA] border border-[#F2D5E0] hover:bg-[#FCEBF1]/50 hover:border-[#E88BAA] transition-all duration-200"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="p-1 rounded bg-white border border-[#F2D5E0]">
                            {getSkillIcon(skill.name)}
                          </span>
                          <span className="text-sm font-semibold text-[#422634]">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-[#D66B91] flex items-center gap-1 font-medium">
                          <CheckCircle2 className="w-3 h-3 text-[#E88BAA]" />
                          Familiar
                        </span>
                      </div>
                      {skill.description && (
                        <p className="text-xs text-[#765968] pl-7 leading-relaxed">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer Note */}
              <div className="pt-4 mt-6 border-t border-[#F2D5E0] text-[11px] font-mono text-[#8C6E7E] flex items-center justify-between">
                <span>Core coursework &amp; self-study</span>
                <span className="text-[#D66B91] font-semibold">Ongoing</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
