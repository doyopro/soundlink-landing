'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Music,
  BarChart3,
  Zap,
  Shield,
  Globe,
  Layers,
  Users,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  Calendar,
  Mail,
  Code,
  Database,
  Target,
  Rocket,
} from 'lucide-react'

export default function CorporateLanding() {
  const isES = typeof window !== 'undefined' && window.location.pathname.includes('/es')

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white antialiased overflow-x-hidden font-sans">
      {/* ════════════════════════════════════════════════════════════════════════
          NAV
      ════════════════════════════════════════════════════════════════════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-16 border-b border-white/8 bg-[#0f0f0f]/95 backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <img src="/soundlink-icono.gif" alt="SoundLink" className="w-8 h-8" />
          <div>
            <p className="text-xs font-bold tracking-wider text-white">SOUNDLINK MUSIC</p>
            <p className="text-[10px] text-gray-500 tracking-wider">{isES ? 'Music-Tech B2B' : 'Music-Tech B2B'}</p>
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
            href="mailto:nicolas@soundlink.band"
            className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-lg text-xs font-bold uppercase tracking-wide transition-all"
          >
            <Mail className="w-4 h-4" />
            {isES ? 'Contacto' : 'Contact'}
          </Link>
        </div>
      </nav>

      {/* ════════════════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-40 pb-32 px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="mb-12 inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-bold text-gray-300">
              {isES ? 'INFRAESTRUCTURA MUSIC-TECH' : 'MUSIC-TECH INFRASTRUCTURE'}
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[1.0] tracking-tight text-white mb-8 max-w-5xl">
            {isES ? (
              <>
                La música<br />
                <span className="text-blue-400">como ventaja competitiva</span>
              </>
            ) : (
              <>
                Music as<br />
                <span className="text-blue-400">competitive advantage</span>
              </>
            )}
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl mb-12 leading-relaxed">
            {isES
              ? 'Transformamos la gestión musical en operaciones medibles. Plataformas, asesoramiento y tecnología para empresas que quieren convertir la música en una herramienta estratégica de crecimiento.'
              : 'We transform music management into measurable operations. Platforms, consulting and technology for companies that want to turn music into a strategic growth tool.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="https://www.soundband.pro/es"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-lg text-base font-bold uppercase tracking-wide transition-all"
            >
              {isES ? 'Ver SoundBand' : 'Explore SoundBand'}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.soundlink.band/es/investors"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-bold rounded-lg hover:border-blue-400 hover:text-blue-400 transition-all text-base uppercase tracking-wide"
            >
              {isES ? 'Investor Deck' : 'Investor Deck'}
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          VISION & MISSION
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-8 bg-[#0f0f0f] border-y border-white/8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Mission */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Rocket className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-black text-white">{isES ? 'Misión' : 'Mission'}</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {isES
                  ? 'Ser el sistema operativo estándar para la gestión musical B2B. Damos a empresas de cualquier tamaño las herramientas, datos e inteligencia para transformar la música en una ventaja competitiva medible.'
                  : 'Be the standard operating system for B2B music management. We empower companies of any size with tools, data and intelligence to transform music into a measurable competitive advantage.'}
              </p>
            </div>

            {/* Vision */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-black text-white">{isES ? 'Visión' : 'Vision'}</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {isES
                  ? 'Un mundo donde toda empresa usa música de forma estratégica, legal y rentable. Donde el caos operativo en la gestión musical no existe y los artistas reciben compensación justa.'
                  : 'A world where every company uses music strategically, legally and profitably. Where operational chaos in music management doesn\'t exist and artists receive fair compensation.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          WHAT WE DO
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-32 px-8 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-white mb-4">
              {isES ? '¿Qué hacemos?' : 'What We Do'}
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl">
              {isES
                ? 'Tres pilares que transforman la música de gasto caótico en operación rentable.'
                : 'Three pillars that transform music from chaotic expense into profitable operation.'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                Icon: Zap,
                title: isES ? 'Plataformas de Operación' : 'Operational Platforms',
                desc: isES
                  ? 'SoundBand (Live Music OS) y SoundPass (Engagement Engine). Sistemas end-to-end que automatizan booking, compliance, facturación y ROI.'
                  : 'SoundBand (Live Music OS) and SoundPass (Engagement Engine). End-to-end systems that automate booking, compliance, invoicing and ROI.',
                features: isES
                  ? ['Gestión 360° de talento', 'IA & Matching inteligente', 'Compliance automático', 'Analytics & ROI']
                  : ['360° talent management', 'AI & intelligent matching', 'Automated compliance', 'Analytics & ROI'],
              },
              {
                Icon: Shield,
                title: isES ? 'Asesoramiento Estratégico' : 'Strategic Consulting',
                desc: isES
                  ? 'Auditorías de infraestructura, diseño de estrategias musicales y asesoramiento en compliance normativo.'
                  : 'Infrastructure audits, music strategy design and regulatory compliance consulting.',
                features: isES
                  ? ['Auditoría de datos', 'Estrategia musical', 'Cumplimiento legal', 'Optimización de costos']
                  : ['Data audit', 'Music strategy', 'Legal compliance', 'Cost optimization'],
              },
              {
                Icon: Code,
                title: isES ? 'Arquitectura a Medida' : 'Custom Architecture',
                desc: isES
                  ? 'Desarrollo de ERPs musicales, automatización agentic con IA e integraciones personalizadas para partners estratégicos.'
                  : 'Music ERP development, agentic AI automation and custom integrations for strategic partners.',
                features: isES
                  ? ['ERPs personalizados', 'Automatización agentic', 'Integración legacy', 'APIs escalables']
                  : ['Custom ERPs', 'Agentic automation', 'Legacy integration', 'Scalable APIs'],
              },
            ].map(({ Icon, title, desc, features }, i) => (
              <div key={i} className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group">
                <Icon className="w-10 h-10 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-black text-white mb-3">{title}</h3>
                <p className="text-sm text-gray-300 mb-6 leading-relaxed">{desc}</p>
                <ul className="space-y-2">
                  {features.map((f, i) => (
                    <li key={i} className="flex gap-2 items-start text-xs text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          SEGMENTS WE SERVE
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-32 px-8 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-white mb-4">
              {isES ? 'Segmentos que Servimos' : 'Segments We Serve'}
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl">
              {isES
                ? 'Cualquier empresa que contrata música en volumen tiene nuestro problema. Somos partners de:'
                : 'Any company that contracts music at scale has our problem. We partner with:'}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {(isES
              ? [
                { icon: '🏨', name: 'Hotelería', desc: 'Cadenas de lujo, resorts, boutique hotels' },
                { icon: '🛍️', name: 'Retail', desc: 'Centros comerciales, tiendas, outlets' },
                { icon: '🍽️', name: 'Restauración', desc: 'Restaurantes, bares, cafés, nightlife' },
                { icon: '👗', name: 'Moda & Lujo', desc: 'Boutiques, showrooms, flagship stores' },
                { icon: '🏦', name: 'Finanzas', desc: 'Bancos, fintechs, seguros, corporativos' },
                { icon: '🎭', name: 'Entretenimiento', desc: 'Promotoras, productoras, eventos' },
              ]
              : [
                { icon: '🏨', name: 'Hospitality', desc: 'Luxury chains, resorts, boutique hotels' },
                { icon: '🛍️', name: 'Retail', desc: 'Malls, stores, outlets' },
                { icon: '🍽️', name: 'Food & Beverage', desc: 'Restaurants, bars, cafés, nightlife' },
                { icon: '👗', name: 'Fashion & Luxury', desc: 'Boutiques, showrooms, flagship stores' },
                { icon: '🏦', name: 'Finance', desc: 'Banks, fintechs, insurance, corporate' },
                { icon: '🎭', name: 'Entertainment', desc: 'Promoters, producers, events' },
              ]
            ).map(({ icon, name, desc }, i) => (
              <div key={i} className="p-6 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all text-center">
                <p className="text-4xl mb-3">{icon}</p>
                <h4 className="font-black text-white mb-2">{name}</h4>
                <p className="text-xs text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          METHODOLOGY
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-32 px-8 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-white mb-4">
              {isES ? 'Metodología' : 'Methodology'}
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl">
              {isES
                ? 'Tres fases que transforman tu infraestructura musical en un activo operativo.'
                : 'Three phases that transform your music infrastructure into an operational asset.'}
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                num: '01',
                title: isES ? 'Auditoría & Análisis' : 'Audit & Analysis',
                desc: isES
                  ? 'Mapeamos tu ecosistema actual: proveedores, contratos, cumplimiento normativo, fugas operativas. Identificamos oportunidades concretas de optimización.'
                  : 'We map your current ecosystem: providers, contracts, compliance, operational leaks. We identify concrete optimization opportunities.',
                Icon: Database,
              },
              {
                num: '02',
                title: isES ? 'Diseño & Implementación' : 'Design & Implementation',
                desc: isES
                  ? 'Construimos tu arquitectura tecnológica: automatización, matching inteligente, dashboards, integraciones. Entrenamos a tu equipo.'
                  : 'We build your technology architecture: automation, intelligent matching, dashboards, integrations. We train your team.',
                Icon: Layers,
              },
              {
                num: '03',
                title: isES ? 'Operación & Crecimiento' : 'Operation & Growth',
                desc: isES
                  ? 'Ejecutamos y escalamos: gestión operativa diaria, soporte 24/7, optimización continua basada en datos. Monitoreamos KPIs y ROI.'
                  : 'We execute and scale: daily operations, 24/7 support, continuous data-driven optimization. We monitor KPIs and ROI.',
                Icon: TrendingUp,
              },
            ].map(({ num, title, desc, Icon }, i) => (
              <div key={i} className="flex gap-8 items-start p-8 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                    <p className="text-2xl font-black text-blue-400">{num}</p>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-6 h-6 text-blue-400" />
                    <h3 className="text-xl font-black text-white">{title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          MARKET OPPORTUNITY
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-32 px-8 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-white mb-4">
              {isES ? 'La Oportunidad' : 'The Opportunity'}
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl">
              {isES
                ? 'Convergencia de dos mercados en explosión sin solución consolidada.'
                : 'Convergence of two explosive markets with no consolidated solution.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              { label: '$38.2B', desc: isES ? 'Live Music Global 2025' : 'Global Live Music 2025' },
              { label: '$91.4B', desc: isES ? 'Music Tourism 2024' : 'Global Music Tourism 2024' },
              { label: '€725M', desc: isES ? 'Live Music España 2024' : 'Live Music Spain 2024' },
              { label: '97M', desc: isES ? 'Turistas España 2025' : 'Spain Tourists 2025' },
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
                ? 'SoundLink captura valor en la intersección del Live Music global y Hospitality & Turismo. Pero nuestro TAM se expande con cada industria que descubre que la gestión musical es un problema operativo, no solo creativo.'
                : 'SoundLink captures value at the intersection of global Live Music and Hospitality & Tourism. But our TAM expands with every industry that discovers music management is an operational problem, not just creative.'}
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          WHY SOUNDLINK
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-32 px-8 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-white mb-4">
              {isES ? '¿Por qué SoundLink?' : 'Why SoundLink?'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: isES ? 'Experiencia operativa real' : 'Real operational experience',
                desc: isES
                  ? '8.000+ operaciones ejecutadas, 850k€+ gestionados, 2+ años de LTV validado sin capital externo.'
                  : '8,000+ operations executed, €850k+ managed, 2+ years of validated LTV without external capital.',
                Icon: CheckCircle2,
              },
              {
                title: isES ? 'Infraestructura probada' : 'Proven infrastructure',
                desc: isES
                  ? 'Plataformas en producción, APIs estables, arquitectura escalable lista para crecer 10X.'
                  : 'Production platforms, stable APIs, scalable architecture ready to grow 10X.',
                Icon: Layers,
              },
              {
                title: isES ? 'Dataset propietario' : 'Proprietary dataset',
                desc: isES
                  ? '50TB+ de datos sobre comportamiento venue-artista-guest. Moat que otros 18 meses no pueden replicar.'
                  : '50TB+ data on venue-artist-guest behavior. Moat competitors can\'t replicate in 18 months.',
                Icon: Database,
              },
              {
                title: isES ? 'Equipo multidisciplinar' : 'Multidisciplinary team',
                desc: isES
                  ? 'Operadores B2B, ingenieros, expertos en cumplimiento, productores. No somos teóricos.'
                  : 'B2B operators, engineers, compliance experts, producers. We\'re not theorists.',
                Icon: Users,
              },
            ].map(({ title, desc, Icon }, i) => (
              <div key={i} className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all">
                <Icon className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-black text-white mb-3">{title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          CTA
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-40 px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
            {isES ? '¿Listo para transformar tu gestión musical?' : 'Ready to transform your music management?'}
          </h2>

          <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            {isES
              ? 'Hablemos sobre tu infraestructura actual y cómo SoundLink puede optimizarla.'
              : 'Let\'s discuss your current infrastructure and how SoundLink can optimize it.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:nicolas@soundlink.band"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-black rounded-lg hover:bg-blue-500 hover:text-white transition-all text-base"
            >
              <Mail className="w-5 h-5" />
              nicolas@soundlink.band
            </Link>
            <Link
              href="https://calendar.app.google/mpwxXhzTB7xB5Tfx9"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-black rounded-lg hover:border-blue-400 hover:text-blue-400 transition-all text-base"
            >
              <Calendar className="w-5 h-5" />
              {isES ? 'Agendar Consultoría' : 'Schedule Consultation'}
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════════════════════════════════════ */}
      <footer className="border-t border-white/8 py-8 px-8 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <span>© 2026 SoundLink Music S.L. · {isES ? 'Todos los derechos reservados' : 'All rights reserved'}</span>
          <Link href="https://doyo.pro" target="_blank" className="hover:text-gray-400 transition-colors">
            Powered by DOYO.PRO
          </Link>
        </div>
      </footer>
    </div>
  )
}