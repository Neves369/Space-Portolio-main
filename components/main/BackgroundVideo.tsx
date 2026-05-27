"use client";

import React, { Suspense, useContext } from "react";
import ThemeContext from "@/context/theme";

export default function BackgroundVideo() {
  const { themed } = useContext(ThemeContext);

  return (
    <div className="w-full h-[850px] absolute top-0 left-0 z-[1] pointer-events-none select-none overflow-hidden">
      <Suspense fallback={null}>
        <video
          key={`video-${themed}`}
          autoPlay
          muted
          loop
          playsInline
          className="rotate-180 absolute top-[-540px] sm:top-[-340px] h-full w-full left-0 object-contain"
        >
          <source
            src={themed === "light" ? "/assets/media/blackhole-white.mp4" : "/assets/media/blackhole.webm"}
            type="video/webm"
          />
        </video>
      </Suspense>
    </div>
  );
}
