"use client";

import { useEffect } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const REVEAL_OPTIONS: IntersectionObserverInit = {
  threshold: [0, 0.08, 0.18, 0.32],
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
          gsap.set("[data-motion]", { opacity: 1, x: 0, y: 0, clearProps: "transform" });
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

        const heroTargets = [
          "[data-motion='hero-label']",
          "[data-motion='hero-headline'] .hero-line",
          "[data-motion='hero-lede']",
          "[data-motion='hero-actions'] > *",
          "[data-motion='hero-panel']",
        ];

        const heroIn = () => {
          const timeline = gsap.timeline({ defaults: { ease: "power2.out", overwrite: "auto" } });
          timeline
            .to("[data-motion='hero-label']", { opacity: 1, y: 0, duration: 0.28 })
            .to(
              "[data-motion='hero-headline'] .hero-line",
              { opacity: 1, y: 0, duration: 0.32, stagger: 0.07 },
              "-=0.1",
            )
            .to("[data-motion='hero-lede']", { opacity: 1, y: 0, duration: 0.28 }, "-=0.08")
            .to(
              "[data-motion='hero-actions'] > *",
              { opacity: 1, y: 0, duration: 0.24, stagger: heroStagger },
              "-=0.06",
            )
            .to("[data-motion='hero-panel']", { opacity: 1, y: 0, duration: 0.36 }, "-=0.14");

          if (timeline.duration() > 1.2) {
            timeline.timeScale(timeline.duration() / 1.2);
          }
        };

        const heroOut = () => {
          gsap.to(heroTargets, {
            opacity: 0,
            y: isMobile ? -10 : -16,
            duration: isMobile ? 0.22 : 0.28,
            stagger: 0.015,
            ease: "power2.out",
            overwrite: "auto",
          });
        };

        const revealSection = (target: Element) => {
          if (target.classList.contains("motion-in")) return;
          target.classList.add("motion-in");
          gsap.fromTo(
            target,
            { opacity: 0, y: revealY },
            {
              opacity: 1,
              y: 0,
              duration: revealDuration,
              ease: "power2.out",
              overwrite: "auto",
            },
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
                overwrite: "auto",
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
                overwrite: "auto",
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
                  overwrite: "auto",
                },
              );
            });
          }
        };

        const hideSection = (target: Element) => {
          if (!target.classList.contains("motion-in")) return;
          target.classList.remove("motion-in");

          const childItems = target.querySelectorAll(
            ":scope [data-motion='reveal-item'], :scope [data-motion='stack-card'], :scope [data-motion='stack-chip']",
          );

          gsap.to(childItems, {
            opacity: 0,
            y: isMobile ? -8 : -12,
            duration: isMobile ? 0.18 : 0.24,
            stagger: 0.01,
            ease: "power2.out",
            overwrite: "auto",
          });

          gsap.to(target, {
            opacity: 0,
            y: isMobile ? -12 : -18,
            duration: isMobile ? 0.22 : 0.28,
            ease: "power2.out",
            overwrite: "auto",
          });
        };

        const revealWorkbench = (target: Element) => {
          if (target.hasAttribute("data-workbench-live")) return;
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
              overwrite: "auto",
              onComplete: () => {
                rows.forEach((row) => row.classList.add("motion-in"));
              },
            },
          );
        };

        const hideWorkbench = (target: Element) => {
          target.removeAttribute("data-workbench-live");
          const rows = target.querySelectorAll("[data-motion='workbench-row']");
          rows.forEach((row) => row.classList.remove("motion-in"));
          gsap.to(rows, {
            opacity: 0,
            x: isMobile ? 6 : 8,
            duration: 0.2,
            stagger: 0.01,
            ease: "power2.out",
            overwrite: "auto",
          });
        };

        gsap.set("[data-motion='nav']", { opacity: 1, y: 0 });
        gsap.from("[data-motion='nav']", { opacity: 0, y: -10, duration: 0.32, ease: "power2.out" });
        gsap.set("[data-motion='metric-item']", { opacity: 1, y: 0 });
        gsap.from("[data-motion='metric-item']", {
          opacity: 0,
          y: 14,
          duration: 0.3,
          stagger: heroStagger,
          ease: "power2.out",
          delay: 0.7,
        });
        heroIn();

        const hero = document.querySelector(".hero");
        if (hero) {
          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && entry.intersectionRatio > 0.18) {
                heroIn();
              } else if (!entry.isIntersecting || entry.intersectionRatio < 0.08) {
                heroOut();
              }
            });
          }, REVEAL_OPTIONS);

          observer.observe(hero);
          observers.push(observer);
        }

        document.querySelectorAll("[data-motion='reveal']").forEach((section) => {
          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && entry.intersectionRatio > 0.18) {
                revealSection(entry.target);
              } else if (!entry.isIntersecting || entry.intersectionRatio < 0.08) {
                hideSection(entry.target);
              }
            });
          }, REVEAL_OPTIONS);

          observer.observe(section);
          observers.push(observer);
        });

        document.querySelectorAll("[data-workbench]").forEach((workbench) => {
          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && entry.intersectionRatio > 0.18) {
                revealWorkbench(entry.target);
              } else if (!entry.isIntersecting || entry.intersectionRatio < 0.08) {
                hideWorkbench(entry.target);
              }
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
