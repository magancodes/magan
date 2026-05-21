"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Column from "@/components/Column";
import Reveal from "@/components/Reveal";
import SplitTextReveal from "@/components/SplitTextReveal";
import clsx from "@/lib/clsx";

const PIXEL_ICON = { shapeRendering: "crispEdges" as const };

function HeroSettingsIcon() {
  return (
    <span className="oximy-section-icon oximy-hero-icon" aria-hidden>
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

function PixelMapIcon() {
  return (
    <span className="oximy-section-icon" aria-hidden>
      <svg width={22} height={22} viewBox="0 0 10 10" fill="currentColor" {...PIXEL_ICON}>
        <rect x="1" y="1" width="8" height="1" />
        <rect x="1" y="9" width="8" height="1" />
        <rect x="1" y="1" width="1" height="9" />
        <rect x="8" y="1" width="1" height="9" />
        <rect x="2" y="2" width="2" height="2" />
        <rect x="6" y="2" width="2" height="2" />
        <rect x="4" y="5" width="2" height="2" />
      </svg>
    </span>
  );
}

function PixelGridIcon() {
  return (
    <span className="oximy-section-icon" aria-hidden>
      <svg width={22} height={22} viewBox="0 0 10 10" fill="currentColor" {...PIXEL_ICON}>
        <rect x="1" y="1" width="3" height="3" />
        <rect x="6" y="1" width="3" height="3" />
        <rect x="1" y="6" width="3" height="3" />
        <rect x="6" y="6" width="3" height="3" />
      </svg>
    </span>
  );
}

function PixelStarIcon() {
  return (
    <span className="oximy-section-icon" aria-hidden>
      <svg width={22} height={22} viewBox="0 0 10 10" fill="currentColor" {...PIXEL_ICON}>
        <rect x="4" y="0" width="2" height="2" />
        <rect x="2" y="2" width="2" height="2" />
        <rect x="6" y="2" width="2" height="2" />
        <rect x="0" y="4" width="2" height="2" />
        <rect x="4" y="4" width="2" height="2" />
        <rect x="8" y="4" width="2" height="2" />
        <rect x="2" y="6" width="2" height="2" />
        <rect x="6" y="6" width="2" height="2" />
        <rect x="4" y="8" width="2" height="2" />
      </svg>
    </span>
  );
}

function PixelNetworkIcon() {
  return (
    <span className="oximy-section-icon" aria-hidden>
      <svg width={22} height={22} viewBox="0 0 10 10" fill="currentColor" {...PIXEL_ICON}>
        <rect x="4" y="4" width="2" height="2" />
        <rect x="1" y="1" width="2" height="2" />
        <rect x="7" y="1" width="2" height="2" />
        <rect x="1" y="7" width="2" height="2" />
        <rect x="7" y="7" width="2" height="2" />
        <rect x="3" y="2" width="2" height="1" />
        <rect x="5" y="2" width="2" height="1" />
        <rect x="2" y="3" width="1" height="2" />
        <rect x="7" y="3" width="1" height="2" />
        <rect x="2" y="5" width="1" height="2" />
        <rect x="7" y="5" width="1" height="2" />
        <rect x="3" y="7" width="2" height="1" />
        <rect x="5" y="7" width="2" height="1" />
      </svg>
    </span>
  );
}

function PixelPhaseIcon({ variant }: { variant: "signal" | "outbound" | "meet" | "narrative" | "infra" }) {
  const icons = {
    signal: (
      <>
        <rect x="1" y="4" width="2" height="2" />
        <rect x="4" y="2" width="2" height="2" />
        <rect x="7" y="4" width="2" height="2" />
        <rect x="4" y="6" width="2" height="2" />
      </>
    ),
    outbound: (
      <>
        <rect x="1" y="4" width="6" height="2" />
        <rect x="6" y="3" width="2" height="1" />
        <rect x="7" y="4" width="2" height="2" />
        <rect x="6" y="6" width="2" height="1" />
      </>
    ),
    meet: (
      <>
        <rect x="2" y="2" width="6" height="5" />
        <rect x="3" y="7" width="4" height="1" />
      </>
    ),
    narrative: (
      <>
        <rect x="1" y="2" width="8" height="1" />
        <rect x="1" y="4" width="6" height="1" />
        <rect x="1" y="6" width="8" height="1" />
      </>
    ),
    infra: (
      <>
        <rect x="2" y="1" width="6" height="2" />
        <rect x="1" y="4" width="2" height="5" />
        <rect x="7" y="4" width="2" height="5" />
        <rect x="3" y="7" width="4" height="2" />
      </>
    ),
  };

  return (
    <span className="oximy-phase-icon" aria-hidden>
      <svg width={14} height={14} viewBox="0 0 10 10" fill="currentColor" {...PIXEL_ICON}>
        {icons[variant]}
      </svg>
    </span>
  );
}

function SectionHeading({
  icon,
  children,
  className,
  style,
  id,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}) {
  return (
    <h2 id={id} className={className} style={style}>
      <span className="oximy-section-heading">
        {icon}
        <span>{children}</span>
      </span>
    </h2>
  );
}

type PhaseCardProps = {
  num: string;
  title: string;
  titleIcon?: React.ReactNode;
  timeline?: string;
  accent: "accent--orange" | "accent--pink" | "accent--blue";
  children: React.ReactNode;
};

function PhaseCard({ num, title, titleIcon, timeline, accent, children }: PhaseCardProps) {
  return (
    <article
      className="flex flex-col"
      style={{
        border: "1px solid var(--line)",
        padding: "clamp(10px, 1.1vw, 14px)",
        background: "rgba(240, 229, 199, 0.02)",
      }}
    >
      <header className="mb-2 shrink-0">
        <p className="meta" style={{ marginBottom: 4, fontSize: 10 }}>
          {timeline ? `${num} - ${timeline}` : num}
        </p>
        <h3
          className={clsx("oximy-phase-title", accent)}
          style={{
            fontSize: "clamp(13px, 0.95vw, 16px)",
            lineHeight: 1.15,
          }}
        >
          {titleIcon}
          {title}
        </h3>
      </header>
      <div
        className="space-y-1.5"
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 200,
          fontSize: "clamp(10px, 0.72vw, 12px)",
          lineHeight: 1.38,
          color: "var(--primary)",
        }}
      >
        {children}
      </div>
    </article>
  );
}

function PhaseLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="meta"
      style={{ fontSize: 9, marginTop: 5, marginBottom: 2, letterSpacing: "0.06em" }}
    >
      {children}
    </p>
  );
}

function PhaseList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }} className="space-y-0.5">
      {items.map((item) => (
        <li
          key={item}
          style={{
            borderLeft: "1px solid var(--line)",
            paddingLeft: 6,
            color: "var(--secondary)",
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function PhaseP({ children, muted }: { children: React.ReactNode; muted?: boolean }) {
  return (
    <p style={{ color: muted ? "var(--secondary)" : undefined, margin: 0 }}>{children}</p>
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
      src="/oximy-logo.png"
      alt="Oximy"
      width={393}
      height={123}
      priority
      onError={() => setFailed(true)}
      style={{ height: "auto", width: "clamp(160px, 24vw, 220px)", display: "block" }}
    />
  );
}

export default function OximyGtmPage() {
  return (
    <main className="oximy-gtm relative pb-32">
      <header
        style={{
          paddingLeft: "max(18vw, 28px)",
          paddingRight: "max(6vw, 24px)",
          paddingTop: 96,
        }}
      >
        <div style={{ maxWidth: 960 }}>
          <Reveal y={12} blur={6}>
            <OximyLogo />
          </Reveal>
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

        <div className="oximy-heading-row">
          <Reveal y={18} blur={10}>
            <HeroSettingsIcon />
          </Reveal>
          <SplitTextReveal
            as="h1"
            className="section-title hero-bitmap-title min-w-0 flex-1"
            text={"build intelligence before you scale outreach."}
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
            an intelligence and distribution system for AI security, not a
            traditional sales playbook.
          </p>
        </Reveal>
      </Column>

      <Column as="section" topPad={100} id="unfair-advantage">
        <Reveal>
          <p className="meta" style={{ marginBottom: 16 }}>
            unfair advantage
          </p>
        </Reveal>

        <Reveal delay={0.04}>
          <SectionHeading
            icon={<PixelNetworkIcon />}
            className="section-title accent--orange"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            the network I have is what you need.
          </SectionHeading>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionHeading
            icon={<PixelMapIcon />}
            className="section-title accent--blue"
            style={{
              fontSize: "clamp(1.35rem, 2.4vw, 2rem)",
              marginTop: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            I already operate in the environments Oximy needs
          </SectionHeading>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="body-text mt-10">I&apos;m already close to:</p>
        </Reveal>

        <Reveal delay={0.16}>
          <ul className="body-text mt-6 space-y-3" style={{ listStyle: "none", padding: 0 }}>
            {[
              "founders",
              "operators",
              "engineers",
              "AI builders",
              "startup ecosystems",
              "IIT networks",
              "fast-moving product teams",
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

        <Reveal delay={0.2}>
          <p className="body-text mt-10">
            Inter IIT Tech Meet gave me access to companies and a network across
            all 23 IITs. Real relationships, not just campus visibility.
          </p>
        </Reveal>
      </Column>

      <Column as="section" topPad={100} id="intro">
        <Reveal>
          <SectionHeading
            icon={<PixelMapIcon />}
            className="section-title accent--blue"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            How I&apos;d build GTM for Oximy
          </SectionHeading>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="body-text mt-10">
            I wouldn&apos;t approach this like a traditional sales process.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="body-text mt-7">
            I&apos;d approach it like building an intelligence and distribution
            system around AI security.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="body-text mt-7">
            The goal early on is not &ldquo;scale outreach.&rdquo;
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="body-text mt-7">The goal is:</p>
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
          </p>
        </Reveal>

        <Reveal delay={0.32}>
          <p className="body-text mt-7">That&apos;s the opportunity.</p>
        </Reveal>
      </Column>

      <section
        id="plan"
        aria-labelledby="plan-title"
        style={{
          paddingLeft: "max(4vw, 20px)",
          paddingRight: "max(4vw, 20px)",
          paddingTop: 80,
        }}
      >
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <Reveal>
            <p className="meta" style={{ marginBottom: 16 }}>
              the plan
            </p>
            <SectionHeading
              id="plan-title"
              icon={<PixelGridIcon />}
              className="section-title accent--pink"
              style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.25rem)", marginBottom: 24 }}
            >
              five phases. one system.
            </SectionHeading>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:items-stretch">

            <Reveal delay={0.04}>
              <PhaseCard
                num="phase 1"
                title="Build the signal map"
                titleIcon={<PixelPhaseIcon variant="signal" />}
                timeline="first 2–3 weeks"
                accent="accent--pink"
              >
                <PhaseP>
                  I&apos;d start by building a live ecosystem map around companies
                  actively deploying AI.
                </PhaseP>
                <PhaseP muted>Not random lead lists.</PhaseP>
                <PhaseP muted>Actual signal.</PhaseP>
                <PhaseLabel>What I&apos;d track</PhaseLabel>
                <PhaseList
                  items={[
                    "startups shipping AI features",
                    "companies hiring AI infra/platform/security roles",
                    "teams talking about governance/compliance",
                    "startups scaling internal copilots or agents",
                    "AI-native SaaS companies",
                    "infra-heavy engineering orgs",
                    "founders publicly discussing AI workflows",
                  ]}
                />
                <PhaseLabel>Regions</PhaseLabel>
                <PhaseList
                  items={[
                    "SF startups",
                    "NYC AI ecosystem",
                    "India AI-native SaaS",
                    "remote-first AI companies",
                  ]}
                />
                <PhaseLabel>What this creates</PhaseLabel>
                <PhaseP muted>Instead of blind outbound, we know:</PhaseP>
                <PhaseList
                  items={[
                    "who's moving fast",
                    "who's under pressure",
                    "who probably already has security gaps",
                    "who recently raised",
                    "who's scaling too quickly for their current infra",
                  ]}
                />
                <PhaseP muted>
                  That becomes the foundation for everything else.
                </PhaseP>
              </PhaseCard>
            </Reveal>

            <Reveal delay={0.08}>
              <PhaseCard
                num="phase 2"
                title="Build outbound that doesn't feel like outbound"
                titleIcon={<PixelPhaseIcon variant="outbound" />}
                timeline="weeks 3–6"
                accent="accent--orange"
              >
                <PhaseP>Most outbound fails because it&apos;s generic.</PhaseP>
                <PhaseP muted>Especially with technical buyers.</PhaseP>
                <PhaseLabel>I&apos;d focus on:</PhaseLabel>
                <PhaseList
                  items={[
                    "contextual outreach",
                    "company-specific observations",
                    "AI workflow discussions",
                    "infra/security pain points",
                    "founder/operator-level messaging",
                  ]}
                />
                <PhaseLabel>Not:</PhaseLabel>
                <PhaseP muted>
                  &ldquo;Hey, just checking if you&apos;re interested in AI
                  security.&rdquo;
                </PhaseP>
                <PhaseP muted>That gets ignored instantly.</PhaseP>
                <PhaseLabel>The messaging should feel like:</PhaseLabel>
                <PhaseList
                  items={[
                    "someone who understands their stack",
                    "understands their velocity",
                    "and understands what breaks when AI adoption scales too fast",
                  ]}
                />
                <PhaseLabel>Channels</PhaseLabel>
                <PhaseList
                  items={[
                    "LinkedIn",
                    "X/Twitter",
                    "email",
                    "founder circles",
                    "Reddit signal monitoring",
                    "engineering communities",
                    "warm intros through operators and alumni networks",
                  ]}
                />
                <PhaseP muted>The objective isn&apos;t volume.</PhaseP>
                <PhaseP muted>The objective is:</PhaseP>
                <PhaseP>book high-quality conversations consistently.</PhaseP>
              </PhaseCard>
            </Reveal>

            <Reveal delay={0.12}>
              <PhaseCard
                num="phase 3"
                title="Win the meetings"
                titleIcon={<PixelPhaseIcon variant="meet" />}
                accent="accent--blue"
              >
                <PhaseP>This is probably where I&apos;m strongest.</PhaseP>
                <PhaseP muted>
                  If I can get someone on a call, I can usually move the
                  conversation somewhere meaningful.
                </PhaseP>
                <PhaseP muted>Not because I &ldquo;sell aggressively.&rdquo;</PhaseP>
                <PhaseP muted>Because I adapt fast in live conversations.</PhaseP>
                <PhaseLabel>I&apos;m good at:</PhaseLabel>
                <PhaseList
                  items={[
                    "reading what people actually care about",
                    "simplifying technical ideas",
                    "asking the right questions quickly",
                    "making conversations feel collaborative",
                    "understanding operational pain in real time",
                    "creating trust without sounding scripted",
                  ]}
                />
                <PhaseP muted>
                  A lot of enterprise GTM dies before the meeting.
                </PhaseP>
                <PhaseP muted>
                  I think my advantage starts once the meeting begins.
                </PhaseP>
                <PhaseP muted>Honestly, doubting that is fair.</PhaseP>
                <p
                  className="bitmap-accent-line"
                  style={{
                    fontSize: "inherit",
                    lineHeight: 1.45,
                    color: "var(--primary)",
                    margin: "4px 0 0",
                  }}
                >
                  Get on a call with me and see.
                </p>
              </PhaseCard>
            </Reveal>

            <Reveal delay={0.16}>
              <PhaseCard
                num="phase 4"
                title="Build narrative and ecosystem presence"
                titleIcon={<PixelPhaseIcon variant="narrative" />}
                timeline="weeks 6–10"
                accent="accent--pink"
              >
                <PhaseP>
                  Most AI security companies sound identical online.
                </PhaseP>
                <PhaseP muted>Too much jargon.</PhaseP>
                <PhaseP muted>Too much fear marketing.</PhaseP>
                <PhaseP muted>Too little real operator insight.</PhaseP>
                <PhaseLabel>I&apos;d help position Oximy around:</PhaseLabel>
                <PhaseList
                  items={[
                    "real AI adoption problems",
                    "operational security gaps",
                    "governance friction",
                    "velocity vs safety tradeoffs",
                    "lessons from teams shipping AI fast",
                  ]}
                />
                <PhaseLabel>Content style</PhaseLabel>
                <PhaseP muted>Not polished enterprise fluff.</PhaseP>
                <PhaseP muted>More:</PhaseP>
                <PhaseList
                  items={[
                    "observations",
                    "breakdowns",
                    "short operator insights",
                    "ecosystem analysis",
                    "technical GTM content",
                    "\"here's what we're seeing\" style narratives",
                  ]}
                />
                <PhaseLabel>The goal is to become recognizable inside:</PhaseLabel>
                <PhaseList
                  items={[
                    "AI founder circles",
                    "infra communities",
                    "engineering ecosystems",
                    "startup operators",
                  ]}
                />
              </PhaseCard>
            </Reveal>

            <Reveal delay={0.2}>
              <PhaseCard
                num="phase 5"
                title="Turn GTM into infrastructure"
                titleIcon={<PixelPhaseIcon variant="infra" />}
                timeline="long-term"
                accent="accent--orange"
              >
                <PhaseP muted>
                  Long-term, GTM shouldn&apos;t depend on brute-force outreach
                  forever.
                </PhaseP>
                <PhaseLabel>I&apos;d help build:</PhaseLabel>
                <PhaseList
                  items={[
                    "outbound systems",
                    "CRM workflows",
                    "lead intelligence pipelines",
                    "content loops",
                    "meeting feedback systems",
                    "referral loops",
                    "automated follow-ups",
                    "account research systems",
                    "ecosystem relationship maps",
                  ]}
                />
                <PhaseP muted>Because eventually:</PhaseP>
                <PhaseP>
                  distribution itself should become infrastructure.
                </PhaseP>
                <PhaseP muted>That&apos;s already how I think.</PhaseP>
              </PhaseCard>
            </Reveal>
          </div>
        </div>
      </section>

      <Column as="section" topPad={120} id="why-me">
        <Reveal>
          <SectionHeading
            icon={<PixelStarIcon />}
            className="section-title accent--blue"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            Why I fit this
          </SectionHeading>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="body-text mt-10">
            I don&apos;t come from a polished enterprise background.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="body-text mt-7">I come from environments where:</p>
        </Reveal>

        <Reveal delay={0.14}>
          <ul className="body-text mt-6 space-y-3" style={{ listStyle: "none", padding: 0 }}>
            {[
              "ambiguity is normal",
              "systems are broken",
              "timelines are unrealistic",
              "and execution matters more than presentations",
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

        <Reveal delay={0.18}>
          <p className="body-text mt-10">
            At Saturn Labs, I worked across:
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <ul className="body-text mt-6 space-y-3" style={{ listStyle: "none", padding: 0 }}>
            {[
              "operations",
              "hiring",
              "product execution",
              "backend systems",
              "rapid iteration",
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

        <Reveal delay={0.24}>
          <p className="body-text mt-7">
            Sometimes the gap between idea and deployment was less than a day.
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <p className="body-text mt-10">
            At Inter IIT Tech Meet 14.0, I led execution across:
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <ul className="body-text mt-6 space-y-3" style={{ listStyle: "none", padding: 0 }}>
            {[
              "23 IITs",
              "2000+ participants",
              "₹1Cr+ operations",
              "multiple external partners and internal teams",
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

        <Reveal delay={0.34}>
          <p className="body-text mt-7">That experience trained me to:</p>
        </Reveal>

        <Reveal delay={0.36}>
          <ul className="body-text mt-6 space-y-3" style={{ listStyle: "none", padding: 0 }}>
            {[
              "operate under pressure",
              "coordinate chaos",
              "make decisions quickly",
              "and keep moving when things stop being organized",
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

        <Reveal delay={0.4}>
          <p className="body-text mt-10">
            I also think deeply about distribution.
          </p>
        </Reveal>

        <Reveal delay={0.42}>
          <p className="body-text mt-7">TRXND came from a simple belief:</p>
        </Reveal>

        <Reveal delay={0.44}>
          <p className="body-text mt-7">
            most products don&apos;t fail at the build. they fail at distribution.
          </p>
        </Reveal>

        <Reveal delay={0.46}>
          <p className="body-text mt-7">So I&apos;ve spent time building:</p>
        </Reveal>

        <Reveal delay={0.48}>
          <ul className="body-text mt-6 space-y-3" style={{ listStyle: "none", padding: 0 }}>
            {[
              "content engines",
              "outbound systems",
              "lead pipelines",
              "narrative systems",
              "Reddit intelligence tooling",
              "marketing infrastructure",
              "account orchestration systems",
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

        <Reveal delay={0.52}>
          <p className="body-text mt-10">
            Because I don&apos;t see GTM as &ldquo;sales.&rdquo;
          </p>
        </Reveal>

        <Reveal delay={0.54}>
          <p className="body-text mt-7">I see it as systems design.</p>
        </Reveal>

        <Reveal delay={0.58}>
          <p className="body-text mt-10">
            And even though I&apos;m based in India, I don&apos;t think modern
            GTM is geography-bound anymore.
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <p className="body-text mt-7">The buyers may be in SF.</p>
        </Reveal>

        <Reveal delay={0.62}>
          <p className="body-text mt-7">But the leverage now comes from:</p>
        </Reveal>

        <Reveal delay={0.64}>
          <ul className="body-text mt-6 space-y-3" style={{ listStyle: "none", padding: 0 }}>
            {[
              "intelligence",
              "positioning",
              "communication",
              "systems",
              "speed",
              "consistency",
              "relationship building online",
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

        <Reveal delay={0.68}>
          <p className="body-text mt-10">
            Most founders don&apos;t need another generic SDR.
          </p>
        </Reveal>

        <Reveal delay={0.7}>
          <p className="body-text mt-7">They need someone who:</p>
        </Reveal>

        <Reveal delay={0.72}>
          <ul className="body-text mt-6 space-y-3" style={{ listStyle: "none", padding: 0 }}>
            {[
              "thinks like an operator",
              "understands technical environments",
              "communicates naturally",
              "learns fast",
              "builds systems",
              "creates momentum",
              "and can execute independently",
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

        <Reveal delay={0.76}>
          <p className="body-text mt-10">
            That&apos;s the lane where I fit naturally.
          </p>
        </Reveal>
      </Column>
    </main>
  );
}
