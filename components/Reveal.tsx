"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { ReactNode, useRef } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  blur?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  as?: "div" | "section" | "p" | "h1" | "h2" | "h3" | "span" | "li" | "ul";
};

export default function Reveal({
  children,
  delay = 0,
  y = 14,
  blur = 8,
  duration = 1.1,
  className,
  once = true,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y,
      filter: `blur(${blur}px)`,
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1],
        delay,
      },
    },
  };

  const Comp = motion[as] as typeof motion.div;

  return (
    <Comp
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </Comp>
  );
}
