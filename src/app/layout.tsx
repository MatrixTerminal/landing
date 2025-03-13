"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>Matrix - The Matrix</title>
        <meta name="description" content="Enter The Matrix" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} dark:bg-black dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}