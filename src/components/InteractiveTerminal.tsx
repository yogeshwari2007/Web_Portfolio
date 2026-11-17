"use client";

import React, { useState, useRef, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Terminal, Trash2, CornerDownLeft, Sparkles, Send } from "lucide-react";
import { motion } from "framer-motion";

interface OutputItem {
  id: string;
  type: "command" | "response" | "system" | "error";
  content: React.ReactNode;
}

export const InteractiveTerminal: React.FC = () => {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<OutputItem[]>([
    {
      id: "init-1",
      type: "system",
      content: (
        <div>
          <span className="text-[#E88BAA] font-bold">✨ Welcome to Yogeshwari&apos;s Interactive Terminal!</span>
          <p className="text-[#A38795] text-xs mt-1">
            Type <code className="text-[#FCEBF1] font-bold bg-[#422634] px-1.5 py-0.5 rounded">help</code> to see available commands or click any chip below.
          </p>
        </div>
      ),
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    // Save to command history
    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const newEntries: OutputItem[] = [
      {
        id: `cmd-${Date.now()}`,
        type: "command",
        content: trimmed,
      },
    ];

    switch (trimmed) {
      case "help":
        newEntries.push({
          id: `resp-${Date.now()}`,
          type: "response",
          content: (
            <div className="space-y-1 text-xs">
              <p className="text-[#E88BAA] font-semibold mb-1">Available Commands:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
                <div>
                  <span className="text-[#FCEBF1] font-mono font-bold">about</span>
                  <span className="text-[#A38795]"> - Who I am &amp; my background</span>
                </div>
                <div>
                  <span className="text-[#FCEBF1] font-mono font-bold">skills</span>
                  <span className="text-[#A38795]"> - Languages, frameworks &amp; tools</span>
                </div>
                <div>
                  <span className="text-[#FCEBF1] font-mono font-bold">projects</span>
                  <span className="text-[#A38795]"> - Case studies &amp; code repositories</span>
                </div>
                <div>
                  <span className="text-[#FCEBF1] font-mono font-bold">contact</span>
                  <span className="text-[#A38795]"> - Email, phone &amp; socials</span>
                </div>
                <div>
                  <span className="text-[#FCEBF1] font-mono font-bold">journey</span>
                  <span className="text-[#A38795]"> - Milestones as a CS student</span>
                </div>
                <div>
                  <span className="text-[#FCEBF1] font-mono font-bold">currently</span>
                  <span className="text-[#A38795]"> - What I am learning &amp; listening to</span>
                </div>
                <div>
                  <span className="text-[#FCEBF1] font-mono font-bold">clear</span>
                  <span className="text-[#A38795]"> - Clear the terminal screen</span>
                </div>
              </div>
            </div>
          ),
        });
        break;

      case "about":
        newEntries.push({
          id: `resp-${Date.now()}`,
          type: "response",
          content: (
            <div className="space-y-2 text-xs leading-relaxed">
              <p className="text-[#E88BAA] font-semibold">About Yogeshwari S:</p>
              <p className="text-[#FFF7FA]">
                Computer Science &amp; Engineering student at{" "}
                <span className="text-[#FCEBF1] font-medium">Bangalore Institute of Technology, Bengaluru</span>.
              </p>
              <p className="text-[#A38795]">
                {portfolioData.personal.heroOneLiner}
              </p>
              <div className="pt-1 text-[#E88BAA] text-[11px] font-mono">
                Location: Bengaluru, India • Status: {portfolioData.personal.availability}
              </div>
            </div>
          ),
        });
        break;

      case "skills":
        newEntries.push({
          id: `resp-${Date.now()}`,
          type: "response",
          content: (
            <div className="space-y-2 text-xs">
              <p className="text-[#E88BAA] font-semibold">Technical Toolkit &amp; Familiarity:</p>
              {portfolioData.skills.categories.map((cat) => (
                <div key={cat.category} className="border-l-2 border-[#E88BAA]/40 pl-2.5 my-1.5">
                  <span className="text-[#FCEBF1] font-medium">{cat.category}:</span>{" "}
                  <span className="text-[#FFF7FA]">
                    {cat.skills.map((s) => s.name).join(", ")}
                  </span>
                </div>
              ))}
              <p className="text-[11px] text-[#A38795] italic">
                * Actively developing through coursework &amp; personal projects.
              </p>
            </div>
          ),
        });
        break;

      case "projects":
        newEntries.push({
          id: `resp-${Date.now()}`,
          type: "response",
          content: (
            <div className="space-y-2 text-xs">
              <p className="text-[#E88BAA] font-semibold">Selected Projects:</p>
              {portfolioData.projects.items.map((proj) => (
                <div key={proj.id} className="p-2 rounded bg-[#351829] border border-[#5A3849]/50">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#FFF7FA] font-bold">
                      [{proj.number}] {proj.title}
                    </span>
                    <span className="text-[#E88BAA] font-mono text-[10px]">{proj.status}</span>
                  </div>
                  <p className="text-[#A38795] text-[11px] mt-0.5">{proj.description}</p>
                  <p className="text-[#D66B91] font-mono text-[10px] mt-1">
                    Tech: {proj.technologies.join(" • ")}
                  </p>
                </div>
              ))}
            </div>
          ),
        });
        break;

      case "contact":
        newEntries.push({
          id: `resp-${Date.now()}`,
          type: "response",
          content: (
            <div className="space-y-1.5 text-xs">
              <p className="text-[#E88BAA] font-semibold">Contact &amp; Connect:</p>
              <p className="text-[#FFF7FA]">
                Email:{" "}
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  className="text-[#FCEBF1] underline hover:text-[#E88BAA]"
                >
                  {portfolioData.contact.email}
                </a>
              </p>
              <p className="text-[#FFF7FA]">
                Mobile:{" "}
                <a
                  href={`tel:${portfolioData.contact.phone}`}
                  className="text-[#FCEBF1] underline hover:text-[#E88BAA]"
                >
                  +91 {portfolioData.contact.phone}
                </a>
              </p>
              <p className="text-[#A38795]">
                GitHub:{" "}
                <a
                  href="https://github.com/yogeshwari2007"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#E88BAA] underline"
                >
                  github.com/yogeshwari2007
                </a>
              </p>
            </div>
          ),
        });
        break;

      case "journey":
        newEntries.push({
          id: `resp-${Date.now()}`,
          type: "response",
          content: (
            <div className="space-y-1.5 text-xs">
              <p className="text-[#E88BAA] font-semibold">Journey Highlights:</p>
              {portfolioData.journey.milestones.slice(0, 4).map((m) => (
                <div key={m.year} className="text-xs">
                  <span className="text-[#E88BAA] font-mono">[{m.year}]</span>{" "}
                  <span className="text-[#FFF7FA] font-medium">{m.title}</span>
                  <span className="text-[#A38795] block text-[11px] pl-4">{m.description.slice(0, 90)}...</span>
                </div>
              ))}
              <p className="text-[#D66B91] text-[11px] mt-1 font-mono">
                Explore the full visual timeline below in the &quot;My Journey So Far&quot; section.
              </p>
            </div>
          ),
        });
        break;

      case "currently":
        newEntries.push({
          id: `resp-${Date.now()}`,
          type: "response",
          content: (
            <div className="space-y-1.5 text-xs">
              <p className="text-[#E88BAA] font-semibold">Currently in my corner:</p>
              <p className="text-[#FFF7FA]">
                <strong className="text-[#E88BAA]">Learning:</strong> Next.js 14 App Router, TypeScript &amp; C Algorithms.
              </p>
              <p className="text-[#FFF7FA]">
                <strong className="text-[#E88BAA]">Building:</strong> Interactive developer experiments &amp; Student Utility Concept.
              </p>
              <p className="text-[#FFF7FA]">
                <strong className="text-[#E88BAA]">Listening:</strong> {portfolioData.currently.listening.track} by {portfolioData.currently.listening.artist}.
              </p>
            </div>
          ),
        });
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      default:
        newEntries.push({
          id: `err-${Date.now()}`,
          type: "error",
          content: (
            <p className="text-[#F87171] text-xs">
              zsh: command not found: <code className="font-bold underline">{trimmed}</code>. Type{" "}
              <span className="text-[#E88BAA] font-bold cursor-pointer underline" onClick={() => handleCommand("help")}>
                help
              </span>{" "}
              for available commands.
            </p>
          ),
        });
        break;
    }

    setHistory((prev) => [...prev, ...newEntries]);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < commandHistory.length) {
          setHistoryIndex(nextIdx);
          setInputVal(commandHistory[nextIdx]);
        } else {
          setHistoryIndex(-1);
          setInputVal("");
        }
      }
    }
  };

  const clearTerminal = () => {
    setHistory([]);
    setInputVal("");
  };

  const quickCommands = ["about", "skills", "projects", "contact", "currently", "help", "clear"];

  return (
    <section id="terminal" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center sm:text-left mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase bg-[#FCEBF1] border border-[#F2D5E0] text-[#D66B91]">
            <Terminal className="w-3.5 h-3.5 text-[#E88BAA]" />
            Interactive Console
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#422634] tracking-tight">
            Developer Terminal Experience
          </h2>
          <p className="text-xs sm:text-sm text-[#765968]">
            An interactive command-line environment directly inside my portfolio. Try running commands below!
          </p>
        </div>

        {/* Terminal Window */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="rounded-2xl bg-[#281220] border-2 border-[#5A3849] shadow-soft-lg overflow-hidden font-mono text-sm cursor-text transition-all duration-300 hover:border-[#E88BAA]/60"
        >
          {/* Terminal Title Bar */}
          <div className="bg-[#1F0D18] px-4 py-3 flex items-center justify-between border-b border-[#5A3849]/70 select-none">
            {/* Traffic Lights in Pink Palette */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#E88BAA] inline-block opacity-90 shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-[#F5C2D2] inline-block opacity-80" />
              <span className="w-3 h-3 rounded-full bg-[#5A3849] inline-block opacity-90" />
              <span className="ml-2 text-xs text-[#A38795] font-sans flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#E88BAA]" />
                ys@bit-bengaluru: ~ (zsh)
              </span>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  clearTerminal();
                }}
                className="flex items-center gap-1 px-2.5 py-1 text-[11px] rounded-md bg-[#331926] text-[#A38795] hover:text-[#FFF7FA] hover:bg-[#422634] transition-colors"
                title="Clear screen"
              >
                <Trash2 className="w-3 h-3" />
                <span>clear</span>
              </button>
            </div>
          </div>

          {/* Quick command suggestion pills */}
          <div className="bg-[#240F1D] px-4 py-2 border-b border-[#5A3849]/40 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-[11px] text-[#A38795] font-sans">Quick run:</span>
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCommand(cmd);
                }}
                className="px-2 py-0.5 rounded bg-[#331926] text-[#E88BAA] hover:bg-[#E88BAA] hover:text-white transition-all text-[11px] font-mono border border-[#5A3849]/60"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Output Display Area */}
          <div className="p-4 sm:p-5 max-h-80 overflow-y-auto space-y-3">
            {history.map((item) => (
              <div key={item.id} className="leading-relaxed">
                {item.type === "command" ? (
                  <div className="flex items-center gap-2 text-[#FFF7FA]">
                    <span className="text-[#E88BAA] select-none font-bold">ys@bit:~$</span>
                    <span>{item.content}</span>
                  </div>
                ) : (
                  <div className="pl-4 mt-1">{item.content}</div>
                )}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Input Line */}
          <div className="p-4 bg-[#1F0D18] border-t border-[#5A3849]/70 flex items-center gap-2">
            <span className="text-[#E88BAA] font-bold select-none text-xs sm:text-sm">ys@bit:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type a command (e.g. help, about, skills, projects)..."
              className="flex-1 bg-transparent text-sm text-[#FFF7FA] placeholder-[#A38795]/60 outline-none font-mono"
              autoCapitalize="off"
              autoComplete="off"
              spellCheck="false"
            />
            <button
              type="button"
              onClick={() => handleCommand(inputVal)}
              className="p-1.5 rounded-lg bg-[#E88BAA] text-white hover:bg-[#D66B91] transition-colors"
              title="Execute"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
