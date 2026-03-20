"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Globe, Send, CheckCircle } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";

const services = ["Architecture", "Structural Engineering", "Interior Design", "Real Estate Development", "Property Valuation", "Turn-Key Solutions", "Other"];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({name:"", phone:"", email:"", service:"", message:""});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, hook this to an API/email service
    setSubmitted(true);
  };

  return (
    <>
      {/* HERO */}
      <section className="bg-[var(--t-dark)] pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <p className="text-[var(--t-accent)] text-sm uppercase tracking-[0.3em] mb-4">Reach Us</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Let's Start a Conversation</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you have a project in mind or just want to know more — we're ready to listen.
          </p>
        </div>
      </section>

      {/* CONTACT BODY */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <RevealOnScroll>
            <div>
              <p className="text-[var(--t-accent)] text-sm uppercase tracking-[0.25em] font-medium mb-3">Our Office</p>
              <h2 className="font-serif text-3xl font-bold text-[var(--t-dark)] mb-8 gold-underline">
                Ajay Bansal Group
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[var(--t-light-2)] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-[var(--t-accent)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--t-dark)] text-sm mb-1">Office Address</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      S 34–35 Sanjay Complex, Jayendraganj,<br />
                      Gwalior (MP) – 474009
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[var(--t-light-2)] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-[var(--t-accent)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--t-dark)] text-sm mb-1">Phone</p>
                    <a href="tel:+917514066607" className="text-gray-600 text-sm hover:text-[var(--t-accent)] transition-colors">
                      (+91-751) 4066607
                    </a>
                    <span className="text-gray-400 mx-2">/</span>
                    <a href="tel:+912373134" className="text-gray-600 text-sm hover:text-[var(--t-accent)] transition-colors">
                      2373134
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[var(--t-light-2)] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-[var(--t-accent)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--t-dark)] text-sm mb-1">Email</p>
                    <a href="mailto:nikunjbansal@nibaventures.com" className="text-gray-600 text-sm hover:text-[var(--t-accent)] transition-colors block">
                      nikunjbansal@nibaventures.com
                    </a>
                    <a href="mailto:ar.ajaybansal@gmail.com" className="text-gray-600 text-sm hover:text-[var(--t-accent)] transition-colors block">
                      ar.ajaybansal@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[var(--t-light-2)] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe size={18} className="text-[var(--t-accent)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--t-dark)] text-sm mb-1">Website</p>
                    <a href="https://www.ajaybansalgroup.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm hover:text-[var(--t-accent)] transition-colors">
                      www.ajaybansalgroup.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 h-56 bg-[var(--t-light-2)] flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="text-[var(--t-accent)] mx-auto mb-2" />
                  <p className="text-gray-500 text-sm">Jayendraganj, Gwalior, MP</p>
                  <a
                    href="https://maps.google.com/?q=Sanjay+Complex+Jayendraganj+Gwalior"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--t-accent)] text-sm underline mt-1 block"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Form */}
          <RevealOnScroll delay={200}>
            <div className="bg-white rounded-2xl shadow-luxury p-8 md:p-10 border border-gray-100">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle size={56} className="text-[var(--t-accent)] mx-auto mb-4" />
                  <h3 className="font-serif text-2xl font-bold text-[var(--t-dark)] mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for reaching out. We'll be in touch within 24 hours.</p>
                </div>
              ) : (
                <>
                  <h3 className="font-serif text-2xl font-bold text-[var(--t-dark)] mb-2">Send Us a Message</h3>
                  <p className="text-gray-500 text-sm mb-8">Fill in the form and our team will get back to you promptly.</p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={e => setForm({...form, name:e.target.value})}
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-[var(--t-dark)] placeholder-gray-400 focus:outline-none focus:border-[var(--t-accent)] transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5">Phone *</label>
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={e => setForm({...form, phone:e.target.value})}
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-[var(--t-dark)] placeholder-gray-400 focus:outline-none focus:border-[var(--t-accent)] transition-colors"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5">Email</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={e => setForm({...form, email:e.target.value})}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-[var(--t-dark)] placeholder-gray-400 focus:outline-none focus:border-[var(--t-accent)] transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5">Service Interested In</label>
                      <select
                        value={form.service}
                        onChange={e => setForm({...form, service:e.target.value})}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-[var(--t-dark)] focus:outline-none focus:border-[var(--t-accent)] transition-colors bg-white"
                      >
                        <option value="">Select a service...</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5">Message *</label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={e => setForm({...form, message:e.target.value})}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-[var(--t-dark)] placeholder-gray-400 focus:outline-none focus:border-[var(--t-accent)] transition-colors resize-none"
                        placeholder="Tell us about your project, requirements, timeline..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-gold w-full flex items-center justify-center gap-2 py-4 rounded-lg text-sm uppercase tracking-widest"
                    >
                      Send Message <Send size={16} />
                    </button>
                  </form>
                </>
              )}
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
