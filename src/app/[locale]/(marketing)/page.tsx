"use client";

import React, { useState, useEffect, useRef } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import {
  ShieldCheck, BrainCircuit, CheckCircle2, ChevronRight,
  BarChart3, ArrowUpRight, Globe, Zap, Code2, Database,
  ArrowRight, Cpu, TrendingUp, Users, Music, Layers,
  Activity, ChevronDown, Building, Mic
} from "lucide-react";
import Link from "next/link";

// ─── DICTIONARY ─────────────────────────────────────────────────────────────
const dict = {
  es: {
    nav: {
      vision: "Visión", ecosystem: "Ecosistema", methodology: "Metodología",
      demo: "Consultoría Estratégica"
    },
    hero: {
      badge: "Enterprise Music-Tech Infrastructure",
      eyebrow: "SoundLink Music S.L.",
      t1: "La infraestructura tecnológica",
      t2: "para el negocio musical",
      t3: "a escala.",
      desc: "Desarrollamos sistemas operativos B2B que transforman la gestión musical en una ventaja competitiva. Plataformas para marcas, retailers, hospitality y cualquier empresa que contrata música en volumen.",
      cta: "Explorar Ecosistema",
      cta2: "Ver Plataformas"
    },
    stats: [
      { val: "+850K€", label: "Pagados a artistas", sub: "de forma legal y trazable" },
      { val: "+8.000", label: "Contrataciones B2B", sub: "end-to-end para marcas" },
      { val: "0%", label: "Contingencias legales", sub: "para nuestros partners" },
      { val: "+2 años", label: "Retención media", sub: "de clientes activos" }
    ],
    problem: {
      badge: "El problema que resolvemos",
      title: "La gestión musical en empresas\nestá completamente rota.",
      desc: "Hoteles, retailers, cadenas de restauración, marcas de moda, financieras, promotoras. Cualquier empresa que usa música a escala enfrenta los mismos tres problemas.",
      cards: [
        {
          title: "Caos operativo y fragmentación",
          desc: "3-5 proveedores distintos, 40+ facturas al mes, cero visibilidad centralizada. Tu equipo pierde 8h/semana en coordinación que debería estar automatizada."
        },
        {
          title: "Riesgo legal sin asesoramiento",
          desc: "Las marcas operan con música sin el análisis y asesoramiento adecuado en cumplimiento normativo. Exposición a contingencias millonarias por desconocimiento."
        },
        {
          title: "Inversión sin datos ni ROI",
          desc: "La música suena en tus espacios cada día, pero no sabes qué impacto tiene. Sin NPS, sin medición de ticket medio, sin trazabilidad. Es un gasto, no una inversión estratégica."
        }
      ]
    },
    ecosystem: {
      badge: "Nuestro ecosistema",
      title: "Dos plataformas.\nUna infraestructura.",
      subtitle: "Productos específicos que transforman la música en una herramienta de crecimiento medible para marcas que operan a escala.",
      soundband: {
        tag: "Live Music OS",
        headline: "Tu B2B Music Managing Partner.",
        desc: "Toda tu música, sessions, gigs y contrataciones en un mismo sistema. Gestión 360° de talento en vivo para Hospitality, Retail y cualquier marca que programa música en sus espacios.",
        features: [
          "Booking Intelligence & AI Matching",
          "Facturación Única Consolidada",
          "Compliance & Asesoramiento 360°",
          "ROI & Performance Analytics"
        ],
        cta: "Ver Plataforma",
        url: "https://www.soundband.pro"
      },
      soundpass: {
        tag: "Engagement Engine",
        headline: "Fidelización a través de la música.",
        desc: "Plataforma de beneficios y engagement para equipos corporativos, comunidades y marcas que quieren conectar con sus audiencias a través de experiencias musicales exclusivas.",
        status: "Beta Activa"
      },
      custom: {
        tag: "Bespoke Architecture",
        title: "Arquitectura de Software a Medida.",
        desc: "Diseño y desarrollo de ERPs musicales, herramientas de automatización agentic con IA y arquitecturas personalizadas para partners estratégicos que requieren soluciones propias.",
        items: ["Music ERPs Custom", "Automatización Agentic IA", "Integración con sistemas legacy", "APIs escalables"]
      }
    },
    methodology: {
      badge: "Cómo trabajamos",
      title: "Ingeniería aplicada al Music Branding.",
      desc: "No somos una agencia. Somos el partner tecnológico que dota a tu marca de las herramientas para ejecutar estrategias musicales con trazabilidad absoluta y ROI medible.",
      steps: [
        {
          num: "01",
          title: "Auditoría de Datos",
          desc: "Analizamos tu ecosistema actual: proveedores, contratos, gigs, análisis de cumplimiento normativo. Detectamos fugas operativas y oportunidades concretas."
        },
        {
          num: "02",
          title: "Arquitectura & IA",
          desc: "Construimos la capa tecnológica: matching algorítmico, automatización de procesos, dashboards de control en tiempo real para tu equipo."
        },
        {
          num: "03",
          title: "Ejecución & Reporting",
          desc: "Gestionamos el ciclo completo: calendario, contratos, pagos, seguros, reportes. Tu equipo opera con 2h/mes, no 8h/semana."
        }
      ]
    },
    market: {
      badge: "La oportunidad",
      title: "Dos mercados récord.\nUna intersección.",
      items: [
        { val: "$38.2B", label: "Live Music Global 2025", color: "blue" },
        { val: "$91.4B", label: "Music Tourism 2024", color: "indigo" },
        { val: "97M", label: "Turistas España 2025", color: "slate" },
        { val: "€725M", label: "Live Music España 2024", color: "blue" }
      ],
      insight: "SoundLink es el puente tecnológico y operativo que captura valor donde convergen el boom del Live Music global y la escalada del turismo. Pero nuestro mercado no se limita al turismo: cualquier marca que contrata música necesita nuestro sistema."
    },
    tools: {
      badge: "Plataforma",
      title: "Herramientas que cubren\nel 100% del ciclo.",
      items: [
        { title: "Análisis de datos & IA", desc: "Segmentación y matching musical por perfil de cliente y tendencias de mercado." },
        { title: "Curaduría & Calendario", desc: "Grillas de programación, contratos, pagos y reportes en una sola plataforma." },
        { title: "Gestión integral", desc: "Programación alineada con identidad de marca, objetivos comerciales y presupuesto." },
        { title: "Dashboard centralizado", desc: "Control total en tiempo real: gigs, artistas, KPIs, compliance y facturación." },
        { title: "Facturación única", desc: "Un solo pago mensual para toda la contratación musical de tu empresa." }
      ]
    },
    cta: {
      title1: "Tu socio tecnológico",
      title2: "en la industria musical.",
      desc: "Analizamos tu infraestructura actual e implementamos la capa de software que optimiza procesos, minimiza riesgos y genera ROI medible.",
      btn: "Agendar Consultoría Estratégica",
      contact: "nicolas@soundlink.band"
    },
    footer: {
      text: "Compañía tecnológica de infraestructura musical B2B. Innovación en software, IA y gestión de talento.",
      legal: "© 2026 SoundLink Music S.L. | Islas Canarias, España. Todos los derechos reservados.",
      powered: "Powered by"
    }
  },
  en: {
    nav: {
      vision: "Vision", ecosystem: "Ecosystem", methodology: "Methodology",
      demo: "Strategic Consulting"
    },
    hero: {
      badge: "Enterprise Music-Tech Infrastructure",
      eyebrow: "SoundLink Music S.L.",
      t1: "The technological infrastructure",
      t2: "for the music business",
      t3: "at scale.",
      desc: "We build B2B operating systems that transform music management into a competitive advantage. Platforms for brands, retailers, hospitality, and any company that books music at volume.",
      cta: "Explore Ecosystem",
      cta2: "See Platforms"
    },
    stats: [
      { val: "+€850K", label: "Paid to artists", sub: "legally and traceably" },
      { val: "+8,000", label: "B2B contracts", sub: "end-to-end for brands" },
      { val: "0%", label: "Legal contingencies", sub: "for our partners" },
      { val: "+2 yrs", label: "Average retention", sub: "of active clients" }
    ],
    problem: {
      badge: "The problem we solve",
      title: "Music management in companies\nis completely broken.",
      desc: "Hotels, retailers, restaurant chains, fashion brands, banks, promoters. Any company using music at scale faces the same three problems.",
      cards: [
        {
          title: "Operational chaos & fragmentation",
          desc: "3-5 different vendors, 40+ invoices per month, zero centralized visibility. Your team loses 8h/week on coordination that should be automated."
        },
        {
          title: "Legal risk without guidance",
          desc: "Brands operate with music without proper analysis and regulatory compliance guidance. Exposure to million-dollar contingencies from ignorance."
        },
        {
          title: "Investment without data or ROI",
          desc: "Music plays in your spaces every day, but you don't know the impact. No NPS, no ticket tracking, no traceability. It's a cost, not a strategic investment."
        }
      ]
    },
    ecosystem: {
      badge: "Our ecosystem",
      title: "Two platforms.\nOne infrastructure.",
      subtitle: "Specific products that transform music into a measurable growth tool for brands operating at scale.",
      soundband: {
        tag: "Live Music OS",
        headline: "Your B2B Music Managing Partner.",
        desc: "All your music, sessions, gigs, and bookings in one system. 360° live talent management for Hospitality, Retail, and any brand programming music in their spaces.",
        features: [
          "Booking Intelligence & AI Matching",
          "Consolidated Single Invoice",
          "Compliance & 360° Guidance",
          "ROI & Performance Analytics"
        ],
        cta: "View Platform",
        url: "https://www.soundband.pro"
      },
      soundpass: {
        tag: "Engagement Engine",
        headline: "Loyalty through music.",
        desc: "Benefits and engagement platform for corporate teams, communities and brands wanting to connect with their audiences through exclusive music experiences.",
        status: "Beta Active"
      },
      custom: {
        tag: "Bespoke Architecture",
        title: "Custom Software Architecture.",
        desc: "Design and development of music ERPs, agentic AI automation tools and custom architectures for strategic partners requiring their own solutions.",
        items: ["Custom Music ERPs", "Agentic AI Automation", "Legacy system integration", "Scalable APIs"]
      }
    },
    methodology: {
      badge: "How we work",
      title: "Engineering applied to Music Branding.",
      desc: "We are not an agency. We are the technology partner providing your brand with the tools to execute music strategies with absolute traceability and measurable ROI.",
      steps: [
        {
          num: "01",
          title: "Data Audit",
          desc: "We analyze your current ecosystem: vendors, contracts, gigs, regulatory compliance analysis. We detect operational gaps and concrete opportunities."
        },
        {
          num: "02",
          title: "Architecture & AI",
          desc: "We build the tech layer: algorithmic matching, process automation, real-time control dashboards for your team."
        },
        {
          num: "03",
          title: "Execution & Reporting",
          desc: "We manage the full cycle: calendar, contracts, payments, insurance, reports. Your team operates with 2h/month, not 8h/week."
        }
      ]
    },
    market: {
      badge: "The opportunity",
      title: "Two record markets.\nOne intersection.",
      items: [
        { val: "$38.2B", label: "Global Live Music 2025", color: "blue" },
        { val: "$91.4B", label: "Music Tourism 2024", color: "indigo" },
        { val: "97M", label: "Spain Tourists 2025", color: "slate" },
        { val: "€725M", label: "Spain Live Music 2024", color: "blue" }
      ],
      insight: "SoundLink is the technological and operational bridge capturing value at the intersection of global Live Music growth and the tourism surge. But our market extends far beyond tourism: any brand booking music needs our system."
    },
    tools: {
      badge: "Platform",
      title: "Tools covering\n100% of the cycle.",
      items: [
        { title: "Data Analysis & AI", desc: "Musical segmentation and matching by client profile and market trends." },
        { title: "Curation & Calendar", desc: "Programming grids, contracts, payments, and reports in one platform." },
        { title: "Comprehensive Management", desc: "Programming aligned with brand identity, commercial goals, and budget." },
        { title: "Centralized Dashboard", desc: "Full real-time control: gigs, artists, KPIs, compliance, and billing." },
        { title: "Single Invoice", desc: "One monthly payment for all your company's music contracts." }
      ]
    },
    cta: {
      title1: "Your technology partner",
      title2: "in the music industry.",
      desc: "We analyze your current infrastructure and implement the software layer that optimizes processes, minimizes risks, and generates measurable ROI.",
      btn: "Book Strategic Consulting",
      contact: "nicolas@soundlink.band"
    },
    footer: {
      text: "B2B music infrastructure technology company. Innovation in software, AI, and talent management.",
      legal: "© 2026 SoundLink Music S.L. | Canary Islands, Spain. All rights reserved.",
      powered: "Powered by"
    }
  }
};

// ─── ANIMATED COUNTER ────────────────────────────────────────────────────────
function useCountUp(target: string, duration = 1400) {
  const [display, setDisplay] = useState("—");
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || fired.current) return;
      fired.current = true;
      observer.disconnect();
      const num = parseFloat(target.replace(/[^0-9.]/g, ""));
      if (isNaN(num)) { setDisplay(target); return; }
      const prefix = target.match(/^[^0-9]*/)?.[0] || "";
      const suffix = target.match(/[^0-9.]+$/)?.[0] || "";
      const steps = 36;
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const eased = 1 - Math.pow(1 - step / steps, 3);
        const current = Math.round(num * eased * 10) / 10;
        setDisplay(`${prefix}${current % 1 === 0 ? current.toLocaleString() : current}${suffix}`);
        if (step >= steps) { clearInterval(timer); setDisplay(target); }
      }, duration / steps);
    }, { threshold: 0.4 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);
  return { display, ref };
}

function StatCard({ val, label, sub }: { val: string; label: string; sub: string }) {
  const { display, ref } = useCountUp(val);
  return (
    <div ref={ref} className="group text-center px-6 py-10 border-r border-slate-200 last:border-r-0 hover:bg-slate-50 transition-colors duration-300">
      <div className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 mb-2 group-hover:text-[#0066CC] transition-colors duration-300"
        style={{ fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif' }}>
        {display}
      </div>
      <div className="text-sm font-bold text-slate-700 mb-1">{label}</div>
      <div className="text-xs text-slate-400 font-medium">{sub}</div>
    </div>
  );
}

// ─── MAIN PAGE ───────────────────────────────────────────────────────────────
export default function SoundLinkCorporate() {
  const [scrolled, setScrolled] = useState(false);
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();

  const locale = (params?.locale as 'es' | 'en') || 'es';
  const t = dict[locale] || dict.es;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchLanguage = (newLocale: string) => {
    if (!pathname) return;
    const parts = pathname.split('/');
    parts[1] = newLocale;
    router.push(parts.join('/'));
  };

  // Fuente editorial / tech corporativa — Fraunces + DM Sans
  const fontStack = '"DM Sans", "Helvetica Neue", Arial, sans-serif';
  const displayFont = '"Fraunces", Georgia, serif';

  return (
    <div className="min-h-screen bg-[#F4F5F7] text-slate-900 selection:bg-blue-100 overflow-x-hidden"
      style={{ fontFamily: fontStack }}>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap');

        .hero-headline { font-family: 'DM Sans', 'Helvetica Neue', Arial, sans-serif; font-weight: 800; letter-spacing: -0.04em; }
        .section-title { font-family: 'DM Sans', 'Helvetica Neue', Arial, sans-serif; font-weight: 800; letter-spacing: -0.03em; }
        .mono { font-family: 'DM Mono', monospace; }
        
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.7s ease forwards; }
        .fade-up-1 { animation: fadeUp 0.7s 0.1s ease both; }
        .fade-up-2 { animation: fadeUp 0.7s 0.2s ease both; }
        .fade-up-3 { animation: fadeUp 0.7s 0.35s ease both; }
        .fade-up-4 { animation: fadeUp 0.7s 0.5s ease both; }

        /* Subtle noise texture on bg */
        .noise-bg {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          background-size: 200px 200px;
        }

        /* Waveform animation */
        @keyframes wave {
          0% { d: path('M0,50 Q64,10 128,50 T256,50'); }
          50% { d: path('M0,50 Q64,90 128,50 T256,50'); }
          100% { d: path('M0,50 Q64,10 128,50 T256,50'); }
        }
      `}</style>

      {/* ── NAVBAR ─────────────────────────────────────────────── */}
      <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-sm' : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between">

          {/* LOGO — tamaño muy visible */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/soundlink-icono.gif"
              alt="SoundLink"
              className="w-16 h-16 md:w-20 md:h-20 object-contain group-hover:scale-105 transition-transform duration-200 drop-shadow-sm"
            />
            <img
              src="/sl-music.png"
              alt="SoundLink Music"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">
            <Link href="#vision" className="hover:text-slate-900 transition-colors">{t.nav.vision}</Link>
            <Link href="#ecosystem" className="hover:text-slate-900 transition-colors">{t.nav.ecosystem}</Link>
            <Link href="#methodology" className="hover:text-slate-900 transition-colors">{t.nav.methodology}</Link>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3 border-r border-slate-200 pr-5">
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              {["es", "en"].map(l => (
                <button key={l} onClick={() => switchLanguage(l)}
                  className={`text-[11px] font-black uppercase transition-colors ${locale === l ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'
                    }`}>
                  {l}
                </button>
              ))}
            </div>
            <Link href="https://calendar.app.google/mpwxXhzTB7xB5Tfx9" target="_blank"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-[#0066CC] transition-colors shadow-sm">
              {t.nav.demo}
            </Link>
          </div>
        </div>
      </nav>

      <main>

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-6 text-center overflow-hidden noise-bg">

          {/* Subtle grid */}
          <div className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: "linear-gradient(slate 1px, transparent 1px), linear-gradient(90deg, slate 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

          {/* Blue accent glow — très subtil */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vh] bg-blue-400/8 blur-[120px] rounded-full pointer-events-none" />

          {/* Eyebrow */}
          <div className="mono flex items-center gap-3 mb-6 fade-up-1 opacity-0">
            <div className="h-px w-10 bg-slate-400" />
            <span className="text-[11px] font-medium tracking-[0.25em] text-slate-500 uppercase">{t.hero.eyebrow}</span>
            <div className="h-px w-10 bg-slate-400" />
          </div>

          {/* Badge */}
          <div className="mono inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-300 bg-white text-slate-500 text-[10px] font-medium uppercase tracking-widest mb-10 fade-up-1 opacity-0 shadow-sm">
            <Cpu className="w-3 h-3 text-[#0066CC]" />
            {t.hero.badge}
          </div>

          {/* LOGO GIF — grande y con glow */}
          <div className="relative mb-8 fade-up-2 opacity-0">
            <div className="absolute inset-0 bg-blue-500/15 blur-[50px] rounded-full scale-[1.8] pointer-events-none" />
            <img
              src="/soundlink-icono.gif"
              alt="SoundLink"
              className="relative w-48 h-48 md:w-64 md:h-64 mx-auto object-contain drop-shadow-lg"
            />
          </div>

          {/* Headline */}
          <h1 className="hero-headline text-5xl md:text-7xl lg:text-[5rem] leading-[0.96] mb-8 max-w-5xl fade-up-3 opacity-0">
            <span className="text-slate-900">{t.hero.t1}</span>
            <br />
            <span className="text-slate-500">{t.hero.t2}</span>
            <br />
            <span className="text-[#0066CC]">{t.hero.t3}</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 font-medium leading-relaxed fade-up-4 opacity-0">
            {t.hero.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up-4 opacity-0">
            <Link href="#ecosystem"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-sm hover:bg-[#0066CC] transition-colors shadow-lg">
              {t.hero.cta} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="https://www.soundband.pro" target="_blank"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 rounded-full font-bold text-sm border border-slate-200 hover:border-slate-400 transition-colors shadow-sm">
              {t.hero.cta2} <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-25">
            <ChevronDown className="w-5 h-5 text-slate-600" />
          </div>
        </section>

        {/* ── STATS ──────────────────────────────────────────── */}
        <section className="border-y border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-200">
              {t.stats.map((s, i) => <StatCard key={i} val={s.val} label={s.label} sub={s.sub} />)}
            </div>
          </div>
        </section>

        {/* ── PROBLEM ─────────────────────────────────────────── */}
        <section id="vision" className="py-28 md:py-40 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="mono inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-200 bg-red-50 text-red-500 text-[10px] font-medium uppercase tracking-widest mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
              {t.problem.badge}
            </div>
            <h2 className="section-title text-4xl md:text-6xl text-slate-900 mb-6 max-w-3xl mx-auto leading-tight" style={{ whiteSpace: 'pre-line' }}>
              {t.problem.title}
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
              {t.problem.desc}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {t.problem.cards.map((card, i) => {
              const icons = [Layers, ShieldCheck, BarChart3];
              const Icon = icons[i];
              return (
                <div key={i} className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-red-200 hover:shadow-lg hover:shadow-red-50 transition-all duration-400">
                  <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-red-400" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3 leading-snug">{card.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── ECOSYSTEM ───────────────────────────────────────── */}
        <section id="ecosystem" className="py-28 md:py-40 border-t border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="mono inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-500 text-[10px] font-medium uppercase tracking-widest mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066CC]" />
                {t.ecosystem.badge}
              </div>
              <h2 className="section-title text-4xl md:text-6xl text-slate-900 mb-4 whitespace-pre-line">{t.ecosystem.title}</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">{t.ecosystem.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* ── SOUNDBAND ────────────────── */}
              <div className="lg:col-span-2 group p-10 rounded-2xl border border-slate-200 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-50/50 transition-all duration-400 relative overflow-hidden bg-gradient-to-br from-white to-slate-50">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="mono inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-200 bg-purple-50 text-purple-600 text-[10px] font-medium uppercase tracking-widest mb-8">
                    <Mic className="w-3 h-3" /> {t.ecosystem.soundband.tag}
                  </div>

                  {/* SOUNDBAND LOGO — MUY GRANDE */}
                  <div className="flex items-start gap-4 mb-8">
                    <img
                      src="/soundband-logo.png"
                      alt="SoundBand"
                      className="h-48 md:h-64 w-auto max-w-[90%] object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <Link href={t.ecosystem.soundband.url} target="_blank"
                      className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-5 h-5 text-purple-400" />
                    </Link>
                  </div>

                  <p className="text-base text-slate-600 leading-relaxed mb-8 max-w-lg font-medium">
                    {t.ecosystem.soundband.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {t.ecosystem.soundband.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <Link href={t.ecosystem.soundband.url} target="_blank"
                    className="inline-flex items-center gap-2 text-purple-600 font-bold text-xs uppercase tracking-widest hover:gap-3 transition-all">
                    {t.ecosystem.soundband.cta} <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* ── SOUNDPASS ────────────────── */}
              <div className="group p-10 rounded-2xl border border-slate-200 hover:border-slate-900 hover:shadow-xl transition-all duration-400 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-400/10 blur-[60px] rounded-full group-hover:bg-cyan-400/20 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="mono inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-[10px] font-medium uppercase tracking-widest mb-8">
                    <Zap className="w-3 h-3" /> {t.ecosystem.soundpass.tag}
                  </div>

                  {/* SOUNDPASS LOGO — MUY GRANDE */}
                  <img
                    src="/soundpass-logo.png"
                    alt="SoundPass"
                    className="h-48 md:h-64 w-auto max-w-[90%] object-contain mb-8 group-hover:scale-105 transition-transform duration-300"
                  />

                  <p className="text-sm text-slate-300 leading-relaxed mb-10 font-medium">
                    {t.ecosystem.soundpass.desc}
                  </p>

                  <div className="mono inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-medium uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    {t.ecosystem.soundpass.status}
                  </div>
                </div>
              </div>

              {/* ── CUSTOM DEV ───────────────── */}
              <div className="lg:col-span-3 group p-12 md:p-16 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 via-[#001535] to-slate-900 hover:border-[#0066CC]/40 transition-all duration-400 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 75% 40%, rgba(0,102,204,0.2) 0%, transparent 55%)" }} />
                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="mono inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-medium uppercase tracking-widest mb-8">
                      <Code2 className="w-3 h-3" /> {t.ecosystem.custom.tag}
                    </div>
                    <h3 className="section-title text-3xl md:text-4xl text-white mb-6 leading-tight">
                      {t.ecosystem.custom.title}
                    </h3>
                    <p className="text-slate-400 text-base leading-relaxed mb-8 font-medium">
                      {t.ecosystem.custom.desc}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {t.ecosystem.custom.items.map((item, i) => (
                        <span key={i} className="mono px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[10px] font-medium text-slate-400 uppercase tracking-widest hover:border-blue-400/40 hover:text-blue-300 transition-colors cursor-default">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid gap-4">
                    {[
                      { Icon: Code2, color: "text-blue-400", title: "Enterprise Dev Team", desc: "Equipos especializados en arquitectura Music-Tech y sistemas B2B de alta concurrencia." },
                      { Icon: Database, color: "text-cyan-400", title: "Agentic AI & Data", desc: "Automatización agentic, modelos de segmentación y curaduría algorítmica para el sector musical." }
                    ].map(({ Icon, color, title, desc }, i) => (
                      <div key={i} className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                        <Icon className={`w-6 h-6 ${color} mb-4`} />
                        <h5 className="text-base font-bold text-white mb-2">{title}</h5>
                        <p className="text-sm text-slate-400 font-medium">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MARKET ─────────────────────────────────────────── */}
        <section className="py-28 md:py-40 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="mono inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-white text-slate-500 text-[10px] font-medium uppercase tracking-widest mb-8 shadow-sm">
                <TrendingUp className="w-3 h-3 text-[#0066CC]" />
                {t.market.badge}
              </div>
              <h2 className="section-title text-4xl md:text-5xl text-slate-900 mb-8 leading-tight whitespace-pre-line">
                {t.market.title}
              </h2>
              <p className="text-base text-slate-500 leading-relaxed font-medium mb-10 max-w-lg">
                {t.market.insight}
              </p>
              <Link href="https://calendar.app.google/mpwxXhzTB7xB5Tfx9" target="_blank"
                className="inline-flex items-center gap-2 text-slate-900 font-bold text-sm hover:text-[#0066CC] transition-colors uppercase tracking-wider">
                Analizar tu oportunidad <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {t.market.items.map((item, i) => (
                <div key={i} className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 cursor-default">
                  <div className="text-3xl md:text-4xl font-black text-slate-900 mb-3 tracking-tighter group-hover:text-[#0066CC] transition-colors">{item.val}</div>
                  <div className="text-xs text-slate-500 font-medium leading-snug">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── METHODOLOGY ─────────────────────────────────────── */}
        <section id="methodology" className="py-28 md:py-40 border-t border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="mono inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-200 bg-green-50 text-green-600 text-[10px] font-medium uppercase tracking-widest mb-8">
                <Activity className="w-3 h-3" /> {t.methodology.badge}
              </div>
              <h2 className="section-title text-4xl md:text-6xl text-slate-900 mb-6 max-w-3xl mx-auto leading-tight">
                {t.methodology.title}
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
                {t.methodology.desc}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {t.methodology.steps.map((step, i) => (
                <div key={i} className="group relative p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-[#0066CC]/30 hover:shadow-lg hover:shadow-blue-50 transition-all duration-400">
                  <div className="mono text-8xl font-black text-slate-100 absolute -top-3 -right-1 leading-none select-none group-hover:text-blue-50 transition-colors">
                    {step.num}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-[#0066CC] group-hover:border-[#0066CC] transition-all duration-300 shadow-sm">
                    <span className="mono text-sm font-black text-slate-500 group-hover:text-white transition-colors">
                      {step.num}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TOOLS ───────────────────────────────────────────── */}
        <section className="py-28 md:py-40 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="mono inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-white text-slate-500 text-[10px] font-medium uppercase tracking-widest mb-8 shadow-sm">
                <Layers className="w-3 h-3" /> {t.tools.badge}
              </div>
              <h2 className="section-title text-4xl md:text-6xl text-slate-900 mb-4 whitespace-pre-line">{t.tools.title}</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {t.tools.items.map((item, i) => {
                const icons = [BrainCircuit, Music, Building, Activity, Database];
                const Icon = icons[i];
                return (
                  <div key={i} className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#0066CC]/30 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 text-center">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-5 group-hover:bg-[#0066CC] group-hover:border-[#0066CC] transition-all duration-300">
                      <Icon className="w-6 h-6 text-slate-500 group-hover:text-white transition-colors" />
                    </div>
                    <h5 className="text-sm font-bold text-slate-900 mb-3 leading-snug">{item.title}</h5>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────── */}
        <section className="py-28 md:py-40 px-6 border-t border-slate-200">
          <div className="max-w-5xl mx-auto">
            <div className="p-14 md:p-24 rounded-3xl bg-slate-900 text-white relative overflow-hidden text-center">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0066CC] to-transparent opacity-60" />
              <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ background: "radial-gradient(circle at 50% 0%, rgba(0,102,204,0.4) 0%, transparent 60%)" }} />
              <div className="relative z-10">
                <h2 className="section-title text-4xl md:text-6xl text-white mb-8 leading-tight">
                  {t.cta.title1}
                  <br />
                  <span className="text-[#5AC8FA]">{t.cta.title2}</span>
                </h2>
                <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                  {t.cta.desc}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="https://calendar.app.google/mpwxXhzTB7xB5Tfx9" target="_blank"
                    className="flex items-center gap-2 px-10 py-5 bg-[#0066CC] text-white rounded-full font-bold text-sm hover:bg-blue-500 transition-colors shadow-lg">
                    {t.cta.btn} <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href={`mailto:${t.cta.contact}`}
                    className="mono text-slate-400 text-sm font-medium hover:text-white transition-colors">
                    {t.cta.contact}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer className="bg-white border-t border-slate-200 pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-16 pb-14 border-b border-slate-200">

            <div className="max-w-sm">
              {/* LOGO en footer — grande también */}
              <div className="flex items-center gap-3 mb-6">
                <img src="/soundlink-icono.gif" alt="SoundLink" className="w-10 h-10 object-contain" />
                <img src="/sl-music.png" alt="SoundLink Music" className="h-12 md:h-14 w-auto object-contain" />
              </div>
              <p className="text-sm text-slate-500 leading-relaxed mb-8 font-medium">{t.footer.text}</p>
              <div className="flex items-center gap-3">
                <span className="mono text-[10px] text-slate-400 uppercase font-medium tracking-widest">{t.footer.powered}</span>
                <Link href="https://www.doyo.pro/?lang=es" target="_blank"
                  className="mono px-4 py-1.5 rounded-full border border-slate-200 text-[11px] font-bold text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all uppercase tracking-widest">
                  DOYO.PRO
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16">
              {[
                {
                  title: "Ecosistema", links: [
                    ["SoundBand", "https://www.soundband.pro"],
                    ["SoundPass", "#ecosystem"],
                    ["Custom Dev", "#ecosystem"]
                  ]
                },
                {
                  title: "Empresa", links: [
                    ["Visión", "#vision"],
                    ["Metodología", "#methodology"],
                    ["Ecosistema", "#ecosystem"]
                  ]
                },
                {
                  title: "Contacto", links: [
                    ["nicolas@soundlink.band", "mailto:nicolas@soundlink.band"],
                    ["Agendar Reunión →", "https://calendar.app.google/mpwxXhzTB7xB5Tfx9"]
                  ]
                }
              ].map(({ title, links }) => (
                <div key={title}>
                  <h4 className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-8">{title}</h4>
                  <ul className="space-y-5">
                    {links.map(([name, href]) => (
                      <li key={name}>
                        <Link href={href} className="text-sm text-slate-600 font-medium hover:text-slate-900 transition-colors">
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-slate-400 font-medium uppercase tracking-widest">
            <p>{t.footer.legal}</p>
            <p className="text-slate-300">Architecture for Global Enterprises</p>
          </div>
        </div>
      </footer>
    </div>
  );
}