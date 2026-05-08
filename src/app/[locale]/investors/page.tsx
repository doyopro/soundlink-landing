"use client";

import React, { useState, useEffect, useRef } from "react";
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
    Clock,
    FileText,
    Activity,
    Target,
    Layers,
    Lock,
    ChevronRight,
    Mail,
    Calendar,
} from "lucide-react";

// ─── ANIMATED COUNTER ────────────────────────────────────────────────────────
function AnimatedCounter({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    let startTime: number;
                    const duration = 1800;
                    const step = (timestamp: number) => {
                        if (!startTime) startTime = timestamp;
                        const progress = Math.min((timestamp - startTime) / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(eased * end));
                        if (progress < 1) requestAnimationFrame(step);
                        else setCount(end);
                    };
                    requestAnimationFrame(step);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [end]);

    return <span ref={ref}>{prefix}{count.toLocaleString("es-ES")}{suffix}</span>;
}

// ─── SVG ICONS ───────────────────────────────────────────────────────────────
const IconAI = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 0 6h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1 0-6h1V6a4 4 0 0 1 4-4z" />
        <circle cx="9" cy="9" r="1" fill="currentColor" stroke="none" />
        <circle cx="15" cy="9" r="1" fill="currentColor" stroke="none" />
        <path d="M9 14s1 1.5 3 1.5 3-1.5 3-1.5" />
    </svg>
);

const IconCompliance = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 2L4 6v6c0 5.25 3.5 10.14 8 11.35C16.5 22.14 20 17.25 20 12V6l-8-4z" />
        <path d="m9 12 2 2 4-4" />
    </svg>
);

const IconBooking = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <path d="m9 16 2 2 4-4" />
    </svg>
);

const IconOperations = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07" />
    </svg>
);

const IconROI = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
    </svg>
);

const IconFragment = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <circle cx="5" cy="5" r="2" /><circle cx="19" cy="5" r="2" /><circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="19" r="2" /><circle cx="12" cy="12" r="2" />
        <path d="M7 5h5M12 7v5M7 19h5M17 5h-2M17 19h-2M5 7v5M19 7v5M5 14v2M19 14v2" />
    </svg>
);

const IconRisk = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z" />
        <path d="M12 9v4M12 17h.01" />
    </svg>
);

const IconProcess = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <rect x="2" y="7" width="6" height="10" rx="1" />
        <rect x="9" y="4" width="6" height="16" rx="1" />
        <rect x="16" y="9" width="6" height="8" rx="1" />
    </svg>
);

const IconLegal = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        <path d="m9 14 2 2 4-4" />
    </svg>
);

// ─── SECTION LABEL ───────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-[10px] font-semibold uppercase tracking-[0.2em] mb-4">
            {children}
        </div>
    );
}

// ─── STAT CARD ───────────────────────────────────────────────────────────────
function StatCard({ val, label, sub, animate = false, end = 0, prefix = "", suffix = "" }: {
    val?: string; label: string; sub: string; animate?: boolean; end?: number; prefix?: string; suffix?: string;
}) {
    return (
        <div className="group p-6 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-blue-500/40 transition-all duration-300">
            <div className="text-3xl lg:text-4xl font-black text-white mb-2 tracking-tight">
                {animate ? <AnimatedCounter end={end} prefix={prefix} suffix={suffix} /> : val}
            </div>
            <div className="text-[11px] font-bold text-blue-400 uppercase tracking-widest mb-1">{label}</div>
            <div className="text-xs text-slate-500">{sub}</div>
        </div>
    );
}

// ─── FEATURE ROW ─────────────────────────────────────────────────────────────
function FeatureRow({ Icon, title, desc }: { Icon: React.ComponentType<{ className: string }>; title: string; desc: string }) {
    return (
        <div className="flex gap-4 py-4 border-b border-white/[0.06] last:border-0">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 text-blue-400">
                <Icon className="w-5 h-5" />
            </div>
            <div>
                <h4 className="font-semibold text-sm text-white mb-1">{title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}

// ─── PROBLEM CARD ────────────────────────────────────────────────────────────
function ProblemCard({ Icon, title, desc, stat }: { Icon: React.ReactNode; title: string; desc: string; stat?: string }) {
    return (
        <div className="relative p-6 rounded-2xl bg-gradient-to-br from-red-500/5 to-transparent border border-red-500/20 hover:border-red-500/40 transition-all duration-300">
            {stat && (
                <div className="absolute top-4 right-4 text-xs font-bold text-red-400 bg-red-500/10 px-2 py-1 rounded-full border border-red-500/20">
                    {stat}
                </div>
            )}
            <div className="text-red-400 mb-4">{Icon}</div>
            <h3 className="font-bold text-sm text-white mb-2 uppercase tracking-wide">{title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
        </div>
    );
}

// ─── TEAM MEMBER ─────────────────────────────────────────────────────────────
function TeamMember({ name, role, bio, initials }: { name: string; role: string; bio: string; initials: string }) {
    return (
        <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-blue-500/30 transition-all duration-300">
            {/* Photo placeholder — replace src with real photo */}
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 border-2 border-blue-500/30 flex items-center justify-center mb-4">
                {/* <img src="/team/[filename].jpg" alt={name} className="w-full h-full rounded-full object-cover" /> */}
                <span className="text-blue-300 text-sm font-bold">{initials}</span>
            </div>
            <h4 className="font-bold text-sm text-white mb-0.5">{name}</h4>
            <p className="text-blue-400 text-[10px] font-semibold uppercase tracking-widest mb-3">{role}</p>
            <p className="text-xs text-slate-400 leading-relaxed">{bio}</p>
        </div>
    );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function InvestorDeckPage() {
    const isSpanish = typeof window !== "undefined" && window.location.pathname.includes("/es");

    const problems = [
        {
            Icon: <IconFragment />,
            title: isSpanish ? "Fragmentación operativa extrema" : "Extreme operational fragmentation",
            desc: isSpanish
                ? "Miles de hoteles, cadenas y marcas gestionan su programación musical con múltiples proveedores sin visibilidad centralizada. El resultado: caos operativo, decisiones a ciegas y oportunidades perdidas."
                : "Thousands of hotels, chains and brands manage their music programming with multiple vendors and no centralized visibility. The result: operational chaos, blind decisions and missed opportunities.",
            stat: "8h / semana",
        },
        {
            Icon: <IconRisk />,
            title: isSpanish ? "Riesgo legal y de compliance ignorado" : "Ignored legal and compliance risk",
            desc: isSpanish
                ? "El caso Sony v. Marriott es solo el principio. La mayoría de establecimientos operan sin contratos adecuados, sin seguros de artistas ni licencias verificadas, acumulando pasivos que pueden costar millones."
                : "Sony v. Marriott is just the beginning. Most venues operate without proper contracts, artist insurance or verified licenses, accumulating liabilities that can cost millions.",
            stat: "0% compliance",
        },
        {
            Icon: <IconProcess />,
            title: isSpanish ? "Procesos manuales sin datos ni ROI" : "Manual processes with no data or ROI",
            desc: isSpanish
                ? "Sin métricas de impacto, las empresas no pueden justificar su inversión musical. La duplicación de esfuerzos entre booking, producción, contratos y pagos consume tiempo y dinero sin trazabilidad."
                : "Without impact metrics, companies can't justify their music investment. Duplication of effort across booking, production, contracts and payments wastes time and money with no traceability.",
            stat: "0% ROI data",
        },
        {
            Icon: <IconLegal />,
            title: isSpanish ? "Experiencia inconsistente en cada venue" : "Inconsistent experience across venues",
            desc: isSpanish
                ? "Hoteles de 5 estrellas con música de fondo aleatoria. Marcas premium sin identidad sonora. La música en vivo se trata como gasto, no como herramienta estratégica de marca y experiencia de cliente."
                : "5-star hotels with random background music. Premium brands without a sonic identity. Live music is treated as a cost, not as a strategic brand and customer experience tool.",
            stat: "Reputación",
        },
    ];

    const howItWorks = [
        {
            num: "01",
            Icon: BrainCircuit,
            title: isSpanish ? "Diagnóstico de ADN de Marca" : "Brand DNA Diagnosis",
            desc: isSpanish
                ? "Analizamos los KPIs de tu negocio, perfil de cliente, identidad de marca y objetivos comerciales. Nuestra IA construye un perfil musical único para cada venue y segmento."
                : "We analyze your business KPIs, customer profile, brand identity and commercial objectives. Our AI builds a unique music profile for each venue and segment.",
        },
        {
            num: "02",
            Icon: IconBooking,
            title: isSpanish ? "Matching Algorítmico de Artistas" : "Algorithmic Artist Matching",
            desc: isSpanish
                ? "Selección inteligente de artistas validados según ADN de marca, presupuesto y disponibilidad. Contratos, seguros y compliance gestionados automáticamente en la plataforma."
                : "Intelligent selection of validated artists based on brand DNA, budget and availability. Contracts, insurance and compliance managed automatically in the platform.",
        },
        {
            num: "03",
            Icon: Activity,
            title: isSpanish ? "Ejecución con Trazabilidad 360°" : "Execution with 360° Traceability",
            desc: isSpanish
                ? "Calendario, logística, producción y comunicación con el artista en un solo flujo. Dashboard en tiempo real con métricas de satisfacción, ocupación y ROI para cada evento."
                : "Calendar, logistics, production and artist communication in a single flow. Real-time dashboard with satisfaction, occupancy and ROI metrics for each event.",
        },
    ];

    const aiCapabilities = [
        {
            Icon: BrainCircuit,
            title: isSpanish ? "Booking Intelligence" : "Booking Intelligence",
            desc: isSpanish
                ? "Motor de recomendación que cruza data de marca, perfil de cliente, historial de eventos y tendencias del mercado para garantizar el match perfecto artista–contexto–objetivo."
                : "Recommendation engine crossing brand data, client profile, event history and market trends to guarantee the perfect artist–context–objective match.",
        },
        {
            Icon: Zap,
            title: isSpanish ? "Sustitución Automática" : "Automatic Substitution",
            desc: isSpanish
                ? "Sistema agentic que detecta cancelaciones y reasigna talento validado en tiempo real, sin fricción operativa. La operación nunca se detiene."
                : "Agentic system that detects cancellations and reassigns validated talent in real-time, with no operational friction. The operation never stops.",
        },
        {
            Icon: IconCompliance,
            title: isSpanish ? "Compliance Automatizado" : "Automated Compliance",
            desc: isSpanish
                ? "Validación automática de contratos, seguros, licencias SGAE/BIEM y requisitos legales. 0% contingencias. Auditoría trazable de cada contratación."
                : "Automatic validation of contracts, insurance, SGAE/BIEM licenses and legal requirements. 0% contingencies. Traceable audit of every booking.",
        },
        {
            Icon: IconROI,
            title: isSpanish ? "ROI Dashboard" : "ROI Dashboard",
            desc: isSpanish
                ? "Reportes de impacto que conectan la programación musical con métricas de negocio: ocupación, consumo, NPS, engagement en RRSS y satisfacción de cliente."
                : "Impact reports that connect music programming with business metrics: occupancy, consumption, NPS, social media engagement and customer satisfaction.",
        },
    ];

    const gigsData = [
        {
            label: "Gigs 1",
            sessionsPerDay: "1 sesión / día",
            subtitle: isSpanish ? "Presencia musical básica" : "Basic musical presence",
            price: "min. 190€ / artista",
            example: isSpanish ? "Lobby hotel 4★ — Jazz dúo viernes y sábado" : "4★ hotel lobby — Jazz duo Fri-Sat",
        },
        {
            label: "Gigs 2",
            sessionsPerDay: "2 sesiones / día",
            subtitle: isSpanish ? "Programación continua" : "Continuous programming",
            price: "min. 190€ / artista",
            example: isSpanish ? "Restaurante resort — brunch + cena diaria" : "Resort restaurant — brunch + daily dinner",
            featured: true,
        },
        {
            label: "Gigs 3",
            sessionsPerDay: "3 sesiones / día",
            subtitle: isSpanish ? "Experiencia inmersiva" : "Immersive experience",
            price: "min. 190€ / artista",
            example: isSpanish ? "Hotel 5★ — pool bar + welcome + gala" : "5★ hotel — pool bar + welcome + gala",
        },
    ];

    const marketData = [
        { val: "$38.2B", label: isSpanish ? "Live Music Global 2025" : "Global Live Music 2025", icon: Music },
        { val: "$91.4B", label: isSpanish ? "Music Tourism Global 2024" : "Global Music Tourism 2024", icon: Globe },
        { val: "€725M", label: isSpanish ? "Mercado Live Music España" : "Spanish Live Music Market", icon: TrendingUp },
        { val: "97M", label: isSpanish ? "Turistas España 2025" : "Spain Tourists 2025", icon: Users },
    ];

    const revenueProjections = [
        {
            timeframe: isSpanish ? "6–12 meses" : "6–12 months",
            mrr: "50K – 150K€ MRR",
            mix: "75% España + 25% Latam",
            focus: isSpanish ? "Hotels & Hospitality" : "Hotels & Hospitality",
        },
        {
            timeframe: isSpanish ? "12–24 meses" : "12–24 months",
            mrr: "150K – 350K€ MRR",
            mix: "60% España + 40% Latam",
            focus: isSpanish ? "Hotels + Marcas + Promotores" : "Hotels + Brands + Promoters",
            featured: true,
        },
        {
            timeframe: isSpanish ? "36–60 meses" : "36–60 months",
            mrr: "+10M ARR",
            mix: "50% España+EU + 25% Latam + 25% US",
            focus: isSpanish ? "Integración PMS/ERP global" : "Global PMS/ERP Integration",
        },
    ];

    const team = [
        {
            name: "Nicolás A. Civatti",
            role: "Founder & CEO",
            bio: isSpanish
                ? "Músico, productor y operador independiente. Más de 10.000 contrataciones gestionadas en España y Latam. Validó el modelo de negocio de forma independiente antes de escalar."
                : "Musician, producer and independent operator. Over 10,000 bookings managed in Spain and Latam. Validated the business model independently before scaling.",
            initials: "NC",
        },
        {
            name: "Lucas Minetti",
            role: "Head of Product",
            bio: isSpanish
                ? "Diseñador gráfico y UX/UI con más de 10 años de experiencia. Especializado en productos digitales funcionales y visualmente atractivos."
                : "Graphic designer and UX/UI specialist with over 10 years of experience. Specialized in functional and visually compelling digital products.",
            initials: "LM",
        },
        {
            name: "Nik Levenberg",
            role: "Strategic Partner — U.S.",
            bio: isSpanish
                ? "25 años en tecnología, startups y venture capital en el mercado estadounidense. Asesora en estructura financiera, go-to-market y fundraising."
                : "25 years in technology, startups and venture capital in the US market. Advises on financial structure, go-to-market and fundraising.",
            initials: "NL",
        },
        {
            name: "Juan Parodi",
            role: "Strategic Partner",
            bio: isSpanish
                ? "Más de 20 años en desarrollo de negocios y formación ejecutiva. Mentor y asesor de emprendedores en España y Latam. Referente en sostenibilidad corporativa."
                : "Over 20 years in business development and executive training. Mentor and advisor to entrepreneurs in Spain and Latam. Corporate sustainability reference.",
            initials: "JP",
        },
        {
            name: "Ivan Novakovic",
            role: "Finance & Legal Advisor",
            bio: isSpanish
                ? "Abogado con especialización dual en Derecho y Economía. Experto en Fintech, Blockchain, Capital Markets y sistemas de pago digital. Speaker internacional."
                : "Lawyer with dual specialization in Law and Economics. Expert in Fintech, Blockchain, Capital Markets and digital payment systems. International speaker.",
            initials: "IN",
        },
        {
            name: "Graciana Virasoro",
            role: "Head Office & Accounts",
            bio: isSpanish
                ? "Trayectoria sólida en proyectos vinculados a venues e iniciativas musicales para empresas. Gestión end-to-end y construcción de relaciones con clientes activos."
                : "Solid track record in venue projects and musical initiatives for companies. End-to-end management and active client relationship building.",
            initials: "GV",
        },
        {
            name: "Martín M. Foco",
            role: "Partner & Business Development",
            bio: isSpanish
                ? "Expertise en gestión empresarial y administración financiera. Impulsa la expansión comercial de SoundLink hacia nuevos mercados con visión cultural y financiera."
                : "Expertise in business management and financial administration. Drives SoundLink's commercial expansion into new markets with cultural and financial vision.",
            initials: "MF",
        },
        {
            name: "Joaquín Lagos Aguirre",
            role: "Head of Studio",
            bio: isSpanish
                ? "Músico multi-instrumentista, ingeniero de sonido y productor musical con más de 20 años de experiencia. Ha participado en proyectos desde sellos independientes hasta bandas mainstream."
                : "Multi-instrumentalist musician, sound engineer and music producer with over 20 years of experience. Has participated in projects from independent labels to mainstream bands.",
            initials: "JL",
        },
    ];

    const usageOfFunds = [
        { pct: 50, label: isSpanish ? "Marketing & Ventas" : "Marketing & Sales", desc: isSpanish ? "Go-to-market España + Latam, equipo comercial B2B, partnerships estratégicos" : "Spain + Latam go-to-market, B2B commercial team, strategic partnerships" },
        { pct: 30, label: isSpanish ? "Desarrollo de Producto" : "Product Development", desc: isSpanish ? "IA, plataforma SoundBand v2, integraciones PMS/ERP, SoundPass" : "AI, SoundBand v2 platform, PMS/ERP integrations, SoundPass" },
        { pct: 20, label: isSpanish ? "Admin & Operaciones" : "Admin & Operations", desc: isSpanish ? "Estructura legal, equipo de producción, hub físico en Canarias" : "Legal structure, production team, physical hub in Canary Islands" },
    ];

    const pipeline = [
        {
            icon: "🏨",
            title: "Hotels & Hospitality",
            mrr: "50–100K€ MRR",
            timeframe: "12–18 meses",
            desc: isSpanish
                ? "Segmento ya validado con +850K€. Primera fase: hoteles y resorts en Canarias, Madrid y Latam."
                : "Segment already validated with +€850K. First phase: hotels and resorts in Canary Islands, Madrid and Latam.",
        },
        {
            icon: "🎙️",
            title: "Marcas & Retail",
            mrr: "+50K€ MRR",
            timeframe: "12 meses",
            desc: isSpanish
                ? "Cerveceras, bancos, moda, retail. Branded gigs como herramienta de marketing on-premise."
                : "Breweries, banks, fashion, retail. Branded gigs as on-premise marketing tool.",
        },
        {
            icon: "🎪",
            title: "Promotores & Eventos",
            mrr: "15–25K€ MRR",
            timeframe: "18 meses",
            desc: isSpanish
                ? "Conciertos propios, festivales, sessions con tickets. Upselling desde base de clientes existente."
                : "Own concerts, festivals, sessions with tickets. Upselling from existing client base.",
        },
        {
            icon: "🚀",
            title: "New Business",
            mrr: "SoundPass",
            timeframe: "2027",
            desc: isSpanish
                ? "SoundPass: plataforma de engagement para artistas y fans. En beta. Nuevas verticales y partnerships de inversión en música."
                : "SoundPass: engagement platform for artists and fans. In beta. New verticals and music investment partnerships.",
        },
    ];

    return (
        <main className="min-h-screen bg-[#020305] text-white antialiased overflow-x-hidden">
            {/* ═══════════════════════════════════════════════════════════════
          NAV
      ═══════════════════════════════════════════════════════════════ */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-white/[0.06] bg-[#020305]/90 backdrop-blur-md">
                <div className="flex items-center gap-3">
                    {/* SoundLink logo — replace with real <img> */}
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                        {/* <img src="/soundlink-icono.gif" alt="SoundLink" className="w-8 h-8" /> */}
                        <Activity className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-sm font-semibold tracking-wide">SoundLink Music</span>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest hidden sm:block">
                        {isSpanish ? "Presentación Privada" : "Private Presentation"}
                    </span>
                    <Link
                        href="mailto:nicolas@soundlink.band"
                        className="px-4 py-2 rounded-full bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition-colors"
                    >
                        {isSpanish ? "Contactar" : "Contact"}
                    </Link>
                </div>
            </nav>

            {/* ═══════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════ */}
            <section className="relative pt-28 pb-20 px-6 overflow-hidden">
                {/* Background glow */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/8 rounded-full blur-[100px]" />
                    <div className="absolute top-20 left-1/4 w-[300px] h-[200px] bg-purple-600/5 rounded-full blur-[80px]" />
                </div>

                <div className="relative max-w-5xl mx-auto text-center">
                    {/* Logo slot */}
                    <div className="flex items-center justify-center gap-3 mb-10">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                            {/* <img src="/soundlink-icono.gif" alt="SoundLink" className="w-10 h-10" /> */}
                            <Activity className="w-6 h-6 text-blue-400" />
                        </div>
                        <div className="text-left">
                            <div className="text-xs text-slate-500 uppercase tracking-widest">SoundLink Music S.L.</div>
                            <div className="text-sm font-semibold">Investor Relations 2026</div>
                        </div>
                    </div>

                    <SectionLabel>
                        <Target className="w-3 h-3" />
                        {isSpanish ? "Pre-Seed Round" : "Pre-Seed Round"}
                    </SectionLabel>

                    <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.9] mb-6 tracking-tight">
                        {isSpanish ? (
                            <>
                                La IA que convierte<br />
                                <span className="text-blue-400">la música en vivo</span><br />
                                en ventaja competitiva.
                            </>
                        ) : (
                            <>
                                The AI that turns<br />
                                <span className="text-blue-400">live music</span><br />
                                into competitive advantage.
                            </>
                        )}
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                        {isSpanish
                            ? "SoundLink Music opera en la intersección de gestión cultural profesional e inteligencia artificial, eliminando el caos operativo del music management B2B y generando ROI medible para hoteles, marcas y promotores a escala."
                            : "SoundLink Music operates at the intersection of professional cultural management and artificial intelligence, eliminating operational chaos in B2B music management and generating measurable ROI for hotels, brands and promoters at scale."}
                    </p>

                    {/* Investment box */}
                    <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-8 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-sm">
                        <div className="text-center sm:text-left sm:pr-8 sm:border-r sm:border-white/10">
                            <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500 mb-1">
                                {isSpanish ? "Inversión buscada" : "Seeking"}
                            </div>
                            <div className="text-4xl font-black text-white">200.000€</div>
                            <div className="text-sm text-blue-400 font-semibold">10% Equity · BA Round</div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-left">
                            <div>
                                <div className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">
                                    {isSpanish ? "Valuación post-money" : "Post-money valuation"}
                                </div>
                                <div className="text-lg font-black text-white">€2.000.000</div>
                            </div>
                            <div>
                                <div className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">
                                    {isSpanish ? "Instrumento" : "Instrument"}
                                </div>
                                <div className="text-lg font-black text-white">SAFE / Equity</div>
                            </div>
                            <div>
                                <div className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">
                                    {isSpanish ? "Exit proyectado" : "Projected exit"}
                                </div>
                                <div className="text-lg font-black text-white">hasta 9X</div>
                            </div>
                            <div>
                                <div className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">
                                    {isSpanish ? "Horizonte" : "Horizon"}
                                </div>
                                <div className="text-lg font-black text-white">5 años</div>
                            </div>
                        </div>
                    </div>

                    <p className="mt-6 text-xs text-slate-600">
                        {isSpanish
                            ? "* Inversión apalancada con créditos Sodecan, ENISA, ZEC/RIC y deducciones fiscales aplicables en Canarias — multiplicando el impacto real de tu aportación."
                            : "* Investment leveraged with Sodecan, ENISA, ZEC/RIC credits and applicable tax deductions in the Canary Islands — multiplying the real impact of your contribution."}
                    </p>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
          TRACTION METRICS
      ═══════════════════════════════════════════════════════════════ */}
            <section className="py-16 border-y border-white/[0.06] bg-white/[0.02]">
                <div className="max-w-6xl mx-auto px-6">
                    <p className="text-center text-[10px] uppercase tracking-[0.3em] text-slate-600 mb-8">
                        {isSpanish ? "Tracción validada antes de levantar capital externo" : "Traction validated before raising external capital"}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {[
                            { val: "+850K€", label: isSpanish ? "Pagados a artistas" : "Paid to artists", sub: "100% legal y trazable" },
                            { val: "+8.000", label: isSpanish ? "Gigs ejecutados" : "Gigs executed", sub: isSpanish ? "End-to-end gestionados" : "End-to-end managed" },
                            { val: "20%", label: isSpanish ? "Margen neto medio" : "Average net margin", sub: isSpanish ? "Operativo actual" : "Current operating" },
                            { val: "0%", label: isSpanish ? "Contingencias legales" : "Legal contingencies", sub: isSpanish ? "En toda la historia" : "In entire history" },
                            { val: "+2 años", label: isSpanish ? "Retención de clientes" : "Client retention", sub: isSpanish ? "Media en partners clave" : "Average in key partners" },
                            { val: "100%", label: isSpanish ? "Curaduría AI+Humana" : "AI+Human Curation", sub: isSpanish ? "En cada contratación" : "In every booking" },
                        ].map((m, i) => (
                            <div key={i} className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                                <div className="text-2xl font-black text-blue-400 mb-1">{m.val}</div>
                                <div className="text-[10px] font-semibold text-white uppercase tracking-wide mb-1">{m.label}</div>
                                <div className="text-[9px] text-slate-600">{m.sub}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
          THE PROBLEM
      ═══════════════════════════════════════════════════════════════ */}
            <section className="py-28 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <SectionLabel>
                        <Lock className="w-3 h-3" />
                        {isSpanish ? "El Problema" : "The Problem"}
                    </SectionLabel>
                    <h2 className="text-4xl lg:text-5xl font-black mb-4">
                        {isSpanish ? "Music management B2B está roto." : "B2B music management is broken."}
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        {isSpanish
                            ? "El mercado opera con décadas de retraso. Ninguna plataforma ha resuelto la intersección de operaciones, legal y datos a escala."
                            : "The market operates decades behind. No platform has solved the intersection of operations, legal and data at scale."}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    {problems.map((p, i) => (
                        <ProblemCard key={i} {...p} />
                    ))}
                </div>

                <div className="mt-8 p-5 rounded-2xl border border-blue-500/30 bg-blue-500/5 text-center">
                    <p className="text-sm font-semibold text-blue-300">
                        {isSpanish
                            ? "WITH SOUNDLINK, YOUR MUSIC IS PROTECTED. AND YOUR BUSINESS, OPTIMIZED."
                            : "WITH SOUNDLINK, YOUR MUSIC IS PROTECTED. AND YOUR BUSINESS, OPTIMIZED."}
                    </p>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
          THE SOLUTION — SOUNDLINK + SOUNDBAND
      ═══════════════════════════════════════════════════════════════ */}
            <section className="py-28 border-y border-white/[0.06] bg-white/[0.015]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <SectionLabel>
                            <Layers className="w-3 h-3" />
                            {isSpanish ? "El Ecosistema" : "The Ecosystem"}
                        </SectionLabel>
                        <h2 className="text-4xl lg:text-5xl font-black mb-4">
                            {isSpanish ? "Infraestructura, no agencia." : "Infrastructure, not an agency."}
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            {isSpanish
                                ? "SoundLink Music es la empresa. SoundBand es su primer producto: el sistema operativo de la música en vivo B2B. Humanos expertos potenciados por IA para eliminar fricciones y garantizar resultados."
                                : "SoundLink Music is the company. SoundBand is its first product: the B2B live music operating system. Expert humans powered by AI to eliminate friction and guarantee results."}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* SoundBand Product Card */}
                        <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-600/10 to-purple-600/5 border border-blue-500/20">
                            {/* Logo placeholder */}
                            <div className="h-12 mb-6 flex items-center">
                                {/* <img src="/soundband-logo.png" alt="SoundBand" className="h-10 object-contain" /> */}
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                                        <Music className="w-4 h-4 text-blue-400" />
                                    </div>
                                    <span className="text-xl font-black">SoundBand</span>
                                    <span className="text-xs text-blue-400 border border-blue-400/30 px-2 py-0.5 rounded-full">Product 1</span>
                                </div>
                            </div>

                            <p className="text-slate-300 text-sm leading-relaxed mb-8">
                                {isSpanish
                                    ? "La plataforma de gestión musical B2B para hoteles, venues y marcas. Un solo contrato. Un solo proveedor. Un solo pago mensual. 100% compliance desde el día 1."
                                    : "The B2B music management platform for hotels, venues and brands. One contract. One provider. One monthly payment. 100% compliance from day 1."}
                            </p>

                            <div className="space-y-1">
                                {[
                                    { Icon: BookmarkIcon, title: isSpanish ? "Booking & Scheduling centralizado" : "Centralized Booking & Scheduling" },
                                    { Icon: IconCompliance, title: isSpanish ? "Contratos, seguros y compliance automático" : "Automatic contracts, insurance and compliance" },
                                    { Icon: BrainCircuit, title: isSpanish ? "IA de matching artista–marca–contexto" : "Artist–brand–context AI matching" },
                                    { Icon: BarChart3, title: isSpanish ? "Dashboard de ROI y métricas de impacto" : "ROI dashboard and impact metrics" },
                                    { Icon: FileText, title: isSpanish ? "Facturación única mensual para todo el volumen" : "Single monthly invoice for all volume" },
                                ].map(({ Icon, title }, i) => (
                                    <div key={i} className="flex items-center gap-3 py-2.5 border-b border-white/[0.06] last:border-0">
                                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                                        <span className="text-sm text-slate-300">{title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* SoundPass + Right side */}
                        <div className="space-y-6">
                            {/* SoundPass Card */}
                            <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10">
                                <div className="h-10 mb-4 flex items-center">
                                    {/* <img src="/soundpass-logo.png" alt="SoundPass" className="h-8 object-contain" /> */}
                                    <div className="flex items-center gap-2">
                                        <div className="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                                            <Zap className="w-3.5 h-3.5 text-purple-400" />
                                        </div>
                                        <span className="text-base font-bold">SoundPass</span>
                                        <span className="text-[9px] text-purple-400 border border-purple-400/30 px-1.5 py-0.5 rounded-full">Beta</span>
                                    </div>
                                </div>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    {isSpanish
                                        ? "Plataforma de engagement y beneficios corporativos para artistas, fans y marcas. En proceso de validación. Nueva vertical de revenue para 2027."
                                        : "Engagement and corporate benefits platform for artists, fans and brands. In validation process. New revenue vertical for 2027."}
                                </p>
                            </div>

                            {/* Methodology */}
                            <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10">
                                <h3 className="text-sm font-bold mb-4 uppercase tracking-wide">
                                    {isSpanish ? "El modelo híbrido: humano + IA" : "The hybrid model: human + AI"}
                                </h3>
                                <div className="space-y-3">
                                    {[
                                        { n: "01", t: isSpanish ? "Diagnóstico de ADN de marca" : "Brand DNA diagnosis" },
                                        { n: "02", t: isSpanish ? "Matching algorítmico de artistas" : "Algorithmic artist matching" },
                                        { n: "03", t: isSpanish ? "Ejecución + compliance automático" : "Execution + automatic compliance" },
                                        { n: "04", t: isSpanish ? "Reporting de ROI y mejora continua" : "ROI reporting and continuous improvement" },
                                    ].map(({ n, t: label }, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <span className="text-[10px] font-mono text-blue-500 w-6 shrink-0">{n}</span>
                                            <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                                            <span className="text-xs text-slate-300">{label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
          AI CAPABILITIES
      ═══════════════════════════════════════════════════════════════ */}
            <section className="py-28 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <SectionLabel>
                        <BrainCircuit className="w-3 h-3" />
                        {isSpanish ? "Ventaja Tecnológica" : "Technological Advantage"}
                    </SectionLabel>
                    <h2 className="text-4xl lg:text-5xl font-black mb-4">
                        {isSpanish ? "Nuestro foso: IA + experiencia operativa." : "Our moat: AI + operational expertise."}
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        {isSpanish
                            ? "No somos solo tecnología ni solo gestión cultural. La combinación de ambas capas es lo que ningún competidor puede replicar fácilmente."
                            : "We are not just technology or just cultural management. The combination of both layers is what no competitor can easily replicate."}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {aiCapabilities.map(({ Icon, title, desc }, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-blue-500/30 transition-all duration-300">
                            <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5">
                                <Icon className="w-5 h-5" />
                            </div>
                            <h4 className="font-bold text-base mb-2">{title}</h4>
                            <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
          GIGS PACKS
      ═══════════════════════════════════════════════════════════════ */}
            <section className="py-28 border-y border-white/[0.06] bg-white/[0.015]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <SectionLabel>
                            <Music className="w-3 h-3" />
                            {isSpanish ? "Modelo de Negocio" : "Business Model"}
                        </SectionLabel>
                        <h2 className="text-4xl lg:text-5xl font-black mb-4">
                            {isSpanish ? "Branded Gigs Packs" : "Branded Gigs Packs"}
                        </h2>
                        <p className="text-slate-400 max-w-xl mx-auto text-sm">
                            {isSpanish
                                ? "Tres niveles de programación musical mensual por venue, con todo incluido: conceptualización, booking, producción, seguros y facturación única."
                                : "Three levels of monthly music programming per venue, all included: conceptualization, booking, production, insurance and single invoice."}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-10">
                        {gigsData.map((pack, i) => (
                            <div
                                key={i}
                                className={`relative p-6 rounded-2xl border transition-all duration-300 ${pack.featured
                                        ? "bg-gradient-to-b from-blue-600/15 to-blue-600/5 border-blue-500/40"
                                        : "bg-white/[0.04] border-white/10 hover:border-white/20"
                                    }`}
                            >
                                {pack.featured && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-600 text-[9px] font-bold uppercase tracking-widest rounded-full">
                                        {isSpanish ? "Más solicitado" : "Most requested"}
                                    </div>
                                )}

                                {/* Visual indicator — sessions per day */}
                                <div className="flex gap-1.5 mb-5">
                                    {Array.from({ length: i + 1 }).map((_, j) => (
                                        <div key={j} className="flex-1 h-1.5 rounded-full bg-blue-500" />
                                    ))}
                                    {Array.from({ length: 2 - i }).map((_, j) => (
                                        <div key={j} className="flex-1 h-1.5 rounded-full bg-white/10" />
                                    ))}
                                </div>

                                <h3 className="text-xl font-black mb-1">{pack.label}</h3>
                                <p className="text-blue-400 text-xs font-semibold mb-1">{pack.sessionsPerDay}</p>
                                <p className="text-slate-500 text-xs mb-5">{pack.subtitle}</p>

                                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] mb-4">
                                    <div className="text-[10px] text-slate-500 uppercase mb-1">
                                        {isSpanish ? "Ejemplo de uso" : "Usage example"}
                                    </div>
                                    <p className="text-xs text-slate-300">{pack.example}</p>
                                </div>

                                <div className="pt-4 border-t border-white/[0.06]">
                                    <div className="text-[10px] text-slate-500 uppercase tracking-wide mb-2">
                                        {isSpanish ? "Estructura de precio" : "Price structure"}
                                    </div>
                                    <div className="text-sm font-bold text-white mb-1">{pack.price}</div>
                                    <div className="space-y-1 text-[10px] text-slate-500">
                                        <div>70% → Artista / Contrato</div>
                                        <div>10% → Booking, Billing, Compliance</div>
                                        <div className="text-blue-400 font-semibold">20% → Margen SoundLink</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.07] text-center">
                        <p className="text-xs text-slate-500">
                            {isSpanish
                                ? "1 sesión = Solista (1 artista) · Dúo (2) · Trío (3) · Banda (+4) · DJ Set (1-2 DJs) — descuentos especiales en planes de 3, 6 y 12 meses"
                                : "1 session = Soloist (1 artist) · Duo (2) · Trio (3) · Band (+4) · DJ Set (1-2 DJs) — special discounts on 3, 6 and 12-month plans"}
                        </p>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
          MARKET OPPORTUNITY
      ═══════════════════════════════════════════════════════════════ */}
            <section className="py-28 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <SectionLabel>
                        <Globe className="w-3 h-3" />
                        {isSpanish ? "Mercado" : "Market"}
                    </SectionLabel>
                    <h2 className="text-4xl lg:text-5xl font-black mb-4">
                        {isSpanish
                            ? "Dos mercados récord. Un puente único."
                            : "Two record markets. One unique bridge."}
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        {isSpanish
                            ? "SoundLink captura valor en la intersección de Live Music y Hospitality & Turismo — los dos sectores que más crecen en España."
                            : "SoundLink captures value at the intersection of Live Music and Hospitality & Tourism — the two fastest-growing sectors in Spain."}
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {marketData.map(({ val, label, icon: Icon }, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                            <Icon className="w-6 h-6 text-blue-400 mx-auto mb-4" />
                            <div className="text-3xl font-black text-white mb-2">{val}</div>
                            <div className="text-xs text-slate-400">{label}</div>
                        </div>
                    ))}
                </div>

                {/* Spain specifics */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
                    {[
                        { val: "€725M", sub: isSpanish ? "Live Music España 2024 — récord histórico" : "Spanish Live Music 2024 — all-time record" },
                        { val: "+96%", sub: isSpanish ? "Crecimiento Madrid (€185M)" : "Madrid growth (€185M)" },
                        { val: "€4.2B", sub: isSpanish ? "Inversión hotelera proyectada" : "Projected hotel investment" },
                        { val: "+8%", sub: isSpanish ? "Rentabilidad hotelera media" : "Average hotel profitability" },
                    ].map(({ val, sub }, i) => (
                        <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.07] text-center">
                            <div className="text-2xl font-black text-blue-400 mb-1">{val}</div>
                            <div className="text-[10px] text-slate-500">{sub}</div>
                        </div>
                    ))}
                </div>

                <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20">
                    <p className="text-center text-sm text-blue-300 font-medium">
                        {isSpanish
                            ? "SoundLink es el puente tecnológico que captura valor en la intersección de dos mercados récord: Live Music ($91B global) + Hospitality España (97M visitantes, 13.5% PIB)."
                            : "SoundLink is the technological bridge that captures value at the intersection of two record markets: Live Music ($91B global) + Spain Hospitality (97M visitors, 13.5% GDP)."}
                    </p>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
          PIPELINE 2026/2027
      ═══════════════════════════════════════════════════════════════ */}
            <section className="py-28 border-y border-white/[0.06] bg-white/[0.015]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <SectionLabel>
                            <Rocket className="w-3 h-3" />
                            {isSpanish ? "Roadmap & Pipeline" : "Roadmap & Pipeline"}
                        </SectionLabel>
                        <h2 className="text-4xl lg:text-5xl font-black">
                            SoundLink Pipeline 2026–2027
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
                        {pipeline.map(({ title, mrr, timeframe, desc }, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-blue-500/20 transition-all duration-300">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5">
                                    {i === 0 ? <Building2 className="w-5 h-5" /> : i === 1 ? <Target className="w-5 h-5" /> : i === 2 ? <Music className="w-5 h-5" /> : <Rocket className="w-5 h-5" />}
                                </div>
                                <h4 className="font-bold text-sm mb-1 uppercase tracking-wide">{title}</h4>
                                <div className="text-blue-400 text-xs font-semibold mb-0.5">{mrr}</div>
                                <div className="text-slate-600 text-[10px] mb-3">{timeframe}</div>
                                <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Revenue projections */}
                    <div className="rounded-2xl overflow-hidden border border-white/10">
                        <div className="p-4 bg-white/[0.04] border-b border-white/[0.06]">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">
                                {isSpanish ? "Proyección de Revenue — 5 años" : "Revenue Projection — 5 years"}
                            </h3>
                        </div>
                        <div className="divide-y divide-white/[0.06]">
                            {revenueProjections.map(({ timeframe, mrr, mix, focus, featured }, i) => (
                                <div
                                    key={i}
                                    className={`grid grid-cols-3 gap-4 p-5 items-center ${featured ? "bg-blue-600/5" : ""}`}
                                >
                                    <div>
                                        <div className="text-[10px] text-slate-500 uppercase tracking-wide mb-1">
                                            {isSpanish ? "Plazo" : "Timeframe"}
                                        </div>
                                        <div className="text-sm font-semibold">{timeframe}</div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-slate-500 uppercase tracking-wide mb-1">MRR / ARR</div>
                                        <div className={`text-lg font-black ${featured ? "text-blue-400" : "text-white"}`}>{mrr}</div>
                                        <div className="text-[10px] text-slate-500">{mix}</div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-slate-500 uppercase tracking-wide mb-1">Focus</div>
                                        <div className="text-xs text-slate-300">{focus}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
          TEAM
      ═══════════════════════════════════════════════════════════════ */}
            <section className="py-28 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <SectionLabel>
                        <Users className="w-3 h-3" />
                        {isSpanish ? "El Equipo" : "The Team"}
                    </SectionLabel>
                    <h2 className="text-4xl lg:text-5xl font-black mb-4">
                        {isSpanish ? "Expertos que ya ejecutaron." : "Experts who already executed."}
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        {isSpanish
                            ? "No es un equipo de primera empresa. Detrás de SoundLink hay años de operaciones reales, red consolidada y expertise multidisciplinar."
                            : "This is not a first-time team. Behind SoundLink are years of real operations, consolidated network and multidisciplinary expertise."}
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {team.map((member, i) => (
                        <TeamMember key={i} {...member} />
                    ))}
                </div>

                <p className="text-center text-xs text-slate-600 mt-6">
                    {isSpanish
                        ? "* Para agregar la foto de cada miembro: reemplaza el comentario en TeamMember con <img src=\"/team/nombre.jpg\" />"
                        : "* To add each member's photo: replace the comment in TeamMember with <img src=\"/team/name.jpg\" />"}
                </p>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
          INVESTMENT TERMS & USE OF FUNDS
      ═══════════════════════════════════════════════════════════════ */}
            <section className="py-28 border-y border-white/[0.06] bg-white/[0.015]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <SectionLabel>
                            <TrendingUp className="w-3 h-3" />
                            {isSpanish ? "La Inversión" : "The Investment"}
                        </SectionLabel>
                        <h2 className="text-4xl lg:text-5xl font-black">
                            {isSpanish ? "200K€ con apalancamiento institucional." : "€200K with institutional leverage."}
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto mt-4 text-sm">
                            {isSpanish
                                ? "Parte de esta inversión será apalancada a través de créditos Sodecan, ENISA, ZEC/RIC y deducciones fiscales aplicables en Canarias, multiplicando el impacto real de cada euro invertido."
                                : "Part of this investment will be leveraged through Sodecan, ENISA, ZEC/RIC credits and applicable tax deductions in the Canary Islands, multiplying the real impact of each euro invested."}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Terms */}
                        <div className="p-8 rounded-2xl bg-gradient-to-b from-blue-600/10 to-transparent border border-blue-500/20">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">
                                {isSpanish ? "Condiciones de la ronda" : "Round terms"}
                            </h3>
                            <div className="space-y-4">
                                {[
                                    { label: isSpanish ? "Inversión buscada" : "Seeking", val: "200.000€", highlight: true },
                                    { label: isSpanish ? "Tipo de inversor" : "Investor type", val: "Business Angel" },
                                    { label: isSpanish ? "Instrumento" : "Instrument", val: "SAFE o Equity" },
                                    { label: isSpanish ? "Equity ofrecido" : "Equity offered", val: "10%" },
                                    { label: isSpanish ? "Valuación post-money" : "Post-money valuation", val: "€2.000.000" },
                                    { label: isSpanish ? "Exit proyectado (5 años)" : "Projected exit (5 years)", val: "hasta 9X" },
                                    { label: isSpanish ? "Apalancamiento disponible" : "Available leverage", val: "ENISA + Sodecan + ZEC" },
                                ].map(({ label, val, highlight }, i) => (
                                    <div key={i} className="flex justify-between items-center py-3 border-b border-white/[0.06] last:border-0">
                                        <span className="text-sm text-slate-400">{label}</span>
                                        <span className={`font-bold text-sm ${highlight ? "text-blue-400 text-lg" : "text-white"}`}>{val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Use of funds */}
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">
                                {isSpanish ? "Uso de fondos" : "Use of funds"}
                            </h3>
                            <div className="space-y-4">
                                {usageOfFunds.map(({ pct, label, desc }, i) => (
                                    <div key={i} className="p-5 rounded-xl bg-white/[0.04] border border-white/10">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="font-bold text-sm">{label}</span>
                                            <span className="text-2xl font-black text-blue-400">{pct}%</span>
                                        </div>
                                        {/* Progress bar */}
                                        <div className="h-1.5 bg-white/10 rounded-full mb-3 overflow-hidden">
                                            <div
                                                className="h-full bg-blue-500 rounded-full"
                                                style={{ width: `${pct}%` }}
                                            />
                                        </div>
                                        <p className="text-xs text-slate-500">{desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 p-4 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                                <p className="text-xs text-slate-500 leading-relaxed">
                                    {isSpanish
                                        ? "El resto del presupuesto operativo se generará mediante apalancamiento financiero: créditos blandos ENISA, Sodecan ZEC/RIC, deducciones I+D+i y apoyo de instituciones canarias."
                                        : "The rest of the operating budget will be generated through financial leverage: ENISA soft loans, Sodecan ZEC/RIC credits, R&D tax deductions and Canarian institutional support."}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════════════ */}
            <section className="py-28 max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-5xl lg:text-6xl font-black mb-6">
                    {isSpanish ? "Únete a la Banda." : "Join the Band."}
                </h2>
                <p className="text-slate-400 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
                    {isSpanish
                        ? "Estamos construyendo el estándar de la música B2B en España y Latam. Si crees en el poder de la música como herramienta de negocio, hablemos."
                        : "We are building the B2B music standard in Spain and Latam. If you believe in the power of music as a business tool, let's talk."}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                    <Link
                        href="mailto:nicolas@soundlink.band"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all shadow-xl text-sm"
                    >
                        <Mail className="w-4 h-4" />
                        nicolas@soundlink.band
                    </Link>
                    <Link
                        href="https://calendar.app.google/mpwxXhzTB7xB5Tfx9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white rounded-full font-semibold hover:border-blue-400 hover:text-blue-400 transition-all text-sm"
                    >
                        <Calendar className="w-4 h-4" />
                        {isSpanish ? "Agenda una reunión" : "Schedule a meeting"}
                    </Link>
                </div>

                <div className="flex items-center justify-center gap-6 text-xs text-slate-600">
                    <span>Nicolás A. Civatti · Founder & CEO</span>
                    <span>·</span>
                    <span>SoundLink Music S.L.</span>
                    <span>·</span>
                    <span>Islas Canarias, España</span>
                </div>
            </section>

            {/* Footer */}
            <div className="border-t border-white/[0.06] py-6 px-6">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-slate-700">
                    <span>© 2026 SoundLink Music S.L. · Todos los derechos reservados</span>
                    <span>{isSpanish ? "Presentación privada · No distribuir" : "Private presentation · Do not distribute"}</span>
                    <span>
                        {isSpanish ? "Powered by " : "Powered by "}
                        <Link href="https://www.doyo.pro/?lang=es" target="_blank" className="text-slate-600 hover:text-slate-400">
                            DOYO.PRO
                        </Link>
                    </span>
                </div>
            </div>
        </main>
    );
}

// Helper — placeholder icon used inline (to avoid passing string icon names)
function BookmarkIcon({ className }: { className: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
        </svg>
    );
}

function Building2({ className }: { className: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18z" /><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" /><path d="M10 6h4M10 10h4M10 14h4M10 18h4" />
        </svg>
    );
}