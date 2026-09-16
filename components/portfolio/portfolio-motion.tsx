"use client";

import { useEffect } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const REVEAL_OPTIONS: IntersectionObserverInit = {
  threshold: 0.12,
  rootMargin: "0px 0px -6% 0px",
};

export function PortfolioMotion() {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    document.documentElement.classList.add("has-js");
    if (reducedMotion) {
      document.documentElement.classList.add("reduced-motion");
    } else {
      document.documentElement.classList.remove("reduced-motion");
    }
  }, [reducedMotion]);

  useEffect(() => {
    const nav = document.querySelector(".nav-shell");
    if (!nav) return;

    const onScroll = () => {
      nav.classList.toggle("nav-scrolled", window.scrollY > 16);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let disposed = false;
    let gsapCtx: { revert: () => void } | undefined;
    const observers: IntersectionObserver[] = [];

    async function init() {
      const { gsap } = await import("gsap");
      if (disposed) return;

      gsapCtx = gsap.context(() => {
        if (reducedMotion) {
          gsap.set("[data-motion]", { opacity: 1, y: 0, clearProps: "transform" });
          document.querySelectorAll("[data-motion]").forEach((el) => {
            el.classList.add("motion-in");
          });
          document.querySelectorAll("[data-workbench]").forEach((el) => {
            el.setAttribute("data-workbench-live", "true");
          });
          return;
        }

        const isMobile = window.matchMedia("(max-width: 720px)").matches;
        const heroStagger = isMobile ? 0.04 : 0.06;
        const revealY = isMobile ? 16 : 24;
        const revealDuration = isMobile ? 0.45 : 0.6;

        const heroTimeline = gsap.timeline({ defaults: { ease: "power2.out" } });
        heroTimeline
          .from("[data-motion='nav']", { opacity: 0, y: -10, duration: 0.32 })
          .from("[data-motion='hero-label']", { opacity: 0, y: 14, duration: 0.28 }, "-=0.12")
          .from(
            "[data-motion='hero-headline'] .hero-line",
            { opacity: 0, y: 18, duration: 0.32, stagger: 0.07 },
            "-=0.08",
          )
          .from("[data-motion='hero-lede']", { opacity: 0, y: 14, duration: 0.28 }, "-=0.1")
          .from(
            "[data-motion='hero-actions'] > *",
            { opacity: 0, y: 10, duration: 0.24, stagger: heroStagger },
            "-=0.08",
          )
          .from("[data-motion='hero-panel']", { opacity: 0, y: 20, duration: 0.36 }, "-=0.18")
          .from(
            "[data-motion='metric-item']",
            { opacity: 0, y: 14, duration: 0.3, stagger: heroStagger },
            "-=0.16",
          );

        if (heroTimeline.duration() > 1.2) {
          heroTimeline.timeScale(heroTimeline.duration() / 1.2);
        }

        const revealSection = (target: Element) => {
          if (target.classList.contains("motion-in")) return;
          target.classList.add("motion-in");

          gsap.fromTo(
            target,
            { opacity: 0, y: revealY },
            { opacity: 1, y: 0, duration: revealDuration, ease: "power2.out" },
          );

          const items = target.querySelectorAll(":scope [data-motion='reveal-item']");
          if (items.length) {
            gsap.fromTo(
              items,
              { opacity: 0, y: isMobile ? 12 : 16 },
              {
                opacity: 1,
                y: 0,
                duration: isMobile ? 0.4 : 0.52,
                stagger: isMobile ? 0.04 : 0.07,
                ease: "power2.out",
                delay: 0.08,
              },
            );
          }

          const stackCards = target.querySelectorAll(":scope [data-motion='stack-card']");
          if (stackCards.length) {
            gsap.fromTo(
              stackCards,
              { opacity: 0, y: isMobile ? 14 : 20 },
              {
                opacity: 1,
                y: 0,
                duration: isMobile ? 0.42 : 0.55,
                stagger: isMobile ? 0.05 : 0.08,
                ease: "power2.out",
                delay: 0.1,
              },
            );

            stackCards.forEach((card, index) => {
              const chips = card.querySelectorAll("[data-motion='stack-chip']");
              if (!chips.length) return;
              gsap.fromTo(
                chips,
                { opacity: 0, y: 6 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.28,
                  stagger: 0.025,
                  ease: "power2.out",
                  delay: 0.14 + index * 0.04,
                },
              );
            });
          }
        };

        const revealWorkbench = (target: Element) => {
          target.setAttribute("data-workbench-live", "true");

          const rows = target.querySelectorAll("[data-motion='workbench-row']");
          if (!rows.length) return;

          gsap.fromTo(
            rows,
            { opacity: 0, x: -8 },
            {
              opacity: 1,
              x: 0,
              duration: 0.38,
              stagger: isMobile ? 0.03 : 0.05,
              ease: "power2.out",
              delay: 0.12,
              onComplete: () => {
                rows.forEach((row) => row.classList.add("motion-in"));
              },
            },
          );
        };

        document.querySelectorAll("[data-motion='reveal']").forEach((section) => {
          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              observer.unobserve(entry.target);
              revealSection(entry.target);
            });
          }, REVEAL_OPTIONS);

          observer.observe(section);
          observers.push(observer);
        });

        document.querySelectorAll("[data-workbench]").forEach((workbench) => {
          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              observer.unobserve(entry.target);
              revealWorkbench(entry.target);
            });
          }, REVEAL_OPTIONS);

          observer.observe(workbench);
          observers.push(observer);
        });
      });

      document.documentElement.classList.add("motion-ready");
    }

    init();

    return () => {
      disposed = true;
      gsapCtx?.revert();
      observers.forEach((observer) => observer.disconnect());
    };
  }, [reducedMotion]);

  return null;
}
