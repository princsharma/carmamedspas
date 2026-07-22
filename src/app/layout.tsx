import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import Script from "next/script";
import { PremiumShell } from "@/components/premium/PremiumShell";
import { siteUrl } from "@/data/site";
import "./globals.css";
import "./premium.css";

const GTM_ID = "GTM-59LKQ3TP";

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
    default: "Carma Medspas - Your Online GLP-1 Weight Loss Partner",
    template: "%s | Carma Med Spas",
  },
  description:
    "From evaluation to maintenance, Carma Medspas is with you every step - licensed providers, personalized GLP-1 plans. Start your $75 evaluation today.",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.carmamedspas.com/",
  },
  openGraph: {
    title: "GLP-1 Weight Loss Online | Wegovy & Zepbound | Carma Medspas",
    description:
      "Get clinician-prescribed Wegovy, Zepbound & more — 100% online. Licensed U.S. providers, personalized dosing, free shipping. Start your $75 evaluation today.",
    type: "website",
    url: "https://www.carmamedspas.com",
    siteName: "Carma Medspas",
    locale: "en_US",
    images: [
      {
        url: "https://www.carmamedspas.com/images/main_logo.svg",
        width: 1200,
        height: 630,
        alt: "Carma Med Spas — clinician-guided GLP-1 weight loss care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GLP-1 Weight Loss Online | Wegovy & Zepbound | Carma Med Spas",
    description:
      "Get clinician-prescribed Wegovy, Zepbound & more — 100% online. Licensed U.S. providers, personalized dosing, free shipping. Start your $75 evaluation today.",
    images: ["https://www.carmamedspas.com/images/main_logo.svg"],
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <PremiumShell>{children}</PremiumShell>
      </body>
    </html>
  );
}
