import { useState } from 'react'
import { Phone, Mail, MessageCircle, MapPin, Send } from 'lucide-react'
import Ship from '../components/Ship'

export default function ContactsPage() {
  const [form, setForm] = useState({ name: '', phone: '', message: '', consent: false })
  const [sent, setSent] = useState(false)

  return (
    <div className="min-h-screen bg-[#0D2140] pt-24">

      {/* Header */}
      <div className="relative bg-[#122850] py-20 grain-overlay overflow-hidden">
        <Ship className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] text-white/[0.04] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <span className="section-tag">Контакты</span>
          <h1 className="section-title mt-2">
            Свяжитесь<br />
            <em className="not-italic text-gold/80">с нами</em>
          </h1>
          <p className="mt-4 text-white/55 text-sm max-w-md font-light">
            Власов Виктор Александрович — руководитель.<br />
            Ответим быстро в любом удобном канале.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Form */}
          <div>
            <h2 className="font-display text-2xl text-white mb-8">Запросить прайс или консультацию</h2>

            {sent ? (
              <div className="border border-gold/30 bg-gold/5 px-8 py-12 text-center">
                <div className="font-display text-3xl text-gold mb-3">Спасибо!</div>
                <p className="text-white/60 font-light">Мы получили вашу заявку и перезвоним в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); if (form.consent) setSent(true) }} className="space-y-4">
                <input type="text" placeholder="Ваше имя" required value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[#1A3A6B] border border-white/10 text-white placeholder-white/30 px-5 py-4 text-sm font-light focus:outline-none focus:border-gold/40 transition-colors" />
                <input type="tel" placeholder="Телефон" required value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-[#1A3A6B] border border-white/10 text-white placeholder-white/30 px-5 py-4 text-sm font-light focus:outline-none focus:border-gold/40 transition-colors" />
                <textarea placeholder="Сообщение (необязательно)" rows={4} value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-[#1A3A6B] border border-white/10 text-white placeholder-white/30 px-5 py-4 text-sm font-light focus:outline-none focus:border-gold/40 transition-colors resize-none" />

                <label className="flex items-start gap-3 cursor-pointer group">
                  <div onClick={() => setForm({ ...form, consent: !form.consent })}
                    className={`mt-0.5 w-4 h-4 flex-shrink-0 border transition-colors ${form.consent ? 'bg-gold border-gold' : 'border-white/25 group-hover:border-gold/40'}`}>
                    {form.consent && (
                      <svg viewBox="0 0 12 12" className="w-full h-full p-0.5">
                        <path d="M2 6 L5 9 L10 3" stroke="#0D2140" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                      </svg>
                    )}
                  </div>
                  <span className="text-white/50 text-xs font-light leading-relaxed">
                    Согласен(а) на обработку персональных данных в соответствии с{' '}
                    <a href="#" className="text-gold/60 hover:text-gold">политикой конфиденциальности</a>
                  </span>
                </label>

                <button type="submit" disabled={!form.consent}
                  className={`w-full btn-gold justify-center py-4 ${!form.consent ? 'opacity-40 cursor-not-allowed' : ''}`}>
                  Отправить <Send size={13} />
                </button>
              </form>
            )}
          </div>

          {/* Contacts */}
          <div>
            <h2 className="font-display text-2xl text-white mb-8">Контактная информация</h2>

            <div className="space-y-4 mb-10">
              {[
                { icon: Phone,         href: 'tel:+79851490077',      title: '+7 985 149-00-77',  sub: 'Власов Виктор Александрович, руководитель' },
                { icon: Mail,          href: 'mailto:1490077@mail.ru', title: '1490077@mail.ru',   sub: 'Ответим в течение рабочего дня' },
                { icon: MessageCircle, href: '#',                      title: 'WhatsApp',          sub: 'mycaviar.ru' },
                { icon: MapPin,        href: '#',                      title: 'Офис',              sub: 'Уточняйте у менеджера' },
              ].map(({ icon: Icon, href, title, sub }) => (
                <a key={title} href={href} className="flex items-center gap-5 p-5 border border-white/8 hover:border-gold/20 transition-colors group">
                  <div className="w-10 h-10 border border-gold/20 flex items-center justify-center group-hover:border-gold/50 transition-colors flex-shrink-0">
                    <Icon size={15} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">{title}</div>
                    <div className="text-white/45 text-xs mt-0.5">{sub}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Working hours */}
            <div className="border border-white/8 bg-[#122850] p-6">
              <h3 className="font-display text-white text-sm mb-4">Время работы</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/50 font-light">Пн — Пт</span>
                  <span className="text-white">9:00 — 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50 font-light">Сб — Вс</span>
                  <span className="text-white/40">По договорённости</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
