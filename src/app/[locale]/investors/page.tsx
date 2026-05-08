"use client";

import React, { useState } from "react";
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
    AlertTriangle,
    Music,
    LayoutDashboard,
    FileText,
    Shield,
    PieChart,
} from "lucide-react";
import Link from "next/link";

// Full Dictionary with ALL deck content - Type Definitions
interface DictType {
    hero: any;
    problem: any;
    opportunity: any;
    solutions: any;
    soundband: any;
    soundbandTools: any;
    howWorks: any;
    pricingPacks: any;
    solutionOverview: any;
    metrics: any;
    marketSizing: any;
    roadmap: any;
    team: any;
    investment: any;
    cta: any;
}

const dictES: DictType = {
    // SECTION 1: HERO
    hero: {
        title: "La Evolución de la Gestión Musical B2B",
        subtitle: "Propuesta de Inversión",
        email: "nicolas@soundlink.band",
        role: "CEO & Founder",
    },

    // SECTION 2: PROBLEM
    problem: {
        title: "El Problema Crítico en Music Management para Empresas & Marcas",
        issues: [
            {
                icon: "🌐",
                title: "EL 'LONG TAIL' Y EL DESCONTROL EN B2B",
                desc: "Fragmentación extrema en miles de pequeños establecimientos (hoteles, bares, tiendas) sin gestión centralizada. Caos operativo y falta de visibilidad.",
                image: "long-tail",
            },
            {
                icon: "⚠️",
                title: "PROBLEMAS CRÍTICOS EN ON-PREMISE Y TURISMO",
                desc: "Experiencias inconsistentes, problemas de licencias y riesgo legal en puntos de venta físicos. Impacto directo en la satisfacción del cliente y la reputación.",
                image: "hotel",
            },
            {
                icon: "⚙️",
                title: "INEFICIENCIA OPERATIVA Y COSTOS OCULTOS",
                desc: "Procesos manuales lentos, duplicación de esfuerzos y falta de datos para la toma de decisiones. Elevados costes de gestión y pérdida de oportunidades.",
                image: "error",
            },
            {
                icon: "⚖️",
                title: "RIESGO DE CUMPLIMIENTO Y SANCIONES",
                desc: "Exposición a demandas millonarias por infracciones de copyright (e.g., caso Sony v. Marriott). Daño financiero y reputacional grave.",
                image: "legal",
            },
        ],
        conclusion: "WITH SOUNDLINK, YOUR MUSIC IS PROTECTED.",
    },

    // SECTION 3: OPPORTUNITY
    opportunity: {
        title: "La Oportunidad: Convergencia de Récords en Live Music & Turismo",
        markets: [
            {
                category: "INDUSTRIA LIVE MUSIC (El Boom de la Experiencia)",
                global: [
                    { val: "$38.2B", label: "Mercado 2025" },
                    { val: "$91.4B", label: "Music Tourism 2024" },
                ],
                spain: [
                    { val: "€725M", label: "Récord 2024" },
                    { val: "+96% / €185M", label: "Madrid" },
                ],
            },
            {
                category: "HOSPITALITY & TURISMO (La Recuperación Total)",
                global: [{ val: "1.52B", label: "Turistas 2025" }],
                spain: [
                    { val: "97M", label: "Visitantes 2025" },
                    { val: "13.5%", label: "PIB 2025" },
                    { val: "€4.2B", label: "Inversión Hotelera" },
                    { val: "+8%", label: "Rentabilidad Hotelera" },
                ],
            },
        ],
        conclusion:
            "SoundLink es el puente tecnológico y operativo que captura valor en la intersección de dos mercados récord: Turismo (España 97M visitantes, 13.5% PIB) y Live Music ($91B Global Turismo Musical).",
    },

    // SECTION 4: SOLUTIONS
    solutions: {
        title: "SOLUCIONES B2B INTEGRALES CON SOUNDLINK MUSIC (BAND & PASS)",
        pillars: [
            {
                icon: "⚙️",
                title: "EQUIPO + TECNOLOGÍA AVANZADA (IA)",
                desc: "Especialización y automatización inteligente.",
            },
            {
                icon: "🌉",
                title: "CONEXIÓN EFICIENTE",
                desc: "Sincronización perfecta entre oferta y demanda.",
            },
            {
                icon: "📈",
                title: "IMPACTO ESTRATÉGICO Y LEGAL",
                desc: "Transparencia, cumplimiento y crecimiento.",
            },
        ],
        tagline:
            "TRANSFORMAMOS LA GESTIÓN MUSICAL EN UNA HERRAMIENTA CLAVE DE CRECIMIENTO EMPRESARIAL.",
    },

    // SECTION 5: SOUNDBAND PRODUCT
    soundband: {
        title: "SoundBand",
        subtitle: "Your B2B Music Managing Partner",
        mainDesc:
            "Toda tu música, conciertos, sessions, gigs, music events, y contrataciones de artistas en un mismo lugar, con la mejor calidad, y 100% compliance internacional.",
        platformDesc:
            "La plataforma de gestión de música B2B para hoteles, venues, y marcas.",
        tools: [
            {
                icon: "📊",
                title: "Análisis de datos & IA",
                desc: "Segmentación y matching musical según perfil del cliente y tendencias.",
            },
            {
                icon: "📅",
                title: "Curaduría y Conceptualización",
                desc: "Calendario, contratos, pagos, reportes, chat y documentación en 1 sola plataforma.",
            },
            {
                icon: "📋",
                title: "Gestión integral y contratación",
                desc: "Programación alineada con la identidad de marca, objetivos comerciales y presupuestos.",
            },
            {
                icon: "📊",
                title: "Dashboard centralizado",
                desc: "Cumplimos el 100% de los requisitos legales, administrativos y operativos.",
            },
            {
                icon: "💰",
                title: "Super Admins & facturación única",
                desc: "Control total y un solo pago mensual para toda la contratación musical.",
            },
        ],
    },

    // SECTION 6: SOUNDBAND TOOLS
    soundbandTools: {
        title: "HERRAMIENTAS",
        subtitle: "Cumplimos el 100% de los requisitos legales, administrativos y operativos.",
        features: [
            {
                icon: "📊",
                title: "Análisis de datos & IA",
                details: [
                    "Segmentación y matching musical según perfil del cliente y tendencias.",
                ],
            },
            {
                icon: "📅",
                title: "Curaduría y Conceptualización",
                details: [
                    "Calendario, contratos, pagos, reportes, chat y documentación en 1 sola plataforma.",
                ],
            },
            {
                icon: "📋",
                title: "Gestión integral y contratación",
                details: [
                    "Programación alineada con la identidad de marca, objetivos comerciales y presupuestos.",
                ],
            },
            {
                icon: "🎵",
                title: "Dashboard centralizado",
                details: [
                    "Cumplimos el 100% de los requisitos legales, administrativos y operativos.",
                ],
            },
            {
                icon: "🛡️",
                title: "Super Admins & facturación única",
                details: [
                    "Control total y un solo pago mensual para toda la contratación musical.",
                ],
            },
        ],
    },

    // SECTION 7: HOW SOUNDBAND WORKS
    howWorks: {
        title: "¿Cómo trabaja SoundBand?",
        steps: [
            {
                num: "1",
                title: "Analizamos tus datos y objetivos",
                desc: "para determinar los segmentos y géneros musicales a trabajar, artistas para booking, y venues.",
            },
            {
                num: "2",
                title: "Realizamos todas las gestiones",
                desc: "grillas de calendarización, contratos, ejecución, y seguimiento de las acciones a ejecutar en cada punto 100%",
            },
            {
                num: "3",
                title: "Reportamos todas las gestiones",
                desc: "calendarios, facturas, contratos, seguros, y reporting en nuestra plataforma para control, soporte, y mejoras.",
            },
        ],
    },

    // SECTION 8: PRICING PACKS
    pricingPacks: {
        title: "Diferentes branded gigspacks",
        subtitle: "All packs include: Conceptualization, branded social content, artist booking, production, insurance & invoicing. Special discounts on continuous production plans (3, 6, 12 months)",
        packs: [
            {
                name: "Gigs 1",
                sessions: "1 Session x day",
                period: "Month/venue",
                price: "1 Gig = min 190 € x artist",
                breakdown: [
                    "70% artist/contract",
                    "10% booking, billing, compliance",
                    "20% profit",
                ],
                note: "1 Session = Soloist (1 artist), Duets (2 artists), Trios (3 artists), Bands (+4 artists), Djs sets (1 or 2 Djs).",
            },
            {
                name: "Gigs 2",
                sessions: "2 Sessions x day",
                period: "Month/venue",
                price: "1 Gig = min 190 € x artist",
                breakdown: [
                    "70% artist/contract",
                    "10% booking, billing, compliance",
                    "20% profit",
                ],
            },
            {
                name: "Gigs 3",
                sessions: "3 Sessions x day",
                period: "Month/venue",
                price: "1 Gig = min 190 € x artist",
                breakdown: [
                    "70% artist/contract",
                    "10% booking, billing, compliance",
                    "20% profit",
                ],
            },
        ],
    },

    // SECTION 9: SOLUTION OVERVIEW
    solutionOverview: {
        title: "Nuestra Solución",
        subtitle: "B2B Music Management 360",
        benefits: [
            {
                icon: "📅",
                title: "Todas tus sessions, conciertos, música en vivo programada y ejecutada con lo mejor a tu alcance",
                details:
                    "Programación musical para hoteles y venues con la mejor calidad a tu alcance.",
            },
            {
                icon: "📈",
                title: "Mejora el rendimiento de tus presupuestos y recursos con un análisis profesional de lo que necesitas",
                details:
                    "Análisis profesional de presupuestos con ROI garantizado.",
            },
            {
                icon: "🏨",
                title: "En cada outlet o venue de tu hotel tu música estará controlada y alineada con sus objetivos",
                details:
                    "Control centralizado de experiencias musicales alineadas con objetivos comerciales.",
            },
            {
                icon: "🎙️",
                title: "Llevando los mejores artistas musicales a tus espacios y marcas",
                details: "Acceso a red de artistas vetados y curados por nuestro equipo.",
            },
            {
                icon: "🎵",
                title: "Contenido exclusivo de tu music branding generando valor directo en marketing",
                details: "Branded content y social media exclusivos para tu marca.",
            },
            {
                icon: "✅",
                title: "contrataciones validadas en el sector y curadas por tus datos y nuestro network",
                details: "Compliance 100% + contratos validados en sector.",
            },
            {
                icon: "📊",
                title: "Reportes de control y medición de las gestiones mensuales y todo lo que necesitas para tus operaciones.",
                details: "Reporting mensuales detallados para control operativo.",
            },
        ],
    },

    // SECTION 10: METRICS
    metrics: {
        title: "MÉTRICAS CLAVE DE IMPACTO",
        data: [
            {
                icon: "💰",
                val: "+850.000 €",
                label: "Pagados a artistas y productores independientes de forma legal",
            },
            {
                icon: "📋",
                val: "+8000",
                label: "Contrataciones legales end-to-end para marcas en España",
            },
            {
                icon: "📈",
                val: "+20%",
                label: "Average Net Profit",
            },
            {
                icon: "📅",
                val: "+2yrs",
                label: "Partners Retention",
            },
            {
                icon: "🤖",
                val: "100%",
                label: "Curaduría Humana & Optimización AI/TECH",
            },
            {
                icon: "⚖️",
                val: "0%",
                label: "Contingencias y problemas legales para partners",
            },
        ],
    },

    // SECTION 11: MARKET SIZING
    marketSizing: {
        title: "Mercado / caso: Hospitality & Hotels companies",
        scenarios: [
            {
                type: "4 stars Hotel/Resort/Venue",
                contract: "min +6 months contract",
                sessions: "min 21 Sessions x Month",
                artists: "31 artists gigs",
                monthly: "€ 5890 min x month",
                profit: "€ 1178 profit x month",
            },
            {
                type: "+5 stars Hotel/Resort/Venue",
                contract: "min +6 months contract",
                sessions: "min 30 Sessions x Month",
                artists: "62 artists gigs",
                monthly: "€ 12000 min x month",
                profit: "€ 2400 profit x month",
            },
            {
                type: "Hotel & Venues Companies B2B contracts opportunity",
                contract: "min +6 hotels & venues",
                sessions: "max +1000 hotels & venues",
                artists: "max +1000 hotels & venues",
                monthly: "min € 5890 x month",
                profit: "max € 50.000 x month",
                yearContract: "Min € 190.000 / 6 months contract",
                maxContract: "Max € 100.000.000 year contract",
            },
        ],
        revenueProjection: {
            title: "REVENUE proyectado >>>>> 5 años",
            projections: [
                {
                    timeframe: "6/12 meses",
                    mrr: "50K/150K MRR",
                    mix: "75% España + 25% Latam",
                },
                {
                    timeframe: "12/24 meses",
                    mrr: "150K/350K MRR",
                    mix: "60 % España + 40% Latam",
                },
                {
                    timeframe: "36/60 meses",
                    mrr: "+10M ARR",
                    mix: "50% España+EU + 25% Latam + 25% US",
                },
            ],
        },
    },

    // SECTION 12: ROADMAP
    roadmap: {
        title: "SoundLink Pipeline 2026/2027",
        segments: [
            {
                icon: "🏨",
                title: "hotels & hospitality",
                desc: "50/100K€ MRR en 12/18 meses impulsado por ventas directas y socios estratégicos. Ya validamos este segmento con +850K€. Primer fase: programación musical para hoteles y venues. Proyección próximos 12 meses: +50K€ MRR en ventas directas +50K€ MRR vía partners.",
            },
            {
                icon: "🎵",
                title: "Marcas",
                desc: "+50K€ MRR en 12 meses Entre Latam y España con servicios on premise y branded gigs. Marcas utilizando bolos como marketing en espacios comerciales. Cerveceras, bancos, moda…",
            },
            {
                icon: "🎪",
                title: "promotores productores",
                desc: "Eventos y conciertos propios, festivales, sessions, ventas de tickets. 15K/25K MRR conciertos propios y eventos con tickets.",
            },
            {
                icon: "🚀",
                title: "new business",
                desc: "Nuevas plataformas y productos, upselling, SoundPass, Venues, Artists, investments in music",
            },
        ],
        soundpass:
            "SoundPass es nuestro primer beta en proceso de validación.",
    },

    // SECTION 13: TEAM
    team: {
        title: "Nuestro Equipo",
    },

    // SECTION 14: INVESTMENT
    investment: {
        title: "SoundLink Music - Oportunidad de inversión abierta",
        valuationPost: "€ 1 M (post money)",

        execution: {
            title: "Ejecución",
            items: [
                "Ventas + MKT + Distribución",
                "Consolidar el equipo de ventas B2B",
                "continuar el desarrollo de las plataformas band/pass",
                "equipo de producción, contenidos y gestión de artistas",
                "Expandir nuestra marca y redes/colaboraciones",
                "Aplicar fondos y créditos públicos en España (ENISA, Sodecan/ZEC/RIC/Deducciones), min +200%",
                "Evaluar apertura de espacio/hub propio",
            ],
        },

        terms: {
            title: "Beneficios & Exit",
            items: [
                { label: "1M Valor Presente de la Empresa", val: "1 M" },
                { label: "Participación Ofrecida (Safe or Equity)", val: "Variable" },
                { label: "Inversión", val: "100.000€" },
                { label: "Equity", val: "10%" },
                { label: "Valoración Post-Money", val: "1.000.000 €" },
                { label: "Valor de Salida del Inversor (5 años)", val: "hasta 9X" },
                {
                    label: "Exit: recompra, nuevas rondas, venta parcial o total de la compañía",
                    val: "Multiple scenarios",
                },
            ],
        },
    },

    // SECTION 15: CTA
    cta: {
        title: "Únete a la Banda",
        email: "nicolas@soundlink.band",
        role: "Founder/CEO",
        agenda: "Agenda Meet & Conference",
    },
};

const dictEN = {
    // Similar structure in English
    hero: {
        title: "The Evolution of B2B Music Management",
        subtitle: "Investment Proposal",
        email: "nicolas@soundlink.band",
        role: "CEO & Founder",
    },
    // ... rest translated
};

// CARD COMPONENTS
interface MetricCardProps {
    val: string;
    label: string;
}

function MetricCard({ val, label }: MetricCardProps) {
    return (
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all">
            <div className="text-4xl font-black text-white mb-3">{val}</div>
            <div className="text-xs font-bold text-blue-400 mb-2 uppercase tracking-wider">
                {label}
            </div>
        </div>
    );
}

interface FeatureCardProps {
    title: string;
    desc: string;
}

function FeatureCard({ title, desc }: FeatureCardProps) {
    return (
        <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-500/20">
            </div>
            <div>
                <h4 className="font-bold text-sm mb-1">{title}</h4>
                <p className="text-slate-400 text-xs">{desc}</p>
            </div>
        </div>
    );
}

export default function InvestorDeckPageComplete() {
    const isSpanish = typeof window !== "undefined" && window.location.pathname.includes("/es");
    const t: DictType = isSpanish ? dictES : (dictEN as DictType);
    const [activeTab, setActiveTab] = React.useState("overview");

    return (
        <div className="min-h-screen bg-[#000000] text-white selection:bg-blue-500/30 overflow-x-hidden">
            {/* ══════════════════════════════════════════════════════════════════ */}
            {/* SECTION 1: HERO ══════════════════════════════════════════════════ */}
            {/* ══════════════════════════════════════════════════════════════════ */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-medium uppercase tracking-widest mb-8">
                        <Music className="w-3 h-3" /> 2026 Investor Relations
                    </div>

                    <h1 className="text-6xl md:text-8xl mb-8 leading-tight font-black">
                        {t.hero.title}
                    </h1>

                    <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                        {t.hero.subtitle}
                    </p>

                    <div className="inline-flex flex-col items-center p-8 rounded-3xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 backdrop-blur-md">
                        <span className="text-[11px] uppercase tracking-[0.3em] text-slate-500 mb-3 font-bold">
                            {isSpanish ? "Propuesta de Inversión" : "Investment Proposal"}
                        </span>
                        <div className="text-4xl font-black text-white mb-2">
                            100.000€ <span className="text-blue-500">/ 10% Equity</span>
                        </div>
                        <div className="text-sm text-slate-400 font-mono">
                            Valuación: 1.000.000€ Post-money
                        </div>
                        <div className="mt-4 text-sm text-blue-400">
                            {t.hero.email} | {t.hero.role}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════════ */}
            {/* SECTION 2: THE PROBLEM (4 Critical Issues) ════════════════════════ */}
            {/* ══════════════════════════════════════════════════════════════════ */}
            <section className="py-32 bg-[#050505] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-black mb-4">{t.problem.title}</h2>
                        <p className="text-slate-400">
                            {isSpanish
                                ? "4 problemas críticos que fragmentan el mercado B2B"
                                : "4 critical issues fragmenting the B2B market"}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {t.problem.issues.map((issue: any, i: number) => (
                            <div
                                key={i}
                                className="p-8 rounded-2xl bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-white/10 hover:border-blue-500/30 transition-all"
                            >
                                <div className="text-4xl mb-4">{issue.icon}</div>
                                <h3 className="text-xl font-bold mb-3 text-blue-300">{issue.title}</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">{issue.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center p-6 rounded-xl bg-blue-500/10 border border-blue-500/30">
                        <p className="text-lg font-bold text-blue-400">{t.problem.conclusion}</p>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════════ */}
            {/* SECTION 3: MARKET OPPORTUNITY ═════════════════════════════════════ */}
            {/* ══════════════════════════════════════════════════════════════════ */}
            <section className="py-32 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-black mb-4">{t.opportunity.title}</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-12">
                    {t.opportunity.markets.map((market: any, i: number) => (
                        <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10">
                            <h3 className="text-lg font-bold mb-6 text-blue-400">{market.category}</h3>

                            {market.global && (
                                <div className="mb-6">
                                    <p className="text-xs text-slate-500 uppercase mb-3 font-bold">Global</p>
                                    <div className="grid grid-cols-2 gap-4">
                                        {market.global.map((g: any, j: number) => (
                                            <div key={j}>
                                                <div className="text-2xl font-black text-blue-400">{g.val}</div>
                                                <div className="text-xs text-slate-400">{g.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {market.spain && (
                                <div>
                                    <p className="text-xs text-slate-500 uppercase mb-3 font-bold">España</p>
                                    <div className="grid grid-cols-2 gap-4">
                                        {market.spain.map((s: any, j: number) => (
                                            <div key={j}>
                                                <div className="text-xl font-black text-blue-400">{s.val}</div>
                                                <div className="text-xs text-slate-400">{s.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="p-8 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30">
                    <p className="text-center text-lg leading-relaxed">{t.opportunity.conclusion}</p>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════════ */}
            {/* SECTION 4: SOUNDBAND SOLUTION ══════════════════════════════════════ */}
            {/* ══════════════════════════════════════════════════════════════════ */}
            <section className="py-32 bg-[#050505] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-black mb-4">{t.soundband.title}</h2>
                        <p className="text-xl text-blue-400 mb-6">{t.soundband.subtitle}</p>
                        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                            {t.soundband.mainDesc}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
                        {t.soundband.tools.map((tool: any, i: number) => (
                            <div
                                key={i}
                                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all text-center"
                            >
                                <div className="text-3xl mb-3">{tool.icon}</div>
                                <h4 className="font-bold text-sm mb-2">{tool.title}</h4>
                                <p className="text-xs text-slate-400">{tool.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="p-8 rounded-2xl bg-gradient-to-b from-blue-600/10 to-transparent border border-blue-500/30">
                        <p className="text-center text-sm text-slate-300 leading-relaxed">
                            {t.solutions.tagline}
                        </p>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════════ */}
            {/* SECTION 5: HOW IT WORKS ═══════════════════════════════════════════ */}
            {/* ══════════════════════════════════════════════════════════════════ */}
            <section className="py-32 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-black mb-4">{t.howWorks.title}</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {t.howWorks.steps.map((step: any, i: number) => (
                        <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10">
                            <div className="w-16 h-16 rounded-full bg-blue-500/20 border-2 border-blue-500/40 flex items-center justify-center mb-6 mx-auto">
                                <span className="text-3xl font-black text-blue-400">{step.num}</span>
                            </div>
                            <h4 className="font-bold text-lg mb-3 text-center">{step.title}</h4>
                            <p className="text-sm text-slate-400 text-center">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════════ */}
            {/* SECTION 6: PRICING PACKS ══════════════════════════════════════════ */}
            {/* ══════════════════════════════════════════════════════════════════ */}
            <section className="py-32 bg-[#050505] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-black mb-4">{t.pricingPacks.title}</h2>
                        <p className="text-slate-400 max-w-3xl mx-auto">{t.pricingPacks.subtitle}</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {t.pricingPacks.packs.map((pack: any, i: number) => (
                            <div
                                key={i}
                                className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-blue-500/30 transition-all"
                            >
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 border-2 border-blue-500/50 flex items-center justify-center mb-6 mx-auto">
                                    <span className="text-4xl font-black text-blue-400">{pack.name}</span>
                                </div>
                                <div className="text-center mb-6">
                                    <p className="text-sm text-slate-400 mb-2">{pack.sessions}</p>
                                    <p className="text-sm text-slate-400 mb-2">{pack.period}</p>
                                    <p className="text-lg font-bold text-blue-400">{pack.price}</p>
                                </div>
                                <div className="space-y-2 text-xs text-slate-400">
                                    {pack.breakdown.map((b: string, j: number) => (
                                        <div key={j}>• {b}</div>
                                    ))}
                                </div>
                                {pack.note && <p className="text-xs text-slate-500 mt-4 italic">{pack.note}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════════ */}
            {/* SECTION 7: KEY METRICS ═════════════════════════════════════════════ */}
            {/* ══════════════════════════════════════════════════════════════════ */}
            <section className="py-32 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-black mb-4">{t.metrics.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {t.metrics.data.map((m: any, i: number) => (
                        <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10">
                            <div className="text-5xl font-black text-blue-400 mb-2">{m.val}</div>
                            <p className="text-sm text-slate-400">{m.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════════ */}
            {/* SECTION 8: MARKET SIZING & REVENUE ════════════════════════════════ */}
            {/* ══════════════════════════════════════════════════════════════════ */}
            <section className="py-32 bg-[#050505] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-2">{t.marketSizing.title}</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {t.marketSizing.scenarios.map((scenario: any, i: number) => (
                            <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10">
                                <h4 className="font-bold text-blue-400 mb-4 text-sm">{scenario.type}</h4>
                                <div className="space-y-2 text-xs text-slate-400">
                                    {scenario.contract && <div>📋 {scenario.contract}</div>}
                                    {scenario.sessions && <div>🎵 {scenario.sessions}</div>}
                                    {scenario.artists && <div>👥 {scenario.artists}</div>}
                                    {scenario.monthly && <div>💰 {scenario.monthly}</div>}
                                    {scenario.profit && <div>📈 {scenario.profit}</div>}
                                    {scenario.yearContract && <div>✅ {scenario.yearContract}</div>}
                                    {scenario.maxContract && <div>🎯 {scenario.maxContract}</div>}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30">
                        <h3 className="font-bold text-lg mb-4">
                            {t.marketSizing.revenueProjection.title}
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {t.marketSizing.revenueProjection.projections.map((proj: any, i: number) => (
                                <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10">
                                    <p className="text-sm font-bold text-blue-400 mb-2">{proj.timeframe}</p>
                                    <p className="text-lg font-black text-white mb-1">{proj.mrr}</p>
                                    <p className="text-xs text-slate-400">{proj.mix}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════════ */}
            {/* SECTION 9: ROADMAP 2026/2027 ══════════════════════════════════════ */}
            {/* ══════════════════════════════════════════════════════════════════ */}
            <section className="py-32 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-black">{t.roadmap.title}</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {t.roadmap.segments.map((segment: any, i: number) => (
                        <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10">
                            <div className="text-4xl mb-4">{segment.icon}</div>
                            <h4 className="font-bold text-xl mb-3 uppercase text-blue-400">
                                {segment.title}
                            </h4>
                            <p className="text-sm text-slate-300 leading-relaxed">{segment.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/30 text-center">
                    <p className="text-sm text-blue-300">{t.roadmap.soundpass}</p>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════════ */}
            {/* SECTION 10: INVESTMENT TERMS ══════════════════════════════════════ */}
            {/* ══════════════════════════════════════════════════════════════════ */}
            <section className="py-32 bg-[#050505] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-5xl font-black mb-16 text-center">{t.investment.title}</h2>

                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Left: Execution */}
                        <div>
                            <h3 className="text-2xl font-bold mb-8">{t.investment.execution.title}</h3>
                            <ul className="space-y-4">
                                {t.investment.execution.items.map((item: string, i: number) => (
                                    <li key={i} className="flex gap-3 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                                        <span className="text-slate-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right: Terms & Benefits */}
                        <div>
                            <div className="sticky top-20 p-8 rounded-2xl bg-gradient-to-b from-blue-600/20 to-purple-600/10 border border-white/10">
                                <h3 className="text-2xl font-bold mb-8">{t.investment.terms.title}</h3>
                                <div className="space-y-4">
                                    {t.investment.terms.items.map((term: any, i: number) => (
                                        <div key={i} className="pb-4 border-b border-white/10">
                                            <p className="text-xs text-slate-400 mb-1">{term.label}</p>
                                            <p className="text-lg font-black text-blue-400">{term.val}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════════ */}
            {/* SECTION 11: CTA ═══════════════════════════════════════════════════ */}
            {/* ══════════════════════════════════════════════════════════════════ */}
            <section className="py-24 px-6 text-center bg-gradient-to-t from-blue-600/20 to-transparent">
                <h2 className="text-4xl font-black mb-4">{t.cta.title}</h2>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                    <Link
                        href="mailto:nicolas@soundlink.band"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all shadow-xl"
                    >
                        {t.cta.email} <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                        href="https://calendar.app.google/mpwxXhzTB7xB5Tfx9"
                        target="_blank"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600/20 text-blue-300 rounded-full font-bold border border-blue-500/30 hover:border-blue-500 transition-all"
                    >
                        {t.cta.agenda}
                    </Link>
                </div>

                <p className="text-slate-400 text-sm">
                    {isSpanish
                        ? "SoundLink Music transformando la industria musical a través de la tecnología B2B"
                        : "SoundLink Music transforming the music industry through B2B technology"}
                </p>
            </section>

            {/* Watermark */}
            <div className="fixed bottom-4 right-4 text-[10px] text-slate-600 pointer-events-none opacity-50">
                {isSpanish ? "Presentación Privada - No Distribuir" : "Private Presentation - Do Not Distribute"}
            </div>
        </div>
    );
}