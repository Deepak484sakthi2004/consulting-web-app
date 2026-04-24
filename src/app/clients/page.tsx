"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import TextReveal, { LineReveal } from "@/components/TextReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import MagneticButton from "@/components/MagneticButton";

const projects = [
  {
    title: "TechFlow Analytics Platform", client: "TechFlow Inc", category: "SaaS Platform",
    description: "Built a real-time analytics dashboard handling 1M+ events/day. Reduced data processing time by 80%.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    metrics: [{ label: "Events/Day", value: "1M+" }, { label: "Faster Processing", value: "80%" }, { label: "Uptime", value: "99.99%" }],
  },
  {
    title: "LaunchPad AI Website", client: "LaunchPad AI", category: "Web Application",
    description: "Designed and developed a cutting-edge marketing site with interactive demos. Increased lead conversion by 340%.",
    tags: ["Next.js", "Framer Motion", "Tailwind", "Vercel"],
    metrics: [{ label: "Lead Increase", value: "340%" }, { label: "Load Time", value: "<1s" }, { label: "Mobile Score", value: "98" }],
  },
  {
    title: "GreenMetrics Dashboard", client: "GreenMetrics", category: "Environmental Tech",
    description: "Created a sustainability tracking platform for enterprises. Helped clients track and reduce carbon footprint.",
    tags: ["TypeScript", "GraphQL", "React", "GCP"],
    metrics: [{ label: "Users", value: "10K+" }, { label: "Data Points", value: "50M+" }, { label: "Client Savings", value: "25%" }],
  },
  {
    title: "ShopNova E-commerce", client: "ShopNova", category: "E-commerce",
    description: "Built a high-performance e-commerce platform with AI-powered recommendations. 2.5x increase in AOV.",
    tags: ["Next.js", "Stripe", "Redis", "Algolia"],
    metrics: [{ label: "AOV Increase", value: "2.5x" }, { label: "Page Speed", value: "95+" }, { label: "Conversion", value: "+180%" }],
  },
  {
    title: "MedConnect Portal", client: "MedConnect Health", category: "Healthcare Tech",
    description: "HIPAA-compliant patient portal with telemedicine integration. Streamlined communication for 50+ clinics.",
    tags: ["React", "Node.js", "MongoDB", "WebRTC"],
    metrics: [{ label: "Clinics", value: "50+" }, { label: "Patients", value: "200K+" }, { label: "Wait Reduction", value: "60%" }],
  },
  {
    title: "FinTrack Pro", client: "FinEdge Capital", category: "Fintech",
    description: "Real-time portfolio tracking and risk analysis platform for institutional investors. Processing $2B+ in AUM.",
    tags: ["TypeScript", "Python", "PostgreSQL", "AWS"],
    metrics: [{ label: "AUM", value: "$2B+" }, { label: "Latency", value: "<50ms" }, { label: "Accuracy", value: "99.9%" }],
  },
];

const testimonials = [
  { quote: "Working with VC Consulting was a game-changer. They didn't just build what we asked for — they challenged our assumptions and delivered something far better.", author: "Sarah Chen", role: "CTO, TechFlow Inc" },
  { quote: "The attention to detail and technical depth is unmatched. Our platform performance improved dramatically.", author: "Marcus Rivera", role: "Founder, LaunchPad AI" },
  { quote: "From concept to 10k users in 3 months. The speed of execution and quality of code gave us the confidence to scale.", author: "Elena Kowalski", role: "CEO, GreenMetrics" },
  { quote: "They transformed our outdated systems into a modern, scalable platform. The ROI was visible within the first quarter.", author: "David Park", role: "VP Engineering, ShopNova" },
];

export default function ClientsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto px-6">
          <LineReveal delay={0.1}>
            <p className="text-xs text-gray-5 uppercase tracking-wider mb-4">Our Work</p>
          </LineReveal>
          <TextReveal
            text="Projects that speak volumes"
            className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.05] max-w-3xl"
            delay={0.2}
          />
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-gray-5 mt-8 max-w-2xl leading-relaxed"
          >
            A showcase of the impactful solutions we&apos;ve built for clients
            across industries.
          </motion.p>
        </div>
      </section>

      {/* Industries */}
      <section className="py-10 border-y border-gray-3">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {["SaaS & Startups", "E-commerce", "Fintech", "Enterprise", "Healthcare", "EdTech"].map((ind, i) => (
              <motion.span
                key={ind}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + i * 0.06, duration: 0.4 }}
                className="text-xs text-gray-5 px-4 py-2 bg-gray-2 rounded-lg border border-gray-3/50 hover:border-gray-4 hover:text-white transition-all duration-300 cursor-default"
              >
                {ind}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="relative py-28 overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto px-6">
          <AnimatedSection className="mb-16" blur>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
              Featured case studies
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-px bg-gray-3 rounded-xl overflow-hidden" staggerDelay={0.08}>
            {projects.map((project) => (
              <StaggerItem key={project.title}>
                <motion.div
                  className="bg-[#0a0a0b] p-8 h-full group cursor-default"
                  whileHover={{ backgroundColor: "rgba(20, 20, 22, 1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs text-gray-5 uppercase tracking-wider">{project.category}</span>
                    <ArrowUpRight className="w-4 h-4 text-gray-4 group-hover:text-gray-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>

                  <h3 className="text-xl font-medium text-white mb-1">{project.title}</h3>
                  <p className="text-xs text-gray-5 mb-4">{project.client}</p>
                  <p className="text-sm text-gray-5 leading-relaxed mb-6">{project.description}</p>

                  <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-gray-3">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <div className="text-lg font-semibold text-white">{metric.value}</div>
                        <div className="text-xs text-gray-5 mt-0.5">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 bg-gray-2 group-hover:bg-gray-3 rounded text-gray-5 transition-colors duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-28 border-t border-gray-3 overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto px-6">
          <AnimatedSection className="mb-16" blur>
            <p className="text-xs text-gray-5 uppercase tracking-wider mb-4">Client Voices</p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
              What they say about us
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-px bg-gray-3 rounded-xl overflow-hidden" staggerDelay={0.1}>
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

      {/* Stats */}
      <section className="py-24 border-t border-gray-3">
        <div className="max-w-[1200px] mx-auto px-6">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50+", label: "Projects completed" },
              { value: "30+", label: "Clients worldwide" },
              { value: "99%", label: "On-time delivery" },
              { value: "4.9", label: "Average rating" },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <AnimatedCounter value={stat.value} className="text-4xl font-semibold text-white tracking-tight" />
                <div className="text-xs text-gray-5 mt-2">{stat.label}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 border-t border-gray-3 overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto px-6 text-center">
          <AnimatedSection blur>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight max-w-2xl mx-auto">
              Your project could be our next success story
            </h2>
            <div className="mt-10">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 h-[48px] px-7 bg-gray-6 text-gray-1 text-sm font-medium rounded-lg hover:bg-white transition-colors duration-300"
                >
                  Start your project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
