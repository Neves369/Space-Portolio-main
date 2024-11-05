"use client";
import data from "../../../data.json";
import { useState, useRef, useEffect } from "react";

const ProjectsFilter = ({
  themed,
  type,
  language,
  setType,
  setLanguage,
}: any) => {
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const typeRef = useRef<any>(null);
  const languageRef = useRef<any>(null);

  // Função para fechar menus ao clicar fora deles
  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (typeRef.current && !typeRef.current.contains(event.target)) {
        setIsTypeOpen(false);
      }
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className=" filters flex-1 gap-5 z-10 flex flex-rol items-center justify-end">
      {/* Menu Suspenso de Tipo */}
      <div className="relative" ref={typeRef}>
        <button
          onClick={() => setIsTypeOpen(!isTypeOpen)}
          className={`px-4 py-2 rounded-lg border focus:outline-none ${
            themed === "light"
              ? "bg-[#03001402] text-gray-600 border-[#ff6501]"
              : "bg-[#0300145e] text-gray-200 border-[#7042f861]"
          }`}
        >
          {type == "All" ? "type" : type}
        </button>
        {isTypeOpen && (
          <div className="absolute top-full left-0 mt-1 w-40 bg-white border rounded-lg shadow-lg z-50">
            <ul>
              {data.tags.map((option) => (
                <li
                  key={option}
                  onClick={() => {
                    setType(option);
                    setIsTypeOpen(false); // Fecha o menu ao selecionar uma opção
                  }}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Menu Suspenso de Linguagem */}
      <div className="relative" ref={languageRef}>
        <button
          onClick={() => setIsLanguageOpen(!isLanguageOpen)}
          className={`px-4 py-2 rounded-lg border focus:outline-none bg-transparent ${
            themed === "light"
              ? "bg-[#03001402] text-gray-600 border-[#ff6501]"
              : "bg-[#0300145e] text-gray-200 border-[#7042f861]"
          }`}
        >
          {language == "All" ? "language" : language}
        </button>
        {isLanguageOpen && (
          <div className="absolute top-full left-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
            <ul>
              {["All", "JavaScript", "Python", "Java"].map((lang) => (
                <li
                  key={lang}
                  onClick={() => {
                    setLanguage(lang);
                    setIsLanguageOpen(false); // Fecha o menu ao selecionar uma opção
                  }}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  {lang}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsFilter;
