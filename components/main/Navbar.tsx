"use client";
import { Socials } from "@/constants";
import ThemeContext from "@/context/theme";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useContext } from "react";

const Navbar = () => {
  const { themed, changeTheme } = useContext(ThemeContext);

  const teste = () => {
    changeTheme(themed === "light" ? "dark" : "light");
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-100 px-10 z-50">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="absolute left-0 sm:relative sm:flex h-auto w-auto flex-row items-center"
        >
          <Image
            src={themed === "light" ? "/NavLogo2.png" : "/NavLogo.png"}
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span
            className={`font-bold ml-[10px] hidden sm:block text-base ${
              themed === "light" ? "text-gray-600" : "text-gray-300"
            }`}
          >
            Douglas Neves
          </span>
        </a>

        <div className="w-[500px] h-full hidden sm:flex flex-row items-center justify-between md:mr-20">
          <div
            className={`flex items-center justify-between w-full h-auto border mr-[15px] px-[20px] py-[10px] rounded-full  ${
              themed === "light"
                ? "bg-[#03001402] text-gray-600 border-[#ff6501]"
                : "bg-[#0300145e] text-gray-200 border-[#7042f861]"
            }`}
          >
            <a
              href="#about-me"
              className={`${
                themed === "light"
                  ? "hover:text-orange-500"
                  : "hover:text-violet-500"
              } cursor-pointer text`}
            >
              About me
            </a>
            <a
              href="#skills"
              className={`${
                themed === "light"
                  ? "hover:text-orange-500"
                  : "hover:text-violet-500"
              } cursor-pointer text`}
            >
              Skills
            </a>
            <a
              href="#projects"
              className={`${
                themed === "light"
                  ? "hover:text-orange-500"
                  : "hover:text-violet-500"
              } cursor-pointer text`}
            >
              Projects
            </a>
          </div>
        </div>

        <div className="absolute right-5 sm:relative sm:right-0 flex flex-row gap-15 h-12">
          <motion.button onClick={teste} className="relative w-12 h-12">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ rotate: themed === "dark" ? 180 : 0 }}
              transition={{ duration: 0.5 }}
              className="absolute top-0 left-0 w-full h-full flex-row-reverse"
            >
              <motion.circle
                cx="12"
                cy="12"
                r="5"
                className={`${
                  themed === "dark"
                    ? "text-yellow-500/[0.5]"
                    : "text-yellow-500"
                }`}
              />
              <motion.path
                d="M19 12a7 7 0 0 1-7 7V5a7 7 0 0 1 7 7z"
                className={`${
                  themed === "dark"
                    ? "text-violet-500"
                    : "text-violet-500/[0.3]"
                }`}
              />
            </motion.svg>
          </motion.button>

          <motion.button onClick={teste} className="relative w-15 h-12">
            <span
              className={`
                ${
                  themed === "light"
                    ? "text-gray-600 hover:text-orange-500 "
                    : "text-gray-300 hover:text-violet-500"
                } text-xs sm:text-base`}
            >
              {themed === "dark" ? "Dark Mode" : "Light Mode"}
            </span>
          </motion.button>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <a
              target="_blank"
              href={social.link}
              key={social.name}
              className="hidden sm:block"
            >
              <Image
                src={themed === "dark" ? social.src : social.src2}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
