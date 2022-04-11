import React, { useContext } from "react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="transition-all duration-500 ease-in-out rounded-full p-2">
      {theme === "dark" ? (
        <span
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="animate-roll text-primaryDark dark:text-primaryLight text-sm cursor-pointer"
        >
          dark
        </span>
      ) : (
        <span
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="animate-roll text-primaryDark dark:text-primaryLight text-sm cursor-pointer"
        >
          light
        </span>
      )}
    </div>
  );
};

export default ThemeToggle;
