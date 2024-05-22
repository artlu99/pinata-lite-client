import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import siteMeta from "@/config/site.config";

export const runtime = 'edge'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    url: siteMeta.websiteUrl,
    siteName: siteMeta.title,
    images: [`${siteMeta.websiteUrl + siteMeta.ogImage}`],
  },
  icons: {
    icon: siteMeta.favicon,
    shortcut: siteMeta.favicon,
    apple: siteMeta.favicon,
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
    images: [`${siteMeta.websiteUrl + siteMeta.ogImage}`],
  },
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": `${siteMeta.websiteUrl + siteMeta.ogImage}`,
    "fc:frame:button:1": "Visit",
    "fc:frame:button:1:action": "link",
    "fc:frame:button:1:target": `${siteMeta.websiteUrl}`,
    "fc:frame:button:2": "Tutorial",
    "fc:frame:button:2:action": "link",
    "fc:frame:button:2:target":
      "https://www.pinata.cloud/blog/how-to-build-a-lite-client-with-the-pinata-farcaster-api",
    "fc:frame:button:3": "Repo",
    "fc:frame:button:3:action": "link",
    "fc:frame:button:3:target": "https://github.com/artlu99/pinata-lite-client",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
