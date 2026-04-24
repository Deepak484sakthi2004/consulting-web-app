"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Send } from "lucide-react";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import TextReveal, { LineReveal } from "@/components/TextReveal";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full h-[44px] px-4 bg-gray-2 border border-gray-3 rounded-lg text-sm text-white placeholder:text-gray-4 focus:outline-none focus:border-gray-5 transition-all duration-300";

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto px-6">
          <LineReveal delay={0.1}>
            <p className="text-xs text-gray-5 uppercase tracking-wider mb-4">Contact</p>
          </LineReveal>
          <TextReveal
            text="Let's build something great"
            className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.05] max-w-3xl"
            delay={0.2}
          />
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-gray-5 mt-8 max-w-2xl leading-relaxed"
          >
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="relative pb-28 overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection blur>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-2 rounded-xl p-12 text-center border border-gray-3"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                      className="w-16 h-16 rounded-full bg-gray-3 flex items-center justify-center mx-auto mb-6"
                    >
                      <Check className="w-8 h-8 text-gray-6" />
                    </motion.div>
                    <h3 className="text-2xl font-semibold text-white mb-3">Message sent</h3>
                    <p className="text-gray-5 max-w-md mx-auto">
                      Thank you for reaching out. We&apos;ll review your message and
                      get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 h-[38px] px-5 bg-gray-3 text-sm text-gray-6 rounded-lg hover:bg-gray-4 transition-colors duration-300"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <div className="grid md:grid-cols-2 gap-5">
                      {[
                        { label: "Full Name", type: "text", placeholder: "John Doe", required: true },
                        { label: "Email", type: "email", placeholder: "john@company.com", required: true },
                      ].map((field, i) => (
                        <motion.div
                          key={field.label}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
                        >
                          <label className="block text-xs text-gray-5 uppercase tracking-wider mb-2">{field.label}</label>
                          <input type={field.type} required={field.required} placeholder={field.placeholder} className={inputClass} />
                        </motion.div>
                      ))}
                    </div>

                    {[
                      { label: "Company", element: <input type="text" placeholder="Your Company (optional)" className={inputClass} /> },
                      {
                        label: "Service", element: (
                          <select required className={`${inputClass} appearance-none`}>
                            <option value="">Select a service</option>
                            <option value="consulting">Tech Consulting</option>
                            <option value="webapp">Web App Development</option>
                            <option value="cloud">Cloud Solutions</option>
                            <option value="mvp">MVP & Product Launch</option>
                            <option value="other">Other</option>
                          </select>
                        ),
                      },
                      {
                        label: "Budget", element: (
                          <select className={`${inputClass} appearance-none`}>
                            <option value="">Select budget (optional)</option>
                            <option value="5k-10k">$5K - $10K</option>
                            <option value="10k-25k">$10K - $25K</option>
                            <option value="25k-50k">$25K - $50K</option>
                            <option value="50k+">$50K+</option>
                          </select>
                        ),
                      },
                      {
                        label: "Project Details", element: (
                          <textarea
                            required
                            rows={5}
                            placeholder="Tell us about your project, goals, and timeline..."
                            className="w-full px-4 py-3 bg-gray-2 border border-gray-3 rounded-lg text-sm text-white placeholder:text-gray-4 focus:outline-none focus:border-gray-5 transition-all duration-300 resize-none"
                          />
                        ),
                      },
                    ].map((field, i) => (
                      <motion.div
                        key={field.label}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.76 + i * 0.08, duration: 0.5 }}
                      >
                        <label className="block text-xs text-gray-5 uppercase tracking-wider mb-2">{field.label}</label>
                        {field.element}
                      </motion.div>
                    ))}

                    <motion.button
                      type="submit"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1, duration: 0.5 }}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full h-[48px] bg-gray-6 text-gray-1 text-sm font-medium rounded-lg hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      Send message
                      <Send className="w-4 h-4" />
                    </motion.button>
                  </motion.form>
                )}
              </AnimatedSection>
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-2">
              <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                {[
                  { label: "Email", value: "hello@vcconsulting.dev" },
                  { label: "Phone", value: "+1 (555) 123-4567" },
                  { label: "Location", value: "Remote First \u00b7 Worldwide" },
                  { label: "Response Time", value: "Within 24 hours" },
                ].map((item) => (
                  <StaggerItem key={item.label}>
                    <motion.div
                      className="bg-gray-2 border border-gray-3 rounded-xl p-6"
                      whileHover={{ borderColor: "rgba(42, 42, 48, 1)", x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-xs text-gray-5 uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="text-sm text-white">{item.value}</p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <AnimatedSection delay={0.6} className="mt-8">
                <div className="space-y-3">
                  {[
                    "Free initial consultation",
                    "No obligation or commitment",
                    "NDA available upon request",
                    "Flexible engagement models",
                  ].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + i * 0.08, duration: 0.4 }}
                      className="flex items-center gap-3"
                    >
                      <Check className="w-3.5 h-3.5 text-gray-5 shrink-0" />
                      <span className="text-sm text-gray-5">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-28 border-t border-gray-3 overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-6">
          <AnimatedSection className="mb-16" blur>
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
              Frequently asked questions
            </h2>
          </AnimatedSection>

          {[
            { q: "What is your typical project timeline?", a: "Timelines vary by scope. MVPs typically take 4-8 weeks, while larger platforms may take 3-6 months. We provide detailed timelines during our initial consultation." },
            { q: "Do you work with startups or only enterprises?", a: "We work with both. From early-stage startups building their first MVP to enterprise companies modernizing their tech stack." },
            { q: "What happens after the project is delivered?", a: "We offer ongoing support and maintenance retainers. We also provide documentation and knowledge transfer to ensure your team can manage the solution independently." },
            { q: "Can you work with our existing development team?", a: "Absolutely. We frequently embed with existing teams as a technical lead, architect, or additional development resource." },
          ].map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <motion.div
                className={`py-7 ${i > 0 ? "border-t border-gray-3" : ""}`}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-base font-medium text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-5 leading-relaxed">{faq.a}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
