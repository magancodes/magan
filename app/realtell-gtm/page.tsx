"use client";

import Link from "next/link";
import Column from "@/components/Column";
import EducationCredential from "@/components/EducationCredential";
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
      "multi-agent Android automation system. Controls phones the way a human would: reads the accessibility tree, decides what to tap next, no APIs needed. Automates job applications, handles CAPTCHAs by handing off to the user, accepts commands via voice/PDF/Telegram, supports 15+ languages. Built on OpenClaw + DroidRun + FastAPI + React.",
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
      "real-time voice-cloning video translator. Takes a voice sample, then during a live call transcribes, translates (Gemini), and speaks back in your cloned voice via Qwen3-TTS. Sub-545ms end-to-end. WebRTC + Redis Pub/Sub.",
    stack: "webrtc · redis · gemini · qwen3-tts",
    links: [{ label: "github", href: "https://github.com/naksshhh/SpeakLingo" }],
  },
  {
    title: "Mini-vLLM",
    thesis:
      "LLM inference engine built from scratch. Dynamic batching (20ms window), KV-cache rewrite from O(N²) to O(1) per token, HTTP + gRPC, Prometheus/Grafana observability, distributed round-robin router.",
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
];

function HeroSettingsIcon() {
  return (
    <span className="realtell-section-icon realtell-hero-icon" aria-hidden>
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
      className="meta realtell-system-label"
      style={{ marginBottom: 24, letterSpacing: "0.04em" }}
    >
      [ {num} / {label} ]
    </p>
  );
}

function OutboundIntelligenceFlowchart() {
  return (
    <div
      className="realtell-flowchart"
      aria-label="adaptive outbound intelligence layer architecture"
    >
      <p className="realtell-flowchart-label meta realtell-system-label">
        system spec · adaptive outbound intelligence
      </p>
      <svg viewBox="0 0 520 720" role="img" aria-hidden>
        <title>adaptive outbound intelligence layer flow</title>

        <rect
          className="realtell-flow-node realtell-flow-node--accent"
          x="140"
          y="8"
          width="240"
          height="40"
          rx="2"
        />
        <text
          className="realtell-flow-text realtell-flow-text--accent"
          x="260"
          y="33"
          textAnchor="middle"
        >
          retell voice agents
        </text>

        <line className="realtell-flow-line" x1="260" y1="48" x2="260" y2="72" />
        <polygon className="realtell-flow-arrow" points="260,72 256,64 264,64" />

        <rect className="realtell-flow-node" x="120" y="76" width="280" height="40" rx="2" />
        <text className="realtell-flow-text" x="260" y="101" textAnchor="middle">
          transcript + signal capture
        </text>
        <text
          className="realtell-flow-text realtell-flow-text--muted"
          x="260"
          y="128"
          textAnchor="middle"
        >
          objections · intent · tone · urgency · dropoff
        </text>

        <line className="realtell-flow-line" x1="260" y1="136" x2="260" y2="160" />
        <polygon className="realtell-flow-arrow" points="260,160 256,152 264,152" />

        <rect
          className="realtell-flow-node realtell-flow-node--accent"
          x="100"
          y="164"
          width="320"
          height="44"
          rx="2"
        />
        <text
          className="realtell-flow-text realtell-flow-text--accent"
          x="260"
          y="191"
          textAnchor="middle"
        >
          objection clustering
        </text>

        <line className="realtell-flow-line" x1="260" y1="208" x2="260" y2="232" />
        <polygon className="realtell-flow-arrow" points="260,232 256,224 264,224" />

        <rect className="realtell-flow-node" x="24" y="236" width="148" height="36" rx="2" />
        <text className="realtell-flow-text" x="98" y="258" textAnchor="middle">
          conversion phrases
        </text>

        <rect className="realtell-flow-node" x="186" y="236" width="148" height="36" rx="2" />
        <text className="realtell-flow-text" x="260" y="258" textAnchor="middle">
          industry patterns
        </text>

        <rect className="realtell-flow-node" x="348" y="236" width="148" height="36" rx="2" />
        <text className="realtell-flow-text" x="422" y="258" textAnchor="middle">
          pricing reactions
        </text>

        <line className="realtell-flow-line" x1="98" y1="272" x2="98" y2="296" />
        <line className="realtell-flow-line" x1="260" y1="272" x2="260" y2="296" />
        <line className="realtell-flow-line" x1="422" y1="272" x2="422" y2="296" />
        <line className="realtell-flow-line" x1="98" y1="296" x2="422" y2="296" />
        <line className="realtell-flow-line" x1="260" y1="296" x2="260" y2="320" />
        <polygon className="realtell-flow-arrow" points="260,320 256,312 264,312" />

        <rect className="realtell-flow-node" x="140" y="324" width="240" height="40" rx="2" />
        <text className="realtell-flow-text" x="260" y="349" textAnchor="middle">
          lead reranking
        </text>
        <text
          className="realtell-flow-text realtell-flow-text--muted"
          x="260"
          y="376"
          textAnchor="middle"
        >
          continuous quality scores · follow-up timing
        </text>

        <line className="realtell-flow-line" x1="260" y1="384" x2="260" y2="408" />
        <polygon className="realtell-flow-arrow" points="260,408 256,400 264,400" />

        <rect
          className="realtell-flow-node realtell-flow-node--accent"
          x="100"
          y="412"
          width="320"
          height="44"
          rx="2"
        />
        <text
          className="realtell-flow-text realtell-flow-text--accent"
          x="260"
          y="437"
          textAnchor="middle"
        >
          script variant generation
        </text>

        <line className="realtell-flow-line" x1="260" y1="456" x2="260" y2="480" />
        <polygon className="realtell-flow-arrow" points="260,480 256,472 264,472" />

        <rect
          className="realtell-flow-node realtell-flow-node--output"
          x="100"
          y="484"
          width="320"
          height="44"
          rx="2"
        />
        <text
          className="realtell-flow-text realtell-flow-text--accent"
          x="260"
          y="511"
          textAnchor="middle"
        >
          crm + action output
        </text>

        <line className="realtell-flow-line" x1="260" y1="528" x2="260" y2="552" />
        <polygon className="realtell-flow-arrow" points="260,552 256,544 264,544" />

        <rect className="realtell-flow-node" x="24" y="556" width="148" height="36" rx="2" />
        <text className="realtell-flow-text" x="98" y="578" textAnchor="middle">
          outbound angles
        </text>

        <rect className="realtell-flow-node" x="186" y="556" width="148" height="36" rx="2" />
        <text className="realtell-flow-text" x="260" y="578" textAnchor="middle">
          meeting booking
        </text>

        <rect className="realtell-flow-node" x="348" y="556" width="148" height="36" rx="2" />
        <text className="realtell-flow-text" x="422" y="578" textAnchor="middle">
          structured intel
        </text>

        <line className="realtell-flow-line" x1="98" y1="592" x2="98" y2="616" />
        <line className="realtell-flow-line" x1="260" y1="592" x2="260" y2="616" />
        <line className="realtell-flow-line" x1="422" y1="592" x2="422" y2="616" />
        <line className="realtell-flow-line" x1="98" y1="616" x2="422" y2="616" />
        <line className="realtell-flow-line" x1="260" y1="616" x2="260" y2="640" />
        <polygon className="realtell-flow-arrow" points="260,640 256,632 264,632" />

        <rect className="realtell-flow-node" x="120" y="644" width="280" height="36" rx="2" />
        <text
          className="realtell-flow-text realtell-flow-text--muted"
          x="260"
          y="666"
          textAnchor="middle"
        >
          self-improving outbound · not isolated calls
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
        className="body-text realtell-card-title"
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

export default function RealtellGtmPage() {
  return (
    <main className="realtell-gtm relative pb-32">
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
            gtm application
          </p>
        </Reveal>

        <div className="realtell-heading-row">
          <Reveal y={18} blur={10}>
            <HeroSettingsIcon />
          </Reveal>
          <SplitTextReveal
            as="h1"
            className="section-title hero-bitmap-title min-w-0 flex-1"
            text={"voice systems, growth systems, leverage."}
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
            realtime voice + gtm infrastructure. turning calls into a
            continuously learning outbound system.
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <EducationCredential className="mt-10" />
        </Reveal>
      </Column>

      <Column as="section" topPad={100} id="build-at-retell">
        <Reveal>
          <SectionMeta num="01" label="outbound intelligence" />
        </Reveal>

        <SplitTextReveal
          as="h2"
          className="section-title accent--teal"
          text={"adaptive outbound intelligence layer"}
          splitBy="word"
          stagger={0.04}
        />

        <Reveal delay={0.12}>
          <p className="body-text mt-12">
            one thing i&apos;d immediately explore at retell is turning voice
            interactions into a continuously learning gtm system instead of
            treating calls like isolated events.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="body-text mt-7">
            most outbound systems today are still primitive: static sequences,
            fixed scripts, generic lead scoring, disconnected crm updates.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="body-text mt-7 muted">
            but voice agents generate an insane amount of high-signal
            conversational data.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-8">
            <BorderList
              items={[
                "objection patterns",
                "buying intent",
                "tone shifts",
                "urgency signals",
                "dropoff moments",
                "pricing reactions",
                "industry-specific pain points",
              ]}
            />
          </div>
        </Reveal>

        <Reveal delay={0.28}>
          <p className="body-text mt-7">
            i&apos;d build infrastructure that captures and operationalizes that
            data in realtime.
          </p>
        </Reveal>

        <Reveal delay={0.32}>
          <p className="body-text mt-7">
            retell agents run thousands of outbound calls. instead of just
            logging transcripts, the system should cluster objections
            dynamically, identify conversion-driving phrases, rerank lead quality
            continuously, generate new outbound angles automatically, recommend
            follow-up timing, and create high-performing script variants from
            successful calls.
          </p>
        </Reveal>

        <Reveal delay={0.36}>
          <p className="body-text mt-7 muted">
            basically: the outbound system itself becomes self-improving. not
            just ai making calls. ai improving how calls happen.
          </p>
        </Reveal>

        <Reveal delay={0.38}>
          <OutboundIntelligenceFlowchart />
        </Reveal>
      </Column>

      <Column as="section" topPad={120} id="intro">
        <Reveal y={18} blur={10}>
          <SectionMeta num="02" label="intro" />
        </Reveal>

        <Reveal delay={0.2}>
          <p className="body-text">
            retell feels interesting because it sits at the intersection of
            realtime systems, ai infra, human behavior, distribution, and
            operational scale.
          </p>
        </Reveal>

        <Reveal delay={0.26}>
          <p className="body-text mt-7">
            which is basically the kind of environment i naturally enjoy
            operating in.
          </p>
        </Reveal>

        <Reveal delay={0.32}>
          <p className="body-text mt-7 muted">
            i&apos;m not someone who wants to maintain static funnels or run
            repetitive growth playbooks.
          </p>
        </Reveal>

        <Reveal delay={0.36}>
          <p className="body-text mt-7">i like building systems that:</p>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-6">
            <BorderList
              items={[
                "test fast",
                "learn fast",
                "adapt automatically",
                "create leverage",
              ]}
            />
          </div>
        </Reveal>

        <Reveal delay={0.44}>
          <div className="mt-14">
            <p className="meta" style={{ marginBottom: 14 }}>
              skills stack
            </p>
            <p className="body-text" style={{ fontSize: 15 }}>
              python, sql, typescript, flutter
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.48}>
          <div className="mt-10">
            <p className="meta" style={{ marginBottom: 14 }}>
              usually move between
            </p>
            <BorderList
              items={[
                "backend systems",
                "ai infra",
                "automation",
                "product",
                "gtm",
                "growth tooling",
              ]}
            />
            <p className="body-text mt-6 muted">without really separating them.</p>
          </div>
        </Reveal>

        <Reveal delay={0.52}>
          <div className="mt-14">
            <p className="meta" style={{ marginBottom: 14 }}>
              currently
            </p>
            <ul className="space-y-[10px]">
              <li className="body-text" style={{ fontSize: 15 }}>
                live content distribution engines at{" "}
                <span style={{ color: "var(--primary)" }}>trxnd</span>
                <span className="muted"> · shipping</span>
              </li>
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
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.56}>
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
      </Column>

      <Column as="section" topPad={120} id="gtm-loops">
        <Reveal>
          <SectionMeta num="03" label="gtm infrastructure" />
        </Reveal>

        <SplitTextReveal
          as="h2"
          className="section-title accent--teal"
          text={"infrastructure loops i'd test aggressively"}
          splitBy="word"
          stagger={0.04}
        />

        <Reveal delay={0.12}>
          <div className="mt-10">
            <BorderList
              items={[
                "ai callback systems from inbound website visitors",
                "realtime lead qualification agents",
                "dynamic demo booking flows",
                "vertical-specific outbound agents",
                "gifting triggers based on conversation sentiment",
                "automated pilot onboarding",
                "marketplace scraping + enrichment pipelines",
                "conversational retargeting systems",
              ]}
            />
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="body-text mt-10">example:</p>
        </Reveal>

        <Reveal delay={0.22}>
          <p className="body-text mt-7">
            someone visits pricing page 3 times. retell agent calls within
            minutes: references company context, understands use-case, qualifies
            budget/timeline, books meeting automatically, pushes structured intel
            into crm.
          </p>
        </Reveal>

        <Reveal delay={0.26}>
          <p className="body-text mt-7 muted">
            not chatbot-level automation. actual operational automation.
          </p>
        </Reveal>
      </Column>

      <Column as="section" topPad={120} id="trxnd">
        <Reveal>
          <SectionMeta num="04" label="distribution" />
        </Reveal>

        <SplitTextReveal
          as="h2"
          className="section-title accent--teal"
          text={"trxnd · live content distribution engines"}
          splitBy="word"
          stagger={0.04}
        />

        <Reveal delay={0.12}>
          <p className="body-text mt-12">
            a lot of this thinking also came from building trxnd.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="body-text mt-7">
            trxnd started from a simple belief: most products don&apos;t fail at
            the build. they fail at distribution.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="body-text mt-7">so i built systems around:</p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-6">
            <BorderList
              items={[
                "content engines",
                "automated outreach",
                "warm lead pipelines",
                "orchestrated conversations",
                "narrative systems",
                "reddit intelligence",
                "campaign infrastructure",
              ]}
            />
          </div>
        </Reveal>

        <Reveal delay={0.28}>
          <p className="body-text mt-7 muted">
            because gtm to me feels less like marketing and more like systems
            engineering.
          </p>
        </Reveal>

        <Reveal delay={0.32}>
          <div
            className="mt-10 flex flex-wrap"
            style={{ gap: "10px 18px" }}
          >
            {TRXND_LINKS.map((link) => (
              <a
                key={link.label}
                className="link"
                href={link.href}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                style={{ fontSize: 14 }}
              >
                {link.label}
                <span aria-hidden style={{ marginLeft: 2 }}>
                  ↗
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </Column>

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
              className="section-title accent--teal"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
            >
              things i&apos;ve built
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="body-text mt-8 muted">
              most projects sit somewhere between ai infra, realtime systems,
              automation, operational leverage, and gtm infrastructure.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-x-12">
            {PROJECTS.map((project, i) => (
              <Reveal key={project.title} delay={0.12 + i * 0.05}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Column as="section" topPad={120} id="how-i-work">
        <Reveal>
          <SectionMeta num="06" label="operational systems" />
        </Reveal>

        <SplitTextReveal
          as="h2"
          className="section-title accent--teal"
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

        <Reveal delay={0.34}>
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
      </Column>

      <Column as="section" topPad={120} id="closing">
        <Reveal>
          <SectionMeta num="07" label="closing" />
        </Reveal>

        <Reveal delay={0.08}>
          <p className="body-text">
            i think the most exciting thing about retell is that voice is still
            massively under-optimized.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="body-text mt-7">
            most companies still treat calls like support overhead, sales
            overhead, operational overhead.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="body-text mt-7">
            when really they&apos;re one of the richest behavioral data layers
            inside a business.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p
            className="body-text mt-7"
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontWeight: 300,
              color: "var(--secondary)",
            }}
          >
            and whoever operationalizes that layer best probably wins. that
            problem space feels very fun to me.
          </p>
        </Reveal>

        <Reveal delay={0.28}>
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

        <Reveal delay={0.36}>
          <div
            className="mt-24 flex items-center justify-between"
            style={{ borderTop: "1px solid var(--line)", paddingTop: 22 }}
          >
            <span className="meta">gtm draft · voice systems angle</span>
            <span className="meta">v0.1</span>
          </div>
        </Reveal>
      </Column>
    </main>
  );
}
