"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Column from "@/components/Column";
import Reveal from "@/components/Reveal";
import SplitTextReveal from "@/components/SplitTextReveal";
import clsx from "@/lib/clsx";

type GridCardProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

function GridCard({ title, children, className }: GridCardProps) {
  return (
    <div
      className={clsx(
        "border-t pt-6",
        className
      )}
      style={{ borderColor: "var(--line)" }}
    >
      <h3 className="meta mb-4">{title}</h3>
      <div className="body-text" style={{ maxWidth: "none", fontSize: 15 }}>
        {children}
      </div>
    </div>
  );
}

type PhaseSectionProps = {
  id: string;
  num: string;
  title: string;
  timeline: string;
  accent: "accent--orange" | "accent--pink" | "accent--blue";
  intro?: string;
  grid: React.ReactNode;
  body?: React.ReactNode;
};

function PhaseSection({
  id,
  num,
  title,
  timeline,
  accent,
  intro,
  grid,
  body,
}: PhaseSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      style={{
        paddingLeft: "max(18vw, 28px)",
        paddingRight: "max(6vw, 24px)",
        paddingTop: 120,
      }}
    >
      <div style={{ maxWidth: 960 }}>
        <Reveal y={18} blur={10}>
          <p className="meta" style={{ marginBottom: 22 }}>
            {num} — {timeline}
          </p>
        </Reveal>

        <div id={`${id}-title`}>
          <SplitTextReveal
            as="h2"
            className={clsx("section-title", accent)}
            text={title}
            splitBy="word"
            stagger={0.04}
          />
        </div>

        {intro && (
          <Reveal delay={0.12}>
            <p className="body-text mt-10" style={{ maxWidth: 560 }}>
              {intro}
            </p>
          </Reveal>
        )}

        <div
          className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2"
          style={{ maxWidth: 960 }}
        >
          {grid}
        </div>

        {body && (
          <Reveal delay={0.2}>
            <div className="mt-12 space-y-7" style={{ maxWidth: 560 }}>
              {body}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

function OximyLogo() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className="meta"
        style={{
          letterSpacing: "0.14em",
          fontSize: 15,
          color: "var(--primary)",
        }}
        aria-label="Oximy"
      >
        oximy
      </span>
    );
  }

  return (
    <Image
      src="/oximy-logo.svg"
      alt="Oximy"
      width={160}
      height={40}
      priority
      onError={() => setFailed(true)}
      style={{ height: "auto", width: "clamp(120px, 18vw, 160px)" }}
    />
  );
}

export default function OximyGtmPage() {
  return (
    <main className="relative pb-32">
      <header
        style={{
          paddingLeft: "max(18vw, 28px)",
          paddingRight: "max(6vw, 24px)",
          paddingTop: 96,
        }}
      >
        <div
          className="flex flex-wrap items-center justify-between gap-6"
          style={{ maxWidth: 960 }}
        >
          <Reveal y={12} blur={6}>
            <OximyLogo />
          </Reveal>
          <Reveal delay={0.08}>
            <Link href="/" className="cta-button" data-cursor="link">
              ← back to portfolio
            </Link>
          </Reveal>
        </div>
      </header>

      <Column as="section" topPad={72} id="hero">
        <Reveal y={18} blur={10}>
          <p className="meta" style={{ marginBottom: 24 }}>
            gtm plan
          </p>
        </Reveal>

        <SplitTextReveal
          as="h1"
          className="section-title accent--orange"
          text={"build intelligence before you scale outreach."}
          splitBy="word"
          stagger={0.05}
        />

        <Reveal delay={0.2}>
          <p
            className="mt-10"
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(17px, 1.4vw, 22px)",
              letterSpacing: "0.005em",
              color: "var(--secondary)",
              lineHeight: 1.45,
              maxWidth: 560,
            }}
          >
            an intelligence and distribution system for AI security — not a
            traditional sales playbook.
          </p>
        </Reveal>
      </Column>

      <Column as="section" topPad={100} id="intro">
        <Reveal>
          <h2 className="section-title accent--blue" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}>
            How I&apos;d build GTM for Oximy
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="body-text mt-10">
            I wouldn&apos;t approach this like a traditional sales process.
            I&apos;d approach it like building an intelligence and distribution
            system around AI security.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="body-text mt-7">
            The goal early on is not &ldquo;scale outreach.&rdquo;
            <br />
            The goal is:
          </p>
        </Reveal>

        <Reveal delay={0.22}>
          <ul className="body-text mt-6 space-y-3" style={{ listStyle: "none", padding: 0 }}>
            {[
              "understand where AI adoption is happening fastest",
              "identify where security pain already exists",
              "get into the right conversations early",
              "build trust with technical teams",
              "create repeatable systems around that",
            ].map((item) => (
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
        </Reveal>

        <Reveal delay={0.3}>
          <p className="body-text mt-10">
            Most AI companies are still figuring things out internally.
            That&apos;s the opportunity.
          </p>
        </Reveal>
      </Column>

      <PhaseSection
        id="phase-1"
        num="phase 1"
        title="build the signal map."
        timeline="first 2–3 weeks"
        accent="accent--pink"
        intro="Before any outbound, I'd build a live map of where AI adoption and security friction are converging — so every conversation starts from real context, not a list."
        grid={
          <>
            <Reveal delay={0.08}>
              <GridCard title="what I'd track">
                <ul className="space-y-2 muted" style={{ listStyle: "none", padding: 0 }}>
                  {[
                    "new AI tool rollouts at mid-market and enterprise companies",
                    "security incidents tied to shadow AI or unsanctioned LLM use",
                    "job postings for AI security, AI governance, and ML platform roles",
                    "compliance triggers — EU AI Act, SOC2 AI addenda, internal audit cycles",
                    "funding and product launches in AI-native categories",
                    "open-source and community momentum around AI security tooling",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </GridCard>
            </Reveal>
            <Reveal delay={0.14}>
              <GridCard title="regions">
                <ul className="space-y-2 muted" style={{ listStyle: "none", padding: 0 }}>
                  {[
                    "US West — SF, Seattle: earliest adopters, highest tool velocity",
                    "US East — NYC, Boston: regulated finance, security-first buyers",
                    "UK / EU — compliance-driven procurement, longer cycles but strong fit",
                    "India — engineering hubs and offshore security teams influencing US/EU stacks",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </GridCard>
            </Reveal>
          </>
        }
        body={
          <>
            <p className="body-text">
              This becomes a live ecosystem map — updated weekly, not a static
              ICP doc. Signals get scored by urgency: active pain beats
              theoretical interest.
            </p>
            <p className="body-text muted">
              What this creates: a prioritized queue of accounts and people where
              Oximy can show up with context. Outreach stops being cold because
              the research already happened.
            </p>
          </>
        }
      />

      <PhaseSection
        id="phase-2"
        num="phase 2"
        title="outbound that doesn't feel like outbound."
        timeline="weeks 3–6"
        accent="accent--orange"
        intro="Once the signal map exists, distribution becomes surgical — warm intros, technical relevance, and channels where security people actually pay attention."
        grid={
          <>
            <Reveal delay={0.08}>
              <GridCard title="focus areas">
                <ul className="space-y-2 muted" style={{ listStyle: "none", padding: 0 }}>
                  {[
                    "security engineers evaluating AI tooling and data flows",
                    "CISO offices building AI governance programs from scratch",
                    "platform teams shipping LLM features without a security review loop",
                    "DevSecOps leads stuck between velocity and control",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </GridCard>
            </Reveal>
            <Reveal delay={0.12}>
              <GridCard title="not focus areas">
                <ul className="space-y-2 muted" style={{ listStyle: "none", padding: 0 }}>
                  {[
                    "spray-and-pray enterprise lists",
                    "mass LinkedIn InMail with generic AI security copy",
                    "conference booth spam without a follow-up system",
                    "chasing logos that aren't showing adoption signals yet",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </GridCard>
            </Reveal>
            <Reveal delay={0.16}>
              <GridCard title="channels">
                <ul className="space-y-2 muted" style={{ listStyle: "none", padding: 0 }}>
                  {[
                    "hyper-personalized email tied to a specific signal from the map",
                    "warm intros through founders, investors, and security communities",
                    "technical posts and short breakdowns where practitioners gather",
                    "Slack / Discord / niche forums — participate before pitching",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </GridCard>
            </Reveal>
            <Reveal delay={0.2}>
              <GridCard title="objective">
                <p className="muted">
                  Start qualified conversations — not close deals. Every touch
                  should answer: &ldquo;why you, why now?&rdquo; If it
                  can&apos;t, it doesn&apos;t go out.
                </p>
              </GridCard>
            </Reveal>
          </>
        }
      />

      <PhaseSection
        id="phase-3"
        num="phase 3"
        title="win the meetings."
        timeline="ongoing from week 4"
        accent="accent--blue"
        intro="Oximy wins when technical buyers trust the person across the table. The job is to compress time-to-trust — show the problem clearly, show the product honestly."
        grid={
          <>
            <Reveal delay={0.08}>
              <GridCard title="strengths to lead with">
                <ul className="space-y-2 muted" style={{ listStyle: "none", padding: 0 }}>
                  {[
                    "speak engineer and founder — no translation layer needed",
                    "can walk through AI security architecture without a slide deck",
                    "founder's office background: comfortable with ambiguity and speed",
                    "systems thinker — meetings end with a clear next step, not a vague follow-up",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </GridCard>
            </Reveal>
            <Reveal delay={0.14}>
              <GridCard title="the line that closes">
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    fontWeight: 300,
                    fontSize: "clamp(16px, 1.2vw, 19px)",
                    lineHeight: 1.5,
                    color: "var(--primary)",
                  }}
                >
                  &ldquo;Get on a call with me and see — I&apos;ll show you
                  exactly where AI is leaking in your stack and what Oximy
                  catches in the first ten minutes.&rdquo;
                </p>
              </GridCard>
            </Reveal>
          </>
        }
        body={
          <p className="body-text muted">
            Demo-led, pain-first, no feature tours. If the call doesn&apos;t
            surface a real problem, it&apos;s a learning signal for the map —
            not a wasted hour.
          </p>
        }
      />

      <PhaseSection
        id="phase-4"
        num="phase 4"
        title="narrative and ecosystem presence."
        timeline="weeks 6–10"
        accent="accent--pink"
        intro="Once conversations are flowing, GTM shifts to compounding visibility — Oximy should become the name people reference when AI security comes up."
        grid={
          <>
            <Reveal delay={0.08}>
              <GridCard title="positioning areas">
                <ul className="space-y-2 muted" style={{ listStyle: "none", padding: 0 }}>
                  {[
                    "AI security as infrastructure — not a compliance checkbox",
                    "intelligence-first GTM mirrors the product thesis",
                    "technical trust before commercial velocity",
                    "built for teams shipping AI faster than their security can keep up",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </GridCard>
            </Reveal>
            <Reveal delay={0.12}>
              <GridCard title="content style">
                <ul className="space-y-2 muted" style={{ listStyle: "none", padding: 0 }}>
                  {[
                    "practical breakdowns — not thought-leader fluff",
                    "anonymized patterns from the signal map and customer calls",
                    "short technical posts, not 2,000-word essays",
                    "founder voice + practitioner depth",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </GridCard>
            </Reveal>
            <Reveal delay={0.16}>
              <GridCard title="goal">
                <p className="muted">
                  When someone in a security Slack channel asks &ldquo;what are
                  people using for AI security?&rdquo; — Oximy is in the first
                  three replies.
                </p>
              </GridCard>
            </Reveal>
          </>
        }
      />

      <PhaseSection
        id="phase-5"
        num="phase 5"
        title="turn GTM into infrastructure."
        timeline="long-term"
        accent="accent--orange"
        intro="The end state isn't a heroic outbound motion — it's a machine that ingests signals, routes conversations, and compounds distribution without linear headcount."
        grid={
          <>
            <Reveal delay={0.08}>
              <GridCard title="systems to build">
                <ul className="space-y-2 muted" style={{ listStyle: "none", padding: 0 }}>
                  {[
                    "signal ingestion pipeline — funding, jobs, incidents, tool adoption",
                    "CRM wired to signal data, not just contact records",
                    "content repurposing from customer conversations and demos",
                    "partner and channel playbook for security consultancies",
                    "metrics dashboard — pipeline by signal source, not just stage",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </GridCard>
            </Reveal>
            <Reveal delay={0.14}>
              <GridCard title="distribution as infrastructure">
                <p className="muted">
                  Outbound, content, community, and partnerships all feed the
                  same map. GTM stops being a function and becomes an operating
                  layer — the same way Oximy wants security to be infrastructure,
                  not an afterthought.
                </p>
              </GridCard>
            </Reveal>
          </>
        }
      />

      <Column as="section" topPad={120} id="why-me">
        <Reveal y={18} blur={10}>
          <p className="meta" style={{ marginBottom: 22 }}>
            why I fit this
          </p>
        </Reveal>

        <SplitTextReveal
          as="h2"
          className="section-title accent--blue"
          text={"GTM is systems design."}
          splitBy="word"
          stagger={0.05}
        />

        <Reveal delay={0.12}>
          <p className="body-text mt-10">
            At{" "}
            <span style={{ color: "var(--primary)" }}>Saturn Labs</span>, I
            worked as an extension of the founding team — product, ops, hiring,
            execution. Zero-to-one in messy environments where the playbook
            doesn&apos;t exist yet.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="body-text mt-7">
            As overall convener for{" "}
            <span style={{ color: "var(--primary)" }}>Inter IIT Tech Meet</span>,
            I coordinated thousands of stakeholders, vendors, and timelines —
            the same muscle GTM needs when you&apos;re building trust across
            technical and commercial sides.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <p className="body-text mt-7">
            With{" "}
            <a
              className="link"
              href="https://trxnd.io"
              target="_blank"
              rel="noreferrer"
              data-cursor="link"
            >
              TRXND
            </a>
            , I&apos;m building distribution systems — content engines, warm-lead
            pipelines, orchestrated conversations. GTM isn&apos;t separate from
            that work; it&apos;s the same thesis applied to a security product.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="body-text mt-7">
            I think about GTM as systems design: signals in, prioritized
            actions out, feedback loops that get sharper every week. I&apos;m
            India-based but not geography-bound — async-first, US/EU timezone
            overlap, and comfortable owning a motion that spans regions from day
            one.
          </p>
        </Reveal>

        <Reveal delay={0.38}>
          <p
            className="mt-14"
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(18px, 1.6vw, 24px)",
              lineHeight: 1.45,
              color: "var(--primary)",
            }}
          >
            Oximy needs someone who can build the map before the motion, earn
            trust in technical rooms, and turn early wins into infrastructure.
            That&apos;s the work I do best.
          </p>
        </Reveal>
      </Column>
    </main>
  );
}
