import {
  BarChart3,
  Boxes,
  Braces,
  ExternalLink,
  Gauge,
  Layers3,
} from "lucide-react";
import { ProfileMap } from "@/components/profile-map";
import { SectionTitle } from "@/components/portfolio/section-title";

const operationsSummary = [
  {
    label: "Unassigned tasks",
    value: "Demo",
    hint: "10–25 demo tasks",
    barWidth: 44,
  },
  {
    label: "Active drivers",
    value: "Demo",
    hint: "50+ demo drivers",
    barWidth: 68,
  },
  {
    label: "Shift coverage",
    value: "Demo",
    hint: "Demo coverage",
    barWidth: 58,
  },
  {
    label: "Delivery exceptions",
    value: "Demo",
    hint: "Sample exceptions",
    barWidth: 28,
  },
];

const shiftSummary = [
  {
    label: "Available",
    value: "Demo",
    hint: "Demo availability",
    barWidth: 52,
  },
  { label: "On route", value: "Demo", hint: "Sample routes", barWidth: 72 },
  { label: "At hub", value: "Demo", hint: "Regional Hub", barWidth: 36 },
  { label: "Offline", value: "Demo", hint: "Demo status mix", barWidth: 22 },
];

function WorkbenchSidebar({
  title,
  items,
  className = "",
}: {
  title: string;
  items: typeof operationsSummary;
  className?: string;
}) {
  return (
    <div className={`workbench-sidebar ${className}`.trim()}>
      <h3>{title}</h3>
      {items.map((item) => (
        <div key={item.label} data-motion="workbench-row">
          <span>{item.label}</span>
          <strong>{item.value}</strong>
          <span className="sidebar-hint">{item.hint}</span>
          <small style={{ width: `${item.barWidth}%` }} aria-hidden="true" />
        </div>
      ))}
    </div>
  );
}

export function SuiteFleetSection() {
  return (
    <section id="suitefleet" className="section section-grid">
      <div className="container" data-motion="reveal">
        <div className="title-row" data-motion="reveal-item">
          <SectionTitle
            eyebrow="My achievements with · Azdan (SuiteFleet)"
            title="SuiteFleet: Powering 1M+ Daily Geographic Logistics Operations"
            copy="A production B2B logistics platform supporting end-to-end fleet and delivery operations."
          />
          <a
            className="status-chip"
            href="https://www.suitefleet.com/"
            target="_blank"
            rel="noreferrer"
          >
            <i /> Product website <ExternalLink size={13} />
          </a>
        </div>

        <div className="case-grid">
          <article className="case-card" data-motion="reveal-item">
            <span className="card-number">01 / CONTEXT</span>
            <Boxes size={23} />
            <h3>Enterprise Logistics Platform</h3>
            <p>
              Task management, route planning, driver operations, analytics,
              reporting, RBAC and multi-tenant workflows across fleet
              operations.
            </p>
            <div className="tag-row">
              <span>Fleet Ops</span>
              <span>Task Workflows</span>
              <span>Multi-Tenant</span>
            </div>
          </article>
          <article className="case-card" data-motion="reveal-item">
            <span className="card-number">02 / CHALLENGE</span>
            <Layers3 size={23} />
            <h3>Data-Heavy UI &amp; State Load</h3>
            <p>
              Complex filters, grids and operational panels needed smooth state
              updates while preserving tenant configuration and English/Arabic
              direction.
            </p>
            <div className="tag-row">
              <span>Rendering</span>
              <span>State</span>
              <span>RTL</span>
            </div>
          </article>
          <article className="case-card" data-motion="reveal-item">
            <span className="card-number">03 / CONTRIBUTION</span>
            <Braces size={23} />
            <h3>Modernization &amp; Architecture</h3>
            <p>
              modernized React, adopted TypeScript, established reusable feature
              boundaries and improved role-aware frontend workflows.
            </p>
            <div className="tag-row">
              <span>React 19</span>
              <span>TypeScript</span>
              <span>RBAC</span>
            </div>
          </article>
          <article className="case-card" data-motion="reveal-item">
            <span className="card-number">04 / SYSTEMS</span>
            <BarChart3 size={23} />
            <h3>Feature Boundaries &amp; AG Grid</h3>
            <p>
              Reduced unnecessary renders, improved list and grid strategies and
              created reusable UI and form abstractions for faster feature
              delivery.
            </p>
            <div className="tag-row">
              <span>AG Grid</span>
              <span>Reusable UI</span>
              <span>Data Export</span>
            </div>
          </article>
          <article className="case-card case-wide" data-motion="reveal-item">
            <span className="card-number">05 / VERIFIED RESULT</span>
            <Gauge size={23} />
            <h3>Performance &amp; TypeScript Adoption</h3>
            <p>
              Achieved an approximately 20% application performance improvement
              through code splitting, lazy loading, bundle optimization, caching
              and rendering improvements — while improving type safety across
              API integration and reusable frontend modules.
            </p>
            <p>
              Reduced unnecessary renders, improved list and grid strategies,
              and created reusable UI and form abstractions for more predictable
              feature delivery.
            </p>
            <div className="result-row">
              <span>
                <strong>+20%</strong> performance improvement
              </span>
              <span>
                <strong>Typed</strong> REST integration
              </span>
              <span>
                <strong>English / Arabic</strong> RTL support
              </span>
            </div>
          </article>
        </div>

        <div
          className="workbench"
          aria-label="Conceptual dispatch workbench visualization"
          data-motion="reveal-item"
          data-workbench
        >
          <div className="workbench-top">
            <span>
              <i /> Conceptual Dispatch Workbench Visualization
            </span>
            <small>Representative Demo Data</small>
          </div>
          <div className="workbench-body">
            <WorkbenchSidebar title="OPERATIONS" items={operationsSummary} />
            <ProfileMap />
            <WorkbenchSidebar
              title="SHIFT STATUS"
              items={shiftSummary}
              className="right"
            />
          </div>
          <footer>
            <span>
              <i className="cyan" /> Driver
            </span>
            <span>
              <i className="green" /> Task cluster
            </span>
            <span>
              <i className="red" /> Exception
            </span>
            <strong>
              Representative workflow visualization • No production telemetry
            </strong>
          </footer>
          <p className="workbench-caption">
            Inspired by real dispatch planning workflows in SuiteFleet. The
            interface shows map-based operations, task clustering, driver
            availability, geofences, shift status, and exception visibility
            using representative demo data.
          </p>
        </div>
      </div>
    </section>
  );
}
