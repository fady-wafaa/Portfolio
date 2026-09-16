import { stack } from "@/lib/portfolio-data";
import { SectionTitle } from "@/components/portfolio/section-title";

export function StackSection() {
  return (
    <section id="stack" className="section section-grid">
      <div className="container" data-motion="reveal">
        <div data-motion="reveal-item">
          <SectionTitle
            eyebrow="System responsibilities"
            title="Technical Stack by Engineering Responsibility"
            copy="A practical stack organized around the work it enables—not a wall of technology logos."
          />
        </div>
        <div className="stack-grid">
          {stack.map(({ icon: Icon, title, subtitle, items }) => (
            <article
              key={title}
              className="stack-card"
              data-motion="stack-card"
            >
              <span className="stack-card-accent" aria-hidden="true" />
              <Icon size={20} strokeWidth={1.75} />
              <h3>{title}</h3>
              <p className="stack-card-subtitle">{subtitle}</p>
              <div className="stack-chips">
                {items.map((item) => (
                  <span key={item} data-motion="stack-chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
