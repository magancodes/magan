import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          bg: "#000000",
          primary: "#F5F5F5",
          secondary: "#9A9A9A",
          line: "rgba(255,255,255,0.12)",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "Canela", "serif"],
        sans: [
          "var(--font-sans)",
          "Neue Montreal",
          "Suisse Intl",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
      },
      fontSize: {
        body: ["16px", { lineHeight: "1.7", letterSpacing: "0.005em" }],
      },
      maxWidth: {
        column: "520px",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};

export default config;
