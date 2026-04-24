"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import TextReveal, { LineReveal } from "@/components/TextReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import MagneticButton from "@/components/MagneticButton";
import Marquee from "@/components/Marquee";

const services = [
  { title: "Tech Consulting", description: "Strategic technology guidance to align your IT infrastructure with business goals." },
  { title: "Web App Development", description: "Full-stack web applications built with modern frameworks. Scalable and performant." },
  { title: "Cloud Solutions", description: "Cloud architecture, migration, and optimization across AWS, GCP, and Azure." },
  { title: "MVP & Product Launch", description: "Rapid prototyping and MVP development to validate ideas and get to market fast." },
  { title: "System Architecture", description: "Designing scalable, resilient systems that grow with your business needs." },
  { title: "Digital Transformation", description: "End-to-end modernization strategies that unlock new revenue streams." },
];

const stats = [
  { value: "50+", label: "Projects delivered" },
  { value: "30+", label: "Clients served" },
  { value: "8+", label: "Years experience" },
  { value: "99%", label: "Client satisfaction" },
];

const logos = [
  "TechFlow", "LaunchPad AI", "GreenMetrics", "ShopNova", "MedConnect", "FinEdge",
  "AlphaCore", "Nexus", "Prism", "Vortex",
];

const testimonials = [
  { quote: "They transformed our entire digital infrastructure. The results exceeded every expectation.", author: "Sarah Chen", role: "CTO, TechFlow Inc" },
  { quote: "Not just developers — true technology partners who understand business strategy.", author: "Marcus Rivera", role: "Founder, LaunchPad AI" },
  { quote: "Our web app went from concept to 10k users in 3 months. Incredible execution speed.", author: "Elena Kowalski", role: "CEO, GreenMetrics" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto px-6 text-center">
          <LineReveal delay={0.1}>
            <p className="text-sm text-gray-5 mb-8 tracking-wide">
              Tech Consulting & Web Development
            </p>
          </LineReveal>

          <TextReveal
            text="We build the technology your business needs"
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-semibold text-white tracking-tight leading-[1.05] max-w-5xl mx-auto"
            delay={0.3}
          />

          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-lg md:text-xl text-gray-5 mt-10 max-w-2xl mx-auto leading-relaxed"
          >
            Expert consulting and development that transforms your vision into
            powerful digital experiences. From strategy to launch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-wrap justify-center gap-3 mt-12"
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
                href="/services"
                className="h-[48px] px-7 bg-gray-2 text-gray-6 text-sm font-medium rounded-lg flex items-center hover:bg-gray-3 transition-colors duration-300 border border-gray-3"
              >
                View services
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* Marquee logos */}
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

      {/* Stats */}
      <section className="relative py-28">
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

      {/* Services */}
      <section className="relative py-28 border-t border-gray-3 overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto px-6">
          <AnimatedSection className="mb-16" blur>
            <p className="text-xs text-gray-5 uppercase tracking-wider mb-4">Services</p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight max-w-xl">
              Everything you need to build and scale
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-3 rounded-xl overflow-hidden" staggerDelay={0.06}>
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <motion.div
                  whileHover={{ backgroundColor: "rgba(30, 30, 34, 1)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#0a0a0b] p-8 h-full cursor-default group"
                >
                  <h3 className="text-lg font-medium text-white mb-3 flex items-center justify-between">
                    {service.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 text-gray-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </h3>
                  <p className="text-sm text-gray-5 leading-relaxed">{service.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection className="mt-12 text-center" delay={0.3}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-gray-5 hover:text-white transition-colors duration-300 group"
            >
              View all services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-28 border-t border-gray-3 overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto px-6">
          <AnimatedSection className="mb-16" blur>
            <p className="text-xs text-gray-5 uppercase tracking-wider mb-4">Process</p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight max-w-xl">
              From idea to impact
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-4 gap-12" staggerDelay={0.12}>
            {[
              { step: "01", title: "Discover", desc: "Deep dive into your business, goals, and technical landscape." },
              { step: "02", title: "Design", desc: "Architect solutions that are scalable, secure, and user-centric." },
              { step: "03", title: "Develop", desc: "Build with modern tech stacks and agile methodology." },
              { step: "04", title: "Deploy", desc: "Launch, monitor, and continuously optimize for success." },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
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

      {/* Testimonials */}
      <section className="relative py-28 border-t border-gray-3 overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto px-6">
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

      {/* CTA */}
      <section className="relative py-32 border-t border-gray-3 overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto px-6 text-center">
          <AnimatedSection blur>
            <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight max-w-3xl mx-auto leading-[1.1]">
              Ready to build something great?
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-gray-5 mt-6 text-lg max-w-xl mx-auto"
            >
              Let&apos;s discuss your project and explore how we can help you
              achieve your technology goals.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-10"
            >
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 h-[48px] px-7 bg-gray-6 text-gray-1 text-sm font-medium rounded-lg hover:bg-white transition-colors duration-300"
                >
                  Get in touch
                  <ArrowRight className="w-4 h-4" />
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
              <span>No commitment</span>
              <span className="text-gray-4">&middot;</span>
              <span>Response within 24h</span>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
