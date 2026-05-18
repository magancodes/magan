"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * SplitText-style reveal using GSAP without the paid plugin.
 * Splits children string by character runs (preserving spaces) and animates
 * a subtle line-mask + blur reveal on scroll-in.
 */
type Props = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  splitBy?: "char" | "word";
  stagger?: number;
  delay?: number;
};

export default function SplitTextReveal({
  text,
  className,
  as = "h1",
  splitBy = "char",
  stagger = 0.018,
  delay = 0,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const units =
      splitBy === "char"
        ? Array.from(text).map((c) => (c === " " ? "\u00A0" : c))
        : text.split(" ");

    el.innerHTML = "";
    el.setAttribute("aria-label", text);

    const wraps: HTMLSpanElement[] = [];
    units.forEach((u, i) => {
      const wrap = document.createElement("span");
      wrap.style.display = "inline-block";
      wrap.style.overflow = "hidden";
      wrap.style.verticalAlign = "baseline";
      /* inherit line-height from parent so descenders ("g", "y", "p") aren't clipped */
      wrap.style.lineHeight = "inherit";
      /* give descenders a bit more room without affecting layout */
      wrap.style.paddingBottom = "0.08em";
      wrap.setAttribute("aria-hidden", "true");

      const inner = document.createElement("span");
      inner.style.display = "inline-block";
      inner.style.willChange = "transform, opacity, filter";
      inner.textContent = u;
      if (splitBy === "word" && i < units.length - 1) {
        inner.textContent = u + "\u00A0";
      }

      wrap.appendChild(inner);
      el.appendChild(wrap);
      wraps.push(inner);
    });

    gsap.set(wraps, { yPercent: 110, opacity: 0, filter: "blur(10px)" });

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(wraps, {
              yPercent: 0,
              opacity: 1,
              filter: "blur(0px)",
              duration: 1.25,
              ease: "expo.out",
              stagger,
              delay,
            });
            obs.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    obs.observe(el);

    return () => {
      obs.disconnect();
    };
  }, [text, splitBy, stagger, delay]);

  const Tag = as as keyof JSX.IntrinsicElements;

  return (
    // @ts-expect-error — dynamic tag, ref typing
    <Tag ref={ref} className={className} />
  );
}
