import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "oximy on reddit | maganjot singh",
  description: "Oximy on Reddit: the plan.",
  robots: { index: false, follow: false },
};

export default function OximyRedditPlanLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
