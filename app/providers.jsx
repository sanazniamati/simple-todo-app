"use client";

import { ThemeProvider } from "next-themes";

function providers({ children }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}

export default providers;
