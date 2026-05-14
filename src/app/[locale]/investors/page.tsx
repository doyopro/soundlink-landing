'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
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
    AlertCircle,
    RefreshCw,
    Database,
    Cpu,
    Lock,
    Sparkles,
    Calendar,
    Mail,
    DollarSign,
    X,
    MapPin,
} from 'lucide-react'

// ═════════════════════════════════════════════════════════════════════════════
// ANIMATED COUNTER
// ═════════════════════════════════════════════════════════════════════════════
function useCountUp(end: number, duration = 1600) {
    const [value, setValue] = useState(0)
    const ref = useRef<HTMLDivElement>(null)
    const started = useRef(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true
                    let t0: number
                    const tick = (now: number) => {
                        if (!t0) t0 = now
                        const p = Math.min((now - t0) / duration, 1)
                        const eased = 1 - Math.pow(1 - p, 4)
                        setValue(Math.round(eased * end))
                        if (p < 1) requestAnimationFrame(tick)
                    }
                    requestAnimationFrame(tick)
                }
            },
            { threshold: 0.4 }
        )
        obs.observe(el)
        return () => obs.disconnect()
    }, [end, duration])

    return { value, ref }
}

function Counter({ end, prefix = '', suffix = '' }: { end: number; prefix?: string; suffix?: string }) {
    const { value, ref } = useCountUp(end)
    return <div ref={ref}>{prefix}{value.toLocaleString('es-ES')}{suffix}</div>
}

// ═════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═════════════════════════════════════════════════════════════════════════════
export default function InvestorDeckV8() {
    const isES = typeof window !== 'undefined' && window.location.pathname.includes('/es')

    const team = [
        {
            name: 'Nicolás A. Civatti',
            role: 'Founder & CEO',
            photo: '/nicolas-civatti.png',
            bio: isES
                ? 'Operador B2B con +10.000 contrataciones gestionadas en España y Latam. Construyó la infraestructura operativa validando con revenue real sin capital externo.'
                : 'B2B operator with +10,000 bookings managed in Spain and Latam. Built operational infrastructure validating with real revenue without external capital.',
        },
        {
            name: 'Lucas Minetti',
            role: 'Head of Product',
            photo: '/lucas.png',
            bio: isES
                ? '+10 años en UX/UI y diseño de productos digitales. Especialista en traducir complejas operativas B2B en interfaces Zero-Friction.'
                : '+10 years in UX/UI and digital product design. Specialist in translating complex B2B operations into Zero-Friction interfaces.',
        },
        {
            name: 'Nik Levenberg',
            role: 'Strategic Partner — US',
            photo: '/nik.png',
            bio: isES
                ? '25 años en tecnología, startups y VC en EE.UU. Arquitecto de estrategia financiera, GTM global y capital raising.'
                : '25 years in tech, startups and VC in the US. Architect of financial strategy, global GTM and capital raising.',
        },
        {
            name: 'Juan Parodi',
            role: 'Strategic Partner',
            photo: '/juan.png',
            bio: isES
                ? '+20 años en desarrollo de negocios corporativos. Mentor y puente crítico con decisores Enterprise.'
                : '+20 years in corporate business development. Mentor and critical liaison with Enterprise decision-makers.',
        },
        {
            name: 'Ivan Novakovic',
            role: 'Finance & Legal Advisor',
            photo: '/ivan.png',
            bio: isES
                ? 'Abogado especialista en Derecho y Economía. Expert en Capital Markets, Fintech y Compliance.'
                : 'Lawyer specialized in Law & Economics. Expert in Capital Markets, Fintech and Compliance.',
        },
        {
            name: 'Graciana Virasoro',
            role: 'Head of Office & Accounts',
            photo: '/graciana.png',
            bio: isES
                ? 'Especialista en escalabilidad B2B. Gestiona LTV del cliente y adopción en cadenas hoteleras.'
                : 'B2B scalability specialist. Manages customer LTV and adoption in hotel chains.',
        },
        {
            name: 'Martín M. Foco',
            role: 'Partner & Bus. Dev',
            photo: '/martin.png',
            bio: isES
                ? 'Impulsa expansión territorial operando en la intersección de experiencia y escalabilidad.'
                : 'Drives territorial expansion at the intersection of experience and financial scalability.',
        },
        {
            name: 'Joaquín Lagos Aguirre',
            role: 'Head of Studio',
            photo: '/joaquin.png',
            bio: isES
                ? 'Ingeniero de sonido con +20 años. Garantiza estándar premium en cada ejecución.'
                : 'Sound engineer with +20 years. Ensures premium standard in every execution.',
        },
    ]

    return (
        <div className="min-h-screen bg-[#0f0f0f] text-white antialiased overflow-x-hidden font-sans">
            {/* ════════════════════════════════════════════════════════════════════════
          PREMIUM NAV
      ════════════════════════════════════════════════════════════════════════ */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-16 border-b border-white/8 bg-[#0f0f0f]/95 backdrop-blur-xl">
                <div className="flex items-center gap-4">
                    <img src="/soundlink-icono.gif" alt="SoundLink" className="w-8 h-8" />
                    <div>
                        <p className="text-xs font-bold tracking-wider text-white">SOUNDLINK MUSIC</p>
                        <p className="text-[10px] text-gray-500 tracking-wider">{isES ? 'Infraestructura Operativa' : 'Operational Infrastructure'}</p>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <button
                        onClick={() => {
                            const newLocale = isES ? 'en' : 'es'
                            window.location.pathname = window.location.pathname.replace(
                                /\/(es|en)\//,
                                `/${newLocale}/`
                            )
                        }}
                        className="px-4 py-2 rounded-lg bg-white/8 hover:bg-white/15 transition-all text-xs font-semibold uppercase tracking-widest text-gray-300 hover:text-white border border-white/10 hover:border-white/20"
                    >
                        {isES ? '🇬🇧 EN' : '🇪🇸 ES'}
                    </button>

                    <Link
                        href="https://calendar.app.google/3MWqCUTqt16YJQDE6"
                        target="_blank"
                        className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-lg text-xs font-bold uppercase tracking-wide transition-all"
                    >
                        <Calendar className="w-4 h-4" />
                        {isES ? 'Agendar' : 'Book'}
                    </Link>
                </div>
            </nav>

            {/* ════════════════════════════════════════════════════════════════════════
          HERO - REPOSICIONADO
      ════════════════════════════════════════════════════════════════════════ */}
            <section className="relative pt-40 pb-24 px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] overflow-hidden">
                {/* Gradient effects */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px]" />
                </div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Badge - MEJORADO */}
                    <div className="mb-12 inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        <span className="text-xs font-bold text-gray-300">
                            {isES ? 'SOUNDLINK MUSIC S.L. · ISLAS CANARIAS' : 'SOUNDLINK MUSIC S.L. · CANARY ISLANDS'}
                        </span>
                        <span className="text-xs font-bold text-blue-400">PRE-SEED 2026</span>
                    </div>

                    {/* Main headline - REPOSICIONADO */}
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[1.0] tracking-tight text-white mb-8 max-w-5xl">
                        {isES ? (
                            <>
                                Las empresas gastan millones en música.
                                <br />
                                <span className="text-blue-400">Nadie mide si funciona.</span>
                            </>
                        ) : (
                            <>
                                Companies spend millions on music.
                                <br />
                                <span className="text-blue-400">No one measures if it works.</span>
                            </>
                        )}
                    </h1>

                    {/* Subheading - REPOSICIONADO HACIA INFRAESTRUCTURA */}
                    <p className="text-lg text-gray-300 max-w-2xl mb-12 leading-relaxed">
                        {isES
                            ? 'SoundBand es la capa operativa que automatiza end-to-end la gestión musical B2B: booking inteligente, compliance automatizado, contratos validados y ROI medible. Para hoteles, marcas y venues a escala.'
                            : 'SoundBand is the operational infrastructure layer that automates end-to-end B2B music management: intelligent booking, automated compliance, validated contracts and measurable ROI. For hotels, brands and venues at scale.'}
                    </p>

                    {/* Investment box */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
                        {[
                            { label: isES ? 'Ask Privado' : 'Private Ask', val: '100.000€', sub: 'Business Angels' },
                            { label: isES ? 'Apalancamiento' : 'Public Leverage', val: '100.000€', sub: 'Sodecan + I+D' },
                            { label: 'Equity', val: '10%', sub: 'SAFE o Equity' },
                            { label: isES ? 'Runway' : 'Runway', val: '18+ meses', sub: isES ? 'Hasta break-even' : 'To break-even' },
                        ].map(({ label, val, sub }, i) => (
                            <div key={i} className="p-4 bg-white/3 rounded-lg border border-white/5">
                                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-2">{label}</p>
                                <p className="text-2xl font-black text-white mb-1">{val}</p>
                                <p className="text-xs text-gray-500">{sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════════
          CAPITAL EFFICIENCY NARRATIVE (NUEVO)
      ════════════════════════════════════════════════════════════════════════ */}
            <section className="py-16 px-8 bg-gradient-to-r from-blue-600/10 to-transparent border-y border-blue-500/20">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1">
                            <p className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">
                                {isES ? '→ Validación sin Capital Externo' : '→ Validation Without External Capital'}
                            </p>
                            <p className="text-lg text-gray-200 leading-relaxed">
                                {isES
                                    ? 'SoundLink ha validado demanda operacional con 8.000 operaciones y 850k€ gestionados sin inversión externa. Esta ronda acelera productización, expansión enterprise y consolidación del moat de datos.'
                                    : 'SoundLink has validated operational demand with 8,000 operations and €850k managed without external investment. This round accelerates productization, enterprise expansion and data moat consolidation.'}
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <Rocket className="w-12 h-12 text-blue-400" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════════
          MARKET VALIDATION - KPIs PROMINENTES
      ════════════════════════════════════════════════════════════════════════ */}
            <section className="py-24 px-8 bg-[#0f0f0f] border-y border-white/8">
                <div className="max-w-6xl mx-auto">
                    <p className="text-center text-sm text-gray-400 font-bold uppercase tracking-widest mb-16">
                        {isES ? 'Validación Operativa · Dataset Propietario' : 'Operational Validation · Proprietary Dataset'}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
                        {[
                            { val: '+850K€', label: isES ? 'Gestionados' : 'Managed', Icon: DollarSign },
                            { val: '+8.000', label: isES ? 'Operaciones' : 'Operations', Icon: Activity },
                            { val: '20%', label: isES ? 'Margen Neto' : 'Net Margin', Icon: TrendingUp },
                            { val: '0%', label: isES ? 'Riesgo Legal' : 'Legal Risk', Icon: CheckCircle2 },
                            { val: '+2 Años', label: isES ? 'LTV Retención' : 'LTV Retention', Icon: RefreshCw },
                            { val: '100%', label: 'Compliance', Icon: ShieldCheck },
                        ].map(({ val, label, Icon }, i) => (
                            <div key={i} className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-all text-center group">
                                <Icon className="w-6 h-6 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                                <p className="text-2xl font-black text-white mb-2">{val}</p>
                                <p className="text-xs text-gray-400 font-bold uppercase">{label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center">
                        <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
                            {isES
                                ? '2025: España bate récords en turismo (97M visitantes, 13.5% del PIB) y live music (€725M). Las marcas nunca invirtieron más en experiencias presenciales. Nunca existió una infraestructura para automatizarlas.'
                                : '2025: Spain breaks records in tourism (97M visitors, 13.5% of GDP) and live music (€725M). Brands never invested more in live experiences. Infrastructure to automate them has never existed.'}
                        </p>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════════
          THE PROBLEM (Complete)
      ════════════════════════════════════════════════════════════════════════ */}
            <section className="py-32 px-8 bg-[#1a1a1a]">
                <div className="max-w-6xl mx-auto">
                    <p className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-6">
                        ▸ {isES ? 'El Reto Operacional' : 'The Operational Challenge'}
                    </p>

                    {/* Big stat callout */}
                    <div className="mb-20 p-12 rounded-2xl bg-gradient-to-br from-red-500/15 to-transparent border border-red-500/30">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                            {isES
                                ? 'Un hotel lujo gasta 500K€–2M€ anuales sin medir retorno.'
                                : 'A luxury hotel spends €500K–€2M annually without measuring return.'}
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
                            {isES
                                ? 'Sin sistema operativo, ese presupuesto se gestiona por WhatsApp: sin contratos validados, sin seguros, sin KPIs de retorno, sin datos sobre impacto en ocupación o experiencia.'
                                : 'Without operational infrastructure, that budget is managed by WhatsApp: no validated contracts, insurance, return KPIs, or data on occupancy impact.'}
                        </p>
                    </div>

                    <h2 className="text-4xl font-black text-white mb-12">
                        {isES ? 'Cuatro fricciones sin resolver en la industria' : 'Four industry frictions no one has solved'}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                num: '01',
                                Icon: AlertCircle,
                                title: isES ? 'Millones en música. Cero medición.' : 'Millions on music. Zero measurement.',
                                desc: isES
                                    ? '80% de empresas sin control real de ROI. Decisiones por intuición, WhatsApp, correo. Ningún historial de qué funciona, costos o criterios de selección.'
                                    : '80% of companies lack real ROI control. Decisions by intuition, WhatsApp, email. No record of what works, costs, or selection criteria.',
                            },
                            {
                                num: '02',
                                Icon: Lock,
                                title: isES ? 'Riesgo legal acumulado' : 'Accumulated legal liability',
                                desc: isES
                                    ? 'Sony v. Marriott evidenció riesgos. Sin contratos validados, seguros ni licencias SGAE/BIEM verificadas, cada evento es pasivo legal desconocido.'
                                    : 'Sony v. Marriott exposed the risk. No validated contracts, insurance or verified SGAE/BIEM licenses. Every event is hidden legal liability.',
                            },
                            {
                                num: '03',
                                Icon: RefreshCw,
                                title: isES ? 'Escalabilidad imposible' : 'Scalability impossible',
                                desc: isES
                                    ? '50 hoteles no pueden garantizar misma calidad musical sin automatización. El modelo artesanal es cuello de botella logístico. Se necesita infraestructura, no coordinadores.'
                                    : '50 hotels cannot guarantee same music quality without automation. Artisanal model is a logistical bottleneck. Infrastructure needed, not coordinators.',
                            },
                            {
                                num: '04',
                                Icon: Database,
                                title: isES ? 'Cero inteligencia de datos' : 'Zero data intelligence',
                                desc: isES
                                    ? 'Ningún competidor construyó capa de datos sobre decisiones musicales B2B. Sin historial de géneros rentables, artistas que retienen, horarios óptimos.'
                                    : 'No competitor has built a data layer on B2B music decisions. No record of profitable genres, artist retention, or optimal timing.',
                            },
                        ].map((p, i) => (
                            <div key={i} className="p-8 rounded-xl bg-white/5 border border-red-500/20 hover:border-red-500/40 transition-all relative overflow-hidden group">
                                <div className="absolute -top-10 -right-10 text-8xl font-black text-red-500/5 group-hover:text-red-500/10 transition-colors">{p.num}</div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-lg bg-red-500/15 border border-red-500/20 flex items-center justify-center text-red-400 mb-6">
                                        <p.Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-black text-white mb-3">{p.title}</h3>
                                    <p className="text-sm text-gray-300 leading-relaxed">{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════════
          BEFORE vs AFTER
      ════════════════════════════════════════════════════════════════════════ */}
            <section className="py-32 px-8 bg-[#0f0f0f]">
                <div className="max-w-6xl mx-auto">
                    <p className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-6">
                        ▸ {isES ? 'La Transformación Operativa' : 'The Operational Transformation'}
                    </p>
                    <h2 className="text-4xl font-black text-white mb-16">
                        {isES ? 'De caos a infraestructura inteligente.' : 'From chaos to intelligent infrastructure.'}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Before */}
                        <div className="p-10 rounded-2xl bg-white/5 border border-red-500/20">
                            <div className="flex items-center gap-2 mb-8">
                                <X className="w-5 h-5 text-red-400" />
                                <p className="text-sm font-bold text-red-400 uppercase tracking-wider">
                                    {isES ? 'Sin Sistema Operativo' : 'Without Operating System'}
                                </p>
                            </div>
                            <ul className="space-y-4">
                                {(isES
                                    ? [
                                        'Director social elige artista por Instagram',
                                        'Contrato PDF por WhatsApp (sin validación)',
                                        'Sin seguro de artista ni cobertura legal',
                                        '12+ horas coordinación manual por evento',
                                        'Cero trazabilidad de ROI o impacto',
                                        'Caos si hay cancelación o imprevisto',
                                        'Múltiples invoices, contabilidad fragmentada',
                                        'Cero compliance SGAE/BIEM auditable',
                                    ]
                                    : [
                                        'Social director picks artist from Instagram',
                                        'Contract via WhatsApp PDF (unvalidated)',
                                        'No artist insurance or legal coverage',
                                        '12+ hours manual coordination per event',
                                        'Zero ROI traceability or impact',
                                        'Chaos if cancellation or issue occurs',
                                        'Multiple invoices, fragmented accounting',
                                        'Zero auditable SGAE/BIEM compliance',
                                    ]
                                ).map((item, i) => (
                                    <li key={i} className="flex gap-3">
                                        <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                        <span className="text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* After */}
                        <div className="p-10 rounded-2xl bg-white/5 border border-blue-500/20">
                            <div className="flex items-center gap-2 mb-8">
                                <CheckCircle2 className="w-5 h-5 text-blue-400" />
                                <p className="text-sm font-bold text-blue-400 uppercase tracking-wider">
                                    {isES ? 'Con SoundBand OS' : 'With SoundBand OS'}
                                </p>
                            </div>
                            <ul className="space-y-4">
                                {(isES
                                    ? [
                                        'IA + curador selecciona por Brand DNA + KPIs',
                                        'Contrato generado y validado automáticamente',
                                        'Seguro incluido y auditado por legal',
                                        'Zero-touch: sistema opera de forma autónoma',
                                        'Dashboard ROI con métricas post-evento',
                                        'Sustitución automática en < 2 horas',
                                        'Una factura mensual unificada',
                                        '100% compliance SGAE/BIEM automatizado',
                                    ]
                                    : [
                                        'AI + curator selects by Brand DNA + KPIs',
                                        'Contract auto-generated and validated',
                                        'Insurance included and legally audited',
                                        'Zero-touch: system operates autonomously',
                                        'ROI dashboard with post-event metrics',
                                        'Automatic substitution in < 2 hours',
                                        'Single unified monthly invoice',
                                        '100% automated SGAE/BIEM compliance',
                                    ]
                                ).map((item, i) => (
                                    <li key={i} className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                                        <span className="text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════════
          SOLUTION - REPOSICIONADO
      ════════════════════════════════════════════════════════════════════════ */}
            <section className="py-32 px-8 bg-[#1a1a1a]">
                <div className="max-w-6xl mx-auto">
                    <p className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-6">
                        ▸ {isES ? 'La Infraestructura' : 'The Infrastructure'}
                    </p>

                    <h2 className="text-4xl font-black text-white mb-8">
                        {isES ? 'SoundBand OS: Operating System for Live Experience Management.' : 'SoundBand OS: Operating System for Live Experience Management.'}
                    </h2>

                    <p className="text-gray-300 text-lg max-w-3xl mb-12 leading-relaxed">
                        {isES
                            ? 'No somos agencia con software ni marketplace de artistas. Somos capa de infraestructura operativa que automatiza end-to-end la gestión musical B2B. Nuestro moat: 8.000 datos operacionales generan el único activo no copiable: inteligencia sobre qué música funciona en qué contexto de marca.'
                            : 'We are not an agency with software or an artist marketplace. We are an operational infrastructure layer that automates end-to-end B2B music management. Our moat: 8,000 operational data points generate the only non-copyable asset: intelligence on which music works in which brand context.'}
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {/* Left - Core Features */}
                        <div>
                            <h3 className="text-2xl font-black text-white mb-8">{isES ? 'Capacidades Centrales' : 'Core Capabilities'}</h3>
                            <ul className="space-y-3">
                                {(isES
                                    ? [
                                        'Matching inteligente: Brand DNA + KPIs + presupuesto',
                                        'Contratos auto-generados, validados, auditables',
                                        'Seguros y licencias SGAE/BIEM incluidas y verificadas',
                                        'Dashboard ROI: impacto en ocupación, NPS, ticket medio',
                                        'Sustitución agéntica automática ante cancelaciones',
                                        'Facturación única mensual consolidada',
                                    ]
                                    : [
                                        'Intelligent matching: Brand DNA + KPIs + budget',
                                        'Auto-generated, validated, auditable contracts',
                                        'Insurance and verified SGAE/BIEM licenses included',
                                        'ROI dashboard: occupancy, NPS, ticket average impact',
                                        'Automatic agentic substitution on cancellations',
                                        'Single consolidated monthly invoice',
                                    ]
                                ).map((item, i) => (
                                    <li key={i} className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                                        <span className="text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right - AI Technology */}
                        <div>
                            <h3 className="text-2xl font-black text-white mb-8">{isES ? 'Ventaja Operativa (Moat)' : 'Operational Moat'}</h3>
                            <div className="space-y-4">
                                {[
                                    {
                                        Icon: BrainCircuit,
                                        title: isES ? 'Matching Intelligence' : 'Matching Intelligence',
                                        desc: isES
                                            ? 'Motor IA que cruza Brand DNA, KPIs de negocio, presupuesto y disponibilidad para match perfecto sin intervención humana.'
                                            : 'AI engine crossing Brand DNA, business KPIs, budget and availability for perfect match without human intervention.',
                                    },
                                    {
                                        Icon: Zap,
                                        title: isES ? 'Sustitución Automática' : 'Automatic Substitution',
                                        desc: isES
                                            ? 'Ante cancelación: sistema detecta, encuentra alternativa validada, reasigna en <2h. La operación no se detiene.'
                                            : 'On cancellation: system detects, finds validated alternative, reassigns in <2h. Operation never stops.',
                                    },
                                    {
                                        Icon: ShieldCheck,
                                        title: isES ? 'Compliance 360' : '360° Compliance',
                                        desc: isES
                                            ? 'Validación automática de contratos, seguros, licencias, requisitos laborales. Pista de auditoría completa.'
                                            : 'Automatic validation of contracts, insurance, licenses, labor requirements. Complete audit trail.',
                                    },
                                    {
                                        Icon: BarChart3,
                                        title: isES ? 'Analytics ROI' : 'ROI Analytics',
                                        desc: isES
                                            ? 'Conexión entre programación y métricas de negocio: ocupación, consumo, NPS. Justificación de gasto con datos reales.'
                                            : 'Connection between programming and business metrics: occupancy, spend, NPS. Spending justification with real data.',
                                    },
                                ].map(({ Icon, title, desc }, i) => (
                                    <div key={i} className="p-5 rounded-lg bg-white/3 border border-white/5 hover:border-blue-500/20 transition-all">
                                        <div className="flex gap-3">
                                            <Icon className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-bold text-white mb-1">{title}</p>
                                                <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Business Model */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-10">
                        <h3 className="text-2xl font-black text-white mb-8">{isES ? 'Modelo de Negocio' : 'Business Model'}</h3>

                        <div className="grid md:grid-cols-3 gap-6 mb-10">
                            {[
                                {
                                    name: 'Tier 1',
                                    sessions: isES ? '1-2 sesiones/día' : '1-2 sessions/day',
                                    example: isES ? 'Hotel 4★: jazz lobby viernes/sábado' : '4★ Hotel: jazz lobby Fri/Sat',
                                },
                                {
                                    name: 'Tier 2',
                                    sessions: isES ? '2-3 sesiones/día' : '2-3 sessions/day',
                                    example: isES ? 'Resort 5★: brunch + dinner + gala' : '5★ Resort: brunch + dinner + gala',
                                    featured: true,
                                },
                                {
                                    name: 'Tier 3',
                                    sessions: isES ? '3-5+ sesiones/día' : '3-5+ sessions/day',
                                    example: isES ? 'Gran evento: multi-venue, multi-horario' : 'Multi-venue, multi-time events',
                                },
                            ].map(({ name, sessions, example, featured }, i) => (
                                <div
                                    key={i}
                                    className={`p-6 rounded-lg border transition-all ${featured
                                        ? 'bg-blue-600/10 border-blue-500/40 ring-2 ring-blue-500/20'
                                        : 'bg-white/3 border-white/10 hover:border-blue-500/30'
                                        }`}
                                >
                                    <p className="font-black text-white mb-2">{name}</p>
                                    <p className="text-xs text-blue-400 font-bold mb-3">{sessions}</p>
                                    <p className="text-xs text-gray-400">{example}</p>
                                </div>
                            ))}
                        </div>

                        {/* Revenue Model */}
                        <div className="bg-white/3 rounded-lg p-6 border border-white/10">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
                                {isES ? 'Distribución de Revenue' : 'Revenue Distribution'}
                            </p>
                            <div className="grid grid-cols-3 gap-6 text-center mb-6">
                                {[
                                    { label: isES ? 'Al Artista' : 'Artist', pct: '70%' },
                                    { label: isES ? 'Operación' : 'Operations', pct: '10%' },
                                    { label: isES ? 'SoundLink' : 'SoundLink', pct: '20%' },
                                ].map(({ label, pct }, i) => (
                                    <div key={i}>
                                        <p className="text-2xl font-black text-white mb-1">{pct}</p>
                                        <p className="text-xs text-gray-400">{label}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs text-gray-500 text-center">
                                {isES
                                    ? 'Mín. 190€/gig · 10–20 gigs/mes típico = 1.900–3.800€ MRR por venue'
                                    : 'Min. €190/gig · 10–20 gigs/month typical = €1,900–€3,800 MRR per venue'}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════════
          MOAT SLIDE - NUEVO/MEJORADO
      ════════════════════════════════════════════════════════════════════════ */}
            <section className="py-32 px-8 bg-[#0f0f0f]">
                <div className="max-w-6xl mx-auto">
                    <p className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-6">
                        ▸ {isES ? 'El Moat: Defensibilidad' : 'The Moat: Defensibility'}
                    </p>

                    <h2 className="text-4xl font-black text-white mb-12">
                        {isES ? '8.000 operaciones = Activo no copiable' : '8,000 operations = Non-copyable asset'}
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {[
                            {
                                Icon: Database,
                                title: isES ? 'Dataset Operacional' : 'Operational Dataset',
                                desc: isES
                                    ? '8.000 operaciones generan 50TB+ de datos sobre patrones venue/artista/guest. Ningún competidor tiene este histórico.'
                                    : '8,000 operations generate 50TB+ of data on venue/artist/guest patterns. No competitor has this history.',
                                highlight: true,
                            },
                            {
                                Icon: Database,
                                title: isES ? 'Matching Intelligence' : 'Matching Intelligence',
                                desc: isES
                                    ? 'IA entrenada en decisiones reales B2B. Sabe qué música funciona en qué contexto para qué marca. Información que requiere años de ejecución.'
                                    : 'AI trained on real B2B decisions. Knows which music works in which context for which brand. Intelligence requiring years of execution.',
                            },
                            {
                                Icon: Lock,
                                title: isES ? 'Redes de Oferta' : 'Supply Networks',
                                desc: isES
                                    ? 'Red consolidada de 500+ artistas validados, seguros auditados, relaciones legales. Lento de replicar sin operaciones reales.'
                                    : '500+ validated artist network, audited insurance, legal relationships. Slow to replicate without real operations.',
                            },
                        ].map(({ Icon, title, desc, highlight }, i) => (
                            <div
                                key={i}
                                className={`p-8 rounded-xl border transition-all ${highlight
                                    ? 'bg-blue-600/15 border-blue-500/40 ring-2 ring-blue-500/20'
                                    : 'bg-white/5 border-white/10 hover:border-blue-500/30'
                                    }`}
                            >
                                <Icon className={`w-8 h-8 mb-4 ${highlight ? 'text-blue-400' : 'text-blue-400'}`} />
                                <h3 className="font-black text-white mb-3 text-lg">{title}</h3>
                                <p className="text-sm text-gray-300 leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-10">
                        <p className="text-gray-300 text-center leading-relaxed">
                            {isES
                                ? 'El moat NO es el código. Es la operación histórica + el dataset que genera + los workflows que solo podemos construir ejecutando. Un startup de software puede copiar features. Nadie puede copiar 8.000 operaciones reales en 18 meses.'
                                : 'The moat is NOT the code. It\'s the operational history + the dataset it generates + workflows we can only build by executing. A software startup can copy features. No one can replicate 8,000 real operations in 18 months.'}
                        </p>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════════
          MARKET OPPORTUNITY
      ════════════════════════════════════════════════════════════════════════ */}
            <section className="py-32 px-8 bg-[#1a1a1a]">
                <div className="max-w-6xl mx-auto">
                    <p className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-6">
                        ▸ {isES ? 'Oportunidad de Mercado' : 'Market Opportunity'}
                    </p>
                    <h2 className="text-4xl font-black text-white mb-12">
                        {isES ? 'Dos mercados explosivos. Un puente único.' : 'Two explosive markets. One unique bridge.'}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {[
                            { label: '$38.2B', desc: isES ? 'Live Music Global 2025' : 'Global Live Music 2025', sub: isES ? 'Mercado audible y creciente' : 'Audible, growing market' },
                            { label: '$91.4B', desc: isES ? 'Music Tourism Global 2024' : 'Global Music Tourism 2024', sub: isES ? 'Monetización experiencial' : 'Experience monetization' },
                            { label: '€725M', desc: isES ? 'Live Music España 2024' : 'Live Music Spain 2024', sub: isES ? 'Mercado concentrado, accesible' : 'Concentrated, accessible market' },
                            { label: '97M', desc: isES ? 'Turistas España 2025' : 'Spain Tourists 2025', sub: isES ? 'Audiencia cautiva B2B' : 'Captive B2B audience' },
                            { label: '+96%', desc: isES ? 'Crecimiento Madrid live music' : 'Madrid live music growth', sub: isES ? 'Aceleración regional visible' : 'Visible regional acceleration' },
                            { label: '€4.2B', desc: isES ? 'Inversión hotelera España' : 'Spain Hotel Investment', sub: isES ? 'Presupuesto disponible' : 'Available budget' },
                        ].map(({ label, desc, sub }, i) => (
                            <div key={i} className="p-8 rounded-lg bg-white/5 border border-white/10 text-center hover:border-blue-500/20 transition-all">
                                <p className="text-4xl font-black text-blue-400 mb-3">{label}</p>
                                <p className="text-sm text-white font-semibold mb-2">{desc}</p>
                                <p className="text-xs text-gray-400">{sub}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-10 text-center">
                        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                            {isES
                                ? 'SoundLink opera en la intersección única de Live Music global (crecimiento 6%+/año) y Hospitality & Turismo en España (13.5% PIB). TAM inicial: €725M España. TAM expandido (Latam + EU): $10B+.'
                                : 'SoundLink operates at the unique intersection of global Live Music (6%+ annual growth) and Hospitality & Tourism in Spain (13.5% of GDP). Initial TAM: €725M Spain. Expanded TAM (Latam + EU): $10B+.'}
                        </p>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════════
          CANARIAS ADVANTAGE - MEJORADO
      ════════════════════════════════════════════════════════════════════════ */}
            <section className="py-24 px-8 bg-gradient-to-r from-amber-500/10 to-transparent border-y border-amber-500/20">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-4">
                                <MapPin className="w-5 h-5 text-amber-400" />
                                <p className="text-sm font-bold text-amber-400 uppercase tracking-widest">
                                    {isES ? '→ Base Estratégica Operativa' : '→ Strategic Operational Base'}
                                </p>
                            </div>
                            <h3 className="text-3xl font-black text-white mb-4">
                                {isES ? 'Islas Canarias: Ventajas Institucionales' : 'Canary Islands: Institutional Advantages'}
                            </h3>
                            <ul className="space-y-2 text-gray-300">
                                {(isES
                                    ? [
                                        '✓ ZEC Structure: deducciones I+D+i + ventajas fiscales',
                                        '✓ Sodecan: capital público apalancable sin dilución',
                                        '✓ Sandbox turístico: 97M visitantes/año, densidad de hoteles',
                                        '✓ Puente EU-Latam: acceso a ambas regiones',
                                        '✓ Hub operativo establecido: talent pool, infraestructura',
                                    ]
                                    : [
                                        '✓ ZEC Structure: R&D deductions + tax advantages',
                                        '✓ Sodecan: public capital leverage without dilution',
                                        '✓ Tourism sandbox: 97M visitors/year, hotel density',
                                        '✓ EU-Latam bridge: access to both regions',
                                        '✓ Established operational hub: talent pool, infrastructure',
                                    ]
                                ).map((item, i) => (
                                    <li key={i} className="text-sm">{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-shrink-0">
                            <Globe className="w-16 h-16 text-amber-400/40" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════════
          PIPELINE & ROADMAP
      ════════════════════════════════════════════════════════════════════════ */}
            <section className="py-32 px-8 bg-[#0f0f0f]">
                <div className="max-w-6xl mx-auto">
                    <p className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-6">
                        ▸ {isES ? 'Roadmap y Pipeline' : 'Roadmap & Pipeline'}
                    </p>
                    <h2 className="text-4xl font-black text-white mb-6">
                        {isES ? 'Ruta a Break-Even 2026–2027' : 'Path to Break-Even 2026–2027'}
                    </h2>
                    <p className="text-gray-300 max-w-2xl mb-12 text-lg">
                        {isES
                            ? 'Objetivo: 50K€ MRR en 18 meses. Target: 150K€ MRR en 24 meses. Break-even sostenido SIN nueva ronda.'
                            : 'Objective: €50K MRR at 18 months. Target: €150K MRR at 24 months. Sustained break-even WITHOUT new round.'}
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
                        {[
                            {
                                Icon: Target,
                                title: 'Hotels & Hospitality',
                                mrr: '50–100K€ MRR',
                                timeframe: '12–18m',
                                featured: true,
                                desc: isES
                                    ? 'Segmento validado. Canarias, Madrid + expansión partners hoteleros 4-5★.'
                                    : 'Validated segment. Canary Islands, Madrid + 4-5★ hotel partner expansion.',
                            },
                            {
                                Icon: Sparkles,
                                title: isES ? 'Marcas & Retail' : 'Brands & Retail',
                                mrr: '+50K€ MRR',
                                timeframe: '12m',
                                desc: isES
                                    ? 'Cerveceras, moda, banca. Gigs como herramienta marketing on-premise.'
                                    : 'Breweries, fashion, banking. Gigs as on-premise marketing tool.',
                            },
                            {
                                Icon: Globe,
                                title: 'Enterprise EU/Latam',
                                mrr: 'Escalable',
                                timeframe: '18–24m',
                                desc: isES ? 'Expansión vía partners estratégicos. Conversaciones activas.' : 'Expansion via strategic partners. Active conversations.',
                            },
                            {
                                Icon: Rocket,
                                title: 'SoundPass & Beyond',
                                mrr: '2027+',
                                timeframe: isES ? 'Nuevos verticals' : 'New verticals',
                                desc: isES
                                    ? 'Plataforma B2C, upselling, nuevos mercados experienciales.'
                                    : 'B2C platform, upselling, new experience markets.',
                            },
                        ].map(({ Icon, title, mrr, timeframe, featured, desc }, i) => (
                            <div
                                key={i}
                                className={`p-6 rounded-lg border transition-all ${featured
                                    ? 'bg-blue-600/10 border-blue-500/40 ring-2 ring-blue-500/20'
                                    : 'bg-white/5 border-white/10 hover:border-blue-500/30'
                                    }`}
                            >
                                <div className="w-10 h-10 rounded-lg bg-blue-500/15 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <h3 className="font-black text-white mb-2">{title}</h3>
                                <p className={`text-sm font-bold mb-1 ${featured ? 'text-blue-400' : 'text-gray-300'}`}>{mrr}</p>
                                <p className="text-xs text-gray-500 mb-3">{timeframe}</p>
                                <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Revenue Projection Table */}
                    <div className="rounded-lg overflow-hidden border border-white/10 bg-white/3">
                        <div className="bg-white/5 px-8 py-5 border-b border-white/10">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                                {isES ? 'Proyección 5 Años' : '5-Year Projection'}
                            </p>
                        </div>
                        {[
                            {
                                time: isES ? '6–12 meses' : '6–12 months',
                                mrr: '50K – 150K€ MRR',
                                mix: '75% ES + 25% Latam',
                                focus: isES ? 'Hotels · Canarias + Madrid' : 'Hotels · Canary Islands + Madrid',
                            },
                            {
                                time: isES ? '12–24 meses' : '12–24 months',
                                mrr: '150K – 350K€ MRR',
                                mix: '60% ES + 40% Latam',
                                focus: isES ? 'Hotels + Marcas + Promotores' : 'Hotels + Brands + Promoters',
                                featured: true,
                            },
                            {
                                time: isES ? '36–60 meses' : '36–60 months',
                                mrr: '+10M ARR',
                                mix: '50% EU + 25% Latam + 25% US',
                                focus: isES ? 'PMS/ERP integración + SoundPass' : 'PMS/ERP integration + SoundPass',
                            },
                        ].map(({ time, mrr, mix, focus, featured }, i) => (
                            <div
                                key={i}
                                className={`grid grid-cols-4 gap-4 px-8 py-6 border-b border-white/10 last:border-0 ${featured ? 'bg-blue-600/5' : ''
                                    }`}
                            >
                                <div>
                                    <p className="text-xs text-gray-500 font-bold mb-2 uppercase">{isES ? 'Plazo' : 'Timeline'}</p>
                                    <p className="font-black text-white">{time}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-bold mb-2 uppercase">MRR / ARR</p>
                                    <p className={`font-black ${featured ? 'text-blue-400' : 'text-white'}`}>{mrr}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-bold mb-2 uppercase">{isES ? 'Mix' : 'Mix'}</p>
                                    <p className="text-xs text-gray-400">{mix}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-bold mb-2 uppercase">Focus</p>
                                    <p className="text-xs text-gray-400">{focus}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════════
          TEAM
      ════════════════════════════════════════════════════════════════════════ */}
            <section className="py-32 px-8 bg-[#1a1a1a]">
                <div className="max-w-6xl mx-auto">
                    <p className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-6">
                        ▸ {isES ? 'El Equipo' : 'The Team'}
                    </p>
                    <h2 className="text-4xl font-black text-white mb-6">
                        {isES ? 'Operadores con ejecución real.' : 'Operators with proven execution.'}
                    </h2>
                    <p className="text-gray-300 max-w-2xl mb-16 text-lg leading-relaxed">
                        {isES
                            ? 'Detrás de SoundLink: años de operaciones reales, contratos ejecutados, red consolidada en hospitality, tech e internacionales. No somos teóricos. Somos builders con cicatrices.'
                            : 'Behind SoundLink: years of real operations, executed contracts, consolidated network in hospitality, tech and international markets. We are not theorists. We are builders with scars.'}
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {team.map((m, i) => (
                            <div key={i} className="p-5 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/20 transition-all hover:bg-white/8">
                                <div className="flex items-center gap-4 mb-4">
                                    <img src={m.photo} alt={m.name} className="w-12 h-12 rounded-lg object-cover bg-white/10" />
                                    <div>
                                        <p className="font-bold text-white text-sm">{m.name}</p>
                                        <p className="text-xs text-blue-400 font-bold uppercase">{m.role}</p>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-400 leading-relaxed">{m.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════════
          INVESTMENT DETAILS - MEJORADO
      ════════════════════════════════════════════════════════════════════════ */}
            <section className="py-32 px-8 bg-[#0f0f0f]">
                <div className="max-w-6xl mx-auto">
                    <p className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-6">
                        ▸ {isES ? 'La Inversión' : 'The Investment'}
                    </p>
                    <h2 className="text-4xl font-black text-white mb-12">
                        {isES ? '200K€ · 100K BA + 100K Apalancamiento Público' : '€200K · €100K BA + €100K Public Leverage'}
                    </h2>

                    <div className="grid lg:grid-cols-2 gap-8 mb-16">
                        {/* Terms Table */}
                        <div className="rounded-lg overflow-hidden border border-white/10 bg-white/3">
                            <div className="bg-white/5 px-8 py-5 border-b border-white/10">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                                    {isES ? 'Condiciones de Ronda' : 'Round Terms'}
                                </p>
                            </div>
                            <div className="divide-y divide-white/10">
                                {[
                                    { label: isES ? 'Ask privado (BA)' : 'Private Ask (BA)', val: '€100.000' },
                                    { label: isES ? 'Equity' : 'Equity', val: '10%' },
                                    { label: isES ? 'Instrumento' : 'Instrument', val: 'SAFE o Equity' },
                                    { label: isES ? 'Valuación post-money' : 'Post-Money Valuation', val: '€1.000.000' },
                                    { label: isES ? 'Apalancamiento público' : 'Public Leverage', val: '€100.000' },
                                    { label: isES ? 'Instrumentos' : 'Leverage Instruments', val: 'Sodecan + I+D + Tax Lease' },
                                    { label: isES ? 'Exit proyectado' : 'Projected Exit', val: 'hasta 9X' },
                                ].map(({ label, val }, i) => (
                                    <div key={i} className="flex justify-between items-center px-8 py-4 hover:bg-white/3 transition-colors">
                                        <span className="text-xs text-gray-400 font-medium">{label}</span>
                                        <span className="font-black text-white">{val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Use of Funds */}
                        <div>
                            <h3 className="text-xl font-black text-white mb-8">
                                {isES ? 'Uso de Fondos (200K€)' : 'Use of Funds (€200K)'}
                            </h3>
                            <div className="space-y-5">
                                {[
                                    {
                                        pct: 50,
                                        label: isES ? 'GTM & Ventas' : 'GTM & Sales',
                                        desc: isES
                                            ? 'Go-to-market España/Latam/US. Equipo comercial B2B Enterprise. Eventos y partnerships estratégicos. Contratación de AE para cadenas hoteleras.'
                                            : 'Spain/Latam/US go-to-market. B2B Enterprise sales team. Strategic events and partnerships. AE hiring for hotel chains.',
                                    },
                                    {
                                        pct: 30,
                                        label: isES ? 'Producto & Tech' : 'Product & Tech',
                                        desc: isES
                                            ? 'AI v2, SoundBand v2, integraciones PMS/ERP, automatización compliance avanzada, SoundPass beta launch.'
                                            : 'AI v2, SoundBand v2, PMS/ERP integrations, advanced compliance automation, SoundPass beta.',
                                    },
                                    {
                                        pct: 20,
                                        label: isES ? 'Operaciones & Legal' : 'Operations & Legal',
                                        desc: isES
                                            ? 'Estructura legal corporativa. Equipo de curaduría/producción en Canarias. Hub operativo escalable. Cumplimiento normativo.'
                                            : 'Corporate legal structure. Curation/production team in Canary Islands. Scalable operational hub. Regulatory compliance.',
                                    },
                                ].map(({ pct, label, desc }, i) => (
                                    <div key={i} className="p-6 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/20 transition-all">
                                        <div className="flex justify-between mb-4">
                                            <p className="font-black text-white">{label}</p>
                                            <p className="text-3xl font-black text-blue-400">{pct}%</p>
                                        </div>
                                        <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-4">
                                            <div className="h-full bg-blue-500 rounded-full" style={{ width: `${pct}%` }} />
                                        </div>
                                        <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Canarias incentives */}
                            <div className="mt-8 p-6 rounded-lg bg-amber-500/10 border border-amber-500/30">
                                <div className="flex items-center gap-2 mb-3">
                                    <MapPin className="w-4 h-4 text-amber-400" />
                                    <p className="text-xs font-black text-amber-400 uppercase tracking-widest">
                                        ZEC · SODECAN · I+D
                                    </p>
                                </div>
                                <p className="text-xs text-amber-300/90 leading-relaxed">
                                    {isES
                                        ? 'Startup en Canarias: Sodecan apalanca capital público sin dilución. I+D deductions. Tax Lease. Cada €1 privado → €2.5 impacto real.'
                                        : 'Startup in Canary Islands: Sodecan leverages public capital without dilution. R&D deductions. Tax Lease. Every €1 private → €2.5 real impact.'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════════
          CTA
      ════════════════════════════════════════════════════════════════════════ */}
            <section className="py-40 px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-8">
                        {isES ? 'Únete a la próxima ola\nde operaciones B2B.' : 'Join the next wave\nof B2B operations.'}
                    </h1>

                    <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                        {isES
                            ? 'Estamos construyendo el estándar operativo para experiencias presenciales a escala. Si ves la música como herramienta de negocio medible, hablemos.'
                            : 'We\'re building the operational standard for live experiences at scale. If you see music as a measurable business tool, let\'s talk.'}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Link
                            href="mailto:nicolas.doyopro@gmail.com"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-black rounded-lg hover:bg-blue-500 hover:text-white transition-all text-base"
                        >
                            <Mail className="w-5 h-5" />
                            nicolas.doyopro@gmail.com
                        </Link>
                        <Link
                            href="https://calendar.app.google/3MWqCUTqt16YJQDE6"
                            target="_blank"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-black rounded-lg hover:border-blue-400 hover:text-blue-400 transition-all text-base"
                        >
                            <Calendar className="w-5 h-5" />
                            {isES ? 'Agendar reunión' : 'Schedule meeting'}
                        </Link>
                    </div>

                    <div className="text-xs text-gray-500 space-y-1">
                        <p>Nicolás A. Civatti · Founder & CEO</p>
                        <p>SoundLink Music S.L. · Islas Canarias, España</p>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════════════════════════════════════ */}
            <footer className="border-t border-white/8 py-8 px-8 bg-[#0f0f0f]">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
                    <span>© 2026 SoundLink Music S.L. · {isES ? 'Todos los derechos reservados' : 'All rights reserved'}</span>
                    <span>{isES ? 'Presentación privada · No distribuir' : 'Private presentation · Do not distribute'}</span>
                    <Link href="https://doyo.pro" target="_blank" className="hover:text-gray-400 transition-colors">
                        Powered by DOYO.PRO
                    </Link>
                </div>
            </footer>
        </div>
    )
}