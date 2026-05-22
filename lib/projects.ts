export type ProjectLink = { label: string; href: string };

export type Project = {
  title: string;
  thesis: string;
  stack: string;
  links?: ProjectLink[];
};

export const TRXND_LINKS: ProjectLink[] = [
  { label: "trxnd.io", href: "https://trxnd.io" },
  { label: "app.trxnd.io", href: "https://app.trxnd.io" },
  { label: "reddit.trxnd.io", href: "https://reddit.trxnd.io" },
];

export const PROJECTS: Project[] = [
  {
    title: "IronClaw",
    thesis:
      "multi-agent android automation system. controls phones the way a human would: reads the accessibility tree, decides what to tap next, no apis needed. automates job applications, handles captchas by handing off to the user, accepts commands via voice/pdf/telegram, supports 15+ languages.",
    stack: "openclaw · droidrun · fastapi · react",
    links: [
      { label: "github", href: "https://github.com/naksshhh/IronClaw" },
      {
        label: "medium",
        href: "https://medium.com/@nakshkanchan12/iron-claw-teaching-ai-to-see-what-you-see-42838b810b07",
      },
    ],
  },
  {
    title: "SpeakLingo",
    thesis:
      "real-time voice-cloning video translator. takes a voice sample, then during a live call transcribes, translates (gemini), and speaks back in your cloned voice via qwen3-tts. sub-545ms end-to-end.",
    stack: "webrtc · redis · gemini · qwen3-tts",
    links: [{ label: "github", href: "https://github.com/naksshhh/SpeakLingo" }],
  },
  {
    title: "Mini-vLLM",
    thesis:
      "llm inference engine built from scratch. dynamic batching (20ms window), kv-cache rewrite from o(n²) to o(1) per token, http + grpc, prometheus/grafana observability, distributed round-robin router.",
    stack: "dynamic batching · kv-cache · grpc · observability",
    links: [{ label: "github", href: "https://github.com/naksshhh/Mini-vLLM" }],
  },
  {
    title: "CiteAgent",
    thesis:
      "agentic rag pipeline for causal extraction from conversational data. langgraph orchestration, adaptive reranking, llm judges. f1 = 0.94. placed 5th at inter-iit tech meet 14.0.",
    stack: "langgraph · reranking · llm judges",
  },
  {
    title: "SoulScript",
    thesis:
      "ai mental wellness platform. real-time conversational avatar via gemini audio apis, emotion-based music generation via lyria, rag-powered persona dashboard. scaled to 1,000+ concurrent users.",
    stack: "gemini audio · lyria · rag · 1000+ concurrent",
    links: [{ label: "live", href: "https://soulscript4u.vercel.app" }],
  },
  {
    title: "TRXND",
    thesis:
      "live content distribution engines. content routing, scheduling, channel output, reddit intelligence.",
    stack: "content routing · scheduling · channel output",
    links: TRXND_LINKS,
  },
];
