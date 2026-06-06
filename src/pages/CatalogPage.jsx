import { useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { ArrowRight, SlidersHorizontal, X } from 'lucide-react'

const products = [
  { id: 1,  name: 'Премиум Кета',          brand: 'Охотоморье Премиум', cat: 'caviar',    fish: 'кета',    pack: 'жесть',    quality: 'premium', origin: 'Сахалин',  weight: '140 г', img: '/mycaviar/img/premium.jpg' },
  { id: 2,  name: 'ОХМ Отборная Горбуша',  brand: 'ОХМ',               cat: 'caviar',    fish: 'горбуша', pack: 'пластик',  quality: 'comfort', origin: 'Сахалин',  weight: '230 г', img: '/mycaviar/img/ohm.jpg' },
  { id: 3,  name: 'Красный Стандарт',       brand: 'КС',                cat: 'caviar',    fish: 'горбуша', pack: 'пластик',  quality: 'comfort', origin: 'Камчатка', weight: '230 г', img: '/mycaviar/img/ks.jpg' },
  { id: 4,  name: 'Медведь Горбуша',        brand: 'Медведь',           cat: 'caviar',    fish: 'горбуша', pack: 'жесть',    quality: 'eco',     origin: 'Магадан',  weight: '140 г', img: '/mycaviar/img/medved.jpg' },
  { id: 5,  name: 'Искра Кижуч',            brand: 'Искра',             cat: 'caviar',    fish: 'кижуч',   pack: 'пластик',  quality: 'comfort', origin: 'Сахалин',  weight: '200 г', img: '/mycaviar/img/iskra.jpg' },
  { id: 6,  name: 'Пионерка Нерка',         brand: 'Пионерка',          cat: 'caviar',    fish: 'нерка',   pack: 'пластик',  quality: 'comfort', origin: 'Камчатка', weight: '230 г', img: '/mycaviar/img/pionerka.jpg' },
  { id: 7,  name: 'Прекрасная Горбуша',     brand: 'Прекрасная',        cat: 'caviar',    fish: 'горбуша', pack: 'пластик',  quality: 'comfort', origin: 'Сахалин',  weight: '230 г', img: '/mycaviar/img/prekrasnaya.jpg' },
  { id: 8,  name: 'Ракета Кета',            brand: 'Ракета',            cat: 'caviar',    fish: 'кета',    pack: 'пластик',  quality: 'comfort', origin: 'Сахалин',  weight: '230 г', img: '/mycaviar/img/raketa.jpg' },
  { id: 9,  name: 'Корюшка',               brand: 'Охотоморье',        cat: 'conserves', fish: '',        pack: 'жесть',    quality: 'comfort', origin: 'Сахалин',  weight: '185 г', img: '/mycaviar/img/koryushka.jpg' },
  { id: 10, name: 'Щупальца кальмара',      brand: 'Охотоморье',        cat: 'preserves', fish: '',        pack: 'стекло',   quality: 'comfort', origin: 'Сахалин',  weight: '250 г', img: '/mycaviar/img/preservy.jpg' },
]

const filters = {
  cat:     { label: 'Тип продукции',  options: [['caviar','Икра'],['conserves','Консервы'],['preserves','Пресервы'],['seafood','Морепродукты']] },
  fish:    { label: 'Вид рыбы',       options: [['кета','Кета'],['горбуша','Горбуша'],['нерка','Нерка'],['кижуч','Кижуч']] },
  pack:    { label: 'Упаковка',       options: [['жесть','Жесть'],['стекло','Стекло'],['пластик','Пластик'],['вес','Весовая']] },
  quality: { label: 'Качество',       options: [['premium','Премиум'],['comfort','Комфорт'],['eco','Эконом']] },
  origin:  { label: 'Происхождение',  options: [['Сахалин','Сахалин'],['Камчатка','Камчатка'],['Магадан','Магадан']] },
}

export default function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFilters, setMobileFilters] = useState(false)

  const active = useMemo(() => {
    const a = {}
    Object.keys(filters).forEach(k => { const v = searchParams.get(k); if (v) a[k] = v })
    return a
  }, [searchParams])

  const toggle = (key, val) => {
    const next = new URLSearchParams(searchParams)
    if (next.get(key) === val) next.delete(key)
    else next.set(key, val)
    setSearchParams(next)
  }

  const clearAll = () => setSearchParams({})

  const filtered = useMemo(() =>
    products.filter(p =>
      Object.entries(active).every(([k, v]) => p[k] === v || p[k] === '')
    ), [active])

  const Filters = () => (
    <div className="space-y-6">
      {Object.keys(active).length > 0 && (
        <button onClick={clearAll} className="flex items-center gap-2 text-gold text-xs tracking-widest uppercase hover:text-gold2 transition-colors">
          <X size={12} /> Сбросить фильтры
        </button>
      )}
      {Object.entries(filters).map(([key, { label, options }]) => (
        <div key={key}>
          <h4 className="text-[10px] text-white/40 tracking-[0.25em] uppercase mb-3">{label}</h4>
          <div className="flex flex-wrap gap-2">
            {options.map(([val, name]) => (
              <button
                key={val}
                onClick={() => toggle(key, val)}
                className={`px-3 py-1.5 text-[10px] tracking-wider uppercase border transition-all ${
                  active[key] === val
                    ? 'bg-gold border-gold text-[#0D2140] font-semibold'
                    : 'border-white/15 text-white/55 hover:border-gold/40 hover:text-white'
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="min-h-screen bg-[#0D2140] pt-24">

      {/* Page header */}
      <div className="relative bg-[#122850] py-16 grain-overlay">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <span className="section-tag">Каталог</span>
          <h1 className="section-title mt-2">
            Вся продукция<br />
            <em className="not-italic text-gold/80">Охотоморья</em>
          </h1>
          <p className="mt-4 text-white/55 text-sm max-w-lg font-light">
            Фильтруйте по типу, виду рыбы, упаковке, качеству и происхождению.
            Подберём под любой запрос.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="flex gap-10">

          {/* Desktop filters */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="font-display text-sm text-white mb-6">Фильтры</h3>
              <Filters />
            </div>
          </aside>

          {/* Products */}
          <div className="flex-1">

            {/* Mobile filter toggle */}
            <div className="lg:hidden flex items-center justify-between mb-6">
              <span className="text-white/55 text-sm">{filtered.length} товаров</span>
              <button onClick={() => setMobileFilters(!mobileFilters)} className="flex items-center gap-2 text-xs tracking-widest uppercase text-white/70 border border-white/15 px-4 py-2 hover:border-gold/30">
                <SlidersHorizontal size={12} /> Фильтры
                {Object.keys(active).length > 0 && <span className="bg-gold text-[#0D2140] text-[9px] px-1.5 py-0.5 font-bold">{Object.keys(active).length}</span>}
              </button>
            </div>

            {/* Mobile filters panel */}
            {mobileFilters && (
              <div className="lg:hidden bg-[#122850] border border-white/8 p-6 mb-6">
                <Filters />
              </div>
            )}

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-white/40 text-lg font-display">Ничего не найдено</p>
                <button onClick={clearAll} className="btn-outline mt-6">Сбросить фильтры</button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {filtered.map(p => (
                  <div key={p.id} className="card-product group cursor-pointer">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img src={p.img} alt={p.name} className="w-full h-full object-cover brightness-75 group-hover:brightness-90 transition-all duration-500 group-hover:scale-105" />
                      <div className="absolute top-3 left-3">
                        <span className={`text-[9px] tracking-widest uppercase px-2 py-1 font-semibold ${
                          p.quality === 'premium' ? 'bg-gold text-[#0D2140]' :
                          p.quality === 'comfort' ? 'bg-white/20 text-white' :
                          'bg-white/10 text-white/70'
                        }`}>
                          {p.quality === 'premium' ? 'Премиум' : p.quality === 'comfort' ? 'Комфорт' : 'Эконом'}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-display text-sm text-white group-hover:text-gold/80 transition-colors">{p.name}</h3>
                          <p className="text-white/40 text-[10px] mt-0.5">{p.brand}</p>
                        </div>
                        <ArrowRight size={14} className="text-gold/0 group-hover:text-gold/50 transition-all flex-shrink-0 mt-0.5" />
                      </div>
                      <div className="flex gap-3 mt-3 flex-wrap">
                        {[p.weight, p.pack, p.origin].filter(Boolean).map(tag => (
                          <span key={tag} className="text-[9px] text-white/40 tracking-wider uppercase border border-white/8 px-2 py-1">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 border border-white/8 bg-[#122850] px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl text-white">Нужна консультация по ассортименту?</h3>
            <p className="text-white/50 text-sm mt-2">Подберём оптимальный состав под вашу аудиторию и ценовой сегмент.</p>
          </div>
          <Link to="/contacts" className="btn-gold flex-shrink-0">
            Написать менеджеру <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  )
}
