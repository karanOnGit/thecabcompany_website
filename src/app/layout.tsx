import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

// Components
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TheCabCompany",
    template: "%s | TheCabCompany",
  },
  description: "A platform for booking cabs easily and efficiently.",
  alternates: {
    canonical: "https://www.thecabcompany.in",
  },
  openGraph: {
    title: "TheCabCompany",
    description: "Book cabs easily and efficiently with TheCabCompany. Download our App now. It's avai;available on Play Store as well as App Store",
    url: "https://www.thecabcompany.in",
    siteName: "TheCabCompany",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-128LEEMRNX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-128LEEMRNX');
          `}
        </Script>

        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
