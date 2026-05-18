"use client";

import Column from "@/components/Column";
import Reveal from "@/components/Reveal";
import SplitTextReveal from "@/components/SplitTextReveal";

export default function InterIIT() {
  return (
    <Column id="inter-iit" topPad={260}>
      <Reveal y={18} blur={10}>
        <p className="meta" style={{ marginBottom: 22 }}>
          02 — inter iit tech meet 14.0
        </p>
      </Reveal>

      <div className="section-title">
        <SplitTextReveal
          as="span"
          className="block"
          text="2000 people."
          splitBy="word"
          stagger={0.05}
        />
        <SplitTextReveal
          as="span"
          className="block"
          text="23 IITs."
          splitBy="word"
          stagger={0.05}
          delay={0.12}
        />
        <SplitTextReveal
          as="span"
          className="block"
          text="one shot."
          splitBy="word"
          stagger={0.05}
          delay={0.24}
        />
      </div>

      <Reveal delay={0.2}>
        <p className="body-text mt-12">
          i led inter iit tech meet 14.0 at iit patna.
        </p>
      </Reveal>

      <Reveal delay={0.28}>
        <p className="body-text mt-7">
          managed cross functional teams across operations, logistics,
          hospitality, design, outreach, and execution.
        </p>
      </Reveal>

      <Reveal delay={0.36}>
        <p className="body-text mt-7">
          handled{" "}
          <span style={{ color: "var(--primary)" }}>₹1cr+</span> in operations
          and coordinated with partners including adobe, isro, eternal, and
          pathway ai.
        </p>
      </Reveal>

      <Reveal delay={0.44}>
        <p className="body-text mt-7 muted">
          the entire experience trained me to operate under pressure without
          slowing down.
        </p>
      </Reveal>
    </Column>
  );
}
