import type { Metadata } from "next";
import localFont from "next/font/local";
import { Store } from "@/components/Store";
import { Header, Footer } from "@/components/Layout";
import "./globals.css";
const sans = localFont({
  src: "../public/fonts/dm-sans.woff2",
  variable: "--font-sans",
  display: "swap",
});
const serif = localFont({
  src: [
    {
      path: "../public/fonts/cormorant-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/cormorant-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/cormorant-italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-serif",
  display: "swap",
});
export const metadata: Metadata = {
  title: {
    default: "Outdoor Home Curtains | A beautiful home begins here",
    template: "%s | Outdoor Home Curtains",
  },
  description:
    "Discover custom curtains, layered luxury, sheers, carpets and blinds. Explore styles and estimate your perfect fit. A front-end demo by Smidify.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${sans.variable} ${serif.variable}`}>
        <Store>
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </Store>
      </body>
    </html>
  );
}
