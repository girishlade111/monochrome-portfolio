# Monochrome Portfolio

A striking black-and-white personal portfolio website — single-page, client-side, responsive — built with Next.js, React, TypeScript, Tailwind CSS, and shadcn/ui.

---

## ✨ Features

- **Monochrome design** — high-contrast black-and-white aesthetic with smooth scroll effects
- **Single-page sections** — navigation, hero, projects, experience, testimonials, contact
- **Interactive UI** — accordions, carousels, animated reveals (Framer Motion), mobile menu
- **Dark/light theming** — `next-themes` with system preference support
- **Fully client-side** — no backend calls; works as a pure static site

## 🛠 Tech Stack

- [Next.js](https://nextjs.org/) 16 + [React](https://react.dev/) 19 + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) (Radix primitives)
- [Framer Motion](https://motion.dev/) (animations), [Lucide](https://lucide.dev/) (icons)
- [next-themes](https://github.com/pacocoursey/next-themes) (theming)

## 🚀 Quick Start

```bash
npm install
npm run dev     # http://localhost:3000
```

Build:

```bash
npm run build   # static export -> out/
```

Note: `next.config.ts` sets `output: "export"` and `images.unoptimized` so the build emits a static `out/` directory deployable to any static host.

## 📁 Project Structure

```
.
├── src/
│   ├── app/
│   │   ├── layout.tsx   # root layout, theme provider
│   │   └── page.tsx     # the portfolio page
│   ├── components/ui/   # shadcn/ui components
│   └── lib/             # utilities
├── public/              # static assets
└── next.config.ts       # static export config
```

## 📦 Deploy Notes

Static site — deploy the `out/` directory to Cloudflare Pages, Netlify, Vercel, or GitHub Pages. No environment variables required.

## 📄 License

MIT.

---

Built by [Girish Lade](https://github.com/girishlade111) — [ladestack.in](https://ladestack.in)
