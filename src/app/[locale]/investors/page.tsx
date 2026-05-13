'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
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
    AlertCircle,
    RefreshCw,
    Database,
    Cpu,
    Lock,
    Sparkles,
    LineChart,
    PieChart,
    Waves,
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
// COMPONENTS
// ═════════════════════════════════════════════════════════════════════════════
function Label({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-[9px] font-black uppercase tracking-[0.4em] text-blue-400 mb-8 block">
            ▸ {children}
        </p>
    )
}

function H1({ children }: { children: React.ReactNode }) {
    return (
        <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.92] tracking-tight text-white mb-8"
            style={{ letterSpacing: '-0.04em' }}
        >
            {children}
        </h1>
    )
}

function H2({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    return (
        <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-black leading-[1.0] tracking-tight text-white ${className}`}
            style={{ letterSpacing: '-0.02em' }}
        >
            {children}
        </h2>
    )
}

function StatBox({ val, label, sub, accent = false }: { val: string; label: string; sub: string; accent?: boolean }) {
    return (
        <div className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-blue-500/40 transition-all duration-300 group">
            <div className={`text-3xl lg:text-4xl font-black mb-2 group-hover:text-blue-400 transition-colors ${accent ? 'text-blue-400' : 'text-white'}`}>
                {val}
            </div>
            <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-1">{label}</p>
            <p className="text-xs text-slate-600">{sub}</p>
        </div>
    )
}

function ProblemCard({ num, Icon, title, desc }: { num: string; Icon: React.ComponentType<{ className: string }>; title: string; desc: string }) {
    return (
        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-red-500/5 to-transparent border border-red-500/20 hover:border-red-500/40 transition-colors duration-300 overflow-hidden group">
            <div className="absolute -top-8 -right-8 text-8xl font-black text-red-500/5 group-hover:text-red-500/10 transition-colors">
                {num}
            </div>
            <div className="relative z-10 w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-6 group-hover:bg-red-500/20 transition-colors">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="font-black text-base text-white mb-3 uppercase tracking-wide">{title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
        </div>
    )
}

function TeamCard({ name, role, photo, bio }: { name: string; role: string; photo: string; bio: string }) {
    return (
        <div className="group p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:bg-white/[0.06]">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 border border-blue-500/20 group-hover:border-blue-500/40 transition-colors">
                    <img src={photo} alt={name} className="w-full h-full object-cover" />
                </div>
                <div>
                    <p className="font-black text-sm text-white leading-tight">{name}</p>
                    <p className="text-[11px] font-black text-blue-400 uppercase tracking-wider mt-0.5">{role}</p>
                </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">{bio}</p>
        </div>
    )
}

// ═════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═════════════════════════════════════════════════════════════════════════════
export default function InvestorDeckFinal() {
    const [locale, setLocale] = useState<'es' | 'en'>('es')
    const router = useRouter()

    useEffect(() => {
        const isES = typeof window !== 'undefined' && window.location.pathname.includes('/es')
        setLocale(isES ? 'es' : 'en')
    }, [])

    const isES = locale === 'es'

    const switchLanguage = (newLocale: 'es' | 'en') => {
        setLocale(newLocale)
        const pathname = typeof window !== 'undefined' ? window.location.pathname : ''
        const parts = pathname.split('/')
        parts[1] = newLocale
        router.push(parts.join('/'))
    }

    const team = [
        {
            name: 'Nicolás A. Civatti',
            role: 'Founder & CEO',
            photo: '/nicolas-civatti.png',
            bio: isES
                ? 'Músico, productor y operador B2B. +10.000 contrataciones validadas en España y Latam sin capital externo. Construyó SoundLink desde cero.'
                : 'Musician, producer and B2B operator. +10,000 validated bookings in Spain and Latam without external capital. Built SoundLink from scratch.',
        },
        {
            name: 'Lucas Minetti',
            role: 'Head of Product',
            photo: '/lucas.png',
            bio: isES
                ? '+10 años UX/UI. Especialista en interfaces que simplifican operaciones complejas. Obsesionado con product excellence B2B.'
                : '+10 years UX/UI. Specialist in interfaces that simplify complex operations. Obsessed with B2B product excellence.',
        },
        {
            name: 'Nik Levenberg',
            role: 'Strategic Partner — US',
            photo: '/nik.png',
            bio: isES
                ? '25 años en tech, startups y capital de riesgo en EE.UU. Asesor en GTM global, financiación y expansión internacional.'
                : '25 years in tech, startups and VC in the US. Advisor on global GTM, fundraising and international expansion.',
        },
        {
            name: 'Juan Parodi',
            role: 'Strategic Partner',
            photo: '/juan.png',
            bio: isES
                ? '+20 años en negocios y formación ejecutiva. Mentor de emprendedores España/Latam. Referente en sostenibilidad corporativa.'
                : '+20 years in business development. Mentor to entrepreneurs Spain/Latam. Corporate sustainability reference.',
        },
        {
            name: 'Ivan Novakovic',
            role: 'Finance & Legal Advisor',
            photo: '/ivan.png',
            bio: isES
                ? 'Abogado especialista en Derecho y Economía. Expert en Fintech, Blockchain, Capital Markets y pagos digitales.'
                : 'Lawyer specialized in Law & Economics. Expert in Fintech, Blockchain, Capital Markets and digital payments.',
        },
        {
            name: 'Graciana Virasoro',
            role: 'Head Office & Accounts',
            photo: '/graciana.png',
            bio: isES
                ? 'Especialista en gestión end-to-end de cuentas B2B. Construye relaciones de largo plazo con clientes estratégicos.'
                : 'Specialist in end-to-end B2B account management. Builds long-term relationships with strategic clients.',
        },
        {
            name: 'Martín M. Foco',
            role: 'Partner & Business Development',
            photo: '/martin.png',
            bio: isES
                ? 'Expertise en gestión empresarial. Impulsa expansión comercial hacia nuevos mercados con visión financiera y cultural.'
                : 'Expertise in business management. Drives commercial expansion into new markets with financial and cultural vision.',
        },
        {
            name: 'Joaquín Lagos Aguirre',
            role: 'Head of Studio',
            photo: '/joaquin.png',
            bio: isES
                ? 'Músico multi-instrumentista, ingeniero de sonido con +20 años. Garantiza calidad técnica y artística en cada ejecución.'
                : 'Multi-instrumentalist musician, sound engineer with +20 years. Ensures technical and artistic quality in every execution.',
        },
    ]

    return (
        <div className="min-h-screen bg-[#0a0f1e] text-white antialiased overflow-x-hidden">
            {/* ════════════════════════════════════════════════════════════════════════
          NAV
      ════════════════════════════════════════════════════════════════════════ */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 h-14 border-b border-white/[0.06] bg-[#0a0f1e]/90 backdrop-blur-md">
                <div className="flex items-center gap-3">
                    <img src="/soundlink-icono.gif" alt="" className="w-7 h-7" />
                    <div>
                        <p className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-600">SoundLink</p>
                        <p className="text-xs font-black tracking-tight text-white leading-none">Music OS</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-slate-600 hidden sm:block">
                        {isES ? 'Presentación Privada' : 'Private Presentation'}
                    </span>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/20">
                        <button
                            onClick={() => switchLanguage('en')}
                            className={`text-[10px] font-black transition-colors ${locale === 'en' ? 'text-white' : 'text-white/50 hover:text-white/70'}`}
                        >
                            🇬🇧 EN
                        </button>
                        <div className="w-px h-4 bg-white/20" />
                        <button
                            onClick={() => switchLanguage('es')}
                            className={`text-[10px] font-black transition-colors ${locale === 'es' ? 'text-white' : 'text-white/50 hover:text-white/70'}`}
                        >
                            🇪🇸 ES
                        </button>
                    </div>
                    <Link
                        href="https://calendar.app.google/3MWqCUTqt16YJQDE6"
                        target="_blank"
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 transition-all text-xs font-black"
                    >
                        <Calendar className="w-3.5 h-3.5" />
                        {isES ? 'Agendar' : 'Book'}
                    </Link>
                </div>
            </nav>

            {/* ════════════════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════════════ */}
            <section className="relative pt-32 pb-32 px-6 overflow-hidden bg-[#080d1a]">
                {/* Atmospheric effects */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-blue-700/6 rounded-full blur-[140px]" />
                    <div className="absolute top-1/3 right-1/3 w-[600px] h-[500px] bg-purple-700/4 rounded-full blur-[120px]" />
                </div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Badge */}
                    <div className="flex items-center gap-3 mb-12 max-w-fit">
                        <div className="w-11 h-11 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                            <Sparkles className="w-5 h-5 text-blue-400" />
                        </div>
                        <div className="text-left">
                            <p className="text-[8px] uppercase tracking-[0.3em] text-slate-600 font-black">
                                SoundLink Music S.L. · Islas Canarias
                            </p>
                            <p className="text-[9px] uppercase tracking-[0.3em] text-blue-400 font-black">Pre-Seed Round 2026</p>
                        </div>
                    </div>

                    {/* Hero headline — provocador */}
                    <H1>
                        {isES ? (
                            <>
                                Las empresas gastan millones en música.
                                <br />
                                Nadie mide <span className="text-blue-400">si funciona.</span>
                            </>
                        ) : (
                            <>
                                Companies spend millions on music.
                                <br />
                                No one measures <span className="text-blue-400">if it works.</span>
                            </>
                        )}
                    </H1>

                    <p className="text-lg md:text-xl text-slate-400 max-w-3xl mb-16 leading-relaxed font-medium">
                        {isES
                            ? 'SoundBand es el primer sistema agéntico de music management B2B: de la selección de artistas al compliance legal, todo automatizado, trazable y con ROI medible. Para hoteles, marcas y venues a escala.'
                            : 'SoundBand is the first agentic B2B music management system: from artist selection to legal compliance, fully automated, traceable and with measurable ROI. For hotels, brands and venues at scale.'}
                    </p>

                    {/* Investment box — 4 columns */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.08] rounded-3xl overflow-hidden border border-white/10 mb-8 backdrop-blur-sm">
                        {[
                            { label: isES ? 'Ask privado (BA)' : 'Private ask (BA)', val: '100.000€', sub: 'Business Angels' },
                            { label: isES ? 'Apalancamiento' : 'Public leverage', val: '100.000€', sub: 'Sodecan + Deducciones' },
                            { label: isES ? 'Equity' : 'Equity', val: '10%', sub: 'SAFE o Equity directo' },
                            { label: isES ? 'Runway' : 'Runway', val: '18+ meses', sub: 'Hasta break-even' },
                        ].map(({ label, val, sub }, i) => (
                            <div key={i} className="bg-[#0a0f1e] px-6 py-6 border-r border-b border-white/[0.06] last:border-r-0 last:border-b-0">
                                <p className="text-[8px] uppercase tracking-[0.3em] text-slate-600 font-black mb-2">{label}</p>
                                <p className="text-2xl lg:text-3xl font-black text-white mb-1">{val}</p>
                                <p className="text-[10px] text-slate-700">{sub}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-[10px] text-slate-700 font-medium">
                        * {isES
                            ? 'Sodecan, deducciones I+D, ZEC/RIC en Canarias — sin dilución adicional de equity'
                            : 'Sodecan, R&D deductions, ZEC/RIC in Canary Islands — no additional equity dilution'}
                    </p>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════════
          TRACTION — HERO STAT
      ════════════════════════════════════════════════════════════════════════ */}
            <section className="py-20 px-6 border-b border-white/[0.06] bg-[#080d1a]">
                <div className="max-w-6xl mx-auto">
                    <p className="text-center text-base md:text-lg text-blue-300 font-semibold mb-16 leading-relaxed max-w-4xl mx-auto">
                        {isES
                            ? '2025: España bate récords en turismo (97M visitantes, 13.5% del PIB) y live music (€725M). Las marcas nunca han tenido más presupuesto para experiencias. Nunca ha existido un sistema para gestionarlas.'
                            : '2025: Spain breaks records in tourism (97M visitors, 13.5% of GDP) and live music (€725M). Brands never had more budget for experiences. A rigorous management system has never existed.'}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { val: '+850K€', label: isES ? 'Gestionados' : 'Managed' },
                            { val: '+8.000', label: isES ? 'Gigs ejecutados' : 'Gigs executed' },
                            { val: '20%', label: isES ? 'Margen neto' : 'Net margin' },
                            { val: '100%', label: isES ? 'Compliance' : 'Compliance' },
                        ].map(({ val, label }, i) => (
                            <div key={i} className="text-center p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-blue-500/30 transition-all">
                                <p className="text-3xl md:text-4xl font-black text-blue-400 mb-1">{val}</p>
                                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">{label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════════
          PROBLEM
      ════════════════════════════════════════════════════════════════════════ */}
            <section className="py-32 px-6 bg-[#0a0f1e] border-b border-white/[0.06]">
                <div className="max-w-6xl mx-auto">
                    <Label>{isES ? 'El Reto' : 'The Challenge'}</Label>

                    {/* Big stat callout */}
                    <div className="mb-20 p-10 md:p-14 rounded-3xl bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20 overflow-hidden relative">
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-500/5 rounded-full blur-3xl" />
                        <div className="relative">
                            <p className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                                {isES
                                    ? 'Un hotel de lujo gasta 500K€—2M€ anuales en música sin medir retorno.'
                                    : 'A luxury hotel spends €500K—€2M annually on music without measuring return.'}
                            </p>
                            <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
                                {isES
                                    ? 'Sin un sistema, ese presupuesto se gestiona por WhatsApp, sin contratos validados, sin seguros, sin KPIs, sin saber si genera ocupación o solo ruido.'
                                    : 'Without a system, that budget is managed by WhatsApp, without validated contracts, insurance, KPIs, without knowing if it generates occupancy or just noise.'}
                            </p>
                        </div>
                    </div>

                    <H2 className="mb-14">
                        {isES ? 'Cuatro fricciones que\nningún competidor ha resuelto.' : 'Four frictions no competitor\nhas solved.'}
                    </H2>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {[
                            {
                                num: '01',
                                Icon: AlertCircle,
                                title: isES ? 'Millones en música. Cero métricas.' : 'Millions on music. Zero metrics.',
                                desc: isES
                                    ? 'El 80% de empresas no tiene control real. Decisiones por intuición. Ningún sistema registra qué funciona.'
                                    : '80% of companies have no real control. Decisions by intuition. No system records what works.',
                            },
                            {
                                num: '02',
                                Icon: Lock,
                                title: isES ? 'Riesgo legal invisibilizado.' : 'Invisible legal risk.',
                                desc: isES
                                    ? 'Sin contratos validados, seguros ni licencias SGAE/BIEM, cada evento acumula riesgo que la marca desconoce.'
                                    : 'Without validated contracts, insurance or SGAE/BIEM licenses, every event accumulates hidden risk.',
                            },
                            {
                                num: '03',
                                Icon: RefreshCw,
                                title: isES ? 'Escalabilidad imposible sin IA.' : 'Scalability impossible without AI.',
                                desc: isES
                                    ? 'Una cadena de 50 hoteles no puede garantizar calidad en el venue 50 que en el 1 sin automatización.'
                                    : 'A chain of 50 hotels cannot guarantee quality at venue 50 like venue 1 without automation.',
                            },
                            {
                                num: '04',
                                Icon: Database,
                                title: isES ? 'Cero datos históricos B2B.' : 'Zero B2B historical data.',
                                desc: isES
                                    ? 'Ningún competidor registra qué música genera revenue, qué artistas retienen clientes o qué horarios maximizan la experiencia.'
                                    : 'No competitor records which music generates revenue, which artists retain customers or which times maximize experience.',
                            },
                        ].map((p, i) => (
                            <ProblemCard key={i} {...p} />
                        ))}
                    </div>

                    <div className="mt-16 p-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 text-center">
                        <p className="text-sm font-black text-blue-300 tracking-wide uppercase">
                            {isES
                                ? 'CON SOUNDBAND: AUTOMATIZACIÓN, COMPLIANCE, TRAZABILIDAD Y ROI MEDIBLE.'
                                : 'WITH SOUNDBAND: AUTOMATION, COMPLIANCE, TRACEABILITY AND MEASURABLE ROI.'}
                        </p>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════════
          ANTES VS DESPUÉS
      ════════════════════════════════════════════════════════════════════════ */}
            <section className="py-32 px-6 bg-[#080d1a] border-b border-white/[0.06]">
                <div className="max-w-6xl mx-auto">
                    <Label>{isES ? 'La Transformación' : 'The Transformation'}</Label>
                    <H2 className="mb-16">
                        {isES ? 'De caos operativo a infraestructura agéntica.' : 'From operational chaos to agentic infrastructure.'}
                    </H2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* SIN */}
                        <div className="p-10 rounded-3xl bg-gradient-to-br from-red-500/5 to-transparent border border-red-500/20">
                            <p className="text-base font-black text-red-400 uppercase tracking-widest mb-8">
                                ❌ {isES ? 'Sin SoundBand' : 'Without SoundBand'} ({isES ? 'Hoy' : 'Today'})
                            </p>
                            <div className="space-y-4">
                                {(isES
                                    ? [
                                        'Director de RRSS elige artista por Instagram',
                                        'Contrato en PDF por WhatsApp',
                                        'Sin seguro de artista ni validación legal',
                                        '12 horas de gestión por evento',
                                        'Sin saber si funcionó o generó ROI',
                                        'Caos total si hay cancelación',
                                    ]
                                    : [
                                        'Social media director picks artist from Instagram',
                                        'Contract via WhatsApp PDF',
                                        'No artist insurance or legal validation',
                                        '12 hours of management per event',
                                        'No idea if it worked or generated ROI',
                                        'Total chaos if cancellation happens',
                                    ]
                                ).map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 text-red-400 text-xs font-black mt-0.5 flex-shrink-0">
                                            ✕
                                        </div>
                                        <p className="text-sm text-slate-300 leading-relaxed pt-0.5">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CON */}
                        <div className="p-10 rounded-3xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
                            <p className="text-base font-black text-blue-400 uppercase tracking-widest mb-8">
                                ✓ {isES ? 'Con SoundBand' : 'With SoundBand'}
                            </p>
                            <div className="space-y-4">
                                {(isES
                                    ? [
                                        'IA + curador experto selecciona por Brand DNA',
                                        'Contrato validado, generado automáticamente',
                                        'Seguro incluido y auditado por especialista legal',
                                        '0 horas. Sistema opera solo. Zero-touch.',
                                        'Dashboard de ROI post-evento con datos medibles',
                                        'Sustitución agéntica automática en 2 horas',
                                    ]
                                    : [
                                        'AI + expert curator selects by Brand DNA',
                                        'Validated contract, auto-generated',
                                        'Insurance included and audited by legal specialist',
                                        '0 hours. System operates alone. Zero-touch.',
                                        'Post-event ROI dashboard with measurable data',
                                        'Automatic agentic substitution in 2 hours',
                                    ]
                                ).map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 text-blue-400 text-xs font-black mt-0.5 flex-shrink-0">
                                            ✓
                                        </div>
                                        <p className="text-sm text-slate-300 leading-relaxed pt-0.5">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════════
          SOLUTION
      ════════════════════════════════════════════════════════════════════════ */}
            <section className="py-32 px-6 bg-[#0a0f1e]">
                <div className="max-w-6xl mx-auto">
                    <Label>{isES ? 'La Solución' : 'The Solution'}</Label>

                    <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
                        {/* Left */}
                        <div>
                            <H2 className="mb-6">
                                {isES ? 'Infraestructura agéntica.\nNo una agencia.' : 'Agentic infrastructure.\nNot an agency.'}
                            </H2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-10">
                                {isES
                                    ? 'SoundBand es un sistema operativo: de la selección de artistas al compliance legal, todo automatizado, trazable y escalable. Años de operaciones reales generan el único activo que no se puede comprar: un sistema que aprende qué música funciona en qué contexto de marca.'
                                    : 'SoundBand is an operating system: from artist selection to legal compliance, fully automated, traceable and scalable. Years of real operations generate the only asset that cannot be bought: a system that learns which music works in which brand context.'}
                            </p>

                            <div className="space-y-3">
                                {(isES
                                    ? [
                                        'Booking inteligente por Brand DNA + contexto',
                                        'Contratos validados automáticamente',
                                        'Seguros y licencias SGAE/BIEM incluidas',
                                        'Dashboard de ROI por evento',
                                        'Sustitución agéntica ante imprevisto',
                                        'Facturación única mensual',
                                    ]
                                    : [
                                        'Intelligent booking by Brand DNA + context',
                                        'Auto-validated contracts',
                                        'Insurance and SGAE/BIEM licenses included',
                                        'ROI dashboard by event',
                                        'Agentic substitution for unforeseen events',
                                        'Single monthly invoice',
                                    ]
                                ).map((item, i) => (
                                    <div key={i} className="flex items-center gap-2.5">
                                        <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                                        <span className="text-sm text-slate-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right — AI Capabilities */}
                        <div>
                            <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mb-8">
                                {isES ? 'Ventaja tecnológica · 6 Capas' : 'Tech Advantage · 6 Layers'}
                            </p>

                            <div className="space-y-4">
                                {[
                                    {
                                        Icon: BrainCircuit,
                                        title: isES ? 'Matching Intelligence' : 'Matching Intelligence',
                                        desc: isES
                                            ? 'Motor que cruza Brand DNA, KPIs de negocio y disponibilidad de artistas para el match perfecto sin intervención humana.'
                                            : 'Engine that crosses Brand DNA, business KPIs and artist availability for perfect match without human intervention.',
                                    },
                                    {
                                        Icon: Zap,
                                        title: isES ? 'Sustitución Agéntica' : 'Agentic Substitution',
                                        desc: isES
                                            ? 'Ante cancelaciones, detecta, busca alternativa y reasigna talento automáticamente. Operación nunca se detiene.'
                                            : 'Detects cancellations, finds alternative and reassigns talent automatically. Operation never stops.',
                                    },
                                    {
                                        Icon: ShieldCheck,
                                        title: isES ? 'Compliance 360°' : '360° Compliance',
                                        desc: isES
                                            ? 'Validación automática de contratos, seguros, licencias y requisitos laborales con pista de auditoría completa.'
                                            : 'Automatic validation of contracts, insurance, licenses and labor requirements with complete audit trail.',
                                    },
                                    {
                                        Icon: Cpu,
                                        title: isES ? 'ADN Computado' : 'Computed DNA',
                                        desc: isES
                                            ? 'Sistema aprende de cada evento: qué funcionó, con qué artista, en qué contexto. Recomendaciones más precisas que criterio humano.'
                                            : 'System learns from every event: what worked, which artist, which context. More precise recommendations than human judgment.',
                                    },
                                ].map(({ Icon, title, desc }, i) => (
                                    <div key={i} className="p-5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-blue-500/30 transition-all group">
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:bg-blue-500/20 transition-colors mt-0.5">
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="font-black text-sm text-white mb-1">{title}</p>
                                                <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Gigs Packs */}
                    <div className="mt-24">
                        <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mb-8">
                            {isES ? 'Modelo de Negocio · Branded Gigs' : 'Business Model · Branded Gigs'}
                        </p>

                        <div className="grid md:grid-cols-3 gap-5 mb-8">
                            {[
                                {
                                    name: 'Gigs 1',
                                    sessions: isES ? '1 sesión/día/venue' : '1 session/day/venue',
                                    example: isES ? 'Lobby hotel 4★ — dúo jazz viernes/sábados' : '4★ hotel lobby — jazz duo Friday/Saturday',
                                },
                                {
                                    name: 'Gigs 2',
                                    sessions: isES ? '2 sesiones/día/venue' : '2 sessions/day/venue',
                                    example: isES ? 'Resort 5★ — brunch + cena con DJs' : '5★ resort — brunch + dinner with DJs',
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
                                    className={`p-6 rounded-2xl border transition-all ${featured
                                            ? 'bg-blue-600/10 border-blue-500/40 ring-2 ring-blue-500/20'
                                            : 'bg-white/[0.04] border-white/10 hover:border-blue-500/30'
                                        }`}
                                >
                                    <div className="flex gap-1 mb-5">
                                        {Array.from({ length: 3 }).map((_, j) => (
                                            <div
                                                key={j}
                                                className={`h-1.5 flex-1 rounded-full ${j <= i ? 'bg-blue-500' : 'bg-white/10'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <p className="font-black text-base text-white mb-2">{name}</p>
                                    <p className="text-[10px] text-blue-400 font-black mb-4">{sessions}</p>
                                    <p className="text-[11px] text-slate-400 leading-relaxed">{example}</p>
                                </div>
                            ))}
                        </div>

                        {/* Revenue calculator */}
                        <div className="p-8 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                            <p className="text-[10px] font-black text-green-400 uppercase tracking-[0.3em] mb-6">
                                {isES ? 'Calculadora de Revenue' : 'Revenue Calculator'}
                            </p>
                            <div className="grid sm:grid-cols-3 gap-6">
                                {[
                                    { label: isES ? 'Hotel 5★ con 3 outlets' : '5★ Hotel with 3 outlets', val: 'Gigs 3 × 3', sub: '9 sesiones/día' },
                                    { label: isES ? 'Revenue estimado' : 'Estimated revenue', val: '~36.000€/mes', sub: 'por cliente' },
                                    {
                                        label: isES ? 'Margen SoundLink' : 'SoundLink margin',
                                        val: '~7.200€/mes',
                                        sub: '20% por cliente',
                                    },
                                ].map(({ label, val, sub }, i) => (
                                    <div key={i} className="text-center">
                                        <p className="text-[9px] text-slate-500 mb-2 uppercase tracking-wide font-black">{label}</p>
                                        <p className="text-2xl md:text-3xl font-black text-green-400 mb-1">{val}</p>
                                        <p className="text-[10px] text-slate-600">{sub}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 pt-6 border-t border-green-500/20 text-[10px] text-slate-500">
                                {isES
                                    ? '📊 Con 10 clientes tipo: ~72K€ MRR. Con 20 clientes: ~144K€ MRR. Objetivo 18–24 meses: 50–150K€ MRR.'
                                    : '📊 With 10 typical clients: ~€72K MRR. With 20 clients: ~€144K MRR. Target 18–24 months: €50–150K MRR.'}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════════
          PIPELINE
      ════════════════════════════════════════════════════════════════════════ */}
            <section className="py-32 px-6 bg-[#080d1a] border-b border-white/[0.06]">
                <div className="max-w-6xl mx-auto">
                    <Label>{isES ? 'Roadmap & Pipeline' : 'Roadmap & Pipeline'}</Label>
                    <H2 className="mb-6">
                        {isES ? 'SoundLink Pipeline 2026–2027.' : 'SoundLink Pipeline 2026–2027.'}
                    </H2>
                    <p className="text-slate-400 max-w-2xl mb-16 text-lg leading-relaxed">
                        {isES
                            ? 'Objetivo: 50K€ MRR en 18 meses. Target: 150K€ MRR en 24 meses. Break-even sostenido.'
                            : 'Objective: €50K MRR at 18 months. Target: €150K MRR at 24 months. Sustained break-even.'}
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                        {[
                            {
                                Icon: Target,
                                title: 'Hotels & Hospitality',
                                mrr: '50–100K€',
                                featured: true,
                                desc: isES
                                    ? 'Validado. Canarias, Madrid, expansión vía partners hoteleros.'
                                    : 'Validated. Canary Islands, Madrid, expansion via hotel partners.',
                            },
                            {
                                Icon: Music,
                                title: 'Marcas & Retail',
                                mrr: '+50K€',
                                desc: isES ? 'Cerveceras, moda, retail. Branded gigs on-premise.' : 'Breweries, fashion, retail. Branded gigs on-premise.',
                            },
                            {
                                Icon: Globe,
                                title: 'EU + Latam + US',
                                mrr: 'Partnerships',
                                desc: isES ? 'Expansión vía partners estratégicos.' : 'Expansion via strategic partners.',
                            },
                            {
                                Icon: Rocket,
                                title: 'SoundPass & New',
                                mrr: '2027+',
                                desc: isES ? 'Nuevas verticales en paralelo.' : 'New verticals in parallel.',
                            },
                        ].map(({ Icon, title, mrr, featured, desc }, i) => (
                            <div
                                key={i}
                                className={`p-6 rounded-2xl border transition-all ${featured
                                        ? 'bg-blue-600/5 border-blue-500/30 ring-2 ring-blue-500/10'
                                        : 'bg-white/[0.04] border-white/10 hover:border-blue-500/30'
                                    }`}
                            >
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <h4 className="font-black text-sm text-white mb-1">{title}</h4>
                                <p className={`text-base font-black mb-3 ${featured ? 'text-blue-400' : 'text-slate-300'}`}>{mrr}</p>
                                <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Revenue table */}
                    <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#080d1a]">
                        <div className="bg-white/[0.04] px-8 py-5 border-b border-white/[0.06]">
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
                                {isES ? 'Proyección de Revenue' : 'Revenue Projection'}
                            </p>
                        </div>
                        {[
                            {
                                time: isES ? '6–12 meses' : '6–12 months',
                                mrr: '50K – 150K€ MRR',
                                mix: isES ? '75% España + 25% Latam' : '75% Spain + 25% Latam',
                                focus: isES ? 'Hotels · Canarias + Madrid' : 'Hotels · Canary Islands + Madrid',
                            },
                            {
                                time: isES ? '12–24 meses' : '12–24 months',
                                mrr: '150K – 350K€ MRR',
                                mix: isES ? '60% España + 40% Latam' : '60% Spain + 40% Latam',
                                focus: isES ? 'Hotels + Marcas + Promotores' : 'Hotels + Brands + Promoters',
                                featured: true,
                            },
                            {
                                time: isES ? '36–60 meses' : '36–60 months',
                                mrr: '+10M ARR',
                                mix: '50% EU + 25% Latam + 25% US',
                                focus: isES ? 'Global PMS/ERP · SoundPass' : 'Global PMS/ERP · SoundPass',
                            },
                        ].map(({ time, mrr, mix, focus, featured }, i) => (
                            <div
                                key={i}
                                className={`grid grid-cols-3 gap-8 px-8 py-6 border-b border-white/[0.06] last:border-0 ${featured ? 'bg-blue-600/5' : ''
                                    }`}
                            >
                                <div>
                                    <p className="text-[9px] text-slate-600 uppercase tracking-widest mb-2 font-black">
                                        {isES ? 'Plazo' : 'Timeline'}
                                    </p>
                                    <p className="text-base font-black text-white">{time}</p>
                                </div>
                                <div>
                                    <p className="text-[9px] text-slate-600 uppercase tracking-widest mb-2 font-black">MRR / ARR</p>
                                    <p className={`text-base font-black mb-1 ${featured ? 'text-blue-400' : 'text-white'}`}>{mrr}</p>
                                    <p className="text-[10px] text-slate-700">{mix}</p>
                                </div>
                                <div>
                                    <p className="text-[9px] text-slate-600 uppercase tracking-widest mb-2 font-black">Focus</p>
                                    <p className="text-sm text-slate-400">{focus}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════════
          TEAM
      ════════════════════════════════════════════════════════════════════════ */}
            <section className="py-32 px-6 bg-[#0a0f1e] border-b border-white/[0.06]">
                <div className="max-w-6xl mx-auto">
                    <Label>{isES ? 'El Equipo' : 'The Team'}</Label>
                    <H2 className="mb-6">
                        {isES ? 'Operadores con años de ejecución real.' : 'Operators with years of real execution.'}
                    </H2>
                    <p className="text-slate-400 max-w-2xl mb-16 text-lg leading-relaxed">
                        {isES
                            ? 'Detrás de SoundLink hay años de operaciones en música, contratos ejecutados y una red consolidada en hospitality, tech e internacionales.'
                            : 'Behind SoundLink are years of music operations, executed contracts and a consolidated network in hospitality, tech and international markets.'}
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {team.map((m, i) => (
                            <TeamCard key={i} {...m} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════════
          INVESTMENT
      ════════════════════════════════════════════════════════════════════════ */}
            <section className="py-32 px-6 bg-[#080d1a]">
                <div className="max-w-6xl mx-auto">
                    <Label>{isES ? 'La Inversión' : 'The Investment'}</Label>
                    <H2 className="mb-6">
                        {isES ? '200K€ · 100K BA + 100K\nApalancamiento público.' : '€200K · €100K BA + €100K\nPublic leverage.'}
                    </H2>

                    <div className="grid lg:grid-cols-2 gap-16 mb-16">
                        {/* Terms */}
                        <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0a0f1e]">
                            <div className="bg-white/[0.04] px-8 py-5 border-b border-white/[0.06]">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
                                    {isES ? 'Condiciones de la Ronda' : 'Round Terms'}
                                </p>
                            </div>
                            <div className="divide-y divide-white/[0.06]">
                                {[
                                    { label: isES ? 'Ask privado (BA)' : 'Private ask (BA)', val: '100.000€', accent: true },
                                    { label: isES ? 'Equity ofrecido' : 'Equity offered', val: '10%' },
                                    { label: isES ? 'Instrumento' : 'Instrument', val: 'SAFE o Equity' },
                                    { label: isES ? 'Valuación post-money' : 'Post-money valuation', val: '1.000.000€' },
                                    { label: isES ? 'Apalancamiento público' : 'Public leverage', val: '100.000€' },
                                    { label: isES ? 'Instrumentos' : 'Leverage instruments', val: 'Sodecan + Deducciones + Tax Lease' },
                                    { label: isES ? 'Exit proyectado' : 'Projected exit', val: 'hasta 9X', accent: true },
                                ].map(({ label, val, accent }, i) => (
                                    <div key={i} className="flex justify-between items-center px-8 py-5">
                                        <span className="text-xs text-slate-400">{label}</span>
                                        <span className={`text-base font-black ${accent ? 'text-blue-400' : 'text-white'}`}>{val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Use of funds */}
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-8">
                                {isES ? 'Uso de Fondos (200K€)' : 'Use of Funds (€200K)'}
                            </p>

                            <div className="space-y-5">
                                {[
                                    {
                                        pct: 50,
                                        label: isES ? 'Marketing & Ventas' : 'Marketing & Sales',
                                        desc: isES
                                            ? 'Go-to-market España/Latam/US, equipo comercial, eventos, partnerships estratégicos.'
                                            : 'Spain/Latam/US go-to-market, commercial team, events, strategic partnerships.',
                                    },
                                    {
                                        pct: 30,
                                        label: isES ? 'Desarrollo de Producto' : 'Product Development',
                                        desc: isES
                                            ? 'IA, SoundBand v2, integraciones PMS/ERP, SoundPass, roadmap 2026–2027.'
                                            : 'AI, SoundBand v2, PMS/ERP integrations, SoundPass, 2026–2027 roadmap.',
                                    },
                                    {
                                        pct: 20,
                                        label: isES ? 'Admin & Operaciones' : 'Admin & Operations',
                                        desc: isES
                                            ? 'Estructura legal, equipo de producción/curaduría, hub físico en Canarias.'
                                            : 'Legal structure, production/curation team, physical hub in Canary Islands.',
                                    },
                                ].map(({ pct, label, desc }, i) => (
                                    <div key={i} className="p-6 rounded-xl bg-white/[0.04] border border-white/10 hover:border-blue-500/30 transition-all">
                                        <div className="flex justify-between items-center mb-4">
                                            <p className="font-black text-sm text-white">{label}</p>
                                            <p className="text-3xl font-black text-blue-400">{pct}%</p>
                                        </div>
                                        <div className="h-2 bg-white/10 rounded-full mb-4 overflow-hidden">
                                            <div className="h-full bg-blue-500 rounded-full transition-all" style={{ width: `${pct}%` }} />
                                        </div>
                                        <p className="text-xs text-slate-500">{desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Canarias badge */}
                            <div className="mt-8 p-6 rounded-2xl border border-amber-500/30 bg-amber-500/5 hover:border-amber-500/50 transition-all">
                                <p className="text-xs font-black text-amber-400 uppercase tracking-widest mb-3">
                                    🏝️ ZEC · SODECAN · DEDUCCIONES I+D
                                </p>
                                <p className="text-xs text-amber-300/90 leading-relaxed">
                                    {isES
                                        ? 'Startup en Canarias: elegible para Sodecan, deducciones I+D+i y Tax Lease. Multiplica el impacto de cada euro privado sin dilución adicional.'
                                        : 'Startup in Canary Islands: eligible for Sodecan, R&D deductions and Tax Lease. Multiplies the impact of each private euro without additional dilution.'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════════
          CTA
      ════════════════════════════════════════════════════════════════════════ */}
            <section className="py-40 px-6 bg-gradient-to-b from-[#0a0f1e] to-[#080d1a] relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-blue-700/5 rounded-full blur-[140px]" />
                </div>

                <div className="relative max-w-3xl mx-auto text-center">
                    <H1>
                        {isES ? 'Únete a la revolución\nde la música B2B.' : 'Join the B2B music\nrevolution.'}
                    </H1>

                    <p className="text-slate-400 text-xl mb-12 max-w-xl mx-auto leading-relaxed">
                        {isES
                            ? 'Estamos construyendo el estándar de operaciones musicales para marcas a escala. Si crees en el poder de la música como herramienta de negocio, hablemos.'
                            : 'We\'re building the standard for music operations for brands at scale. If you believe in the power of music as a business tool, let\'s talk.'}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <Link
                            href="mailto:nicolas.doyopro@gmail.com"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-black rounded-full hover:bg-blue-500 hover:text-white transition-all text-base shadow-lg"
                        >
                            <Mail className="w-5 h-5" />
                            nicolas.doyopro@gmail.com
                        </Link>
                        <Link
                            href="https://calendar.app.google/3MWqCUTqt16YJQDE6"
                            target="_blank"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-black rounded-full hover:border-blue-400 hover:text-blue-400 transition-all text-base"
                        >
                            <Calendar className="w-5 h-5" />
                            {isES ? 'Agendar reunión' : 'Schedule a meeting'}
                        </Link>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-slate-700">
                        <span>Nicolás A. Civatti · Founder & CEO</span>
                        <span>·</span>
                        <span>SoundLink Music S.L.</span>
                        <span>·</span>
                        <span>Islas Canarias, España</span>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════════════════════════════════════ */}
            <footer className="border-t border-white/[0.06] py-8 px-6 bg-[#0a0f1e]">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-700">
                    <span>© 2026 SoundLink Music S.L. · {isES ? 'Todos los derechos reservados' : 'All rights reserved'}</span>
                    <span>{isES ? 'Presentación privada · No distribuir' : 'Private presentation · Do not distribute'}</span>
                    <Link href="https://doyo.pro" target="_blank" className="hover:text-slate-600 transition-colors">
                        Powered by DOYO.PRO
                    </Link>
                </div>
            </footer>
        </div>
    )
}