import { Award, ChevronRight } from 'lucide-react'
import Ship from './Ship'

export default function About() {
  return (
    <section id="about" className="relative bg-navy2 overflow-hidden py-28 grain-overlay">

      {/* Decorative ship watermark */}
      <Ship className="absolute -right-20 top-1/2 -translate-y-1/2 w-[600px] text-white/[0.02] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src="/img/about.jpg"
                alt="Производство Охотоморье"
                className="w-full h-full object-cover grayscale contrast-75 brightness-75 transition-all duration-700 hover:grayscale-0 hover:brightness-90"
              />
              {/* Gold frame accent */}
              <div className="absolute inset-0 border border-gold/15 pointer-events-none" />
              <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-gold/40" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-gold/40" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 lg:-right-8 bg-navy3 border border-gold/20 p-5 flex items-center gap-3">
              <Award className="text-gold flex-shrink-0" size={24} />
              <div>
                <div className="font-display text-cream text-sm">С 2004 года</div>
                <div className="text-steel text-[10px] tracking-widest uppercase">на рынке</div>
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div className="order-1 lg:order-2">
            <span className="section-tag">О компании</span>
            <span className="gold-line" />
            <h2 className="section-title font-display">
              Надёжный поставщик<br />
              <em className="not-italic text-gold/80">с Дальнего Востока</em>
            </h2>

            <p className="mt-6 text-steel leading-relaxed text-base font-light">
              «Охотоморье» уже более двадцати лет занимает прочные позиции на рынке,
              зарекомендовав себя как надёжный и ответственный поставщик морепродуктов.
            </p>
            <p className="mt-4 text-steel leading-relaxed text-base font-light">
              Мы тщательно контролируем каждый этап производства — от экспертного отбора
              сырья до финальной упаковки, чтобы гарантировать только лучший продукт.
              Флагман — красная икра кеты сахалинского завода «Меридиан».
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                'Экспертный отбор сырья',
                'Контроль каждого этапа',
                'Собственное производство',
                'Сертификация ХАССП',
              ].map(item => (
                <div key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-steel/80 text-sm leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <a href="#" className="btn-outline mt-10">
              Подробнее о компании
              <ChevronRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
