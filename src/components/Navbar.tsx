"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Menu, X, ArrowUpRight, Sparkles, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { EasterEggModal } from "./EasterEggModal";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Easter egg click counter on YS logo
  const [logoClicks, setLogoClicks] = useState(0);
  const [isEasterEggOpen, setIsEasterEggOpen] = useState(false);
  const [clickHint, setClickHint] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detect active section
      const sections = ["home", "about", "journey", "skills", "terminal", "currently", "projects", "contact"];
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

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const nextCount = logoClicks + 1;
    setLogoClicks(nextCount);

    if (nextCount === 3) {
      setClickHint("2 clicks to unlock secret...");
      setTimeout(() => setClickHint(""), 2200);
    } else if (nextCount === 4) {
      setClickHint("1 more click! ✨");
      setTimeout(() => setClickHint(""), 2200);
    } else if (nextCount >= 5) {
      setIsEasterEggOpen(true);
      setLogoClicks(0);
      setClickHint("");
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/92 backdrop-blur-md border-b border-[#F2D5E0] shadow-sm py-3"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo with Easter Egg Click Handler */}
            <div className="relative">
              <button
                type="button"
                onClick={handleLogoClick}
                className="group flex items-center gap-1.5 transition-transform active:scale-95 text-left"
                aria-label="Yogeshwari S - Click logo to reveal Easter Egg"
                title="YS. (Click 5 times for a secret!)"
              >
                <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight text-[#422634] group-hover:text-[#D66B91] transition-colors">
                  YS
                </span>
                <span className="w-2 h-2 rounded-full bg-[#E88BAA] group-hover:bg-[#D66B91] group-hover:scale-125 transition-all" />
              </button>

              {/* Secret Click Counter Tooltip */}
              <AnimatePresence>
                {clickHint && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="absolute -bottom-7 left-0 whitespace-nowrap px-2 py-0.5 rounded-md bg-[#422634] text-white text-[10px] font-mono shadow-md z-50 pointer-events-none"
                  >
                    {clickHint}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5 bg-white/85 px-3 py-1.5 rounded-full border border-[#F2D5E0] shadow-sm backdrop-blur-sm">
              {portfolioData.navigation.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all rounded-full ${
                      isActive
                        ? "text-[#422634]"
                        : "text-[#765968] hover:text-[#422634] hover:bg-[#FCEBF1]/50"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-[#FCEBF1] rounded-full border border-[#F2D5E0]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1">
                      {item.name === "Terminal" && <Terminal className="w-3 h-3 text-[#E88BAA]" />}
                      {item.name}
                    </span>
                  </a>
                );
              })}
            </nav>

            {/* Quick Action Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="group flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-full bg-[#E88BAA] text-white hover:bg-[#D66B91] shadow-soft hover:shadow-card-hover transition-all duration-300"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
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
            className="fixed inset-x-0 top-[65px] z-40 bg-[#FFF7FA]/98 backdrop-blur-xl border-b border-[#F2D5E0] px-6 py-6 lg:hidden shadow-xl max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between pb-3 mb-1 border-b border-[#F2D5E0] text-xs text-[#8C6E7E] uppercase tracking-wider font-mono">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#E88BAA]" />
                  Navigation Menu
                </span>
                <span className="text-[10px] text-[#D66B91]">YS Portfolio</span>
              </div>
              {portfolioData.navigation.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[#FCEBF1] text-[#422634] font-semibold border border-[#F2D5E0]"
                        : "text-[#765968] hover:text-[#422634] hover:bg-white"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {item.name === "Terminal" && <Terminal className="w-3.5 h-3.5 text-[#D66B91]" />}
                      {item.name}
                    </span>
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
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#E88BAA] text-white font-semibold text-sm hover:bg-[#D66B91] shadow-soft transition-colors"
                >
                  <span>Connect With Me</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Secret Easter Egg Modal */}
      <EasterEggModal
        isOpen={isEasterEggOpen}
        onClose={() => setIsEasterEggOpen(false)}
      />
    </>
  );
};
