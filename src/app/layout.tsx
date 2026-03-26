import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import SmoothScroll from "@/components/SmoothScroll";
import PageTransition from "@/components/PageTransition";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ajaybansalgroup.com"),
  title: {
    default: "Ajay Builders & Consultant | Architecture · Engineering · Interiors",
    template: "%s | Ajay Builders & Consultant",
  },
  description:
    "Ajay Builders & Consultant — 40+ years of excellence in architecture, structural engineering, interior design, real estate development, and property valuation across Madhya Pradesh, Rajasthan, and Delhi NCR.",
  keywords: [
    "Ajay Builders & Consultant",
    "Architect Gwalior",
    "Interior Designer Gwalior",
    "Builder Gwalior",
    "Structural Engineer Gwalior",
    "Real Estate Developer MP",
    "Property Valuation Gwalior",
  ],
  authors: [{ name: "Ajay Builders & Consultant" }],
  creator: "Ajay Builders & Consultant",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.ajaybansalgroup.com",
    siteName: "Ajay Builders & Consultant",
    title: "Ajay Builders & Consultant | Architecture · Engineering · Interiors",
    description:
      "40+ years of delivering exceptional architecture, engineering, and interior design projects across India.",
    images: [{ url: "/images/logos/ABC Logo2.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajay Builders & Consultant",
    description: "40+ years of design and engineering excellence.",
  },
  robots: { index: true, follow: true },
  manifest: "/manifest.json",
  icons: {
    icon: "/images/logos/ABC Logo2.png",
    apple: "/images/logos/ABC Logo2.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#131313",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col bg-[var(--t-light)]">
        <ThemeProvider>
          <SmoothScroll />
          <Navbar />
          <PageTransition>
            <main className="flex-1">{children}</main>
            <Footer />
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
