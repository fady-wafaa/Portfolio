import { metrics } from "@/lib/portfolio-data";

export function MetricsSection() {
  return (
    <section className="metrics-band" aria-label="Key career metrics">
      <div className="container metrics-grid">
        {metrics.map((metric) => (
          <article
            key={metric.value}
            data-motion="metric-item"
            style={{ "--metric-accent": metric.color } as React.CSSProperties}
          >
            <strong style={{ color: metric.color }}>{metric.value}</strong>
            <span>{metric.label}</span>
            <small>{metric.note}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
