"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
    ArrowRight,
    BrainCircuit,
    Zap,
    ShieldCheck,
    BarChart3,
    CheckCircle2,
    Rocket,
    Users,
    Globe,
    TrendingUp,
    Music,
    Activity,
    Target,
    Layers,
    ChevronRight,
    Mail,
    Calendar,
    Play,
    AlertCircle,
    RefreshCw,
    Database,
    Cpu,
    Lock,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// ANIMATED COUNTER
// ─────────────────────────────────────────────────────────────────────────────
function useCountUp(end: number, duration = 1600) {
    const [value, setValue] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const started = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    let t0: number;
                    const tick = (now: number) => {
                        if (!t0) t0 = now;
                        const p = Math.min((now - t0) / duration, 1);
                        const eased = 1 - Math.pow(1 - p, 4);
                        setValue(Math.round(eased * end));
                        if (p < 1) requestAnimationFrame(tick);
                    };
                    requestAnimationFrame(tick);
                }
            },
            { threshold: 0.4 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [end, duration]);

    return { value, ref };
}

function Counter({ end, prefix = "", suffix = "" }: { end: number; prefix?: string; suffix?: string }) {
    const { value, ref } = useCountUp(end);
    return <div ref={ref}>{prefix}{value.toLocaleString("es-ES")}{suffix}</div>;
}

// ─────────────────────────────────────────────────────────────────────────────
// DESIGN TOKENS
// ─────────────────────────────────────────────────────────────────────────────
// bg:     #0a0f1e  (deep navy-black)
// surface:#111827  (elevated card)
// border: #1f2937  (subtle separator)
// blue:   #3b82f6  (primary accent)
// blue-d: #1d4ed8  (darker)
// text:   #f9fafb  (white-ish)
// muted:  #6b7280  (secondary text)
// dim:    #374151  (disabled/tertiary)

// ─────────────────────────────────────────────────────────────────────────────
// SECTION WRAPPER
// ─────────────────────────────────────────────────────────────────────────────
function Section({
    children,
    className = "",
    dark = false,
}: {
    children: React.ReactNode;
    className?: string;
    dark?: boolean;
}) {
    return (
        <section
            className={`py-24 md:py-32 px-6 ${dark ? "bg-[#080d1a]" : "bg-[#0a0f1e]"
                } ${className}`}
        >
            <div className="max-w-6xl mx-auto">{children}</div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// LABEL / EYEBROW
// ─────────────────────────────────────────────────────────────────────────────
function Label({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-400 mb-4">
            {children}
        </p>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// HEADING
// ─────────────────────────────────────────────────────────────────────────────
function H2({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-black leading-[1.0] tracking-tight text-white ${className}`}
        >
            {children}
        </h2>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// TEAM MEMBER CARD
// ─────────────────────────────────────────────────────────────────────────────
function TeamCard({
    name,
    role,
    bio,
    photo,
}: {
    name: string;
    role: string;
    bio: string;
    photo: string;
}) {
    return (
        <div className="flex flex-col gap-4 p-5 rounded-2xl bg-[#111827] border border-[#1f2937] hover:border-blue-500/30 transition-colors duration-300">
            <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 bg-[#1f2937] border border-[#374151]">
                    <img
                        src={photo}
                        alt={name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none";
                        }}
                    />
                </div>
                <div>
                    <p className="font-bold text-sm text-white leading-tight">{name}</p>
                    <p className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider mt-0.5">
                        {role}
                    </p>
                </div>
            </div>
            <p className="text-xs text-[#6b7280] leading-relaxed">{bio}</p>
        </div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// STAT BLOCK (big number, label, subtext)
// ─────────────────────────────────────────────────────────────────────────────
function StatBlock({
    value,
    label,
    sub,
    accent = false,
    animate = false,
    end = 0,
    prefix = "",
    suffix = "",
}: {
    value?: string;
    label: string;
    sub: string;
    accent?: boolean;
    animate?: boolean;
    end?: number;
    prefix?: string;
    suffix?: string;
}) {
    return (
        <div className="py-6 px-1">
            <div
                className={`text-4xl md:text-5xl font-black tracking-tight mb-1 ${accent ? "text-blue-400" : "text-white"
                    }`}
            >
                {animate ? (
                    <Counter end={end} prefix={prefix} suffix={suffix} />
                ) : (
                    value
                )}
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#6b7280] mb-1">
                {label}
            </p>
            <p className="text-xs text-[#374151]">{sub}</p>
        </div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// PROBLEM CARD
// ─────────────────────────────────────────────────────────────────────────────
function ProblemCard({
    num,
    title,
    desc,
    Icon,
}: {
    num: string;
    title: string;
    desc: string;
    Icon: React.ComponentType<{ className: string }>;
}) {
    return (
        <div className="relative p-6 rounded-2xl bg-[#111827] border border-[#1f2937] hover:border-[#374151] transition-colors duration-300 overflow-hidden">
            <div className="absolute top-4 right-4 text-[#1f2937] font-black text-5xl select-none leading-none">
                {num}
            </div>
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5">
                <Icon className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-white mb-2 pr-8">{title}</h3>
            <p className="text-xs text-[#6b7280] leading-relaxed">{desc}</p>
        </div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// PIPELINE CARD
// ─────────────────────────────────────────────────────────────────────────────
function PipelineCard({
    title,
    mrr,
    timeframe,
    desc,
    Icon,
    featured,
}: {
    title: string;
    mrr: string;
    timeframe: string;
    desc: string;
    Icon: React.ComponentType<{ className: string }>;
    featured?: boolean;
}) {
    return (
        <div
            className={`p-6 rounded-2xl border transition-colors duration-300 ${featured
                ? "bg-blue-600/10 border-blue-500/40"
                : "bg-[#111827] border-[#1f2937] hover:border-[#374151]"
                }`}
        >
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5">
                <Icon className="w-5 h-5" />
            </div>
            <h4 className="font-black text-base text-white mb-1">{title}</h4>
            <p className={`text-sm font-bold mb-0.5 ${featured ? "text-blue-400" : "text-blue-400/70"}`}>
                {mrr}
            </p>
            <p className="text-[10px] text-[#374151] uppercase tracking-widest mb-4">{timeframe}</p>
            <p className="text-xs text-[#6b7280] leading-relaxed">{desc}</p>
        </div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function InvestorsPageV4() {
    const isES =
        typeof window !== "undefined" && window.location.pathname.includes("/es");

    // ── TEAM DATA ──────────────────────────────────────────────────────────────
    const team = [
        {
            name: "Nicolás A. Civatti",
            role: "Founder & CEO",
            photo: "/nicolas-civatti.png",
            bio: isES
                ? "Músico, productor y operador B2B. +10.000 contrataciones gestionadas en España y Latam sin capital externo. Construyó SoundLink validando cada hipótesis con contratos reales."
                : "Musician, producer and B2B operator. +10,000 bookings managed in Spain and Latam without external capital. Built SoundLink by validating every hypothesis with real contracts.",
        },
        {
            name: "Lucas Minetti",
            role: "Head of Product",
            photo: "/lucas.png",
            bio: isES
                ? "+10 años en UX/UI y diseño de productos digitales. Especialista en construir interfaces que simplifican operaciones complejas."
                : "+10 years in UX/UI and digital product design. Specialist in building interfaces that simplify complex operations.",
        },
        {
            name: "Nik Levenberg",
            role: "Strategic Partner — US",
            photo: "/nik.png",
            bio: isES
                ? "25 años en tecnología, startups y capital de riesgo en el mercado estadounidense. Asesora en estructura financiera, GTM global y fundraising."
                : "25 years in technology, startups and venture capital in the US market. Advises on financial structure, global GTM and fundraising.",
        },
        {
            name: "Juan Parodi",
            role: "Strategic Partner",
            photo: "/juan.png",
            bio: isES
                ? "+20 años en desarrollo de negocios y formación ejecutiva. Mentor de emprendedores en España y Latam. Referente en sostenibilidad corporativa."
                : "+20 years in business development and executive training. Mentor to entrepreneurs in Spain and Latam. Corporate sustainability reference.",
        },
        {
            name: "Ivan Novakovic",
            role: "Finance & Legal Advisor",
            photo: "/ivan.png",
            bio: isES
                ? "Abogado especialista en Derecho y Economía. Experto en Fintech, Blockchain, Capital Markets y pagos digitales. Speaker internacional."
                : "Lawyer specialized in Law and Economics. Expert in Fintech, Blockchain, Capital Markets and digital payments. International speaker.",
        },
        {
            name: "Graciana Virasoro",
            role: "Head Office & Accounts",
            photo: "/graciana.png",
            bio: isES
                ? "Especialista en gestión end-to-end de cuentas musicales B2B. Construye y mantiene relaciones de largo plazo con clientes estratégicos."
                : "Specialist in end-to-end management of B2B music accounts. Builds and maintains long-term relationships with strategic clients.",
        },
        {
            name: "Martín M. Foco",
            role: "Partner & Business Development",
            photo: "/martin.png",
            bio: isES
                ? "Expertise en gestión empresarial y administración financiera. Impulsa la expansión comercial hacia nuevos mercados con visión financiera y cultural."
                : "Expertise in business management and financial administration. Drives commercial expansion into new markets with financial and cultural vision.",
        },
        {
            name: "Joaquín Lagos Aguirre",
            role: "Head of Studio",
            photo: "/joaquin.png",
            bio: isES
                ? "Músico multi-instrumentista, ingeniero de sonido y productor con +20 años de experiencia. Garantiza la calidad técnica y artística de cada ejecución."
                : "Multi-instrumentalist musician, sound engineer and producer with +20 years of experience. Ensures the technical and artistic quality of every execution.",
        },
    ];

    // ── TRACTION METRICS ───────────────────────────────────────────────────────
    const metrics = [
        { value: "+850K€", label: isES ? "Gestionados" : "Managed", sub: isES ? "Pagados a artistas legalmente" : "Paid to artists legally", animate: false },
        { value: "+8.000", label: isES ? "Gigs ejecutados" : "Gigs executed", sub: isES ? "End-to-end, sin incidencias" : "End-to-end, no incidents", animate: false },
        { value: "20%", label: isES ? "Margen neto medio" : "Average net margin", sub: isES ? "Operativo sostenido" : "Sustained operating", animate: false, accent: true },
        { value: "0%", label: isES ? "Contingencias legales" : "Legal contingencies", sub: isES ? "En toda la historia de SoundLink" : "In SoundLink's entire history", animate: false, accent: true },
        { value: "+2 años", label: isES ? "Retención media" : "Average retention", sub: isES ? "Clientes activos recurrentes" : "Recurring active clients", animate: false },
        { value: "100%", label: isES ? "Compliance cubierto" : "Compliance covered", sub: isES ? "Contratos, seguros, licencias" : "Contracts, insurance, licenses", animate: false, accent: true },
    ];

    // ── PROBLEMS ───────────────────────────────────────────────────────────────
    const problems = [
        {
            num: "01",
            Icon: AlertCircle,
            title: isES ? "Desgobierno total del gasto musical" : "Total mismanagement of music spend",
            desc: isES
                ? "El 80% de las empresas no tienen control real sobre el ROI de su música. Las decisiones se toman por intuición, WhatsApp y correo. Ningún sistema registra qué funciona, cuánto cuesta ni por qué se elige cada artista."
                : "80% of companies have no real control over their music ROI. Decisions are made by intuition, WhatsApp and email. No system records what works, what it costs or why each artist is chosen.",
        },
        {
            num: "02",
            Icon: Lock,
            title: isES ? "Riesgo legal invisibilizado" : "Invisible legal risk",
            desc: isES
                ? "Sony v. Marriott es el caso más conocido, pero ocurre a diario. Sin contratos validados, seguros de artistas ni licencias verificadas, cada evento es un pasivo legal que la marca no ve venir."
                : "Sony v. Marriott is the best-known case, but it happens daily. Without validated contracts, artist insurance or verified licenses, every event is a legal liability the brand doesn't see coming.",
        },
        {
            num: "03",
            Icon: RefreshCw,
            title: isES ? "Escalabilidad imposible sin tecnología" : "Scalability impossible without technology",
            desc: isES
                ? "Una cadena de 50 hoteles no puede garantizar la misma calidad en el hotel 50 que en el 1 sin automatización. El modelo artesanal de agencia no escala. Se necesita infraestructura, no más coordinadores."
                : "A chain of 50 hotels cannot guarantee the same quality in hotel 50 as in hotel 1 without automation. The artisan agency model does not scale. Infrastructure is needed, not more coordinators.",
        },
        {
            num: "04",
            Icon: Database,
            title: isES ? "Cero trazabilidad ni datos históricos" : "Zero traceability or historical data",
            desc: isES
                ? "Ningún competidor ha construido una capa de datos sobre decisiones musicales B2B. No hay histórico de qué géneros generan más consumo, qué artistas retienen clientes o qué horarios maximizan la experiencia."
                : "No competitor has built a data layer on B2B music decisions. There is no history of which genres drive more consumption, which artists retain clients or which time slots maximize experience.",
        },
    ];

    // ── AI / AGENTIC CAPABILITIES ──────────────────────────────────────────────
    const agentic = [
        {
            Icon: BrainCircuit,
            title: isES ? "Booking Intelligence" : "Booking Intelligence",
            desc: isES
                ? "Motor que cruza ADN de marca, KPIs de negocio, perfil de cliente y disponibilidad de artistas para generar el match perfecto sin intervención humana en el proceso de selección."
                : "Engine that crosses brand DNA, business KPIs, client profile and artist availability to generate the perfect match without human intervention in the selection process.",
        },
        {
            Icon: Zap,
            title: isES ? "Sustitución Agéntica en Tiempo Real" : "Agentic Substitution in Real Time",
            desc: isES
                ? "Ante cancelaciones o imprevistos, el sistema detecta, busca alternativa validada y reasigna talento de forma autónoma. La operación nunca se detiene."
                : "When cancellations or unforeseen events occur, the system detects, finds a validated alternative and reassigns talent autonomously. The operation never stops.",
        },
        {
            Icon: ShieldCheck,
            title: isES ? "Compliance 360° Automatizado" : "360° Automated Compliance",
            desc: isES
                ? "Validación automática de contratos, seguros, licencias SGAE/BIEM y requisitos laborales. Cada contratación genera una pista de auditoría completa para el departamento legal del cliente."
                : "Automatic validation of contracts, insurance, SGAE/BIEM licenses and labor requirements. Each booking generates a complete audit trail for the client's legal department.",
        },
        {
            Icon: BarChart3,
            title: isES ? "ROI Dashboard por Venue" : "ROI Dashboard per Venue",
            desc: isES
                ? "Conexión entre programación musical y métricas de negocio: ocupación, consumo, NPS, engagement. Por primera vez, el director de hotel puede justificar el gasto musical con datos."
                : "Connection between music programming and business metrics: occupancy, consumption, NPS, engagement. For the first time, the hotel director can justify music spend with data.",
        },
        {
            Icon: Cpu,
            title: isES ? "ADN de Marca Computado" : "Computed Brand DNA",
            desc: isES
                ? "El sistema aprende de cada evento: qué funcionó, qué no, con qué artista y en qué contexto. Con el tiempo, las recomendaciones son más precisas que cualquier criterio editorial humano."
                : "The system learns from each event: what worked, what didn't, with which artist and in what context. Over time, recommendations are more precise than any human editorial criterion.",
        },
        {
            Icon: Activity,
            title: isES ? "Trazabilidad Financiera Completa" : "Complete Financial Traceability",
            desc: isES
                ? "Una sola factura mensual cubre toda la operación: artistas, seguros, logística y gestión. El departamento de compras de una cadena hotelera accede a reporting de gasto por venue, categoría y período."
                : "One monthly invoice covers the entire operation: artists, insurance, logistics and management. A hotel chain's procurement department accesses spend reporting by venue, category and period.",
        },
    ];

    // ── PIPELINE ───────────────────────────────────────────────────────────────
    const pipeline = [
        {
            Icon: Target,
            title: "Hotels & Hospitality",
            mrr: "50–100K€ MRR",
            timeframe: "12–18 meses",
            featured: true,
            desc: isES
                ? "Segmento ya validado con +850K€. Primer mercado: hoteles 4-5★ en Canarias y España. Expansión vía partners hoteleros estratégicos."
                : "Segment already validated with +€850K. First market: 4-5★ hotels in Canary Islands and Spain. Expansion via strategic hotel partners.",
        },
        {
            Icon: Music,
            title: "Marcas & Retail",
            mrr: "+50K€ MRR",
            timeframe: "12 meses",
            featured: false,
            desc: isES
                ? "Cerveceras, bancos, moda. Branded gigs como herramienta de marketing on-premise en espacios comerciales de España y Latam."
                : "Breweries, banks, fashion. Branded gigs as an on-premise marketing tool in commercial spaces in Spain and Latam.",
        },
        {
            Icon: Globe,
            title: "EU + Latam + US",
            mrr: "Partnerships",
            timeframe: "18–24 meses",
            featured: false,
            desc: isES
                ? "Expansión a través de partners comerciales estratégicos en Europa, CALA y US. Primeras conversaciones activas en paralelo al despliegue en España."
                : "Expansion through strategic commercial partners in Europe, CALA and US. First active conversations in parallel to Spain rollout.",
        },
        {
            Icon: Rocket,
            title: "SoundPass & New Verticals",
            mrr: "2027+",
            timeframe: "36 meses",
            featured: false,
            desc: isES
                ? "SoundPass: plataforma de engagement B2C en beta. Nuevas verticales: upselling de tickets, investments in music, venue management."
                : "SoundPass: B2C engagement platform in beta. New verticals: ticket upselling, investments in music, venue management.",
        },
    ];

    // ── USE OF FUNDS ───────────────────────────────────────────────────────────
    const funds = [
        {
            pct: 50,
            label: isES ? "Marketing & Ventas" : "Marketing & Sales",
            desc: isES
                ? "Go-to-market Canarias + España, equipo comercial B2B, eventos, partnerships estratégicos y apertura de mercados EU/Latam/US."
                : "Canary Islands + Spain go-to-market, B2B commercial team, events, strategic partnerships and EU/Latam/US market opening.",
        },
        {
            pct: 30,
            label: isES ? "Desarrollo de Producto" : "Product Development",
            desc: isES
                ? "IA, SoundBand v2, integraciones PMS/ERP, automatización de compliance, SoundPass beta y roadmap tecnológico 2026–2027."
                : "AI, SoundBand v2, PMS/ERP integrations, compliance automation, SoundPass beta and 2026–2027 technology roadmap.",
        },
        {
            pct: 20,
            label: isES ? "Admin & Operaciones" : "Admin & Operations",
            desc: isES
                ? "Estructura legal, equipo de producción y curaduría, posible apertura de hub físico en Canarias."
                : "Legal structure, production and curation team, possible opening of physical hub in Canary Islands.",
        },
    ];

    return (
        <div
            className="min-h-screen bg-[#0a0f1e] text-white antialiased overflow-x-hidden"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
        >
            {/* ─────────────────────────────────────────────────────────────────────
          NAV
      ───────────────────────────────────────────────────────────────────── */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 h-14 border-b border-[#1f2937]/80 bg-[#0a0f1e]/90 backdrop-blur-md">
                <div className="flex items-center gap-3">
                    <img
                        src="/soundlink-icono.gif"
                        alt="SoundLink"
                        className="w-7 h-7"
                        onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none";
                        }}
                    />
                    <img
                        src="/sl-music.png"
                        alt="SoundLink Music"
                        className="h-5 object-contain"
                        onError={(e) => {
                            const el = e.target as HTMLImageElement;
                            el.style.display = "none";
                            const span = document.createElement("span");
                            span.textContent = "SoundLink Music";
                            span.className = "text-sm font-bold text-white";
                            el.parentNode?.appendChild(span);
                        }}
                    />
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#374151] hidden sm:block">
                        {isES ? "Presentación Privada · No Distribuir" : "Private Presentation · Do Not Distribute"}
                    </span>
                    <Link
                        href="https://calendar.app.google/mpwxXhzTB7xB5Tfx9"
                        target="_blank"
                        className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors text-xs font-semibold"
                    >
                        <Calendar className="w-3 h-3" />
                        {isES ? "Agendar reunión" : "Book a meeting"}
                    </Link>
                </div>
            </nav>

            {/* ─────────────────────────────────────────────────────────────────────
          HERO
      ───────────────────────────────────────────────────────────────────── */}
            <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-[#080d1a]">
                {/* Atmospheric glow */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-700/6 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-blue-900/8 rounded-full blur-[80px]" />
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Header logo row */}
                    <div className="flex items-center gap-4 mb-14">
                        <img
                            src="/soundlink-icono.gif"
                            alt=""
                            className="w-10 h-10"
                            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                        />
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.25em] text-[#374151] font-semibold">SoundLink Music S.L. · Islas Canarias</p>
                            <p className="text-[10px] uppercase tracking-[0.25em] text-blue-500 font-semibold">Pre-Seed Round · 2026</p>
                        </div>
                    </div>

                    {/* Hero headline */}
                    <h1
                        className="text-[clamp(2.8rem,7vw,5.5rem)] font-black leading-[0.95] tracking-tight text-white mb-8"
                        style={{ letterSpacing: "-0.03em" }}
                    >
                        {isES ? (
                            <>
                                El sistema agéntico<br />
                                que opera tu música<br />
                                <span className="text-blue-400">mientras tú escalas.</span>
                            </>
                        ) : (
                            <>
                                The agentic system<br />
                                that operates your music<br />
                                <span className="text-blue-400">while you scale.</span>
                            </>
                        )}
                    </h1>

                    <p className="text-lg md:text-xl text-[#6b7280] max-w-2xl leading-relaxed mb-14">
                        {isES
                            ? "SoundLink Music automatiza la gestión musical B2B de extremo a extremo — booking, compliance, contratos y ROI — eliminando el caos operativo que ninguna otra plataforma ha resuelto."
                            : "SoundLink Music automates B2B music management end-to-end — booking, compliance, contracts and ROI — eliminating the operational chaos no other platform has solved."}
                    </p>

                    {/* Investment summary */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1f2937] rounded-2xl overflow-hidden border border-[#1f2937]">
                        {[
                            { label: isES ? "Ask privado (BA)" : "Private ask (BA)", val: "100.000€", sub: isES ? "Business Angels" : "Business Angels" },
                            { label: isES ? "Apalancamiento público" : "Public leverage", val: "100.000€", sub: "Sodecan + Deducciones" },
                            { label: isES ? "Equity ofrecido" : "Equity offered", val: "10%", sub: isES ? "SAFE o Equity directo" : "SAFE or direct equity" },
                            { label: isES ? "Runway objetivo" : "Target runway", val: "18+ meses", sub: isES ? "Hasta break-even" : "To break-even" },
                        ].map(({ label, val, sub }, i) => (
                            <div key={i} className="bg-[#0a0f1e] px-6 py-6">
                                <p className="text-[10px] uppercase tracking-[0.2em] text-[#374151] font-semibold mb-2">{label}</p>
                                <p className="text-2xl font-black text-white">{val}</p>
                                <p className="text-xs text-[#374151] mt-1">{sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─────────────────────────────────────────────────────────────────────
          TRACTION
      ───────────────────────────────────────────────────────────────────── */}
            <section className="py-16 px-6 border-y border-[#1f2937]">
                <div className="max-w-6xl mx-auto">
                    <p className="text-center text-[10px] uppercase tracking-[0.3em] text-[#374151] font-semibold mb-10">
                        {isES
                            ? "Tracción validada operativamente — sin capital externo"
                            : "Operationally validated traction — without external capital"}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 divide-x divide-y divide-[#1f2937] border border-[#1f2937] rounded-2xl overflow-hidden">
                        {metrics.map(({ value, label, sub, accent }, i) => (
                            <div key={i} className="bg-[#0a0f1e] px-5 py-6 text-center">
                                <p className={`text-2xl md:text-3xl font-black mb-1 ${accent ? "text-blue-400" : "text-white"}`}>
                                    {value}
                                </p>
                                <p className="text-[9px] font-semibold uppercase tracking-widest text-[#6b7280]">{label}</p>
                                <p className="text-[9px] text-[#374151] mt-1 hidden md:block">{sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─────────────────────────────────────────────────────────────────────
          THE PROBLEM
      ───────────────────────────────────────────────────────────────────── */}
            <Section dark>
                <Label>{isES ? "El Problema" : "The Problem"}</Label>
                <H2 className="mb-4">
                    {isES ? "Music management B2B:\nroto por diseño." : "B2B music management:\nbroken by design."}
                </H2>
                <p className="text-[#6b7280] max-w-xl mb-14 text-base leading-relaxed">
                    {isES
                        ? "No hay ninguna plataforma que haya resuelto la intersección de operaciones, compliance y trazabilidad de datos en música B2B. El mercado opera con décadas de retraso tecnológico."
                        : "There is no platform that has solved the intersection of operations, compliance and data traceability in B2B music. The market operates with decades of technological delay."}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                    {problems.map((p, i) => (
                        <ProblemCard key={i} {...p} />
                    ))}
                </div>
                <div className="mt-8 py-4 px-6 rounded-xl border border-blue-500/20 bg-blue-500/5 text-center">
                    <p className="text-sm font-semibold text-blue-300 tracking-wide">
                        {isES
                            ? "WITH SOUNDLINK, YOUR MUSIC IS PROTECTED — AND YOUR OPERATIONS, AUTOMATED."
                            : "WITH SOUNDLINK, YOUR MUSIC IS PROTECTED — AND YOUR OPERATIONS, AUTOMATED."}
                    </p>
                </div>
            </Section>

            {/* ─────────────────────────────────────────────────────────────────────
          THE SOLUTION — SOUNDBAND
      ───────────────────────────────────────────────────────────────────── */}
            <Section>
                <Label>{isES ? "La Solución" : "The Solution"}</Label>
                <H2 className="mb-4">
                    {isES ? "Infraestructura agéntica.\nNo una agencia." : "Agentic infrastructure.\nNot an agency."}
                </H2>
                <p className="text-[#6b7280] max-w-2xl mb-14 text-base leading-relaxed">
                    {isES
                        ? "SoundLink Music es la empresa. SoundBand es su primer producto: el sistema operativo de la música en vivo B2B. Combina un equipo especializado de gestión cultural con tecnología agéntica para eliminar fricciones y garantizar resultados a escala."
                        : "SoundLink Music is the company. SoundBand is its first product: the B2B live music operating system. It combines a specialized cultural management team with agentic technology to eliminate friction and guarantee results at scale."}
                </p>

                {/* Products */}
                <div className="grid md:grid-cols-2 gap-6 mb-14">
                    {/* SoundBand */}
                    <div className="p-8 rounded-2xl bg-[#111827] border border-[#1f2937]">
                        <div className="h-9 mb-6">
                            <img
                                src="/soundband-logo.png"
                                alt="SoundBand"
                                className="h-full object-contain"
                                onError={(e) => {
                                    const el = e.target as HTMLImageElement;
                                    el.style.display = "none";
                                }}
                            />
                        </div>
                        <p className="text-xs text-[#6b7280] leading-relaxed mb-6">
                            {isES
                                ? "La plataforma de gestión musical B2B para hoteles, venues y marcas. Un proveedor. Un contrato. Un pago mensual. 100% compliance desde el día 1."
                                : "The B2B music management platform for hotels, venues and brands. One provider. One contract. One monthly payment. 100% compliance from day 1."}
                        </p>
                        <div className="space-y-2.5">
                            {(isES
                                ? [
                                    "Booking & scheduling centralizado por venue",
                                    "Contratos, seguros y licencias gestionadas automáticamente",
                                    "IA de matching artista–marca–contexto",
                                    "Dashboard de ROI y métricas de impacto por evento",
                                    "Sustitución agéntica ante cancelaciones",
                                    "Facturación única mensual para todo el volumen",
                                ]
                                : [
                                    "Centralized booking & scheduling per venue",
                                    "Contracts, insurance and licenses managed automatically",
                                    "Artist–brand–context AI matching",
                                    "ROI dashboard and impact metrics per event",
                                    "Agentic substitution for cancellations",
                                    "Single monthly invoicing for all volume",
                                ]
                            ).map((item, i) => (
                                <div key={i} className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                    <span className="text-xs text-[#9ca3af]">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SoundPass + model */}
                    <div className="flex flex-col gap-4">
                        <div className="p-6 rounded-2xl bg-[#111827] border border-[#1f2937] flex-1">
                            <div className="h-7 mb-4">
                                <img
                                    src="/soundpass-logo.png"
                                    alt="SoundPass"
                                    className="h-full object-contain"
                                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                                />
                            </div>
                            <p className="text-[10px] text-blue-400 font-semibold uppercase tracking-widest mb-2">Beta · 2027</p>
                            <p className="text-xs text-[#6b7280] leading-relaxed">
                                {isES
                                    ? "Plataforma de engagement B2C para artistas, fans y marcas. Si SoundBand es el motor de ejecución, SoundPass es el sensor de experiencia que retroalimenta al sistema agéntico."
                                    : "B2C engagement platform for artists, fans and brands. If SoundBand is the execution engine, SoundPass is the experience sensor that feeds back into the agentic system."}
                            </p>
                        </div>

                        {/* Zero-Touch Model */}
                        <div className="p-6 rounded-2xl bg-[#111827] border border-[#1f2937]">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#374151] mb-4">
                                {isES ? "Modelo Zero-Touch" : "Zero-Touch Model"}
                            </p>
                            {(isES
                                ? [
                                    { n: "Input", t: "Cliente define presupuesto y objetivos de marca" },
                                    { n: "Process", t: "IA selecciona, contrata, asegura y calendariza" },
                                    { n: "Output", t: "Ejecución llave en mano con trazabilidad total" },
                                    { n: "Loop", t: "Sistema aprende y optimiza en cada evento" },
                                ]
                                : [
                                    { n: "Input", t: "Client defines budget and brand objectives" },
                                    { n: "Process", t: "AI selects, books, insures and schedules" },
                                    { n: "Output", t: "Turnkey execution with full traceability" },
                                    { n: "Loop", t: "System learns and optimizes with each event" },
                                ]
                            ).map(({ n, t }, i) => (
                                <div key={i} className="flex items-start gap-3 mb-3 last:mb-0">
                                    <span className="text-[9px] font-mono font-bold text-blue-500 uppercase tracking-wider w-12 pt-0.5 shrink-0">
                                        {n}
                                    </span>
                                    <span className="text-xs text-[#6b7280]">{t}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Gigs Packs */}
                <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#374151] mb-6">
                        {isES ? "Estructura de producto — Branded Gigs Packs" : "Product structure — Branded Gigs Packs"}
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                        {[
                            {
                                name: "Gigs 1",
                                sessions: isES ? "1 sesión / día / venue" : "1 session / day / venue",
                                example: isES ? "Lobby hotel 4★ — cuarteto de jazz, viernes y sábados" : "4★ hotel lobby — jazz quartet, Fridays and Saturdays",
                            },
                            {
                                name: "Gigs 2",
                                sessions: isES ? "2 sesiones / día / venue" : "2 sessions / day / venue",
                                example: isES ? "Resort 5★ — brunch acústico + cena con DJs" : "5★ resort — acoustic brunch + dinner with DJs",
                                featured: true,
                            },
                            {
                                name: "Gigs 3",
                                sessions: isES ? "3 sesiones / día / venue" : "3 sessions / day / venue",
                                example: isES ? "Gran Hotel — pool bar + welcome + gala event" : "Grand Hotel — pool bar + welcome + gala event",
                            },
                        ].map(({ name, sessions, example, featured }, i) => (
                            <div
                                key={i}
                                className={`p-5 rounded-xl border ${featured
                                    ? "bg-blue-600/10 border-blue-500/40"
                                    : "bg-[#111827] border-[#1f2937]"
                                    }`}
                            >
                                {/* Sessions bar */}
                                <div className="flex gap-1 mb-4">
                                    {Array.from({ length: 3 }).map((_, j) => (
                                        <div
                                            key={j}
                                            className={`h-1 flex-1 rounded-full ${j <= i ? "bg-blue-500" : "bg-[#1f2937]"
                                                }`}
                                        />
                                    ))}
                                </div>
                                <p className="font-black text-sm text-white mb-0.5">{name}</p>
                                <p className="text-[11px] text-blue-400 font-semibold mb-3">{sessions}</p>
                                <p className="text-[11px] text-[#6b7280] leading-relaxed">{example}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid sm:grid-cols-3 gap-px bg-[#1f2937] rounded-xl overflow-hidden border border-[#1f2937]">
                        {[
                            { pct: "70%", label: isES ? "Artista / Contrato" : "Artist / Contract" },
                            { pct: "10%", label: isES ? "Booking · Billing · Compliance" : "Booking · Billing · Compliance" },
                            { pct: "20%", label: isES ? "Margen SoundLink" : "SoundLink Margin", accent: true },
                        ].map(({ pct, label, accent }, i) => (
                            <div key={i} className="bg-[#0a0f1e] px-5 py-4 text-center">
                                <p className={`text-xl font-black ${accent ? "text-blue-400" : "text-white"}`}>{pct}</p>
                                <p className="text-[10px] text-[#374151] uppercase tracking-wide mt-1">{label}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-[10px] text-[#374151] text-center mt-3">
                        {isES
                            ? "1 Gig = mín. 190€ / artista · 1 Sesión = Solista · Dúo · Trío · Banda (+4) · DJ Set"
                            : "1 Gig = min. €190 / artist · 1 Session = Soloist · Duo · Trio · Band (+4) · DJ Set"}
                    </p>
                </div>
            </Section>

            {/* ─────────────────────────────────────────────────────────────────────
          AI / AGENTIC ADVANTAGE
      ───────────────────────────────────────────────────────────────────── */}
            <Section dark>
                <Label>{isES ? "Ventaja Tecnológica" : "Technological Advantage"}</Label>
                <H2 className="mb-4">
                    {isES ? "El foso: IA + expertise\noperativo real." : "The moat: AI + real\noperational expertise."}
                </H2>
                <p className="text-[#6b7280] max-w-xl mb-14 text-base leading-relaxed">
                    {isES
                        ? "No somos una agencia con software ni un marketplace de artistas. Somos infraestructura agéntica especializada que ningún competidor puede replicar sin años de datos y operaciones reales."
                        : "We are not an agency with software or an artist marketplace. We are specialized agentic infrastructure that no competitor can replicate without years of real data and operations."}
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {agentic.map(({ Icon, title, desc }, i) => (
                        <div
                            key={i}
                            className="p-6 rounded-2xl bg-[#0a0f1e] border border-[#1f2937] hover:border-blue-500/30 transition-colors duration-300"
                        >
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                                <Icon className="w-5 h-5" />
                            </div>
                            <h4 className="font-bold text-sm text-white mb-2">{title}</h4>
                            <p className="text-xs text-[#6b7280] leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* ─────────────────────────────────────────────────────────────────────
          MARKET
      ───────────────────────────────────────────────────────────────────── */}
            <Section>
                <Label>{isES ? "Oportunidad de Mercado" : "Market Opportunity"}</Label>
                <H2 className="mb-4">
                    {isES ? "Dos mercados récord.\nUn puente único." : "Two record markets.\nOne unique bridge."}
                </H2>
                <p className="text-[#6b7280] max-w-xl mb-14 text-base leading-relaxed">
                    {isES
                        ? "SoundLink opera en la intersección de Live Music global y Hospitality & Turismo en España — los dos sectores con mayor crecimiento simultáneo."
                        : "SoundLink operates at the intersection of global Live Music and Spain's Hospitality & Tourism — the two sectors with the highest simultaneous growth."}
                </p>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#1f2937] rounded-2xl overflow-hidden border border-[#1f2937] mb-6">
                    {[
                        { val: "$38.2B", label: "Live Music Global 2025" },
                        { val: "$91.4B", label: "Music Tourism Global 2024" },
                        { val: "€725M", label: isES ? "Live Music España 2024" : "Spanish Live Music 2024" },
                        { val: "97M", label: isES ? "Turistas España 2025" : "Spain Tourists 2025" },
                    ].map(({ val, label }, i) => (
                        <div key={i} className="bg-[#0a0f1e] px-6 py-8 text-center">
                            <p className="text-3xl md:text-4xl font-black text-blue-400 mb-2">{val}</p>
                            <p className="text-[10px] text-[#6b7280] uppercase tracking-wide">{label}</p>
                        </div>
                    ))}
                </div>

                <div className="grid sm:grid-cols-4 gap-3">
                    {[
                        { val: "+96%", sub: isES ? "Crecimiento Live Music Madrid (€185M)" : "Madrid Live Music growth (€185M)" },
                        { val: "€4.2B", sub: isES ? "Inversión hotelera proyectada España" : "Projected hotel investment Spain" },
                        { val: "+8%", sub: isES ? "Rentabilidad hotelera media España" : "Average hotel profitability Spain" },
                        { val: "13.5%", sub: isES ? "Contribución turismo al PIB España" : "Tourism contribution to Spain GDP" },
                    ].map(({ val, sub }, i) => (
                        <div key={i} className="p-4 rounded-xl bg-[#111827] border border-[#1f2937] text-center">
                            <p className="text-xl font-black text-white mb-1">{val}</p>
                            <p className="text-[10px] text-[#374151]">{sub}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* ─────────────────────────────────────────────────────────────────────
          PIPELINE & REVENUE
      ───────────────────────────────────────────────────────────────────── */}
            <Section dark>
                <Label>{isES ? "Roadmap & Pipeline" : "Roadmap & Pipeline"}</Label>
                <H2 className="mb-4">SoundLink Pipeline 2026–2027</H2>
                <p className="text-[#6b7280] max-w-xl mb-14 text-base leading-relaxed">
                    {isES
                        ? "Objetivo mínimo: 50K€ MRR sostenido en 18 meses. Target: 150K€ MRR en 24 meses. La inversión está enfocada en alcanzar break-even antes de la siguiente ronda."
                        : "Minimum objective: €50K MRR sustained at 18 months. Target: €150K MRR at 24 months. The investment is focused on reaching break-even before the next round."}
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {pipeline.map((p, i) => (
                        <PipelineCard key={i} {...p} />
                    ))}
                </div>

                {/* Revenue projection table */}
                <div className="rounded-2xl overflow-hidden border border-[#1f2937]">
                    <div className="bg-[#111827] px-6 py-3 border-b border-[#1f2937]">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#374151]">
                            {isES ? "Proyección de Revenue — 5 años" : "Revenue Projection — 5 years"}
                        </p>
                    </div>
                    {[
                        {
                            time: "6–12 meses",
                            mrr: "50K – 150K€ MRR",
                            mix: "75% España + 25% Latam",
                            note: isES ? "Hotels & Hospitality · Canarias + Madrid" : "Hotels & Hospitality · Canary Islands + Madrid",
                        },
                        {
                            time: "12–24 meses",
                            mrr: "150K – 350K€ MRR",
                            mix: "60% España + 40% Latam",
                            note: isES ? "Hotels + Marcas + Promotores · Expansión EU" : "Hotels + Brands + Promoters · EU Expansion",
                            featured: true,
                        },
                        {
                            time: "36–60 meses",
                            mrr: "+10M ARR",
                            mix: "50% EU + 25% Latam + 25% US",
                            note: isES ? "Integración PMS/ERP global · SoundPass live" : "Global PMS/ERP integration · SoundPass live",
                        },
                    ].map(({ time, mrr, mix, note, featured }, i) => (
                        <div
                            key={i}
                            className={`grid grid-cols-3 gap-6 px-6 py-5 border-b border-[#1f2937] last:border-0 ${featured ? "bg-blue-600/5" : "bg-[#0a0f1e]"
                                }`}
                        >
                            <div>
                                <p className="text-[10px] text-[#374151] uppercase tracking-wide mb-1">
                                    {isES ? "Plazo" : "Timeline"}
                                </p>
                                <p className="text-sm font-semibold text-white">{time}</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-[#374151] uppercase tracking-wide mb-1">MRR / ARR</p>
                                <p className={`text-base font-black ${featured ? "text-blue-400" : "text-white"}`}>
                                    {mrr}
                                </p>
                                <p className="text-[10px] text-[#374151]">{mix}</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-[#374151] uppercase tracking-wide mb-1">Focus</p>
                                <p className="text-xs text-[#6b7280]">{note}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* ─────────────────────────────────────────────────────────────────────
          TEAM
      ───────────────────────────────────────────────────────────────────── */}
            <Section>
                <Label>{isES ? "El Equipo" : "The Team"}</Label>
                <H2 className="mb-4">
                    {isES ? "Operadores, no\nteóricos." : "Operators, not\ntheorists."}
                </H2>
                <p className="text-[#6b7280] max-w-xl mb-14 text-base leading-relaxed">
                    {isES
                        ? "Detrás de SoundLink hay años de operaciones reales, contratos ejecutados y una red consolidada en hospitality, tech y mercados internacionales."
                        : "Behind SoundLink are years of real operations, executed contracts and a consolidated network in hospitality, tech and international markets."}
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {team.map((m, i) => (
                        <TeamCard key={i} {...m} />
                    ))}
                </div>
            </Section>

            {/* ─────────────────────────────────────────────────────────────────────
          INVESTMENT TERMS
      ───────────────────────────────────────────────────────────────────── */}
            <Section dark>
                <Label>{isES ? "La Inversión" : "The Investment"}</Label>
                <H2 className="mb-4">
                    {isES
                        ? "200K€. 18 meses.\nBreak-even."
                        : "€200K. 18 months.\nBreak-even."}
                </H2>
                <p className="text-[#6b7280] max-w-2xl mb-14 text-base leading-relaxed">
                    {isES
                        ? "Buscamos 100K€ de Business Angels al 10% de equity. Los 100K€ restantes provienen de apalancamiento público (Sodecan, deducciones fiscales Canarias, posible Tax Lease) — sin dilución adicional."
                        : "We seek €100K from Business Angels at 10% equity. The remaining €100K comes from public leverage (Sodecan, Canary Islands tax deductions, possible Tax Lease) — no additional dilution."}
                </p>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Terms */}
                    <div className="rounded-2xl overflow-hidden border border-[#1f2937]">
                        <div className="bg-[#111827] px-6 py-4 border-b border-[#1f2937]">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#374151]">
                                {isES ? "Condiciones de la ronda" : "Round terms"}
                            </p>
                        </div>
                        <div className="divide-y divide-[#1f2937]">
                            {[
                                { label: isES ? "Ask privado (Business Angels)" : "Private ask (Business Angels)", val: "100.000€", accent: true },
                                { label: isES ? "Equity ofrecido" : "Equity offered", val: "10%" },
                                { label: isES ? "Instrumento" : "Instrument", val: "SAFE o Equity" },
                                { label: isES ? "Valuación post-money" : "Post-money valuation", val: "1.000.000€" },
                                { label: isES ? "Apalancamiento público" : "Public leverage", val: "100.000€" },
                                { label: isES ? "Instrumentos de apalancamiento" : "Leverage instruments", val: "Sodecan + Deducciones + Tax Lease" },
                                { label: isES ? "Total capital operativo" : "Total operating capital", val: "200.000€" },
                                { label: isES ? "Exit proyectado (5 años)" : "Projected exit (5 years)", val: "hasta 9X", accent: true },
                            ].map(({ label, val, accent }, i) => (
                                <div key={i} className="flex justify-between items-center px-6 py-4 bg-[#0a0f1e]">
                                    <span className="text-xs text-[#6b7280]">{label}</span>
                                    <span className={`text-sm font-bold ${accent ? "text-blue-400" : "text-white"}`}>
                                        {val}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Use of funds */}
                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#374151] mb-6">
                            {isES ? "Uso de fondos (200K€)" : "Use of funds (€200K)"}
                        </p>
                        <div className="space-y-4">
                            {funds.map(({ pct, label, desc }, i) => (
                                <div key={i} className="p-5 rounded-xl bg-[#111827] border border-[#1f2937]">
                                    <div className="flex justify-between items-center mb-2">
                                        <p className="font-bold text-sm text-white">{label}</p>
                                        <p className="text-2xl font-black text-blue-400">{pct}%</p>
                                    </div>
                                    <div className="h-1 bg-[#1f2937] rounded-full mb-3 overflow-hidden">
                                        <div
                                            className="h-full bg-blue-500 rounded-full"
                                            style={{ width: `${pct}%` }}
                                        />
                                    </div>
                                    <p className="text-xs text-[#374151]">{desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 p-4 rounded-xl border border-[#1f2937] bg-[#0a0f1e]/50">
                            <p className="text-[11px] text-[#374151] leading-relaxed">
                                {isES
                                    ? "El apalancamiento público (Sodecan, deducciones I+D y posible Tax Lease en Canarias) multiplica el impacto de cada euro privado sin dilución adicional de equity."
                                    : "Public leverage (Sodecan, R&D deductions and possible Tax Lease in Canary Islands) multiplies the impact of each private euro without additional equity dilution."}
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* ─────────────────────────────────────────────────────────────────────
          CTA
      ───────────────────────────────────────────────────────────────────── */}
            <section className="py-28 px-6 bg-[#0a0f1e] text-center">
                <div className="max-w-2xl mx-auto">
                    <img
                        src="/soundlink-icono.gif"
                        alt=""
                        className="w-12 h-12 mx-auto mb-8"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                    />
                    <h2
                        className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight"
                        style={{ letterSpacing: "-0.03em" }}
                    >
                        {isES ? "Únete a la Banda." : "Join the Band."}
                    </h2>
                    <p className="text-[#6b7280] text-lg mb-12 max-w-md mx-auto leading-relaxed">
                        {isES
                            ? "Estamos construyendo el estándar de la música B2B en España y Latam. Si crees que la música puede ser un sistema operativo para marcas, hablemos."
                            : "We are building the B2B music standard in Spain and Latam. If you believe music can be an operating system for brands, let's talk."}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
                        <Link
                            href="mailto:nicolas@soundlink.band"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all text-sm"
                        >
                            <Mail className="w-4 h-4" />
                            nicolas@soundlink.band
                        </Link>
                        <Link
                            href="https://calendar.app.google/mpwxXhzTB7xB5Tfx9"
                            target="_blank"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1f2937] text-white font-semibold rounded-full hover:border-blue-500/50 transition-all text-sm"
                        >
                            <Calendar className="w-4 h-4" />
                            {isES ? "Agendar reunión" : "Schedule a meeting"}
                        </Link>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] text-[#374151]">
                        <span>Nicolás A. Civatti · Founder & CEO</span>
                        <span>·</span>
                        <span>SoundLink Music S.L.</span>
                        <span>·</span>
                        <span>Islas Canarias, España</span>
                        <span>·</span>
                        <Link href="https://www.soundband.pro" target="_blank" className="hover:text-blue-400 transition-colors">
                            soundband.pro
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-[#1f2937] py-5 px-6">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-[#374151]">
                    <span>© 2026 SoundLink Music S.L.</span>
                    <span>{isES ? "Presentación privada · No distribuir" : "Private presentation · Do not distribute"}</span>
                    <Link href="https://doyo.pro" target="_blank" className="hover:text-[#6b7280] transition-colors">
                        Powered by DOYO.PRO
                    </Link>
                </div>
            </footer>
        </div>
    );
}