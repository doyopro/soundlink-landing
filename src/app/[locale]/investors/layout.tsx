import type { Metadata } from "next";

const ogImage = "https://soundlink.band/soundlink-icono.gif";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isES = locale === "es";

  return {
    title: isES
      ? "SoundLink Music | Investor Deck"
      : "SoundLink Music | Investor Deck",
    description: isES
      ? "Las empresas gastan millones en música. Nadie mide si funciona. Nosotros lo cambiamos."
      : "Companies spend millions on music. No one measures if it works. We change that.",
    openGraph: {
      title: isES
        ? "SoundLink Music | Investor Deck"
        : "SoundLink Music | Investor Deck",
      description: isES
        ? "Las empresas gastan millones en música. Nadie mide si funciona. Nosotros lo cambiamos."
        : "Companies spend millions on music. No one measures if it works. We change that.",
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
      title: isES
        ? "SoundLink Music | Investor Deck"
        : "SoundLink Music | Investor Deck",
      description: isES
        ? "Las empresas gastan millones en música. Nadie mide si funciona. Nosotros lo cambiamos."
        : "Companies spend millions on music. No one measures if it works. We change that.",
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
