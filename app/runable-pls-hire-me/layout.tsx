import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "runable founder's office | maganjot singh",
  description:
    "Application for Runable founder's office: execution agents, operational fixes, and how I'd ship.",
  robots: { index: false, follow: false },
};

export default function RunablePlsHireMeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
