"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, X } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";
import { projects, categories } from "@/lib/data";

// Varying image heights for masonry visual rhythm (cycles every 6)
const IMG_HEIGHTS = ["h-64", "h-80", "h-56", "h-72", "h-48", "h-60"];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [fading, setFading] = useState(false);
  const [lightbox, setLightbox] = useState<{ src: string; title: string; all: string[] } | null>(null);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  const filtered =
    activeCategory === "All"
      ? projects.filter((p) => p.images.length > 0)
      : projects.filter((p) => p.category === activeCategory && p.images.length > 0);

  const handleCategory = useCallback((cat: string) => {
    if (cat === activeCategory) return;
    setFading(true);
    setTimeout(() => {
      setActiveCategory(cat);
      setFading(false);
    }, 220);
  }, [activeCategory]);

  const openLightbox = (images: string[], idx: number, title: string) => {
    setLightbox({ src: images[idx], title, all: images });
    setLightboxIdx(idx);
  };

  const lightboxNav = (dir: 1 | -1) => {
    if (!lightbox) return;
    const newIdx = (lightboxIdx + dir + lightbox.all.length) % lightbox.all.length;
    setLightboxIdx(newIdx);
    setLightbox({ ...lightbox, src: lightbox.all[newIdx] });
  };

  return (
    <>
      {/* HERO */}
      <section className="bg-[var(--t-dark)] pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <p className="text-[var(--t-accent)] text-sm uppercase tracking-[0.3em] mb-4">Our Work</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Project Portfolio</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A curated selection of projects spanning architecture, engineering, interiors, and
            development across India.
          </p>
        </div>
      </section>

      {/* STICKY FILTER BAR */}
      <section className="sticky top-20 z-40 bg-[var(--t-light)]/95 backdrop-blur-sm border-b border-gray-200 py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[var(--t-accent)] text-[var(--t-dark)] shadow-sm"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-[var(--t-accent)] hover:text-[var(--t-accent)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* MASONRY GALLERY */}
      <section className="py-14 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Fade wrapper on filter change */}
          <div
            className="transition-opacity duration-200"
            style={{ opacity: fading ? 0 : 1 }}
          >
            {/* CSS columns masonry */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
              {filtered.map((project, i) => {
                const imgH = IMG_HEIGHTS[i % IMG_HEIGHTS.length];
                return (
                  <RevealOnScroll key={project.id} delay={(i % 3) * 80}>
                    <div
                      id={project.id}
                      className="break-inside-avoid mb-5 luxury-card card-hover bg-white rounded-xl overflow-hidden"
                    >
                      {/* Main image — varying height for masonry effect */}
                      <div
                        className={`zoom-wrap cursor-pointer relative ${imgH}`}
                        onClick={() => project.images[0] && openLightbox(project.images, 0, project.title)}
                      >
                        <Image
                          src={project.images[0]}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width:640px) 100vw,(max-width:1200px) 50vw,33vw"
                        />
                        {/* Photo count badge */}
                        {project.images.length > 1 && (
                          <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                            +{project.images.length} photos
                          </div>
                        )}
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                          <span className="text-white text-sm font-medium tracking-wide">View Project</span>
                        </div>
                      </div>

                      {/* Card body */}
                      <div className="p-5">
                        <span className="text-[var(--t-accent)] text-xs uppercase tracking-widest font-medium">
                          {project.category}
                        </span>
                        <h3 className="font-serif text-lg font-bold text-[var(--t-dark)] mt-1 mb-1">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-1 text-gray-500 text-sm mb-3">
                          <MapPin size={13} />
                          {project.location}
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>

                        {/* Thumbnail strip for multi-image projects */}
                        {project.images.length > 1 && (
                          <div className="flex gap-2 mt-4 overflow-x-auto pb-1">
                            {project.images.slice(1).map((img, j) => (
                              <button
                                key={j}
                                onClick={() => openLightbox(project.images, j + 1, project.title)}
                                className="relative w-16 h-12 rounded flex-shrink-0 overflow-hidden border-2 border-transparent hover:border-[var(--t-accent)] transition-colors"
                              >
                                <Image src={img} alt="" fill className="object-cover" sizes="64px" />
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </RevealOnScroll>
                );
              })}
            </div>

            {/* Empty state */}
            {filtered.length === 0 && (
              <p className="text-center text-gray-500 py-24">No projects in this category yet.</p>
            )}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/92 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-[var(--t-accent)] transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={30} />
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl w-full max-h-[82vh] aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.title}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          {/* Caption + nav */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="text-white/70 text-sm mb-3">{lightbox.title}</p>
            {lightbox.all.length > 1 && (
              <div className="flex items-center gap-4 justify-center">
                <button
                  onClick={(e) => { e.stopPropagation(); lightboxNav(-1); }}
                  className="text-white/60 hover:text-white transition-colors text-sm px-3 py-1 border border-white/20 rounded"
                >
                  ‹ Prev
                </button>
                <span className="text-white/40 text-xs">
                  {lightboxIdx + 1} / {lightbox.all.length}
                </span>
                <button
                  onClick={(e) => { e.stopPropagation(); lightboxNav(1); }}
                  className="text-white/60 hover:text-white transition-colors text-sm px-3 py-1 border border-white/20 rounded"
                >
                  Next ›
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="bg-[var(--t-light-2)] py-16 px-6 text-center">
        <RevealOnScroll>
          <p className="text-[var(--t-accent)] text-sm uppercase tracking-[0.25em] mb-3">
            Interested in Working With Us?
          </p>
          <h2 className="font-serif text-3xl font-bold text-[var(--t-dark)] mb-6">
            Let&apos;s Create Your Next Landmark
          </h2>
          <Link
            href="/contact"
            className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded text-sm uppercase tracking-widest"
          >
            Get in Touch
          </Link>
        </RevealOnScroll>
      </section>
    </>
  );
}
