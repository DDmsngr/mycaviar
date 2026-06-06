import { useState } from 'react'
import { Send, Phone, Mail, MessageCircle } from 'lucide-react'

export default function PriceRequest() {
  const [form, setForm] = useState({ name: '', phone: '', consent: false })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.consent) return
    setSent(true)
  }

  return (
    <section id="contact" className="relative bg-navy2 py-28 grain-overlay">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left: form */}
          <div>
            <span className="section-tag">Связаться с нами</span>
            <span className="gold-line" />
            <h2 className="section-title">
              Запросить<br />
              <em className="not-italic text-gold/80">прайс-лист</em>
            </h2>
            <p className="mt-4 text-steel text-sm font-light leading-relaxed mb-10">
              Оставьте номер — менеджер свяжется в течение 15 минут в рабочее время.
            </p>

            {sent ? (
              <div className="border border-gold/30 bg-gold/5 px-8 py-10 text-center">
                <div className="font-display text-2xl text-gold mb-2">Спасибо!</div>
                <p className="text-steel text-sm">Мы получили вашу заявку и перезвоним в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-navy3 border border-white/8 text-cream placeholder-steel/50 px-5 py-4 text-sm font-light focus:outline-none focus:border-gold/40 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Телефон"
                    required
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-navy3 border border-white/8 text-cream placeholder-steel/50 px-5 py-4 text-sm font-light focus:outline-none focus:border-gold/40 transition-colors"
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer group mt-6">
                  <div
                    className={`mt-0.5 w-4 h-4 flex-shrink-0 border transition-colors ${
                      form.consent ? 'bg-gold border-gold' : 'border-white/20 group-hover:border-gold/40'
                    }`}
                    onClick={() => setForm({ ...form, consent: !form.consent })}
                  >
                    {form.consent && (
                      <svg viewBox="0 0 12 12" className="w-full h-full p-0.5">
                        <path d="M2 6 L5 9 L10 3" stroke="#030D1A" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                      </svg>
                    )}
                  </div>
                  <span className="text-steel text-xs font-light leading-relaxed">
                    Я согласен(а) на обработку персональных данных в соответствии с{' '}
                    <a href="#" className="text-gold/60 hover:text-gold underline-offset-2 hover:underline">
                      политикой конфиденциальности
                    </a>
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={!form.consent}
                  className={`w-full btn-gold justify-center py-4 ${!form.consent ? 'opacity-40 cursor-not-allowed' : ''}`}
                >
                  Отправить заявку
                  <Send size={13} />
                </button>
              </form>
            )}
          </div>

          {/* Right: contacts */}
          <div className="lg:pt-24">
            <h3 className="font-display text-xl text-cream mb-8">Другие способы связи</h3>

            <div className="space-y-5">
              <a href="tel:+74951234567"
                className="flex items-center gap-5 p-5 border border-white/5 hover:border-gold/20 transition-colors group"
              >
                <div className="w-10 h-10 border border-gold/20 flex items-center justify-center group-hover:border-gold/50 transition-colors">
                  <Phone size={15} className="text-gold" />
                </div>
                <div>
                  <div className="text-cream text-sm font-medium">+7 (495) 123-45-67</div>
                  <div className="text-steel text-xs mt-0.5">Пн–Пт, 9:00–18:00 МСК</div>
                </div>
              </a>

              <a href="mailto:info@mycaviar.ru"
                className="flex items-center gap-5 p-5 border border-white/5 hover:border-gold/20 transition-colors group"
              >
                <div className="w-10 h-10 border border-gold/20 flex items-center justify-center group-hover:border-gold/50 transition-colors">
                  <Mail size={15} className="text-gold" />
                </div>
                <div>
                  <div className="text-cream text-sm font-medium">info@mycaviar.ru</div>
                  <div className="text-steel text-xs mt-0.5">Ответим в течение дня</div>
                </div>
              </a>

              <div className="flex items-center gap-5 p-5 border border-white/5">
                <div className="w-10 h-10 border border-gold/20 flex items-center justify-center">
                  <MessageCircle size={15} className="text-gold" />
                </div>
                <div>
                  <div className="text-cream text-sm font-medium">WhatsApp / Telegram</div>
                  <div className="text-steel text-xs mt-0.5">Быстрый ответ в мессенджерах</div>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 border border-gold/10 bg-gold/[0.03]">
              <div className="font-display text-gold text-sm mb-1">Офис и склад</div>
              <p className="text-steel text-sm font-light leading-relaxed">
                Москва, ул. Примерная, д. 15, офис 304<br />
                Склад: г. Москва, Наро-Фоминский р-н
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
