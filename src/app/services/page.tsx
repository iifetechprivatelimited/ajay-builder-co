import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";
import { services, valueApproach } from "@/lib/data";

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
        <div className="max-w-7xl mx-auto space-y-16">
          {services.map((service, i) => (
            <RevealOnScroll key={service.id} delay={100}>
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="inline-block text-5xl mb-6">{service.icon}</div>
                  <p className="text-[var(--t-accent)] text-xs uppercase tracking-widest mb-2">{`0${i + 1} / 06`}</p>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--t-dark)] mb-4 gold-underline">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3">
                        <CheckCircle size={16} className="text-[var(--t-accent)] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="bg-gradient-to-br from-[var(--t-dark)] to-[var(--t-dark-3)] rounded-2xl p-12 flex items-center justify-center min-h-[280px]">
                    <div className="text-center">
                      <div className="text-7xl mb-4">{service.icon}</div>
                      <h3 className="font-serif text-2xl font-bold text-white">{service.title}</h3>
                      <div className="w-12 h-0.5 bg-[var(--t-accent)] mx-auto mt-3" />
                    </div>
                  </div>
                </div>
              </div>
              {i < services.length - 1 && (
                <div className="border-b border-gray-200 mt-16" />
              )}
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
          <div className="relative">
            <div className="hidden lg:block absolute top-6 left-0 right-0 h-0.5 bg-[var(--t-accent)]/20" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {valueApproach.map((step, i) => (
                <RevealOnScroll key={step.step} delay={i * 80}>
                  <div className="relative bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[var(--t-accent)]/50 transition-colors">
                    <div className="w-12 h-12 bg-[var(--t-accent)] rounded-full flex items-center justify-center font-bold text-[var(--t-dark)] mb-4">
                      {step.step}
                    </div>
                    <h4 className="font-semibold text-white text-lg mb-2">{step.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <RevealOnScroll>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--t-dark)] mb-4">Need a Custom Solution?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Every project is unique. Tell us your requirements and we'll craft the perfect approach.
          </p>
          <Link href="/contact" className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded text-sm uppercase tracking-widest">
            Discuss Your Project <ArrowRight size={16} />
          </Link>
        </RevealOnScroll>
      </section>
    </>
  );
}
