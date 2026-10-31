import type { Metadata } from "next";
import { Michroma } from "next/font/google";
import "./globals.css";

const michroma = Michroma({
  weight: "400", // Michroma only has one weight
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Konnie | Volleyball Portfolio",
  description: "Volleyball player portfolio, Rwanda.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${michroma.className} antialiased`}>{children}</body>
    </html>
  );
}