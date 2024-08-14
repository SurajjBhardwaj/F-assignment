"use client";

import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeToggle() {
  // Initialize darkMode state based on window.localStorage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedMode = window.localStorage.getItem("theme");
      return savedMode
        ? JSON.parse(savedMode)
        : window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }

    // Save the user's preference in window.localStorage
    window.localStorage.setItem("theme", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className="mr-10">
      <button
        className="bg-gray-200 dark:bg-body-border text-gray-800 dark:text-white px-3 py-2 rounded-md flex items-center"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <FaSun className="mr-2" /> : <FaMoon className="mr-2" />}
        <span></span>
      </button>
    </div>
  );
}

export default ThemeToggle;
