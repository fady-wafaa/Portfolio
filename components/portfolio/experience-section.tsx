import { SectionTitle } from "@/components/portfolio/section-title";

export function ExperienceSection() {
  return (
    <section id="experience" className="section section-darker section-grid">
      <div className="container" data-motion="reveal">
        <div data-motion="reveal-item">
          <SectionTitle
            eyebrow="Track record"
            title="Engineering Impact &amp; Experience"
          />
        </div>
        <div className="timeline">
          <article data-motion="reveal-item">
            <span className="timeline-dot" />
            <header>
              <div>
                <h3>Frontend Software Engineer</h3>
                <p>Azdan · Dubai, Remote</p>
              </div>
              <time>NOV 2022 — PRESENT</time>
            </header>
            <p>
              Contributing to SuiteFleet, a high-traffic multi-tenant logistics
              SaaS platform supporting fleet operations, delivery workflows,
              dispatch planning, analytics and reporting at 1M+ requests/day
              platform scale.
            </p>
            <ul>
              <li>
                • Modernized a legacy React frontend from React 16 toward React
                19 with TypeScript adoption, improving maintainability and
                preparing the UI foundation for scalable feature development.
              </li>
              <li>
                • Improved application performance by approximately 20% through
                Lighthouse-driven optimization, code splitting, lazy loading,
                bundle optimization, caching and rendering improvements.
              </li>
              <li>
                • Built and optimized data-heavy logistics interfaces using AG
                Grid, complex filters, operational panels and reusable UI/form
                abstractions for task, driver and fleet workflows.
              </li>
              <li>
                • Implemented frontend workflows for RBAC, multi-tenancy and
                English/Arabic RTL support while collaborating closely with
                product, design and backend teams.
              </li>
            </ul>
          </article>
          <article data-motion="reveal-item">
            <span className="timeline-dot" />
            <header>
              <div>
                <h3>NetSuite Developer</h3>
                <p>Azdan · Dubai, Remote</p>
              </div>
              <time>NOV 2021 — NOV 2022</time>
            </header>
            <p>
              Built NetSuite ERP customizations, workflows, forms and business
              logic, including React interfaces integrated with NetSuite
              services.
            </p>
            <ul>
              <li>SuiteScript 2.1 and operational workflow automation</li>
              <li>
                Clients included Alliance Global, Deyaar, Naga, Diamond Group
                and Al Khaleej Training &amp; Education
              </li>
            </ul>
          </article>
          <article data-motion="reveal-item">
            <span className="timeline-dot" />
            <header>
              <div>
                <h3>Freelance Frontend Developer</h3>
                <p>Remote · Project-based</p>
              </div>
              <time>PROJECT-BASED</time>
            </header>
            <p>
              Developed frontend interfaces and small web applications using
              JavaScript and React, while mentoring learners and junior
              developers.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
