"use client";

import React, { useState } from "react";
import { portfolioData, Project } from "@/data/portfolioData";
import { ProjectModal } from "./ProjectModal";
import {
  Sparkles,
  ArrowUpRight,
  Github,
  Code2,
  Terminal,
  Layers,
  FolderGit2,
} from "lucide-react";
import { motion } from "framer-motion";

export const Projects: React.FC = () => {
  const { sectionHeading, subtitle, items } = portfolioData.projects;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Stylized preview visuals for each project tailored to the elegant pink aesthetic
  const renderProjectVisual = (project: Project) => {
    if (project.id === "personal-portfolio") {
      return (
        <div className="h-44 w-full bg-gradient-to-br from-[#FFF7FA] to-[#FCEBF1] rounded-xl p-4 border border-[#F2D5E0] overflow-hidden relative font-mono text-[11px] select-none flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-[#F2D5E0] text-[#8C6E7E]">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E88BAA]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F5C2D2]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5D2DA]" />
            </div>
            <span className="text-[10px] text-[#D66B91] font-semibold">Next.js App Router</span>
          </div>

          <div className="space-y-1.5 py-2 text-[#765968]">
            <div className="flex items-center gap-2">
              <span className="text-[#D66B91] font-semibold">export default function</span>{" "}
              <span className="text-[#422634] font-bold">Portfolio()</span> &#123;
            </div>
            <div className="pl-4 text-[#B84D73] font-medium">
              return &lt;Hero /&gt; &lt;About /&gt; &lt;Projects /&gt;
            </div>
            <div className="text-[#8C6E7E]">&#125;</div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-[#F2D5E0] text-[10px] text-[#8C6E7E]">
            <span className="text-[#422634] font-medium">TypeScript • Tailwind CSS</span>
            <span className="px-2 py-0.5 rounded-full bg-[#E88BAA] text-white font-semibold text-[9px]">Active</span>
          </div>
        </div>
      );
    }

    if (project.id === "student-utility-platform") {
      return (
        <div className="h-44 w-full bg-gradient-to-br from-[#FFF7FA] to-[#FCEBF1] rounded-xl p-4 border border-[#F2D5E0] overflow-hidden relative select-none flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-[#F2D5E0] text-[#8C6E7E] text-[11px]">
            <div className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#D66B91]" />
              <span className="text-[#422634] font-semibold">CampusHub Concept</span>
            </div>
            <span className="text-[10px] font-mono text-[#D66B91] bg-white px-2 py-0.5 rounded-full border border-[#F2D5E0] font-medium">
              Prototype
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 my-1">
            <div className="p-2.5 rounded-lg bg-white border border-[#F2D5E0] shadow-sm">
              <div className="text-[10px] text-[#8C6E7E]">Timetable</div>
              <div className="text-xs font-bold text-[#422634]">Daily Schedule</div>
            </div>
            <div className="p-2.5 rounded-lg bg-white border border-[#F2D5E0] shadow-sm">
              <div className="text-[10px] text-[#8C6E7E]">Syllabus</div>
              <div className="text-xs font-bold text-[#422634]">VTU Scheme CS</div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-[#F2D5E0] text-[10px] text-[#8C6E7E] font-mono">
            <span>HTML5 • CSS3 • Vanilla JS</span>
            <span className="text-[#D66B91] font-semibold">Student-focused</span>
          </div>
        </div>
      );
    }

    // Default or C Programming Collection
    return (
      <div className="h-44 w-full bg-gradient-to-br from-[#FFF7FA] to-[#FCEBF1] rounded-xl p-4 border border-[#F2D5E0] overflow-hidden relative font-mono text-[11px] select-none flex flex-col justify-between">
        <div className="flex items-center justify-between pb-2 border-b border-[#F2D5E0] text-[#8C6E7E]">
          <div className="flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-[#D66B91]" />
            <span className="text-[#422634] font-medium text-[11px]">gcc -Wall main.c -o solution</span>
          </div>
          <span className="text-[10px] text-[#D66B91] font-semibold">CS Funda</span>
        </div>

        <div className="space-y-1 py-1.5 text-[#765968]">
          <div className="text-[#B84D73] font-medium">&gt; Algorithms: arrays, pointers, structs</div>
          <div className="text-[#422634]">&gt; Memory address: 0x7fff5fbff8ac</div>
          <div className="text-[#D66B91]">&gt; Status: All test assertions passed [0 errors]</div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-[#F2D5E0] text-[10px] text-[#8C6E7E]">
          <span>Procedural C • Data Structures</span>
          <span className="text-[#B84D73] font-semibold">Verified</span>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#FFF7FA]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center sm:text-left mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase bg-[#FCEBF1] border border-[#F2D5E0] text-[#D66B91]">
            <Sparkles className="w-3.5 h-3.5 text-[#E88BAA]" />
            Selected Work
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#422634] tracking-tight">
            {sectionHeading}
          </h2>
          <p className="text-[#765968] text-base sm:text-lg max-w-2xl">
            {subtitle}
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((project: Project, index: number) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group rounded-2xl bg-white border border-[#F2D5E0] p-5 sm:p-6 flex flex-col justify-between hover:border-[#E88BAA] transition-all duration-300 shadow-soft hover:shadow-card-hover hover:-translate-y-1.5"
            >
              <div>
                {/* Visual Representation */}
                <div className="mb-5 overflow-hidden rounded-xl group-hover:scale-[1.01] transition-transform duration-300 shadow-sm">
                  {renderProjectVisual(project)}
                </div>

                {/* Project Number & Status */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-[#D66B91] tracking-wider">
                    PROJECT {project.number}
                  </span>
                  <span className="text-[11px] font-mono text-[#8C6E7E] bg-[#FCEBF1] px-2.5 py-0.5 rounded-full border border-[#F2D5E0] font-medium">
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-xl text-[#422634] mb-2 group-hover:text-[#D66B91] transition-colors">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-[#765968] leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-[#FCEBF1] border border-[#F2D5E0] text-[#422634] font-medium group-hover:border-[#E88BAA] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-[#F2D5E0] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D66B91] hover:text-[#422634] transition-colors group/btn"
                >
                  <span>View Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform text-[#E88BAA]" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#FFF7FA] border border-[#F2D5E0] text-[#765968] hover:text-[#422634] hover:border-[#E88BAA] hover:bg-[#FCEBF1] transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#8C6E7E] font-mono flex items-center justify-center gap-1.5">
            <FolderGit2 className="w-3.5 h-3.5 text-[#E88BAA]" />
            <span>More projects &amp; experiments will be added as my learning journey progresses.</span>
          </p>
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
