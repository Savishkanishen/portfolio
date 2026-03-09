"use client";
import { useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import OpeningAnimation from "@/components/OpeningAnimation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  useEffect(() => {
    // 1. Force the window to the absolute top (0,0) immediately
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Use instant to bypass 'smooth' scrolling during load
    });

    // 2. Disable the browser's automatic scroll memory
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] overflow-x-hidden`}
      >
        {/* Naruto Shutter Overlay */}
        <OpeningAnimation /> 
        
        {/* Page Content wrapper */}
        <div className="relative">
          {children}
        </div>
      </body>
    </html>
  );
}