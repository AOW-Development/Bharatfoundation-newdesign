import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bharat Sports Foundation",
  description: "Empowering youth through sports and education",
  keywords: ["sports", "education", "youth empowerment", "India"],
  authors: [{ name: "Bharat Sports Foundation" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light", // Force light mode only
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
