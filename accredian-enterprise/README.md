# Accredian Enterprise - Full Stack Intern Assignment Submission

A responsive, high-performance enterprise learning and upskilling landing page built using **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

---

## 🚀 Live Demo & Repository

- **Live Deployed App (Vercel):** [https://accredian-enterprise-six.vercel.app](https://accredian-enterprise-six.vercel.app)
- **GitHub Repository:** [https://github.com/yourusername/accredian-enterprise](https://github.com/yourusername/accredian-enterprise)

---

## 💻 Setup & Running Instructions

### Prerequisites
- **Node.js**: v18.x or higher
- **npm**: v9.x or higher

### Local Development Setup

```bash
# 1. Navigate to project root
cd accredian-enterprise

# 2. Install dependencies (if needed)
npm install

# 3. Run development server (with Webpack flag for Next.js 16 cross-platform compatibility)
npm run dev -- --webpack

# 4. Open http://localhost:3000 in your browser
```

### Production Build

```bash
# Build production bundle
npm run build -- --webpack

# Start production server
npm run start
```

> **Note on Windows Next.js 16:** Next.js 16 dev server uses Webpack mode (`--webpack`) on platforms where native SWC binaries fallback to WebAssembly.

---

## 🛠️ Architecture & Technical Approach

### 1. Modern Component Architecture (App Router)
- Built using **Next.js 16 App Router** with modular, reusable functional components located in `src/components/`.
- Clear separation of content data (`src/data/site-data.ts`), styles (`src/app/globals.css`), and API handlers (`src/app/api/leads/route.ts`).

### 2. Design System & User Experience
- **Tailwind CSS v4** with HSL brand color tokens:
  - Enterprise Deep Navy: `#1C3D5E`
  - Vibrant Accent Orange: `#E85D3A`
  - Glassmorphic backdrops, smooth gradients, subtle micro-animations, and custom typography.
- **Full Responsiveness**: Mobile-first grid layouts, responsive navigation drawer, and fluid typography across all screen sizes.

### 3. Key Landing Page Sections
1. **Header & Navigation** — Sticky blur navbar with brand logo, section navigation, and instant Brochure modal trigger.
2. **Hero Section** — Dynamic gradient background with live enterprise metrics, AI dashboard illustration, and dual CTAs.
3. **Track Record** — Animated numeric stat cards showcasing upskilling achievements (10K+ professionals, 200+ enterprise partners).
4. **Proven Partnerships** — Styled corporate partner logo badges (Adobe, Amazon, Bayer, Google, Microsoft, Deloitte, etc.) with hover illumination.
5. **The Accredian Edge** — 4 core feature cards detailing customized solutions, practitioner faculty, and data-driven ROI.
6. **Domain Expertise** — Interactive domain practice selector featuring Gen-AI, Product, Leadership, Data & Analytics, Operations, Digital, and Fintech verticals.
7. **Course Segmentation** — Categorized program grid (Program-specific, Industry-verticalized, Topic-deep dive, Level-specific).
8. **Target Audience (Who Should Join)** — Persona-tailored pathways with role tags and key outcome checklists.
9. **The CAT Framework** — Visual 3-phase process methodology (Capability Analysis → Adaptable Blueprint → Transformational Delivery).
10. **Testimonials** — Interactive slide carousel with star ratings, executive quotes, company badges, and carousel controls.
11. **Searchable FAQ Accordion** — Instant search filter over enterprise FAQ questions with expandable accordion toggles.
12. **Call To Action Banner** — High-converting gradient banner for consultation requests.
13. **Lead Capture Form (Bonus)** — Enterprise lead form with real-time validation, program/team size dropdowns, API submission, and success modal.
14. **Brochure Modal** — Reusable overlay modal allowing visitors to download curriculum guides instantly.
15. **Footer** — Full corporate footer with newsletter signup, social links, and smooth back-to-top button.

### 4. API Integration (Lead Capture API)
- `POST /api/leads`: Full server-side field validation (Name, Email format, Company, Team size, Program interest).
- `GET /api/leads`: Endpoint to view captured mock leads or verify backend connectivity.

---

## 🤖 AI Usage Report (Assignment Requirement)

### Where AI Helped
- **Visual Asset Generation**: Generated high-resolution dashboard graphics and workshop illustrations (`hero-dashboard.png` and `executive-workshop.png`) using AI image generation to eliminate empty placeholders.
- **Component Boilerplate**: Assisted in scaffolding initial TypeScript interface definitions and Tailwind grid layouts for complex sections (Carousel, FAQ, Lead Form).
- **Data Structuring**: Generated structured JSON arrays for course categories, domain competencies, and FAQ pairs.

### What Was Modified & Improved Manually
- **Color System & Brand Aesthetics**: Curated exact Accredian enterprise colors, glassmorphism overlays, custom gradients, and CSS keyframe animations in `globals.css`.
- **Custom Interactive State Management**: Manually built state handlers for the Testimonial Carousel controls, Searchable FAQ accordion, Interactive Domain tab selector, Mobile navigation drawer, and Brochure popup modal.
- **Lead API Validation & Error Handling**: Enhanced client-side and server-side validation rules in `/api/leads/route.ts` with regex checks, structured response objects, and user-friendly error banners.
- **Cross-Platform Compatibility**: Solved Next.js 16 Turbopack WASM binding issue on Windows by configuring Webpack runtime fallbacks.

---

## 🔮 Improvements With More Time

1. **Database Integration**: Connect `POST /api/leads` to a persistent database (e.g. PostgreSQL with Prisma or MongoDB) instead of in-memory store.
2. **Framer Motion Animations**: Add scroll-triggered reveal animations and page transition effects.
3. **Admin Dashboard**: Build a protected `/admin/leads` view to filter, search, and export captured lead data as CSV.
4. **E2E Test Suite**: Implement automated Playwright / Cypress tests for form validation and responsive menu toggles.
5. **Internationalization (i18n)**: Add multi-language support (English / Spanish / Japanese) for global enterprise teams.

---

## 📄 License

MIT License &copy; 2026 Accredian Enterprise.
