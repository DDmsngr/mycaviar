import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Ship from './Ship'

const links = [
  { href: '#about',      label: 'О компании' },
  { href: '#catalog',    label: 'Каталог' },
  { href: '#clients',    label: 'Клиенты' },
  { href: '#contact',    label: 'Контакты' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-navy/95 backdrop-blur-xl border-b border-white/5 shadow-[0_2px_30px_rgba(0,0,0,0.4)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <Ship className="w-14 h-8 text-gold opacity-70 group-hover:opacity-100 transition-opacity" />
              <div>
                <span className="block font-display text-lg font-semibold text-cream tracking-wider leading-none">
                  Охотоморье
                </span>
                <span className="block text-[9px] text-steel tracking-[0.3em] uppercase mt-0.5">
                  Морепродукты
                </span>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-steel text-xs tracking-[0.15em] uppercase hover:text-cream transition-colors duration-200 relative group"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+74951234567" className="flex items-center gap-1.5 text-steel text-xs hover:text-cream transition-colors">
                <Phone size={12} className="text-gold" />
                +7 (495) 123-45-67
              </a>
              <a href="#contact" className="btn-gold text-[10px] py-2.5 px-5">
                Запросить прайс
              </a>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-cream hover:text-gold transition-colors"
              aria-label="Меню"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-navy/98 backdrop-blur-xl" onClick={() => setOpen(false)} />
        <div className="relative h-full flex flex-col justify-center items-center gap-8 pt-20">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl text-cream hover:text-gold transition-colors"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-gold mt-4">
            Запросить прайс
          </a>
          <a href="tel:+74951234567" className="flex items-center gap-2 text-steel text-sm">
            <Phone size={14} className="text-gold" />
            +7 (495) 123-45-67
          </a>
        </div>
      </div>
    </>
  )
}
