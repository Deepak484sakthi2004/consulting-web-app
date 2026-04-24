# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A tech consulting portfolio website for "VC Consulting" — advertising tech consulting, web app development, and digital services. Built to attract and convert clients.

## Tech Stack

- **Framework**: Next.js 16.2 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4 (using `@theme` for custom colors)
- **Animations**: Framer Motion (scroll-triggered, staggered, spring physics)
- **Icons**: Lucide React
- **Node**: npm as package manager

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build (also runs TypeScript check)
npm run lint     # ESLint
```

## Architecture

### Layout (`src/app/layout.tsx`)
- Global layout with `TopBanner` → `Navbar` → content → `Footer`
- `GridBackground` is fixed-position behind everything (animated dot grid + floating orbs + cursor glow + noise)
- Navbar is fixed at `top-9` (below the 36px top banner)

### Pages (`src/app/`)
- `/` — Homepage: hero with word-by-word text reveal, marquee logos, stats with animated counters, services grid, process steps, testimonials, CTA
- `/about` — About page: identity cards, animated skill bars, values, career timeline, stats
- `/services` — Services page: 4 detailed service sections with feature lists, tech stack grid, engagement models (hourly/fixed/retainer)
- `/clients` — Clients page: 6 case studies with metrics, industry tags, testimonials, trust stats
- `/contact` — Contact page: form with cascading field animations, info sidebar, FAQ

### Shared Components (`src/components/`)

**Animation components (used across all pages):**
- `AnimatedSection` — Scroll-triggered fade+slide with optional blur. Also exports `StaggerContainer` and `StaggerItem` for cascading grid animations
- `TextReveal` — Word-by-word hero text animation with 3D rotation. Also exports `LineReveal`
- `AnimatedCounter` — Spring-physics number counter that animates from 0
- `MagneticButton` — Cursor-following spring button wrapper
- `Marquee` — Infinite horizontal scroll

**Background/visual components:**
- `GridBackground` — Fixed background: pulsing dot grid (14×10), 3 floating luminous orbs, cursor-reactive glow, SVG noise texture
- `TopBanner` — Fixed top banner with CTA ("Now accepting new clients")
- `TechSvgHero` — Currently returns null (was removed; kept as stub)
- `ParticleField` — Network topology with connected nodes (currently unused in pages, available)
- `FloatingNodes` — Sidebar status indicators (currently unused in pages, available)
- `DataFlowSvg` — Exports: `DataFlowSvg`, `HexMesh`, `SpinningGear`, `ScanLine` (currently unused in pages, available)

**Layout components:**
- `Navbar` — Fixed nav with animated active indicator, mobile menu
- `Footer` — 4-column footer with links and contact info

## Design System

### Color Palette (monochrome, defined in `globals.css` via `@theme`)
- `gray-1`: #0a0a0b (background)
- `gray-2`: #141416 (card/surface)
- `gray-3`: #1e1e22 (borders, dividers)
- `gray-4`: #2a2a30 (subtle elements)
- `gray-5`: #9a9aa8 (muted text)
- `gray-6`: #e8e8ec (primary text)

### Design Patterns
- **Cards**: Use `gap-px bg-gray-3 rounded-xl overflow-hidden` on grid container, `bg-[#0a0a0b]` on each card — creates 1px border effect
- **Section labels**: `text-xs text-gray-5 uppercase tracking-wider`
- **Buttons**: Primary = `h-[48px] bg-gray-6 text-gray-1 rounded-lg`, Secondary = `bg-gray-2 border border-gray-3`
- **Max width**: `max-w-[1200px] mx-auto px-6`
- **Section spacing**: `py-28 border-t border-gray-3`
- **Hero headings**: `text-5xl md:text-7xl font-semibold text-white tracking-tight`
- **Hover on cards**: `whileHover={{ backgroundColor: "rgba(20, 20, 22, 1)" }}`

### Animation Patterns
- Easing: `[0.25, 0.1, 0.25, 1]` for most transitions
- TextReveal word stagger: 60ms per word
- StaggerContainer default: 80ms between children
- Blur transitions: `filter: "blur(10px)"` → `"blur(0px)"`
- Line reveals: `scaleX: 0` → `1` with `origin-left`

## Important Notes
- Reference design inspiration: respan.ai (monochrome, minimal, flat, clean)
- Background decorations were intentionally removed from pages — only the global `GridBackground` provides ambient visuals
- Several visual components exist but are unused (`ParticleField`, `FloatingNodes`, `DataFlowSvg` etc.) — available if needed but were removed for cleaner look
- All content (client names, testimonials, stats, contact info) is placeholder — needs real data
- Contact form shows success state on submit but has no backend wired up
