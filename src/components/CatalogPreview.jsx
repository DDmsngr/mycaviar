import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const categories = [
  { label: 'Икра красная',  sub: 'Премиум · Комфорт · Эконом', img: '/mycaviar/img/premium.jpg',    href: '/catalog?cat=caviar' },
  { label: 'Консервы',      sub: 'Корюшка · Печень трески',     img: '/mycaviar/img/koryushka.jpg', href: '/catalog?cat=conserves' },
  { label: 'Пресервы',      sub: 'Кальмар · Мидии',             img: '/mycaviar/img/preservy.jpg',  href: '/catalog?cat=preserves' },
  { label: 'Морепродукты',  sub: 'Икра сельди · Рыба',          img: '/mycaviar/img/iskra.jpg',     href: '/catalog?cat=seafood' },
]

export default function CatalogPreview() {
  return (
    <section id="catalog" className="relative bg-[#122850] py-28">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="section-tag">Продукция</span>
            <span className="gold-line" />
            <h2 className="section-title">
              Каталог<br />
              <em className="not-italic text-gold/80">икры и морепродуктов</em>
            </h2>
          </div>
          <Link to="/catalog" className="btn-outline self-start md:self-auto">
            Полный каталог <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map(cat => (
            <Link key={cat.label} to={cat.href} className="card-product group block">
              <div className="aspect-[3/2] overflow-hidden relative">
                <img
                  src={cat.img}
                  alt={cat.label}
                  className="w-full h-full object-cover brightness-60 group-hover:brightness-80 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D2140]/80 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-base text-white group-hover:text-gold/80 transition-colors">{cat.label}</h3>
                <p className="text-white/45 text-[11px] tracking-wider mt-1">{cat.sub}</p>
                <div className="flex items-center gap-1 mt-3 text-gold/0 group-hover:text-gold/60 transition-all text-[11px] tracking-widest uppercase">
                  Смотреть <ArrowRight size={10} className="translate-x-0 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}
