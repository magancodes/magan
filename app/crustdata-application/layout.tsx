import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "crustdata application | maganjot singh",
  description:
    "Application for Crustdata: systems, automation, and how I'd work on signal intelligence.",
  robots: { index: false, follow: false },
};

export default function CrustdataApplicationLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
