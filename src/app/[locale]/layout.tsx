import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SoundLink Music | Investor Deck",
  description: "Infraestructura agéntica para operaciones musicales B2B.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [{
      url: "https://soundlink.band/portada.png",
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    images: ["https://soundlink.band/portada.png"],
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale} className={`${manrope.variable} font-sans h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}