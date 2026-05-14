import type { Metadata } from "next";

export const metadata: Metadata = {
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
}

export default function InvestorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
