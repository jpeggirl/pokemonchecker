import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "What's Your Pokémon? 🔮",
  description: "Discover which Pokémon matches your Twitter personality! Analyze your tweets and find your perfect Pokémon match.",
  openGraph: {
    title: "What's Your Pokémon? 🔮",
    description: "Discover which Pokémon matches your Twitter personality!",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "What's Your Pokémon? 🔮",
    description: "Discover which Pokémon matches your Twitter personality!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
