import clsx from "@/lib/clsx";

type EducationCredentialProps = {
  variant?: "prominent" | "compact";
  className?: string;
};

export default function EducationCredential({
  variant = "compact",
  className,
}: EducationCredentialProps) {
  const isProminent = variant === "prominent";

  return (
    <div
      className={clsx(className)}
      style={{
        borderLeft: "1px solid var(--line)",
        paddingLeft: isProminent ? 14 : 12,
        maxWidth: isProminent ? 520 : 480,
      }}
    >
      <p
        className="meta"
        style={{
          fontSize: isProminent ? 14 : 13,
          lineHeight: 1.55,
          marginBottom: isProminent ? 6 : 4,
        }}
      >
        <span style={{ color: "var(--primary)" }}>iit patna</span>
        <span className="muted"> · maths and computing</span>
      </p>
      <p
        className="meta"
        style={{
          fontSize: isProminent ? 14 : 13,
          lineHeight: 1.55,
          marginBottom: isProminent ? 10 : 8,
        }}
      >
        <span style={{ color: "var(--hero-orange)" }}>
          air 5095
        </span>
        <span className="muted"> · jee advanced 2023</span>
      </p>
      <p
        className={isProminent ? "body-text" : "meta"}
        style={{
          fontSize: isProminent ? 15 : 13,
          lineHeight: 1.5,
          color: "var(--secondary)",
          ...(isProminent
            ? {
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontWeight: 300,
              }
            : { opacity: 0.85 }),
        }}
      >
        cracked one of the toughest exams in the world at 17
      </p>
    </div>
  );
}
