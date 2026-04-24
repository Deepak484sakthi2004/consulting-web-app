"use client";

import { motion } from "framer-motion";

// API data flow - shows data moving between services
export function DataFlowSvg({ className = "" }: { className?: string }) {
  return (
    <svg className={`opacity-[0.06] ${className}`} viewBox="0 0 800 160" fill="none">
      {/* Service boxes */}
      {[
        { x: 50, label: "Client" },
        { x: 250, label: "API" },
        { x: 450, label: "Server" },
        { x: 650, label: "DB" },
      ].map((svc, i) => (
        <g key={svc.label}>
          <motion.rect
            x={svc.x} y="50" width="80" height="40" rx="6"
            stroke="#e8e8ec" strokeWidth="1" fill="none"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          />
          <text x={svc.x + 40} y="74" textAnchor="middle" className="text-[9px]" fill="#e8e8ec">
            {svc.label}
          </text>
        </g>
      ))}
      {/* Arrows between services */}
      {[130, 330, 530].map((x, i) => (
        <motion.line
          key={i}
          x1={x} y1="70" x2={x + 120} y2="70"
          stroke="#e8e8ec" strokeWidth="0.8"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 + i * 0.3 }}
        />
      ))}
      {/* Moving data packets */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={`pkt-${i}`}
          cy="70" r="3" fill="#e8e8ec"
          animate={{ cx: [130 + i * 200, 250 + i * 200] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: i * 0.5, repeatDelay: 2 }}
        />
      ))}
    </svg>
  );
}

// Architecture diagram mesh
export function HexMesh({ className = "" }: { className?: string }) {
  return (
    <svg className={`opacity-[0.04] ${className}`} viewBox="0 0 400 200" fill="none">
      {/* Simplified architecture boxes */}
      {[
        { x: 30, y: 30, w: 80, h: 35, label: "Frontend" },
        { x: 160, y: 30, w: 80, h: 35, label: "Backend" },
        { x: 290, y: 30, w: 80, h: 35, label: "Cloud" },
        { x: 95, y: 110, w: 80, h: 35, label: "APIs" },
        { x: 225, y: 110, w: 80, h: 35, label: "Database" },
      ].map((box, i) => (
        <g key={box.label}>
          <motion.rect
            x={box.x} y={box.y} width={box.w} height={box.h} rx="4"
            stroke="#e8e8ec" strokeWidth="0.8" fill="none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          />
          <text x={box.x + box.w / 2} y={box.y + 21} textAnchor="middle" className="text-[8px]" fill="#e8e8ec">
            {box.label}
          </text>
        </g>
      ))}
      {/* Connection lines */}
      {[
        [70, 65, 135, 110],
        [200, 65, 200, 110],
        [200, 65, 265, 110],
        [330, 65, 265, 110],
        [135, 127, 225, 127],
      ].map(([x1, y1, x2, y2], i) => (
        <motion.line
          key={i}
          x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="#e8e8ec" strokeWidth="0.5" strokeDasharray="3 5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + i * 0.1 }}
        />
      ))}
    </svg>
  );
}

// Rotating technology wheel
export function SpinningGear({ size = 60, className = "" }: { size?: number; className?: string }) {
  const labels = ["React", "Node", "AWS", "TS", "SQL", "API"];
  const r = 35;

  return (
    <motion.svg
      className={`opacity-[0.06] ${className}`}
      width={size} height={size} viewBox="0 0 100 100" fill="none"
      animate={{ rotate: 360 }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
    >
      <circle cx="50" cy="50" r={r} stroke="#e8e8ec" strokeWidth="0.5" strokeDasharray="4 4" />
      <circle cx="50" cy="50" r="8" stroke="#e8e8ec" strokeWidth="0.8" />
      {labels.map((label, i) => {
        const angle = (Math.PI * 2 * i) / labels.length - Math.PI / 2;
        const x = 50 + r * Math.cos(angle);
        const y = 50 + r * Math.sin(angle);
        return (
          <g key={label}>
            <circle cx={x} cy={y} r="3" fill="#0a0a0b" stroke="#e8e8ec" strokeWidth="0.8" />
            <text x={x} y={y + 10} textAnchor="middle" className="text-[5px]" fill="#e8e8ec">
              {label}
            </text>
          </g>
        );
      })}
    </motion.svg>
  );
}

// Scan line
export function ScanLine({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-4/20 to-transparent ${className}`}
      animate={{ top: ["0%", "100%"] }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    />
  );
}
