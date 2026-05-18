import { ReactNode } from "react";
import clsx from "@/lib/clsx";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div" | "header" | "footer";
  /** override the top spacing (defaults to spec's 120px) */
  topPad?: number | string;
};

/**
 * One narrow, left-aligned column. Sits inside a sea of empty black.
 *  - left padding: 18vw  (collapses on small screens)
 *  - container width: 520px
 *  - top spacing: 120px (overridable per-section)
 */
export default function Column({
  children,
  className,
  id,
  as = "section",
  topPad = 120,
}: Props) {
  const Tag = as;
  return (
    <Tag
      id={id}
      className={clsx("w-full", className)}
      style={{
        paddingLeft: "max(18vw, 28px)",
        paddingRight: "max(6vw, 24px)",
        paddingTop: typeof topPad === "number" ? `${topPad}px` : topPad,
      }}
    >
      <div style={{ maxWidth: 520 }}>{children}</div>
    </Tag>
  );
}
