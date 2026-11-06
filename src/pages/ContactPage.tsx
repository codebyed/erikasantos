import React, { useState } from 'react'

interface ContactPageProps {
  initialService?: string
}

export function ContactPage({ initialService = 'Social Media' }: ContactPageProps) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    instagram: '',
    mensagem: '',
    servico: initialService,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* Header Contato */}
      <div className="text-center max-w-2xl mx-auto space-y-3 sm:space-y-4">
        <div className="inline-flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-[#6486AC] shrink-0">
            <path d="M12 0c1.1 7.4 4.6 10.9 12 12-7.4 1.1-10.9 4.6-12 12-1.1-7.4-4.6-10.9-12-12 7.4-1.1 10.9-4.6 12-12z" />
          </svg>
          <span className="text-[10px] sm:text-[11px] font-semibold text-[#4C6B8C] tracking-[2px] uppercase">
            CONTATO
          </span>
        </div>
        <h1 className="font-['Fraunces',Georgia,serif] text-3xl sm:text-4xl md:text-5xl text-[#102E4A] font-bold leading-tight">
          Vamos transformar sua presença visual juntos?
        </h1>
        <p className="text-sm sm:text-base text-[#4C6B8C] leading-relaxed">
          Preencha os dados abaixo para receber uma proposta personalizada ou fale comigo diretamente pelo WhatsApp ou Instagram.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Form Card */}
        <div className="lg:col-span-7 bg-[#FFFCF5] p-5 sm:p-7 md:p-10 rounded-2xl sm:rounded-3xl border border-[#E7DDC9] shadow-sm">
          {submitted ? (
            <div className="text-center py-8 sm:py-12 space-y-4">
              <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-xl sm:text-2xl">
                ✓
              </div>
              <h3 className="font-['Fraunces',Georgia,serif] text-xl sm:text-2xl font-bold text-[#102E4A]">
                Mensagem enviada com sucesso!
              </h3>
              <p className="text-xs text-[#4C6B8C] max-w-md mx-auto">
                Obrigada pelo contato, {formData.nome || 'amigo(a)'}! Em breve entrarei em contato via WhatsApp/e-mail com os detalhes da proposta.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#102E4A] text-[#F9F3E3] text-xs font-semibold cursor-pointer"
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-6">
              <h3 className="font-['Fraunces',Georgia,serif] text-xl sm:text-2xl font-bold text-[#102E4A]">
                Envie sua mensagem
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-[11px] font-medium text-[#102E4A] mb-1 uppercase tracking-wider">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    placeholder="Como prefere ser chamada?"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white border border-[#E7DDC9] focus:outline-none focus:border-[#102E4A] text-xs transition"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-[#102E4A] mb-1 uppercase tracking-wider">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seuemail@exemplo.com"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white border border-[#E7DDC9] focus:outline-none focus:border-[#102E4A] text-xs transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-[#102E4A] mb-1 uppercase tracking-wider">
                  Instagram da Marca / Pessoal
                </label>
                <input
                  type="text"
                  value={formData.instagram}
                  onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                  placeholder="@seuusuario"
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white border border-[#E7DDC9] focus:outline-none focus:border-[#102E4A] text-xs transition"
                />
              </div>

              {/* Chips Serviço */}
              <div>
                <label className="block text-[11px] font-medium text-[#102E4A] mb-2 uppercase tracking-wider">
                  Serviço de Interesse
                </label>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {['Social Media', 'Identidade Visual', 'Consultoria', 'Ainda não sei'].map((svc) => (
                    <button
                      key={svc}
                      type="button"
                      onClick={() => setFormData({ ...formData, servico: svc })}
                      className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-medium transition cursor-pointer ${
                        formData.servico === svc
                          ? 'bg-[#102E4A] text-[#F9F3E3]'
                          : 'bg-white border border-[#E7DDC9] text-[#4C6B8C] hover:border-[#102E4A]'
                      }`}
                    >
                      {svc}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-[#102E4A] mb-1 uppercase tracking-wider">
                  Conte um pouco sobre seu projeto *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  placeholder="Quais seus objetivos, prazos ou expectativas?"
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white border border-[#E7DDC9] focus:outline-none focus:border-[#102E4A] text-xs transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#102E4A] hover:bg-[#102E4A]/90 text-[#F9F3E3] py-3.5 rounded-full text-xs font-semibold tracking-wide transition shadow cursor-pointer"
              >
                Enviar Solicitação de Orçamento
              </button>
              <p className="text-[11px] text-[#4C6B8C] text-center">
                Resposta em até 24 horas úteis. Sem compromisso.
              </p>
            </form>
          )}
        </div>

        {/* Side Contacts */}
        <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
          <h3 className="font-['Fraunces',Georgia,serif] text-lg sm:text-xl font-bold text-[#102E4A]">
            Outros canais de contato
          </h3>

          {/* WhatsApp */}
          <a
            href="https://wa.me/?text=Ol%C3%A1%2C%20%C3%89rika!%20Vim%20pelo%20seu%20site%20erikasantos.com.br"
            target="_blank"
            rel="noreferrer"
            className="p-4 sm:p-5 rounded-2xl bg-[#FFFCF5] hover:bg-white border border-[#E7DDC9] hover:border-[#6486AC] transition flex items-center justify-between group"
          >
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-xl flex items-center justify-center text-[#102E4A] group-hover:text-[#6486AC] transition-colors shrink-0">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-[#102E4A]">WhatsApp Direto</h4>
                <p className="text-xs text-[#4C6B8C]">Atendimento ágil para dúvidas</p>
              </div>
            </div>
            <svg className="w-4 h-4 text-[#4C6B8C] group-hover:translate-x-1 transition-transform shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>

          {/* E-mail contato@erikasantos.design */}
          <a
            href="mailto:contato@erikasantos.design"
            className="p-4 sm:p-5 rounded-2xl bg-[#FFFCF5] hover:bg-white border border-[#E7DDC9] hover:border-[#6486AC] transition flex items-center justify-between group"
          >
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-xl flex items-center justify-center text-[#102E4A] shrink-0">
                <svg className="w-5 h-5 fill-none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-[#102E4A]">E-mail Profissional</h4>
                <p className="text-xs text-[#4C6B8C]">contato@erikasantos.design</p>
              </div>
            </div>
            <svg className="w-4 h-4 text-[#4C6B8C] group-hover:translate-x-1 transition-transform shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>

          {/* Instagram Direct @erik4.designer */}
          <a
            href="https://instagram.com/erik4.designer"
            target="_blank"
            rel="noreferrer"
            className="p-4 sm:p-5 rounded-2xl bg-[#FFFCF5] hover:bg-white border border-[#E7DDC9] hover:border-[#6486AC] transition flex items-center justify-between group"
          >
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-xl flex items-center justify-center text-[#102E4A] group-hover:text-[#6486AC] transition-colors shrink-0">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-[#102E4A]">Instagram</h4>
                <p className="text-xs text-[#4C6B8C]">@erik4.designer</p>
              </div>
            </div>
            <svg className="w-4 h-4 text-[#4C6B8C] group-hover:translate-x-1 transition-transform shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>

        </div>
      </div>
    </div>
  )
}
