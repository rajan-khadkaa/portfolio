import React, { useState, useEffect } from "react";

const ThemeToggler = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    // 1. check what theme/mode user had picked earlier
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
    // 2. check is user has system preferences (whether light or dark)
    else {
      const prefersLight = window.matchMedia(
        "(prefers-color-scheme: light)"
      ).matches;

      if (prefersLight) {
        // user wants light mode as per his system preferences
        setIsDark(false);
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      } else {
        // Everything else will be DARK MODE
        setIsDark(true);
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      }
    }
  }, []);

  // When button is clicked
  const handleToggle = () => {
    if (isDark) {
      // if it is Currently DARK then switch to LIGHT
      setIsDark(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      // if it is Currently LIGHT then switch to DARK
      setIsDark(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <button className="p-4 bg-black dark:bg-white" onClick={handleToggle}>
      <p>{isDark ? "Switch to light" : "Switch to dark"}</p>
    </button>
  );
};

export default ThemeToggler;
