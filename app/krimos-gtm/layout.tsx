import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "krimos gtm | maganjot singh",
  description:
    "KrimOS go-to-market plan: Bengaluru SFB/MFI beachhead, governed GTM agent system, zero to five paying customers.",
  robots: { index: false, follow: false },
};

export default function KrimosGtmLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
