# Yogeshwari S — Personal Developer Portfolio

A modern, minimal, premium personal developer portfolio website designed with an elegant, sophisticated **Pink & Dusty Rose** theme, built with **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**.

Created for an ambitious Computer Science student & aspiring software developer, focusing on high visual appeal, balanced typography, soft warm tones, and modern micro-interactions.

---

## 🌸 Visual Theme & Palette

- **Main Background**: `#FFF7FA` (very light blush pink)
- **Secondary Background**: `#FCEBF1`
- **Card Background**: `#FFFFFF`
- **Primary Accent**: `#E88BAA` (dusty rose)
- **Secondary Accent**: `#D66B91`
- **Heading Text**: `#422634` (deep burgundy)
- **Body Text**: `#765968` (muted mauve)
- **Borders**: `#F2D5E0`
- **Button Text**: `#FFFFFF`
- **Typography**: Space Grotesk (headings) and Inter (body copy) via `next/font/google`.

---

## 🚀 Getting Started

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
npm run start
```

---

## 🛠️ Content Configuration

All personal information, links, project details, and skills are maintained in:
**[`src/data/portfolioData.ts`](file:///c:/Users/Yogeshwari%20S/Desktop/Web%20Development%20Projects/src/data/portfolioData.ts)**

- **Email**: `yogeshwari.sjr@gmail.com`
- **Phone**: `8073072044`
- **Location**: Bengaluru, Karnataka, India
- **Socials**: GitHub & LinkedIn profiles

---

## 📁 Project Structure

```text
├── public/
│   └── favicon.svg              # Custom YS blush/rose vector favicon
├── src/
│   ├── app/
│   │   ├── globals.css          # Pink theme variables, scrollbars & dot grids
│   │   ├── layout.tsx           # Space Grotesk & Inter fonts, SEO metadata
│   │   └── page.tsx             # Main portfolio single-page assembler
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky nav with light blur, active states & mobile menu
│   │   ├── Hero.tsx             # Large typography, dusty rose CTA, elegant profile card
│   │   ├── About.tsx            # Clean typography-focused layout (no profile image)
│   │   ├── Skills.tsx           # Categorized toolkit with soft pink badges
│   │   ├── Projects.tsx         # 3 white project cards with pink tags & soft shadows
│   │   ├── ProjectModal.tsx     # Deep-dive project modal in pink theme
│   │   ├── Contact.tsx          # Validated form with Name, Email, Mobile (optional), Message
│   │   ├── Footer.tsx           # Light blush footer with current year & back-to-top
│   │   └── BackgroundEffects.tsx# Ambient blush/rose glows & delicate sparkles
│   ├── data/
│   │   └── portfolioData.ts     # Single source of truth for all content
│   └── lib/
│       └── utils.ts             # Tailwind class merger utility
├── tailwind.config.ts           # Custom pink theme color palette tokens
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Next.js 14, React 18, Tailwind, Lucide & Framer
```
