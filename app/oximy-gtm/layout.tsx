import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "oximy gtm — maganjot singh",
  description:
    "How I'd build go-to-market for Oximy: an intelligence and distribution system for AI security.",
  robots: { index: false, follow: false },
};

export default function OximyGtmLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
