"use client";

import Link from "next/link";
import Column from "@/components/Column";
import Reveal from "@/components/Reveal";
import SplitTextReveal from "@/components/SplitTextReveal";

const APPLICATIONS = [
  {
    label: "oximy gtm",
    href: "/oximy-gtm",
    blurb: "build intelligence before you scale outreach.",
  },
  {
    label: "crustdata application",
    href: "/crustdata-application",
    blurb: "ai native builder you need.",
  },
  {
    label: "realtell gtm",
    href: "/realtell-gtm",
    blurb: "voice systems, growth systems, leverage.",
  },
  {
    label: "runable",
    href: "/runable-pls-hire-me",
    blurb: "ship fast. fix what's broken. want in.",
  },
];

export default function Applications() {
  return (
    <Column id="applications" topPad={260}>
      <Reveal y={18} blur={10}>
        <p className="meta" style={{ marginBottom: 22 }}>
          08 — applications
        </p>
      </Reveal>

      <SplitTextReveal
        as="h2"
        className="section-title accent--blue"
        text={"wanna see me apply?"}
        splitBy="word"
        stagger={0.05}
      />

      <Reveal delay={0.18}>
        <p className="body-text mt-12 muted">
          role-specific pages. same person, different thesis each time.
        </p>
      </Reveal>

      <ul
        className="mt-14 flex flex-col"
        style={{ gap: "28px" }}
        aria-label="application pages"
      >
        {APPLICATIONS.map((app, i) => (
          <Reveal key={app.href} delay={0.28 + i * 0.08}>
            <li
              style={{
                borderTop: "1px solid var(--line)",
                paddingTop: 18,
              }}
            >
              <Link className="link" href={app.href} data-cursor="link">
                {app.label}
              </Link>
              <p
                className="body-text mt-3 muted"
                style={{ fontSize: 14.5, lineHeight: 1.6 }}
              >
                {app.blurb}
              </p>
            </li>
          </Reveal>
        ))}
      </ul>
    </Column>
  );
}
