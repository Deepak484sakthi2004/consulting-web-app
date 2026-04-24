"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useMemo } from "react";

// Grid config
const COLS = 14;
const ROWS = 10;

export default function GridBackground() {
  // Cursor follower
  const cursorX = useMotionValue(-500);
  const cursorY = useMotionValue(-500);
  const smoothX = useSpring(cursorX, { damping: 25, stiffness: 100 });
  const smoothY = useSpring(cursorY, { damping: 25, stiffness: 100 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [cursorX, cursorY]);

  // Pre-calculate grid dots with stagger delays
  const dots = useMemo(() => {
    const arr: { col: number; row: number; delay: number }[] = [];
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        arr.push({
          col: c,
          row: r,
          delay: (r * 0.06 + c * 0.03) * 0.8,
        });
      }
    }
    return arr;
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Base gradient — subtle diagonal shift */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(10,10,11,1) 0%, rgba(18,18,22,1) 40%, rgba(14,14,18,1) 70%, rgba(10,10,11,1) 100%)",
        }}
      />

      {/* Animated pulse grid */}
      <div className="absolute inset-0">
        {dots.map(({ col, row, delay }) => (
          <motion.div
            key={`${row}-${col}`}
            className="absolute w-[2px] h-[2px] rounded-full bg-[#42424a]"
            style={{
              left: `${(col / COLS) * 100 + 100 / COLS / 2}%`,
              top: `${(row / ROWS) * 100 + 100 / ROWS / 2}%`,
            }}
            animate={{ opacity: [0.08, 0.28, 0.08] }}
            transition={{
              duration: 3.5,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating luminous orbs */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(200,200,210,0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
          left: "-5%",
          top: "5%",
        }}
        animate={{ x: [0, 120, 30, 80, 0], y: [0, 60, -40, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 450,
          height: 450,
          background:
            "radial-gradient(circle, rgba(180,180,200,0.05) 0%, transparent 70%)",
          filter: "blur(90px)",
          right: "-5%",
          bottom: "10%",
        }}
        animate={{ x: [0, -80, 20, -50, 0], y: [0, -50, 30, -20, 0] }}
        transition={{
          duration: 18,
          delay: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 350,
          height: 350,
          background:
            "radial-gradient(circle, rgba(160,160,180,0.04) 0%, transparent 70%)",
          filter: "blur(100px)",
          left: "40%",
          top: "30%",
        }}
        animate={{ x: [0, 60, -40, 30, 0], y: [0, -30, 50, -20, 0] }}
        transition={{
          duration: 25,
          delay: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Cursor-reactive glow */}
      <motion.div
        className="fixed rounded-full pointer-events-none"
        style={{
          width: 400,
          height: 400,
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(232,232,236,0.04) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />

      {/* Noise texture */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.025] mix-blend-overlay">
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
}
