"use client";

import { useSyncExternalStore } from "react";
import { Briefcase, Download, GitFork, Moon, Sun } from "lucide-react";
import { nav, profile } from "@/lib/portfolio-data";

type Theme = "dark" | "light";

const THEME_CHANGE_EVENT = "portfolio-theme-change";

function getCurrentTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("light")
    ? "light"
    : "dark";
}

function subscribeToTheme(listener: () => void) {
  window.addEventListener(THEME_CHANGE_EVENT, listener);
  return () => window.removeEventListener(THEME_CHANGE_EVENT, listener);
}

export function PortfolioNav() {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getCurrentTheme,
    () => "dark",
  );

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("portfolio-theme", nextTheme);
    document.documentElement.classList.toggle("light", nextTheme === "light");
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  };

  return (
    <nav
      className="nav-shell"
      aria-label="Primary navigation"
      data-motion="nav"
    >
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
          <button
            className="icon-button theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            title={theme === "dark" ? "Light mode" : "Dark mode"}
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
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
            <button type="button" onClick={toggleTheme}>
              {theme === "dark" ? "Light mode" : "Dark mode"}
            </button>
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
