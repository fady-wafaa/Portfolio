import { Briefcase, Download, GitFork } from "lucide-react";
import { nav, profile } from "@/lib/portfolio-data";

export function PortfolioNav() {
  return (
    <nav className="nav-shell" aria-label="Primary navigation" data-motion="nav">
      <div className="nav-inner">
        <a className="brand" href="#top" aria-label="Fady Wafa Nagy, home">
          <span className="brand-mark">FW</span>
          <span>
            <strong>FADY WAFA NAGY</strong>
            <small>Frontend Software Engineer</small>
          </span>
        </a>

        <div className="nav-center">
          <span className="nav-status">
            <i /> Open to Frontend Opportunities
          </span>
          <div className="nav-links">
            {nav.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="nav-actions">
          <a
            className="button button-primary small"
            href={profile.resume}
            download
          >
            <Download size={15} /> Download CV / Resume
          </a>
          <a
            className="icon-button"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GitFork size={17} />
          </a>
          <a
            className="icon-button"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <Briefcase size={17} />
          </a>
        </div>

        <details className="mobile-menu">
          <summary aria-label="Open navigation">
            <span />
            <span />
            <span />
          </summary>
          <div>
            {nav.map(([label, href]) => (
              <a className="text-sm" key={href} href={href}>
                {label}
              </a>
            ))}
            <a href={profile.resume} download>
              Download CV / Resume
            </a>
          </div>
        </details>
      </div>
    </nav>
  );
}
