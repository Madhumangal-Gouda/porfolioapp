// PrimaryContext.js
import React, { createContext, useContext, useEffect, useState } from "react";

// Create the context
const PrimaryContext = createContext();

// Provider component
export const PrimaryProvider = ({ children }) => {
  const [primaryState, setPrimaryState] = useState(null);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <PrimaryContext.Provider
      value={{ primaryState, setPrimaryState, theme, setTheme, toggleTheme }}
    >
      {children}
    </PrimaryContext.Provider>
  );
};

// Custom hook for easier access
export const usePrimaryContext = () => {
  return useContext(PrimaryContext);
};
