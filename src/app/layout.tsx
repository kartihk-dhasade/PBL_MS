import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BackOnTrack — Evidence-Based Posture Correction",
    template: "%s | BackOnTrack",
  },
  description:
    "Fix your posture with evidence-based exercises and guides from a qualified physiotherapist. Free correction programs for forward head posture, rounded shoulders, and more.",
  keywords: [
    "posture correction",
    "physiotherapy",
    "forward head posture",
    "rounded shoulders",
    "posture exercises",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
