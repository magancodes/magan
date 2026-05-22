"use client";

import Column from "@/components/Column";
import Reveal from "@/components/Reveal";
import SplitTextReveal from "@/components/SplitTextReveal";
import { PROJECTS, type Project } from "@/lib/projects";

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
        className="body-text"
        style={{
          fontSize: "clamp(16px, 1.2vw, 19px)",
          color: "var(--primary)",
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

export default function Projects() {
  return (
    <Column id="projects" topPad={260}>
      <Reveal y={18} blur={10}>
        <p className="meta" style={{ marginBottom: 22 }}>
          07 — selected builds
        </p>
      </Reveal>

      <SplitTextReveal
        as="h2"
        className="section-title accent--indigo"
        text={"things i've built"}
        splitBy="word"
        stagger={0.04}
      />

      <Reveal delay={0.18}>
        <p className="body-text mt-12 muted">
          systems shipped when something felt worth understanding or fixing.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-x-12">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.title} delay={0.24 + i * 0.05}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Column>
  );
}
