"use client";

import { useEffect } from "react";

export const ScrollReset: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Prevent browser from restoring scroll position to random middle section on refresh
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }

      // If the URL has no specific anchor hash, always start at the hero section (scroll position 0)
      if (!window.location.hash) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant" as ScrollBehavior,
        });
      }
    }
  }, []);

  return null;
};
