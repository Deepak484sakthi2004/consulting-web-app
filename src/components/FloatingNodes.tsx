"use client";

import { motion } from "framer-motion";

// Sidebar tech decorations - mini code/status indicators
export default function FloatingNodes({ side = "right" }: { side?: "left" | "right" }) {
  const isRight = side === "right";

  const items = isRight
    ? [
        { top: "12%", label: "status: live", color: "bg-green-500/20" },
        { top: "30%", label: "build: passing", color: "bg-green-500/20" },
        { top: "50%", label: "latency: 42ms", color: "bg-blue-400/20" },
        { top: "68%", label: "uptime: 99.9%", color: "bg-green-500/20" },
        { top: "85%", label: "deploy: prod", color: "bg-purple-400/20" },
      ]
    : [
        { top: "15%", label: "v2.4.1", color: "bg-gray-4/20" },
        { top: "35%", label: "3 services", color: "bg-blue-400/20" },
        { top: "55%", label: "12 endpoints", color: "bg-gray-4/20" },
        { top: "75%", label: "TLS 1.3", color: "bg-green-500/20" },
        { top: "90%", label: "auto-scale", color: "bg-purple-400/20" },
      ];

  return (
    <div
      className={`absolute top-0 ${isRight ? "right-4" : "left-4"} w-[140px] h-full pointer-events-none overflow-hidden hidden xl:block`}
    >
      {/* Vertical connector line */}
      <motion.div
        className={`absolute ${isRight ? "left-0" : "right-0"} top-0 w-px h-full bg-gradient-to-b from-transparent via-gray-3/40 to-transparent`}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />

      {/* Status items */}
      {items.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute ${isRight ? "left-3" : "right-3"}`}
          style={{ top: item.top }}
          initial={{ opacity: 0, x: isRight ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
        >
          <motion.div
            className="flex items-center gap-1.5"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4, delay: i * 0.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
            <span className="font-mono text-[9px] text-gray-4/40 whitespace-nowrap">
              {item.label}
            </span>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
