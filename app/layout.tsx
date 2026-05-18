import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "maganjot singh — founder's office. systems. shipping.",
  description:
    "founder's office at saturn labs. overall convener, inter iit tech meet. builds systems for chaotic environments.",
  metadataBase: new URL("https://maganjot.dev"),
  openGraph: {
    title: "maganjot singh",
    description:
      "founder's office. product systems. operations. design. shipping things fast.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SmoothScroll>
          <Nav />
          {children}
        </SmoothScroll>
        <div className="grain" aria-hidden />
        <div className="vignette" aria-hidden />
        <Cursor />
      </body>
    </html>
  );
}
