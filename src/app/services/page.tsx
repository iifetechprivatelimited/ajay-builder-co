import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Wrench, Sofa, Landmark, BarChart2, Key } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";
import { services, valueApproach } from "@/lib/data";

const serviceIconMap: Record<string, React.ReactNode> = {
  architecture:  <Compass   size={32} strokeWidth={1.2} />,
  engineering:   <Wrench    size={32} strokeWidth={1.2} />,
  interior:      <Sofa      size={32} strokeWidth={1.2} />,
  development:   <Landmark  size={32} strokeWidth={1.2} />,
  valuation:     <BarChart2 size={32} strokeWidth={1.2} />,
  turnkey:       <Key       size={32} strokeWidth={1.2} />,
};

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Ajay Bansal Group's full range of services: Architecture, Structural Engineering, Interior Design, Real Estate Development, Valuation, and Turn-Key Solutions.",
};

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[var(--t-dark)] pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <p className="text-[var(--t-accent)] text-sm uppercase tracking-[0.3em] mb-4">What We Offer</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Six integrated service domains delivering end-to-end solutions — from concept to completion.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto space-y-0">
          {services.map((service, i) => (
            <RevealOnScroll key={service.id} delay={100}>
              <div className={`grid lg:grid-cols-2 gap-0 border-b border-gray-100 last:border-b-0 ${i % 2 === 1 ? "" : ""}`}>
                {/* Text side */}
                <div className={`p-10 lg:p-16 flex flex-col justify-center ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="text-[var(--t-accent)] mb-6">
                    {serviceIconMap[service.id] ?? <Compass size={32} strokeWidth={1.2} />}
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--t-dark)] mb-2 gold-underline">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mt-6 mb-8">{service.description}</p>
                  <ul className="space-y-3">
                    {service.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-3">
                        <span className="w-5 h-px bg-[var(--t-accent)] flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Visual side */}
                <div className={`relative bg-[var(--t-dark)] flex items-center justify-center min-h-[320px] overflow-hidden ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  {/* Large ghost number */}
                  <span className="absolute font-serif text-[200px] font-bold text-white/[0.03] leading-none select-none pointer-events-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="relative text-center px-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 border border-[var(--t-accent)]/25 text-[var(--t-accent)] mb-6">
                      {serviceIconMap[service.id] ?? <Compass size={32} strokeWidth={1.2} />}
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-white">{service.title}</h3>
                    <div className="w-8 h-px bg-[var(--t-accent)] mx-auto mt-5" />
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[var(--t-dark)] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="text-[var(--t-accent)] text-sm uppercase tracking-[0.25em] font-medium mb-3">Our Methodology</p>
              <h2 className="font-serif text-4xl font-bold text-white">The Delivery Process</h2>
            </div>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {valueApproach.map((step, i) => (
              <RevealOnScroll key={step.step} delay={i * 80}>
                <div className="bg-[var(--t-dark)] border border-white/5 hover:border-[var(--t-accent)]/30 transition-colors p-8 group">
                  <div className="font-serif text-6xl font-bold text-white/5 group-hover:text-[var(--t-accent)]/15 transition-colors mb-4 leading-none">{step.step}</div>
                  <h4 className="font-semibold text-white text-base mb-2 tracking-wide">{step.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center border-t border-gray-100">
        <RevealOnScroll>
          <div className="w-px h-10 bg-[var(--t-accent)]/40 mx-auto mb-8" />
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[var(--t-dark)] mb-4">Need a Custom Solution?</h2>
          <p className="text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed">
            Every project is unique. Tell us your requirements and we'll craft the perfect approach.
          </p>
          <Link href="/contact" className="btn-gold inline-flex items-center gap-3 px-10 py-4 text-xs uppercase tracking-[0.2em]">
            Discuss Your Project <ArrowRight size={14} />
          </Link>
        </RevealOnScroll>
      </section>
    </>
  );
}
