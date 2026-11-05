import type { Metadata } from "next";
import Nav from "@/components/Nav";
import ScrollFade from "@/components/ScrollFade";
import { fontVariables } from "@/styles/fonts";
import "@/styles/tokens.css";
import "@/styles/components.css";
import "@/styles/hero-fight.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diana Ngo — UX Designer",
  description: "Portfolio of Diana Ngo, UX Designer and Product Manager.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontVariables}>
      <body>
        <Nav />
        {children}
        <ScrollFade />
      </body>
    </html>
  );
}
