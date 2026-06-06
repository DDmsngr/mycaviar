import Ship from './Ship'

const segments = [
  { label: 'Сетевые магазины',       desc: 'Крупные федеральные и региональные торговые сети' },
  { label: 'Оптовые компании',        desc: 'Мелкий, средний и крупный опт по всей России' },
  { label: 'HoReCa',                  desc: 'Рестораны, отели, кейтеринг, доставка еды' },
  { label: 'Мясные лавки и деликатесы', desc: 'Специализированные магазины и гастрономы' },
]

export default function Clients() {
  return (
    <section id="clients" className="relative bg-navy py-28 overflow-hidden">
      <Ship className="absolute left-1/2 -translate-x-1/2 -bottom-10 w-[900px] text-white/[0.015] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <span className="section-tag">Наши клиенты</span>
            <span className="gold-line" />
            <h2 className="section-title">
              Работаем с бизнесом<br />
              <em className="not-italic text-gold/80">любого масштаба</em>
            </h2>
            <p className="mt-6 text-steel leading-relaxed text-base font-light max-w-md">
              Много лет мы поставляем продукцию крупным сетевым магазинам,
              оптовым компаниям и сегменту HoReCa по всей России.
              Умеем работать как с небольшими заказами, так и с крупными контрактами.
            </p>

            <blockquote className="mt-10 border-l-2 border-gold/40 pl-6">
              <p className="font-display text-xl text-cream/80 italic leading-relaxed">
                «Икра — товар, который быстро оборачивается.
                Мы помогаем найти надёжного поставщика и начать зарабатывать.»
              </p>
            </blockquote>

            <a href="#contact" className="btn-gold mt-10">
              Стать клиентом
            </a>
          </div>

          {/* Right: segments */}
          <div className="grid gap-px bg-white/5">
            {segments.map((s, i) => (
              <div key={s.label} className="bg-navy px-7 py-6 flex items-start gap-5 hover:bg-navy2 transition-colors group">
                <span className="font-display text-3xl text-gold/20 group-hover:text-gold/40 transition-colors mt-1 select-none flex-shrink-0 w-8">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-base text-cream group-hover:text-gold/80 transition-colors">
                    {s.label}
                  </h3>
                  <p className="text-steel text-sm mt-1 font-light leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
