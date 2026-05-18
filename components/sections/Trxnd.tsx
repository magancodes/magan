"use client";

import Column from "@/components/Column";
import Reveal from "@/components/Reveal";
import SplitTextReveal from "@/components/SplitTextReveal";

type Stack = {
  label: string;
  href: string;
  blurb: string;
};

const STACK: Stack[] = [
  {
    label: "trxnd.io",
    href: "https://trxnd.io",
    blurb:
      "the platform. shared & dedicated social profiles across x, reddit, instagram, tiktok, linkedin. orchestrated conversations, narrative control, and ugc video at scale.",
  },
  {
    label: "app.trxnd.io",
    href: "https://app.trxnd.io",
    blurb:
      "the product surface. account orchestration, campaign scheduling, and analytics. where the engine actually runs.",
  },
  {
    label: "reddit.trxnd.io",
    href: "https://reddit.trxnd.io",
    blurb:
      "ai reddit analyzer. scans thousands of subreddits for buying-intent conversations and drafts contextual, non-spammy replies. warm leads instead of cold outreach.",
  },
];

export default function Trxnd() {
  return (
    <Column id="trxnd" topPad={260}>
      <Reveal y={18} blur={10}>
        <p className="meta" style={{ marginBottom: 22 }}>
          04 — content engines &amp; marketing hacks
        </p>
      </Reveal>

      <SplitTextReveal
        as="h2"
        className="section-title accent--orange"
        text={"distribution is a system, not a vibe."}
        splitBy="word"
        stagger={0.04}
      />

      <Reveal delay={0.18}>
        <p className="body-text mt-12">
          most products don&apos;t fail at the build. they fail at the
          distribution. trxnd is the kit i&apos;m building to fix that — content
          engines, orchestrated conversations, and warm-lead pipelines that run
          on their own.
        </p>
      </Reveal>

      <Reveal delay={0.28}>
        <p className="body-text mt-7 muted">
          three surfaces. one thesis: founders should ship and the marketing
          should compound in the background.
        </p>
      </Reveal>

      <ul
        className="mt-14 flex flex-col"
        style={{ gap: "28px" }}
        aria-label="trxnd surfaces"
      >
        {STACK.map((s, i) => (
          <Reveal key={s.label} delay={0.32 + i * 0.08}>
            <li
              style={{
                borderTop: "1px solid var(--line)",
                paddingTop: 18,
              }}
            >
              <a
                className="project-link"
                href={s.href}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
              >
                {s.label}
              </a>
              <p
                className="body-text mt-3 muted"
                style={{ fontSize: 14.5, lineHeight: 1.6 }}
              >
                {s.blurb}
              </p>
            </li>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={0.7} y={10} blur={6}>
        <p
          className="mt-14 muted"
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "clamp(16px, 1.2vw, 19px)",
            letterSpacing: "0.005em",
          }}
        >
          shipped quietly. talked about loudly. that&apos;s the order.
        </p>
      </Reveal>
    </Column>
  );
}
