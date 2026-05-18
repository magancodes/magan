"use client";

import Column from "@/components/Column";
import Reveal from "@/components/Reveal";
import SplitTextReveal from "@/components/SplitTextReveal";

export default function Philosophy() {
  return (
    <Column id="philosophy" topPad={260}>
      <Reveal y={18} blur={10}>
        <p className="meta" style={{ marginBottom: 22 }}>
          05 — philosophy
        </p>
      </Reveal>

      <SplitTextReveal
        as="h2"
        className="section-title"
        text={"chaos wastes human potential."}
        splitBy="word"
        stagger={0.05}
      />

      <Reveal delay={0.18}>
        <p className="body-text mt-12">i care deeply about systems.</p>
      </Reveal>

      <Reveal delay={0.26}>
        <p className="body-text mt-7">
          good systems remove friction.
          <br />
          <span className="muted">bad systems drain energy.</span>
        </p>
      </Reveal>

      <Reveal delay={0.34}>
        <p className="body-text mt-7">
          whether it&apos;s operations, software, onboarding, workflows, or
          communication — i like building structures that make execution feel
          effortless.
        </p>
      </Reveal>

      <Reveal delay={0.44}>
        <p
          className="mt-14"
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "clamp(18px, 1.6vw, 24px)",
            lineHeight: 1.4,
            color: "var(--primary)",
          }}
        >
          i think speed is a competitive advantage.
        </p>
      </Reveal>
    </Column>
  );
}
