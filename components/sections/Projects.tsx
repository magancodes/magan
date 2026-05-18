"use client";

import Column from "@/components/Column";
import Reveal from "@/components/Reveal";

type Project = {
  label: string;
  href: string;
  context: string;
  date: string;
};

const PROJECTS: Project[] = [
  {
    label: "solar panel waste forecasting",
    href: "https://drive.google.com/file/d/1RkD31eMZ1FXpfwE0xq01d6kkeZ3MsKE_/view?usp=sharing",
    context: "inter iit tech meet 13.0 · deck",
    date: "dec 2024",
  },
  {
    label: "oneiitp app — prd & teardown",
    href: "https://drive.google.com/file/d/1uDekUnMIXezkPgUOCqKLqOKDs6IvxKXu/view?usp=sharing",
    context: "ictc tech championship · deck",
    date: "jan 2025",
  },
  {
    label: "employee analytics dashboard",
    href: "https://github.com/magancodes/Employee-dashboard-sql-tableu",
    context: "sql + tableau · source",
    date: "feb 2025",
  },
];

export default function Projects() {
  return (
    <Column id="projects" topPad={260}>
      <Reveal y={18} blur={10}>
        <p className="meta" style={{ marginBottom: 22 }}>
          06 — selected work
        </p>
      </Reveal>

      <Reveal delay={0.08} y={10} blur={6}>
        <p
          className="muted"
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "clamp(18px, 1.5vw, 22px)",
            marginBottom: 36,
            lineHeight: 1.3,
          }}
        >
          a few things i&apos;ve shipped, modeled, or torn apart.
        </p>
      </Reveal>

      <ul className="flex flex-col" style={{ gap: "26px" }}>
        {PROJECTS.map((p, i) => (
          <Reveal key={p.label} delay={i * 0.08}>
            <li>
              <a
                className="project-link"
                href={p.href}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
              >
                {p.label}
              </a>
              <div
                className="meta mt-2 flex flex-wrap gap-x-3"
                style={{ opacity: 0.85 }}
              >
                <span>{p.context}</span>
                <span aria-hidden style={{ opacity: 0.5 }}>·</span>
                <span>{p.date}</span>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={0.45}>
        <div
          className="mt-14"
          style={{
            borderTop: "1px solid var(--line)",
            paddingTop: 18,
          }}
        >
          <a
            className="link"
            href="https://drive.google.com/drive/folders/1uFbOllheFTulmENN_tjPIZ6ntjwPHiTl"
            target="_blank"
            rel="noreferrer"
            data-cursor="link"
            style={{ fontSize: 15 }}
          >
            full archive — decks, dashboards, teardowns
          </a>
          <p className="meta mt-2" style={{ opacity: 0.6 }}>
            google drive · everything else
          </p>
        </div>
      </Reveal>
    </Column>
  );
}
