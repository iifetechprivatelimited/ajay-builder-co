"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, ChevronLeft, ChevronRight } from "lucide-react";

const SLIDE_DURATION = 6000; // ms per slide

const slides = [
  {
    image: "/images/projects/slide07_img01.jpg",
    category: "Hospitality",
    project: "Kailadevi Ji Resort",
    location: "Karauli, Rajasthan",
    kb: 1,
  },
  {
    image: "/images/projects/slide08_img04.jpg",
    category: "Infrastructure",
    project: "Transport Nagar",
    location: "Morena",
    kb: 2,
  },
  {
    image: "/images/projects/slide10_img04.jpg",
    category: "Commercial",
    project: "I S Tower",
    location: "City Center, Gwalior",
    kb: 3,
  },
  {
    image: "/images/projects/slide23_img04.jpg",
    category: "Residential Interiors",
    project: "Residence of Sh. Dheeraj Garg",
    location: "Gandhi Nagar, Gwalior",
    kb: 4,
  },
  {
    image: "/images/projects/slide14_img04.jpg",
    category: "Residential",
    project: "Residence of Mr. Sunil Goyal",
    location: "Gwalior",
    kb: 5,
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [textKey, setTextKey] = useState(0); // forces text re-animation on slide change
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
    setTextKey((k) => k + 1);
  }, []);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, SLIDE_DURATION);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, paused, next]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Slide layers ── */}
      {slides.map((slide, i) => {
        const isActive = i === current;
        return (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: isActive ? 1 : 0, zIndex: isActive ? 1 : 0 }}
          >
            {/* Ken Burns wrapper — animation restarts when animationName changes */}
            <div
              className="absolute inset-0 origin-center"
              style={{
                animationName: isActive ? `kenburns-${slide.kb}` : "none",
                animationDuration: `${SLIDE_DURATION + 2000}ms`,
                animationTimingFunction: "ease-out",
                animationFillMode: "both",
              }}
            >
              <Image
                src={slide.image}
                alt={slide.project}
                fill
                className="object-cover"
                priority={i === 0}
                sizes="100vw"
              />
            </div>

            {/* Darkening gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/75" />
          </div>
        );
      })}

      {/* ── Progress bar ── */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/10 z-20">
        <div
          key={`prog-${textKey}`}
          className="h-full bg-[var(--t-accent)] origin-left"
          style={{
            animationName: paused ? "none" : "slide-progress",
            animationDuration: `${SLIDE_DURATION}ms`,
            animationTimingFunction: "linear",
            animationFillMode: "both",
          }}
        />
      </div>

      {/* ── Text content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white pt-20 select-none">

        {/* Badge — static, always visible */}
        <div className="inline-flex items-center gap-2 border border-[var(--t-accent)]/40 text-[var(--t-accent)] text-xs uppercase tracking-[0.3em] px-4 py-2 rounded mb-8">
          <Award size={14} />
          Established 1984 · 40 Years of Excellence
        </div>

        {/* Animated text block — remounts on every slide change */}
        <div key={textKey}>
          {/* Project label */}
          <p
            className="hero-text-enter text-[var(--t-accent)]/80 text-xs uppercase tracking-[0.3em] mb-4"
            style={{ animationDelay: "0ms" }}
          >
            {slides[current].category} &nbsp;·&nbsp; {slides[current].location}
          </p>

          {/* Main headline */}
          <h1
            className="hero-text-enter font-serif text-5xl md:text-7xl font-bold leading-tight mb-6"
            style={{ animationDelay: "80ms" }}
          >
            Designing Spaces.<br />
            <span className="text-[var(--t-accent)]">Defining Lives.</span>
          </h1>

          {/* Current project name */}
          <p
            className="hero-text-enter text-white/70 text-base md:text-lg italic mb-4"
            style={{ animationDelay: "160ms" }}
          >
            — {slides[current].project}
          </p>

          {/* Sub-copy */}
          <p
            className="hero-text-enter text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ animationDelay: "220ms" }}
          >
            A multi-disciplinary group delivering world-class Architecture,
            Engineering, Interior Design, and Real Estate Development across
            India since 1984.
          </p>

          {/* CTAs */}
          <div
            className="hero-text-enter flex flex-col sm:flex-row gap-4 justify-center"
            style={{ animationDelay: "300ms" }}
          >
            <Link
              href="/portfolio"
              className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded text-sm uppercase tracking-widest"
            >
              View Our Work <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="btn-outline inline-flex items-center gap-2 px-8 py-4 rounded text-sm uppercase tracking-widest"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* ── Prev / Next arrows ── */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200"
      >
        <ChevronRight size={22} />
      </button>

      {/* ── Dot indicators ── */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-400 ${
              i === current
                ? "w-8 h-2 bg-[var(--t-accent)]"
                : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-white/40 text-[10px] tracking-[0.2em]">
        <span className="uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
