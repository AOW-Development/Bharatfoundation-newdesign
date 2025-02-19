import type React from "react";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Bharat Sports Foundation",
  description: "Empowering youth through sports and education",
  keywords: ["sports", "education", "youth empowerment", "India"],
  authors: [{ name: "Bharat Sports Foundation" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={raleway.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
