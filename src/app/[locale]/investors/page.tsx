"use client";

import React from "react";
import {
    TrendingUp,
    ShieldCheck,
    BrainCircuit,
    BarChart3,
    ArrowRight,
    Target,
    Zap,
    Building2,
    Globe2,
    Users,
    Briefcase,
    DollarSign,
    Rocket,
    CheckCircle2,
} from "lucide-react";
import Link from "next/link";

// Diccionario de textos (ES/EN) - sin useLocale, con soporte para ambos idiomas
const dictES = {
    hero: {
        badge: "Investor Relations 2026",
        title: "Escalando la infraestructura del Music-Tech B2B.",
        desc: "Buscamos una inversión de 100.000€ para consolidar nuestra IA y expandir SoundBand en el mercado Hospitality global.",
    },
    moat: {
        badge: "Nuestro Foso Defensivo",
        title: "IA & Sustitución Algorítmica",
    },
    metrics: [
        { val: "+8.000", label: "Gigs Gestionados", sub: "Tracción real en Hospitality" },
        { val: "20%", label: "Net Margin", sub: "Eficiencia operativa escalable" },
        { val: "0%", label: "Legal Risk", sub: "Compliance total automatizado" },
        { val: "9X", label: "Projected Exit", sub: "Horizonte de 5 años" },
    ],
    roadmap: [
        {
            phase: "2026 Q1-Q2",
            title: "Consolidación España",
            desc: "Captura del mercado Hospitality (97M turistas).",
        },
        {
            phase: "2026 Q3-Q4",
            title: "Escalabilidad Latam",
            desc: "Expansión agresiva hacia hubs turísticos clave.",
        },
        {
            phase: "2027",
            title: "Integración PMS/ERP",
            desc: "APIs directas para grandes cadenas hoteleras.",
        },
    ],
    market: {
        title: "Oportunidad de Mercado",
        subtitle: "Convergencia de Records en Live Music & Turismo",
    },
    team: {
        title: "Equipo de Ejecución",
    },
    investment: {
        title: "Propuesta de Inversión",
        terms: [
            { label: "Valuación Post-Money", val: "€1.000.000" },
            { label: "Investment Ask", val: "€100.000" },
            { label: "Equity Offered", val: "10%" },
            { label: "Instrument", val: "SAFE o Equity" },
            { label: "Exit Proyectado (5y)", val: "hasta 9X" },
        ],
        usage: [
            "Ventas + MKT + Distribución B2B",
            "Consolidar equipo de ventas B2B",
            "Desarrollo continuo de plataformas Band/Pass",
            "Equipo de producción, contenidos y gestión de artistas",
            "Expandir marca y redes/colaboraciones",
        ],
    },
    cta: {
        title: "¿Listo para transformar la industria musical?",
        button: "Contactar a Nicolás",
    },
};

const dictEN = {
    hero: {
        badge: "Investor Relations 2026",
        title: "Scaling the Music-Tech B2B Infrastructure.",
        desc: "We're raising €100K to consolidate our AI and expand SoundBand globally in the Hospitality market.",
    },
    moat: {
        badge: "Our Competitive Moat",
        title: "AI & Algorithmic Substitution",
    },
    metrics: [
        { val: "+8.000", label: "Gigs Managed", sub: "Real traction in Hospitality" },
        { val: "20%", label: "Net Margin", sub: "Scalable operational efficiency" },
        { val: "0%", label: "Legal Risk", sub: "Total compliance automation" },
        { val: "9X", label: "Projected Exit", sub: "5-year horizon" },
    ],
    roadmap: [
        {
            phase: "2026 Q1-Q2",
            title: "Spain Consolidation",
            desc: "Capture Hospitality market (97M tourists).",
        },
        {
            phase: "2026 Q3-Q4",
            title: "LATAM Scalability",
            desc: "Aggressive expansion to key tourism hubs.",
        },
        {
            phase: "2027",
            title: "PMS/ERP Integration",
            desc: "Direct APIs for major hotel chains.",
        },
    ],
    market: {
        title: "Market Opportunity",
        subtitle: "Convergence of Records in Live Music & Tourism",
    },
    team: {
        title: "Execution Team",
    },
    investment: {
        title: "Investment Proposal",
        terms: [
            { label: "Post-Money Valuation", val: "€1.000.000" },
            { label: "Investment Ask", val: "€100.000" },
            { label: "Equity Offered", val: "10%" },
            { label: "Instrument", val: "SAFE or Equity" },
            { label: "Projected Exit (5y)", val: "up to 9X" },
        ],
        usage: [
            "B2B Sales + MKT + Distribution",
            "Consolidate B2B sales team",
            "Continuous development of Band/Pass platforms",
            "Production team, content creation, artist management",
            "Expand brand and networks/collaborations",
        ],
    },
    cta: {
        title: "Ready to transform the music industry?",
        button: "Contact Nicolás",
    },
};

// Card Componente
function StatCard({ val, label, sub }: { val: string; label: string; sub: string }) {
    return (
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all">
            <div className="text-3xl font-black text-white mb-2">{val}</div>
            <div className="text-xs font-bold text-blue-400 mb-1 uppercase tracking-wider">{label}</div>
            <div className="text-xs text-slate-400">{sub}</div>
        </div>
    );
}

function MoatCard({
    Icon,
    title,
    desc,
}: {
    Icon: React.ComponentType<{ className: string }>;
    title: string;
    desc: string;
}) {
    return (
        <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                <Icon className="w-6 h-6 text-blue-500" />
            </div>
            <div>
                <h4 className="font-bold text-lg mb-1">{title}</h4>
                <p className="text-slate-400 text-sm">{desc}</p>
            </div>
        </div>
    );
}

export default function InvestorDeckPage() {
    // Detectar idioma desde la ruta URL o usar español por defecto
    const isSpanish = typeof window !== "undefined" && window.location.pathname.includes("/es");
    const t = isSpanish ? dictES : dictEN;

    const moatItems = [
        {
            title: isSpanish ? "Booking Intelligence" : "Booking Intelligence",
            desc: isSpanish
                ? "Análisis de ADN de marca y perfil de cliente para selecciones musicales con ROI garantizado."
                : "Brand DNA analysis and customer profiling for music selection with guaranteed ROI.",
            icon: BrainCircuit,
        },
        {
            title: isSpanish ? "Sustitución Automática" : "Automatic Substitution",
            desc: isSpanish
                ? "Motor agentic que reasigna talento en tiempo real ante cancelaciones, eliminando riesgo operativo."
                : "Agentic engine that reassigns talent in real-time during cancellations, eliminating operational risk.",
            icon: Zap,
        },
    ];

    const teamMembers = [
        {
            name: "Nicolás Civatti",
            role: isSpanish ? "Founder & CEO" : "Founder & CEO",
            bio: isSpanish
                ? "Experto en producción musical e innovación digital con visión 360° del sector."
                : "Expert in music production and digital innovation with 360° sector vision.",
        },
        {
            name: "Lucas Minetti",
            role: isSpanish ? "Head of Product" : "Head of Product",
            bio: isSpanish
                ? "Diseñador gráfico con 10+ años en UX/UI y especialización en experiencias digitales."
                : "Graphic designer with 10+ years in UX/UI and digital experience specialization.",
        },
        {
            name: "Nik Levenberg",
            role: isSpanish ? "Strategic Partner (US)" : "Strategic Partner (US)",
            bio: isSpanish
                ? "25 años de experiencia en tecnología, startups y desarrollo de capital de riesgo."
                : "25 years of experience in technology, startups and venture capital development.",
        },
        {
            name: "Juan Parodi",
            role: isSpanish ? "Strategic Partner" : "Strategic Partner",
            bio: isSpanish
                ? "Asesor en estructura financiera y go-to-market con visión de expansión."
                : "Advisor in financial structure and go-to-market with expansion vision.",
        },
    ];

    const marketData = [
        {
            icon: "🎵",
            title: isSpanish ? "Live Music Global" : "Global Live Music",
            val1: "$38.2B",
            sub1: isSpanish ? "Mercado 2025" : "Market 2025",
            val2: "$91.4B",
            sub2: isSpanish ? "Music Tourism 2024" : "Music Tourism 2024",
        },
        {
            icon: "🏨",
            title: isSpanish ? "Hospitality España" : "Spain Hospitality",
            val1: "97M",
            sub1: isSpanish ? "Turistas 2025" : "Tourists 2025",
            val2: "€4.2B",
            sub2: isSpanish ? "Inversión Hotelera" : "Hotel Investment",
        },
    ];

    return (
        <div className="min-h-screen bg-[#000000] text-white selection:bg-blue-500/30 overflow-x-hidden">
            {/* ── HERO SECTION ────────────────────────────────────────── */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-medium uppercase tracking-widest mb-8">
                        <Target className="w-3 h-3" /> {t.hero.badge}
                    </div>

                    <h1 className="text-5xl md:text-7xl mb-8 leading-[0.95] font-black">
                        {t.hero.title}
                    </h1>

                    <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                        {t.hero.desc}
                    </p>

                    <div className="inline-flex flex-col items-center p-6 rounded-3xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 backdrop-blur-md">
                        <span className="text-[11px] uppercase tracking-[0.3em] text-slate-500 mb-2 font-bold">
                            {isSpanish ? "Oportunidad de Inversión" : "Investment Opportunity"}
                        </span>
                        <div className="text-3xl font-black text-white">
                            100.000€ <span className="text-blue-500">/ 10% Equity</span>
                        </div>
                        <div className="text-xs text-slate-500 mt-2 font-mono">
                            Valuation: 1.000.000€ Post-money
                        </div>
                    </div>
                </div>
            </section>

            {/* ── METRICS GRID ─────────────────────────────────────────── */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {t.metrics.map((m, i) => (
                        <StatCard key={i} val={m.val} label={m.label} sub={m.sub} />
                    ))}
                </div>
            </section>

            {/* ── THE MOAT ─────────────────────────────────────────── */}
            <section className="py-32 bg-[#050505] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="text-blue-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                                {t.moat.badge}
                            </div>
                            <h2 className="text-4xl md:text-5xl mb-8 font-black">{t.moat.title}</h2>

                            <div className="space-y-8">
                                {moatItems.map((item, i) => (
                                    <MoatCard key={i} Icon={item.icon} title={item.title} desc={item.desc} />
                                ))}
                            </div>
                        </div>

                        {/* IA Visualization */}
                        <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20" />
                            <div className="relative flex flex-col items-center">
                                <div className="w-48 h-48 rounded-full border-2 border-blue-500/30 animate-pulse flex items-center justify-center">
                                    <div className="w-32 h-32 rounded-full border-2 border-purple-500/30 flex items-center justify-center">
                                        <BrainCircuit className="w-12 h-12 text-white" />
                                    </div>
                                </div>
                                <div className="mt-8 text-center">
                                    <div className="text-[10px] text-slate-500 uppercase tracking-widest">
                                        {isSpanish ? "Procesando DNA de Mercado" : "Processing Market DNA"}
                                    </div>
                                    <div className="h-1 w-32 bg-white/5 rounded-full mt-2 overflow-hidden">
                                        <div className="h-full bg-blue-500 w-2/3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── MARKET OPPORTUNITY ────────────────────────────────────── */}
            <section className="py-32 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">{t.market.title}</h2>
                    <p className="text-slate-400">{t.market.subtitle}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {marketData.map((m, i) => (
                        <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10">
                            <div className="text-4xl mb-4">{m.icon}</div>
                            <h4 className="font-bold text-xl mb-6">{m.title}</h4>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <div className="text-2xl font-black text-blue-400">{m.val1}</div>
                                    <div className="text-xs text-slate-400">{m.sub1}</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-black text-blue-400">{m.val2}</div>
                                    <div className="text-xs text-slate-400">{m.sub2}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── ROADMAP ──────────────────────────────────────────── */}
            <section className="py-32 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">
                        {isSpanish ? "Roadmap de Crecimiento" : "Growth Roadmap"}
                    </h2>
                    <p className="text-slate-400">
                        {isSpanish
                            ? "De consolidación local a estándar global."
                            : "From local consolidation to global standard."}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {t.roadmap.map((item, i) => (
                        <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10">
                            <div className="text-blue-500 text-xs mb-4 font-bold">{item.phase}</div>
                            <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                            <p className="text-sm text-slate-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── TEAM ────────────────────────────────────────────── */}
            <section className="py-32 bg-[#050505] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">{t.team.title}</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 mb-4 flex items-center justify-center">
                                    <Users className="w-6 h-6 text-blue-400" />
                                </div>
                                <h4 className="font-bold text-lg mb-1">{member.name}</h4>
                                <p className="text-blue-400 text-xs font-bold uppercase mb-3">{member.role}</p>
                                <p className="text-sm text-slate-400">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── INVESTMENT TERMS ────────────────────────────────────── */}
            <section className="py-32 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl font-bold mb-8">{t.investment.title}</h2>

                        <div className="space-y-4 mb-12">
                            {t.investment.terms.map((term, i) => (
                                <div key={i} className="flex justify-between items-center pb-4 border-b border-white/10">
                                    <span className="text-slate-400">{term.label}</span>
                                    <span className="font-bold text-lg text-blue-400">{term.val}</span>
                                </div>
                            ))}
                        </div>

                        <h4 className="font-bold text-lg mb-4">
                            {isSpanish ? "Uso de Fondos" : "Use of Funds"}
                        </h4>
                        <ul className="space-y-3">
                            {t.investment.usage.map((u, i) => (
                                <li key={i} className="flex gap-3 text-sm">
                                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                                    <span className="text-slate-300">{u}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative">
                        <div className="sticky top-20 p-8 rounded-3xl bg-gradient-to-b from-blue-600/20 to-purple-600/10 border border-white/10">
                            <Rocket className="w-12 h-12 text-blue-400 mb-4" />
                            <h3 className="text-2xl font-bold mb-4">
                                {isSpanish ? "Oportunidad de Inversión" : "Investment Opportunity"}
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="text-sm text-slate-400">
                                        {isSpanish ? "Valuación Post-Money" : "Post-Money Valuation"}
                                    </div>
                                    <div className="text-3xl font-black text-blue-400">€1.000.000</div>
                                </div>
                                <div>
                                    <div className="text-sm text-slate-400">Equity</div>
                                    <div className="text-3xl font-black text-white">10%</div>
                                </div>
                                <div>
                                    <div className="text-sm text-slate-400">
                                        {isSpanish ? "Inversión Inicial" : "Initial Investment"}
                                    </div>
                                    <div className="text-3xl font-black text-white">€100.000</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FOOTER CTA ──────────────────────────────────────────── */}
            <section className="py-20 px-6 text-center bg-gradient-to-t from-blue-600/20 to-transparent">
                <h2 className="text-3xl font-bold mb-8">{t.cta.title}</h2>
                <div className="flex gap-4 justify-center flex-col sm:flex-row">
                    <Link
                        href="mailto:nicolas@soundlink.band"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all shadow-xl"
                    >
                        {t.cta.button} <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            {/* Watermark */}
            <div className="fixed bottom-4 right-4 text-[10px] text-slate-600 pointer-events-none opacity-50">
                {isSpanish ? "Presentación privada" : "Private Presentation"}
            </div>
        </div>
    );
}