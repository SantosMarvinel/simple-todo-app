import type { Metadata } from "next";
import { Rubik } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "Simple Todo App",
  description: "A simple todo app built with Next.js",
};

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className} antialiased`}>{children}</body>
    </html>
  );
}
