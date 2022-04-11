import React from "react";
import { useTheme } from "next-themes";
import { HiMoon, HiSun } from "react-icons/hi";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="transition-all duration-500 ease-in-out rounded-full p-2"
      data-tip={theme === "dark" ? "light theme" : "dark theme"}
    >
      {theme === "light" ? (
        <HiSun
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="animate-roll text-colorItems text-2xl cursor-pointer"
        />
      ) : (
        <HiMoon
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="animate-roll text-colorItems text-2xl cursor-pointer"
        />
      )}
    </div>
  );
};

export default ThemeToggle;
