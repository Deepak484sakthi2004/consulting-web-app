"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

// Network topology - connected nodes representing systems/architecture
interface Props {
  count?: number;
  className?: string;
}

export default function ParticleField({ count = 12, className = "" }: Props) {
  const nodes = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: 10 + Math.random() * 80,
        y: 10 + Math.random() * 80,
        size: 2 + Math.random() * 3,
        duration: 12 + Math.random() * 15,
        delay: Math.random() * 4,
      })),
    [count]
  );

  // Create connections between nearby nodes
  const connections = useMemo(() => {
    const conns: { x1: number; y1: number; x2: number; y2: number; i: number }[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = Math.sqrt(
          (nodes[i].x - nodes[j].x) ** 2 + (nodes[i].y - nodes[j].y) ** 2
        );
        if (dist < 30) {
          conns.push({
            x1: nodes[i].x,
            y1: nodes[i].y,
            x2: nodes[j].x,
            y2: nodes[j].y,
            i: conns.length,
          });
        }
      }
    }
    return conns;
  }, [nodes]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <svg className="absolute inset-0 w-full h-full">
        {/* Connection lines */}
        {connections.map((c) => (
          <motion.line
            key={`conn-${c.i}`}
            x1={`${c.x1}%`} y1={`${c.y1}%`}
            x2={`${c.x2}%`} y2={`${c.y2}%`}
            stroke="#2a2a30"
            strokeWidth="0.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.25, 0.1] }}
            transition={{ duration: 6, repeat: Infinity, delay: c.i * 0.3 }}
          />
        ))}
      </svg>

      {/* Nodes */}
      {nodes.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gray-4"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -15, 8, -10, 0],
            x: [0, 8, -6, 4, 0],
            opacity: [0.08, 0.2, 0.1, 0.18, 0.08],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
