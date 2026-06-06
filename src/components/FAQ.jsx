import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Какой минимальный объём для первой отгрузки?',
    a: 'Мы индивидуально обсуждаем условия первой пробной отгрузки. Готовы работать как с небольшими объёмами для старта, так и с крупными партиями. Свяжитесь с нашим менеджером — подберём оптимальное решение.',
  },
  {
    q: 'Какие виды упаковки доступны?',
    a: 'Жестяная банка (европейский формат), стеклянная банка, пластиковый контейнер, весовая икра. Фасовки от 55 до 600 г. Весовая икра от 1 до 20 кг. Любой формат под запрос вашего рынка.',
  },
  {
    q: 'Работаете ли с экспортом?',
    a: 'Да. Вся продукция аккредитована в системе Цербер и сертифицирована для экспорта в страны ЕАЭС и СНГ. Для подробностей по экспортным поставкам обратитесь к нашему отделу продаж.',
  },
  {
    q: 'Какова география поставок?',
    a: 'Работаем по всей России — от Москвы до Владивостока. Доставка через проверенных транспортных партнёров с соблюдением температурного режима.',
  },
  {
    q: 'Есть ли сертификаты качества?',
    a: 'Вся продукция проходит обязательную сертификацию. Сырьё поступает от ведущих промысловых компаний — «Тунайча», «Гидрострой», «Меридиан», «Тымлатский рыбокомбинат». По запросу предоставляем полный пакет документов.',
  },
  {
    q: 'Помогаете ли начинающим предпринимателям?',
    a: 'Да, это одно из наших ключевых направлений. Консультируем по ассортименту, помогаем понять специфику работы с икрой, готовы к индивидуальным условиям для первой отгрузки.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="relative bg-navy py-28">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-tag">FAQ</span>
            <span className="gold-line mx-auto" />
            <h2 className="section-title">
              Часто задаваемые<br />
              <em className="not-italic text-gold/80">вопросы</em>
            </h2>
          </div>

          <div className="space-y-px">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`border-b border-white/5 transition-colors ${open === i ? 'bg-navy2/50' : ''}`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left group"
                >
                  <span className={`font-display text-base transition-colors duration-200 ${
                    open === i ? 'text-gold/90' : 'text-cream group-hover:text-gold/70'
                  }`}>
                    {faq.q}
                  </span>
                  <span className={`flex-shrink-0 mt-0.5 w-5 h-5 border transition-all duration-200 flex items-center justify-center ${
                    open === i ? 'border-gold/50 text-gold' : 'border-white/15 text-steel'
                  }`}>
                    {open === i ? <Minus size={11} /> : <Plus size={11} />}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    open === i ? 'max-h-48 pb-5' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 text-steel text-sm font-light leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
