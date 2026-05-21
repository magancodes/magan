"use client";

import Link from "next/link";
import Column from "@/components/Column";
import Reveal from "@/components/Reveal";
import SplitTextReveal from "@/components/SplitTextReveal";

const CONTACT_LINKS = [
  { label: "github", href: "https://github.com/magancodes" },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/maganjot-singh-aa80a5214",
  },
  { label: "email", href: "mailto:maganjot_2302mc06@iitp.ac.in" },
];

type ProjectLink = { label: string; href: string };

type Project = {
  title: string;
  thesis: string;
  stack: string;
  links?: ProjectLink[];
};

const PROJECTS: Project[] = [
  {
    title: "IronClaw",
    thesis:
      "multi-agent android automation using accessibility trees, not apis.",
    stack: "fastapi · react · multi-agent",
    links: [{ label: "github", href: "https://github.com/magancodes/IronClaw" }],
  },
  {
    title: "SpeakLingo",
    thesis:
      "real-time voice cloning translator, sub-545ms latency on live calls.",
    stack: "webrtc · redis · gemini · qwen-tts",
  },
  {
    title: "Mini-vLLM",
    thesis:
      "inference engine from scratch, because i wanted to understand serving.",
    stack: "kv-cache optimization · grpc · observability",
  },
  {
    title: "CiteAgent",
    thesis:
      "agentic rag for causal extraction. 5th at inter-iit tech meet 14.0.",
    stack: "langgraph · reranking · llm judges",
  },
  {
    title: "SoulScript",
    thesis:
      "ai wellness platform with real-time avatars and memory systems.",
    stack: "1000+ concurrent users",
  },
];

function HeroSettingsIcon() {
  return (
    <span className="crustdata-section-icon crustdata-hero-icon" aria-hidden>
      <svg
        width={28}
        height={28}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    </span>
  );
}

function SectionMeta({ num, label }: { num: string; label: string }) {
  return (
    <p
      className="meta crustdata-system-label"
      style={{ marginBottom: 24, letterSpacing: "0.04em" }}
    >
      [ {num} / {label} ]
    </p>
  );
}

function SignalRankingFlowchart() {
  return (
    <div className="crustdata-flowchart" aria-label="adaptive signal ranking layer architecture">
      <p className="crustdata-flowchart-label meta crustdata-system-label">
        system spec · adaptive signal ranking
      </p>
      <svg viewBox="0 0 520 720" role="img" aria-hidden>
        <title>adaptive signal ranking layer flow</title>

        {/* crustdata apis */}
        <rect className="crustdata-flow-node crustdata-flow-node--accent" x="160" y="8" width="200" height="40" rx="2" />
        <text className="crustdata-flow-text crustdata-flow-text--accent" x="260" y="33" textAnchor="middle">
          crustdata apis
        </text>

        <line className="crustdata-flow-line" x1="260" y1="48" x2="260" y2="72" />
        <polygon className="crustdata-flow-arrow" points="260,72 256,64 264,64" />

        {/* signal ingestion */}
        <rect className="crustdata-flow-node" x="140" y="76" width="240" height="40" rx="2" />
        <text className="crustdata-flow-text" x="260" y="101" textAnchor="middle">
          signal ingestion
        </text>
        <text className="crustdata-flow-text crustdata-flow-text--muted" x="260" y="128" textAnchor="middle">
          hiring · company updates · people movement · triggers
        </text>

        <line className="crustdata-flow-line" x1="260" y1="136" x2="260" y2="160" />
        <polygon className="crustdata-flow-arrow" points="260,160 256,152 264,152" />

        {/* scoring layer */}
        <rect className="crustdata-flow-node crustdata-flow-node--accent" x="100" y="164" width="320" height="44" rx="2" />
        <text className="crustdata-flow-text crustdata-flow-text--accent" x="260" y="191" textAnchor="middle">
          scoring layer
        </text>

        <line className="crustdata-flow-line" x1="260" y1="208" x2="260" y2="232" />
        <polygon className="crustdata-flow-arrow" points="260,232 256,224 264,224" />

        {/* scoring sub-nodes */}
        <rect className="crustdata-flow-node" x="24" y="236" width="108" height="36" rx="2" />
        <text className="crustdata-flow-text" x="78" y="258" textAnchor="middle">
          buying intent
        </text>

        <rect className="crustdata-flow-node" x="144" y="236" width="108" height="36" rx="2" />
        <text className="crustdata-flow-text" x="198" y="258" textAnchor="middle">
          urgency
        </text>

        <rect className="crustdata-flow-node" x="264" y="236" width="108" height="36" rx="2" />
        <text className="crustdata-flow-text" x="318" y="258" textAnchor="middle">
          anomalies
        </text>

        <rect className="crustdata-flow-node" x="384" y="236" width="108" height="36" rx="2" />
        <text className="crustdata-flow-text" x="438" y="258" textAnchor="middle">
          momentum
        </text>

        <line className="crustdata-flow-line" x1="78" y1="272" x2="78" y2="296" />
        <line className="crustdata-flow-line" x1="198" y1="272" x2="198" y2="296" />
        <line className="crustdata-flow-line" x1="318" y1="272" x2="318" y2="296" />
        <line className="crustdata-flow-line" x1="438" y1="272" x2="438" y2="296" />
        <line className="crustdata-flow-line" x1="78" y1="296" x2="438" y2="296" />
        <line className="crustdata-flow-line" x1="260" y1="296" x2="260" y2="320" />
        <polygon className="crustdata-flow-arrow" points="260,320 256,312 264,312" />

        {/* clustering */}
        <rect className="crustdata-flow-node" x="140" y="324" width="240" height="40" rx="2" />
        <text className="crustdata-flow-text" x="260" y="349" textAnchor="middle">
          event clustering
        </text>
        <text className="crustdata-flow-text crustdata-flow-text--muted" x="260" y="376" textAnchor="middle">
          related signals → momentum scores · decay
        </text>

        <line className="crustdata-flow-line" x1="260" y1="384" x2="260" y2="408" />
        <polygon className="crustdata-flow-arrow" points="260,408 256,400 264,400" />

        {/* ranking */}
        <rect className="crustdata-flow-node crustdata-flow-node--accent" x="140" y="412" width="240" height="40" rx="2" />
        <text className="crustdata-flow-text crustdata-flow-text--accent" x="260" y="437" textAnchor="middle">
          adaptive ranking
        </text>

        <line className="crustdata-flow-line" x1="260" y1="452" x2="260" y2="476" />
        <polygon className="crustdata-flow-arrow" points="260,476 256,468 264,468" />

        {/* actionable output */}
        <rect className="crustdata-flow-node crustdata-flow-node--output" x="100" y="480" width="320" height="44" rx="2" />
        <text className="crustdata-flow-text crustdata-flow-text--accent" x="260" y="507" textAnchor="middle">
          actionable output
        </text>

        <line className="crustdata-flow-line" x1="260" y1="524" x2="260" y2="548" />
        <polygon className="crustdata-flow-arrow" points="260,548 256,540 264,540" />

        {/* output sub-nodes */}
        <rect className="crustdata-flow-node" x="24" y="552" width="148" height="36" rx="2" />
        <text className="crustdata-flow-text" x="98" y="574" textAnchor="middle">
          what matters now
        </text>

        <rect className="crustdata-flow-node" x="186" y="552" width="148" height="36" rx="2" />
        <text className="crustdata-flow-text" x="260" y="574" textAnchor="middle">
          recommended actions
        </text>

        <rect className="crustdata-flow-node" x="348" y="552" width="148" height="36" rx="2" />
        <text className="crustdata-flow-text" x="422" y="574" textAnchor="middle">
          agent feeds
        </text>

        <line className="crustdata-flow-line" x1="98" y1="588" x2="98" y2="612" />
        <line className="crustdata-flow-line" x1="260" y1="588" x2="260" y2="612" />
        <line className="crustdata-flow-line" x1="422" y1="588" x2="422" y2="612" />
        <line className="crustdata-flow-line" x1="98" y1="612" x2="422" y2="612" />
        <line className="crustdata-flow-line" x1="260" y1="612" x2="260" y2="636" />
        <polygon className="crustdata-flow-arrow" points="260,636 256,628 264,628" />

        {/* terminal footer */}
        <rect className="crustdata-flow-node" x="120" y="640" width="280" height="36" rx="2" />
        <text className="crustdata-flow-text crustdata-flow-text--muted" x="260" y="662" textAnchor="middle">
          actionable sequencing · not raw dashboards
        </text>
      </svg>
    </div>
  );
}

function BorderList({ items }: { items: string[] }) {
  return (
    <ul className="body-text space-y-3" style={{ listStyle: "none", padding: 0 }}>
      {items.map((item) => (
        <li
          key={item}
          style={{
            borderLeft: "1px solid var(--line)",
            paddingLeft: 14,
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      style={{
        borderTop: "1px solid var(--line)",
        paddingTop: 22,
        paddingBottom: 26,
      }}
    >
      <h3
        className="body-text crustdata-card-title"
        style={{
          fontSize: "clamp(16px, 1.2vw, 19px)",
          marginBottom: 6,
        }}
      >
        {project.title}
      </h3>
      <p className="body-text muted" style={{ fontSize: 14.5, lineHeight: 1.55 }}>
        {project.thesis}
      </p>
      <p className="meta" style={{ marginTop: 10, fontSize: 11 }}>
        {project.stack}
      </p>
      {project.links && project.links.length > 0 && (
        <div
          className="mt-3 flex flex-wrap"
          style={{ gap: "10px 18px" }}
        >
          {project.links.map((link) => (
            <a
              key={link.label}
              className="link"
              href={link.href}
              target="_blank"
              rel="noreferrer"
              data-cursor="link"
              style={{ fontSize: 13 }}
            >
              {link.label}
              <span aria-hidden style={{ marginLeft: 2 }}>
                ↗
              </span>
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

export default function CrustdataApplicationPage() {
  return (
    <main className="crustdata-app crustdata-application relative pb-32">
      <header
        style={{
          paddingLeft: "max(18vw, 28px)",
          paddingRight: "max(6vw, 24px)",
          paddingTop: 96,
        }}
      >
        <div style={{ maxWidth: 960 }}>
          <Reveal delay={0.08}>
            <div className="mt-6 flex justify-end">
              <Link href="/" className="cta-button" data-cursor="link">
                ← back to portfolio
              </Link>
            </div>
          </Reveal>
        </div>
      </header>

      <Column as="section" topPad={72} id="hero">
        <Reveal y={18} blur={10}>
          <p className="meta" style={{ marginBottom: 24 }}>
            application
          </p>
        </Reveal>

        <div className="crustdata-heading-row">
          <Reveal y={18} blur={10}>
            <HeroSettingsIcon />
          </Reveal>
          <SplitTextReveal
            as="h1"
            className="section-title hero-bitmap-title min-w-0 flex-1"
            text={"ai native builder you need"}
            splitBy="word"
            stagger={0.05}
          />
        </div>

        <Reveal delay={0.2}>
          <p
            className="bitmap-accent-line mt-10"
            style={{
              fontSize: "clamp(17px, 1.4vw, 22px)",
              color: "var(--secondary)",
              lineHeight: 1.45,
              maxWidth: 560,
            }}
          >
            signal intelligence and live context for ai agents, not another
            static data feed.
          </p>
        </Reveal>
      </Column>

      {/* 01 — what i'd build */}
      <Column as="section" topPad={100} id="build-at-crustdata">
        <Reveal>
          <SectionMeta num="01" label="signal intelligence" />
        </Reveal>

        <SplitTextReveal
          as="h2"
          className="section-title accent--indigo"
          text={"something i'd probably build here"}
          splitBy="word"
          stagger={0.04}
        />

        <Reveal delay={0.12}>
          <p className="body-text mt-12">
            one thing that becomes painful quickly is signal overload.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="body-text mt-7">
            once retrieval gets easy, customers drown in hiring signals, company
            updates, people movement, enrichment events, trigger streams.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="body-text mt-7 muted">
            the hard question stops being how do we get data.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <p className="body-text mt-7">
            it becomes: what actually matters right now?
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <p
            className="meta crustdata-system-label mt-10"
            style={{ marginBottom: 10 }}
          >
            adaptive signal ranking layer
          </p>
        </Reveal>

        <Reveal delay={0.32}>
          <p className="body-text">
            a ranking layer on top of crustdata apis that scores buying intent,
            urgency, behavioral anomalies, company momentum, and signal decay.
          </p>
        </Reveal>

        <Reveal delay={0.36}>
          <p className="body-text mt-7">
            cluster related events, generate momentum scores, summarize why
            something matters, recommend next actions. actionable sequencing,
            not raw dashboards.
          </p>
        </Reveal>

        <Reveal delay={0.38}>
          <SignalRankingFlowchart />
        </Reveal>

        <Reveal delay={0.4}>
          <p className="body-text mt-7 muted">
            example: funding + infra hiring + ai feature launch + traffic spike
            + new vp engineering should rank differently than isolated events.
          </p>
        </Reveal>

        <Reveal delay={0.46}>
          <div
            className="mt-14 pt-8"
            style={{ borderTop: "1px solid var(--line)" }}
          >
            <p className="meta" style={{ marginBottom: 12 }}>
              internal systems i&apos;d also build
            </p>
            <BorderList
              items={[
                "sales automation + onboarding copilots",
                "customer research agents",
                "auto-generated demos",
                "technical support copilots",
                "gtm infrastructure + workflow generators",
              ]}
            />
          </div>
        </Reveal>
      </Column>

      {/* 02 — intro */}
      <Column as="section" topPad={120} id="intro">
        <Reveal y={18} blur={10}>
          <SectionMeta num="02" label="intro" />
        </Reveal>

        <Reveal delay={0.2}>
          <p className="body-text">
            i like building systems that remove operational pain.
          </p>
        </Reveal>

        <Reveal delay={0.26}>
          <p className="body-text mt-7">
            usually i see something inefficient, obsess over it for a few hours,
            and ship a fix before people finish discussing the problem.
          </p>
        </Reveal>

        <Reveal delay={0.32}>
          <p className="body-text mt-7 muted">
            ai-native generalist. i see friction, build systems around it, ship
            fast, and work across product, infra, and gtm when things are
            undefined.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
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
                overall convener, inter iit tech meet 14.0
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.48}>
          <ul
            className="mt-10 flex flex-wrap"
            style={{ gap: "10px 18px", listStyle: "none", padding: 0 }}
          >
            {CONTACT_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  className="link"
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  data-cursor="link"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.54}>
          <p
            className="meta mt-12"
            style={{
              borderLeft: "1px solid var(--line)",
              paddingLeft: 12,
              opacity: 0.85,
            }}
          >
            status: currently building weird things with ai + systems
          </p>
        </Reveal>
      </Column>

      {/* 03 — why crustdata */}
      <section
        id="why-crustdata"
        style={{
          paddingLeft: "max(18vw, 28px)",
          paddingRight: "max(6vw, 24px)",
          paddingTop: 120,
        }}
      >
        <div style={{ maxWidth: 720 }}>
          <Reveal>
            <SectionMeta num="03" label="why crustdata" />
          </Reveal>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(120px,160px)_1fr] md:gap-16">
            <Reveal delay={0.06}>
              <p
                className="meta crustdata-side-heading md:pt-1"
                style={{ fontSize: 12, lineHeight: 1.5 }}
              >
                why this caught my attention
              </p>
            </Reveal>

            <div>
              <Reveal delay={0.1}>
                <p className="body-text" style={{ maxWidth: "none" }}>
                  crustdata feels early in the right way.
                </p>
              </Reveal>

              <Reveal delay={0.14}>
                <p className="body-text mt-7" style={{ maxWidth: "none" }}>
                  the internet was designed for humans clicking links.
                </p>
              </Reveal>

              <Reveal delay={0.18}>
                <p className="body-text mt-7" style={{ maxWidth: "none" }}>
                  now agents need live context, structured retrieval, real-time
                  signals, and systems that can actually act on information.
                </p>
              </Reveal>

              <Reveal delay={0.22}>
                <p className="body-text mt-7 muted" style={{ maxWidth: "none" }}>
                  that shift is massive.
                </p>
              </Reveal>

              <Reveal delay={0.26}>
                <p className="body-text mt-7" style={{ maxWidth: "none" }}>
                  most companies are still thinking about getting data.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <p className="body-text mt-7" style={{ maxWidth: "none" }}>
                  the harder problem is figuring out what actually matters once
                  the data starts flooding in.
                </p>
              </Reveal>

              <Reveal delay={0.36}>
                <p
                  className="body-text mt-10"
                  style={{
                    maxWidth: "none",
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    fontWeight: 300,
                    color: "var(--secondary)",
                  }}
                >
                  that&apos;s the kind of problem i like working on.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — how i work */}
      <Column as="section" topPad={120} id="how-i-work">
        <Reveal>
          <SectionMeta num="04" label="operational systems" />
        </Reveal>

        <SplitTextReveal
          as="h2"
          className="section-title accent--indigo"
          text={"i see friction and remove it"}
          splitBy="word"
          stagger={0.04}
        />

        <Reveal delay={0.12}>
          <p className="body-text mt-12">
            at saturn labs, hundreds of hours of robotics training data were
            uploaded daily.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="body-text mt-7">
            the problem wasn&apos;t collection. it was qc.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="body-text mt-7">people were manually checking:</p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-6">
            <BorderList
              items={[
                "hand visibility",
                "lighting quality",
                "object overlap",
                "frame usability",
                "motion consistency",
              ]}
            />
          </div>
        </Reveal>

        <Reveal delay={0.28}>
          <p className="body-text mt-7 muted">
            repetitive work. huge time sink. draining engineering bandwidth every
            day.
          </p>
        </Reveal>

        <Reveal delay={0.32}>
          <p className="body-text mt-7">
            so i built an automated qc system overnight.
          </p>
        </Reveal>

        <Reveal delay={0.36}>
          <p className="body-text mt-7">
            it scored videos, flagged low-quality data, and integrated directly
            into the pipeline the same night.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="body-text mt-7">
            next day the team stopped wasting hours on manual checks and focused
            on actual engineering work instead.
          </p>
        </Reveal>

        <Reveal delay={0.46}>
          <p
            className="body-text mt-10"
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontWeight: 300,
              color: "var(--secondary)",
            }}
          >
            if something repeatedly slows people down, i automate it.
          </p>
        </Reveal>

        <Reveal delay={0.52}>
          <div
            className="mt-14 pt-8"
            style={{ borderTop: "1px solid var(--line)" }}
          >
            <p className="meta" style={{ marginBottom: 12 }}>
              early-stage fit
            </p>
            <BorderList
              items={[
                "saturn labs + founder's office: priorities changed daily, ownership fluid",
                "inter iit tech meet 14.0: 23 iits, 2000+ participants, ₹1cr+ ops",
                "not waiting for scoped tickets. ambiguity and speed are normal.",
              ]}
            />
          </div>
        </Reveal>
      </Column>

      {/* 05 — selected things */}
      <section
        id="projects"
        style={{
          paddingLeft: "max(18vw, 28px)",
          paddingRight: "max(6vw, 24px)",
          paddingTop: 120,
        }}
      >
        <div style={{ maxWidth: 960 }}>
          <Reveal>
            <SectionMeta num="05" label="selected builds" />
          </Reveal>

          <Reveal delay={0.06}>
            <h2
              className="section-title accent--indigo"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
            >
              things i&apos;ve built
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-x-12">
            {PROJECTS.map((project, i) => (
              <Reveal key={project.title} delay={0.1 + i * 0.05}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — philosophy */}
      <Column as="section" topPad={120} id="philosophy">
        <Reveal>
          <SectionMeta num="06" label="philosophy" />
        </Reveal>

        <Reveal delay={0.06}>
          <h2
            className="section-title accent--indigo"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            i don&apos;t like unnecessary complexity.
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="body-text mt-10">i like systems that:</p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-6">
            <BorderList
              items={[
                "reduce friction",
                "remove repetitive work",
                "increase speed",
                "help people focus on meaningful problems",
              ]}
            />
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <p className="body-text mt-10">
            i think speed is underrated.
          </p>
        </Reveal>

        <Reveal delay={0.26}>
          <p className="body-text mt-7">
            i think most meetings should&apos;ve been documents.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="body-text mt-7 muted">
            good operators are usually hidden behind the scenes quietly
            removing chaos.
          </p>
        </Reveal>
      </Column>

      {/* 07 — ending */}
      <Column as="section" topPad={120} id="ending">
        <Reveal>
          <SectionMeta num="07" label="closing" />
        </Reveal>

        <Reveal delay={0.08}>
          <p className="body-text">i like difficult environments.</p>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="body-text mt-7">
            ambiguity doesn&apos;t bother me much. neither do unrealistic
            timelines.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <p
            className="body-text mt-7"
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontWeight: 300,
              color: "var(--secondary)",
            }}
          >
            if something feels impossible, that usually makes it more
            interesting.
          </p>
        </Reveal>

        <Reveal delay={0.22}>
          <p className="body-text mt-10 muted">anyway.</p>
        </Reveal>

        <Reveal delay={0.28}>
          <ul className="mt-8 flex flex-col" style={{ gap: 14 }}>
            {CONTACT_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  className="link"
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  data-cursor="link"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.36}>
          <div
            className="mt-24 flex items-center justify-between"
            style={{ borderTop: "1px solid var(--line)", paddingTop: 22 }}
          >
            <span className="meta">application draft · kept at 3am</span>
            <span className="meta">v0.1</span>
          </div>
        </Reveal>
      </Column>
    </main>
  );
}
