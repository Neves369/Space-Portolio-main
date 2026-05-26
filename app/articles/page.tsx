"use client";
import { motion } from "framer-motion";
import Footer from "@/components/main/Footer";
import ThemeContext from "../../context/theme";
import { slideInFromLeft } from "@/utils/motion";
import React, { useContext, useState } from "react";
import ArticlesList from "@/components/main/articles/Articles";

const Articles = () => {
  const { themed } = useContext(ThemeContext);
  const [type, setType] = useState("All");
  const [language, setLanguage] = useState("All");
  const [sortOrder, setSortOrder] = useState("desc");

  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <div className="h-full w-full flex flex-rol px-10 mt-20 gap-5 m-auto text-start">
          <motion.div
            variants={slideInFromLeft(0.5)}
            className={`flex-1 flex-col gap-6 mt-6 text-6xl font-bold ${
              themed === "light" ? "text-gray-700" : "text-white"
            } max-w-[600px] w-auto h-auto`}
          >
            <span className="hidden sm:block text-6xl">
              My
              <span
                className={`text-transparent bg-clip-text bg-gradient-to-r ${
                  themed === "light"
                    ? "from-orange-500 to-yellow-300"
                    : "from-purple-500 to-cyan-500"
                }`}
              >
                {" "}
                Articles
              </span>
            </span>
          </motion.div>
          <div className="flex items-center gap-3 ml-auto mt-4 sm:mt-0">
            <span
              className={`text-sm font-medium ${themed === "light" ? "text-gray-600" : "text-gray-300"}`}
            >
              Ordenar por:
            </span>
            <select
              value={sortOrder}
              onChange={(event) => setSortOrder(event.target.value)}
              className={`rounded-lg border px-3 py-2 text-sm focus:outline-none ${
                themed === "light"
                  ? "border-[#ff6501] bg-white text-gray-700"
                  : "border-[#7042f861] bg-[#1f043d] text-gray-200"
              }`}
            >
              <option value="desc">Mais recentes</option>
              <option value="asc">Mais antigas</option>
            </select>
          </div>
        </div>
        <ArticlesList themed={themed} sortOrder={sortOrder} />
      </div>
      <Footer themed={themed} />
    </main>
  );
};

export default Articles;
