import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "retell gtm | maganjot singh",
  description:
    "Application for Retell: voice systems, adaptive outbound intelligence, and GTM infrastructure.",
  robots: { index: false, follow: false },
};

export default function RealtellGtmLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
