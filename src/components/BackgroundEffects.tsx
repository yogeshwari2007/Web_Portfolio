"use client";

import React from "react";

export const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#FFF7FA]">
      {/* Top ambient soft blush/rose glow */}
      <div className="absolute -top-[12%] left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-[#E88BAA]/12 blur-[130px] rounded-full" />
      
      {/* Mid-left delicate rose glow */}
      <div className="absolute top-[35%] -left-[10%] w-[520px] h-[520px] bg-[#FCEBF1] blur-[140px] rounded-full" />
      
      {/* Bottom right soft warm pink glow */}
      <div className="absolute top-[70%] -right-[8%] w-[560px] h-[560px] bg-[#E88BAA]/10 blur-[150px] rounded-full" />

      {/* Delicate Pink Dot Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_65%,transparent_100%)]" />

      {/* Subtle floating delicate stars / sparkles */}
      <div className="absolute top-[15%] left-[8%] text-[#E88BAA]/30 text-lg select-none">✦</div>
      <div className="absolute top-[28%] right-[12%] text-[#D66B91]/25 text-sm select-none">✧</div>
      <div className="absolute top-[55%] left-[5%] text-[#E88BAA]/25 text-xs select-none">✦</div>
      <div className="absolute top-[75%] right-[7%] text-[#D66B91]/30 text-base select-none">✧</div>
      <div className="absolute top-[88%] left-[15%] text-[#E88BAA]/20 text-sm select-none">✦</div>
    </div>
  );
};
