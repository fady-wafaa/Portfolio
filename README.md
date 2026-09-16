# Fady Wafa Nagy — Portfolio

A professional personal site showcasing **Fady Wafa Nagy** as a **Frontend Software Engineer**, focused on building scalable SaaS interfaces, high performance, and modern frontend architecture with React, Next.js, and TypeScript.

## About This Portfolio

This project is more than a résumé page — it is an interactive showcase of real engineering work on production SaaS products. It highlights:

- **Hands-on experience** on high-traffic B2B platforms
- **SuiteFleet case study** as the flagship project (Azdan)
- **Architectural evolution** from React 16 to React 19 with TypeScript
- **Measurable performance gains** (+20%)
- **Technical skills** organized by engineering responsibility, not a logo wall

## Professional Experience

| Period | Role | Company | Summary |
|--------|------|---------|---------|
| Nov 2022 — Present | Frontend Software Engineer | Azdan · Dubai (Remote) | Working on **SuiteFleet** — a multi-tenant logistics SaaS platform handling **1M+ requests/day** |
| Nov 2021 — Nov 2022 | NetSuite Developer | Azdan · Dubai (Remote) | NetSuite ERP customizations, workflow automation, and React interfaces integrated with NetSuite services |
| Project-based | Freelance Frontend Developer | Remote | Web interfaces with JavaScript/React, plus mentoring junior developers |

### Key Achievements

- **4+ years** building and modernizing production SaaS applications
- **React 16 → React 19** — staged frontend modernization
- **+20%** application performance improvement (Lighthouse / Core Web Vitals)
- **TypeScript** — typed contracts for UI, state, and REST APIs
- **AG Grid** — data-heavy interfaces with server-side loading, filtering, and sorting
- **RBAC & Multi-tenancy** — role-based access and per-tenant configuration
- **RTL** — English and Arabic support on the same platform

## Site Sections

| Section | Anchor | Content |
|---------|--------|---------|
| **Hero** | `#top` | Introduction, headline, résumé/GitHub/LinkedIn links, and the Architecture & Scale Profile card |
| **Metrics** | — | Quick stats: 4+ years, 1M+ requests/day, +20% performance, React 16→19 |
| **SuiteFleet** | `#suitefleet` | Flagship case study: context, challenge, contribution, systems, results + Dispatch Workbench visualization |
| **Architecture** | `#architecture` | Architectural evolution from legacy React 16 to a typed, modular system |
| **Performance** | `#performance` | Optimization path: Code Splitting, Caching, AG Grid → +20% |
| **Experience** | `#experience` | Professional timeline (Azdan, NetSuite, Freelance) |
| **Stack** | `#stack` | Technical skills + Engineering Philosophy (4 principles) |
| **Contact** | `#contact` | Email, résumé, LinkedIn, GitHub, and share link |

## Tech Stack

### Frontend
React 19 · Next.js 16 · TypeScript · Tailwind CSS · shadcn/ui · Lucide Icons

### State & Data
TanStack Query · Zustand · Redux Toolkit · REST APIs · OpenAPI

### UI & Performance
AG Grid · GSAP · Lighthouse · Code Splitting · Lazy Loading · WCAG

### Infrastructure
Vinext · Vite · Cloudflare Workers · Wrangler

## Project Structure

```
app/
  page.tsx          # Main page — all sections and content
  layout.tsx        # Metadata and SEO (Open Graph + JSON-LD)
  globals.css       # Styles and design system
components/
  share-portfolio.tsx   # Share button (Web Share API / Clipboard)
  profile-map.tsx       # Conceptual SVG map for SuiteFleet Workbench
public/
  Fady_Wafa_Resume.pdf  # Downloadable résumé
```

## Local Development

**Requirements:** Node.js `>=22.13.0` · pnpm

```bash
# Install dependencies
pnpm run install:ci

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build locally
pnpm run start
```

Development runs at `http://127.0.0.1:5173` by default.

## Contact

| | |
|---|---|
| **Email** | fadywafaa36@gmail.com |
| **LinkedIn** | [linkedin.com/in/fady-wafa](https://www.linkedin.com/in/fady-wafa/) |
| **GitHub** | [github.com/fady-wafaa](https://github.com/fady-wafaa) |
| **Product** | SuiteFleet: [suitefleet.com](https://www.suitefleet.com/) |
| **Location** | Cairo, Egypt — open to remote work and relocation |

---

© Fady Wafa Nagy — Frontend Software Engineer · React · Next.js · TypeScript
