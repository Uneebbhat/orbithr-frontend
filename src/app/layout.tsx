import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OrbitHR | HR Management for SMEs",
  description:
    "OrbitHR is a modern HR management platform for SMEs. The admin dashboard helps HR teams and managers manage attendance, leave, payroll, requests, and insights through a clean, intuitive web interface.",
  keywords: [
    "HR software",
    "attendance management",
    "leave tracking",
    "payroll system",
    "employee management",
    "OrbitHR",
    "HR dashboard",
  ],
  authors: [{ name: "OrbitHR Team" }],
  creator: "OrbitHR",
  publisher: "OrbitHR",
  openGraph: {
    title: "OrbitHR Admin Dashboard",
    description:
      "Simplify HR workflows with OrbitHR's web-based admin dashboard. Manage attendance, leave, payroll, and employee requests in one place.",
    // url: "https://yourdomain.com",
    siteName: "OrbitHR",
    // images: [
    //   {
    //     url: "https://yourdomain.com/og-image.png", // Replace with your actual OG image
    //     width: 1200,
    //     height: 630,
    //     alt: "OrbitHR Admin Dashboard",
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "OrbitHR Admin Dashboard",
  //   description:
  //     "The smart way for SMEs to manage attendance, payroll, and HR workflows.",
  //   images: ["https://yourdomain.com/og-image.png"], // Replace with actual image
  //   creator: "@your_twitter_handle",
  // },
  // icons: {
  //   icon: "/favicon.ico",
  //   apple: "/apple-touch-icon.png",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interSans.className} antialiased`}>{children}</body>
    </html>
  );
}
