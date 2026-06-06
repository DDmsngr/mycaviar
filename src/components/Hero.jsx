import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

const stats = [
  { value: '20+',   label: 'лет на рынке' },
  { value: '3',     label: 'завода' },
  { value: '50+',   label: 'видов продукции' },
  { value: 'ХАССП', label: 'сертифицировано' },
]

export default function Hero() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -140])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0.3])

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden" id="home">

      {/* Gradient overlays — fade as user scrolls */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#060e1c] via-[#0D2140]/55 to-[#0D2140]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060e1c]/75 via-[#0D2140]/20 to-transparent" />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 120% 100% at 75% 40%, transparent 40%, rgba(6,14,28,0.5) 100%)'
        }} />
      </motion.div>

      {/* Hero content — parallax upward on scroll */}
      <motion.div style={{ y: contentY }} className="absolute bottom-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-28 lg:pb-32">

          {/* Tag */}
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold/60" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold/80 font-medium">
              Дальневосточные морепродукты
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display font-light leading-[0.88] mb-8">
            <span className="block text-[clamp(54px,10vw,130px)] text-white tracking-[-0.02em]">
              Охото&shy;морье
            </span>
            <span className="block text-[clamp(16px,2.4vw,28px)] text-white/45 tracking-[0.12em] font-normal mt-4 ml-1">
              поставщик икры и морепродуктов
            </span>
          </h1>

          {/* Description + CTA */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="max-w-md">
              <p className="text-white/60 text-sm md:text-base leading-relaxed font-light mb-8">
                Оптовые поставки с Сахалина. Собственное производство.{' '}
                <span className="text-white/85">Двадцать лет надёжности.</span>
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/catalog" className="btn-gold">
                  Смотреть каталог
                  <ArrowRight size={13} />
                </Link>
                <Link to="/contacts"
                  className="flex items-center gap-2 px-5 py-3 text-xs tracking-widest uppercase text-white/70 border border-white/20 hover:border-gold/40 hover:text-white transition-all duration-300">
                  Запросить прайс
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-px shrink-0">
              {stats.map(s => (
                <div key={s.label}
                  className="bg-white/[0.04] backdrop-blur-md border border-white/[0.07] px-5 py-4 text-center min-w-[80px]">
                  <div className="font-display text-xl text-gold leading-none">{s.value}</div>
                  <div className="text-white/40 text-[9px] tracking-[0.15em] uppercase mt-1.5 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom gradient fade into next section */}
        <div className="h-24 bg-gradient-to-b from-transparent to-[#060e1c]" />
      </motion.div>

      {/* Scroll hint */}
      <a href="#about"
        className="absolute bottom-8 right-10 hidden lg:flex flex-col items-center gap-2 text-white/25 hover:text-gold/50 transition-colors z-20"
        aria-label="Далее">
        <span className="text-[9px] tracking-[0.25em] uppercase rotate-90 mb-2">scroll</span>
        <ChevronDown size={13} className="animate-bounce" />
      </a>

    </section>
  )
}
