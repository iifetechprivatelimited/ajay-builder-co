"use client";

import { ArrowUpRight, Building2, Home, Landmark, Sofa, Compass, Wrench } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";

const nibaStats = [
  { value: "15+", label: "Years of Experience" },
  { value: "500+", label: "Projects Delivered" },
  { value: "200+", label: "Happy Clients" },
  { value: "50+", label: "Expert Professionals" },
];

const nibaServices = [
  { icon: <Home size={18} strokeWidth={1.5} />, label: "Residential Construction" },
  { icon: <Building2 size={18} strokeWidth={1.5} />, label: "Commercial Buildings" },
  { icon: <Landmark size={18} strokeWidth={1.5} />, label: "Institutional Projects" },
  { icon: <Sofa size={18} strokeWidth={1.5} />, label: "Interior Design" },
  { icon: <Compass size={18} strokeWidth={1.5} />, label: "Architectural Planning" },
  { icon: <Wrench size={18} strokeWidth={1.5} />, label: "Renovation & Remodelling" },
];

export default function NibaVenturesSection() {
  return (
    <section className="bg-[var(--t-light-2)] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <RevealOnScroll>
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[var(--t-accent)]/30" />
            <p className="text-[var(--t-accent)] text-xs uppercase tracking-[0.3em] font-medium whitespace-nowrap">
              Group Associate
            </p>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[var(--t-accent)]/30" />
          </div>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — Identity + Description + Stats */}
          <RevealOnScroll variant="slideLeft">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[var(--t-dark)] leading-tight mb-2 gold-underline">
                NIBA Ventures
              </h2>
              <p className="text-[var(--t-accent)] text-sm uppercase tracking-[0.2em] mt-4 mb-6">
                Construction &amp; Real Estate
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                NIBA Ventures is a trusted construction and real estate firm with over 15 years of expertise in delivering residential, commercial, and institutional projects across North India. From precision-engineered structures to thoughtfully designed living spaces, NIBA Ventures transforms blueprints into breathtaking realities.
              </p>
              <p className="text-gray-600 leading-relaxed mb-10">
                As an associate of the Ajay Bansal Group, NIBA Ventures upholds the same commitment to quality, transparency, and on-time delivery — backed by a team of 50+ seasoned construction and design professionals.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
                {nibaStats.map((s, i) => (
                  <div key={i} className="bg-white px-5 py-5 text-center">
                    <div className="font-serif text-3xl font-bold text-[var(--t-accent)]">{s.value}</div>
                    <div className="text-gray-500 text-[10px] uppercase tracking-[0.15em] mt-1 leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Right — Services + CTA */}
          <RevealOnScroll variant="slideRight" delay={150}>
            <div className="bg-[var(--t-dark)] p-8 lg:p-10">
              <p className="text-[var(--t-accent)] text-[10px] uppercase tracking-[0.3em] font-medium mb-6">
                What They Build
              </p>
              <ul className="space-y-0 mb-10">
                {nibaServices.map((s, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 py-3.5 border-b border-white/8 group"
                  >
                    <span className="text-[var(--t-accent)] flex-shrink-0 transition-transform duration-200 group-hover:scale-110">
                      {s.icon}
                    </span>
                    <span className="text-gray-300 text-sm tracking-wide group-hover:text-white transition-colors">
                      {s.label}
                    </span>
                    <span className="ml-auto w-4 h-px bg-[var(--t-accent)]/30 group-hover:w-6 group-hover:bg-[var(--t-accent)] transition-all duration-300" />
                  </li>
                ))}
              </ul>

              <a
                href="https://niba-ventures.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 btn-gold px-7 py-3.5 text-xs uppercase tracking-[0.18em] group"
              >
                Visit NIBA Ventures
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
}
