"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import TextReveal, { LineReveal } from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";

const mainServices = [
  {
    title: "Tech Consulting",
    description: "Strategic technology advisory that aligns your IT investments with business objectives. We analyze your current systems, identify opportunities, and create actionable roadmaps.",
    features: ["Technology stack assessment", "Architecture review & optimization", "Build vs. buy analysis", "Tech due diligence", "CTO-as-a-Service"],
  },
  {
    title: "Web App Development",
    description: "Custom web applications built with cutting-edge technologies. We create performant, scalable, and beautiful applications that users love.",
    features: ["Single Page Applications (SPA)", "Progressive Web Apps (PWA)", "E-commerce platforms", "SaaS applications", "Admin dashboards & portals"],
  },
  {
    title: "Cloud Solutions",
    description: "End-to-end cloud services from migration to optimization. We help you leverage AWS, GCP, or Azure to reduce costs and improve performance.",
    features: ["Cloud migration strategy", "Infrastructure as Code (IaC)", "Auto-scaling architecture", "Cost optimization", "Multi-cloud strategy"],
  },
  {
    title: "MVP & Product Launch",
    description: "Rapid prototyping and MVP development to validate your ideas fast. Get to market quickly with a product that's built to scale.",
    features: ["Rapid prototyping", "User validation", "Iterative development", "Launch strategy", "Post-launch optimization"],
  },
];

const techStack = [
  { category: "Frontend", techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", techs: ["Node.js", "Express", "NestJS", "Python"] },
  { category: "Database", techs: ["PostgreSQL", "MongoDB", "Redis", "Prisma"] },
  { category: "Cloud", techs: ["AWS", "GCP", "Vercel", "Docker"] },
  { category: "Tools", techs: ["Git", "CI/CD", "Terraform", "Monitoring"] },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto px-6">
          <LineReveal delay={0.1}>
            <p className="text-xs text-gray-5 uppercase tracking-wider mb-4">Services</p>
          </LineReveal>
          <TextReveal
            text="Solutions that scale with you"
            className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.05] max-w-3xl"
            delay={0.2}
          />
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-gray-5 mt-8 max-w-2xl leading-relaxed"
          >
            From strategic consulting to hands-on development, a comprehensive
            suite of technology services designed to accelerate your business growth.
          </motion.p>
        </div>
      </section>

      {/* Main Services */}
      <section className="relative py-24 border-t border-gray-3 overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto px-6">
          {mainServices.map((service, i) => (
            <AnimatedSection key={service.title} blur>
              <div className={`grid md:grid-cols-2 gap-16 py-20 ${i > 0 ? "border-t border-gray-3" : ""}`}>
                <div>
                  <motion.span
                    className="text-xs text-gray-4 font-mono"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    0{i + 1}
                  </motion.span>
                  <motion.div
                    className="w-12 h-px bg-gray-4 mt-4 mb-5 origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                  <h2 className="text-2xl md:text-4xl font-semibold text-white tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-gray-5 leading-relaxed mt-4 text-[15px]">
                    {service.description}
                  </p>
                </div>
                <StaggerContainer className="space-y-3 pt-2" staggerDelay={0.06}>
                  {service.features.map((feature) => (
                    <StaggerItem key={feature}>
                      <div className="flex items-center gap-3 py-2">
                        <Check className="w-4 h-4 text-gray-5 shrink-0" />
                        <span className="text-sm text-gray-6">{feature}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative py-28 border-t border-gray-3 overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto px-6">
          <AnimatedSection className="mb-16" blur>
            <p className="text-xs text-gray-5 uppercase tracking-wider mb-4">Technology</p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
              Our tech stack
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-5 gap-px bg-gray-3 rounded-xl overflow-hidden" staggerDelay={0.08}>
            {techStack.map((cat) => (
              <StaggerItem key={cat.category}>
                <div className="bg-[#0a0a0b] p-6 h-full">
                  <p className="text-xs text-gray-5 uppercase tracking-wider mb-4">{cat.category}</p>
                  <div className="space-y-2">
                    {cat.techs.map((tech) => (
                      <motion.div
                        key={tech}
                        whileHover={{ x: 4, backgroundColor: "rgba(30, 30, 34, 1)" }}
                        transition={{ duration: 0.2 }}
                        className="text-sm text-gray-6 py-2 px-3 bg-gray-2 rounded-md cursor-default"
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="relative py-28 border-t border-gray-3 overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto px-6">
          <AnimatedSection className="text-center mb-16" blur>
            <p className="text-xs text-gray-5 uppercase tracking-wider mb-4">Pricing</p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
              Flexible engagement models
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-px bg-gray-3 rounded-xl overflow-hidden" staggerDelay={0.1}>
            {[
              { title: "Hourly", tag: "Flexible", desc: "Perfect for consulting sessions, code reviews, and advisory work." },
              { title: "Fixed Price", tag: "Predictable", desc: "Best for well-defined projects with clear scope and deliverables." },
              { title: "Retainer", tag: "Long-term", desc: "Ongoing support and development with dedicated monthly hours." },
            ].map((model) => (
              <StaggerItem key={model.title}>
                <motion.div
                  className="bg-[#0a0a0b] p-8 h-full"
                  whileHover={{ backgroundColor: "rgba(20, 20, 22, 1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-xs text-gray-5 uppercase tracking-wider">{model.tag}</span>
                  <h3 className="text-xl font-medium text-white mt-3 mb-3">{model.title}</h3>
                  <p className="text-sm text-gray-5 leading-relaxed">{model.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 border-t border-gray-3 overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto px-6 text-center">
          <AnimatedSection blur>
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
              Have a project in mind?
            </h2>
            <div className="mt-10">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 h-[48px] px-7 bg-gray-6 text-gray-1 text-sm font-medium rounded-lg hover:bg-white transition-colors duration-300"
                >
                  Let&apos;s discuss
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
