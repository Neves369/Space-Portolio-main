"use client";
import React, { createContext, useState, useEffect } from "react";

interface ThemeContextData {
  themed: string;
  changeTheme(theme: any): Promise<void>;
}

const ThemeContext = createContext<ThemeContextData | any>({});

export const ThemeProvider: any = ({ children }: any) => {
  const [themed, setThemed] = useState("dark");

  useEffect(() => {
    function loadStorageData() {
      const storageTheme = sessionStorage.getItem("theme");
      if (storageTheme) {
        setThemed(JSON.parse(storageTheme));
      }
    }
    // loadStorageData();
  }, []);

  function changeTheme(theme: any) {
    setThemed(theme);
    theme === "light"
      ? (document.body.style.backgroundColor = "rgb(250 250 250 / 0)")
      : (document.body.style.backgroundColor = "rgb(3 0 20 / 1)");
    sessionStorage.setItem("theme", JSON.stringify(theme));
  }

  return (
    <ThemeContext.Provider
      value={{
        themed,
        changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
