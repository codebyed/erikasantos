import { useState } from 'react'
import { BadgeStage } from '../components/BadgeStage'
import type { TabType } from '../types'

interface BioPageProps {
  onNavigate: (tab: TabType, service?: string) => void
}

const FAQS = [
  {
    question: 'Como funciona o processo de criação da identidade visual?',
    answer: 'Começamos com um diagnóstico da sua marca atual e dos seus objetivos. Depois crio moodboards, apresento conceitos de logotipo, paleta e tipografia. Após sua aprovação, entrego o brandbook completo com guia de uso e arquivos prontos para aplicação.'
  },
  {
    question: 'Quanto tempo leva para entregar um projeto de branding?',
    answer: 'Um projeto completo de identidade visual leva em média 3 a 4 semanas, dependendo da complexidade e do número de revisões. Projetos de social media têm entrega contínua mensal.'
  },
  {
    question: 'O que está incluso no pacote de Social Media?',
    answer: 'Planejamento estratégico mensal, design de posts (feed + stories), capas de Reels, identidade visual dos destaques, copywriting e relatório visual de performance. Tudo alinhado à sua identidade de marca.'
  },
  {
    question: 'Posso contratar apenas uma consultoria pontual?',
    answer: 'Sim! A consultoria de 1h30 inclui diagnóstico visual do seu perfil, análise de presença digital, moodboard direcional e plano de ação. Você sai com clareza do que fazer nos próximos 30 dias.'
  },
  {
    question: 'Como é o pagamento? Tem parcelamento?',
    answer: 'Projetos de branding: 50% na assinatura do contrato, 50% na entrega final. Social Media: pagamento mensal recorrente via PIX ou transferência. Parcelamento no cartão disponível sob consulta.'
  },
  {
    question: 'Atende clientes de outras cidades/estados?',
    answer: 'Sim, atendo 100% remoto. Toda a comunicação é via WhatsApp, e-mail e chamadas de vídeo. Clientes de todo o Brasil.'
  }
]

export function BioPage({ onNavigate }: BioPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Hero Section - Link na Bio */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-14 items-start">
        {/* Visual Stage com Crachá suspenso */}
        <div className="lg:col-span-5">
          <BadgeStage />
        </div>

        {/* Conteúdo Link na Bio */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 sm:space-y-6 pt-1 sm:pt-2">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-[#6486AC] shrink-0">
              <path d="M12 0c1.1 7.4 4.6 10.9 12 12-7.4 1.1-10.9 4.6-12 12-1.1-7.4-4.6-10.9-12-12 7.4-1.1 10.9-4.6 12-12z" />
            </svg>
            <span className="text-[10px] sm:text-[11px] font-semibold text-[#4C6B8C] tracking-[1.5px] sm:tracking-[2px] uppercase">
              DESIGNER GRÁFICO · IDENTIDADE & SOCIAL MEDIA
            </span>
          </div>

          {/* Wordmark Principal */}
          <h1 className="font-['Fraunces',Georgia,serif] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#102E4A] leading-[1.02] tracking-tight break-words">
            érika designer
          </h1>

          {/* Keywords Bar */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 text-[10px] sm:text-xs font-semibold tracking-[1.4px] sm:tracking-[1.6px] uppercase text-[#4C6B8C]">
            <span>ESTRATÉGIA</span>
            <span className="text-[#6486AC]">•</span>
            <span>CONEXÃO</span>
            <span className="text-[#6486AC]">•</span>
            <span>CRIATIVIDADE</span>
          </div>

          {/* Quote */}
          <p className="text-sm sm:text-base md:text-lg text-[#4C6B8C] leading-relaxed max-w-xl font-normal">
            Sua marca merece transmitir o que você sente por ela, e eu cuido disso. Estratégia, identidade visual e presença digital pensadas para conectar e encantar.
          </p>

          {/* Botões Sociais e CTA Principal */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 pt-1 sm:pt-2 w-full">
            {/* Linha de Ícones Sociais */}
            <div className="flex items-center justify-center gap-3">
              {/* Instagram @erik4.designer */}
              <a
                href="https://instagram.com/erik4.designer"
                target="_blank"
                rel="noreferrer"
                className="w-11 sm:w-12 h-11 sm:h-12 rounded-full bg-white border border-[#E7DDC9] flex items-center justify-center text-[#102E4A] hover:bg-[#102E4A] hover:text-[#F9F3E3] transition shadow-xs"
                title="Instagram @erik4.designer"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* E-mail */}
              <a
                href="mailto:contato@erikasantos.design"
                className="w-11 sm:w-12 h-11 sm:h-12 rounded-full bg-white border border-[#E7DDC9] flex items-center justify-center text-[#102E4A] hover:bg-[#102E4A] hover:text-[#F9F3E3] transition shadow-xs"
                title="E-mail Profissional"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/?text=Ol%C3%A1%2C%20%C3%89rika!%20Vim%20pelo%20seu%20site%20erikasantos.com.br"
                target="_blank"
                rel="noreferrer"
                className="w-11 sm:w-12 h-11 sm:h-12 rounded-full bg-white border border-[#E7DDC9] flex items-center justify-center text-[#102E4A] hover:bg-[#102E4A] hover:text-[#F9F3E3] transition shadow-xs"
                title="WhatsApp Direto"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
              </div>

            {/* CTA Botão Pacotes */}
            <button
              onClick={() => onNavigate('services')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#102E4A] hover:text-[#F9F3E3] text-[#102E4A] border border-[#102E4A] px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs font-semibold tracking-wide transition shadow-sm cursor-pointer"
            >
              <span>Conheça os pacotes e valores</span>
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Links Section - estilo botão pill igual "Conheça os pacotes" */}
      <div className="pt-8 sm:pt-12 border-t border-[#E7DDC9]">
        <div className="text-center max-w-xl mx-auto space-y-2 mb-6">
          <div className="inline-flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-[#6486AC] shrink-0">
              <path d="M12 0c1.1 7.4 4.6 10.9 12 12-7.4 1.1-10.9 4.6-12 12-1.1-7.4-4.6-10.9-12-12 7.4-1.1 10.9-4.6 12-12z" />
            </svg>
            <span className="text-[10px] sm:text-[11px] font-semibold text-[#4C6B8C] tracking-[2px] uppercase">
              ACESSO RÁPIDO
            </span>
          </div>
          <h2 className="font-['Fraunces',Georgia,serif] text-xl sm:text-2xl font-bold text-[#102E4A]">
            Links Úteis
          </h2>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:items-center">
          {/* Quick Link 1: Galeria */}
          <button
            onClick={() => onNavigate('gallery')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#102E4A] hover:text-[#F9F3E3] text-[#102E4A] border border-[#102E4A] px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs font-semibold tracking-wide transition shadow-sm cursor-pointer"
          >
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Galeria de Arte & Projetos</span>
          </button>

          {/* Quick Link 2: Social Media */}
          <button
            onClick={() => onNavigate('services', 'Social Media')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#102E4A] hover:text-[#F9F3E3] text-[#102E4A] border border-[#102E4A] px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs font-semibold tracking-wide transition shadow-sm cursor-pointer"
          >
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
            <span>Social Media</span>
          </button>

          {/* Quick Link 3: Identidade Visual */}
          <button
            onClick={() => onNavigate('services', 'Identidade Visual')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#102E4A] hover:text-[#F9F3E3] text-[#102E4A] border border-[#102E4A] px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs font-semibold tracking-wide transition shadow-sm cursor-pointer"
          >
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
            <span>Identidade Visual</span>
          </button>

          {/* Quick Link 4: WhatsApp - Destaque */}
          <a
            href="https://wa.me/?text=Ol%C3%A1%2C%20%C3%89rika!%20Vim%20pelo%20seu%20site%20erikasantos.com.br"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white border border-[#25D366] hover:border-[#1DA851] px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs font-semibold tracking-wide transition shadow-sm cursor-pointer"
          >
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="pt-8 sm:pt-12 border-t border-[#E7DDC9] lg:max-w-[700px] lg:mx-auto">
        <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
          <div className="inline-flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-[#6486AC] shrink-0">
              <path d="M12 0c1.1 7.4 4.6 10.9 12 12-7.4 1.1-10.9 4.6-12 12-1.1-7.4-4.6-10.9-12-12 7.4-1.1 10.9-4.6 12-12z" />
            </svg>
            <span className="text-[10px] sm:text-[11px] font-semibold text-[#4C6B8C] tracking-[2px] uppercase">
              PERGUNTAS FREQUENTES
            </span>
          </div>
          <h2 className="font-['Fraunces',Georgia,serif] text-2xl sm:text-3xl font-bold text-[#102E4A]">
            Dúvidas Comuns
          </h2>
          <p className="text-sm text-[#4C6B8C] leading-relaxed">
            Não encontrou sua resposta? <a href="https://wa.me/?text=Ol%C3%A1%2C%20%C3%89rika!%20Vim%20pelo%20seu%20site%20erikasantos.com.br" target="_blank" rel="noreferrer" className="text-[#6486AC] hover:underline font-medium">Chama no WhatsApp</a>
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => (
            <details
              key={index}
              className="group bg-white rounded-2xl border border-[#E7DDC9] hover:border-[#6486AC] transition-colors overflow-hidden"
              open={openFaq === index}
            >
              <summary
                onClick={(event) => {
                  event.preventDefault()
                  setOpenFaq((current) => (current === index ? null : index))
                }}
                className="flex items-center justify-between gap-4 p-5 sm:p-6 cursor-pointer list-none"
              >
                <h3 className="font-semibold text-sm sm:text-base text-[#102E4A] leading-snug pr-8">
                  {faq.question}
                </h3>
                <svg
                  className="w-5 h-5 text-[#6486AC] shrink-0 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-[#4C6B8C] leading-relaxed animate-faq-open">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  )
}