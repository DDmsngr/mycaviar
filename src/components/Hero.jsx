import { useEffect, useRef } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import Hls from 'hls.js'

// Замените на ваш HLS-стрим или MP4-ссылку
const VIDEO_SRC = null
// Пример HLS: 'https://your-cdn.com/stream/playlist.m3u8'
// Пример MP4: 'https://your-cdn.com/video/hero.mp4'

const stats = [
  { value: '20+',   label: 'лет на рынке' },
  { value: '3',     label: 'завода' },
  { value: '50+',   label: 'видов продукции' },
  { value: 'ХАССП', label: 'сертифицировано' },
]

export default function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video || !VIDEO_SRC) return

    if (VIDEO_SRC.includes('.m3u8')) {
      if (Hls.isSupported()) {
        const hls = new Hls({ autoStartLoad: true, startLevel: -1 })
        hls.loadSource(VIDEO_SRC)
        hls.attachMedia(video)
        hls.on(Hls.Events.MANIFEST_PARSED, () => video.play().catch(() => {}))
        return () => hls.destroy()
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = VIDEO_SRC
        video.play().catch(() => {})
      }
    } else {
      video.src = VIDEO_SRC
      video.play().catch(() => {})
    }
  }, [])

  return (
    <section className="relative h-screen overflow-hidden" id="home">

      {/* Video */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        poster="/mycaviar/img/hero.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#060e1c] via-[#0D2140]/55 to-[#0D2140]/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#060e1c]/75 via-[#0D2140]/20 to-transparent" />

      {/* Subtle vignette */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 120% 100% at 75% 40%, transparent 40%, rgba(6,14,28,0.5) 100%)'
      }} />

      {/* Hero content — bottom-left */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-28 lg:pb-32">

          {/* Tag */}
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold/60" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold/80 font-medium">
              Дальневосточные морепродукты
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display font-light leading-[0.88] mb-8">
            <span className="block text-[clamp(54px,10vw,130px)] text-white tracking-[-0.02em]">
              Охото&shy;морье
            </span>
            <span className="block text-[clamp(16px,2.4vw,28px)] text-white/45 tracking-[0.12em] font-normal mt-4 ml-1">
              поставщик икры и морепродуктов
            </span>
          </h1>

          {/* Description + CTA */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="max-w-md">
              <p className="text-white/60 text-sm md:text-base leading-relaxed font-light mb-8">
                Оптовые поставки с Сахалина. Собственное производство.{' '}
                <span className="text-white/85">Двадцать лет надёжности.</span>
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/catalog" className="btn-gold">
                  Смотреть каталог
                  <ArrowRight size={13} />
                </Link>
                <Link to="/contacts"
                  className="flex items-center gap-2 px-5 py-3 text-xs tracking-widest uppercase text-white/70 border border-white/20 hover:border-gold/40 hover:text-white transition-all duration-300">
                  Запросить прайс
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-px shrink-0">
              {stats.map(s => (
                <div key={s.label}
                  className="bg-white/[0.04] backdrop-blur-md border border-white/[0.07] px-5 py-4 text-center min-w-[80px]">
                  <div className="font-display text-xl text-gold leading-none">{s.value}</div>
                  <div className="text-white/40 text-[9px] tracking-[0.15em] uppercase mt-1.5 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom gradient fade into next section */}
        <div className="h-16 bg-gradient-to-b from-transparent to-[#0D2140]" />
      </div>

      {/* Scroll hint */}
      <a href="#about"
        className="absolute bottom-8 right-10 hidden lg:flex flex-col items-center gap-2 text-white/25 hover:text-gold/50 transition-colors z-20"
        aria-label="Далее">
        <span className="text-[9px] tracking-[0.25em] uppercase rotate-90 mb-2">scroll</span>
        <ChevronDown size={13} className="animate-bounce" />
      </a>

    </section>
  )
}
