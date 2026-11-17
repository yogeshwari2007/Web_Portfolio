import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#FFF7FA",
          secondary: "#FCEBF1",
          card: "#FFFFFF",
          subtle: "#FAF0F4",
        },
        foreground: {
          DEFAULT: "#765968", // Muted mauve body text
          heading: "#422634", // Deep burgundy headings
          muted: "#8C6E7E",
          subtle: "#A38795",
        },
        accent: {
          DEFAULT: "#E88BAA", // Dusty rose
          secondary: "#D66B91",
          hover: "#D66B91",
          light: "#FCEBF1",
          subtle: "#F9E4EC",
          dark: "#B84D73",
          glow: "rgba(232, 139, 170, 0.25)",
        },
        border: {
          DEFAULT: "#F2D5E0",
          light: "#F7E1EA",
          hover: "#E88BAA",
          dark: "#E4B8C8",
        },
        burgundy: {
          DEFAULT: "#422634",
          light: "#5A3849",
        },
        mauve: {
          DEFAULT: "#765968",
          light: "#9A7D8C",
        },
        rose: {
          DEFAULT: "#E88BAA",
          secondary: "#D66B91",
          pale: "#FCEBF1",
          blush: "#FFF7FA",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(232, 139, 170, 0.12)",
        "soft-lg": "0 10px 30px -4px rgba(232, 139, 170, 0.18)",
        "card-hover": "0 12px 35px -5px rgba(214, 107, 145, 0.2)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 3s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        glow: {
          "0%": { opacity: "0.5" },
          "100%": { opacity: "0.9" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
