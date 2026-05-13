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
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500/80 mb-6 block">
            {children}
        </p>
    )
}

function H1({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    return (
        <h1
            className={`text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-white mb-8 ${className}`}
            style={{ letterSpacing: '-0.05em' }}
        >
            {children}
        </h1>
    )
}

function H2({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    return (
        <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tighter text-white ${className}`}
            style={{ letterSpacing: '-0.03em' }}
        >
            {children}
        </h2>
    )
}

function MetricStrip({ isES }: { isES: boolean }) {
    return (
        <div className="w-full bg-white/[0.02] border-y border-white/10 py-10">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    <div>
                        <p className="text-3xl font-black text-white mb-1"><Counter end={8000} suffix="+" /></p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                            {isES ? 'Operaciones Ejecutadas' : 'Operations Executed'}
                        </p>
                    </div>
                    <div>
                        <p className="text-3xl font-black text-white mb-1"><Counter end={850} prefix="€" suffix="K+" /></p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                            {isES ? 'Capital Gestionado' : 'Capital Managed'}
                        </p>
                    </div>
                    <div>
                        <p className="text-3xl font-black text-white mb-1"><Counter end={0} /></p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                            {isES ? 'Incidentes Legales' : 'Legal Incidents'}
                        </p>
                    </div>
                    <div>
                        <p className="text-3xl font-black text-white mb-1"><Counter end={2} suffix="+" /> {isES ? 'Años' : 'Years'}</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                            {isES ? 'Retención de Clientes' : 'Client Retention'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function DashboardMockup({ type }: { type: 'matching' | 'compliance' | 'analytics' }) {
    if (type === 'matching') {
        return (
            <div className="rounded-2xl border border-white/10 bg-[#0c1222] p-4 shadow-2xl overflow-hidden group">
                <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
                    <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-500/40" />
                        <div className="w-2 h-2 rounded-full bg-amber-500/40" />
                        <div className="w-2 h-2 rounded-full bg-green-500/40" />
                    </div>
                    <div className="text-[9px] font-bold uppercase tracking-widest text-slate-600">AI Matching Engine</div>
                </div>
                <div className="space-y-3">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-white/[0.02] border border-white/5">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex-shrink-0" />
                            <div className="flex-1 space-y-1">
                                <div className="h-2 w-24 bg-white/10 rounded" />
                                <div className="h-1.5 w-16 bg-white/5 rounded" />
                            </div>
                            <div className="text-[9px] font-bold text-blue-400">98% Match</div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
    if (type === 'compliance') {
        return (
            <div className="rounded-2xl border border-white/10 bg-[#0c1222] p-4 shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
                    <div className="text-[9px] font-bold uppercase tracking-widest text-slate-600">Compliance & Legal</div>
                    <div className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 text-[8px] font-bold">ACTIVE</div>
                </div>
                <div className="space-y-4">
                    <div className="flex justify-between items-center text-[10px]">
                        <span className="text-slate-400 text-[10px]">Contract Validation</span>
                        <CheckCircle2 className="w-3 h-3 text-green-500" />
                    </div>
                    <div className="flex justify-between items-center text-[10px]">
                        <span className="text-slate-400 text-[10px]">Insurance Verification</span>
                        <CheckCircle2 className="w-3 h-3 text-green-500" />
                    </div>
                    <div className="flex justify-between items-center text-[10px]">
                        <span className="text-slate-400 text-[10px]">Tax Compliance (ZEC)</span>
                        <CheckCircle2 className="w-3 h-3 text-green-500" />
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-green-500/40" />
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="rounded-2xl border border-white/10 bg-[#0c1222] p-4 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
                <div className="text-[9px] font-bold uppercase tracking-widest text-slate-600">Operational Analytics</div>
            </div>
            <div className="flex items-end gap-1.5 h-24 mb-3">
                {[40, 70, 45, 90, 65, 80, 55, 95].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-blue-600/20 to-blue-400/40 rounded-t-sm" style={{ height: `${h}%` }} />
                ))}
            </div>
            <div className="flex justify-between items-center text-[10px]">
                <span className="text-slate-500">Efficiency</span>
                <span className="text-blue-400 font-bold">+24.8%</span>
            </div>
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
    ]

    return (
        <div className="min-h-screen bg-[#0a0f1e] text-white antialiased overflow-x-hidden">
            {/* ════════════════════════════════════════════════════════════════════════
          NAV
      ════════════════════════════════════════════════════════════════════════ */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 h-16 border-b border-white/[0.06] bg-[#0a0f1e]/80 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                    <img src="/soundlink-icono.gif" alt="" className="w-8 h-8" />
                    <div>
                        <p className="text-[8px] font-bold uppercase tracking-[0.4em] text-blue-500/60">SoundLink</p>
                        <p className="text-sm font-black tracking-tight text-white leading-none">Experience OS</p>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10">
                        <button
                            onClick={() => switchLanguage('en')}
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full transition-all ${locale === 'en' ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20' : 'text-slate-500 hover:text-slate-300'}`}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => switchLanguage('es')}
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full transition-all ${locale === 'es' ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20' : 'text-slate-500 hover:text-slate-300'}`}
                        >
                            ES
                        </button>
                    </div>
                    <Link
                        href="https://calendar.app.google/3MWqCUTqt16YJQDE6"
                        target="_blank"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 transition-all text-[11px] font-black uppercase tracking-wider"
                    >
                        {isES ? 'Agendar Call' : 'Book Strategic Call'}
                    </Link>
                </div>
            </nav>

            {/* ════════════════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════════════ */}
            <section className="relative pt-44 pb-32 px-6 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[800px] bg-blue-600/10 rounded-full blur-[160px]" />
                    <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[140px]" />
                </div>

                <div className="relative max-w-6xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-10">
                        <Sparkles className="w-3 h-3 text-blue-400" />
                        <p className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
                            {isES ? 'Infraestructura de Próxima Generación' : 'Next-Generation Infrastructure'}
                        </p>
                    </div>

                    <H1 className="max-w-5xl">
                        {isES ? (
                            <>
                                El Sistema Operativo para la <span className="text-blue-500">Gestión de Experiencias</span> en Vivo.
                            </>
                        ) : (
                            <>
                                The Operating System for <span className="text-blue-500">Live Experience</span> Management.
                            </>
                        )}
                    </H1>

                    <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mb-12 leading-tight font-medium tracking-tight">
                        {isES
                            ? 'Infraestructura impulsada por IA que automatiza el booking, compliance, pagos y orquestación de personal para marcas de hospitality.'
                            : 'AI-powered infrastructure automating booking, compliance, payments and workforce orchestration for hospitality brands.'}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-20">
                        <Link
                            href="mailto:nicolas.doyopro@gmail.com?subject=Investor Deck Request"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-black rounded-full hover:bg-blue-500 hover:text-white transition-all text-sm tracking-tight"
                        >
                            {isES ? 'Solicitar Investor Deck' : 'Request Investor Deck'}
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                        <Link
                            href="https://calendar.app.google/3MWqCUTqt16YJQDE6"
                            target="_blank"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/10 text-white font-black rounded-full hover:bg-white/10 transition-all text-sm tracking-tight"
                        >
                            {isES ? 'Agendar Call Estratégica' : 'Book Strategic Call'}
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <DashboardMockup type="matching" />
                        <DashboardMockup type="compliance" />
                        <DashboardMockup type="analytics" />
                    </div>
                </div>
            </section>

            <MetricStrip isES={isES} />

            {/* ════════════════════════════════════════════════════════════════════════
           3. THE PROBLEM: A Broken Industry
       ════════════════════════════════════════════════════════════════════════ */}
            <section className="py-32 px-6 bg-[#0a0f1e] border-b border-white/[0.06]">
                <div className="max-w-6xl mx-auto">
                    <Label>{isES ? 'El Desafío Operativo' : 'The Operational Challenge'}</Label>
                    <H2 className="mb-10 max-w-4xl">
                        {isES 
                          ? 'La industria del hospitality está operativamente rota.' 
                          : 'The hospitality industry is operationally broken.'}
                    </H2>
                    <p className="text-lg text-slate-400 max-w-3xl mb-20 leading-relaxed">
                        {isES
                            ? 'Las marcas de lujo gastan millones en experiencias en vivo, pero la ejecución sigue siendo manual, fragmentada y carente de visibilidad de ROI. WhatsApp no es una infraestructura empresarial.'
                            : 'Luxury brands spend millions on live experiences, yet execution remains manual, fragmented, and lacking ROI visibility. WhatsApp is not enterprise infrastructure.'}
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: isES ? 'Coordinación Fragmentada' : 'Fragmented Coordination',
                                desc: isES 
                                  ? 'Cientos de proveedores gestionados vía chat. Cero trazabilidad, cero estandarización.' 
                                  : 'Hundreds of vendors managed via chat. Zero traceability, zero standardization.',
                                icon: Users
                            },
                            {
                                title: isES ? 'Riesgo de Compliance' : 'Compliance Risk',
                                desc: isES 
                                  ? 'Contratos inexistentes o inválidos. Riesgos legales y de seguros que amenazan la marca.' 
                                  : 'Non-existent or invalid contracts. Legal and insurance risks threatening the brand.',
                                icon: ShieldCheck
                            },
                            {
                                title: isES ? 'Flujos Manuales' : 'Manual Workflows',
                                desc: isES 
                                  ? 'Invisibilidad de pagos y facturación. Horas de gestión administrativa desperdiciadas.' 
                                  : 'Payment and invoicing invisibility. Wasted hours of administrative management.',
                                icon: RefreshCw
                            },
                            {
                                title: isES ? 'Cero Visibilidad de ROI' : 'Zero ROI Visibility',
                                desc: isES 
                                  ? 'Decisiones basadas en intuición, no en datos. Imposibilidad de medir el impacto real.' 
                                  : 'Decisions based on intuition, not data. Impossibility of measuring real impact.',
                                icon: BarChart3
                            },
                            {
                                title: isES ? 'Sistemas Desconectados' : 'Disconnected Systems',
                                desc: isES 
                                  ? 'La música y las experiencias operan en un silo, lejos del ERP o PMS del hotel.' 
                                  : 'Music and experiences operate in a silo, far from the hotel\'s ERP or PMS.',
                                icon: Layers
                            },
                            {
                                title: isES ? 'Falta de Escalabilidad' : 'Lack of Scalability',
                                desc: isES 
                                  ? 'Imposible replicar la calidad en 50 propiedades sin una infraestructura automatizada.' 
                                  : 'Impossible to replicate quality across 50 properties without automated infrastructure.',
                                icon: TrendingUp
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-blue-500/30 transition-all">
                                <item.icon className="w-6 h-6 text-blue-500 mb-6" />
                                <h3 className="text-lg font-black text-white mb-3 tracking-tight">{item.title}</h3>
                                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════════
           4. THE PLATFORM: Experience Infrastructure
       ════════════════════════════════════════════════════════════════════════ */}
            <section className="py-32 px-6 bg-[#080d1a] border-b border-white/[0.06]">
                <div className="max-w-6xl mx-auto">
                    <Label>{isES ? 'La Plataforma' : 'The Platform'}</Label>
                    <H2 className="mb-20">
                        {isES ? 'Infraestructura, no una agencia.' : 'Infrastructure, not an agency.'}
                    </H2>

                    <div className="grid lg:grid-cols-2 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
                        {[
                            {
                                title: isES ? 'AI Matching Engine' : 'AI Matching Engine',
                                desc: isES 
                                  ? 'Algoritmos propietarios que vinculan el ADN de la marca con el talento óptimo.' 
                                  : 'Proprietary algorithms linking brand DNA with optimal talent.',
                                icon: BrainCircuit,
                                color: 'blue'
                            },
                            {
                                title: isES ? 'Compliance Automático' : 'Automated Compliance',
                                desc: isES 
                                  ? 'Generación y validación de contratos, seguros y licencias en tiempo real.' 
                                  : 'Real-time contract, insurance, and license generation and validation.',
                                icon: Lock,
                                color: 'purple'
                            },
                            {
                                title: isES ? 'Pagos Unificados' : 'Unified Payments',
                                desc: isES 
                                  ? 'Infraestructura de pagos transparente para miles de proveedores a escala global.' 
                                  : 'Transparent payment infrastructure for thousands of vendors at global scale.',
                                icon: Zap,
                                color: 'amber'
                            },
                            {
                                title: isES ? 'Orquestación de Personal' : 'Workforce Orchestration',
                                desc: isES 
                                  ? 'Gestión agéntica de cancelaciones, sustituciones y logística operativa.' 
                                  : 'Agentic management of cancellations, substitutions, and operational logistics.',
                                icon: Users,
                                color: 'emerald'
                            }
                        ].map((module, i) => (
                            <div key={i} className="bg-[#0a0f1e] p-10 md:p-14 hover:bg-[#0c1222] transition-colors group">
                                <module.icon className={`w-10 h-10 mb-8 text-${module.color}-500 group-hover:scale-110 transition-transform`} />
                                <h3 className="text-2xl font-black text-white mb-4 tracking-tighter">{module.title}</h3>
                                <p className="text-slate-400 leading-relaxed max-w-sm">{module.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════════
           5. OPERATIONAL MOAT: Data & Network Effects
       ════════════════════════════════════════════════════════════════════════ */}
            <section className="py-32 px-6 bg-[#0a0f1e] border-b border-white/[0.06] relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
                
                <div className="max-w-6xl mx-auto relative">
                    <Label>{isES ? 'Foso Operativo' : 'Operational Moat'}</Label>
                    <H2 className="mb-10">
                        {isES ? 'Defensibilidad basada en datos.' : 'Data-driven defensibility.'}
                    </H2>
                    <p className="text-lg text-slate-400 max-w-2xl mb-20 leading-relaxed">
                        {isES
                            ? 'Nuestra ventaja no es solo el software, sino el conjunto de datos propietarios de años de ejecución real que optimiza cada nueva operación.'
                            : 'Our advantage isn\'t just software, but the proprietary dataset from years of real execution that optimizes every new operation.'}
                    </p>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            {[
                                {
                                    title: isES ? 'Inteligencia de Comportamiento' : 'Venue Behavior Intelligence',
                                    desc: isES ? 'Base de datos histórica sobre qué tipos de experiencias maximizan la retención de clientes por segmento.' : 'Historical database on which experience types maximize customer retention by segment.'
                                },
                                {
                                    title: isES ? 'Grafo de Red de Proveedores' : 'Supplier Network Graph',
                                    desc: isES ? 'Red validada de miles de profesionales con métricas de performance y cumplimiento legal en tiempo real.' : 'Validated network of thousands of professionals with real-time performance and compliance metrics.'
                                },
                                {
                                    title: isES ? 'Automatización de Workflows' : 'Workflow Automation',
                                    desc: isES ? 'Lógica operativa propietaria que reduce el tiempo de gestión de 12 horas a 0 horas (zero-touch).' : 'Proprietary operational logic reducing management time from 12 hours to 0 hours (zero-touch).'
                                }
                            ].map((moat, i) => (
                                <div key={i} className="flex gap-6">
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                                        <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)]" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-black text-white mb-2">{moat.title}</h4>
                                        <p className="text-sm text-slate-500 leading-relaxed">{moat.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="relative h-full min-h-[300px] rounded-3xl border border-white/10 bg-white/[0.02] flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
                            <div className="relative text-center p-8">
                                <Database className="w-16 h-16 text-blue-500/40 mx-auto mb-6" />
                                <p className="text-4xl font-black text-white mb-2">+100K</p>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{isES ? 'Puntos de Datos Operativos' : 'Operational Data Points'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════════
           6. TRACTION: Validated Execution
       ════════════════════════════════════════════════════════════════════════ */}
            <section className="py-32 px-6 bg-[#080d1a] border-b border-white/[0.06]">
                <div className="max-w-6xl mx-auto text-center">
                    <Label>{isES ? 'Tracción' : 'Traction'}</Label>
                    <H2 className="mb-20">
                        {isES ? 'Ejecución validada a escala.' : 'Validated execution at scale.'}
                    </H2>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
                        {[
                            { val: '8,000+', label: isES ? 'Gigs Ejecutados' : 'Gigs Executed' },
                            { val: '€850K+', label: isES ? 'Procesado' : 'Processed' },
                            { val: '0%', label: isES ? 'Contingencias Legales' : 'Legal Contingencies' },
                            { val: '2.5Y', label: isES ? 'Retención Promedio' : 'Avg. Retention' }
                        ].map((stat, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 group hover:border-blue-500/40 transition-all">
                                <p className="text-4xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">{stat.val}</p>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-wrap items-center justify-center gap-12 grayscale opacity-50">
                        <span className="text-xl font-bold tracking-tighter">MARRIOTT</span>
                        <span className="text-xl font-bold tracking-tighter">MELIÁ</span>
                        <span className="text-xl font-bold tracking-tighter">HILTON</span>
                        <span className="text-xl font-bold tracking-tighter">W HOTELS</span>
                        <span className="text-xl font-bold tracking-tighter">IBEROSTAR</span>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════════
           7. MARKET OPPORTUNITY: Experience Economy
       ════════════════════════════════════════════════════════════════════════ */}
            <section className="py-32 px-6 bg-[#0a0f1e] border-b border-white/[0.06]">
                <div className="max-w-6xl mx-auto">
                    <Label>{isES ? 'Oportunidad de Mercado' : 'Market Opportunity'}</Label>
                    <H2 className="mb-10">
                        {isES ? 'Infraestructura para la economía de la experiencia.' : 'Infrastructure for the experience economy.'}
                    </H2>
                    <p className="text-lg text-slate-400 max-w-2xl mb-20 leading-relaxed">
                        {isES
                            ? 'No somos "music tech". Somos la capa de infraestructura para marcas que necesitan orquestar experiencias físicas a escala global.'
                            : 'We aren\'t "music tech". We are the infrastructure layer for brands that need to orchestrate physical experiences at a global scale.'}
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: isES ? 'Hospitality & Hoteles' : 'Hospitality & Hotels', icon: Globe },
                            { title: isES ? 'Retail & Espacios' : 'Retail & Spaces', icon: Target },
                            { title: isES ? 'Wellness & Lujo' : 'Wellness & Luxury', icon: Sparkles },
                            { title: isES ? 'Turismo Experencial' : 'Experiential Tourism', icon: Rocket }
                        ].map((market, i) => (
                            <div key={i} className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all group">
                                <market.icon className="w-6 h-6 text-blue-500/60 mb-6 group-hover:text-blue-400 transition-colors" />
                                <h4 className="font-black text-white tracking-tight">{market.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════════
           8. BUSINESS MODEL: Scalable SaaS Revenue
       ════════════════════════════════════════════════════════════════════════ */}
            <section className="py-32 px-6 bg-[#080d1a] border-b border-white/[0.06]">
                <div className="max-w-6xl mx-auto">
                    <Label>{isES ? 'Modelo de Negocio' : 'Business Model'}</Label>
                    <H2 className="mb-20">
                        {isES ? 'Ingresos recurrentes y escalables.' : 'Recurring and scalable revenue.'}
                    </H2>

                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {[
                            {
                                title: isES ? 'Suscripción Enterprise' : 'Enterprise Subscription',
                                desc: isES 
                                  ? 'Tarifa recurrente por el uso de la infraestructura de gestión y compliance.' 
                                  : 'Recurring fee for the use of management and compliance infrastructure.'
                            },
                            {
                                title: isES ? 'Tarifa por Operación' : 'Operational Fee',
                                desc: isES 
                                  ? 'Comisión automatizada por cada booking y pago procesado a través del sistema.' 
                                  : 'Automated commission for every booking and payment processed through the system.'
                            },
                            {
                                title: isES ? 'Capa de Inteligencia' : 'Intelligence Layer',
                                desc: isES 
                                  ? 'Monetización de datos y analítica avanzada para optimización de ROI.' 
                                  : 'Data and advanced analytics monetization for ROI optimization.'
                            }
                        ].map((model, i) => (
                            <div key={i} className="p-10 rounded-3xl bg-white/[0.02] border border-white/10">
                                <h4 className="text-xl font-black text-white mb-4 tracking-tight">{model.title}</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">{model.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="p-10 rounded-3xl bg-blue-600/5 border border-blue-500/20 text-center">
                        <p className="text-2xl font-black text-white mb-2">
                            {isES ? 'Objetivo: €150K MRR en 24 meses.' : 'Target: €150K MRR in 24 months.'}
                        </p>
                        <p className="text-sm text-blue-400 font-bold uppercase tracking-widest">
                            {isES ? 'Crecimiento Eficiente en Capital' : 'Capital Efficient Growth'}
                        </p>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════════
           10. INVESTMENT ROUND: Pre-Seed 2026
       ════════════════════════════════════════════════════════════════════════ */}
            <section className="py-32 px-6 bg-[#0a0f1e] border-b border-white/[0.06]">
                <div className="max-w-6xl mx-auto">
                    <Label>{isES ? 'Ronda de Inversión' : 'Investment Round'}</Label>
                    <H2 className="mb-16">
                        {isES ? '€100K Pre-Seed Ask.' : '€100K Pre-Seed Ask.'}
                    </H2>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-4">{isES ? 'Uso de Fondos' : 'Use of Funds'}</p>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-slate-400">{isES ? 'Desarrollo de IA' : 'AI Development'}</span>
                                        <span className="text-sm font-bold text-white">40%</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-slate-400">{isES ? 'Expansión Comercial' : 'Commercial Expansion'}</span>
                                        <span className="text-sm font-bold text-white">40%</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-slate-400">{isES ? 'Operaciones' : 'Operations'}</span>
                                        <span className="text-sm font-bold text-white">20%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 rounded-2xl bg-amber-500/5 border border-amber-500/20">
                                <p className="text-sm font-black text-amber-400 mb-2 uppercase tracking-tight">🏝️ {isES ? 'Ventaja Fiscal Estratégica' : 'Strategic Tax Advantage'}</p>
                                <p className="text-xs text-amber-200/60 leading-relaxed">
                                    {isES 
                                      ? 'Operando desde Canarias con acceso a ZEC (4% IS) y apalancamiento público vía Sodecan, maximizando el impacto de cada euro invertido.' 
                                      : 'Operating from Canary Islands with access to ZEC (4% Corp Tax) and public leverage via Sodecan, maximizing the impact of every euro invested.'}
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="p-10 rounded-3xl bg-blue-600 text-white shadow-2xl shadow-blue-600/20">
                                <h4 className="text-3xl font-black mb-2 tracking-tighter">€100,000</h4>
                                <p className="text-sm font-bold uppercase tracking-widest opacity-80 mb-6">{isES ? 'Ticket Business Angel' : 'Business Angel Ticket'}</p>
                                <Link 
                                    href="mailto:nicolas.doyopro@gmail.com"
                                    className="inline-flex items-center text-sm font-black uppercase tracking-widest border-b-2 border-white pb-1"
                                >
                                    {isES ? 'Contactar para Cierre' : 'Contact for Closing'}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════════
           11. TEAM
       ════════════════════════════════════════════════════════════════════════ */}
            <section className="py-32 px-6 bg-[#080d1a] border-b border-white/[0.06]">
                <div className="max-w-6xl mx-auto">
                    <Label>{isES ? 'Equipo' : 'Team'}</Label>
                    <H2 className="mb-20">
                        {isES ? 'Operadores, no teóricos.' : 'Operators, not theorists.'}
                    </H2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {team.slice(0, 4).map((m, i) => (
                            <div key={i} className="group">
                                <div className="aspect-square rounded-2xl bg-white/5 border border-white/10 mb-6 overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                                    <img src={m.photo} alt={m.name} className="w-full h-full object-cover" />
                                </div>
                                <h4 className="text-lg font-black text-white tracking-tight">{m.name}</h4>
                                <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-3">{m.role}</p>
                                <p className="text-xs text-slate-500 leading-relaxed">{m.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════════════════════
           12. FINAL CTA
       ════════════════════════════════════════════════════════════════════════ */}
            <section className="py-48 px-6 bg-gradient-to-b from-[#0a0f1e] to-[#000] relative overflow-hidden text-center">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/10 rounded-full blur-[140px]" />
                </div>
                
                <div className="relative max-w-4xl mx-auto">
                    <H1 className="mb-8">
                        {isES ? 'Construye el futuro de la\ninfraestructura de experiencias.' : 'Build the future of\nexperience infrastructure.'}
                    </H1>
                    <p className="text-xl text-slate-400 mb-16 max-w-2xl mx-auto leading-relaxed">
                        {isES
                            ? 'Estamos definiendo una nueva categoría. Si buscas escalabilidad, validación real y un foso tecnológico sólido, hablemos.'
                            : 'We are defining a new category. If you are looking for scalability, real validation, and a solid technological moat, let\'s talk.'}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link
                            href="https://calendar.app.google/3MWqCUTqt16YJQDE6"
                            target="_blank"
                            className="px-10 py-5 bg-blue-600 text-white font-black rounded-full hover:bg-blue-500 transition-all text-sm uppercase tracking-widest shadow-2xl shadow-blue-600/20"
                        >
                            {isES ? 'Agendar Call Estratégica' : 'Book Strategic Call'}
                        </Link>
                        <Link
                            href="mailto:nicolas.doyopro@gmail.com"
                            className="text-white font-black uppercase tracking-widest text-sm border-b-2 border-white/20 hover:border-white transition-all pb-1"
                        >
                            nicolas.doyopro@gmail.com
                        </Link>
                    </div>
                </div>
            </section>

            <footer className="py-12 px-6 bg-black border-t border-white/5">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
                    <div className="flex items-center gap-3">
                        <img src="/soundlink-icono.gif" alt="" className="w-6 h-6" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em]">SoundLink Experience OS</span>
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-widest">
                        © 2026 SoundLink Music S.L. · {isES ? 'Privado & Confidencial' : 'Private & Confidential'}
                    </p>
                </div>
            </footer>
        </div>
    )
}