# Saravana Travels — Website

A modern travel agency website built with **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Language**: TypeScript

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles & CSS variables
│   ├── layout.tsx        # Root layout + metadata + favicon
│   └── page.tsx          # Home page (assembles all sections)
└── components/
    ├── ui/
    │   └── Animate.tsx   # Reusable scroll animation utilities
    ├── Navbar.tsx
    ├── HeroSection.tsx
    ├── AboutSection.tsx
    ├── VideoSection.tsx
    ├── PackagesSection.tsx
    ├── WhyChooseUs.tsx
    ├── ReviewsSection.tsx
    ├── ContactSection.tsx
    └── Footer.tsx

public/
└── assets/
    ├── images/           # logo.jpeg
    └── videos/           # Mountain_landscape.mp4, 2.mp4, Saravana_Travels.mp4, Yacht_moving.mp4
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Color Palette

| Role | Hex |
|---|---|
| Deep Ocean | `#03045E` |
| Navy | `#023E8A` |
| Primary Blue | `#0077B6` |
| Medium Blue | `#0096C7` |
| Light Blue | `#00B4D8` |
| Pale Blue | `#90E0EF` |
| Ocean Mist | `#F0F8FF` |
