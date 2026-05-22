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

const TRXND_LINKS = [
  { label: "trxnd.io", href: "https://trxnd.io" },
  { label: "app.trxnd.io", href: "https://app.trxnd.io" },
  { label: "reddit.trxnd.io", href: "https://reddit.trxnd.io" },
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
      "multi-agent Android automation system. Controls phones the way a human would: reads the accessibility tree, decides what to tap next, no APIs needed. Automates job applications, handles CAPTCHAs by handing off to the user, accepts commands via voice/PDF/Telegram, supports 15+ languages.",
    stack: "openclaw · droidrun · fastapi · react",
    links: [
      { label: "github", href: "https://github.com/naksshhh/IronClaw" },
      {
        label: "medium",
        href: "https://medium.com/@nakshkanchan12/iron-claw-teaching-ai-to-see-what-you-see-42838b810b07",
      },
    ],
  },
  {
    title: "SpeakLingo",
    thesis:
      "real-time voice-cloning video translator. Takes a voice sample, then during a live call transcribes, translates (Gemini), and speaks back in your cloned voice via Qwen3-TTS. Sub-545ms end-to-end.",
    stack: "webrtc · redis · gemini · qwen3-tts",
    links: [{ label: "github", href: "https://github.com/naksshhh/SpeakLingo" }],
  },
  {
    title: "Mini-vLLM",
    thesis:
      "LLM inference engine built from scratch. Dynamic batching, KV-cache rewrite from O(N²) to O(1) per token, HTTP + gRPC, Prometheus/Grafana observability.",
    stack: "dynamic batching · kv-cache · grpc · observability",
    links: [{ label: "github", href: "https://github.com/naksshhh/Mini-vLLM" }],
  },
  {
    title: "CiteAgent",
    thesis:
      "agentic RAG pipeline for causal extraction from conversational data. LangGraph orchestration, adaptive reranking, LLM judges. F1 = 0.94. Placed 5th at Inter-IIT Tech Meet 14.0.",
    stack: "langgraph · reranking · llm judges",
  },
  {
    title: "SoulScript",
    thesis:
      "AI mental wellness platform. Real-time conversational avatar via Gemini audio APIs, emotion-based music generation via Lyria, RAG-powered Persona Dashboard. Scaled to 1,000+ concurrent users.",
    stack: "gemini audio · lyria · rag · 1000+ concurrent",
    links: [{ label: "live", href: "https://soulscript4u.vercel.app" }],
  },
  {
    title: "TRXND",
    thesis:
      "live content distribution engines. Content routing, scheduling, channel output, reddit intelligence.",
    stack: "content routing · scheduling · channel output",
    links: TRXND_LINKS,
  },
];

function HeroSettingsIcon() {
  return (
    <span className="runable-section-icon runable-hero-icon" aria-hidden>
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
      className="meta runable-system-label"
      style={{ marginBottom: 24, letterSpacing: "0.04em" }}
    >
      [ {num} / {label} ]
    </p>
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

function SubsectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="body-text runable-card-title"
      style={{
        fontSize: "clamp(16px, 1.2vw, 19px)",
        marginTop: 28,
        marginBottom: 10,
      }}
    >
      {children}
    </h3>
  );
}

function PersistentMemoryFlowchart() {
  return (
    <div
      className="runable-flowchart"
      aria-label="organization-wide persistent memory architecture"
    >
      <p className="runable-flowchart-label meta runable-system-label">
        system spec · org-wide persistent memory
      </p>
      <svg viewBox="0 0 520 680" role="img" aria-hidden>
        <title>organization-wide persistent memory flow</title>

        <rect
          className="runable-flow-node runable-flow-node--accent"
          x="120"
          y="8"
          width="280"
          height="40"
          rx="2"
        />
        <text
          className="runable-flow-text runable-flow-text--accent"
          x="260"
          y="33"
          textAnchor="middle"
        >
          execution sessions
        </text>

        <line className="runable-flow-line" x1="260" y1="48" x2="260" y2="72" />
        <polygon className="runable-flow-arrow" points="260,72 256,64 264,64" />

        <rect className="runable-flow-node" x="100" y="76" width="320" height="40" rx="2" />
        <text className="runable-flow-text" x="260" y="101" textAnchor="middle">
          signal capture
        </text>
        <text
          className="runable-flow-text runable-flow-text--muted"
          x="260"
          y="128"
          textAnchor="middle"
        >
          workflows · preferences · gtm learnings · failed approaches
        </text>

        <line className="runable-flow-line" x1="260" y1="136" x2="260" y2="160" />
        <polygon className="runable-flow-arrow" points="260,160 256,152 264,152" />

        <rect
          className="runable-flow-node runable-flow-node--accent"
          x="80"
          y="164"
          width="360"
          height="44"
          rx="2"
        />
        <text
          className="runable-flow-text runable-flow-text--accent"
          x="260"
          y="191"
          textAnchor="middle"
        >
          persistent memory layer
        </text>

        <line className="runable-flow-line" x1="260" y1="208" x2="260" y2="232" />
        <polygon className="runable-flow-arrow" points="260,232 256,224 264,224" />

        <rect className="runable-flow-node" x="24" y="236" width="148" height="36" rx="2" />
        <text className="runable-flow-text" x="98" y="258" textAnchor="middle">
          brand voice
        </text>

        <rect className="runable-flow-node" x="186" y="236" width="148" height="36" rx="2" />
        <text className="runable-flow-text" x="260" y="258" textAnchor="middle">
          conversions
        </text>

        <rect className="runable-flow-node" x="348" y="236" width="148" height="36" rx="2" />
        <text className="runable-flow-text" x="422" y="258" textAnchor="middle">
          company writing
        </text>

        <line className="runable-flow-line" x1="98" y1="272" x2="98" y2="296" />
        <line className="runable-flow-line" x1="260" y1="272" x2="260" y2="296" />
        <line className="runable-flow-line" x1="422" y1="272" x2="422" y2="296" />
        <line className="runable-flow-line" x1="98" y1="296" x2="422" y2="296" />
        <line className="runable-flow-line" x1="260" y1="296" x2="260" y2="320" />
        <polygon className="runable-flow-arrow" points="260,320 256,312 264,312" />

        <rect className="runable-flow-node" x="120" y="324" width="280" height="40" rx="2" />
        <text className="runable-flow-text" x="260" y="349" textAnchor="middle">
          cross-agent retrieval
        </text>
        <text
          className="runable-flow-text runable-flow-text--muted"
          x="260"
          y="376"
          textAnchor="middle"
        >
          memory shared across teams · not per-session reset
        </text>

        <line className="runable-flow-line" x1="260" y1="384" x2="260" y2="408" />
        <polygon className="runable-flow-arrow" points="260,408 256,400 264,400" />

        <rect
          className="runable-flow-node runable-flow-node--accent"
          x="100"
          y="412"
          width="320"
          height="44"
          rx="2"
        />
        <text
          className="runable-flow-text runable-flow-text--accent"
          x="260"
          y="437"
          textAnchor="middle"
        >
          operational brain
        </text>

        <line className="runable-flow-line" x1="260" y1="456" x2="260" y2="480" />
        <polygon className="runable-flow-arrow" points="260,480 256,472 264,472" />

        <rect
          className="runable-flow-node runable-flow-node--output"
          x="100"
          y="484"
          width="320"
          height="44"
          rx="2"
        />
        <text
          className="runable-flow-text runable-flow-text--accent"
          x="260"
          y="511"
          textAnchor="middle"
        >
          agent execution output
        </text>

        <line className="runable-flow-line" x1="260" y1="528" x2="260" y2="552" />
        <polygon className="runable-flow-arrow" points="260,552 256,544 264,544" />

        <rect className="runable-flow-node" x="24" y="556" width="148" height="36" rx="2" />
        <text className="runable-flow-text" x="98" y="578" textAnchor="middle">
          gtm agents
        </text>

        <rect className="runable-flow-node" x="186" y="556" width="148" height="36" rx="2" />
        <text className="runable-flow-text" x="260" y="578" textAnchor="middle">
          whatsapp flows
        </text>

        <rect className="runable-flow-node" x="348" y="556" width="148" height="36" rx="2" />
        <text className="runable-flow-text" x="422" y="578" textAnchor="middle">
          automation runs
        </text>

        <line className="runable-flow-line" x1="98" y1="592" x2="98" y2="616" />
        <line className="runable-flow-line" x1="260" y1="592" x2="260" y2="616" />
        <line className="runable-flow-line" x1="422" y1="592" x2="422" y2="616" />
        <line className="runable-flow-line" x1="98" y1="616" x2="422" y2="616" />
        <line className="runable-flow-line" x1="260" y1="616" x2="260" y2="640" />
        <polygon className="runable-flow-arrow" points="260,640 256,632 264,632" />

        <rect className="runable-flow-node" x="100" y="644" width="320" height="36" rx="2" />
        <text
          className="runable-flow-text runable-flow-text--muted"
          x="260"
          y="666"
          textAnchor="middle"
        >
          compounding moat · not a tool you prompt
        </text>
      </svg>
    </div>
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
        className="body-text runable-card-title"
        style={{
          fontSize: "clamp(16px, 1.2vw, 19px)",
          marginBottom: 8,
        }}
      >
        {project.title}
      </h3>
      <p className="body-text muted" style={{ fontSize: 14, lineHeight: 1.58 }}>
        {project.thesis}
      </p>
      <p className="meta" style={{ marginTop: 10, fontSize: 11 }}>
        {project.stack}
      </p>
      {project.links && project.links.length > 0 && (
        <div className="mt-3 flex flex-wrap" style={{ gap: "10px 18px" }}>
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

export default function RunablePlsHireMePage() {
  return (
    <main className="runable-page relative pb-32">
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
            founder&apos;s office
          </p>
        </Reveal>

        <div className="runable-heading-row">
          <Reveal y={18} blur={10}>
            <HeroSettingsIcon />
          </Reveal>
          <SplitTextReveal
            as="h1"
            className="section-title hero-bitmap-title min-w-0 flex-1"
            text={"ship fast. fix what's broken. want in."}
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
            runable execution agents and founder&apos;s office work. i want to
            help compound trust, not silent churn.
          </p>
        </Reveal>
      </Column>

      <Column as="section" topPad={100} id="why-i-cared">
        <Reveal>
          <SectionMeta num="00" label="why i even cared enough to write this" />
        </Reveal>

        <SplitTextReveal
          as="h2"
          className="section-title accent--amber"
          text={"this one got under my skin"}
          splitBy="word"
          stagger={0.04}
        />

        <Reveal delay={0.12}>
          <p className="body-text mt-12">
            i spent hours on runable. the product, reviews, discussions.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="body-text mt-7">
            the ambition is insane. general-purpose execution agents are the
            future.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="body-text mt-7 muted">
            may 2025 incorporation to 750k+ users, benchmark dominance, real
            traction.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <p className="body-text mt-7">
            you&apos;re at the stage where trust compounds or silent churn
            compounds.
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <p
            className="body-text mt-10"
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontWeight: 300,
              color: "var(--secondary)",
            }}
          >
            that&apos;s why i wrote this.
          </p>
        </Reveal>
      </Column>

      <Column as="section" topPad={120} id="whats-broken">
        <Reveal>
          <SectionMeta num="01" label="what i think is broken right now" />
        </Reveal>

        <SplitTextReveal
          as="h2"
          className="section-title accent--amber"
          text={"five friction points i'd fix first"}
          splitBy="word"
          stagger={0.04}
        />

        <Reveal delay={0.12}>
          <SubsectionHeading>credit pricing feels unpredictable</SubsectionHeading>
          <p className="body-text">
            users shouldn&apos;t guess what a run costs. predicted credit burn
            before execution, free retries on formatting failures, transparent
            breakdowns per step.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <SubsectionHeading>first-pass quality inconsistency</SubsectionHeading>
          <p className="body-text">
            operational safety nets matter. formatting retries should be free.
            auto-repair on broken outputs. rollback when an agent run goes wrong.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <SubsectionHeading>support latency kills momentum</SubsectionHeading>
          <p className="body-text">
            ai support triage first. fast escalation paths. auto-refund on clear
            failures. issue clustering so the same bug stops hitting different
            users silently.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <SubsectionHeading>no enterprise trust layer</SubsectionHeading>
          <p className="body-text">
            trust center, compliance docs, SOC2 roadmap, DPDP alignment, data
            residency options. enterprise buyers need this before they commit.
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <SubsectionHeading>no real india wedge yet</SubsectionHeading>
          <p className="body-text">
            whatsapp is the wedge US players won&apos;t prioritize. india runs
            on it. runable should own that distribution layer before someone
            else does.
          </p>
        </Reveal>
      </Column>

      <Column as="section" topPad={120} id="what-id-build">
        <Reveal>
          <SectionMeta num="02" label="what i'd build" />
        </Reveal>

        <SplitTextReveal
          as="h2"
          className="section-title accent--amber"
          text={"where i'd put my first 90 days"}
          splitBy="word"
          stagger={0.04}
        />

        <Reveal delay={0.12}>
          <SubsectionHeading>runable on whatsapp</SubsectionHeading>
          <p className="body-text">
            distribution infrastructure, not a feature bolt-on. trigger agents
            from whatsapp, get status updates back, run workflows where india
            already lives.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <SubsectionHeading>persistent execution agents</SubsectionHeading>
          <p className="body-text">
            memory, continuity, long-running tasks. agents that remember context
            across sessions instead of starting from zero every time.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <SubsectionHeading>gtm agents</SubsectionHeading>
          <p className="body-text">
            trxnd thesis applied inside runable: autonomous outbound, lead
            research, account intel, narrative generation, meeting prep pipelines.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <SubsectionHeading>self-healing automation</SubsectionHeading>
          <p className="body-text">
            ironclaw connection. when an automation breaks, detect it, retry with
            alternate paths, escalate only when human judgment is actually needed.
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <SubsectionHeading>indic-first execution layer</SubsectionHeading>
          <p className="body-text">
            hindi, tamil, telugu, and more. not translation as an afterthought.
            execution that works in the languages people actually operate in.
          </p>
        </Reveal>

        <Reveal delay={0.32}>
          <div
            className="mt-14 pt-8"
            style={{ borderTop: "1px solid var(--line)" }}
          >
            <SubsectionHeading>organization-wide persistent memory</SubsectionHeading>
            <p className="body-text">
              session-based AI forgets workflows, preferences, GTM learnings.
            </p>
            <p className="body-text mt-7">
              build an org-wide persistent memory layer that learns company
              writing, conversions, brand voice, failed approaches.
            </p>
            <p className="body-text mt-7 muted">
              it becomes the operational brain, not just a tool you prompt. real
              moat.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.36}>
          <PersistentMemoryFlowchart />
        </Reveal>
      </Column>

      <Column as="section" topPad={120} id="how-i-operate">
        <Reveal>
          <SectionMeta num="03" label="how i operate" />
        </Reveal>

        <SplitTextReveal
          as="h2"
          className="section-title accent--amber"
          text={"if something feels repetitive, i automate it"}
          splitBy="word"
          stagger={0.04}
        />

        <Reveal delay={0.12}>
          <p className="body-text mt-12">
            at saturn labs, hundreds of hours of robotics training data were
            being manually qc&apos;d every day.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="body-text mt-7">people were checking:</p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-6">
            <BorderList
              items={[
                "hand visibility",
                "lighting consistency",
                "frame quality",
                "object intersections",
              ]}
            />
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <p className="body-text mt-7 muted">manually.</p>
        </Reveal>

        <Reveal delay={0.28}>
          <p className="body-text mt-7">
            so i built and integrated an automated qc pipeline overnight. the
            next day the team stopped wasting engineering time on repetitive
            review work.
          </p>
        </Reveal>

        <Reveal delay={0.32}>
          <p
            className="body-text mt-10"
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontWeight: 300,
              color: "var(--secondary)",
            }}
          >
            that&apos;s usually how i operate.
          </p>
        </Reveal>

        <Reveal delay={0.38}>
          <div
            className="mt-14 pt-8"
            style={{ borderTop: "1px solid var(--line)" }}
          >
            <p className="meta" style={{ marginBottom: 14 }}>
              skills stack
            </p>
            <p className="body-text" style={{ fontSize: 15 }}>
              python, typescript, sql, flutter
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.42}>
          <div className="mt-10">
            <p className="meta" style={{ marginBottom: 14 }}>
              usually move between
            </p>
            <BorderList
              items={[
                "ai infra",
                "automation",
                "product",
                "operations",
                "gtm",
              ]}
            />
            <p className="body-text mt-6 muted">without really separating them.</p>
          </div>
        </Reveal>
      </Column>

      <section
        id="projects"
        style={{
          paddingLeft: "max(18vw, 28px)",
          paddingRight: "max(6vw, 24px)",
          paddingTop: 80,
        }}
      >
        <div style={{ maxWidth: 960 }}>
          <Reveal delay={0.1}>
            <p className="meta" style={{ marginBottom: 14 }}>
              selected builds
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-x-12">
            {PROJECTS.map((project, i) => (
              <Reveal key={project.title} delay={0.12 + i * 0.05}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Column as="section" topPad={120} id="founders-office">
        <Reveal>
          <SectionMeta num="04" label="why founder's office specifically" />
        </Reveal>

        <SplitTextReveal
          as="h2"
          className="section-title accent--amber"
          text={"give me a problem and 24 hours"}
          splitBy="word"
          stagger={0.04}
        />

        <Reveal delay={0.12}>
          <p className="body-text mt-12">
            i like ambiguity, speed, pressure, undefined ownership.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="body-text mt-7">
            founder&apos;s office is where i do my best work. no scoped tickets.
            no waiting for permission. just problems that need solving now.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="body-text mt-7 muted">
            give me a problem and 24 hours. i&apos;ll either have a working fix
            or a clear reason why it needs more.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <p
            className="body-text mt-10"
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontWeight: 300,
              color: "var(--secondary)",
            }}
          >
            that&apos;s the lane i want at runable.
          </p>
        </Reveal>
      </Column>

      <Column as="section" topPad={120} id="closing">
        <Reveal>
          <SectionMeta num="05" label="closing" />
        </Reveal>

        <Reveal delay={0.08}>
          <p className="body-text">
            runable is building something that matters. i want to help ship it
            faster and fix what&apos;s breaking trust along the way.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="body-text mt-7 muted">
            if this resonates, i&apos;d love to talk.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <ul className="mt-10 flex flex-col" style={{ gap: 14 }}>
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

        <Reveal delay={0.28}>
          <div
            className="mt-24 flex items-center justify-between"
            style={{ borderTop: "1px solid var(--line)", paddingTop: 22 }}
          >
            <span className="meta">founder&apos;s office draft · runable</span>
            <span className="meta">v0.1</span>
          </div>
        </Reveal>
      </Column>
    </main>
  );
}
