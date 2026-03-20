"use client";

import { useState, useRef, useEffect } from "react";
import { Palette } from "lucide-react";
import { useTheme, THEMES, ThemeId } from "@/context/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const active = THEMES.find((t) => t.id === theme)!;

  return (
    <div ref={ref} className="relative">
      {/* Trigger button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Switch theme"
        title="Switch colour theme"
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/20 hover:border-white/50 transition-all duration-200 group"
      >
        <Palette size={15} className="text-white/70 group-hover:text-white transition-colors" />
        {/* Active swatch */}
        <span
          className="w-3.5 h-3.5 rounded-full ring-2 ring-white/30 flex-shrink-0"
          style={{ background: active.accent }}
        />
        <span className="text-white/70 text-xs hidden sm:inline leading-none">
          {active.name}
        </span>
      </button>

      {/* Dropdown */}
      <div
        className={`absolute right-0 top-full mt-2 w-52 bg-[var(--t-dark-2)] border border-white/10 rounded-xl shadow-2xl overflow-hidden transition-all duration-200 origin-top-right z-50 ${
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="p-2">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 px-3 py-2">
            Colour Theme
          </p>
          {THEMES.map((t) => (
            <button
              key={t.id}
              onClick={() => { setTheme(t.id as ThemeId); setOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-150 group ${
                theme === t.id
                  ? "bg-white/10"
                  : "hover:bg-white/5"
              }`}
            >
              {/* Dual swatch */}
              <div className="flex items-center gap-1 flex-shrink-0">
                <span
                  className="w-5 h-5 rounded-l-full"
                  style={{ background: t.dark }}
                />
                <span
                  className="w-5 h-5 rounded-r-full"
                  style={{ background: t.accent }}
                />
              </div>

              <div className="flex-1 text-left min-w-0">
                <p className="text-white text-sm font-medium leading-none">
                  {t.name}
                </p>
                <p className="text-white/40 text-[11px] mt-0.5 truncate">
                  {t.label}
                </p>
              </div>

              {/* Active tick */}
              {theme === t.id && (
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: t.accent }} />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
