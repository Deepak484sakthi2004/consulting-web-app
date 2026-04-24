"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

interface Props {
  value: string;
  className?: string;
}

export default function AnimatedCounter({ value, className = "" }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Extract number and suffix (e.g., "50+" -> 50, "+")
  const match = value.match(/^(\$?)([\d.]+)(.*)$/);
  if (!match) {
    return <span className={className}>{value}</span>;
  }

  const prefix = match[1];
  const num = parseFloat(match[2]);
  const suffix = match[3];

  return (
    <span ref={ref} className={className}>
      {prefix}
      {isInView ? <Counter to={num} /> : "0"}
      {suffix}
    </span>
  );
}

function Counter({ to }: { to: number }) {
  const spring = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: 1.5,
  });

  const display = useTransform(spring, (v) => {
    if (to >= 100) return Math.round(v).toString();
    if (to >= 10) return Math.round(v).toString();
    return v.toFixed(1);
  });

  const [val, setVal] = useState("0");

  useEffect(() => {
    spring.set(to);
    const unsub = display.on("change", (v) => setVal(v));
    return unsub;
  }, [spring, to, display]);

  return <>{val}</>;
}
