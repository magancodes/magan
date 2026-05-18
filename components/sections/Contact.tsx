"use client";

import Column from "@/components/Column";
import Reveal from "@/components/Reveal";

const LINKS = [
  { label: "email", href: "mailto:maganjot_2302mc06@iitp.ac.in" },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/maganjot-singh-aa80a5214",
  },
  { label: "github", href: "https://github.com/magancodes" },
  { label: "phone", href: "tel:+918178075050" },
];

export default function Contact() {
  return (
    <Column id="contact" topPad={260} as="footer">
      <Reveal y={18} blur={10}>
        <p className="meta" style={{ marginBottom: 26 }}>
          07 — contact
        </p>
      </Reveal>

      <ul className="flex flex-col" style={{ gap: "14px" }}>
        {LINKS.map((l, i) => (
          <Reveal key={l.label} delay={i * 0.08}>
            <li>
              <a
                className="link"
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                data-cursor="link"
              >
                {l.label}
              </a>
            </li>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={0.4} y={10} blur={8}>
        <p
          className="mt-32 muted"
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "clamp(18px, 1.5vw, 22px)",
            letterSpacing: "0.005em",
          }}
        >
          still building.
        </p>
      </Reveal>

      <div
        className="mt-24 mb-16 flex items-center justify-between"
        style={{ borderTop: "1px solid var(--line)", paddingTop: 22 }}
      >
        <span className="meta">© {new Date().getFullYear()} maganjot singh</span>
        <span className="meta">notebook v0.1 — kept at 3am</span>
      </div>
    </Column>
  );
}
