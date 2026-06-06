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
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-[#0D2140]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_2px_30px_rgba(0,0,0,0.3)]'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">

            <Link to="/" className="flex items-center gap-3 group">
              <Ship className="w-14 h-8 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
              <div>
                <span className="block font-display text-lg font-semibold text-white tracking-wider leading-none">
                  Охотоморье
                </span>
                <span className="block text-[9px] text-white/50 tracking-[0.3em] uppercase mt-0.5">
                  Морепродукты
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {links.map(l => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `text-xs tracking-[0.15em] uppercase transition-colors duration-200 relative group ${
                      isActive ? 'text-gold' : 'text-white/70 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {l.label}
                      <span className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+79851490077" className="flex items-center gap-1.5 text-white/60 text-xs hover:text-white transition-colors">
                <Phone size={12} className="text-gold" />
                +7 985 149-00-77
              </a>
              <Link to="/contacts" className="btn-gold text-[10px] py-2.5 px-5">
                Запросить прайс
              </Link>
            </div>

            <button onClick={() => setOpen(!open)} className="lg:hidden text-white hover:text-gold transition-colors" aria-label="Меню">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-[#0D2140]/98 backdrop-blur-xl" onClick={() => setOpen(false)} />
        <div className="relative h-full flex flex-col justify-center items-center gap-8 pt-20">
          {links.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `font-display text-3xl transition-colors ${isActive ? 'text-gold' : 'text-white hover:text-gold'}`
              }
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contacts" onClick={() => setOpen(false)} className="btn-gold mt-4">
            Запросить прайс
          </Link>
          <a href="tel:+79851490077" className="flex items-center gap-2 text-white/60 text-sm">
            <Phone size={14} className="text-gold" />
            +7 985 149-00-77
          </a>
        </div>
      </div>
    </>
  )
}
