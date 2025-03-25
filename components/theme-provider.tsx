"use client";

import type React from "react";

import { createContext, useContext, useEffect, useState } from "react";

type ThemeProviderProps = {
  children: React.ReactNode;
  attribute?: string;
  defaultTheme?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
};

const ThemeProviderContext = createContext({ theme: "light" });

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "light",
  enableSystem = false,
  disableTransitionOnChange = false,
}: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  // Force light mode
  useEffect(() => {
    // Remove 'dark' class if it exists
    document.documentElement.classList.remove("dark");

    // Add 'light' class if using class attribute
    if (attribute === "class") {
      document.documentElement.classList.add("light");
    }

    setMounted(true);
  }, [attribute]);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProviderContext.Provider value={{ theme: "light" }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  // Simplified useTheme hook that always returns light theme
  // and prevents theme switching
  return {
    theme: "light",
    setTheme: () => {
      // Do nothing - theme switching is disabled
      console.info(
        "Theme switching is disabled. Only light mode is available."
      );
    },
  };
};
