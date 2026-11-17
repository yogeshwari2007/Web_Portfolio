"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUp, Github, Linkedin, Mail, Phone, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { builtBy } = portfolioData.footer;
  const { socials } = portfolioData.contact;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-[#F2D5E0] bg-[#FCEBF1] py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Attribution */}
        <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-lg text-[#422634]">YS.</span>
            <span className="text-xs text-[#E88BAA]">•</span>
            <p className="text-sm font-semibold text-[#422634]">
              {builtBy}
            </p>
          </div>
          <p className="text-xs text-[#765968] flex items-center gap-1.5">
            <span>© {currentYear} All rights reserved. Crafted with care</span>
            <Heart className="w-3.5 h-3.5 text-[#E88BAA] fill-[#E88BAA]" />
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target={social.url.startsWith("http") ? "_blank" : undefined}
              rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className="p-2.5 rounded-xl bg-white border border-[#F2D5E0] text-[#765968] hover:text-[#422634] hover:border-[#E88BAA] hover:bg-[#FFF7FA] transition-all shadow-sm"
              aria-label={`Visit ${social.name}`}
            >
              {social.name === "GitHub" && <Github className="w-4 h-4" />}
              {social.name === "LinkedIn" && <Linkedin className="w-4 h-4" />}
              {social.name === "Email" && <Mail className="w-4 h-4" />}
              {social.name === "Phone" && <Phone className="w-4 h-4" />}
            </a>
          ))}
        </div>

        {/* Right: Back to top button */}
        <div>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-xl bg-white border border-[#F2D5E0] text-[#422634] hover:border-[#E88BAA] hover:bg-[#FFF7FA] transition-all shadow-sm"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-[#E88BAA]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
