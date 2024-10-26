import React, { Suspense } from "react";
import HeroContent from "../sub/HeroContent";

interface Props {
  themed: string;
}

const Hero = ({ themed }: Props) => {
  if (themed === "light") {
    return (
      <div className="relative flex flex-col h-full w-full ai" id="about-me">
        <div className="sun">
          <div className="black-hole"></div>
          <div className="rays"></div>
        </div>
        <HeroContent />
      </div>
    );
  }
  if (themed === "dark") {
    return (
      <div className="relative flex flex-col h-full w-full" id="about-me">
        <Suspense fallback={<div>Carregando vídeo...</div>}>
          <video
            autoPlay
            muted
            loop
            className="rotate-180 absolute top-[-540px] sm:top-[-340px]  h-full w-full left-0 z-[1] object-contain "
          >
            <source src={"/blackhole.webm"} type="video/webm" />
          </video>
        </Suspense>
        <HeroContent />
      </div>
    );
  }
};

export default Hero;
