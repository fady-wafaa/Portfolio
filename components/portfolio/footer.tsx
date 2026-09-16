import { nav } from "@/lib/portfolio-data";

export function PortfolioFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <strong>FADY WAFA NAGY</strong>
          <span>Frontend Software Engineer · React · Next.js · TypeScript</span>
        </div>
        <nav aria-label="Footer navigation">{nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
        <small>© {new Date().getFullYear()} Fady Wafa Nagy</small>
      </div>
    </footer>
  );
}
