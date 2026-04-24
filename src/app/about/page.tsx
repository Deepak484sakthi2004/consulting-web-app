"use client";

import { motion } from "framer-motion";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import TextReveal, { LineReveal } from "@/components/TextReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

const skills = [
  { name: "React / Next.js", level: 97 },
  { name: "Node.js / Express", level: 95 },
  { name: "TypeScript", level: 96 },
  { name: "Cloud Architecture", level: 92 },
  { name: "System Design", level: 94 },
  { name: "Database Design", level: 90 },
  { name: "DevOps / CI/CD", level: 88 },
  { name: "UI/UX Strategy", level: 85 },
];

const timeline = [
  { year: "2016", title: "The Beginning", desc: "Started as a freelance developer, building websites and applications for local businesses." },
  { year: "2018", title: "Going Full-Stack", desc: "Expanded into full-stack development, mastering cloud architecture and scalable systems." },
  { year: "2020", title: "Consulting Launch", desc: "Founded VC Consulting to offer end-to-end tech consulting and development services." },
  { year: "2022", title: "Scaling Impact", desc: "Grew to serve 30+ clients across multiple industries, from startups to enterprise." },
  { year: "2024", title: "Innovation Forward", desc: "Pioneering AI-integrated solutions and next-gen web experiences for forward-thinking businesses." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">

        <div className="relative max-w-[1200px] mx-auto px-6">
          <LineReveal delay={0.1}>
            <p className="text-xs text-gray-5 uppercase tracking-wider mb-4">About</p>
          </LineReveal>
          <TextReveal
            text="The mind behind the code"
            className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.05] max-w-3xl"
            delay={0.2}
          />
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-gray-5 mt-8 max-w-2xl leading-relaxed"
          >
            A technology consultant and full-stack developer with 8+ years
            of experience building digital solutions that drive real business growth.
          </motion.p>
        </div>
      </section>

      {/* Who / What / Why */}
      <section className="relative py-24 border-t border-gray-3 overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto px-6">
          <StaggerContainer className="grid md:grid-cols-3 gap-px bg-gray-3 rounded-xl overflow-hidden" staggerDelay={0.1}>
            {[
              { label: "Who I am", text: "A passionate technologist who believes in the power of great software to transform businesses. I don't just write code — I architect solutions that solve real problems." },
              { label: "What I do", text: "I help businesses navigate the complex world of technology. Whether it's building a web app from scratch, optimizing cloud infrastructure, or creating a digital transformation roadmap." },
              { label: "Why me", text: "I combine technical depth with business acumen. Every line of code has purpose. Every architecture decision considers scale. Every project gets full dedication." },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <motion.div
                  className="bg-[#0a0a0b] p-8 h-full"
                  whileHover={{ backgroundColor: "rgba(20, 20, 22, 1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-xs text-gray-5 uppercase tracking-wider mb-4">{item.label}</p>
                  <p className="text-gray-6 leading-relaxed">{item.text}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Skills */}
      <section className="relative py-28 border-t border-gray-3 overflow-hidden">

        <div className="relative max-w-[1200px] mx-auto px-6">
          <AnimatedSection className="mb-16" blur>
            <p className="text-xs text-gray-5 uppercase tracking-wider mb-4">Expertise</p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
              Technical skills
            </h2>
          </AnimatedSection>

          <div className="max-w-2xl space-y-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-6">{skill.name}</span>
                  <span className="text-xs text-gray-5 font-mono">{skill.level}%</span>
                </div>
                <div className="h-1 bg-gray-3 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 + i * 0.08 }}
                    className="h-full bg-gray-6 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-28 border-t border-gray-3 overflow-hidden">

        <div className="relative max-w-[1200px] mx-auto px-6">
          <AnimatedSection className="mb-16" blur>
            <p className="text-xs text-gray-5 uppercase tracking-wider mb-4">Values</p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
              What I stand for
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-4 gap-12" staggerDelay={0.1}>
            {[
              { title: "Results-driven", desc: "Every decision is guided by measurable outcomes and real business impact." },
              { title: "Client-first", desc: "Your success is our success. We build partnerships, not just software." },
              { title: "Innovation", desc: "We stay ahead of the curve, bringing the latest technologies to your advantage." },
              { title: "Transparency", desc: "Clear communication, honest timelines, and no surprises along the way." },
            ].map((val) => (
              <StaggerItem key={val.title}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                  <motion.div
                    className="w-full h-px bg-gray-3 mb-5 origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  />
                  <h3 className="text-base font-medium text-white mb-2">{val.title}</h3>
                  <p className="text-sm text-gray-5 leading-relaxed">{val.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-28 border-t border-gray-3 overflow-hidden">

        <div className="relative max-w-[1200px] mx-auto px-6">
          <AnimatedSection className="mb-16" blur>
            <p className="text-xs text-gray-5 uppercase tracking-wider mb-4">Journey</p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
              My story
            </h2>
          </AnimatedSection>

          <div className="max-w-2xl space-y-0">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-8 group"
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    className="w-10 h-10 rounded-full bg-gray-2 border border-gray-3 flex items-center justify-center text-xs text-gray-5 font-mono shrink-0"
                    whileHover={{ borderColor: "rgba(154, 154, 168, 0.5)", scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.year.slice(2)}
                  </motion.div>
                  {i < timeline.length - 1 && (
                    <motion.div
                      className="w-px flex-1 bg-gray-3 my-2 origin-top"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                    />
                  )}
                </div>
                <div className="pb-10">
                  <h3 className="text-base font-medium text-white">{item.title}</h3>
                  <p className="text-sm text-gray-5 leading-relaxed mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="relative py-24 border-t border-gray-3 overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto px-6">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "1000+", label: "Commits this year" },
              { value: "15+", label: "Technologies" },
              { value: "10+", label: "Countries served" },
              { value: "24", label: "h avg response" },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <AnimatedCounter value={item.value} className="text-4xl font-semibold text-white tracking-tight" />
                <div className="text-xs text-gray-5 mt-2">{item.label}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
