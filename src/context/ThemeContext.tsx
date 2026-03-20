"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type ThemeId = "legacy" | "verdant" | "ember" | "coastal" | "royal";

export interface Theme {
  id: ThemeId;
  name: string;
  accent: string;   // for swatch preview only
  dark: string;     // for swatch preview only
  label: string;
}

export const THEMES: Theme[] = [
  { id: "legacy",  name: "Legacy",  accent: "#C9A84C", dark: "#0D1B2A", label: "Navy & Gold"       },
  { id: "verdant", name: "Verdant", accent: "#6DAF6F", dark: "#1A2E1F", label: "Forest & Sage"     },
  { id: "ember",   name: "Ember",   accent: "#C4692A", dark: "#1E1710", label: "Charcoal & Copper"  },
  { id: "coastal", name: "Coastal", accent: "#3AAFA9", dark: "#0D2030", label: "Ocean & Teal"       },
  { id: "royal",   name: "Royal",   accent: "#C4965A", dark: "#1E0F1A", label: "Plum & Champagne"   },
];

interface ThemeContextType {
  theme: ThemeId;
  setTheme: (id: ThemeId) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "legacy",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>("legacy");

  // Load persisted theme on mount
  useEffect(() => {
    const saved = localStorage.getItem("abg-theme") as ThemeId | null;
    if (saved && THEMES.find((t) => t.id === saved)) {
      setThemeState(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  const setTheme = (id: ThemeId) => {
    setThemeState(id);
    document.documentElement.setAttribute("data-theme", id);
    localStorage.setItem("abg-theme", id);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
