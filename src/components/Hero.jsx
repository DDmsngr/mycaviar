import { ArrowRight, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import Ship from './Ship'

const stats = [
  { value: '20+',   label: 'лет на рынке' },
  { value: '3',     label: 'завода на Сахалине' },
  { value: '50+',   label: 'видов продукции' },
  { value: 'ХАССП', label: 'сертифицировано' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden grain-overlay" id="home">

      {/* Brand blue gradient — matches business card */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A3D72] via-[#122850] to-[#0D2140]" />

      {/* Horizon glow */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 90% 50% at 50% 55%, rgba(31,66,128,0.6) 0%, transparent 70%)'
      }} />

      {/* Subtle stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(35)].map((_, i) => (
          <div key={i} className="absolute rounded-full bg-white" style={{
            width:   (Math.random() * 1.5 + 0.5) + 'px',
            height:  (Math.random() * 1.5 + 0.5) + 'px',
            top:     Math.random() * 50 + '%',
            left:    Math.random() * 100 + '%',
            opacity: Math.random() * 0.3 + 0.05,
          }} />
        ))}
      </div>

      {/* Horizon line */}
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" style={{ top: '60%' }} />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-16">
        <div className="max-w-3xl">

          <div className="fade-up flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-gold/70" />
            <span className="section-tag mb-0">Дальневосточные морепродукты</span>
          </div>

          <h1 className="fade-up-1 font-display font-semibold leading-[0.92] mb-2">
            <span className="block text-[clamp(52px,9vw,110px)] text-white tracking-[-0.01em]">
              Охото&shy;морье
            </span>
            <span className="block text-[clamp(18px,3vw,32px)] text-gold/80 tracking-[0.08em] font-normal mt-3 ml-1">
              — поставщик красной икры
            </span>
          </h1>

          <p className="fade-up-2 mt-6 text-white/65 text-base md:text-lg leading-relaxed max-w-xl font-light">
            Оптовые поставки икры и морепродуктов с Дальнего Востока.
            Собственное производство на Сахалине.{' '}
            <span className="text-white/85">Двадцать лет надёжности.</span>
          </p>

          <div className="fade-up-3 flex flex-wrap gap-4 mt-10">
            <Link to="/catalog" className="btn-gold">
              Смотреть каталог
              <ArrowRight size={14} />
            </Link>
            <Link to="/contacts" className="btn-white">
              Запросить прайс
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="fade-up-4 mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 overflow-hidden border border-white/10">
          {stats.map(s => (
            <div key={s.label} className="bg-[#1A3D72]/60 backdrop-blur-sm px-6 py-5 text-center md:text-left">
              <div className="font-display text-2xl md:text-3xl text-gold">{s.value}</div>
              <div className="text-white/50 text-xs tracking-widest mt-1 uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Ship at horizon */}
      <div className="relative z-10 w-full">
        <div className="h-12 bg-gradient-to-b from-transparent to-[#0D2140]" />
        <div className="bg-[#0D2140] flex justify-center overflow-hidden">
          <Ship className="w-full max-w-2xl text-[#122850] ship-float" style={{ marginBottom: '-2px' }} />
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>

      <a href="#about" className="absolute bottom-6 right-10 hidden lg:flex flex-col items-center gap-2 text-white/30 hover:text-gold/60 transition-colors z-10" aria-label="Далее">
        <ChevronDown size={14} className="animate-bounce" />
      </a>

    </section>
  )
}
