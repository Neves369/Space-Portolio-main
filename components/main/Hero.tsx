import React from "react";
import HeroContent from "../sub/HeroContent";

interface Props {
  themed: string;
}

const Hero = ({ themed }: Props) => {
  if (themed === "light") {
    return (
      <div className="relative flex flex-col h-full w-full" id="about-me">
        {/* <video
          autoPlay
          muted
          loop
          className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover "
        >
          <source src={"/blackhole-white.mp4"} type="video/mp4" />
        </video> */}
        <HeroContent />
      </div>
    );
  }
  if (themed === "dark") {
    return (
      <div className="relative flex flex-col h-full w-full" id="about-me">
        <video
          autoPlay
          muted
          loop
          className="rotate-180 absolute top-[-540px] sm:top-[-340px]  h-full w-full left-0 z-[1] object-contain "
        >
          <source src={"/blackhole.webm"} type="video/webm" />
        </video>
        <HeroContent />
      </div>
    );
  }
};

export default Hero;
