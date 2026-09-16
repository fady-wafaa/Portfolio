import { ArrowRight } from "lucide-react";
import { performanceCards } from "@/lib/portfolio-data";
import { SectionTitle } from "@/components/portfolio/section-title";

export function PerformanceSection() {
  return (
    <section id="performance" className="section section-grid">
      <div className="container" data-motion="reveal">
        <div data-motion="reveal-item">
          <SectionTitle
            eyebrow="Performance engineering"
            title="+20% Application Performance Improvement"
            copy="Targeted optimization across loading, caching, bundle delivery and data-heavy rendering."
          />
        </div>
        <div className="performance-flow" data-motion="reveal-item">
          <article><span>BEFORE</span><h3>Legacy frontend</h3><p>Large initial bundles, repeated work and expensive interface updates.</p></article>
          <ArrowRight aria-hidden />
          <article className="performance-main"><span>OPTIMIZATION</span><h3>Code Splitting · Caching · AG Grid</h3><p>Route-aware loading, lazy boundaries, bundle optimization, improved rendering and smarter server-side data strategies.</p></article>
          <ArrowRight aria-hidden />
          <article className="performance-result"><span>RESULT</span><strong>+20%</strong><h3>Performance uplift</h3></article>
        </div>
        <div className="performance-cards">
          {performanceCards.map(([title, copy], index) => (
            <article key={title} data-motion="reveal-item"><span>{`0${index + 1}`}</span><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </div>
    </section>
  );
}
