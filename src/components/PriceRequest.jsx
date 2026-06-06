import { useState } from 'react'
import { Send, Phone, Mail, MessageCircle } from 'lucide-react'

export default function PriceRequest() {
  const [form, setForm] = useState({ name: '', phone: '', consent: false })
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="relative bg-[#0D2140] py-28 grain-overlay">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <span className="section-tag">Связаться с нами</span>
            <span className="gold-line" />
            <h2 className="section-title">
              Запросить<br />
              <em className="not-italic text-gold/80">прайс-лист</em>
            </h2>
            <p className="mt-4 text-white/55 text-sm font-light leading-relaxed mb-10">
              Оставьте номер — менеджер свяжется в течение 15 минут в рабочее время.
            </p>

            {sent ? (
              <div className="border border-gold/30 bg-gold/5 px-8 py-10 text-center">
                <div className="font-display text-2xl text-gold mb-2">Спасибо!</div>
                <p className="text-white/60 text-sm">Мы получили вашу заявку и перезвоним в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); if (form.consent) setSent(true) }} className="space-y-4">
                <input
                  type="text" placeholder="Ваше имя" required
                  value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[#1A3A6B] border border-white/10 text-white placeholder-white/30 px-5 py-4 text-sm font-light focus:outline-none focus:border-gold/40 transition-colors"
                />
                <input
                  type="tel" placeholder="Телефон" required
                  value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-[#1A3A6B] border border-white/10 text-white placeholder-white/30 px-5 py-4 text-sm font-light focus:outline-none focus:border-gold/40 transition-colors"
                />

                <label className="flex items-start gap-3 cursor-pointer group mt-6">
                  <div
                    onClick={() => setForm({ ...form, consent: !form.consent })}
                    className={`mt-0.5 w-4 h-4 flex-shrink-0 border transition-colors ${form.consent ? 'bg-gold border-gold' : 'border-white/25 group-hover:border-gold/40'}`}
                  >
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

                <button
                  type="submit"
                  disabled={!form.consent}
                  className={`w-full btn-gold justify-center py-4 ${!form.consent ? 'opacity-40 cursor-not-allowed' : ''}`}
                >
                  Отправить заявку <Send size={13} />
                </button>
              </form>
            )}
          </div>

          <div className="lg:pt-24">
            <h3 className="font-display text-xl text-white mb-8">Другие способы связи</h3>
            <div className="space-y-4">
              {[
                { icon: Phone,         href: 'tel:+79851490077',     title: '+7 985 149-00-77',   sub: 'Власов Виктор Александрович' },
                { icon: Mail,          href: 'mailto:1490077@mail.ru', title: '1490077@mail.ru',  sub: 'Ответим в течение дня' },
                { icon: MessageCircle, href: '#',                     title: 'WhatsApp / Telegram', sub: 'Быстрый ответ' },
              ].map(({ icon: Icon, href, title, sub }) => (
                <a key={title} href={href} className="flex items-center gap-5 p-5 border border-white/8 hover:border-gold/20 transition-colors group">
                  <div className="w-10 h-10 border border-gold/20 flex items-center justify-center group-hover:border-gold/50 transition-colors">
                    <Icon size={15} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">{title}</div>
                    <div className="text-white/45 text-xs mt-0.5">{sub}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
