"use client";

import React, { useEffect } from "react";
import { Project } from "@/data/portfolioData";
import { X, ExternalLink, Github, Sparkles, CheckCircle2, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#422634]/35 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-2xl bg-white border border-[#F2D5E0] rounded-2xl p-6 sm:p-8 shadow-soft-lg z-10 overflow-hidden"
          >
            {/* Top Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-xl bg-[#FFF7FA] border border-[#F2D5E0] text-[#765968] hover:text-[#422634] hover:bg-[#FCEBF1] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header info */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-mono text-sm font-bold text-[#D66B91] bg-[#FCEBF1] px-2.5 py-1 rounded-md border border-[#F2D5E0]">
                PROJECT {project.number}
              </span>
              <span className="text-xs font-mono text-[#8C6E7E] uppercase tracking-wider">
                {project.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-[#B84D73] bg-[#FCEBF1] px-2.5 py-0.5 rounded-full border border-[#F2D5E0] font-medium">
                <CheckCircle2 className="w-3 h-3 text-[#E88BAA]" />
                {project.status}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#422634] mb-4">
              {project.title}
            </h3>

            {/* Description */}
            <div className="space-y-4 text-[#765968] text-sm sm:text-base leading-relaxed mb-6">
              <p className="text-[#422634] font-medium">{project.description}</p>
              <p className="text-[#765968] text-sm">{project.longDescription}</p>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#8C6E7E] mb-3 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-[#D66B91]" />
                Technologies &amp; Libraries
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono rounded-lg bg-[#FCEBF1] border border-[#F2D5E0] text-[#422634] font-medium hover:border-[#E88BAA] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links and Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-6 border-t border-[#F2D5E0]">
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
                  title="Live deployment URL placeholder"
                >
                  <span>Deployment Link Pending</span>
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
                Close Window
              </button>
            </div>

            {/* Note on editing */}
            <div className="mt-4 pt-3 border-t border-[#F2D5E0] text-[11px] text-[#8C6E7E] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#E88BAA]" />
              <span>
                To configure project links: update <code className="text-[#D66B91]">src/data/portfolioData.ts</code>
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
