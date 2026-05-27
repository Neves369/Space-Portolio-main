import React from "react";
import HeroContent from "../sub/HeroContent";

interface Props {
  themed: string;
}

const Hero = ({ themed }: Props) => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <HeroContent />
    </div>
  );
};

export default Hero;


