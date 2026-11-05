import { PROCESS_STEPS, SERVICES } from '../data/services'
import type { TabType } from '../types'

interface ServicesPageProps {
  selectedService: string
  onSelectService: (service: string) => void
  onNavigate: (tab: TabType) => void
}

export function ServicesPage({ selectedService, onSelectService, onNavigate }: ServicesPageProps) {
  const handleServiceSelect = (serviceId: string) => {
    onSelectService(serviceId)
    onNavigate('contact')
  }

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Header Serviços */}
      <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
        <div className="inline-flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-[#6486AC] shrink-0">
            <path d="M12 0c1.1 7.4 4.6 10.9 12 12-7.4 1.1-10.9 4.6-12 12-1.1-7.4-4.6-10.9-12-12 7.4-1.1 10.9-4.6 12-12z" />
          </svg>
          <span className="text-[10px] sm:text-[11px] font-semibold text-[#4C6B8C] tracking-[2px] uppercase">
            SERVIÇOS
          </span>
        </div>
        <h1 className="font-['Fraunces',Georgia,serif] text-3xl sm:text-4xl md:text-5xl text-[#102E4A] font-bold leading-tight">
          Design com propósito para marcas que desejam crescer.
        </h1>
        <p className="text-sm sm:text-base text-[#4C6B8C] leading-relaxed">
          Cada serviço é pensado para resolver uma necessidade real do seu posicionamento, aliando apelo visual de alto nível e estratégia comercial.
        </p>
      </div>

      {/* Grid 3 Serviços */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#FFFCF5] border transition flex flex-col justify-between ${
              selectedService === service.id
                ? 'border-[#102E4A] shadow-lg ring-1 ring-[#102E4A]'
                : 'border-[#E7DDC9] hover:border-[#6486AC]'
            }`}
          >
            <div className="space-y-4 sm:space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-[#E8EFF7] flex items-center justify-center text-[#102E4A]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  {service.icon === 'social' && (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  )}
                  {service.icon === 'brand' && (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  )}
                  {service.icon === 'consulting' && (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  )}
                </svg>
              </div>
              <div>
                <h3 className="font-['Fraunces',Georgia,serif] text-xl sm:text-2xl font-bold text-[#102E4A]">
                  {service.title}
                </h3>
                <p className="text-xs text-[#4C6B8C] mt-2 leading-relaxed">
                  {service.subtitle}
                </p>
              </div>
              <div className="border-t border-[#E7DDC9] pt-4 space-y-2.5">
                <p className="text-[11px] font-semibold text-[#102E4A] uppercase tracking-wider">Entregáveis:</p>
                <ul className="space-y-2 text-xs text-[#4C6B8C]">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-[#6486AC]">✦</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="pt-6 sm:pt-8">
              <button
                onClick={() => handleServiceSelect(service.id)}
                className="w-full text-center bg-[#102E4A] hover:bg-[#102E4A]/90 text-[#F9F3E3] py-3 rounded-full text-xs font-semibold transition cursor-pointer"
              >
                Solicitar Proposta
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Metodologia de Processo */}
      <div className="pt-8 sm:pt-12 border-t border-[#E7DDC9] space-y-6 sm:space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-[10px] sm:text-[11px] font-semibold text-[#6486AC] uppercase tracking-[2px]">PROCESSO</span>
          <h2 className="font-['Fraunces',Georgia,serif] text-2xl sm:text-3xl font-bold text-[#102E4A]">
            Como funciona nosso processo
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {PROCESS_STEPS.map((step) => (
            <div key={step.number} className="p-5 sm:p-6 rounded-2xl bg-[#FFFCF5] border border-[#E7DDC9]">
              <span className="text-2xl sm:text-3xl font-bold font-['Fraunces',Georgia,serif] text-[#6486AC]">
                {step.number}
              </span>
              <h4 className="font-bold text-sm sm:text-base text-[#102E4A] mt-2">{step.title}</h4>
              <p className="text-xs text-[#4C6B8C] mt-2 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Band */}
      <div className="bg-[#102E4A] text-[#F9F3E3] p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="space-y-2">
          <h3 className="font-['Fraunces',Georgia,serif] text-xl sm:text-2xl md:text-3xl font-bold">
            Não sabe qual serviço é o ideal?
          </h3>
          <p className="text-xs sm:text-sm text-[#F9F3E3]/80">
            Me chame no WhatsApp e vamos bater um papo rápido para entender seu momento.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 w-full md:w-auto">
          <a
            href="https://wa.me/?text=Ol%C3%A1%2C%20%C3%89rika!%20Vim%20pelo%20seu%20site%20erikasantos.com.br"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto text-center bg-[#F9F3E3] text-[#102E4A] hover:bg-white px-6 py-3 rounded-full text-xs font-semibold tracking-wide transition shadow"
          >
            Conversar no WhatsApp ↗
          </a>
        </div>
      </div>
    </div>
  )
}
