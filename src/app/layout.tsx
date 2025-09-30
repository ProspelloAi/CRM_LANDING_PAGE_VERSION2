import type { Metadata } from "next";
import "./globals.css";
import { Bricolage_Grotesque, Schibsted_Grotesk } from "next/font/google";

const bricolageGrotesque = Bricolage_Grotesque({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const schibstedGrotesk = Schibsted_Grotesk({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-schibsted",
});

export const metadata: Metadata = {
  title: "CRM System - Manage Sales, Customers & Operations Seamlessly",
  description:
    "A powerful, secure CRM platform to streamline sales, customer management, inventory, and operations with role-based access and real-time insights.",
  keywords: [
    "CRM",
    "customer relationship management",
    "sales management",
    "inventory tracking",
    "business automation",
    "secure CRM",
    "route planning",
  ],
  authors: [{ name: "CRM System Team", url: "https://www.prospello.tech" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "CRM System - Streamline Your Business",
    description:
      "Manage sales, customers, and operations with our modern CRM platform. Secure, scalable, and role-based for admins, salespeople, and accountants.",
    url: "https://www.prospello.tech",
    siteName: "CRM System",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CRM System Landing Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CRM System - Streamline Your Business",
    description:
      "A powerful CRM for sales, customer management, and operations.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.prospello.tech",
  },
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bricolageGrotesque.variable} ${schibstedGrotesk.variable}`}
    >
      <head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className="antialiased bg-white text-gray-800">{children}</body>
    </html>
  );
}
