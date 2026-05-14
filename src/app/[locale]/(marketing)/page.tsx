'use client'

import { useState, useEffect, useRef } from 'react'
import { useParams, usePathname, useRouter } from 'next/navigation'
import {
  ShieldCheck, BrainCircuit, Zap, BarChart3, CheckCircle2, ArrowRight,
  Music, Users, Globe, TrendingUp, Briefcase, AlertCircle, Lock,
  Database, Cpu, MapPin, Phone, Mail, ChevronDown, Play
} from 'lucide-react'
import Link from 'next/link'

const dict = {
  es: {
    nav: { contact: 'Contacto', tagline: 'Infraestructura B2B para Entretenimiento en Vivo' },
    hero: {
      badge: 'SoundLink Music S.L. · 2026',
      headline: 'La música como ventaja competitiva',
      subheadline: 'Infraestructura B2B que conecta marcas, artistas y experiencias. Automatización, compliance y datos como potenciadores de crecimiento.',
      cta1: 'Explorar SoundBand',
      cta2: 'Solicitar Demo'
    },
    problem: {
      title: 'El Problema Crítico',
      subtitle: 'Fragmentación, falta de datos y riesgo legal en operaciones de entretenimiento en vivo',
      sections: [
        {
          heading: 'Para Empresas & Marcas',
          points: [
            'Experiencias inconsistentes en múltiples ubicaciones',
            'Cero visibilidad de ROI en inversiones musicales',
            'Riesgo legal acumulado (Sony v. Marriott)',
            'Coordinación manual fragmentada (WhatsApp, emails, PDFs)',
            'Imposible medir impacto en ocupación, consumo, NPS'
          ]
        },
        {
          heading: 'Para Artistas & Comunidad Musical',
          points: [
            'Modelos artesanales sin escalabilidad',
            'Falta de datos sobre patrones de demanda',
            'Pagos fragmentados y sin trazabilidad',
            'Sin acceso a información de oportunidades reales',
            'Dependencia de intermediarios poco tecnológicos'
          ]
        }
      ]
    },
    opportunity: {
      title: 'La Oportunidad Convergente',
      intro: 'Dos mercados record se encuentran sin infraestructura inteligente',
      markets: [
        { label: 'Turismo Global', value: '1.52B visitantes' },
        { label: 'Live Music Global', value: '$38.2B mercado' },
        { label: 'España Turismo', value: '97M visitantes 2025' },
        { label: 'España Live Music', value: '€725M récord' }
      ]
    },
    solution: {
      title: 'SoundBand: Solución Integral',
      subtitle: 'No es agencia. No es marketplace. Es la capa de infraestructura que conecta empresas, artistas y datos.',
      intro: 'Automatiza 100% del ciclo de vida operativo con plataformas, tech e IA como potenciadores',
      pillars: [
        {
          icon: BrainCircuit,
          title: 'Matching Inteligente',
          desc: 'IA que cruza Brand DNA, KPIs comerciales y disponibilidad de talento verificado.'
        },
        {
          icon: Database,
          title: 'Red de Talento Validada',
          desc: '500+ artistas con históricos de ejecución, patrones venue-artista, datos operacionales.'
        },
        {
          icon: ShieldCheck,
          title: 'Compliance 100% Automático',
          desc: 'Validación de contratos, seguros y requisitos legales en tiempo real. Cero riesgo.'
        },
        {
          icon: BarChart3,
          title: 'Pagos Unificados & Analytics',
          desc: 'Una factura mensual consolidada. Múltiples pagos a artistas. ROI medible.'
        },
        {
          icon: Zap,
          title: 'Orquestación Centralizada',
          desc: 'Calendario inteligente, sustituciones automáticas (< 2h), coordinación end-to-end.'
        },
        {
          icon: TrendingUp,
          title: 'Impacto Medible en Negocio',
          desc: 'Conecta programación musical con métricas: ocupación, consumo, engagement, NPS.'
        }
      ]
    },
    methodology: {
      title: 'Metodología: Auditoría → Diseño → Operación',
      steps: [
        {
          title: 'Auditoría Estratégica',
          desc: 'Analizamos Brand DNA, objetivos comerciales, gaps operacionales actuales.'
        },
        {
          title: 'Diseño de Experiencia',
          desc: 'Definimos estrategia musical, segmentos, géneros, kpis y arquitectura de contenido.'
        },
        {
          title: 'Operación Automatizada',
          desc: 'SoundBand ejecuta: matching, contratos, pagos, calendarios, reportes, compliance.'
        }
      ]
    },
    differentiators: {
      title: '¿Por Qué SoundLink?',
      points: [
        {
          title: '+8.000 Operaciones Ejecutadas',
          desc: 'Dataset no replicable. Patterns venue-artista-guest. Workflows probados.'
        },
        {
          title: '100% Compliance & Cero Riesgo Legal',
          desc: 'SGAE/BIEM compliant. 0 incidencias legales. Automation auditable.'
        },
        {
          title: 'Tech & IA como Potenciadores',
          desc: 'Plataformas inteligentes que optimizan decisiones, no reemplazan humanos.'
        },
        {
          title: 'Enfoque B2B Integral',
          desc: 'No solo booking. Estrategia, datos, sostenibilidad y growth real para partners.'
        }
      ]
    },
    faq: {
      title: 'Preguntas Frecuentes',
      items: [
        { q: '¿Qué es realmente SoundBand?', a: 'Infraestructura operativa que automatiza booking, compliance, pagos y medición de impacto. No es agencia ni marketplace.' },
        { q: '¿Reemplazan agencias?', a: 'No. Unificamos operaciones fragmentadas. Algunos partners siguen con agencias pero a través de SoundBand.' },
        { q: '¿Cómo se mide el ROI?', a: 'Analytics operacionales: costo por evento, impacto en ocupación, consumo promedio, NPS, retención cliente.' },
        { q: '¿Para quién es?', a: 'Hoteles, grupos hospitality, venues, restaurantes, marcas moda/finanzas, cualquier empresa que programe entretenimiento.' },
        { q: '¿Multi-venue?', a: 'Sí. Orquestación multi-ubicación es core. Un CFO ve una línea de gasto, gestión distribuida.' },
        { q: '¿Qué incluye cada plan?', a: 'Conceptualización, contenido branded, booking, producción, seguro, facturación, reporting en una sola plataforma.' }
      ]
    },
    cta: {
      headline: 'Infraestructura del futuro',
      subline: 'para operaciones de entretenimiento en vivo.',
      btn1: 'Explorar SoundBand',
      btn2: 'Solicitar Demostración Privada'
    },
    footer: {
      text: 'SoundLink Music S.L. · Islas Canarias, España',
      powered: 'Powered by DOYO.PRO'
    }
  },
  en: {
    nav: { contact: 'Contact', tagline: 'B2B Infrastructure for Live Entertainment' },
    hero: {
      badge: 'SoundLink Music S.L. · 2026',
      headline: 'Music as competitive advantage',
      subheadline: 'B2B infrastructure connecting brands, artists and experiences. Automation, compliance and data as growth enablers.',
      cta1: 'Explore SoundBand',
      cta2: 'Request Demo'
    },
    problem: {
      title: 'The Critical Problem',
      subtitle: 'Fragmentation, lack of data and legal risk in live entertainment operations',
      sections: [
        {
          heading: 'For Companies & Brands',
          points: [
            'Inconsistent experiences across multiple locations',
            'Zero visibility of ROI on music investments',
            'Accumulated legal risk (Sony v. Marriott)',
            'Fragmented manual coordination (WhatsApp, emails, PDFs)',
            'Impossible to measure impact on occupancy, spend, NPS'
          ]
        },
        {
          heading: 'For Artists & Music Community',
          points: [
            'Artisanal models without scalability',
            'Lack of data on real demand patterns',
            'Fragmented payments without traceability',
            'No access to real opportunity information',
            'Dependence on non-tech intermediaries'
          ]
        }
      ]
    },
    opportunity: {
      title: 'The Convergent Opportunity',
      intro: 'Two record markets meet without intelligent infrastructure',
      markets: [
        { label: 'Global Tourism', value: '1.52B visitors' },
        { label: 'Global Live Music', value: '$38.2B market' },
        { label: 'Spain Tourism', value: '97M visitors 2025' },
        { label: 'Spain Live Music', value: '€725M record' }
      ]
    },
    solution: {
      title: 'SoundBand: Integral Solution',
      subtitle: 'Not an agency. Not a marketplace. The infrastructure layer that connects companies, artists and data.',
      intro: 'Automates 100% of the operational lifecycle with platforms, tech and AI as enablers',
      pillars: [
        {
          icon: BrainCircuit,
          title: 'Intelligent Matching',
          desc: 'AI that crosses Brand DNA, commercial KPIs and verified talent availability.'
        },
        {
          icon: Database,
          title: 'Validated Talent Network',
          desc: '500+ artists with execution history, venue-artist patterns, operational data.'
        },
        {
          icon: ShieldCheck,
          title: '100% Automated Compliance',
          desc: 'Real-time validation of contracts, insurance and legal requirements. Zero risk.'
        },
        {
          icon: BarChart3,
          title: 'Unified Payments & Analytics',
          desc: 'One consolidated monthly invoice. Multiple artist payments. Measurable ROI.'
        },
        {
          icon: Zap,
          title: 'Centralized Orchestration',
          desc: 'Smart scheduling, automatic substitutions (< 2h), end-to-end coordination.'
        },
        {
          icon: TrendingUp,
          title: 'Measurable Business Impact',
          desc: 'Connect music programming to metrics: occupancy, spend, engagement, NPS.'
        }
      ]
    },
    methodology: {
      title: 'Methodology: Audit → Design → Operation',
      steps: [
        {
          title: 'Strategic Audit',
          desc: 'We analyze Brand DNA, commercial goals, current operational gaps.'
        },
        {
          title: 'Experience Design',
          desc: 'We define music strategy, segments, genres, KPIs and content architecture.'
        },
        {
          title: 'Automated Operation',
          desc: 'SoundBand executes: matching, contracts, payments, calendars, reporting, compliance.'
        }
      ]
    },
    differentiators: {
      title: 'Why SoundLink?',
      points: [
        {
          title: '+8,000 Operations Executed',
          desc: 'Non-replicable dataset. Venue-artist-guest patterns. Proven workflows.'
        },
        {
          title: '100% Compliance & Zero Legal Risk',
          desc: 'SGAE/BIEM compliant. 0 legal incidents. Auditable automation.'
        },
        {
          title: 'Tech & AI as Enablers',
          desc: 'Intelligent platforms that optimize decisions, don\'t replace humans.'
        },
        {
          title: 'Integral B2B Approach',
          desc: 'Not just booking. Strategy, data, sustainability and real growth for partners.'
        }
      ]
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        { q: 'What exactly is SoundBand?', a: 'Operational infrastructure that automates booking, compliance, payments and impact measurement. Not an agency or marketplace.' },
        { q: 'Do you replace agencies?', a: 'No. We unify fragmented operations. Some partners still work with agencies but through SoundBand.' },
        { q: 'How is ROI measured?', a: 'Operational analytics: cost per event, occupancy impact, average spend, NPS, customer retention.' },
        { q: 'Who is it for?', a: 'Hotels, hospitality groups, venues, restaurants, fashion/finance brands, any company that programs live entertainment.' },
        { q: 'Multi-venue support?', a: 'Yes. Multi-location orchestration is core. One CFO sees one expense line, distributed management.' },
        { q: 'What does each plan include?', a: 'Conceptualization, branded content, booking, production, insurance, invoicing, reporting in one platform.' }
      ]
    },
    cta: {
      headline: 'Infrastructure of the future',
      subline: 'for live entertainment operations.',
      btn1: 'Explore SoundBand',
      btn2: 'Request Private Demo'
    },
    footer: {
      text: 'SoundLink Music S.L. · Canary Islands, Spain',
      powered: 'Powered by DOYO.PRO'
    }
  }
}

export default function CorporateLandingV4Final() {
  const [scrolled, setScrolled] = useState(false)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const params = useParams()
  const pathname = usePathname()
  const router = useRouter()

  const locale = (params?.locale as 'es' | 'en') || 'es'
  const t = dict[locale] || dict.es

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const switchLang = (newLocale: string) => {
    const newPath = pathname?.replace(/\/(es|en)\//, `/${newLocale}/`)
    if (newPath) router.push(newPath)
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white antialiased selection:bg-blue-600/30">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
        body { font-family: 'DM Sans', sans-serif; }
        .hero-title { font-size: clamp(2.5rem, 8vw, 4.5rem); font-weight: 800; letter-spacing: -0.02em; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fadeUp 0.8s ease-out forwards; }
      `}</style>

      {/* ════════════════════════════════════════════════════════════════════════
          NAV
      ════════════════════════════════════════════════════════════════════════ */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0f0f0f]/95 backdrop-blur-xl border-b border-white/8' : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/soundlink-icono.gif"
              alt="SoundLink"
              className="w-10 h-10 group-hover:scale-105 transition-transform"
            />
            <div>
              <p className="text-sm font-black text-white">SOUNDLINK</p>
              <p className="text-xs text-gray-400">{t.nav.tagline}</p>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <div className="flex gap-2 px-2 py-1.5 rounded-lg bg-white/5 border border-white/10">
              {['es', 'en'].map(l => (
                <button
                  key={l}
                  onClick={() => switchLang(l)}
                  className={`px-2 py-1 text-xs font-bold uppercase transition-all ${locale === l ? 'text-white bg-white/10 rounded' : 'text-gray-400 hover:text-white'
                    }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <Link
              href="mailto:nicolas@soundlink.band"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-bold transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              {t.nav.contact}
            </Link>
          </div>
        </div>
      </nav>

      {/* ════════════════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen pt-20 pb-20 px-6 bg-gradient-to-br from-[#1a1a2e] via-[#0f0f0f] to-[#0f0f0f] overflow-hidden flex items-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-20 right-1/3 w-[600px] h-[600px] bg-purple-600/3 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-6xl mx-auto w-full">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <Music className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-bold text-gray-300">{t.hero.badge}</span>
            </div>

            {/* GIF PROMINENTE */}
            <div className="mb-12">
              <img
                src="/soundlink-icono.gif"
                alt="SoundLink"
                className="w-32 h-32 mx-auto object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]"
              />
            </div>

            <h1 className="hero-title text-white mb-8 max-w-4xl mx-auto leading-tight">
              {t.hero.headline}
            </h1>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
              {t.hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://www.soundband.pro/es"
                target="_blank"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-lg font-bold text-base transition-all flex items-center justify-center gap-2"
              >
                {t.hero.cta1}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:nicolas@soundlink.band"
                className="px-8 py-4 border border-white/20 hover:border-blue-400 hover:text-blue-400 rounded-lg font-bold text-base transition-all"
              >
                {t.hero.cta2}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          PROBLEM SECTION
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#1a1a1a] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 mb-6">
              <AlertCircle className="w-4 h-4 text-red-400" />
              <span className="text-xs font-bold text-red-400 uppercase">{t.problem.title}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">{t.problem.subtitle}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.problem.sections.map((section, i) => (
              <div key={i} className="p-8 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-black text-white mb-6">{section.heading}</h3>
                <ul className="space-y-3">
                  {section.points.map((point, j) => (
                    <li key={j} className="flex gap-3 text-gray-300 text-sm">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          OPPORTUNITY
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0f0f0f] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">{t.opportunity.title}</h2>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl">{t.opportunity.intro}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {t.opportunity.markets.map((m, i) => (
              <div key={i} className="p-6 rounded-lg bg-white/5 border border-white/10 text-center">
                <p className="text-2xl font-black text-blue-400 mb-2">{m.value}</p>
                <p className="text-xs text-gray-400 font-bold">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          SOUNDBAND SOLUTION
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#1a1a1a] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">{t.solution.title}</h2>
            <p className="text-lg text-gray-400 mb-4">{t.solution.subtitle}</p>
            <p className="text-base text-gray-500">{t.solution.intro}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {t.solution.pillars.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all">
                <Icon className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-lg font-black text-white mb-3">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          METHODOLOGY
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0f0f0f] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-12">{t.methodology.title}</h2>

          <div className="space-y-4">
            {t.methodology.steps.map((step, i) => (
              <div key={i} className="p-8 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                    <p className="text-sm font-black text-blue-400">{String(i + 1).padStart(2, '0')}</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-black text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          DIFFERENTIATORS
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#1a1a1a] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-12">{t.differentiators.title}</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {t.differentiators.points.map(({ title, desc }, i) => (
              <div key={i} className="p-8 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-black text-white mb-3">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          FAQ
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0f0f0f] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-12">{t.faq.title}</h2>

          <div className="space-y-3">
            {t.faq.items.map(({ q, a }, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white/5 border border-white/10 cursor-pointer hover:border-blue-500/30 transition-all"
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-black text-white flex-1 text-base">{q}</h3>
                  <ChevronDown className={`w-5 h-5 text-blue-400 shrink-0 ml-4 transition-transform ${openFAQ === i ? 'rotate-180' : ''}`} />
                </div>
                {openFAQ === i && (
                  <p className="text-gray-400 text-sm mt-4 leading-relaxed">{a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          CTA FINAL
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-32 px-6 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">{t.cta.headline}</h2>
          <p className="text-2xl text-blue-400 font-black mb-12">{t.cta.subline}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://www.soundband.pro/es"
              target="_blank"
              className="px-8 py-4 bg-white text-black font-black rounded-lg hover:bg-blue-400 transition-all"
            >
              {t.cta.btn1}
            </Link>
            <Link
              href="mailto:nicolas@soundlink.band"
              className="px-8 py-4 border border-white/20 text-white font-black rounded-lg hover:border-blue-400 hover:text-blue-400 transition-all"
            >
              {t.cta.btn2}
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════════════════════════════════════ */}
      <footer className="border-t border-white/5 py-8 px-6 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <span>{t.footer.text}</span>
          <Link href="https://doyo.pro" target="_blank" className="hover:text-gray-300 transition-colors">
            {t.footer.powered}
          </Link>
        </div>
      </footer>
    </div>
  )
}