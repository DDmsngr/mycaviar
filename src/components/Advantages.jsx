import { Shield, Package, Globe, Star, Users, Truck } from 'lucide-react'

const items = [
  { icon: Star,    title: 'Премиальное качество',      text: 'Строгий контроль на каждом этапе — от вылова до упаковки. Только лучшее сырьё от проверенных промысловых компаний.' },
  { icon: Users,   title: 'Поддержка на старте',       text: 'Помогаем начать работать с икрой: консультируем, индивидуально обсуждаем условия первой пробной отгрузки.' },
  { icon: Package, title: 'Все виды упаковки',         text: 'Жесть, стекло, пластик. Европейская банка. Весовая икра. Любой формат под запрос вашего рынка.' },
  { icon: Shield,  title: 'Полная сертификация',       text: 'Продукция аккредитована в системе Цербер. Сертифицировано для экспорта в страны ЕАЭС и СНГ.' },
  { icon: Globe,   title: 'Лучшие промысловые партнёры', text: '«Тунайча», «Гидрострой», «Меридиан», «Тымлатский рыбокомбинат» — только проверенные источники.' },
  { icon: Truck,   title: 'Быстрый оборот',            text: 'Икра — товар с хорошей оборачиваемостью. Работаем с мелким, средним и крупным оптом, сетями, HoReCa.' },
]

export default function Advantages() {
  return (
    <section className="relative bg-[#0D2140] py-28">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <span className="section-tag">Почему выбирают нас</span>
          <span className="gold-line mx-auto" />
          <h2 className="section-title">Ключевые <em className="not-italic text-gold/80">преимущества</em></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="group bg-[#0D2140] p-8 lg:p-10 hover:bg-[#122850] transition-colors duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-gold/0 group-hover:border-gold/30 transition-all duration-500" />
                <div className="flex items-center justify-center w-12 h-12 border border-gold/20 group-hover:border-gold/50 transition-colors duration-300 mb-6">
                  <Icon size={18} className="text-gold" />
                </div>
                <h3 className="font-display text-lg text-white mb-3 group-hover:text-gold/90 transition-colors duration-300">{item.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed font-light">{item.text}</p>
                <span className="absolute bottom-6 right-8 font-display text-5xl text-white/[0.04] select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}
