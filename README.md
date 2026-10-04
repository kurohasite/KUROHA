# KUROHA ($KURO)

Pixel-art Japanese cyberpunk night-city landing page. Next.js (App Router) + Tailwind CSS.

## Run
```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Edit
- `lib/config.js` — contract address, chain, supply, buy/X/Telegram/community links.
- `components/` — one file per section (Hero, Token, About, City, Roadmap, Lore, Join, Footer).
- `components/Effects.jsx` — client-side behaviour: pixel city scene, rain, particles, scroll reveal, mobile menu, copy button, city video.
- `app/globals.css` — theme and styles (Tailwind utilities are available too).
- `public/kuroha.png` — mascot. `public/city.mp4` — Kuroha City video.

## Deploy
Push to GitHub, then import the repo on Vercel (zero config).

Respects `prefers-reduced-motion`.
