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

type Agent = {
  name: string;
  trigger: string;
  input: string;
  output: string;
  constraint: string;
};

const AGENTS: Agent[] = [
  {
    name: "Prospector",
    trigger: "operator button / cron (month 2)",
    input: "ICP from roadmap, existing pipeline, Firecrawl search",
    output: "scored prospects with wave assignment, rationale, entry-point hypothesis",
    constraint: "creates only, never advances",
  },
  {
    name: "Intelligence",
    trigger: "operator button, per prospect",
    input: "one approved prospect, redo notes, Firecrawl research",
    output:
      "versioned dossier: ordinance exposure, tech signals, key people, warm-path map, risks, sources",
    constraint: "QUALIFIED only (Gate 1 cleared)",
  },
  {
    name: "Outreach",
    trigger: "operator button, per prospect",
    input: "operator-approved dossier and redo notes",
    output: "warm-intro ask, direct email fallback, LinkedIn touch, wedge-personalised",
    constraint: "INTEL_APPROVED only (Gate 2 cleared)",
  },
  {
    name: "Pipeline Tracker",
    trigger: "operator button / weekly cron (month 2)",
    input: "entire pipeline state, gate decisions, outbox",
    output: "markdown digest: funnel vs 30/60/90 targets, blockers, next actions",
    constraint: "read-only, never moves a prospect",
  },
];

type Gate = {
  name: string;
  pausesAfter: string;
  question: string;
  why: string;
};

const GATES: Gate[] = [
  {
    name: "Gate 1 · prospect approval",
    pausesAfter: "Prospector",
    question: "is this the right institution to pursue at all?",
    why: "strategy. a wrong target wastes intelligence cycles and bends the roadmap.",
  },
  {
    name: "Gate 2 · intelligence review",
    pausesAfter: "Intelligence",
    question: "are these facts and people right?",
    why: "accuracy. LLM research is confidently wrong on names, titles, regulatory details.",
  },
  {
    name: "Gate 3 · outreach sign-off",
    pausesAfter: "Outreach",
    question: "would I put my name on this, to a regulated institution?",
    why: "reputation. one bad email to a bank COO closes that door for a year.",
  },
  {
    name: "Send · explicit action",
    pausesAfter: "Gate 3 approval",
    question: "send it now?",
    why: "approval is not transmission. logged operator action prevents accidental batch sends.",
  },
];

function HeroSettingsIcon() {
  return (
    <span className="krimos-section-icon krimos-hero-icon" aria-hidden>
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
      className="meta krimos-system-label"
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
      className="body-text krimos-card-title"
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

function GtmPipelineFlowchart() {
  return (
    <div
      className="krimos-flowchart"
      aria-label="governed GTM agent pipeline architecture"
    >
      <p className="krimos-flowchart-label meta krimos-system-label">
        system spec · governed gtm pipeline
      </p>
      <svg viewBox="0 0 520 820" role="img" aria-hidden>
        <title>governed GTM agent pipeline flow</title>

        <rect
          className="krimos-flow-node krimos-flow-node--accent"
          x="160"
          y="8"
          width="200"
          height="40"
          rx="2"
        />
        <text
          className="krimos-flow-text krimos-flow-text--accent"
          x="260"
          y="33"
          textAnchor="middle"
        >
          prospector
        </text>

        <line className="krimos-flow-line" x1="260" y1="48" x2="260" y2="72" />
        <polygon className="krimos-flow-arrow" points="260,72 256,64 264,64" />

        <rect
          className="krimos-flow-node krimos-flow-node--gate"
          x="120"
          y="76"
          width="280"
          height="40"
          rx="2"
        />
        <text
          className="krimos-flow-text krimos-flow-text--accent"
          x="260"
          y="101"
          textAnchor="middle"
        >
          gate 1 · prospect approval
        </text>

        <line className="krimos-flow-line" x1="260" y1="116" x2="260" y2="140" />
        <polygon className="krimos-flow-arrow" points="260,140 256,132 264,132" />

        <rect className="krimos-flow-node" x="140" y="144" width="240" height="40" rx="2" />
        <text className="krimos-flow-text" x="260" y="169" textAnchor="middle">
          intelligence
        </text>
        <text
          className="krimos-flow-text krimos-flow-text--muted"
          x="260"
          y="196"
          textAnchor="middle"
        >
          ordinance dossiers · warm-path maps · sources
        </text>

        <line className="krimos-flow-line" x1="260" y1="204" x2="260" y2="228" />
        <polygon className="krimos-flow-arrow" points="260,228 256,220 264,220" />

        <rect
          className="krimos-flow-node krimos-flow-node--gate"
          x="120"
          y="232"
          width="280"
          height="40"
          rx="2"
        />
        <text
          className="krimos-flow-text krimos-flow-text--accent"
          x="260"
          y="257"
          textAnchor="middle"
        >
          gate 2 · intelligence review
        </text>

        <line className="krimos-flow-line" x1="260" y1="272" x2="260" y2="296" />
        <polygon className="krimos-flow-arrow" points="260,296 256,288 264,288" />

        <rect className="krimos-flow-node" x="140" y="300" width="240" height="40" rx="2" />
        <text className="krimos-flow-text" x="260" y="325" textAnchor="middle">
          outreach
        </text>
        <text
          className="krimos-flow-text krimos-flow-text--muted"
          x="260"
          y="352"
          textAnchor="middle"
        >
          warm-intro ask · email fallback · linkedin touch
        </text>

        <line className="krimos-flow-line" x1="260" y1="360" x2="260" y2="384" />
        <polygon className="krimos-flow-arrow" points="260,384 256,376 264,376" />

        <rect
          className="krimos-flow-node krimos-flow-node--gate"
          x="120"
          y="388"
          width="280"
          height="40"
          rx="2"
        />
        <text
          className="krimos-flow-text krimos-flow-text--accent"
          x="260"
          y="413"
          textAnchor="middle"
        >
          gate 3 · outreach sign-off
        </text>

        <line className="krimos-flow-line" x1="260" y1="428" x2="260" y2="452" />
        <polygon className="krimos-flow-arrow" points="260,452 256,444 264,444" />

        <rect
          className="krimos-flow-node krimos-flow-node--accent"
          x="120"
          y="456"
          width="280"
          height="40"
          rx="2"
        />
        <text
          className="krimos-flow-text krimos-flow-text--accent"
          x="260"
          y="481"
          textAnchor="middle"
        >
          operator send action
        </text>

        <line className="krimos-flow-line" x1="260" y1="496" x2="260" y2="520" />
        <polygon className="krimos-flow-arrow" points="260,520 256,512 264,512" />

        <rect
          className="krimos-flow-node krimos-flow-node--output"
          x="100"
          y="524"
          width="320"
          height="44"
          rx="2"
        />
        <text
          className="krimos-flow-text krimos-flow-text--accent"
          x="260"
          y="551"
          textAnchor="middle"
        >
          outbox (simulated default)
        </text>

        <line className="krimos-flow-line" x1="260" y1="568" x2="260" y2="592" />
        <polygon className="krimos-flow-arrow" points="260,592 256,584 264,584" />

        <rect className="krimos-flow-node" x="80" y="596" width="360" height="36" rx="2" />
        <text
          className="krimos-flow-text krimos-flow-text--muted"
          x="260"
          y="618"
          textAnchor="middle"
        >
          stage state machine enforced in code · gate violations blocked
        </text>

        <line
          className="krimos-flow-line krimos-flow-line--dashed"
          x1="400"
          y1="28"
          x2="460"
          y2="28"
        />
        <line className="krimos-flow-line krimos-flow-line--dashed" x1="460" y1="28" x2="460" y2="640" />
        <line className="krimos-flow-line krimos-flow-line--dashed" x1="460" y1="640" x2="400" y2="640" />

        <rect
          className="krimos-flow-node"
          x="380"
          y="648"
          width="160"
          height="40"
          rx="2"
        />
        <text className="krimos-flow-text" x="460" y="673" textAnchor="middle">
          pipeline tracker
        </text>
        <text
          className="krimos-flow-text krimos-flow-text--muted"
          x="460"
          y="700"
          textAnchor="middle"
        >
          digest + next actions
        </text>
        <text
          className="krimos-flow-text krimos-flow-text--muted"
          x="460"
          y="718"
          textAnchor="middle"
        >
          read-only · never advances stage
        </text>

        <rect className="krimos-flow-node" x="100" y="760" width="320" height="36" rx="2" />
        <text
          className="krimos-flow-text krimos-flow-text--muted"
          x="260"
          y="782"
          textAnchor="middle"
        >
          autonomous execution under absolute control
        </text>
      </svg>
    </div>
  );
}

function AgentCard({ agent }: { agent: Agent }) {
  return (
    <article
      className="krimos-agent-card"
      style={{
        borderTop: "1px solid var(--line)",
        paddingTop: 22,
        paddingBottom: 26,
      }}
    >
      <h3
        className="body-text krimos-card-title"
        style={{
          fontSize: "clamp(16px, 1.2vw, 19px)",
          marginBottom: 10,
        }}
      >
        {agent.name}
      </h3>
      <dl className="body-text muted" style={{ fontSize: 14, lineHeight: 1.58 }}>
        <div style={{ marginBottom: 8 }}>
          <dt className="meta" style={{ fontSize: 10, marginBottom: 4 }}>
            trigger
          </dt>
          <dd>{agent.trigger}</dd>
        </div>
        <div style={{ marginBottom: 8 }}>
          <dt className="meta" style={{ fontSize: 10, marginBottom: 4 }}>
            input
          </dt>
          <dd>{agent.input}</dd>
        </div>
        <div style={{ marginBottom: 8 }}>
          <dt className="meta" style={{ fontSize: 10, marginBottom: 4 }}>
            output
          </dt>
          <dd>{agent.output}</dd>
        </div>
        <div>
          <dt className="meta" style={{ fontSize: 10, marginBottom: 4 }}>
            constraint
          </dt>
          <dd>{agent.constraint}</dd>
        </div>
      </dl>
    </article>
  );
}

function GateRow({ gate }: { gate: Gate }) {
  return (
    <article
      style={{
        borderTop: "1px solid var(--line)",
        paddingTop: 18,
        paddingBottom: 20,
      }}
    >
      <h3
        className="body-text krimos-card-title"
        style={{ fontSize: 15, marginBottom: 8 }}
      >
        {gate.name}
      </h3>
      <p className="body-text muted" style={{ fontSize: 14, lineHeight: 1.55 }}>
        <span className="meta" style={{ fontSize: 10 }}>
          pauses after {gate.pausesAfter}
        </span>
        <br />
        {gate.question}
      </p>
      <p className="body-text mt-3" style={{ fontSize: 14 }}>
        {gate.why}
      </p>
    </article>
  );
}

export default function KrimosGtmPage() {
  return (
    <main className="krimos-gtm relative pb-32">
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
            gtm plan
          </p>
        </Reveal>

        <div className="krimos-heading-row">
          <Reveal y={18} blur={10}>
            <HeroSettingsIcon />
          </Reveal>
          <SplitTextReveal
            as="h1"
            className="section-title hero-bitmap-title min-w-0 flex-1"
            text={"zero to five. governed gtm."}
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
              maxWidth: 600,
            }}
          >
            bengaluru sfbs and mfis. compliance wedge plus agent system that
            executes under human control.
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <EducationCredential className="mt-10" />
        </Reveal>
      </Column>

      <Column as="section" topPad={100} id="beachhead">
        <Reveal>
          <SectionMeta num="01" label="what i'd execute" />
        </Reveal>

        <SplitTextReveal
          as="h2"
          className="section-title accent--governance"
          text={"zero to first five paying customers"}
          splitBy="word"
          stagger={0.04}
        />

        <Reveal delay={0.12}>
          <p className="body-text mt-12">
            beachhead: bengaluru small finance banks and microfinance
            institutions. one city, one regulation, one wedge.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <SubsectionHeading>why bengaluru, why now</SubsectionHeading>
          <p className="body-text">
            two of india&apos;s eleven sfbs are headquartered here (ujjivan and
            jana). creditaccess grameen, iifl samasta, bss microfinance (kotak),
            and chaitanya india fin credit sit in the same city. founder-led
            sales works when every buyer is a short drive away.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="body-text mt-7">
            akmi and mfin karnataka provide warm introductions. the ecosystem has
            absorbed vendor tech before (jana&apos;s digital model, ujjivan core
            migrations).
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <p className="body-text mt-7">
            karnataka&apos;s micro loan ordinance (feb 2025) criminalised
            coercive collections. every collections call is now a compliance
            event that must be provably within policy.
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <p className="body-text mt-7 muted">
            we are not selling efficiency. we are selling protection from the
            kind of collections call that ends in an fir.
          </p>
        </Reveal>

        <Reveal delay={0.32}>
          <SubsectionHeading>entry products</SubsectionHeading>
          <BorderList
            items={[
              "primary: kendra governed collections pilot. provable ordinance compliance.",
              "second: kula back-office automation for sfbs. cost-to-serve framing.",
              "motion: warm intros first (akmi, mfin, nibm fintech edge), founder-led demos, paid 60-day pilots.",
            ]}
          />
        </Reveal>
      </Column>

      <Column as="section" topPad={120} id="sequencing">
        <Reveal>
          <SectionMeta num="02" label="sequencing" />
        </Reveal>

        <SplitTextReveal
          as="h2"
          className="section-title accent--governance"
          text={"waves 1 through 3"}
          splitBy="word"
          stagger={0.04}
        />

        <Reveal delay={0.12}>
          <SubsectionHeading>wave 1 · days 0 to 30</SubsectionHeading>
          <p className="body-text">
            mid-size karnataka nbfc-mfis (aum ~500 to 5,000 cr). targets:
            chaitanya india, bss microfinance, navachetana (haveri),
            sanghamithra, vistaar.
          </p>
          <p className="body-text mt-7">
            single decision maker (coo or head of collections), acute ordinance
            pain, four-to-eight-week cycles, no procurement bureaucracy. entry:
            governed-collections pilot as fixed-fee 60-day engagement. weekly
            deliverable: ordinance-compliance report they assemble by hand today.
          </p>
          <p className="meta mt-6" style={{ fontSize: 12 }}>
            day-30 target: 40 scored prospects, 15 conversations, 5 demos, 2 pilot
            agreements in redlines.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <SubsectionHeading>wave 2 · days 30 to 60</SubsectionHeading>
          <p className="body-text">
            bengaluru sfbs and large mfis, seeded from day 0. targets: ujjivan,
            jana, creditaccess grameen, iifl samasta, skdrdp.
          </p>
          <p className="body-text mt-7">
            relationship-building starts day 0 through nibm fintech edge while
            wave 1 closes. conduct-risk framing to the cro for large mfis
            (creditaccess at 50-lakh-borrower scale; iifl post-2024 rbi
            episode). kula cost-to-serve framing for sfbs.
          </p>
          <p className="meta mt-6" style={{ fontSize: 12 }}>
            day-60 target: 3 paid pilots signed (2 wave 1, 1 large mfi), 2 sfb
            evaluations formally opened.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <SubsectionHeading>wave 3 · days 60 to 90</SubsectionHeading>
          <p className="body-text">
            convert pilots to annual contracts using measured artefacts (audit
            trails, hours saved). open chennai corridor (equitas, esaf) through
            references. karnataka urban cooperative bank channel via cooperative
            federations, productised compliance-reporting pack sold through
            channel.
          </p>
          <p className="meta mt-6" style={{ fontSize: 12 }}>
            day-90 target: 5 paying customers (3 pilot-to-paid, 2 new paid
            pilots), plus 2 lois in the sfb track.
          </p>
        </Reveal>
      </Column>

      <Column as="section" topPad={120} id="operating-model">
        <Reveal>
          <SectionMeta num="03" label="operating model" />
        </Reveal>

        <SplitTextReveal
          as="h2"
          className="section-title accent--governance"
          text={"what i own vs what agents do"}
          splitBy="word"
          stagger={0.04}
        />

        <Reveal delay={0.12}>
          <p className="body-text mt-12">
            agents handle research, scoring, dossier-building, drafting, and
            pipeline tracking at a volume one person cannot reach alone.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-8">
            <BorderList
              items={[
                "gate 1: which institutions enter the pipeline at all",
                "gate 2: whether the intelligence is true",
                "gate 3: whether a message is fit to carry krim's name into a regulated institution",
              ]}
            />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="body-text mt-7">
            nothing is sent without my explicit approval. same principle krimos
            sells: autonomous execution under absolute control.
          </p>
        </Reveal>
      </Column>

      <Column as="section" topPad={120} id="risks">
        <Reveal>
          <SectionMeta num="04" label="honest risks" />
        </Reveal>

        <SplitTextReveal
          as="h2"
          className="section-title accent--governance"
          text={"what could stall this"}
          splitBy="word"
          stagger={0.04}
        />

        <Reveal delay={0.12}>
          <div className="mt-12">
            <BorderList
              items={[
                "ordinance suppressed mfi collections and morale. some buyers are frozen, not spending. pitch: operate safely again, not another compliance cost.",
                "kotak and iifl group procurement can stall mid-size deals. wave 1 carries five independent opportunities, not one.",
                "if wave 1 conversion is weak by day 45, pull wave 3 federation and ucb channel motion forward.",
              ]}
            />
          </div>
        </Reveal>
      </Column>

      <Column as="section" topPad={120} id="execution-layer">
        <Reveal>
          <SectionMeta num="05" label="execution layer" />
        </Reveal>

        <SplitTextReveal
          as="h2"
          className="section-title accent--governance"
          text={"gtm agent system"}
          splitBy="word"
          stagger={0.04}
        />

        <Reveal delay={0.12}>
          <p className="body-text mt-12">
            shaped like a miniature krimos: agents execute, policies constrain, a
            human governs, everything lands in an append-only audit trail.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="body-text mt-7">
            prospector hunts karnataka sfbs and mfis against wave icp.
            intelligence builds ordinance-exposure dossiers with warm-path maps.
            outreach drafts warm-intro asks before cold email. pipeline tracker
            is read-only.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="body-text mt-7 muted">
            a prospect&apos;s stage field is the single source of truth. every
            agent route checks stage before acting and refuses with a
            gate-violation error if its gate has not been cleared. enforced in
            code, not by convention.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <GtmPipelineFlowchart />
        </Reveal>
      </Column>

      <section
        id="agents"
        style={{
          paddingLeft: "max(18vw, 28px)",
          paddingRight: "max(6vw, 24px)",
          paddingTop: 120,
        }}
      >
        <div style={{ maxWidth: 960 }}>
          <Reveal>
            <SectionMeta num="06" label="the agents" />
          </Reveal>

          <Reveal delay={0.06}>
            <h2
              className="section-title accent--governance"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
            >
              four agents, three gates
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="body-text mt-8 muted">
              claude (claude-sonnet-4-5) via vercel ai sdk with generateObject +
              zod schemas. firecrawl grounds live runs. mock mode runs the full
              pipeline with zero keys using 12 curated karnataka institutions.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-x-12">
            {AGENTS.map((agent, i) => (
              <Reveal key={agent.name} delay={0.12 + i * 0.05}>
                <AgentCard agent={agent} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Column as="section" topPad={120} id="gates-delivery">
        <Reveal>
          <SectionMeta num="07" label="gates + delivery + audit" />
        </Reveal>

        <SplitTextReveal
          as="h2"
          className="section-title accent--governance"
          text={"human gates where errors are irreversible"}
          splitBy="word"
          stagger={0.04}
        />

        <Reveal delay={0.12}>
          <p className="body-text mt-12 muted">
            gates sit where errors are strategic, not on every step. otherwise
            the human becomes the bottleneck the system was built to remove.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-8">
            {GATES.map((gate) => (
              <GateRow key={gate.name} gate={gate} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <SubsectionHeading>delivery layer</SubsectionHeading>
          <p className="body-text">
            default: simulated outbox, nothing real leaves the demo. with
            outreach_delivery=live plus gmail smtp, approved email sends go via
            nodemailer from operator gmail, routed to outreach_test_recipient
            because pipeline holds no verified institutional contacts yet.
          </p>
          <p className="body-text mt-7 muted">
            warm_intro and linkedin channels are always logged only. delivery is
            a swappable adapter; browser-agent or transactional mail slots into
            the same seam.
          </p>
        </Reveal>

        <Reveal delay={0.26}>
          <SubsectionHeading>audit trail</SubsectionHeading>
          <p className="body-text">
            every prospect sourcing, dossier version, draft edit, gate decision,
            and send is an append-only row in audit_log with actor attribution
            (agent:*, operator, system:outbox). the demo&apos;s governance model
            is the product&apos;s governance model, by design.
          </p>
        </Reveal>
      </Column>

      <Column as="section" topPad={120} id="limits-roadmap">
        <Reveal>
          <SectionMeta num="08" label="limits + month 2" />
        </Reveal>

        <SplitTextReveal
          as="h2"
          className="section-title accent--governance"
          text={"known limits and what comes next"}
          splitBy="word"
          stagger={0.04}
        />

        <Reveal delay={0.12}>
          <SubsectionHeading>known limits</SubsectionHeading>
          <div className="mt-4">
            <BorderList
              items={[
                "people data is the weak link. key-people fields default to verify-before-send placeholders. gate 2 exists because of this.",
                "firecrawl snippets are shallow for low-web-presence institutions (navachetana, sanghamithra). live dossiers lean on model knowledge.",
                "single-operator model: no auth or roles. fine for founder-led motion, not for a team.",
                "sqlite plus polling ui, no real-time push. approvals inbox refreshes on action.",
              ]}
            />
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <SubsectionHeading>month 2 roadmap</SubsectionHeading>
          <div className="mt-4">
            <BorderList
              items={[
                "reply-handling agent: classify inbound, draft responses, new reply sign-off gate",
                "meeting-prep agent: pre-demo brief per institution on meeting morning",
                "scheduled autonomy: weekly prospector and tracker crons; gate 1 becomes batch review queue",
                "people-data integration (linkedin sales navigator / apollo) for verified names at gate 2",
                "pilot-success telemetry: track pilot kpis in same dashboard",
                "postgres plus auth for multi-operator use as team grows",
              ]}
            />
          </div>
        </Reveal>
      </Column>

      <Column as="section" topPad={120} id="closing">
        <Reveal>
          <p className="meta" style={{ marginBottom: 24 }}>
            closing
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="body-text">
            governed gtm for regulated institutions. agents do the volume work.
            humans own the judgment calls that matter.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
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

        <Reveal delay={0.24}>
          <div
            className="mt-24 flex items-center justify-between"
            style={{ borderTop: "1px solid var(--line)", paddingTop: 22 }}
          >
            <span className="meta">gtm plan · krimos</span>
            <span className="meta">v0.1</span>
          </div>
        </Reveal>
      </Column>
    </main>
  );
}
