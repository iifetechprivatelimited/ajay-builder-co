import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";
import { trustedClients } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Ajay Builders & Consultant — 40 years of design excellence, our ethos, vision, mission, and the story of Er. Ajay Bansal.",
};

const values = [
  "Attain best practices and become a leading service provider",
  "Work with vigor, dedication and innovation to achieve excellence",
  "Consistently achieve high growth with highest levels of productivity",
  "Technology-driven, efficient and financially sound organization",
  "Contribute towards community development and nation building",
  "Promote a work culture that fosters individual growth and team spirit",
  "Uphold the guiding principles of trust, integrity and transparency",
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[var(--t-dark)] pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <p className="text-[var(--t-accent)] text-sm uppercase tracking-[0.3em] mb-4">Our Story</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">About Ajay Builders & Consultant</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Four decades of transforming visions into landmark realities — guided by integrity, driven by innovation.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <RevealOnScroll>
            <div>
              <p className="text-[var(--t-accent)] text-sm uppercase tracking-[0.25em] font-medium mb-3">Who We Are</p>
              <h2 className="font-serif text-4xl font-bold text-[var(--t-dark)] mb-6 gold-underline">
                A Reliable Platform for Assured Quality
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                At Ajay Builders & Consultant, we constantly strive for optimum performance and excellent results. For us, quality work is the means. The starting points are goals, strategies and expectations — but our work transcends them to create a new and better reality. Design is transformative.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                We understand the requirements of each client and efficiently address every challenge with our committed team, giving the best creative expression to each project while running a growth-driven, profitable business.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Widely recognized as a leading collaborative architectural, engineering, and developer firm, our one-firm ethos saves time, cuts costs, and delivers innovation. We offer the industry's deepest bench of expertise — matched with experience gained through a diverse spectrum of clients and projects.
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <div className="relative">
              <div className="bg-[var(--t-light-2)] p-8">
                <div className="grid grid-cols-2 gap-px bg-gray-200 mb-px">
                  {[
                    {val:"1984", label:"Year Founded"},
                    {val:"40+", label:"Years Experience"},
                    {val:"1000+", label:"Projects Delivered"},
                    {val:"6", label:"Service Domains"},
                  ].map((item) => (
                    <div key={item.label} className="text-center bg-white p-6">
                      <div className="font-serif text-3xl font-bold text-[var(--t-accent)]">{item.val}</div>
                      <div className="text-gray-500 text-xs mt-1 uppercase tracking-[0.12em]">{item.label}</div>
                    </div>
                  ))}
                </div>
                <div className="relative h-48 bg-white flex items-center justify-center mt-px">
                  <Image src="/images/logos/ABC Logo2.png" alt="Ajay Builders & Consultant" fill className="object-contain p-8" />
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ER AJAY BANSAL - CITATION */}
      <section className="bg-[var(--t-dark)] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <p className="text-[var(--t-accent)] text-sm uppercase tracking-[0.25em] font-medium mb-3">Leadership</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">Er. Ajay Bansal</h2>
              <p className="text-gray-400 mt-2">Founder & Principal Architect | Structural Engineer | Valuer</p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={150}>
            <div className="bg-white/5 border border-white/10 rounded-none p-8 md:p-12 text-gray-300 leading-relaxed space-y-5">
              <p>
                In recognition of an extraordinary professional journey spanning nearly four decades, <strong className="text-white">Shri Ajay Bansal</strong> stands as a distinguished figure in the fields of Architectural design, Urban Planning, Structural Engineering, Surveying, and Valuation. His unwavering commitment, technical excellence, and visionary leadership have left an indelible mark on the infrastructural development of Gwalior and the wider regions of Madhya Pradesh, Rajasthan, Chhattisgarh, and Delhi NCR.
              </p>
              <p>
                As the guiding force behind a consultancy that has served an extensive spectrum of Government, Semi-Government, and premier private institutions, Shri Bansal has demonstrated exceptional expertise in architectural design, structural engineering, project valuation, and insurance assessment. His firm&apos;s association with esteemed bodies such as the <strong className="text-[var(--t-accent)]">Gwalior Development Authority, Municipal Corporation Gwalior, M.P. Housing Board, National Insurance Company, LIC Housing Finance, Military Engineering Services</strong>, and numerous nationalized banks stands as a testament to his credibility.
              </p>
              <p>
                His notable contributions include the landmark <strong className="text-white">Shatabdipuram Multi-Storeyed Complex, Transport Nagar, Market Complexes, Hotels and Resorts</strong>, and several township schemes that have shaped the urban landscape of Gwalior. A crowning moment was his association with the construction of the <strong className="text-[var(--t-accent)]">Library dedicated to Hon&apos;ble Shri Atal Bihari Vajpayee</strong> — an honour reserved for only the most trusted professionals.
              </p>
              <div className="border-t border-white/10 pt-6 mt-6 flex items-center gap-4">
                <div className="w-12 h-1 bg-[var(--t-accent)] rounded" />
                <p className="text-[var(--t-accent)] font-medium italic">Conferred the Lifetime Achievement Award</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* VISION MISSION */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="text-[var(--t-accent)] text-sm uppercase tracking-[0.25em] font-medium mb-3">Our Foundation</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[var(--t-dark)]">Vision, Mission &amp; Values</h2>
            </div>
          </RevealOnScroll>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <RevealOnScroll>
              <div className="bg-[var(--t-light-2)] rounded-none p-8">
                <div className="w-10 h-10 bg-[var(--t-accent)] flex items-center justify-center mb-5">
                  <span className="text-white font-serif font-bold text-lg">V</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[var(--t-dark)] mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To contribute significantly in quality works across all our existing clients and future associations — becoming the benchmark for architectural and engineering excellence in India.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={150}>
              <div className="bg-[var(--t-dark)] rounded-none p-8">
                <div className="w-10 h-10 bg-[var(--t-accent)] flex items-center justify-center mb-5">
                  <span className="text-white font-serif font-bold text-lg">M</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To build a world-class infrastructure company and bring the best concepts across all our business lines — with the highest standards of professionalism, ethics, quality, and customer service.
                </p>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll>
            <div>
              <h3 className="font-serif text-2xl font-bold text-[var(--t-dark)] mb-8 text-center">Our Values</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {values.map((v, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-5 h-px bg-[var(--t-accent)] flex-shrink-0 mt-2.5" />
                    <p className="text-gray-600 text-sm leading-relaxed">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="bg-[var(--t-light-2)] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <p className="text-[var(--t-accent)] text-sm uppercase tracking-[0.25em] font-medium mb-3">Who Trusts Us</p>
              <h2 className="font-serif text-4xl font-bold text-[var(--t-dark)]">Our Notable Clients</h2>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="flex flex-wrap justify-center gap-3">
              {trustedClients.map((client) => (
                <span key={client} className="bg-white border border-[var(--t-accent)]/20 text-gray-700 text-xs px-4 py-2.5 uppercase tracking-[0.08em]">
                  {client}
                </span>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <RevealOnScroll>
          <div className="w-px h-10 bg-[var(--t-accent)]/40 mx-auto mb-8" />
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[var(--t-dark)] mb-4">Let&apos;s Build Something Exceptional Together</h2>
          <p className="text-gray-500 mb-10 leading-relaxed">Our team is ready to listen, design, and deliver.</p>
          <Link href="/contact" className="btn-gold inline-flex items-center gap-3 px-10 py-4 text-xs uppercase tracking-[0.2em]">
            Contact Us <ArrowRight size={14} />
          </Link>
        </RevealOnScroll>
      </section>
    </>
  );
}
