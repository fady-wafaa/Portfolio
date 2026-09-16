import { ContactSection } from "@/components/portfolio/contact-section";
import { PortfolioMotion } from "@/components/portfolio/portfolio-motion";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { PortfolioFooter } from "@/components/portfolio/footer";
import { HeroSection } from "@/components/portfolio/hero-section";
import { MetricsSection } from "@/components/portfolio/metrics-section";
import { PortfolioNav } from "@/components/portfolio/nav";
import { PerformanceSection } from "@/components/portfolio/performance-section";
import { StackSection } from "@/components/portfolio/stack-section";
import { SuiteFleetSection } from "@/components/portfolio/suitefleet-section";

export default function Home() {
  return (
    <main>
      <PortfolioMotion />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <PortfolioNav />
      <div id="main-content">
        <HeroSection />
        <MetricsSection />
        <SuiteFleetSection />
        {/* <ArchitectureSection /> */}
        <PerformanceSection />
        <ExperienceSection />
        <StackSection />
        <ContactSection />
      </div>
      <PortfolioFooter />
    </main>
  );
}
