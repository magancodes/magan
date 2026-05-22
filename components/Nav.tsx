"use client";

import { useEffect, useState } from "react";

type Section = { id: string; num: string; label: string };

const SECTIONS: Section[] = [
  { id: "saturn", num: "01", label: "saturn" },
  { id: "inter-iit", num: "02", label: "inter iit" },
  { id: "past", num: "03", label: "past" },
  { id: "trxnd", num: "04", label: "trxnd" },
  { id: "philosophy", num: "05", label: "philosophy" },
  { id: "thoughts", num: "06", label: "fragments" },
  { id: "applications", num: "07", label: "applications" },
  { id: "contact", num: "08", label: "contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* track scroll for the blur backdrop */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* lock body scroll while overlay is open */
  useEffect(() => {
    const lenis = typeof window !== "undefined" ? window.__lenis : undefined;
    if (open) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [open]);

  /* close on Escape */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const goTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();

    /* 1. Restore scrolling SYNCHRONOUSLY — don't wait for React state.
          If we don't, `lenis.stop()` from the [open] effect leaves the page
          locked and `lenis.scrollTo()` becomes a no-op on mobile. */
    const lenis = window.__lenis;
    lenis?.start();
    document.body.style.overflow = "";
    document.documentElement.classList.remove("lenis-stopped");

    /* 2. Close the overlay (state update flushes on next render) */
    setOpen(false);

    /* 3. Schedule the scroll for the next frame so any pending React work
          (the overlay fade-out) has time to commit before we animate. */
    const target = id === "top" ? 0 : `#${id}`;
    const doScroll = () => {
      if (lenis) {
        // small offset so the section's meta label doesn't tuck under the nav
        lenis.scrollTo(target, { duration: 1.6, offset: -32 });
      } else if (typeof target === "string") {
        document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    requestAnimationFrame(doScroll);
  };

  return (
    <>
      <nav
        className={`nav ${scrolled ? "nav-scrolled" : ""} ${
          open ? "nav-over-overlay" : ""
        }`}
        aria-label="Primary"
      >
        <a
          href="#top"
          onClick={goTo("top")}
          className="nav-mark"
          data-cursor="link"
          aria-label="Back to top"
        >
          M.
        </a>

        <ul className="nav-links" aria-label="Sections">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={goTo(s.id)}
                className="nav-link"
                data-cursor="link"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`nav-burger ${open ? "is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="nav-overlay"
        >
          <span aria-hidden />
          <span aria-hidden />
        </button>
      </nav>

      {/* Mobile fullscreen overlay menu */}
      <div
        id="nav-overlay"
        className={`nav-overlay ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <ul className="nav-overlay-list">
          {SECTIONS.map((s, i) => (
            <li
              key={s.id}
              style={{ transitionDelay: `${open ? 220 + i * 55 : 0}ms` }}
            >
              <a
                href={`#${s.id}`}
                onClick={goTo(s.id)}
                className="nav-overlay-link"
                data-cursor="link"
                tabIndex={open ? 0 : -1}
              >
                <span className="nav-num">{s.num}</span>
                <span className="nav-word">{s.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div
          className="nav-overlay-footer"
          style={{ transitionDelay: `${open ? 220 + SECTIONS.length * 55 : 0}ms` }}
        >
          <span className="meta">maganjot singh</span>
          <span className="meta">still building.</span>
        </div>
      </div>
    </>
  );
}
