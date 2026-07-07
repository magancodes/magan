"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Column from "@/components/Column";
import Reveal from "@/components/Reveal";
import SplitTextReveal from "@/components/SplitTextReveal";

const PIXEL_ICON = { shapeRendering: "crispEdges" as const };

function HeroRedditIcon() {
  return (
    <span className="oximy-section-icon oximy-hero-icon" aria-hidden>
      <svg width={28} height={28} viewBox="0 0 10 10" fill="currentColor" {...PIXEL_ICON}>
        <rect x="1" y="3" width="8" height="5" />
        <rect x="2" y="2" width="6" height="1" />
        <rect x="0" y="4" width="1" height="2" />
        <rect x="9" y="4" width="1" height="2" />
        <rect x="3" y="4" width="1" height="1" fill="var(--bg, #0e1117)" />
        <rect x="6" y="4" width="1" height="1" fill="var(--bg, #0e1117)" />
        <rect x="3" y="6" width="4" height="1" fill="var(--bg, #0e1117)" />
        <rect x="6" y="0" width="2" height="1" />
        <rect x="7" y="1" width="1" height="1" />
      </svg>
    </span>
  );
}

function PixelToolIcon() {
  return (
    <span className="oximy-section-icon" aria-hidden>
      <svg width={22} height={22} viewBox="0 0 10 10" fill="currentColor" {...PIXEL_ICON}>
        <rect x="1" y="1" width="8" height="2" />
        <rect x="1" y="1" width="2" height="8" />
        <rect x="4" y="4" width="2" height="2" />
        <rect x="6" y="6" width="2" height="2" />
        <rect x="7" y="7" width="2" height="2" />
      </svg>
    </span>
  );
}

function PixelTargetIcon() {
  return (
    <span className="oximy-section-icon" aria-hidden>
      <svg width={22} height={22} viewBox="0 0 10 10" fill="currentColor" {...PIXEL_ICON}>
        <rect x="1" y="1" width="8" height="1" />
        <rect x="1" y="8" width="8" height="1" />
        <rect x="1" y="1" width="1" height="8" />
        <rect x="8" y="1" width="1" height="8" />
        <rect x="4" y="4" width="2" height="2" />
      </svg>
    </span>
  );
}

function PixelBoltIcon() {
  return (
    <span className="oximy-section-icon" aria-hidden>
      <svg width={22} height={22} viewBox="0 0 10 10" fill="currentColor" {...PIXEL_ICON}>
        <rect x="5" y="0" width="2" height="2" />
        <rect x="4" y="2" width="2" height="2" />
        <rect x="3" y="4" width="4" height="2" />
        <rect x="4" y="6" width="2" height="2" />
        <rect x="3" y="8" width="2" height="2" />
      </svg>
    </span>
  );
}

function PixelChartIcon() {
  return (
    <span className="oximy-section-icon" aria-hidden>
      <svg width={22} height={22} viewBox="0 0 10 10" fill="currentColor" {...PIXEL_ICON}>
        <rect x="1" y="6" width="2" height="3" />
        <rect x="4" y="3" width="2" height="6" />
        <rect x="7" y="1" width="2" height="8" />
      </svg>
    </span>
  );
}

function PixelNewsIcon() {
  return (
    <span className="oximy-section-icon" aria-hidden>
      <svg width={22} height={22} viewBox="0 0 10 10" fill="currentColor" {...PIXEL_ICON}>
        <rect x="1" y="1" width="8" height="1" />
        <rect x="1" y="3" width="5" height="1" />
        <rect x="7" y="3" width="2" height="3" />
        <rect x="1" y="5" width="5" height="1" />
        <rect x="1" y="7" width="8" height="1" />
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

function PixelPersonIcon() {
  return (
    <span className="oximy-section-icon" aria-hidden>
      <svg width={22} height={22} viewBox="0 0 10 10" fill="currentColor" {...PIXEL_ICON}>
        <rect x="3" y="1" width="4" height="4" />
        <rect x="2" y="6" width="6" height="3" />
        <rect x="1" y="7" width="1" height="2" />
        <rect x="8" y="7" width="1" height="2" />
      </svg>
    </span>
  );
}

function PixelHomeIcon() {
  return (
    <span className="oximy-section-icon" aria-hidden>
      <svg width={22} height={22} viewBox="0 0 10 10" fill="currentColor" {...PIXEL_ICON}>
        <rect x="4" y="1" width="2" height="1" />
        <rect x="3" y="2" width="4" height="1" />
        <rect x="2" y="3" width="6" height="1" />
        <rect x="2" y="4" width="6" height="5" />
        <rect x="4" y="6" width="2" height="3" fill="var(--bg, #0e1117)" />
      </svg>
    </span>
  );
}

function PixelShieldIcon() {
  return (
    <span className="oximy-section-icon" aria-hidden>
      <svg width={22} height={22} viewBox="0 0 10 10" fill="currentColor" {...PIXEL_ICON}>
        <rect x="2" y="1" width="6" height="4" />
        <rect x="2" y="5" width="6" height="2" />
        <rect x="3" y="7" width="4" height="1" />
        <rect x="4" y="8" width="2" height="1" />
      </svg>
    </span>
  );
}

function PixelCalendarIcon() {
  return (
    <span className="oximy-section-icon" aria-hidden>
      <svg width={22} height={22} viewBox="0 0 10 10" fill="currentColor" {...PIXEL_ICON}>
        <rect x="1" y="2" width="8" height="7" />
        <rect x="2" y="0" width="1" height="2" />
        <rect x="7" y="0" width="1" height="2" />
        <rect x="2" y="4" width="6" height="1" fill="var(--bg, #0e1117)" />
        <rect x="3" y="6" width="1" height="1" fill="var(--bg, #0e1117)" />
        <rect x="6" y="6" width="1" height="1" fill="var(--bg, #0e1117)" />
      </svg>
    </span>
  );
}

function PixelGaugeIcon() {
  return (
    <span className="oximy-section-icon" aria-hidden>
      <svg width={22} height={22} viewBox="0 0 10 10" fill="currentColor" {...PIXEL_ICON}>
        <rect x="1" y="8" width="8" height="1" />
        <rect x="1" y="5" width="1" height="3" />
        <rect x="8" y="5" width="1" height="3" />
        <rect x="2" y="3" width="2" height="2" />
        <rect x="6" y="3" width="2" height="2" />
        <rect x="4" y="2" width="2" height="2" />
        <rect x="5" y="5" width="1" height="3" />
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

const HEADING_STYLE: React.CSSProperties = {
  fontSize: "clamp(1.5rem, 2.8vw, 2.25rem)",
};

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="body-text mt-6 space-y-3" style={{ listStyle: "none", padding: 0 }}>
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

export default function OximyRedditPlanPage() {
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
              <Link href="/oximy-gtm" className="cta-button" data-cursor="link">
                ← back to gtm plan
              </Link>
            </div>
          </Reveal>
        </div>
      </header>

      <Column as="section" topPad={72} id="hero">
        <Reveal y={18} blur={10}>
          <p className="meta" style={{ marginBottom: 24 }}>
            gtm plan / reddit
          </p>
        </Reveal>

        <div className="oximy-heading-row">
          <Reveal y={18} blur={10}>
            <HeroRedditIcon />
          </Reveal>
          <SplitTextReveal
            as="h1"
            className="section-title hero-bitmap-title oximy-title-verbatim min-w-0 flex-1"
            text={"Oximy on Reddit: the plan"}
            splitBy="word"
            stagger={0.05}
          />
        </div>

        <Reveal delay={0.2}>
          <p className="body-text mt-10">
            {`The short version: reddit is where the exact people we sell to already hang out, already stressing about the exact problem we solve. we just have to show up the right way. the wrong way gets us banned in five minutes. the right way makes oximy look like the people who actually get it. here's how we do the right way.`}
          </p>
        </Reveal>
      </Column>

      <Column as="section" topPad={100} id="oximy-id">
        <Reveal>
          <SectionHeading
            icon={<PixelToolIcon />}
            className="section-title accent--orange"
            style={HEADING_STYLE}
          >
            the whole thing rests on oximy.id
          </SectionHeading>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="body-text mt-10">
            {`oximy.id is the best asset we have for this. paste any ai tool's url after it and you get a trust score in seconds. data retention, compliance, training, incidents, 6,500+ tools, no signup. that matters because reddit hates promo and nukes it on sight. but a free tool with no signup that answers the exact question people are already asking ("is it safe to paste our stuff into this thing") is a legit reason to show up. so we lead with the tool, always. never the company.`}
          </p>
        </Reveal>
      </Column>

      <Column as="section" topPad={100} id="sell-the-problem">
        <Reveal>
          <SectionHeading
            icon={<PixelTargetIcon />}
            className="section-title accent--blue"
            style={HEADING_STYLE}
          >
            {`don't sell the platform, sell the problem`}
          </SectionHeading>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="body-text mt-10">
            {`nobody opens reddit to buy "enterprise ai governance." so we don't talk like that. we talk about the thing people actually feel, which is "you have no clue what your ai tools do with your data." oximy.id is the free answer to that. the oximy platform is the enterprise answer, and it only comes up when it genuinely fits the conversation. not before.`}
          </p>
        </Reveal>
      </Column>

      <Column as="section" topPad={100} id="off-guard">
        <Reveal>
          <SectionHeading
            icon={<PixelBoltIcon />}
            className="section-title accent--pink"
            style={HEADING_STYLE}
          >
            {`"catch them off guard" done right`}
          </SectionHeading>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="body-text mt-10">
            {`the dinners are good but everyone in that room has their guard up. it's obviously a sales thing. reddit is the opposite. same cisos, same ai leads, but we catch them mid scroll, mid problem, not braced for a pitch. off guard here means useful and un salesy in the moment they're actually dealing with shadow ai. it does not mean sneaky. the second it feels like a trick we've lost them, and for a trust company that's fatal.`}
          </p>
        </Reveal>
      </Column>

      <Column as="section" topPad={100} id="why-now">
        <Reveal>
          <SectionHeading
            icon={<PixelChartIcon />}
            className="section-title accent--orange"
            style={HEADING_STYLE}
          >
            why now, and this is also the content
          </SectionHeading>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="body-text mt-10">
            {`timing is genuinely on our side and it's all backed by numbers. every one of these is a post, and every post ends with an oximy.id score as the receipt.`}
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <BulletList
            items={[
              `shadow ai detections went up 4x in a year. 45% of employees now use ai on work devices. it's the 3rd most common non malicious insider action now. (verizon 2026 dbir)`,
              `shadow ai adds about $670k to the average breach. 1 in 5 orgs already had a breach from it. only 37% even have a policy to catch it. and these breaches take a week longer to contain. (ibm 2025)`,
              `the average company runs about 14 ai tools. it knows about 4 or 5 of them. (productiv 2026)`,
              `roughly 27% of the corporate data people paste into ai is sensitive, up from about 11% the year before. average employee feeds sensitive data to an ai tool once every 3 working days. (cyberhaven 2026)`,
              `90% of security pros use unapproved ai themselves. 66% of office workers use ai against policy. (cybersecurity dive / pagerduty 2026)`,
              `ai governance spend is around $492m in 2026, headed past $1b by 2030. (gartner)`,
            ]}
          />
        </Reveal>
      </Column>

      <Column as="section" topPad={100} id="newsjack">
        <Reveal>
          <SectionHeading
            icon={<PixelNewsIcon />}
            className="section-title accent--blue"
            style={HEADING_STYLE}
          >
            stuff to newsjack
          </SectionHeading>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="body-text mt-10">
            {`when one of these hits the feed, we jump in with an oximy.id score instead of an opinion.`}
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <BulletList
            items={[
              `samsung 2023. engineers pasted source code and meeting notes into chatgpt, company banned it. the classic "this already happened to a real company" story.`,
              `litellm / teampcp, may 2026. supply chain attack on an ai gateway library. one compromise leaked openai, anthropic and azure creds. the angle is "sometimes the shadow ai is the infrastructure, not the employee."`,
              `chatgpt dns side channel bug, found early 2026, patched feb 20. the angle is "native controls aren't enough on their own."`,
              `the regulation clock. eu ai act enforcement started aug 2026. colorado's law hit june 30 2026. california ab 2013 on training data. auditors stopped asking if ai is in your stack, now they ask where.`,
              `naman's own "worst security week" thread. mercor breached, anthropic leaked its own source code twice, a compliance startup accused of faking audits. that's already a reddit post, just repost it native.`,
            ]}
          />
        </Reveal>
      </Column>

      <Column as="section" topPad={100} id="where-and-rules">
        <Reveal>
          <SectionHeading
            icon={<PixelMapIcon />}
            className="section-title accent--pink"
            style={HEADING_STYLE}
          >
            where the buyers actually are, and the rules
          </SectionHeading>
        </Reveal>

        <Reveal delay={0.1}>
          <BulletList
            items={[
              `security and it, and these are strict so value first only: r/cybersecurity, r/netsec, r/AskNetsec, r/sysadmin, r/ITManagers, r/msp, r/GRC, r/compliance.`,
              `ai and dev, also strict: r/artificial, r/ArtificialInteligence, r/OpenAI, r/ChatGPT, r/ExperiencedDevs, r/devops.`,
              `privacy: r/privacy, r/privacytoolsIO.`,
              `promo friendly, good for launches and feedback: r/SideProject (weekly share thread), r/SaaS (show and tell saturday), r/roastmystartup, r/AlphaandBetausers.`,
            ]}
          />
        </Reveal>

        <Reveal delay={0.18}>
          <p className="body-text mt-10">
            {`the rules that run all of these: 90/10, meaning at least 9 real contributions for every 1 mention of us. always say who you are ("i'm the founder of oximy"). only mention the product when it actually solves the thing someone asked about. and kill the marketing words. "revolutionary," "game changing," "best solution" all get you downvoted instantly. use reddit.trxnd.io for the honest, useful job here: figure out which subs the ai data risk convos actually live in, what phrasing gets upvotes, and when to post. that's listening and targeting. not faking anything.`}
          </p>
        </Reveal>
      </Column>

      <Column as="section" topPad={100} id="content-engine">
        <Reveal>
          <SectionHeading
            icon={<PixelPersonIcon />}
            className="section-title accent--orange"
            style={HEADING_STYLE}
          >
            the content engine is naman, not a brand account
          </SectionHeading>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="body-text mt-10">
            {`naman posts as himself, disclosed. his voice already works. shadow ai, transparency, "the compliance layer was always fiction." that beats a logo account every time. newsjack the incidents with an oximy.id screenshot because on reddit data beats opinion. and the flagship post writes itself: "i scored 6,500 ai tools for data safety, here are the 10 worst offenders you're probably using." useful, shareable, and it's literally the product.`}
          </p>
        </Reveal>
      </Column>

      <Column as="section" topPad={100} id="r-oximy">
        <Reveal>
          <SectionHeading
            icon={<PixelHomeIcon />}
            className="section-title accent--blue"
            style={HEADING_STYLE}
          >
            {`about r/oximy and it "taking off"`}
          </SectionHeading>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="body-text mt-10">
            {`being honest here so we don't set the wrong expectation. brand subreddits almost never blow up on their own. people don't subscribe to a company. so r/oximy is the home base we pull people back to, not the thing that creates demand. demand comes from showing up useful in the big subs, dropping oximy.id, and then curious people find r/oximy and see it's an active, transparent project. we seed it well and let it be a landing spot, not a growth engine.`}
          </p>
        </Reveal>
      </Column>

      <Column as="section" topPad={100} id="one-rule">
        <Reveal>
          <SectionHeading
            icon={<PixelShieldIcon />}
            className="section-title accent--pink"
            style={HEADING_STYLE}
          >
            the one rule we do not break
          </SectionHeading>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="mt-10"
            style={{
              border: "1px solid var(--line)",
              padding: "clamp(14px, 1.6vw, 20px)",
              background: "rgba(240, 229, 199, 0.02)",
            }}
          >
            <p className="body-text" style={{ margin: 0 }}>
              {`no fake accounts, no personas, no coordinated posting, no upvote rings. reddit permanently bans that stuff, often by ip, and they actioned 45 million+ pieces of content for spam in 2024 alone. but forget the ban risk for a sec. we sell transparent trust profiles. if oximy ever got caught astroturfing reddit, that one headline undoes the entire company. it's the single dumbest risk we could take. and the value first way is safer and just works better anyway, so there's no reason to even flirt with it.`}
            </p>
          </div>
        </Reveal>
      </Column>

      <Column as="section" topPad={100} id="first-30-days">
        <Reveal>
          <SectionHeading
            icon={<PixelCalendarIcon />}
            className="section-title accent--orange"
            style={HEADING_STYLE}
          >
            first 30 days
          </SectionHeading>
        </Reveal>

        <Reveal delay={0.1}>
          <BulletList
            items={[
              `week 1. map the target subs with reddit.trxnd.io. actually read each sub's rules. seed r/oximy with 5 to 8 genuinely useful posts (tool guides, worst offenders lists, how to audit your ai stack).`,
              `week 2. naman posts 2 pov / newsjack pieces as himself in r/cybersecurity and r/artificial, disclosed. answer real questions with oximy.id links only where they actually help. this is where we build the 90/10 history.`,
              `week 3. drop the flagship "i scored 6,500 ai tools" post. native crosspost it into relevant subs, don't copy paste.`,
              `week 4. turn the threads that hit into a weekly thing, call it "ai trust watch," one incident plus a score every week.`,
            ]}
          />
        </Reveal>
      </Column>

      <Column as="section" topPad={100} id="what-we-measure">
        <Reveal>
          <SectionHeading
            icon={<PixelGaugeIcon />}
            className="section-title accent--blue"
            style={HEADING_STYLE}
          >
            what we measure
          </SectionHeading>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="body-text mt-10">
            {`oximy.id sessions and tools scored coming from reddit. r/oximy members and how many actually post. demo requests that mention reddit. and branded search going up.`}
          </p>
        </Reveal>
      </Column>
    </main>
  );
}
