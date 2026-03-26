"use client";
import Encryption from "@/components/main/Encryption";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import ThemeContext from "@/context/theme";
import { useContext } from "react";

export default function HomeContent() {
    const { themed } = useContext(ThemeContext);

    return (
        <div className="flex flex-col gap-20">
            <Hero themed={themed} />
            <Skills themed={themed} />
            <Encryption themed={themed} />
            <Projects themed={themed} />
            <Footer themed={themed} />
        </div>
    );
}
