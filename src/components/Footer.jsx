import { Link } from 'react-router-dom'
import Ship from './Ship'

export default function Footer() {
  return (
    <footer className="relative bg-[#0A1A33] border-t border-white/8 overflow-hidden">
      <Ship className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full max-w-3xl text-white/[0.03] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-4 gap-10 py-16 border-b border-white/8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Ship className="w-14 h-8 text-white opacity-60" />
              <span className="font-display text-lg text-white tracking-wider">Охотоморье</span>
            </div>
            <p className="text-white/50 text-sm font-light leading-relaxed max-w-sm">
              Оптовые поставки красной икры и морепродуктов с Дальнего Востока.
              Собственное производство на Сахалине. 20 лет надёжности.
            </p>
            <div className="flex gap-3 mt-6">
              {['WA', 'TG', 'VK'].map(m => (
                <a key={m} href="#" className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/30 transition-all text-[10px] font-medium tracking-wider">
                  {m}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] text-white/40 tracking-[0.25em] uppercase mb-5">Разделы</h4>
            <ul className="space-y-2.5">
              {[['/', 'Главная'],['/catalog','Каталог'],['/about','О компании'],['/contacts','Контакты']].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-white/50 text-sm hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] text-white/40 tracking-[0.25em] uppercase mb-5">Контакты</h4>
            <div className="space-y-3 text-white/50 text-sm font-light">
              <a href="tel:+79851490077" className="block hover:text-white transition-colors">+7 985 149-00-77</a>
              <a href="mailto:1490077@mail.ru" className="block hover:text-white transition-colors">1490077@mail.ru</a>
              <p className="text-xs mt-4 leading-relaxed">mycaviar.ru</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 py-6 text-white/30 text-[11px]">
          <span>© 2004–2026 ООО «Охотоморье». Все права защищены.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white/60 transition-colors">Пользовательское соглашение</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
