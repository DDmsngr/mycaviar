import Ship from './Ship'

const nav = [
  { href: '#about',   label: 'О компании' },
  { href: '#catalog', label: 'Каталог' },
  { href: '#clients', label: 'Клиенты' },
  { href: '#contact', label: 'Контакты' },
]

export default function Footer() {
  return (
    <footer className="relative bg-navy2 border-t border-white/5 overflow-hidden">

      {/* Ship watermark */}
      <Ship className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full max-w-3xl text-white/[0.025] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Main footer */}
        <div className="grid md:grid-cols-4 gap-10 py-16 border-b border-white/5">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Ship className="w-14 h-8 text-gold opacity-50" />
              <span className="font-display text-lg text-cream tracking-wider">Охотоморье</span>
            </div>
            <p className="text-steel text-sm font-light leading-relaxed max-w-sm">
              Оптовые поставки красной икры и морепродуктов с Дальнего Востока.
              Собственное производство на Сахалине. 20 лет надёжности.
            </p>
            <div className="flex gap-3 mt-6">
              {['WA', 'TG', 'VK'].map(m => (
                <a
                  key={m}
                  href="#"
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-steel hover:text-gold hover:border-gold/30 transition-all text-[10px] font-medium tracking-wider"
                >
                  {m}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-[10px] text-steel tracking-[0.25em] uppercase mb-5">Разделы</h4>
            <ul className="space-y-2.5">
              {nav.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-steel text-sm hover:text-cream transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-[10px] text-steel tracking-[0.25em] uppercase mb-5">Контакты</h4>
            <div className="space-y-3 text-steel text-sm font-light">
              <a href="tel:+74951234567" className="block hover:text-cream transition-colors">
                +7 (495) 123-45-67
              </a>
              <a href="mailto:info@mycaviar.ru" className="block hover:text-cream transition-colors">
                info@mycaviar.ru
              </a>
              <p className="leading-relaxed text-xs mt-4">
                Москва, ул. Примерная, д. 15<br />
                офис 304
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 py-6 text-steel text-[11px]">
          <span>© 2004–2026 ООО «Охотоморье». Все права защищены.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cream transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-cream transition-colors">Пользовательское соглашение</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
