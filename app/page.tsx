"use client";
import Encryption from "@/components/main/Encryption";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import ThemeContext from "@/context/theme";
import { useContext } from "react";
import Image from "next/image";

export default function Home() {
  const { themed } = useContext(ThemeContext);

  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero themed={themed} />
        <Skills themed={themed} />
        <Encryption themed={themed} />
        <Projects themed={themed} />
        <Footer themed={themed} />
      </div>
    </main>
  );
}
