"use client";

import Column from "@/components/Column";
import Reveal from "@/components/Reveal";
import SplitTextReveal from "@/components/SplitTextReveal";

export default function Intro() {
  return (
    <Column id="intro" topPad={160}>
      <Reveal y={18} blur={10}>
        <p className="meta" style={{ marginBottom: 24 }}>
          00 — hello
        </p>
      </Reveal>

      {/* the giant moment: serif, titlecase, light weight, dominates the column */}
      <SplitTextReveal
        as="h1"
        className="intro-greeting"
        text={"Hey, I am Magan."}
        splitBy="word"
        stagger={0.06}
      />

      <Reveal delay={0.5} y={10} blur={6}>
        <p
          className="mt-10"
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "clamp(17px, 1.4vw, 22px)",
            letterSpacing: "0.005em",
            color: "var(--secondary)",
            lineHeight: 1.4,
          }}
        >
          i build systems for chaotic environments.
        </p>
      </Reveal>

      <Reveal delay={0.62}>
        <p className="body-text mt-14">
          i work across product, operations, design, and systems.
        </p>
      </Reveal>

      <Reveal delay={0.72}>
        <p className="body-text mt-8">
          most of my work lives in fast moving environments where ambiguity is
          normal and speed matters more than presentations.
        </p>
      </Reveal>

      <Reveal delay={0.82}>
        <p className="body-text mt-8">
          i like solving operational chaos, turning messy workflows into
          systems, and shipping before people finish discussing.
        </p>
      </Reveal>

      <Reveal delay={0.95}>
        <div className="mt-14">
          <p className="meta" style={{ marginBottom: 14 }}>
            currently
          </p>
          <ul className="space-y-[10px]">
            <li className="body-text" style={{ fontSize: 15 }}>
              founder&apos;s office at{" "}
              <span style={{ color: "var(--primary)" }}>saturn labs</span>
              <span className="muted"> · bangalore</span>
            </li>
            <li className="body-text" style={{ fontSize: 15 }}>
              founder&apos;s office at{" "}
              <span style={{ color: "var(--primary)" }}>aevis</span>
              <span className="muted"> · remote</span>
            </li>
            <li className="body-text" style={{ fontSize: 15 }}>
              building{" "}
              <a
                className="link"
                href="https://trxnd.io"
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
              >
                trxnd.io
              </a>
              <span className="muted">
                {" "}— content engines &amp; marketing systems
              </span>
            </li>
            <li className="body-text" style={{ fontSize: 15 }}>
              overall convener, inter iit tech meet 14.0
            </li>
          </ul>
        </div>
      </Reveal>

      <Reveal delay={1.1}>
        <div
          className="mt-12 flex flex-wrap items-center"
          style={{ gap: "10px 18px" }}
        >
          {[
            "founder's office",
            "product systems",
            "operations",
            "design",
            "shipping things fast",
          ].map((tag) => (
            <span
              key={tag}
              className="meta"
              style={{
                borderLeft: "1px solid var(--line)",
                paddingLeft: 12,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal delay={1.2}>
        <p className="meta mt-12" style={{ opacity: 0.7 }}>
          iit patna · math + computing · b.tech &apos;28
        </p>
      </Reveal>
    </Column>
  );
}
