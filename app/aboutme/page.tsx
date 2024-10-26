"use client";
import React, { useContext } from "react";
import Footer from "@/components/main/Footer";
import Skills from "@/components/main/Skills";
import ThemeContext from "../../context/theme";
import Hero from "@/components/main/aboutme/Hero";

const AboutMe = () => {
  const { themed } = useContext(ThemeContext);

  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        {/* <Skills themed={themed} /> */}
        {/* <Encryption themed={themed} /> */}
        {/* <Projects themed={themed} /> */}
        <Footer themed={themed} />
      </div>
    </main>
  );
};

export default AboutMe;
