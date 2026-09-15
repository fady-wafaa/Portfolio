"use client";

import { Check, Share2 } from "lucide-react";
import { useState } from "react";

export function SharePortfolio({ compact = false }: { compact?: boolean }) {
  const [copied, setCopied] = useState(false);
  async function share() {
    const data = { title: "Fady Wafa Nagy — Frontend Software Engineer", text: "Frontend Software Engineer specializing in React, Next.js, TypeScript, scalable SaaS architecture and frontend performance.", url: window.location.href };
    try {
      if (navigator.share) await navigator.share(data);
      else { await navigator.clipboard.writeText(data.url); setCopied(true); window.setTimeout(() => setCopied(false), 2200); }
    } catch (error) { if (error instanceof DOMException && error.name === "AbortError") return; }
  }
  return <button className={`button button-share ${compact ? "small" : ""}`} type="button" onClick={share} aria-live="polite">{copied ? <Check size={15} /> : <Share2 size={15} />}{copied ? "Link copied" : compact ? "Share" : "Share Portfolio"}</button>;
}
