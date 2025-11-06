"use client";

import React from "react";

export const AuroraBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Aurora gradient blobs */}
      <div
        className="absolute -top-1/2 -left-1/4 w-[1000px] h-[1000px] rounded-full opacity-30 blur-3xl animate-aurora"
        style={{
          background:
            "radial-gradient(circle, #3B82F6 0%, #A5B4FC 25%, #93C5FD 50%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full opacity-30 blur-3xl animate-aurora"
        style={{
          background:
            "radial-gradient(circle, #DDD6FE 0%, #93C5FD 25%, #60A5FA 50%, transparent 70%)",
          animationDelay: "20s",
        }}
      />
      <div
        className="absolute top-1/3 left-1/3 w-[800px] h-[800px] rounded-full opacity-20 blur-3xl animate-aurora"
        style={{
          background:
            "radial-gradient(circle, #A5B4FC 0%, #DDD6FE 25%, #3B82F6 50%, transparent 70%)",
          animationDelay: "40s",
        }}
      />
    </div>
  );
};
