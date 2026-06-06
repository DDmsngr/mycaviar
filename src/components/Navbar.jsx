import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import Ship from './Ship'

const links = [
  { to: '/',         label: 'Главная' },
  { to: '/catalog',  label: 'Каталог' },
  { to: '/about',    label: 'О компании' },
  { to: '/contacts', label: 'Контакты' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(13, 33, 64, 0.92)'
            : 'rgba(10, 20, 42, 0.35)',
          backdropFilter: 'blur(20px) saturate(1.4)',
          WebkitBackdropFilter: 'blur(20px) saturate(1.4)',
          borderBottom: scrolled
            ? '1px solid rgba(255,255,255,0.08)'
            : '1px solid rgba(255,255,255,0.06)',
          boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.35)' : 'none',
        }}
      >
        {/* Top gold line — decorative */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-[72px]">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <Ship className="w-12 h-7 text-white opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              <div>
                <span className="block font-display text-base font-semibold text-white tracking-wider leading-none">
                  Охотоморье
                </span>
                <span className="block text-[8px] text-white/35 tracking-[0.35em] uppercase mt-1">
                  Морепродукты
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {links.map(l => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `relative text-[10px] tracking-[0.2em] uppercase font-medium transition-colors duration-200 group ${
                      isActive ? 'text-gold' : 'text-white/55 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {l.label}
                      <span className={`absolute -bottom-0.5 left-0 h-px bg-gold/70 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`} />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Desktop right */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href="tel:+79851490077"
                className="flex items-center gap-2 text-white/45 text-[11px] tracking-wide hover:text-white transition-colors duration-200"
              >
                <Phone size={11} className="text-gold/70" />
                +7 985 149-00-77
              </a>
              <Link
                to="/contacts"
                className="btn-gold text-[9px] py-2.5 px-5 tracking-[0.2em]"
              >
                Запросить прайс
              </Link>
            </div>

            {/* Burger */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-white/70 hover:text-white transition-colors"
              aria-label="Меню"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-400 ${
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div
          className="absolute inset-0"
          style={{
            background: 'rgba(6, 14, 28, 0.97)',
            backdropFilter: 'blur(24px)',
          }}
          onClick={() => setOpen(false)}
        />
        <div className="relative h-full flex flex-col justify-center items-center gap-8 pt-20">
          {links.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `font-display text-3xl tracking-wide transition-colors duration-200 ${
                  isActive ? 'text-gold' : 'text-white hover:text-gold'
                }`
              }
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {l.label}
            </NavLink>
          ))}
          <div className="h-px w-24 bg-gold/20 mt-2" />
          <Link to="/contacts" onClick={() => setOpen(false)} className="btn-gold mt-2">
            Запросить прайс
          </Link>
          <a href="tel:+79851490077" className="flex items-center gap-2 text-white/40 text-sm">
            <Phone size={13} className="text-gold/60" />
            +7 985 149-00-77
          </a>
        </div>
      </div>
    </>
  )
}
