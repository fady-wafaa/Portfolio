import { Briefcase, Download, GitFork, Mail } from "lucide-react";
import { SharePortfolio } from "@/components/share-portfolio";
import { profile } from "@/lib/portfolio-data";

export function ContactSection() {
  return (
    <section id="contact" className="contact-section section-grid">
      <div className="container contact-card" data-motion="reveal">
        <div data-motion="reveal-item">
          <p className="eyebrow">
            <span />
            Available for frontend opportunities
          </p>
          <h2>Let&apos;s build interfaces that scale effortlessly.</h2>
          <p>
            Open to frontend engineering opportunities focused on scalable SaaS
            products, architecture and high-performance user experiences.
          </p>
          <div className="availability">
            <span>
              <i /> Cairo, Egypt · Remote &amp; relocation
            </span>
            <span>
              <i /> Response time: 1–2 days
            </span>
          </div>
        </div>
        <div className="contact-actions" data-motion="reveal-item">
          <a className="button button-primary" href={`mailto:${profile.email}`}>
            <Mail size={16} /> {profile.email}
          </a>
          <a className="button button-ghost" href={profile.resume} download>
            <Download size={16} /> Download Resume
          </a>
          <div>
            <a
              className="button button-ghost"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Briefcase size={16} /> LinkedIn
            </a>
            <a
              className="button button-ghost"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <GitFork size={16} /> GitHub
            </a>
          </div>
          <SharePortfolio />
        </div>
      </div>
    </section>
  );
}
