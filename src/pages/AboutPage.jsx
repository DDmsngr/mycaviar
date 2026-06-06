import { Link } from 'react-router-dom'
import { Award, ArrowRight } from 'lucide-react'
import Ship from '../components/Ship'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0D2140] pt-24">

      {/* Header */}
      <div className="relative bg-[#122850] py-20 grain-overlay overflow-hidden">
        <Ship className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] text-white/[0.04] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <span className="section-tag">О компании</span>
          <h1 className="section-title mt-2">
            Охотоморье —<br />
            <em className="not-italic text-gold/80">двадцать лет на рынке</em>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

        {/* Main story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-white mb-6">
              Надёжный поставщик<br />с Дальнего Востока
            </h2>
            <div className="space-y-4 text-white/60 text-base font-light leading-relaxed">
              <p>«Охотоморье» уже более двадцати лет занимает прочные позиции на рынке, зарекомендовав себя как надёжный и ответственный поставщик морепродуктов с Дальнего Востока.</p>
              <p>Мы тщательно контролируем каждый этап производства — от экспертного отбора сырья до финальной упаковки, чтобы гарантировать только лучший продукт.</p>
              <p>Флагманский продукт компании — красная икра кеты сахалинского завода «Меридиан». Мы работаем только с проверенными промысловыми партнёрами: «Тунайча», «Гидрострой», «Меридиан», «Тымлатский рыбокомбинат».</p>
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden aspect-[4/3]">
              <img src="/mycaviar/img/about.jpg" alt="Производство" className="w-full h-full object-cover brightness-75 hover:brightness-90 transition-all duration-700" />
              <div className="absolute inset-0 border border-gold/15 pointer-events-none" />
              <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-gold/40" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-gold/40" />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-[#1A3A6B] border border-gold/25 p-5 flex items-center gap-3">
              <Award className="text-gold" size={24} />
              <div>
                <div className="font-display text-white text-sm">С 2004 года</div>
                <div className="text-white/50 text-[10px] tracking-widest uppercase">на рынке</div>
              </div>
            </div>
          </div>
        </div>

        {/* Преимущества числами */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8 mb-24">
          {[
            { n: '20+',  t: 'лет на рынке' },
            { n: '3',    t: 'производственных площадки' },
            { n: '50+',  t: 'наименований продукции' },
            { n: '100+', t: 'партнёров по России' },
          ].map(({ n, t }) => (
            <div key={t} className="bg-[#0D2140] px-6 py-8 text-center">
              <div className="font-display text-4xl text-gold">{n}</div>
              <div className="text-white/50 text-xs tracking-wider mt-2 uppercase">{t}</div>
            </div>
          ))}
        </div>

        {/* Производство — скрытый блок */}
        <div className="mb-20 border border-white/8 bg-[#122850] p-8 md:p-12">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h2 className="font-display text-2xl text-white mb-3">Производство и добыча</h2>
              <p className="text-white/55 text-sm font-light leading-relaxed max-w-xl">
                Видео и фото с производства, фасовки, подробный рассказ о пути продукта
                от добычи до упаковки — готовятся к публикации.
              </p>
            </div>
            <span className="border border-gold/30 text-gold text-[10px] tracking-widest uppercase px-4 py-2 flex-shrink-0">
              Скоро
            </span>
          </div>
        </div>

        {/* Дипломы и сертификаты */}
        <div className="mb-20">
          <h2 className="font-display text-2xl text-white mb-8">Дипломы и сертификаты</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-white/8 bg-[#122850] p-6 flex items-center gap-5">
              <div className="w-16 h-16 border border-gold/20 flex items-center justify-center flex-shrink-0">
                <Award className="text-gold" size={28} />
              </div>
              <div>
                <h3 className="font-display text-white text-base">Диплом «Сахалинское качество — 2017»</h3>
                <p className="text-white/50 text-sm mt-1 font-light">Победитель в номинации «Икра лососевая зернистая баночная»</p>
              </div>
            </div>
            <div className="border border-white/8 bg-[#122850] p-6 flex items-center gap-5">
              <div className="w-16 h-16 border border-gold/20 flex items-center justify-center flex-shrink-0">
                <Award className="text-gold" size={28} />
              </div>
              <div>
                <h3 className="font-display text-white text-base">Сертификация ХАССП</h3>
                <p className="text-white/50 text-sm mt-1 font-light">Аккредитация в системе Цербер. Сертифицировано для экспорта в ЕАЭС и СНГ.</p>
              </div>
            </div>
          </div>
          <p className="text-white/35 text-xs mt-4 font-light italic">
            * Компания приостановила участие в выставках в 2020 году. Все актуальные сертификаты предоставляются по запросу.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center border border-white/8 py-14 px-6">
          <h3 className="font-display text-2xl text-white mb-3">Хотите узнать больше?</h3>
          <p className="text-white/50 text-sm mb-8 font-light">Свяжитесь с нами — расскажем о производстве и ответим на любые вопросы</p>
          <Link to="/contacts" className="btn-gold">
            Написать нам <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  )
}
