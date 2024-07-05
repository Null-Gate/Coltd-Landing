"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Child } from "./back_ground";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<Child> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light"); // Default theme is light

  // Apply system theme on start
  useEffect(() => {
    const systemTheme: Theme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    setTheme(systemTheme);
  }, []);

  // Update class on the root element
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export function ToggleThemeButton() {
  const { theme, setTheme } = useTheme();
  return (
    <button className=" cursor-pointer" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle Theme
    </button>
  );
}
