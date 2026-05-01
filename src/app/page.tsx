"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Check,
  Database, Globe, Code2, BarChart3,
  Zap, Shield, Users, Layers, TrendingUp, Cpu,
} from "lucide-react";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import TextReveal, { LineReveal } from "@/components/TextReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import MagneticButton from "@/components/MagneticButton";
import Marquee from "@/components/Marquee";

const capabilityTags = [
  "CRM Systems", "Web Apps", "Landing Pages", "E-Commerce",
  "Automation", "Cloud Infrastructure", "API Integrations", "Digital Strategy",
];

const mainServices = [
  {
    icon: Database,
    tag: "CRM & Business Systems",
    title: "Own your customer relationships",
    description:
      "Custom CRM solutions built around your sales process. Track leads, automate follow-ups, and close more deals with a system designed specifically for how your team works.",
    features: [
      "Lead pipeline & contact management",
      "Automated email & follow-up workflows",
      "Real-time analytics dashboard",
      "Team collaboration & role-based access",
    ],
    metric: "3×",
    metricLabel: "average increase in lead conversion rate",
  },
  {
    icon: Globe,
    tag: "Websites & Landing Pages",
    title: "Make your first impression unforgettable",
    description:
      "High-performance websites that rank on Google, load in under 2 seconds, and convert visitors into customers — from single landing pages to complex corporate portals.",
    features: [
      "SEO-optimised architecture from day one",
      "Mobile-first responsive design",
      "Sub-2s page load performance",
      "CMS integration for easy content updates",
    ],
    metric: "10×",
    metricLabel: "faster delivery than a traditional agency",
  },
  {
    icon: Code2,
    tag: "Web Applications",
    title: "Software that works the way you do",
    description:
      "Full-stack web apps, dashboards, SaaS platforms, and internal tools. We architect for scale from day one so your software grows seamlessly with your business.",
    features: [
      "Scalable cloud-native architecture",
      "Real-time data & live dashboards",
      "Third-party API & payment integrations",
      "Ongoing support, monitoring & maintenance",
    ],
    metric: "50+",
    metricLabel: "web applications shipped to production",
  },
];

const capabilities = [
  { icon: BarChart3, title: "Tech Consulting", description: "Strategic technology roadmaps aligned tightly with your business goals." },
  { icon: Cpu, title: "Cloud Solutions", description: "Architecture, migration, and optimisation on AWS, GCP, and Azure." },
  { icon: Zap, title: "Automation & Workflows", description: "Eliminate manual work with intelligent, connected process automation." },
  { icon: Layers, title: "MVP & Rapid Launch", description: "Prototype to production in weeks. Validate fast, iterate faster." },
  { icon: TrendingUp, title: "Digital Transformation", description: "End-to-end modernisation that unlocks new revenue streams." },
  { icon: Users, title: "Dedicated Support", description: "Long-term partnership — your team stays with you after launch." },
];

const stats = [
  { value: "50+", label: "Projects delivered" },
  { value: "30+", label: "Clients served" },
  { value: "8+", label: "Years experience" },
  { value: "99%", label: "Client satisfaction" },
];

const logos = [
  "TechFlow", "LaunchPad AI", "GreenMetrics", "ShopNova",
  "MedConnect", "FinEdge", "AlphaCore", "Nexus", "Prism", "Vortex",
];

const testimonials = [
  {
    quote: "They transformed our entire digital infrastructure. The CRM alone saved our team 20+ hours a week.",
    author: "Sarah Chen",
    role: "CTO, TechFlow Inc",
  },
  {
    quote: "Not just developers — true technology partners who deeply understand business strategy.",
    author: "Marcus Rivera",
    role: "Founder, LaunchPad AI",
  },
  {
    quote: "Our web app went from concept to 10,000 users in 3 months. Incredible execution speed.",
    author: "Elena Kowalski",
    role: "CEO, GreenMetrics",
  },
];

export default function Home() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-28 overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto px-6 text-center">

          {/* Live status pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-2 border border-gray-3 text-xs text-gray-5 mb-10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Now accepting new projects · Free consultation available
          </motion.div>

          <TextReveal
            text="We build digital solutions that drive real growth"
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-semibold text-white tracking-tight leading-[1.05] max-w-5xl mx-auto"
            delay={0.3}
          />

          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-lg md:text-xl text-gray-5 mt-10 max-w-2xl mx-auto leading-relaxed"
          >
            From custom CRM systems to high-performance web applications — VC Consulting delivers
            technology that scales with your ambitions.
          </motion.p>

          {/* Capability tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap justify-center gap-2 mt-8"
          >
            {capabilityTags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: 1.1 + i * 0.05 }}
                className="px-3 py-1 rounded-full text-xs text-gray-5 bg-gray-2 border border-gray-3/60"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* CTAs — three tiers like portkey.ai */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.55, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-wrap justify-center items-center gap-3 mt-10"
          >
            <MagneticButton>
              <Link
                href="/contact"
                className="h-[48px] px-7 bg-gray-6 text-gray-1 text-sm font-medium rounded-lg flex items-center gap-2 hover:bg-white transition-colors duration-300"
              >
                Start a project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                href="/clients"
                className="h-[48px] px-7 bg-gray-2 text-gray-6 text-sm font-medium rounded-lg flex items-center hover:bg-gray-3 transition-colors duration-300 border border-gray-3"
              >
                See our work
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                href="/contact"
                className="h-[48px] px-5 text-gray-5 text-sm font-medium flex items-center gap-1.5 hover:text-gray-6 transition-colors duration-300"
              >
                Book a free call
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* ─── Logos ────────────────────────────────────────────────── */}
      <section className="py-14 border-y border-gray-3 overflow-hidden">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs text-gray-4 uppercase tracking-wider text-center mb-8"
        >
          Trusted by forward-thinking companies
        </motion.p>
        <Marquee speed={25}>
          {logos.map((logo) => (
            <div
              key={logo}
              className="h-[44px] px-8 bg-gray-2 rounded-lg flex items-center justify-center text-sm text-gray-5 font-medium shrink-0 border border-gray-3/50"
            >
              {logo}
            </div>
          ))}
        </Marquee>
      </section>

      {/* ─── What we build (3 large feature cards) ───────────────── */}
      <section className="relative py-28 border-b border-gray-3">
        <div className="max-w-[1200px] mx-auto px-6">
          <AnimatedSection className="mb-16" blur>
            <p className="text-xs text-gray-5 uppercase tracking-wider mb-4">What we build</p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight max-w-2xl">
              Three core products. Infinite possibilities.
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {mainServices.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1} blur>
                <motion.div
                  whileHover={{ backgroundColor: "rgba(20, 20, 22, 0.9)" }}
                  transition={{ duration: 0.3 }}
                  className="rounded-xl border border-gray-3 bg-gray-2/20 p-8 md:p-10 group cursor-default"
                >
                  <div className="grid md:grid-cols-2 gap-10 items-start">
                    {/* Left — copy */}
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-9 h-9 rounded-lg bg-gray-3 flex items-center justify-center group-hover:bg-gray-4 transition-colors duration-300">
                          <service.icon className="w-4 h-4 text-gray-6" />
                        </div>
                        <span className="text-xs text-gray-5 uppercase tracking-wider">{service.tag}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-gray-5 leading-relaxed mb-8 text-[15px]">
                        {service.description}
                      </p>
                      <Link
                        href="/services"
                        className="inline-flex items-center gap-1.5 text-sm text-gray-6 hover:text-white transition-colors duration-200 group/lnk"
                      >
                        Learn more
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/lnk:translate-x-0.5 group-hover/lnk:-translate-y-0.5 transition-transform duration-200" />
                      </Link>
                    </div>

                    {/* Right — features + metric */}
                    <div>
                      <div className="space-y-3">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3">
                            <div className="w-4 h-4 rounded-full bg-gray-3 flex items-center justify-center flex-shrink-0">
                              <Check className="w-2.5 h-2.5 text-gray-6" />
                            </div>
                            <span className="text-sm text-gray-5">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-8 pt-6 border-t border-gray-3">
                        <span className="text-4xl font-semibold text-white tracking-tight">{service.metric}</span>
                        <span className="text-sm text-gray-5 ml-3">{service.metricLabel}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Stats ────────────────────────────────────────────────── */}
      <section className="relative py-20 border-b border-gray-3">
        <div className="max-w-[1200px] mx-auto px-6">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StaggerItem key={stat.label} className="text-center">
                <AnimatedCounter
                  value={stat.value}
                  className="text-5xl md:text-6xl font-semibold text-white tracking-tight"
                />
                <div className="text-sm text-gray-5 mt-3">{stat.label}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── Full capabilities grid ───────────────────────────────── */}
      <section className="relative py-28 border-b border-gray-3">
        <div className="max-w-[1200px] mx-auto px-6">
          <AnimatedSection className="mb-16" blur>
            <p className="text-xs text-gray-5 uppercase tracking-wider mb-4">Full capabilities</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight max-w-xl">
                Everything you need to scale digitally
              </h2>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm text-gray-5 hover:text-white transition-colors duration-200 group flex-shrink-0"
              >
                View all services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-3 rounded-xl overflow-hidden" staggerDelay={0.06}>
            {capabilities.map((cap) => (
              <StaggerItem key={cap.title}>
                <motion.div
                  whileHover={{ backgroundColor: "rgba(30, 30, 34, 1)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#0a0a0b] p-8 h-full cursor-default group"
                >
                  <div className="w-9 h-9 rounded-lg bg-gray-3 flex items-center justify-center mb-5 group-hover:bg-gray-4 transition-colors duration-300">
                    <cap.icon className="w-4 h-4 text-gray-6" />
                  </div>
                  <h3 className="text-base font-medium text-white mb-2.5 flex items-center justify-between">
                    {cap.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 text-gray-5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </h3>
                  <p className="text-sm text-gray-5 leading-relaxed">{cap.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── Why VC Consulting (two-column) ──────────────────────── */}
      <section className="relative py-28 border-b border-gray-3">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Left — big copy */}
            <AnimatedSection blur>
              <p className="text-xs text-gray-5 uppercase tracking-wider mb-4">Why VC Consulting</p>
              <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                We don&apos;t just build &mdash; we partner for growth
              </h2>
              <p className="text-gray-5 leading-relaxed mb-8 text-[15px]">
                Most agencies disappear after launch. We stay in the trenches with you — iterating,
                optimising, and scaling your digital systems as your business evolves.
              </p>
              <MagneticButton>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 h-[44px] px-6 bg-gray-2 border border-gray-3 text-gray-6 text-sm font-medium rounded-lg hover:bg-gray-3 transition-colors duration-200"
                >
                  About us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </MagneticButton>
            </AnimatedSection>

            {/* Right — feature list */}
            <AnimatedSection delay={0.2}>
              <StaggerContainer className="space-y-3" staggerDelay={0.08}>
                {[
                  { icon: Shield, title: "Business-first thinking", desc: "Every technical decision ties back to measurable business outcomes." },
                  { icon: Zap, title: "Fast, iterative delivery", desc: "Ship in weeks, not months. Learn fast, adapt faster." },
                  { icon: Users, title: "Dedicated team model", desc: "One focused team, fully committed to your project's success." },
                  { icon: BarChart3, title: "Data-driven by default", desc: "Analytics, tracking, and metrics baked in from day one." },
                ].map((item) => (
                  <StaggerItem key={item.title}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-start gap-4 p-5 rounded-xl border border-gray-3 bg-gray-2/20 cursor-default group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gray-3 flex items-center justify-center flex-shrink-0 group-hover:bg-gray-4 transition-colors duration-200">
                        <item.icon className="w-3.5 h-3.5 text-gray-6" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white mb-0.5">{item.title}</p>
                        <p className="text-xs text-gray-5 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Process ──────────────────────────────────────────────── */}
      <section className="relative py-28 border-b border-gray-3">
        <div className="max-w-[1200px] mx-auto px-6">
          <AnimatedSection className="mb-16" blur>
            <p className="text-xs text-gray-5 uppercase tracking-wider mb-4">Process</p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight max-w-xl">
              From idea to impact in four steps
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-4 gap-12" staggerDelay={0.12}>
            {[
              { step: "01", title: "Discover", desc: "Deep dive into your business, goals, and technical landscape." },
              { step: "02", title: "Design", desc: "Architect solutions that are scalable, secure, and user-centric." },
              { step: "03", title: "Develop", desc: "Build with modern tech stacks and agile methodology." },
              { step: "04", title: "Deploy", desc: "Launch, monitor, and continuously optimise for success." },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3, ease: "easeOut" }}>
                  <span className="text-xs text-gray-4 font-mono">{item.step}</span>
                  <motion.div
                    className="w-full h-px bg-gray-3 mt-4 mb-5 origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                  />
                  <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-5 leading-relaxed">{item.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── Testimonials ─────────────────────────────────────────── */}
      <section className="relative py-28 border-b border-gray-3">
        <div className="max-w-[1200px] mx-auto px-6">
          <AnimatedSection className="mb-16" blur>
            <p className="text-xs text-gray-5 uppercase tracking-wider mb-4">Testimonials</p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
              What our clients say
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-px bg-gray-3 rounded-xl overflow-hidden" staggerDelay={0.1}>
            {testimonials.map((t) => (
              <StaggerItem key={t.author}>
                <motion.div
                  className="bg-[#0a0a0b] p-8 h-full flex flex-col"
                  whileHover={{ backgroundColor: "rgba(20, 20, 22, 1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-8 h-px bg-gray-4 mb-6"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  />
                  <p className="text-gray-6 leading-relaxed flex-1 mb-8 text-[15px]">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p className="text-sm font-medium text-white">{t.author}</p>
                    <p className="text-xs text-gray-5 mt-0.5">{t.role}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section className="relative py-32 border-t border-gray-3">
        <div className="relative max-w-[1200px] mx-auto px-6 text-center">
          <AnimatedSection blur>
            <LineReveal delay={0.1}>
              <p className="text-xs text-gray-5 uppercase tracking-wider mb-6">Get started today</p>
            </LineReveal>
            <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight max-w-3xl mx-auto leading-[1.1]">
              Ready to transform your business digitally?
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-gray-5 mt-6 text-lg max-w-xl mx-auto"
            >
              Let&apos;s discuss your project and explore exactly how we can help you build, scale, and compete.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-3 mt-10"
            >
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 h-[48px] px-7 bg-gray-6 text-gray-1 text-sm font-medium rounded-lg hover:bg-white transition-colors duration-300"
                >
                  Start a project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 h-[48px] px-7 bg-gray-2 border border-gray-3 text-gray-6 text-sm font-medium rounded-lg hover:bg-gray-3 transition-colors duration-300"
                >
                  Book a free call
                </Link>
              </MagneticButton>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-6 mt-8 text-xs text-gray-5"
            >
              <span>Free consultation</span>
              <span className="text-gray-4">&middot;</span>
              <span>No commitment required</span>
              <span className="text-gray-4">&middot;</span>
              <span>Response within 24h</span>
              <span className="text-gray-4">&middot;</span>
              <span>Fixed-price projects available</span>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
