import { Link } from 'react-router-dom'
import Ship from './Ship'

const segments = [
  { label: 'Сетевые магазины',           desc: 'Крупные федеральные и региональные торговые сети' },
  { label: 'Оптовые компании',            desc: 'Мелкий, средний и крупный опт по всей России' },
  { label: 'HoReCa',                      desc: 'Рестораны, отели, кейтеринг, доставка еды' },
  { label: 'Деликатесные магазины',       desc: 'Специализированные магазины, гастрономы, мясные лавки' },
]

export default function Clients() {
  return (
    <section id="clients" className="relative bg-[#122850] py-28 overflow-hidden">
      <Ship className="absolute left-1/2 -translate-x-1/2 -bottom-10 w-[900px] text-white/[0.025] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="section-tag">Наши клиенты</span>
            <span className="gold-line" />
            <h2 className="section-title">
              Работаем с бизнесом<br />
              <em className="not-italic text-gold/80">любого масштаба</em>
            </h2>
            <p className="mt-6 text-white/60 leading-relaxed text-base font-light max-w-md">
              Много лет мы поставляем продукцию крупным сетевым магазинам,
              оптовым компаниям и сегменту HoReCa по всей России.
            </p>
            <blockquote className="mt-10 border-l-2 border-gold/40 pl-6">
              <p className="font-display text-xl text-white/75 italic leading-relaxed">
                «Икра — товар, который быстро оборачивается.
                Мы помогаем найти надёжного поставщика и начать зарабатывать.»
              </p>
            </blockquote>
            <Link to="/contacts" className="btn-gold mt-10">Стать клиентом</Link>
          </div>

          <div className="grid gap-px bg-white/8">
            {segments.map((s, i) => (
              <div key={s.label} className="bg-[#122850] px-7 py-6 flex items-start gap-5 hover:bg-[#1A3A6B] transition-colors group">
                <span className="font-display text-3xl text-gold/20 group-hover:text-gold/40 transition-colors mt-1 select-none flex-shrink-0 w-8">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-base text-white group-hover:text-gold/80 transition-colors">{s.label}</h3>
                  <p className="text-white/50 text-sm mt-1 font-light leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
