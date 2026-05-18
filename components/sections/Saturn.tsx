"use client";

import Column from "@/components/Column";
import Reveal from "@/components/Reveal";
import SplitTextReveal from "@/components/SplitTextReveal";

const META = [
  "zero to one",
  "rapid iteration",
  "ops systems",
  "hiring",
  "product execution",
];

export default function Saturn() {
  return (
    <Column id="saturn" topPad={260}>
      <Reveal y={18} blur={10}>
        <p className="meta" style={{ marginBottom: 22 }}>
          01 — saturn labs
        </p>
      </Reveal>

      <SplitTextReveal
        as="h2"
        className="section-title accent--pink"
        text={"some problems don\u2019t come with job descriptions."}
        splitBy="word"
        stagger={0.04}
      />

      <Reveal delay={0.15}>
        <p className="body-text mt-12">
          at saturn labs, i worked as an extension of the founding team across
          product, operations, hiring, and execution.
        </p>
      </Reveal>

      <Reveal delay={0.22}>
        <p className="body-text mt-7">
          i built internal systems connecting field operations with backend
          workflows.
        </p>
      </Reveal>

      <Reveal delay={0.3}>
        <p className="body-text mt-7">
          most days involved solving ambiguous problems with unrealistic
          timelines.
        </p>
      </Reveal>

      <Reveal delay={0.38}>
        <p className="body-text mt-7 muted">
          sometimes the gap between idea and deployment was less than a day.
        </p>
      </Reveal>

      <Reveal delay={0.5}>
        <ul
          className="mt-14 flex flex-wrap gap-x-6 gap-y-3 border-t pt-8"
          style={{ borderColor: "var(--line)" }}
        >
          {META.map((tag) => (
            <li key={tag} className="meta">
              {tag}
            </li>
          ))}
        </ul>
      </Reveal>
    </Column>
  );
}
