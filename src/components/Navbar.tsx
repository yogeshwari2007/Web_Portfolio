"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detect active section
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-[#F2D5E0] shadow-sm py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="group flex items-center gap-1.5 transition-colors"
              aria-label="Yogeshwari S - Home"
            >
              <span className="font-heading font-bold text-xl sm:text-2xl tracking-tight text-[#422634] group-hover:text-[#D66B91] transition-colors">
                YS
              </span>
              <span className="w-2 h-2 rounded-full bg-[#E88BAA] group-hover:bg-[#D66B91] group-hover:scale-125 transition-all" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 bg-white/80 px-4 py-1.5 rounded-full border border-[#F2D5E0] shadow-sm backdrop-blur-sm">
              {portfolioData.navigation.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative px-4 py-1.5 text-sm font-medium transition-all rounded-full ${
                      isActive
                        ? "text-[#422634] font-semibold"
                        : "text-[#765968] hover:text-[#422634] hover:bg-[#FCEBF1]/60"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-[#FCEBF1] rounded-full border border-[#F2D5E0]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </a>
                );
              })}
            </nav>

            {/* Quick Action Button */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="group flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-full bg-[#E88BAA] text-white hover:bg-[#D66B91] shadow-sm shadow-[#E88BAA]/30 transition-all duration-300"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-white border border-[#F2D5E0] text-[#422634] hover:bg-[#FCEBF1] transition-colors"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-[#D66B91]" />
                ) : (
                  <Menu className="w-5 h-5 text-[#422634]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-40 bg-[#FFF7FA]/98 backdrop-blur-xl border-b border-[#F2D5E0] px-6 py-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 pb-3 mb-2 border-b border-[#F2D5E0] text-xs text-[#8C6E7E] uppercase tracking-wider font-mono">
                <Sparkles className="w-3.5 h-3.5 text-[#E88BAA]" />
                <span>Navigation</span>
              </div>
              {portfolioData.navigation.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? "bg-[#FCEBF1] text-[#422634] font-semibold border border-[#F2D5E0]"
                        : "text-[#765968] hover:text-[#422634] hover:bg-white"
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#E88BAA]" />
                    )}
                  </a>
                );
              })}
              <div className="pt-3 mt-1 border-t border-[#F2D5E0]">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#E88BAA] text-white font-semibold text-sm hover:bg-[#D66B91] shadow-sm transition-colors"
                >
                  <span>Connect With Me</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
