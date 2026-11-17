"use client";

import React, { useEffect, useState } from "react";
import { Project } from "@/data/portfolioData";
import {
  X,
  ExternalLink,
  Github,
  Sparkles,
  CheckCircle2,
  Code2,
  Target,
  Compass,
  Lightbulb,
  ArrowRight,
  GitBranch,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<"overview" | "approach" | "learnings">("overview");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      setActiveTab("overview");
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#422634]/40 backdrop-blur-sm"
          />

          {/* Case Study Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-3xl bg-white border-2 border-[#F2D5E0] rounded-3xl p-6 sm:p-8 shadow-card-hover z-10 max-h-[90vh] overflow-y-auto"
          >
            {/* Top Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-xl bg-[#FFF7FA] border border-[#F2D5E0] text-[#765968] hover:text-[#422634] hover:bg-[#FCEBF1] transition-colors"
              aria-label="Close case study"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="font-mono text-xs font-bold text-[#D66B91] bg-[#FCEBF1] px-2.5 py-1 rounded-md border border-[#F2D5E0]">
                CASE STUDY {project.number}
              </span>
              <span className="text-xs font-mono text-[#8C6E7E] uppercase tracking-wider">
                {project.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-[#B84D73] bg-[#FCEBF1] px-2.5 py-0.5 rounded-full border border-[#F2D5E0] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E88BAA]" />
                {project.status}
              </span>
            </div>

            {/* Project Title */}
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#422634] mb-3">
              {project.title}
            </h3>

            {/* Subtitle / Overview */}
            <p className="text-sm sm:text-base text-[#765968] leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Case Study Navigation Tabs */}
            <div className="flex items-center gap-2 border-b border-[#F2D5E0] pb-3 mb-6 overflow-x-auto">
              <button
                type="button"
                onClick={() => setActiveTab("overview")}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                  activeTab === "overview"
                    ? "bg-[#E88BAA] text-white shadow-soft"
                    : "bg-[#FFF7FA] text-[#765968] hover:text-[#422634] border border-[#F2D5E0]"
                }`}
              >
                1. Overview &amp; Problem
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("approach")}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                  activeTab === "approach"
                    ? "bg-[#E88BAA] text-white shadow-soft"
                    : "bg-[#FFF7FA] text-[#765968] hover:text-[#422634] border border-[#F2D5E0]"
                }`}
              >
                2. Approach &amp; Tech
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("learnings")}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                  activeTab === "learnings"
                    ? "bg-[#E88BAA] text-white shadow-soft"
                    : "bg-[#FFF7FA] text-[#765968] hover:text-[#422634] border border-[#F2D5E0]"
                }`}
              >
                3. Learnings &amp; Roadmap
              </button>
            </div>

            {/* Tab Contents */}
            <AnimatePresence mode="wait">
              {activeTab === "overview" && (
                <motion.div
                  key="tab-overview"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-5"
                >
                  {/* Detailed Description */}
                  <div className="p-4 rounded-2xl bg-[#FFF7FA] border border-[#F2D5E0] text-sm text-[#765968] leading-relaxed">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#D66B91] mb-2 font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#E88BAA]" />
                      Project Background
                    </h4>
                    <p>{project.longDescription}</p>
                  </div>

                  {/* Problem Statement Box */}
                  <div className="p-4 rounded-2xl bg-[#FCEBF1]/60 border border-[#F2D5E0] text-sm text-[#765968] leading-relaxed">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#B84D73] mb-2 font-bold flex items-center gap-1.5">
                      <Target className="w-4 h-4 text-[#D66B91]" />
                      The Problem Statement
                    </h4>
                    <p>{project.problemStatement}</p>
                  </div>
                </motion.div>
              )}

              {activeTab === "approach" && (
                <motion.div
                  key="tab-approach"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-5"
                >
                  {/* Approach */}
                  <div className="p-4 rounded-2xl bg-[#FFF7FA] border border-[#F2D5E0] text-sm text-[#765968] leading-relaxed">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#D66B91] mb-2 font-bold flex items-center gap-1.5">
                      <Compass className="w-4 h-4 text-[#E88BAA]" />
                      My Technical Approach
                    </h4>
                    <p>{project.approach}</p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#8C6E7E] mb-3 flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-[#D66B91]" />
                      Technologies &amp; Tools Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs font-mono rounded-xl bg-[#FCEBF1] border border-[#F2D5E0] text-[#422634] font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "learnings" && (
                <motion.div
                  key="tab-learnings"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-5"
                >
                  {/* Key Learnings */}
                  <div className="p-4 rounded-2xl bg-white border border-[#F2D5E0] shadow-sm">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#422634] mb-3 font-bold flex items-center gap-1.5">
                      <Lightbulb className="w-4 h-4 text-[#E88BAA]" />
                      Key Insights &amp; Learnings
                    </h4>
                    <ul className="space-y-2">
                      {project.keyLearnings.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#765968]">
                          <CheckCircle2 className="w-4 h-4 text-[#E88BAA] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Future Improvements */}
                  <div className="p-4 rounded-2xl bg-[#FFF7FA] border border-[#F2D5E0]">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#D66B91] mb-2 font-bold flex items-center gap-1.5">
                      <GitBranch className="w-4 h-4 text-[#E88BAA]" />
                      Future Roadmap &amp; Improvements
                    </h4>
                    <ul className="space-y-1.5">
                      {project.futureImprovements.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#765968]">
                          <ArrowRight className="w-3.5 h-3.5 text-[#D66B91] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Actions & Links Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-6 mt-6 border-t border-[#F2D5E0]">
              {project.liveUrl && project.liveUrl !== "#" ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#E88BAA] text-white font-semibold text-sm hover:bg-[#D66B91] shadow-soft transition-colors"
                >
                  <span>Live Preview</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <button
                  disabled
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#FFF7FA] text-[#A38795] border border-[#F2D5E0] text-sm cursor-not-allowed"
                >
                  <span>Live Preview Pending</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              )}

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-[#F2D5E0] text-[#422634] hover:border-[#E88BAA] hover:bg-[#FCEBF1]/50 transition-colors text-sm font-medium"
              >
                <Github className="w-4 h-4 text-[#D66B91]" />
                <span>GitHub Repository</span>
              </a>

              <button
                onClick={onClose}
                className="sm:ml-auto px-4 py-2.5 text-xs text-[#8C6E7E] hover:text-[#422634] font-mono transition-colors"
              >
                Close Case Study
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
