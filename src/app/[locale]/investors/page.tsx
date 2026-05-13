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
export default function InvestorDeckV7() {
    const isES = typeof window !== 'undefined' && window.location.pathname.includes('/es')

    const team = [
        {
            name: 'Nicolás A. Civatti',
            role: 'Founder & CEO',
            photo: '/nicolas-civatti.png',
            bio: isES
                ? 'Músico, productor y operador B2B. +10.000 contrataciones gestionadas en España y Latam sin capital externo. Construyó la infraestructura inicial validando con revenue real.'
                : 'Musician, producer and B2B operator. +10,000 bookings managed in Spain and Latam without external capital. Built the initial infrastructure validating with real revenue.',
        },
        {
            name: 'Lucas Minetti',
            role: 'Head of Product',
            photo: '/lucas.png',
            bio: isES
                ? '+10 años en UX/UI y diseño de productos digitales. Especialista en traducir operativas B2B complejas en interfaces Zero-Friction.'
                : '+10 years in UX/UI and digital product design. Specialist in translating complex B2B operations into Zero-Friction interfaces.',
        },
        {
            name: 'Nik Levenberg',
            role: 'Strategic Partner — US',
            photo: '/nik.png',
            bio: isES
                ? '25 años en tecnología, startups y VC en EE.UU. Arquitecto de la estrategia financiera, GTM global y levantamiento de capital.'
                : '25 years in tech, startups and VC in the US. Architect of financial strategy, global GTM and capital raising.',
        },
        {
            name: 'Juan Parodi',
            role: 'Strategic Partner',
            photo: '/juan.png',
            bio: isES
                ? '+20 años en desarrollo de negocios corporativos. Mentor y enlace crítico con tomadores de decisión en grandes cuentas Enterprise.'
                : '+20 years in corporate business development. Mentor and critical liaison with decision-makers in large Enterprise accounts.',
        },
        {
            name: 'Ivan Novakovic',
            role: 'Finance & Legal Advisor',
            photo: '/ivan.png',
            bio: isES
                ? 'Abogado especialista en Derecho y Economía. Expert en Capital Markets, Fintech y Compliance. Asegura el blindaje legal de nuestra arquitectura transaccional.'
                : 'Lawyer specialized in Law & Economics. Expert in Capital Markets, Fintech and Compliance. Ensures legal protection of our transactional architecture.',
        },
        {
            name: 'Graciana Virasoro',
            role: 'Head of Office & Accounts',
            photo: '/graciana.png',
            bio: isES
                ? 'Especialista en escalabilidad B2B. Gestiona el ciclo de vida del cliente (LTV) y la adopción en cadenas hoteleras.'
                : 'B2B scalability specialist. Manages customer lifecycle (LTV) and adoption in hotel chains.',
        },
        {
            name: 'Martín M. Foco',
            role: 'Partner & Bus. Dev',
            photo: '/martin.png',
            bio: isES
                ? 'Impulsa expansión territorial y apertura de nuevos mercados operando en la intersección de cultura y escalabilidad financiera.'
                : 'Drives territorial expansion and new market opening at the intersection of culture and financial scalability.',
        },
        {
            name: 'Joaquín Lagos Aguirre',
            role: 'Head of Studio',
            photo: '/joaquin.png',
            bio: isES
                ? 'Ingeniero de sonido con +20 años. Garantiza que el output de la plataforma mantiene el estándar premium en cada ejecución.'
                : 'Sound engineer with +20 years. Ensures platform output maintains premium standard in every execution.',
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
                        <p className="text-[10px] text-gray-500 tracking-wider">Music Operations</p>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    {/* Language toggle */}
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
          HERO
      ════════════════════════════════════════════════════════════════════════ */}
            <section className="relative pt-40 pb-32 px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] overflow-hidden">
                {/* Gradient effects */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px]" />
                </div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Badge */}
                    <div className="mb-12 inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        <span className="text-xs font-bold text-gray-300">
                            {isES ? 'SOUNDLINK MUSIC S.L. · ISLAS CANARIAS' : 'SOUNDLINK MUSIC S.L. · CANARY ISLANDS'}
                        </span>
                        <span className="text-xs font-bold text-blue-400">PRE-SEED 2026</span>
                    </div>

                    {/* Main headline */}
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

                    <p className="text-lg text-gray-300 max-w-2xl mb-12 leading-relaxed">
                        {isES
                            ? 'SoundBand es la infraestructura agéntica que automatiza la gestión musical B2B de extremo a extremo: booking inteligente, compliance legal, contratos validados y ROI medible. Para hoteles, marcas y venues a escala.'
                            : 'SoundBand is the agentic infrastructure that automates end-to-end B2B music management: intelligent booking, legal compliance, validated contracts and measurable ROI. For hotels, brands and venues at scale.'}
                    </p>

                    {/* Investment box */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
                        {[
                            { label: isES ? 'Ask Privado' : 'Private Ask', val: '100.000€', sub: 'Business Angels' },
                            { label: isES ? 'Apalancamiento' : 'Public Leverage', val: '100.000€', sub: 'Sodecan + Deducciones' },
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
          MARKET VALIDATION
      ════════════════════════════════════════════════════════════════════════ */}
            <section className="py-24 px-8 bg-[#0f0f0f] border-y border-white/8">
                <div className="max-w-6xl mx-auto">
                    <p className="text-center text-sm text-gray-400 font-bold uppercase tracking-widest mb-16">
                        {isES ? 'Validación Operativa · Dataset Real' : 'Operational Validation · Real Dataset'}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
                        {[
                            { val: '+850K€', label: isES ? 'Gestionados' : 'Managed', Icon: DollarSign },
                            { val: '+8.000', label: isES ? 'Gigs Ejecutados' : 'Gigs Executed', Icon: Music },
                            { val: '20%', label: isES ? 'Margen Neto' : 'Net Margin', Icon: TrendingUp },
                            { val: '0%', label: isES ? 'Riesgo Legal' : 'Legal Risk', Icon: CheckCircle2 },
                            { val: '+2 Años', label: isES ? 'LTV Retención' : 'LTV Retention', Icon: RefreshCw },
                            { val: '100%', label: 'Compliance', Icon: ShieldCheck },
                        ].map(({ val, label, Icon }, i) => (
                            <div key={i} className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-all text-center">
                                <Icon className="w-6 h-6 text-blue-400 mx-auto mb-3" />
                                <p className="text-2xl font-black text-white mb-2">{val}</p>
                                <p className="text-xs text-gray-400 font-bold uppercase">{label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center">
                        <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
                            {isES
                                ? '2025: España bate récords en turismo (97M visitantes, 13.5% del PIB) y live music (€725M). Las marcas nunca han tenido más presupuesto para experiencias en vivo. Nunca ha existido un sistema para automatizarlas.'
                                : '2025: Spain breaks records in tourism (97M visitors, 13.5% of GDP) and live music (€725M). Brands never had more budget for live experiences. A system to automate them has never existed.'}
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
                        ▸ {isES ? 'El Reto' : 'The Challenge'}
                    </p>

                    {/* Big stat callout */}
                    <div className="mb-20 p-12 rounded-2xl bg-gradient-to-br from-red-500/15 to-transparent border border-red-500/30">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                            {isES
                                ? 'Un hotel de lujo gasta 500K€—2M€ anuales en música sin medir retorno.'
                                : 'A luxury hotel spends €500K—€2M annually on music without measuring return.'}
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
                            {isES
                                ? 'Sin un sistema operativo, ese presupuesto se gestiona por WhatsApp, sin contratos validados, sin seguros, sin KPIs de retorno, sin saber si la música genera ocupación o solo ruido de fondo.'
                                : 'Without an operating system, that budget is managed by WhatsApp, without validated contracts, insurance, return KPIs, without knowing if music generates occupancy or just background noise.'}
                        </p>
                    </div>

                    <h2 className="text-4xl font-black text-white mb-12">
                        {isES ? 'Cuatro fricciones que ningún competidor ha resuelto' : 'Four frictions no competitor has solved'}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                num: '01',
                                Icon: AlertCircle,
                                title: isES ? 'Millones en música. Cero métricas.' : 'Millions on music. Zero metrics.',
                                desc: isES
                                    ? 'El 80% de empresas no tiene control real sobre el ROI de su música. Las decisiones se toman por intuición, WhatsApp y correo. Ningún sistema registra qué funciona, cuánto cuesta ni por qué se elige cada artista.'
                                    : '80% of companies have no real control over music ROI. Decisions made by intuition, WhatsApp and email. No system records what works, costs, or why each artist is chosen.',
                            },
                            {
                                num: '02',
                                Icon: Lock,
                                title: isES ? 'Riesgo legal invisibilizado' : 'Invisible legal liability',
                                desc: isES
                                    ? 'Sony v. Marriott evidenció el riesgo. Sin contratos validados, seguros de artistas ni licencias SGAE/BIEM verificadas, cada evento es un pasivo legal que la marca desconoce. Acumulación tóxica en derechos de autor.'
                                    : 'Sony v. Marriott highlighted the risk. Without validated contracts, artist insurance or verified SGAE/BIEM licenses, every event is hidden legal liability. Toxic accumulation in copyright rights.',
                            },
                            {
                                num: '03',
                                Icon: RefreshCw,
                                title: isES ? 'Escalabilidad imposible sin IA' : 'Scalability impossible without AI',
                                desc: isES
                                    ? 'Una cadena de 50 hoteles no puede garantizar la misma calidad musical en el venue 50 que en el 1 sin automatización. El modelo artesanal de agencia es un cuello de botella logístico. Se necesita infraestructura, no coordinadores.'
                                    : 'A chain of 50 hotels cannot guarantee the same music quality at venue 50 as venue 1 without automation. The artisanal agency model is a logistical bottleneck. Infrastructure is needed, not coordinators.',
                            },
                            {
                                num: '04',
                                Icon: Database,
                                title: isES ? 'Cero trazabilidad de datos B2B' : 'Zero B2B data traceability',
                                desc: isES
                                    ? 'Ningún competidor ha construido una capa de datos sobre decisiones musicales B2B. No existe histórico de qué géneros generan más consumo, qué artistas retienen clientes o qué horarios maximizan la experiencia.'
                                    : 'No competitor has built a data layer on B2B music decisions. No historical record of which genres generate consumption, which artists retain customers or which times maximize experience.',
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
                        ▸ {isES ? 'La Transformación' : 'The Transformation'}
                    </p>
                    <h2 className="text-4xl font-black text-white mb-16">
                        {isES ? 'De caos operativo a infraestructura agéntica.' : 'From operational chaos to agentic infrastructure.'}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Before */}
                        <div className="p-10 rounded-2xl bg-white/5 border border-red-500/20">
                            <div className="flex items-center gap-2 mb-8">
                                <X className="w-5 h-5 text-red-400" />
                                <p className="text-sm font-bold text-red-400 uppercase tracking-wider">
                                    {isES ? 'Sin SoundBand (Hoy)' : 'Without SoundBand (Today)'}
                                </p>
                            </div>
                            <ul className="space-y-4">
                                {(isES
                                    ? [
                                        'Director de RRSS elige artista por Instagram',
                                        'Contrato en PDF por WhatsApp (sin validación)',
                                        'Sin seguro de artista ni cobertura legal',
                                        '12 horas de gestión manual por evento',
                                        'Sin medición de ROI ni impacto en negocio',
                                        'Caos total si hay cancelación o imprevisto',
                                        'Facturación fragmentada en múltiples invoices',
                                        'Cero cumplimiento SGAE/BIEM auditable',
                                    ]
                                    : [
                                        'Social director picks artist from Instagram',
                                        'Contract via WhatsApp PDF (unvalidated)',
                                        'No artist insurance or legal coverage',
                                        '12 hours manual management per event',
                                        'No ROI measurement or business impact',
                                        'Total chaos if cancellation or issue occurs',
                                        'Fragmented billing in multiple invoices',
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
                                    {isES ? 'Con SoundBand' : 'With SoundBand'}
                                </p>
                            </div>
                            <ul className="space-y-4">
                                {(isES
                                    ? [
                                        'IA + curador experto selecciona por Brand DNA',
                                        'Contrato validado, generado automáticamente',
                                        'Seguro incluido y auditado por legal',
                                        'Zero-touch: sistema opera solo',
                                        'Dashboard de ROI con métricas post-evento',
                                        'Sustitución agéntica automática en 2h',
                                        'Una factura mensual unificada',
                                        '100% compliance SGAE/BIEM automatizado',
                                    ]
                                    : [
                                        'AI + expert curator selects by Brand DNA',
                                        'Validated contract, auto-generated',
                                        'Insurance included and legally audited',
                                        'Zero-touch: system operates alone',
                                        'ROI dashboard with post-event metrics',
                                        'Automatic agentic substitution in 2h',
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
          SOLUTION
      ════════════════════════════════════════════════════════════════════════ */}
            <section className="py-32 px-8 bg-[#1a1a1a]">
                <div className="max-w-6xl mx-auto">
                    <p className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-6">
                        ▸ {isES ? 'La Solución' : 'The Solution'}
                    </p>

                    <h2 className="text-4xl font-black text-white mb-8">
                        {isES ? 'SoundBand OS: Infraestructura Agéntica.' : 'SoundBand OS: Agentic Infrastructure.'}
                    </h2>

                    <p className="text-gray-300 text-lg max-w-3xl mb-12 leading-relaxed">
                        {isES
                            ? 'No somos una agencia con software ni un marketplace de artistas. Somos una capa de infraestructura operativa especializada que automatiza cada aspecto de la gestión musical B2B. Años de operaciones reales generan el único activo que no se puede comprar: un sistema que aprende qué música funciona en qué contexto de marca.'
                            : 'We are not an agency with software or an artist marketplace. We are an operational infrastructure layer that automates every aspect of B2B music management. Years of real operations generate the only asset that cannot be bought: a system that learns which music works in which brand context.'}
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {/* Left - Core Features */}
                        <div>
                            <h3 className="text-2xl font-black text-white mb-8">{isES ? 'Capacidades Centrales' : 'Core Capabilities'}</h3>
                            <ul className="space-y-3">
                                {(isES
                                    ? [
                                        'Booking inteligente por Brand DNA + contexto',
                                        'Contratos generados y validados automáticamente',
                                        'Seguros y licencias SGAE/BIEM incluidas',
                                        'Dashboard de ROI por evento y venue',
                                        'Sustitución agéntica ante cancelaciones',
                                        'Facturación única mensual para todo el volumen',
                                    ]
                                    : [
                                        'Intelligent booking by Brand DNA + context',
                                        'Auto-generated and validated contracts',
                                        'Insurance and SGAE/BIEM licenses included',
                                        'ROI dashboard by event and venue',
                                        'Agentic substitution for cancellations',
                                        'Single monthly invoice for all volume',
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
                            <h3 className="text-2xl font-black text-white mb-8">{isES ? 'Ventaja Tecnológica' : 'Tech Moat'}</h3>
                            <div className="space-y-4">
                                {[
                                    {
                                        Icon: BrainCircuit,
                                        title: isES ? 'Matching Intelligence' : 'Matching Intelligence',
                                        desc: isES
                                            ? 'Motor IA que cruza Brand DNA, KPIs de negocio, presupuesto y disponibilidad de artistas para generar el match perfecto sin intervención humana.'
                                            : 'AI engine that crosses Brand DNA, business KPIs, budget and artist availability for perfect match without human intervention.',
                                    },
                                    {
                                        Icon: Zap,
                                        title: isES ? 'Sustitución Agéntica' : 'Agentic Substitution',
                                        desc: isES
                                            ? 'Ante cancelaciones, el sistema detecta, busca alternativa validada y reasigna talento automáticamente. Operación nunca se detiene.'
                                            : 'On cancellations, system detects, finds validated alternative and reassigns talent automatically. Operation never stops.',
                                    },
                                    {
                                        Icon: ShieldCheck,
                                        title: isES ? 'Compliance 360°' : '360° Compliance',
                                        desc: isES
                                            ? 'Validación automática de contratos, seguros, licencias SGAE/BIEM, requisitos laborales. Pista de auditoría completa para cada contratación.'
                                            : 'Automatic validation of contracts, insurance, SGAE/BIEM licenses, labor requirements. Complete audit trail for each hire.',
                                    },
                                    {
                                        Icon: BarChart3,
                                        title: isES ? 'ROI Dashboard' : 'ROI Dashboard',
                                        desc: isES
                                            ? 'Conexión entre programación musical y métricas de negocio: ocupación, consumo medio, NPS, engagement. Justificación de gasto con datos.'
                                            : 'Connection between music programming and business metrics: occupancy, average spend, NPS, engagement. Spending justification with data.',
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
                        <h3 className="text-2xl font-black text-white mb-8">{isES ? 'Modelo de Negocio · Branded Gigs' : 'Business Model · Branded Gigs'}</h3>

                        <div className="grid md:grid-cols-3 gap-6 mb-10">
                            {[
                                {
                                    name: 'Gigs 1',
                                    sessions: isES ? '1 sesión/día/venue' : '1 session/day/venue',
                                    example: isES ? 'Lobby hotel 4★ — dúo jazz viernes/sábados' : '4★ hotel lobby — jazz duo Friday/Saturday',
                                },
                                {
                                    name: 'Gigs 2',
                                    sessions: isES ? '2 sesiones/día/venue' : '2 sessions/day/venue',
                                    example: isES ? 'Resort 5★ — brunch acústico + cena con DJs' : '5★ resort — acoustic brunch + DJ dinner',
                                    featured: true,
                                },
                                {
                                    name: 'Gigs 3',
                                    sessions: isES ? '3 sesiones/día/venue' : '3 sessions/day/venue',
                                    example: isES ? 'Gran Hotel — pool bar + welcome + gala' : 'Grand Hotel — pool bar + welcome + gala',
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
                            <div className="grid grid-cols-3 gap-6 text-center">
                                {[
                                    { label: isES ? 'Al Artista' : 'Artist', pct: '70%' },
                                    { label: isES ? 'Booking + Billing + Compliance' : 'Booking + Billing + Compliance', pct: '10%' },
                                    { label: isES ? 'Margen SoundLink' : 'SoundLink Margin', pct: '20%' },
                                ].map(({ label, pct }, i) => (
                                    <div key={i}>
                                        <p className="text-2xl font-black text-white mb-1">{pct}</p>
                                        <p className="text-xs text-gray-400">{label}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs text-gray-500 mt-6 text-center">
                                {isES
                                    ? '1 Gig mín. 190€ · 10–20 gigs/mes por venue típico = 1.900–3.800€ MRR'
                                    : '1 Gig min. €190 · 10–20 gigs/month per typical venue = €1,900–€3,800 MRR'}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════════
          MARKET OPPORTUNITY
      ════════════════════════════════════════════════════════════════════════ */}
            <section className="py-32 px-8 bg-[#0f0f0f]">
                <div className="max-w-6xl mx-auto">
                    <p className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-6">
                        ▸ {isES ? 'Oportunidad de Mercado' : 'Market Opportunity'}
                    </p>
                    <h2 className="text-4xl font-black text-white mb-12">
                        {isES ? 'Dos mercados de récord. Un puente único.' : 'Two record markets. One unique bridge.'}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {[
                            { label: '$38.2B', desc: isES ? 'Live Music Global 2025' : 'Global Live Music 2025' },
                            { label: '$91.4B', desc: isES ? 'Music Tourism Global 2024' : 'Global Music Tourism 2024' },
                            { label: '€725M', desc: isES ? 'Live Music España 2024' : 'Live Music Spain 2024' },
                            { label: '97M', desc: isES ? 'Turistas España 2025' : 'Spain Tourists 2025' },
                            { label: '+96%', desc: isES ? 'Crecimiento Live Music Madrid' : 'Madrid Live Music Growth' },
                            { label: '€4.2B', desc: isES ? 'Inversión hotelera España' : 'Spain Hotel Investment' },
                        ].map(({ label, desc }, i) => (
                            <div key={i} className="p-8 rounded-lg bg-white/5 border border-white/10 text-center">
                                <p className="text-4xl font-black text-blue-400 mb-3">{label}</p>
                                <p className="text-sm text-gray-400">{desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-10 text-center">
                        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                            {isES
                                ? 'SoundLink opera en la intersección única de Live Music global y Hospitality & Turismo en España — los dos sectores con mayor crecimiento simultáneo. TAM inicial: €725M España. TAM expandido (Latam + EU): $10B+.'
                                : 'SoundLink operates at the unique intersection of global Live Music and Hospitality & Tourism in Spain — the two sectors with highest simultaneous growth. Initial TAM: €725M Spain. Expanded TAM (Latam + EU): $10B+.'}
                        </p>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════════
          PIPELINE & ROADMAP
      ════════════════════════════════════════════════════════════════════════ */}
            <section className="py-32 px-8 bg-[#1a1a1a]">
                <div className="max-w-6xl mx-auto">
                    <p className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-6">
                        ▸ {isES ? 'Roadmap y Pipeline' : 'Roadmap & Pipeline'}
                    </p>
                    <h2 className="text-4xl font-black text-white mb-6">
                        {isES ? 'SoundLink Pipeline 2026–2027.' : 'SoundLink Pipeline 2026–2027.'}
                    </h2>
                    <p className="text-gray-300 max-w-2xl mb-12 text-lg">
                        {isES
                            ? 'Objetivo: 50K€ MRR en 18 meses. Target: 150K€ MRR en 24 meses. Break-even sostenido sin nueva ronda.'
                            : 'Objective: €50K MRR at 18 months. Target: €150K MRR at 24 months. Sustained break-even without new round.'}
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
                                    ? 'Segmento validado. Canarias, Madrid, expansión vía partners hoteleros 4-5★.'
                                    : 'Validated segment. Canary Islands, Madrid, expansion via 4-5★ hotel partners.',
                            },
                            {
                                Icon: Music,
                                title: 'Marcas & Retail',
                                mrr: '+50K€ MRR',
                                timeframe: '12m',
                                desc: isES
                                    ? 'Cerveceras, moda, banca. Gigs como herramienta de marketing on-premise.'
                                    : 'Breweries, fashion, banking. Gigs as on-premise marketing tool.',
                            },
                            {
                                Icon: Globe,
                                title: 'EU + Latam + US',
                                mrr: 'Enterprise',
                                timeframe: '18–24m',
                                desc: isES ? 'Expansión vía partners estratégicos. Primeras conversaciones activas.' : 'Expansion via strategic partners. First conversations active.',
                            },
                            {
                                Icon: Rocket,
                                title: 'SoundPass & New',
                                mrr: '2027+',
                                timeframe: 'New verticals',
                                desc: isES
                                    ? 'Plataforma B2C, upselling de tickets, nuevas verticales.'
                                    : 'B2C platform, ticket upselling, new verticals.',
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
                                {isES ? 'Proyección de Revenue 5 Años' : '5-Year Revenue Projection'}
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
                                focus: isES ? 'PMS/ERP global · SoundPass live' : 'Global PMS/ERP · SoundPass live',
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
            <section className="py-32 px-8 bg-[#0f0f0f]">
                <div className="max-w-6xl mx-auto">
                    <p className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-6">
                        ▸ {isES ? 'El Equipo' : 'The Team'}
                    </p>
                    <h2 className="text-4xl font-black text-white mb-6">
                        {isES ? 'Operadores con ejecución real.' : 'Operators with real execution.'}
                    </h2>
                    <p className="text-gray-300 max-w-2xl mb-16 text-lg leading-relaxed">
                        {isES
                            ? 'Detrás de SoundLink hay años de operaciones en música, contratos ejecutados, y una red consolidada en hospitality, tecnología e internacionales. No somos teóricos.'
                            : 'Behind SoundLink are years of music operations, executed contracts, and a consolidated network in hospitality, technology and international markets. We are not theorists.'}
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {team.map((m, i) => (
                            <div key={i} className="p-5 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/20 transition-all hover:bg-white/8">
                                <div className="flex items-center gap-4 mb-4">
                                    <img src={m.photo} alt={m.name} className="w-12 h-12 rounded-lg object-cover" />
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
          INVESTMENT DETAILS
      ════════════════════════════════════════════════════════════════════════ */}
            <section className="py-32 px-8 bg-[#1a1a1a]">
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
                                    {isES ? 'Condiciones de la Ronda' : 'Round Terms'}
                                </p>
                            </div>
                            <div className="divide-y divide-white/10">
                                {[
                                    { label: isES ? 'Ask privado (BA)' : 'Private ask (BA)', val: '100.000€' },
                                    { label: isES ? 'Equity' : 'Equity', val: '10%' },
                                    { label: isES ? 'Instrumento' : 'Instrument', val: 'SAFE o Equity' },
                                    { label: isES ? 'Valuación post-money' : 'Post-money valuation', val: '1.000.000€' },
                                    { label: isES ? 'Apalancamiento público' : 'Public leverage', val: '100.000€' },
                                    { label: isES ? 'Instrumentos' : 'Leverage instruments', val: 'Sodecan + I+D + Tax Lease' },
                                    { label: isES ? 'Exit proyectado' : 'Projected exit', val: 'hasta 9X' },
                                ].map(({ label, val }, i) => (
                                    <div key={i} className="flex justify-between items-center px-8 py-4">
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
                                            ? 'Go-to-market España/Latam/US, equipo comercial B2B Enterprise, eventos, partnerships estratégicos.'
                                            : 'Spain/Latam/US go-to-market, B2B Enterprise sales team, events, strategic partnerships.',
                                    },
                                    {
                                        pct: 30,
                                        label: isES ? 'Desarrollo de Producto' : 'Product Development',
                                        desc: isES
                                            ? 'IA v2, SoundBand product, integraciones PMS/ERP, automatización compliance, SoundPass beta.'
                                            : 'AI v2, SoundBand product, PMS/ERP integrations, compliance automation, SoundPass beta.',
                                    },
                                    {
                                        pct: 20,
                                        label: isES ? 'Admin & Operaciones' : 'Admin & Operations',
                                        desc: isES
                                            ? 'Estructura legal corporativa, equipo de curaduría/producción, hub operativo en Canarias.'
                                            : 'Corporate legal structure, curation/production team, operational hub in Canary Islands.',
                                    },
                                ].map(({ pct, label, desc }, i) => (
                                    <div key={i} className="p-6 rounded-lg bg-white/5 border border-white/10">
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
                                        ZEC · SODECAN · DEDUCCIONES I+D
                                    </p>
                                </div>
                                <p className="text-xs text-amber-300/90 leading-relaxed">
                                    {isES
                                        ? 'Startup en Canarias: Sodecan, deducciones I+D+i y Tax Lease. Multiplica impacto de cada euro privado sin dilución adicional de equity.'
                                        : 'Startup in Canary Islands: Sodecan, R&D deductions and Tax Lease. Multiplies impact of each private euro without additional equity dilution.'}
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
                        {isES ? 'Únete a la revolución\nde la música B2B.' : 'Join the B2B music\nrevolution.'}
                    </h1>

                    <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                        {isES
                            ? 'Estamos construyendo el estándar de operaciones musicales para marcas a escala. Si crees en el poder de la música como herramienta de negocio medible, hablemos.'
                            : 'We\'re building the standard for music operations for brands at scale. If you believe in the power of music as a measurable business tool, let\'s talk.'}
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