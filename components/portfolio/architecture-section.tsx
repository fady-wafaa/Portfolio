import { architectureSteps } from "@/lib/portfolio-data";
import { SectionTitle } from "@/components/portfolio/section-title";

export function ArchitectureSection() {
  return (
    <section id="architecture" className="section section-darker section-grid">
      <div className="container">
        <SectionTitle
          eyebrow="System modernization"
          title="Architectural Evolution: Modernizing the SaaS Core"
          copy="A structured progression from a legacy React frontend toward a typed, modular and maintainable system."
        />
        <div className="evolution">
          {architectureSteps.map(([number, title, copy]) => (
            <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
        <div className="architecture-notes">
          <article>
            <h3><span>—</span> Legacy constraints</h3>
            <ul>
              <li>Large modules increased the cost of change.</li>
              <li>Changing API shapes were harder to trace safely.</li>
              <li>Shared state could trigger broader rendering work.</li>
            </ul>
          </article>
          <article>
            <h3><span>+</span> Modernized practices</h3>
            <ul>
              <li>Typed REST contracts reveal mismatches earlier.</li>
              <li>Feature boundaries improve independent delivery.</li>
              <li>Reusable foundations reduce repeated implementation.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
