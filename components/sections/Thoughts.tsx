"use client";

import Column from "@/components/Column";
import Reveal from "@/components/Reveal";

const FRAGMENTS = [
  "most meetings should\u2019ve been documents.",
  "people confuse motion with execution.",
  "design is operational clarity.",
  "fast feedback loops change everything.",
  "systems scale. motivation doesn\u2019t.",
];

export default function Thoughts() {
  return (
    <Column id="thoughts" topPad={260}>
      <Reveal y={18} blur={10}>
        <p className="meta" style={{ marginBottom: 26 }}>
          07 — fragments
        </p>
      </Reveal>

      <ul className="flex flex-col" style={{ gap: "72px" }}>
        {FRAGMENTS.map((line, i) => (
          <Reveal key={line} delay={i * 0.08} y={20} blur={10} duration={1.3}>
            <li
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(20px, 2vw, 28px)",
                lineHeight: 1.3,
                letterSpacing: "-0.005em",
                color: "var(--primary)",
              }}
            >
              &ldquo;{line}&rdquo;
            </li>
          </Reveal>
        ))}
      </ul>
    </Column>
  );
}
