"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TopBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-[60] bg-gray-2 border-b border-gray-3/60"
    >
      <Link
        href="/contact"
        className="flex items-center justify-center gap-2 h-9 text-[11px] text-gray-5 hover:text-white transition-colors duration-200 group"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-green-500/60 animate-pulse" />
        <span>Now accepting new clients for Q2 2026</span>
        <span className="text-gray-4">—</span>
        <span className="text-gray-6 group-hover:underline flex items-center gap-1">
          Book a free consultation
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </Link>
    </motion.div>
  );
}
