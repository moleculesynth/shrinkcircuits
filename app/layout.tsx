import type { Metadata } from "next";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto-condensed/900.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shrinkcircuits.org"),
  title: {
    default: "Shrink Circuits — Mobile MakerLab",
    template: "%s — Shrink Circuits",
  },
  description:
    "Shrink Circuits is a Mobile MakerLab for hands-on workshops and design for learning.",
  icons: {
    icon: "/icon-v2.png",
    shortcut: "/icon-v2.png",
  },
  openGraph: {
    type: "website",
    siteName: "Shrink Circuits",
    title: "Shrink Circuits — Mobile MakerLab",
    description: "Workshops, material play, and design for learning.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Shrink Circuits" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shrink Circuits — Mobile MakerLab",
    description: "Workshops, material play, and design for learning.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
