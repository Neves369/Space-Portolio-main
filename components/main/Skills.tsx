import {
  All_skill,
  Backend_skill,
  Design_skill,
  Frontend_skill,
  Fullstack_skill,
  Mobile_skill,
  Other_skill,
} from "@/constants";
import React, { Suspense } from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

interface Props {
  themed: string;
}

const Skills = ({ themed }: Props) => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText />

      <div className="hidden sm:flex  flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="hidden sm:flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="hidden sm:flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Mobile_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="hidden sm:flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Fullstack_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="hidden sm:flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Design_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="hidden sm:flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Other_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="sm:hidden flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {All_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <Suspense fallback={<div>Carregando vídeo...</div>}>
            <video
              className="w-full h-auto"
              preload="false"
              playsInline
              loop
              muted
              autoPlay
              src={
                themed === "light" ? "/cards-video2.webm" : "/cards-video.webm"
              }
            />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Skills;
