import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'SoundLink Music | Investor Deck',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
  },
  openGraph: {
    images: [
      {
        url: '/portada.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    images: ['/portada.png'],
  },
}

export default function InvestorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
