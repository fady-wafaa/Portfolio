import {
  ArrowDown,
  Braces,
  GitFork,
  Download,
  Briefcase,
  Globe,
  LayoutGrid,
  RefreshCw,
  TerminalSquare,
  Zap,
} from "lucide-react";
import { profile } from "@/lib/portfolio-data";

const profileItems = [
  {
    icon: RefreshCw,
    title: "React 16 → React 19 Modernization",
    text: "Staged refactor & modular architecture",
    metric: "100%",
  },
  {
    icon: Braces,
    title: "Strict TypeScript Contracts",
    text: "Typed API contracts & component prop boundaries",
    metric: "Strict",
  },
  {
    icon: LayoutGrid,
    title: "Feature-Based Architecture",
    text: "Decoupled domain modules in features/*",
    metric: "Modular",
  },
  {
    icon: Zap,
    title: "+20% Performance Uplift",
    text: "Lighthouse-driven & rendering optimization",
    metric: "+20%",
  },
  {
    icon: Globe,
    title: "SuiteFleet Platform Scale",
    text: "Multi-tenant logistics handling 1M+ daily operational events",
    metric: "1M+ / Day",
    featured: true,
  },
];

export function HeroSection() {
  return (
    <section id="top" className="hero section-grid">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          {/* <div
            className="tech-pill flex flex-wrap  "
            aria-label="Core technologies"
          >
            {heroTechTags.map((tag, index) => (
              <span className="text-xs  w-fit gap-0 p-0" key={tag}>
                {index >= 0 ? <em>•</em> : null}
                {tag}
              </span>
            ))}
          </div> */}
          {/* <p className="hero-name">FADY WAFA NAGY</p> */}
          <div className="role-pill" data-motion="hero-label">Frontend Software Engineer</div>
          <h1 data-motion="hero-headline">
            <span className="hero-line">
              Building scalable, high-performance SaaS interfaces
            </span>
            <span className="hero-line">
              with React, Next.js &amp; TypeScript.
            </span>
          </h1>
          <p className="hero-lede" data-motion="hero-lede">
            Frontend engineer with 4+ years of experience building and
            modernizing production SaaS applications, with a focus on frontend
            architecture, performance, data-heavy interfaces and scalable React
            systems.
          </p>
          <div className="hero-actions" data-motion="hero-actions">
            <a className="button button-primary" href="#suitefleet">
              Explore SuiteFleet Case Study{" "}
              <ArrowDown size={12} fontWeight={800} />
            </a>
            <a className="button button-ghost" href={profile.resume} download>
              <Download size={12} fontWeight={800} /> Download Resume
            </a>
            <a
              className="icon-button"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <GitFork size={18} />
            </a>
            <a
              className="icon-button"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Briefcase size={18} />
            </a>
          </div>
        </div>

        <aside
          className="system-card"
          aria-label="Architecture and scale profile"
          data-motion="hero-panel"
        >
          <div className="system-card-head">
            <span>
              <TerminalSquare size={15} /> Architecture &amp; Scale Profile
            </span>
            <small>Verified Baseline</small>
          </div>
          {profileItems.map(({ icon: Icon, title, text, metric, featured }) => (
            <div
              className={`system-row${featured ? " system-row-featured" : ""}`}
              key={title}
            >
              <span className="system-row-icon">
                <Icon size={15} />
              </span>
              <span className="system-row-copy">
                <strong>{title}</strong>
                <small>{text}</small>
              </span>
              <em>{metric}</em>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
