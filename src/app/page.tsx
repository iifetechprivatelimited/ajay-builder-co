import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Users, MapPin, Award, Compass, Wrench, Sofa, BarChart2, Key, Landmark } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";
import HeroCarousel from "@/components/HeroCarousel";
import NibaVenturesSection from "@/components/NibaVenturesSection";
import { stats, services, projects, valueApproach } from "@/lib/data";

const serviceIconMap: Record<string, React.ReactNode> = {
  architecture:  <Compass  size={28} strokeWidth={1.5} />,
  engineering:   <Wrench   size={28} strokeWidth={1.5} />,
  interior:      <Sofa     size={28} strokeWidth={1.5} />,
  development:   <Landmark size={28} strokeWidth={1.5} />,
  valuation:     <BarChart2 size={28} strokeWidth={1.5} />,
  turnkey:       <Key      size={28} strokeWidth={1.5} />,
};

export const metadata: Metadata = {
  title: "Home",
  description:
    "Ajay Builders & Consultant — 40 years of architectural excellence in engineering, interior design, and real estate development across India.",
};

const featuredProjects = projects.filter((p) => p.featured && p.images.length > 0);

export default function HomePage() {
  return (
    <>
      {/* HERO — full-screen image carousel */}
      <HeroCarousel />

      {/* STATS */}
      <section className="bg-[var(--t-dark)] border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            {stats.map((s, i) => (
              <RevealOnScroll key={i} delay={i * 80}>
                <div className="px-8 py-4 border-r border-white/10 last:border-0 text-center">
                  <div className="font-serif text-4xl md:text-5xl font-bold text-[var(--t-accent)] tracking-tight">{s.value}</div>
                  <div className="text-gray-400 text-xs uppercase tracking-[0.15em] mt-2">{s.label}</div>
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
            <div className="grid grid-cols-2 gap-px bg-gray-100">
              {[
                {icon:<Building2 size={22} strokeWidth={1.5}/>, title:"6 Business Areas", desc:"Architecture, Engineering, Interiors, Development, Valuation & Turn-Key"},
                {icon:<Award size={22} strokeWidth={1.5}/>, title:"Lifetime Achievement", desc:"Recognized for outstanding contributions to architecture and structural engineering"},
                {icon:<Users size={22} strokeWidth={1.5}/>, title:"Trusted by Institutions", desc:"GDA, Municipal Corp, Housing Board, nationalized banks & more"},
                {icon:<MapPin size={22} strokeWidth={1.5}/>, title:"Pan-India Presence", desc:"Projects across MP, Rajasthan, Chhattisgarh and Delhi NCR"},
              ].map((item, i) => (
                <div key={i} className="luxury-card card-hover bg-white p-6 group">
                  <div className="text-[var(--t-accent)] mb-4 transition-transform duration-300 group-hover:scale-110 origin-left">{item.icon}</div>
                  <h4 className="font-semibold text-[var(--t-dark)] text-sm mb-2 tracking-wide">{item.title}</h4>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {services.map((s, i) => (
              <RevealOnScroll key={s.id} delay={i * 60}>
                <div className="luxury-card card-hover bg-white p-8 h-full group">
                  <div className="text-[var(--t-accent)] mb-5 transition-transform duration-300 group-hover:scale-110 origin-left">
                    {serviceIconMap[s.id] ?? <Compass size={28} strokeWidth={1.5} />}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[var(--t-dark)] mb-3">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{s.description}</p>
                  <ul className="space-y-2">
                    {s.highlights.slice(0,2).map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="w-4 h-px bg-[var(--t-accent)] flex-shrink-0" />
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
                  <div className="zoom-wrap overflow-hidden aspect-[4/3] bg-[var(--t-dark-2)] relative">
                    {project.images[0] && (
                      <Image src={project.images[0]} alt={project.title} fill className="object-cover" sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-[var(--t-accent)] text-[10px] uppercase tracking-[0.2em]">{project.category}</span>
                      <h3 className="font-serif text-white text-xl font-bold mt-1 leading-snug">{project.title}</h3>
                      <p className="text-gray-300 text-xs mt-1 tracking-wide">{project.location}</p>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* NIBA VENTURES — GROUP ASSOCIATE */}
      <NibaVenturesSection />

      {/* PROCESS */}
      <section className="bg-[var(--t-dark)] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <p className="text-[var(--t-accent)] text-sm uppercase tracking-[0.25em] font-medium mb-3">How We Work</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">Our Value Approach</h2>
            </div>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {valueApproach.map((step, i) => (
              <RevealOnScroll key={step.step} delay={i * 80}>
                <div className="p-8 border border-white/5 hover:border-[var(--t-accent)]/30 transition-colors bg-[var(--t-dark)] group">
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
      <section className="relative bg-[var(--t-dark)] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:"repeating-linear-gradient(0deg,white 0,white 1px,transparent 0,transparent 60px),repeating-linear-gradient(90deg,white 0,white 1px,transparent 0,transparent 60px)"}} />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="w-px h-12 bg-[var(--t-accent)]/40 mx-auto mb-8" />
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Ready to Build<br />Your Vision?</h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">Let's discuss your project. Our team is ready to bring your ideas to life.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 border border-[var(--t-accent)] text-[var(--t-accent)] hover:bg-[var(--t-accent)] hover:text-white px-10 py-4 text-xs uppercase tracking-[0.2em] transition-colors duration-300">
            Start a Conversation <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
