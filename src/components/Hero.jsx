import { ArrowRight, ChevronDown } from 'lucide-react'
import Ship from './Ship'

const stats = [
  { value: '20+',     label: 'лет на рынке' },
  { value: '3',       label: 'завода на Сахалине' },
  { value: '50+',     label: 'видов продукции' },
  { value: 'ХАССП',   label: 'сертифицировано' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden grain-overlay" id="home">

      {/* Deep ocean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020A14] via-[#030D1A] to-[#041422]" />

      {/* Subtle radial glow — horizon light */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 80% 40% at 50% 70%, rgba(10,40,70,0.5) 0%, transparent 70%)'
      }} />

      {/* Stars / particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 1.5 + 0.5 + 'px',
              height: Math.random() * 1.5 + 0.5 + 'px',
              top: Math.random() * 55 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.4 + 0.05,
            }}
          />
        ))}
      </div>

      {/* Gold horizon line */}
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"
        style={{ top: '62%' }}
      />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20">
        <div className="max-w-3xl">

          {/* Tag */}
          <div className="fade-up flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-gold/60" />
            <span className="section-tag mb-0">Дальневосточные морепродукты</span>
          </div>

          {/* Headline */}
          <h1 className="fade-up-1 font-display font-semibold leading-[0.92] mb-2">
            <span className="block text-[clamp(52px,9vw,110px)] text-cream tracking-[-0.01em]">
              Охото&shy;морье
            </span>
            <span className="block text-[clamp(18px,3vw,34px)] text-gold/80 tracking-[0.08em] font-normal mt-3 ml-1">
              — поставщик красной икры
            </span>
          </h1>

          <p className="fade-up-2 mt-6 text-steel text-base md:text-lg leading-relaxed max-w-xl font-light">
            Оптовые поставки икры и морепродуктов с Дальнего Востока.
            Собственное производство на Сахалине.&nbsp;
            <span className="text-cream/70">Двадцать лет надёжности.</span>
          </p>

          {/* CTAs */}
          <div className="fade-up-3 flex flex-wrap gap-4 mt-10">
            <a href="#catalog" className="btn-gold">
              Смотреть каталог
              <ArrowRight size={14} />
            </a>
            <a href="#contact" className="btn-outline">
              Запросить прайс
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <div className="fade-up-4 mt-20 grid grid-cols-2 md:grid-cols-4 gap-px border border-white/5 bg-white/5 overflow-hidden">
          {stats.map(s => (
            <div key={s.label} className="bg-navy2/80 backdrop-blur-sm px-6 py-5 text-center md:text-left">
              <div className="font-display text-2xl md:text-3xl text-gold">{s.value}</div>
              <div className="text-steel text-xs tracking-widest mt-1 uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Ship silhouette at the bottom */}
      <div className="relative z-10 w-full">
        {/* Water shimmer */}
        <div className="h-16 bg-gradient-to-b from-transparent to-[#041422]" />
        <div className="bg-[#041422] flex justify-center overflow-hidden">
          <Ship className="w-full max-w-2xl text-navy3 ship-float opacity-60" style={{ marginBottom: '-2px' }} />
        </div>
        {/* Waterline */}
        <div className="h-1 bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className="absolute bottom-6 right-10 hidden lg:flex flex-col items-center gap-2 text-steel/40 hover:text-gold/60 transition-colors z-10"
        aria-label="Листать вниз"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase writing-mode-vertical rotate-90 origin-center">Далее</span>
        <ChevronDown size={14} className="animate-bounce mt-1" />
      </a>

    </section>
  )
}
