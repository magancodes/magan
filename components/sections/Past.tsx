"use client";

import Column from "@/components/Column";
import Reveal from "@/components/Reveal";

type Role = {
  range: string;
  title: string;
  company: string;
  place: string;
  bullets: string[];
};

const ROLES: Role[] = [
  {
    range: "may 2025 — present",
    title: "founder's office",
    company: "aevis",
    place: "remote",
    bullets: [
      "investor-focused pitch decks, sales decks, and landing pages for B2B growth and fundraising.",
      "refined the core product experience based on user reviews — prioritised high-impact features.",
      "mapped user feedback into actionable product improvements across cross-functional teams.",
    ],
  },
  {
    range: "may 2024 — aug 2024",
    title: "product analyst (intern)",
    company: "vizio (now polarcut)",
    place: "remote",
    bullets: [
      "analyzed user demand and developed data-driven personas to guide product decisions.",
      "scoped, prioritised, and rolled out new features while optimising existing ones.",
      "streamlined the customer journey for a hassle-free user experience.",
    ],
  },
  {
    range: "mar 2024 — may 2024",
    title: "user research (intern)",
    company: "qlik bits llc",
    place: "remote",
    bullets: [
      "ran interviews and usability sessions to assess onboarding and engagement.",
      "built journey maps and insight reports that restructured MVP development and feature priorities.",
      "delivered actionable UX feedback grounded in qualitative research and heuristic analysis.",
    ],
  },
];

const DRIVE_HREF =
  "https://drive.google.com/drive/folders/1uFbOllheFTulmENN_tjPIZ6ntjwPHiTl";

export default function Past() {
  return (
    <Column id="past" topPad={260}>
      <Reveal y={18} blur={10}>
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <p className="meta">03 — past</p>
          <a
            href={DRIVE_HREF}
            target="_blank"
            rel="noreferrer"
            className="cta-button"
            data-cursor="link"
          >
            all decks
            <span aria-hidden style={{ fontSize: "0.9em" }}>↗</span>
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.08} y={10} blur={6}>
        <p
          className="muted mt-6"
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "clamp(18px, 1.5vw, 22px)",
            marginBottom: 36,
            lineHeight: 1.3,
          }}
        >
          everything before the current work, kept short.
        </p>
      </Reveal>

      <ul className="flex flex-col" style={{ gap: 0 }}>
        {ROLES.map((r, i) => (
          <Reveal key={r.company} delay={0.12 + i * 0.08}>
            <li
              style={{
                borderTop: "1px solid var(--line)",
                paddingTop: 22,
                paddingBottom: 26,
              }}
            >
              <p className="meta" style={{ marginBottom: 8 }}>
                {r.range}
              </p>
              <p
                className="body-text"
                style={{
                  fontSize: "clamp(16px, 1.2vw, 19px)",
                  color: "var(--primary)",
                  marginBottom: 4,
                }}
              >
                <span>{r.title}</span>{" "}
                <span className="muted">· {r.company} · {r.place}</span>
              </p>
              <ul
                className="mt-3 flex flex-col"
                style={{ gap: 6, paddingLeft: 0 }}
              >
                {r.bullets.map((b) => (
                  <li
                    key={b}
                    className="body-text muted"
                    style={{
                      fontSize: 14.5,
                      lineHeight: 1.6,
                      paddingLeft: 14,
                      position: "relative",
                    }}
                  >
                    <span
                      aria-hidden
                      style={{
                        position: "absolute",
                        left: 0,
                        top: "0.85em",
                        width: 6,
                        height: 1,
                        background: "var(--line)",
                      }}
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </li>
          </Reveal>
        ))}
      </ul>
    </Column>
  );
}
