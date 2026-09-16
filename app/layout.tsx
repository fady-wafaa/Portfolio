import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fady Wafa Nagy | Frontend Software Engineer",
  description: "Frontend Software Engineer specializing in React, Next.js, TypeScript, scalable SaaS architecture, data-heavy interfaces and frontend performance.",
  keywords: ["Frontend Software Engineer", "React", "Next.js", "TypeScript", "SaaS", "Frontend Architecture"],
  authors: [{ name: "Fady Wafa Nagy" }],
  robots: { index: true, follow: true },
  openGraph: { title: "Fady Wafa Nagy — Frontend Software Engineer", description: "Scalable SaaS interfaces, architecture modernization and frontend performance.", type: "profile" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = { "@context": "https://schema.org", "@type": "Person", name: "Fady Wafa Nagy", jobTitle: "Frontend Software Engineer", url: "https://www.linkedin.com/in/fady-wafa/", sameAs: ["https://github.com/fady-wafaa", "https://www.linkedin.com/in/fady-wafa/"] };
  const themeScript = `try{const t=localStorage.getItem("portfolio-theme");const p=window.matchMedia("(prefers-color-scheme: light)").matches;if(t==="light"||(!t&&p)){document.documentElement.classList.add("light")}}catch{}`;

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
