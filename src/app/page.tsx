"use client";

import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Minus,
  Plus,
  ChevronDown,
  ChevronUp,
  Quote,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

/* ============================================
   NAVIGATION
   ============================================ */
function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-none ${
        scrolled ? "bg-background border-b border-foreground" : "bg-background"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-[family-name:var(--font-playfair)] text-xl font-bold tracking-tight focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-foreground"
        >
          ATELIER
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {["Work", "Studio", "Journal", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm uppercase tracking-widest font-[family-name:var(--font-jetbrains)] hover:underline underline-offset-4 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-foreground transition-none"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button variant="outline" size="sm">
            Start Project
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-foreground">
          <div className="px-6 py-8 flex flex-col gap-6">
            {["Work", "Studio", "Journal", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg uppercase tracking-widest font-[family-name:var(--font-jetbrains)] hover:underline underline-offset-4"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </a>
            ))}
            <Separator className="my-2" />
            <Button variant="outline" size="sm" className="w-full">
              Start Project
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

/* ============================================
   HERO SECTION
   ============================================ */
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
      {/* Subtle horizontal line texture */}
      <div className="absolute inset-0 texture-lines opacity-[0.015] pointer-events-none" />
      {/* Noise texture */}
      <div className="absolute inset-0 texture-noise opacity-[0.02] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-24 md:py-32 lg:py-40">
        {/* Oversized headline */}
        <div className="mb-8 md:mb-12">
          <p className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-widest text-muted-foreground mb-6 md:mb-8">
            Design Studio — Est. 2019
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-[3.5rem] sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none">
            Where
            <br />
            <span className="italic">restraint</span>
            <br />
            becomes
            <br />
            expression
          </h1>
        </div>

        {/* Decorative element: thick rule + bordered square */}
        <div className="flex items-center gap-4 mb-12 md:mb-16">
          <div className="h-1 w-16 md:w-24 bg-foreground" />
          <div className="h-6 w-6 border-2 border-foreground" />
        </div>

        {/* Subtext and CTA */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-end">
          <p className="font-[family-name:var(--font-source-serif)] text-lg md:text-xl leading-relaxed text-muted-foreground max-w-lg">
            We craft editorial experiences through typography, contrast, and negative space.
            Every element exists with intention. Nothing more, nothing less.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg">
              View Our Work <ArrowRight size={16} strokeWidth={1.5} />
            </Button>
            <Button variant="outline" size="lg">
              Our Process
            </Button>
          </div>
        </div>
      </div>

      {/* Thick bottom rule */}
      <div className="mt-auto max-w-6xl mx-auto px-6 md:px-8 lg:px-12 w-full">
        <div className="h-1 bg-foreground" />
      </div>
    </section>
  );
}

/* ============================================
   FEATURES SECTION
   ============================================ */
const features = [
  {
    number: "01",
    title: "Editorial Design",
    description:
      "We approach every project like a magazine spread—typography as hero, whitespace as canvas, hierarchy as narrative.",
    icon: "Type",
  },
  {
    number: "02",
    title: "Brand Identity",
    description:
      "Stripped to essence. We build identities that command attention through confidence, not decoration.",
    icon: "Fingerprint",
  },
  {
    number: "03",
    title: "Digital Experience",
    description:
      "Interfaces that breathe. Every pixel deliberate, every interaction instant, every moment considered.",
    icon: "Monitor",
  },
  {
    number: "04",
    title: "Art Direction",
    description:
      "From concept to execution, we direct the visual narrative with the precision of a museum curator.",
    icon: "Frame",
  },
];

function FeatureIcon({ name }: { name: string }) {
  const iconClass = "size-5 stroke-[1.5]";
  switch (name) {
    case "Type":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 7 4 4 20 4 20 7" /><line x1="9" x2="15" y1="20" y2="20" /><line x1="12" x2="12" y1="4" y2="20" />
        </svg>
      );
    case "Fingerprint":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" /><path d="M14 13.12c0 2.38 0 6.38-1 8.88" /><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" /><path d="M2 12a10 10 0 0 1 18-6" /><path d="M2 16h.01" /><path d="M21.8 16c.2-2 .131-5.354 0-6" /><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" /><path d="M8.65 22c.21-.66.45-1.32.57-2" /><path d="M9 6.8a6 6 0 0 1 9 5.2v2" />
        </svg>
      );
    case "Monitor":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="3" rx="0" /><line x1="8" x2="16" y1="21" y2="21" /><line x1="12" x2="12" y1="17" y2="21" />
        </svg>
      );
    case "Frame":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" x2="21" y1="3" y2="3" /><line x1="3" x2="3" y1="3" y2="21" /><line x1="21" x2="21" y1="3" y2="21" /><line x1="3" x2="21" y1="21" y2="21" /><line x1="7" x2="17" y1="7" y2="7" /><line x1="7" x2="7" y1="7" y2="17" /><line x1="17" x2="17" y1="7" y2="17" /><line x1="7" x2="17" y1="17" y2="17" />
        </svg>
      );
    default:
      return null;
  }
}

function Features() {
  return (
    <section id="work" className="relative">
      {/* Diagonal texture */}
      <div className="absolute inset-0 texture-diagonal opacity-[0.01] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-24 md:py-32 lg:py-40">
        <div className="mb-16 md:mb-20">
          <p className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-widest text-muted-foreground mb-4">
            What We Do
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Disciplines
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-0">
          {features.map((feature, i) => (
            <div
              key={feature.number}
              className={`group border border-foreground p-8 md:p-10 transition-colors duration-100 hover:bg-foreground hover:text-background cursor-pointer ${
                i === 0 ? "md:border-r-0 md:border-b-0" : ""
              } ${i === 1 ? "md:border-b-0" : ""} ${
                i === 2 ? "md:border-r-0" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <span className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-widest text-muted-foreground group-hover:text-muted-foreground/70">
                    {feature.number}
                  </span>
                  <div className="group-hover:text-background">
                    <FeatureIcon name={feature.icon} />
                  </div>
                </div>
                <ArrowUpRight
                  size={20}
                  strokeWidth={1.5}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-100"
                />
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                {feature.title}
              </h3>
              <p className="font-[family-name:var(--font-source-serif)] text-base leading-relaxed text-muted-foreground group-hover:text-background/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================
   STATS SECTION (Inverted)
   ============================================ */
const stats = [
  { value: "147", label: "Projects Delivered" },
  { value: "12", label: "Industry Awards" },
  { value: "8", label: "Years of Practice" },
  { value: "36", label: "Global Clients" },
];

function Stats() {
  return (
    <section className="relative bg-foreground text-background overflow-hidden">
      {/* Vertical line texture for dark section */}
      <div className="absolute inset-0 texture-vertical-lines-dark opacity-[0.03] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-24 md:py-32 lg:py-40">
        <div className="mb-16 md:mb-20">
          <p className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-widest text-background/50 mb-4">
            By the Numbers
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Impact, <span className="italic">measured</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-background/20">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`p-8 md:p-10 text-center ${
                i < stats.length - 1 ? "border-r border-background/20" : ""
              } ${i < 2 ? "border-b border-background/20 md:border-b-0" : ""}`}
            >
              <div className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-4">
                {stat.value}
              </div>
              <div className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-widest text-background/50">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================
   PRODUCT DETAIL / EDITORIAL SECTION
   ============================================ */
function ProductDetail() {
  return (
    <section id="studio" className="relative">
      {/* Grid texture for editorial sections */}
      <div className="absolute inset-0 texture-grid opacity-[0.015] pointer-events-none" />
      {/* Noise */}
      <div className="absolute inset-0 texture-noise opacity-[0.02] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-24 md:py-32 lg:py-40">
        <div className="mb-16 md:mb-20">
          <p className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Our Philosophy
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            The craft of <span className="italic">subtraction</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Text with drop cap */}
          <div>
            <p className="drop-cap font-[family-name:var(--font-source-serif)] text-lg leading-relaxed text-muted-foreground mb-6">
              esign is not about adding more—it is about knowing what to remove. Every element that survives our process has earned its place through purpose, not decoration. We believe the most powerful statement is the one made with the fewest words.
            </p>
            <p className="font-[family-name:var(--font-source-serif)] text-lg leading-relaxed text-muted-foreground mb-6">
              Our studio operates at the intersection of editorial precision and digital craft. We draw from the traditions of fine typography, architectural minimalism, and the relentless pursuit of clarity that defines the best print design.
            </p>
            <p className="font-[family-name:var(--font-source-serif)] text-lg leading-relaxed text-muted-foreground">
              The result is work that commands respect not through volume, but through the confidence of its restraint. Every project is a monograph—considered, composed, and complete.
            </p>
          </div>

          {/* Process steps */}
          <div className="flex flex-col">
            {[
              {
                step: "I",
                title: "Audit & Reduce",
                desc: "We begin by stripping away. Identifying the essential, removing the redundant. The first draft is always subtraction.",
              },
              {
                step: "II",
                title: "Compose & Align",
                desc: "With only the necessary elements remaining, we compose. Typography, space, and line become our instruments.",
              },
              {
                step: "III",
                title: "Refine & Deliver",
                desc: "Every detail examined. Every alignment confirmed. The final work emerges not from what was added, but from what was preserved.",
              },
            ].map((item, i) => (
              <div
                key={item.step}
                className={`py-8 ${
                  i < 2 ? "border-b border-border-light" : ""
                }`}
              >
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="font-[family-name:var(--font-playfair)] text-2xl font-bold italic">
                    {item.step}
                  </span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="font-[family-name:var(--font-source-serif)] text-base leading-relaxed text-muted-foreground pl-12">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   TESTIMONIALS SECTION
   ============================================ */
const testimonials = [
  {
    quote:
      "They didn't just redesign our brand—they revealed it. Every decision felt inevitable, like it could never have been any other way.",
    author: "Elara Voss",
    role: "Creative Director, Maison Noir",
  },
  {
    quote:
      "Working with Atelier is like commissioning a building by Mies van der Rohe. Nothing is arbitrary. Nothing is excess.",
    author: "Henrik Strand",
    role: "Founder, Strand Architecture",
  },
  {
    quote:
      "The restraint in their work is its own form of luxury. Our customers feel the difference before they read a single word.",
    author: "Céline Durocher",
    role: "CEO, Maison Durocher",
  },
];

function Testimonials() {
  return (
    <section className="relative bg-muted">
      {/* Subtle line texture */}
      <div className="absolute inset-0 texture-lines opacity-[0.015] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-24 md:py-32 lg:py-40">
        <div className="mb-16 md:mb-20">
          <p className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Testimonials
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Client <span className="italic">voices</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-0">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.author}
              className={`group p-8 md:p-10 border border-foreground transition-colors duration-100 hover:bg-foreground hover:text-background ${
                i === 0 ? "md:border-r-0" : ""
              } ${i === 1 ? "md:border-r-0" : ""}`}
            >
              {/* Oversized quotation mark */}
              <div className="font-[family-name:var(--font-playfair)] text-6xl md:text-7xl font-bold leading-none mb-6 opacity-10 group-hover:opacity-20 transition-opacity duration-100">
                &ldquo;
              </div>
              <blockquote className="font-[family-name:var(--font-playfair)] text-lg md:text-xl italic leading-relaxed mb-8">
                {testimonial.quote}
              </blockquote>
              <div className="border-t border-foreground/20 group-hover:border-background/20 pt-4 transition-all duration-100 group-hover:border-t-[3px]">
                <div className="font-[family-name:var(--font-source-serif)] font-bold text-sm">
                  {testimonial.author}
                </div>
                <div className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-widest text-muted-foreground group-hover:text-background/50 mt-1">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================
   PRICING SECTION
   ============================================ */
const pricingTiers = [
  {
    name: "Editorial",
    price: "8,000",
    description: "For brands seeking typographic refinement and visual clarity.",
    features: [
      "Brand audit & strategy",
      "Typography system design",
      "Visual identity guidelines",
      "2 revision rounds",
    ],
    elevated: false,
  },
  {
    name: "Atelier",
    price: "24,000",
    description: "The complete studio experience. Every detail considered, every element composed.",
    features: [
      "Full brand identity system",
      "Digital experience design",
      "Art direction & production",
      "Unlimited revisions",
      "Dedicated creative lead",
      "Priority scheduling",
    ],
    elevated: true,
  },
  {
    name: "Monograph",
    price: "Custom",
    description: "For institutions and luxury houses demanding the extraordinary.",
    features: [
      "Immersive brand transformation",
      "Cross-platform design system",
      "Ongoing art direction",
      "Dedicated studio team",
    ],
    elevated: false,
  },
];

function Pricing() {
  return (
    <section className="relative">
      <div className="absolute inset-0 texture-diagonal opacity-[0.01] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-24 md:py-32 lg:py-40">
        <div className="mb-16 md:mb-20">
          <p className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Investment
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Select your <span className="italic">depth</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-0 items-start">
          {pricingTiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`group border border-foreground transition-colors duration-100 hover:bg-foreground hover:text-background ${
                tier.elevated
                  ? "md:-my-8 md:py-16 bg-foreground text-background hover:bg-background hover:text-foreground"
                  : ""
              } ${i === 0 ? "md:border-r-0" : ""} ${
                i === 1 ? "md:border-r-0" : ""
              }`}
            >
              <div className="p-8 md:p-10">
                <div className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-widest text-muted-foreground group-hover:text-muted-foreground/70 mb-4">
                  {tier.name}
                  {tier.elevated && (
                    <span className="ml-2 border border-current px-2 py-0.5">
                      Featured
                    </span>
                  )}
                </div>
                <div className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold tracking-tighter mb-4">
                  ${tier.price}
                </div>
                <p className="font-[family-name:var(--font-source-serif)] text-base leading-relaxed text-muted-foreground group-hover:text-muted-foreground/70 mb-8">
                  {tier.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 font-[family-name:var(--font-source-serif)] text-sm"
                    >
                      <Minus
                        size={14}
                        strokeWidth={2}
                        className="mt-1 shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={tier.elevated ? "outline" : "default"}
                  className={`w-full ${
                    tier.elevated
                      ? "border-background text-background hover:bg-background hover:text-foreground hover:border-foreground"
                      : ""
                  }`}
                >
                  {tier.price === "Custom" ? "Inquire" : "Begin Project"}{" "}
                  <ArrowRight size={14} strokeWidth={1.5} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================
   BLOG / PRESS SECTION
   ============================================ */
const journalEntries = [
  {
    category: "Essay",
    date: "Mar 2025",
    title: "The Tyranny of Choice in Modern Design",
    excerpt:
      "When every tool is available, restraint becomes the most radical decision an artist can make.",
  },
  {
    category: "Interview",
    date: "Feb 2025",
    title: "Conversations: Céline Durocher on Luxury & Simplicity",
    excerpt:
      "The CEO of Maison Durocher discusses why the most powerful brands say the least.",
  },
  {
    category: "Process",
    date: "Jan 2025",
    title: "How We Build Type Systems That Last Decades",
    excerpt:
      "Our approach to typographic architecture—building systems that outlive trends.",
  },
];

function Journal() {
  return (
    <section id="journal" className="relative">
      <div className="absolute inset-0 texture-lines opacity-[0.015] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-24 md:py-32 lg:py-40">
        <div className="mb-16 md:mb-20">
          <p className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Journal
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Recent <span className="italic">writings</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {journalEntries.map((entry, i) => (
            <article key={entry.title} className="group cursor-pointer">
              {/* Image placeholder with border thickening on hover */}
              <div className="border-2 border-foreground transition-all duration-100 group-hover:border-[4px] mb-6 aspect-[4/3] bg-muted overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 grayscale transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0 flex items-center justify-center">
                  <span className="font-[family-name:var(--font-playfair)] text-6xl font-bold text-muted-foreground/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <span className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-widest text-muted-foreground">
                  {entry.category}
                </span>
                <span className="w-4 h-px bg-foreground" />
                <span className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-widest text-muted-foreground">
                  {entry.date}
                </span>
              </div>

              <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold tracking-tight mb-3 group-hover:underline underline-offset-4">
                {entry.title}
              </h3>
              <p className="font-[family-name:var(--font-source-serif)] text-base leading-relaxed text-muted-foreground">
                {entry.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================
   FAQ SECTION
   ============================================ */
const faqs = [
  {
    question: "What makes your approach different from other studios?",
    answer:
      "We don't start by adding—we start by removing. Most design processes accumulate elements; ours subtracts until only the essential remains. This discipline creates work that ages gracefully and communicates with authority.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "An Editorial engagement runs 4–6 weeks. The Atelier process is 8–12 weeks. Monograph projects are scoped individually and may span several months. Rush timelines compromise the very quality we're hired to deliver.",
  },
  {
    question: "Do you work with startups or only established brands?",
    answer:
      "We work with organizations at any stage that share our commitment to craft. A startup with clear vision is more rewarding than a corporation with conflicting priorities.",
  },
  {
    question: "What does your revision process look like?",
    answer:
      "Revisions aren't corrections—they're refinements. Each round brings us closer to the essential form. We present deliberate choices, not infinite options, and we explain the reasoning behind every decision.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-muted">
      <div className="absolute inset-0 texture-grid opacity-[0.015] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-24 md:py-32 lg:py-40">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-16">
          <div>
            <p className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Questions
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold tracking-tight">
              Frequently <span className="italic">asked</span>
            </h2>
          </div>

          <div className="flex flex-col">
            {faqs.map((faq, i) => (
              <div
                key={faq.question}
                className={`border-b border-foreground/20 ${
                  i === 0 ? "border-t" : ""
                }`}
              >
                <button
                  className="w-full flex items-center justify-between py-6 text-left focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-foreground"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  <span className="font-[family-name:var(--font-playfair)] text-lg md:text-xl font-bold tracking-tight pr-4">
                    {faq.question}
                  </span>
                  {openIndex === i ? (
                    <Minus size={20} strokeWidth={1.5} className="shrink-0" />
                  ) : (
                    <Plus size={20} strokeWidth={1.5} className="shrink-0" />
                  )}
                </button>
                {openIndex === i && (
                  <div className="pb-6">
                    <p className="font-[family-name:var(--font-source-serif)] text-base leading-relaxed text-muted-foreground max-w-2xl">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   FINAL CTA SECTION
   ============================================ */
function FinalCTA() {
  return (
    <section id="contact" className="relative bg-foreground text-background overflow-hidden">
      {/* Radial gradient texture for dark CTA */}
      <div className="absolute inset-0 texture-radial-dark opacity-[0.05] pointer-events-none" />
      {/* Vertical lines */}
      <div className="absolute inset-0 texture-vertical-lines-dark opacity-[0.03] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <p className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-widest text-background/50 mb-6">
            Begin a Conversation
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none mb-8">
            Ready to
            <br />
            <span className="italic">subtract</span> the
            <br />
            unnecessary?
          </h2>
          <p className="font-[family-name:var(--font-source-serif)] text-lg md:text-xl leading-relaxed text-background/60 mb-12 max-w-xl">
            Tell us about your vision. We&apos;ll respond within 24 hours with our thoughts on how restraint can serve your brand.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <div className="flex-1 max-w-md">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-transparent border-b-2 border-background/40 text-background placeholder:text-background/30 focus:border-b-4 focus-visible:border-b-4"
              />
            </div>
            <Button
              variant="outline"
              size="lg"
              className="border-background text-background hover:bg-background hover:text-foreground"
            >
              Get in Touch <ArrowRight size={16} strokeWidth={1.5} />
            </Button>
          </div>
        </div>

        {/* Bottom decorative rule */}
        <div className="flex items-center gap-4 mt-8">
          <div className="h-1 flex-1 bg-background/10" />
          <div className="h-4 w-4 border border-background/20" />
          <div className="h-1 w-16 bg-background/10" />
        </div>
      </div>
    </section>
  );
}

/* ============================================
   FOOTER
   ============================================ */
function Footer() {
  return (
    <footer className="relative bg-background border-t-4 border-foreground">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-tight mb-4">
              ATELIER
            </div>
            <p className="font-[family-name:var(--font-source-serif)] text-sm leading-relaxed text-muted-foreground">
              Where restraint becomes
              <br />
              expression.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-widest mb-4">
              Studio
            </h4>
            <ul className="space-y-2">
              {["Work", "Process", "About", "Careers"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-[family-name:var(--font-source-serif)] text-sm text-muted-foreground hover:underline underline-offset-4 transition-none focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-foreground"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-widest mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {["Editorial", "Identity", "Digital", "Direction"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-[family-name:var(--font-source-serif)] text-sm text-muted-foreground hover:underline underline-offset-4 transition-none focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-foreground"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-widest mb-4">
              Contact
            </h4>
            <ul className="space-y-2">
              <li className="font-[family-name:var(--font-source-serif)] text-sm text-muted-foreground">
                studio@atelier.design
              </li>
              <li className="font-[family-name:var(--font-source-serif)] text-sm text-muted-foreground">
                +1 (212) 555-0147
              </li>
              <li className="font-[family-name:var(--font-source-serif)] text-sm text-muted-foreground">
                47 Greene Street
                <br />
                New York, NY 10013
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <Separator className="mb-8" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-widest text-muted-foreground">
            &copy; {new Date().getFullYear()} Atelier Studio. All rights reserved.
          </div>
          <div className="flex gap-6">
            {["Instagram", "Twitter", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-widest text-muted-foreground hover:underline underline-offset-4 transition-none focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-foreground"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ============================================
   MAIN PAGE
   ============================================ */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-[100] focus:bg-foreground focus:text-background focus:px-6 focus:py-3 focus:font-[family-name:var(--font-jetbrains)] focus:text-sm focus:uppercase focus:tracking-widest"
      >
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content" className="flex-1">
        <Hero />
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="h-1 bg-foreground" />
        </div>
        <Features />
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="h-1 bg-foreground" />
        </div>
        <Stats />
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="h-2 bg-foreground" />
        </div>
        <ProductDetail />
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="h-1 bg-foreground" />
        </div>
        <Testimonials />
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="h-2 bg-foreground" />
        </div>
        <Pricing />
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="h-1 bg-foreground" />
        </div>
        <Journal />
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="h-1 bg-foreground" />
        </div>
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
