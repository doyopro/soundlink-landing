import type { Metadata } from "next";

const ogImage = "https://soundlink.band/portada.png";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isES = locale === "es";

  return {
    title: "SoundLink Music | Investor Deck",
    description: isES
      ? "Las empresas gastan millones en música. Nosotros medimos si funciona. €100K Pre-Seed 2026."
      : "Companies spend millions on music. We measure if it works. €100K Pre-Seed 2026.",
    icons: {
      icon: "/soundlink-icono.gif",
      shortcut: "/soundlink-icono.gif",
    },
    openGraph: {
      title: "SoundLink Music | Investor Deck",
      description: isES
        ? "Las empresas gastan millones en música. Nosotros medimos si funciona. €100K Pre-Seed 2026."
        : "Companies spend millions on music. We measure if it works. €100K Pre-Seed 2026.",
      url: "https://soundlink.band/investors",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "SoundLink Music Investor Deck",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "SoundLink Music | Investor Deck",
      description: isES
        ? "Las empresas gastan millones en música. Nosotros medimos si funciona. €100K Pre-Seed 2026."
        : "Companies spend millions on music. We measure if it works. €100K Pre-Seed 2026.",
      images: [ogImage],
    },
  };
}

export default function InvestorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
