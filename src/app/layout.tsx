import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import { PremiumShell } from "@/components/premium/PremiumShell";
import { site, siteUrl } from "@/data/site";
import "./globals.css";
import "./premium.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CARMA Med Spa — Medical Weight Loss, Beautifully Simple",
    template: "%s | CARMA Med Spa",
  },
  description:
    "Clinician-guided GLP-1 weight care — evaluated online, personalised to your body, and supported every step. Enroll for $75 and connect with a licensed provider.",
  robots: "index, follow",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: site.name,
    title: "CARMA Med Spa — Medical Weight Loss, Beautifully Simple",
    description:
      "Clinician-guided GLP-1 weight care — evaluated online, personalised to your body, and supported every step.",
  },
  icons: {
    icon: [
      { url: "/images/images-a/fav-icon.webp", type: "image/webp" },
    ],
    apple: "/images/images-a/fav-icon.webp",
    shortcut: "/images/images-a/fav-icon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PremiumShell>{children}</PremiumShell>
      </body>
    </html>
  );
}
