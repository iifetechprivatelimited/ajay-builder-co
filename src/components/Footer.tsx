import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--t-dark)] text-white">
      {/* Top accent line — thin, architectural */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--t-accent)] to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 relative">
                <Image
                  src="/images/logos/ABC Logo2.png"
                  alt="ABC"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="font-serif font-bold text-xl">
                  Ajay Builders & Consultant
                </div>
                <div className="text-[11px] tracking-[0.2em] text-[var(--t-accent)] uppercase">
                  Formerly Ajay Builder &amp; Consultants
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Established in 1984, Ajay Builders & Consultant is a multi-disciplinary
              firm delivering excellence in Architecture, Engineering, Interior
              Design, Development, and Valuation across India.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.ajaybansalgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--t-accent)] hover:text-white transition-colors text-sm"
              >
                www.ajaybansalgroup.com
              </a>
              <a
                href="https://niba-ventures.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[var(--t-accent)] transition-colors text-sm"
              >
                NIBA Ventures — Associate Firm ↗
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--t-accent)] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[var(--t-accent)] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--t-accent)] mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={16} className="text-[var(--t-accent)] mt-0.5 flex-shrink-0" />
                <span>
                  S 34–35 Sanjay Complex, Jayendraganj,
                  <br />
                  Gwalior (MP) – 474009
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone size={16} className="text-[var(--t-accent)] flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:07512373134" className="hover:text-[var(--t-accent)] transition-colors">
                    0751-2373134
                  </a>
                  <a href="tel:+919111078900" className="hover:text-[var(--t-accent)] transition-colors">
                    91110 789 00
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Mail size={16} className="text-[var(--t-accent)] mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a
                    href="mailto:ar.ajaybansal@gmail.com"
                    className="hover:text-[var(--t-accent)] transition-colors"
                  >
                    ar.ajaybansal@gmail.com
                  </a>
                  <a
                    href="mailto:nibaventures@gmail.com"
                    className="hover:text-[var(--t-accent)] transition-colors"
                  >
                    nibaventures@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Globe size={16} className="text-[var(--t-accent)] flex-shrink-0" />
                <a
                  href="https://www.ajaybansalgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--t-accent)] transition-colors"
                >
                  www.ajaybansalgroup.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Ajay Builders & Consultant. All rights
            reserved.
          </p>
          <p className="text-center">
            Architects · Engineers · Valuers · Developers · Interior Decorators
          </p>
        </div>
      </div>
    </footer>
  );
}
