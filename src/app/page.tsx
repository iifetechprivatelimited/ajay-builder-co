import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Users, MapPin, Award } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";
import HeroCarousel from "@/components/HeroCarousel";
import { stats, services, projects, valueApproach } from "@/lib/data";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Ajay Bansal Group — 40 years of architectural excellence in engineering, interior design, and real estate development across India.",
};

const featuredProjects = projects.filter((p) => p.featured && p.images.length > 0);

export default function HomePage() {
  return (
    <>
      {/* HERO — full-screen image carousel */}
      <HeroCarousel />

      {/* STATS */}
      <section className="bg-[var(--t-dark-2)] py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <div className="border-r border-white/10 last:border-0">
                  <div className="font-serif text-3xl md:text-4xl font-bold text-[var(--t-accent)]">{s.value}</div>
                  <div className="text-gray-400 text-sm mt-1">{s.label}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <RevealOnScroll>
            <div>
              <p className="text-[var(--t-accent)] text-sm uppercase tracking-[0.25em] font-medium mb-3">Who We Are</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[var(--t-dark)] leading-tight mb-6 gold-underline">
                A Legacy of Over<br />Three Decades
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Ajay Bansal Group, we believe that design is transformative. For over 40 years, we have been the trusted partner for government bodies, premier institutions, and discerning private clients — consistently delivering projects that stand as testaments to quality, innovation, and integrity.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our integrated team of Architects, Engineers, Interior Designers, and Developers brings deep expertise to every engagement — saving time, cutting costs, and delivering innovation that transcends expectations.
              </p>
              <Link href="/about" className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded text-sm uppercase tracking-widest">
                Our Story <ArrowRight size={15} />
              </Link>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <div className="grid grid-cols-2 gap-4">
              {[
                {icon:<Building2 size={28}/>, title:"6 Business Areas", desc:"Architecture, Engineering, Interiors, Development, Valuation & Turn-Key"},
                {icon:<Award size={28}/>, title:"Lifetime Achievement", desc:"Recognized for outstanding contributions to architecture and structural engineering"},
                {icon:<Users size={28}/>, title:"Trusted by Institutions", desc:"GDA, Municipal Corp, Housing Board, nationalized banks & more"},
                {icon:<MapPin size={28}/>, title:"Pan-India Presence", desc:"Projects across MP, Rajasthan, Chhattisgarh and Delhi NCR"},
              ].map((item, i) => (
                <div key={i} className="luxury-card card-hover bg-white rounded-xl p-6">
                  <div className="text-[var(--t-accent)] mb-3">{item.icon}</div>
                  <h4 className="font-semibold text-[var(--t-dark)] text-sm mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[var(--t-light-2)] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="text-[var(--t-accent)] text-sm uppercase tracking-[0.25em] font-medium mb-3">What We Do</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[var(--t-dark)]">Our Services</h2>
            </div>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <RevealOnScroll key={s.id} delay={i * 80}>
                <div className="luxury-card card-hover bg-white rounded-xl p-8 h-full">
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="font-serif text-xl font-bold text-[var(--t-dark)] mb-3">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.description}</p>
                  <ul className="space-y-1">
                    {s.highlights.slice(0,2).map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--t-accent)] flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="btn-outline inline-flex items-center gap-2 px-8 py-4 rounded text-sm uppercase tracking-widest">
              Explore All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <RevealOnScroll>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
              <div>
                <p className="text-[var(--t-accent)] text-sm uppercase tracking-[0.25em] font-medium mb-3">Our Work</p>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-[var(--t-dark)]">Featured Projects</h2>
              </div>
              <Link href="/portfolio" className="text-sm text-[var(--t-accent)] hover:text-[var(--t-dark)] inline-flex items-center gap-2 font-medium transition-colors">
                View All Projects <ArrowRight size={16} />
              </Link>
            </div>
          </RevealOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <RevealOnScroll key={project.id} delay={i * 100}>
                <Link href={`/portfolio#${project.id}`} className="group block">
                  <div className="zoom-wrap rounded-xl overflow-hidden aspect-[4/3] bg-[var(--t-dark-2)] relative">
                    {project.images[0] && (
                      <Image src={project.images[0]} alt={project.title} fill className="object-cover" sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-[var(--t-accent)] text-xs uppercase tracking-widest">{project.category}</span>
                      <h3 className="font-serif text-white text-xl font-bold mt-1">{project.title}</h3>
                      <p className="text-gray-300 text-sm mt-1">{project.location}</p>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[var(--t-dark)] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="text-[var(--t-accent)] text-sm uppercase tracking-[0.25em] font-medium mb-3">How We Work</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">Our Value Approach</h2>
            </div>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueApproach.map((step, i) => (
              <RevealOnScroll key={step.step} delay={i * 80}>
                <div className="border border-white/10 rounded-xl p-6 hover:border-[var(--t-accent)]/50 transition-colors">
                  <div className="font-serif text-5xl font-bold text-[var(--t-accent)]/20 mb-3">{step.step}</div>
                  <h4 className="font-semibold text-white text-lg mb-2">{step.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[var(--t-accent)] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage:"repeating-linear-gradient(45deg,var(--t-dark) 0,var(--t-dark) 1px,transparent 0,transparent 50%)",backgroundSize:"20px 20px"}} />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[var(--t-dark)] mb-4">Ready to Build Your Vision?</h2>
          <p className="text-[var(--t-dark)]/70 text-lg mb-8">Let's discuss your project. Our team is ready to bring your ideas to life.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[var(--t-dark)] text-white px-8 py-4 rounded text-sm uppercase tracking-widest font-semibold hover:bg-[var(--t-dark-2)] transition-colors">
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
