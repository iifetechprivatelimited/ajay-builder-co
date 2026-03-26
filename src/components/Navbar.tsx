"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg =
    isHome && !scrolled
      ? "bg-transparent"
      : "bg-[var(--t-dark)]/95 backdrop-blur-md shadow-lg";

  const textColor = "text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="w-11 h-11 relative flex-shrink-0">
            <Image
              src="/images/logos/ABC Logo2.png"
              alt="ABC Logo"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <div
              className={`font-serif font-bold text-base leading-tight tracking-wide ${textColor}`}
            >
              Ajay Builders & Consultant
            </div>
            <div className="text-[9px] tracking-[0.3em] text-[var(--t-accent)] uppercase mt-0.5">
              Architecture · Engineering · Interiors
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`nav-link text-xs font-medium tracking-[0.12em] uppercase transition-colors duration-200 ${textColor} hover:text-[var(--t-accent)] ${
                  pathname === link.href ? "active text-[var(--t-accent)]" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA + ThemeSwitcher */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeSwitcher />
          <Link
            href="/contact"
            className="btn-gold px-6 py-2.5 text-xs uppercase tracking-[0.15em]"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile: theme switcher + toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeSwitcher />
          <button
            className={`p-2 ${textColor}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[var(--t-dark)] transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block text-sm font-medium tracking-wide py-2 border-b border-white/10 ${
                  pathname === link.href ? "text-[var(--t-accent)]" : "text-white"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="/contact"
              className="btn-gold block text-center px-5 py-3 rounded text-sm uppercase tracking-widest"
              onClick={() => setMobileOpen(false)}
            >
              Get in Touch
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
