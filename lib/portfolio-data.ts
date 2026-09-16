import {
  BarChart3,
  Code2,
  Database,
  Gauge,
  Server,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export const profile = {
  email: "fadywafaa36@gmail.com",
  github: "https://github.com/fady-wafaa",
  linkedin: "https://www.linkedin.com/in/fady-wafa/",
  resume: "/Fady_Wafa_Resume.pdf",
};

export const nav = [
  ["SuiteFleet", "#suitefleet"],
  ["Architecture", "#architecture"],
  ["Performance", "#performance"],
  ["Experience", "#experience"],
  ["Stack", "#stack"],
  ["Contact", "#contact"],
] as const;

export const heroTechTags = [
  "React",
  "Next.js",
  "TypeScript",
  "Scalable SaaS",
  "Performance",
  "Frontend Architecture",
];

export const metrics = [
  {
    value: "4+ Years",
    label: "Frontend experience",
    note: "Building & modernizing production SaaS",
    color: "#00d9e8",
  },
  {
    value: "1M+ / Day",
    label: "Platform requests",
    note: "SuiteFleet infrastructure scale",
    color: "#10B981",
  },
  {
    value: "+20%",
    label: "Performance uplift",
    note: "Lighthouse-driven application improvement",
    color: "#00d9e8",
  },
  {
    value: "React 16 → 19",
    label: "Modernization",
    note: "Staged React & TypeScript adoption",
    color: "#10B981",
  },
];

export const stack: {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  items: string[];
}[] = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    subtitle: "Modern React and TypeScript foundations for scalable SaaS interfaces.",
    items: [
      "React.js",
      "React 19",
      "Next.js",
      "TypeScript",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
    ],
  },
  {
    icon: Sparkles,
    title: "UI Systems & Motion",
    subtitle: "Polished interface systems, styling, and motion for modern product experiences.",
    items: [
      "Tailwind CSS",
      "shadcn/ui",
      "Material UI",
      "Bootstrap",
      "GSAP",
      "Three.js",
    ],
  },
  {
    icon: Database,
    title: "State, Data & APIs",
    subtitle: "Client state, server-state workflows, and frontend API integration.",
    items: ["TanStack Query", "Zustand", "Redux Toolkit", "REST APIs"],
  },
  {
    icon: BarChart3,
    title: "Data-Heavy Interfaces",
    subtitle: "Operational dashboards, grids, and logistics-scale interface patterns.",
    items: [
      "AG Grid",
      "Server-Side Loading",
      "Filtering",
      "Sorting",
      "Bulk Operations",
      "Data Export",
    ],
  },
  {
    icon: Gauge,
    title: "Performance & Reliability",
    subtitle: "Measured performance improvements and resilient frontend delivery.",
    items: [
      "Lighthouse",
      "Core Web Vitals",
      "Code Splitting",
      "Lazy Loading",
      "Bundle Optimization",
      "Rendering Optimization",
      "Caching",
      "CDN",
    ],
  },
  {
    icon: Server,
    title: "Backend Integration & Product Quality",
    subtitle:
      "Backend fundamentals and product-quality practices that support reliable frontend systems.",
    items: [
      "Node.js",
      "Express.js",
      "GraphQL",
      "Feature-Based Architecture",
      "Reusable Component Design",
      "Accessibility / WCAG",
      "RBAC",
      "Code Reviews",
    ],
  },
];

export const architectureSteps = [
  ["01", "Legacy React 16", "Untyped flows and tightly coupled modules"],
  [
    "02",
    "React 19 Modernization",
    "Staged upgrades across the production frontend",
  ],
  [
    "03",
    "TypeScript Adoption",
    "Safer contracts for UI, state and API integration",
  ],
  [
    "04",
    "Feature-Based Structure",
    "Domain-aligned modules with clear boundaries",
  ],
  ["05", "Reusable Foundations", "Shared components and form abstractions"],
  ["06", "Rendering Optimization", "Focused state, list and grid performance"],
];

export const performanceCards = [
  ["Code Splitting & Lazy Loading", "Load features when users need them."],
  ["Bundle Optimization", "Reduce unnecessary initial delivery cost."],
  ["Caching & State Optimization", "Avoid repeated fetch and render work."],
  ["List & Grid Rendering", "Keep operational tables responsive."],
];
