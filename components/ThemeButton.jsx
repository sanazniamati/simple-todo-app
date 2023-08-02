"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { FaSun, FaMoon } from "react-icons/fa";

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-700"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <FaSun className="h-5 w-5 text-orange-300 hover:scale-150" />
      ) : (
        <FaMoon className="h-5 w-5 text-slate-100 hover:text-slate-800 hover:bg-slate-100  " />
      )}
    </button>
  );
};

export default ThemeButton;
