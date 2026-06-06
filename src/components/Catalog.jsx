import { useState } from 'react'
import { ArrowRight, Filter } from 'lucide-react'

const tiers = [
  {
    id: 'premium',
    label: 'Премиум',
    color: '#C09A45',
    note: 'Синяя ж/б банка · Весовая',
    description: 'Икра высшей категории отбора. Синяя жестяная банка 140г и весовая. Отличается выдающимся вкусом и насыщенным цветом.',
    products: [
      { name: 'Премиум Кета',   img: '/img/premium.jpg',   weight: '140 г',  type: 'жестяная банка' },
      { name: 'Премиум Нерка',  img: '/img/pionerka.jpg',  weight: '140 г',  type: 'жестяная банка' },
      { name: 'Весовая Кета',   img: '/img/raketa.jpg',    weight: '1–20 кг', type: 'весовая' },
    ],
  },
  {
    id: 'comfort',
    label: 'Комфорт',
    color: '#8899AA',
    note: 'ОХМ · Камча · КС',
    description: 'Отборная икра с отличным соотношением цены и качества. Бренды ОХМ Отборная, Камча, Красный Стандарт.',
    products: [
      { name: 'ОХМ Отборная',  img: '/img/ohm.jpg',       weight: '230 г',  type: 'пластик' },
      { name: 'Красный Стандарт', img: '/img/ks.jpg',     weight: '230 г',  type: 'пластик' },
      { name: 'Искра Кижуч',   img: '/img/iskra.jpg',     weight: '200 г',  type: 'пластик' },
    ],
  },
  {
    id: 'eco',
    label: 'Эконом',
    color: '#6B7F5A',
    note: 'Бренд Медведь',
    description: 'Доступная икра горбуши для широкой аудитории. Бренд «Медведь» — стабильное качество в демократичном сегменте.',
    products: [
      { name: 'Медведь Горбуша', img: '/img/medved.jpg',  weight: '140 г',  type: 'жестяная банка' },
      { name: 'Медведь Кета',    img: '/img/medved.jpg',  weight: '140 г',  type: 'жестяная банка' },
      { name: 'Медведь Нерка',   img: '/img/medved.jpg',  weight: '130 г',  type: 'жестяная банка' },
    ],
  },
]

const categories = [
  {
    label: 'Консервы',
    img: '/img/koryushka.jpg',
    items: ['Корюшка', 'Печень трески', 'Горбуша натуральная'],
  },
  {
    label: 'Пресервы',
    img: '/img/preservy.jpg',
    items: ['Щупальца кальмара', 'Мидии в масле', 'Горбуша в масле'],
  },
  {
    label: 'Морепродукты',
    img: '/img/prekrasnaya.jpg',
    items: ['Икра сельди вялка', 'Икра сельди в масле', 'Кальмар'],
  },
]

export default function Catalog() {
  const [activeTier, setActiveTier] = useState('premium')
  const tier = tiers.find(t => t.id === activeTier)

  return (
    <section id="catalog" className="relative bg-navy2 py-28">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="section-tag">Продукция</span>
            <span className="gold-line" />
            <h2 className="section-title">
              Каталог<br />
              <em className="not-italic text-gold/80">икры и морепродуктов</em>
            </h2>
          </div>
          <a href="#contact" className="btn-outline self-start md:self-auto">
            <Filter size={12} />
            Полный каталог
          </a>
        </div>

        {/* Икра section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="font-display text-xl text-cream">Икра красная</h3>
            <span className="flex-1 h-px bg-white/5" />
            <span className="text-steel text-xs tracking-widest">Выберите класс</span>
          </div>

          {/* Tier tabs */}
          <div className="flex gap-1 mb-8 border-b border-white/5">
            {tiers.map(t => (
              <button
                key={t.id}
                onClick={() => setActiveTier(t.id)}
                className={`px-6 py-3 text-xs tracking-[0.15em] uppercase transition-all duration-200 relative ${
                  activeTier === t.id
                    ? 'text-cream'
                    : 'text-steel hover:text-cream/70'
                }`}
              >
                {t.label}
                <span className="block text-[9px] mt-0.5 opacity-60">{t.note}</span>
                {activeTier === t.id && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: t.color }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tier description */}
          <p className="text-steel text-sm mb-8 max-w-xl font-light leading-relaxed">{tier.description}</p>

          {/* Product grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tier.products.map(p => (
              <div key={p.name} className="card-product group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden bg-navy3">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-display text-base text-cream">{p.name}</h4>
                    <ArrowRight size={14} className="text-gold/0 group-hover:text-gold/60 transition-all duration-300 flex-shrink-0 mt-1" />
                  </div>
                  <div className="flex gap-3 mt-2">
                    <span className="text-steel text-[10px] tracking-wider uppercase">{p.weight}</span>
                    <span className="text-white/20 text-[10px]">·</span>
                    <span className="text-steel text-[10px] tracking-wider uppercase">{p.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other categories */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="font-display text-xl text-cream">Другие категории</h3>
            <span className="flex-1 h-px bg-white/5" />
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {categories.map(cat => (
              <div key={cat.label} className="card-product group cursor-pointer">
                <div className="aspect-[3/2] overflow-hidden relative">
                  <img
                    src={cat.img}
                    alt={cat.label}
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                  <h4 className="absolute bottom-4 left-5 font-display text-xl text-cream">{cat.label}</h4>
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map(item => (
                      <span key={item} className="text-[10px] text-steel/70 tracking-wider uppercase border border-white/5 px-2 py-1">
                        {item}
                      </span>
                    ))}
                  </div>
                  <button className="mt-4 flex items-center gap-1 text-gold/60 group-hover:text-gold text-[11px] tracking-widest uppercase transition-colors">
                    Смотреть
                    <ArrowRight size={10} className="translate-x-0 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full catalog CTA */}
        <div className="mt-14 text-center border border-white/5 py-10 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/[0.03] to-transparent" />
          <p className="text-steel text-sm mb-5 font-light">
            Полный каталог с фильтрами по типу, упаковке, качеству и происхождению
          </p>
          <a href="#contact" className="btn-gold">
            Запросить прайс-лист
            <ArrowRight size={14} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  )
}
