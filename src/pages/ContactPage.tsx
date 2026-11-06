// Eu importo o React para tipar o evento do formulário.
import React, { useState } from 'react'

// Eu declaro as props da página de contato.
interface ContactPageProps {
  // Eu recebo o serviço inicial que veio da página de serviços.
  initialService?: string
}

// Eu crio a página de contato com o formulário e os canais diretos.
export function ContactPage({ initialService = 'Social Media' }: ContactPageProps) {
  // Eu guardo todos os campos do formulário em um único estado.
  const [formData, setFormData] = useState({
    // Eu começo o nome vazio.
    nome: '',
    // Eu começo o e-mail vazio.
    email: '',
    // Eu começo o Instagram vazio.
    instagram: '',
    // Eu começo a mensagem vazia.
    mensagem: '',
    // Eu começo com o serviço que veio da navegação.
    servico: initialService,
  })
  // Eu guardo se o formulário já foi enviado.
  const [submitted, setSubmitted] = useState(false)

  // Eu trato o envio do formulário.
  const handleFormSubmit = (e: React.FormEvent) => {
    // Eu impeço o navegador de recarregar a página.
    e.preventDefault()
    // Eu troco a tela do formulário pela mensagem de sucesso.
    setSubmitted(true)
  }

  // Eu retorno a estrutura da página de contato.
  return (
    // Eu separo os blocos com espaçamento vertical.
    <div className="space-y-10 sm:space-y-12">
      {/* Eu monto o cabeçalho centralizado da página. */}
      <div className="text-center max-w-2xl mx-auto space-y-3 sm:space-y-4">
        {/* Eu alinho a estrela com o rótulo. */}
        <div className="inline-flex items-center gap-2">
          {/* Eu desenho a estrela em azul. */}
          <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-[#6486AC] shrink-0">
            {/* Eu uso o caminho da estrela da marca. */}
            <path d="M12 0c1.1 7.4 4.6 10.9 12 12-7.4 1.1-10.9 4.6-12 12-1.1-7.4-4.6-10.9-12-12 7.4-1.1 10.9-4.6 12-12z" />
          </svg>
          {/* Eu escrevo o rótulo da seção. */}
          <span className="text-[10px] sm:text-[11px] font-semibold text-[#4C6B8C] tracking-[2px] uppercase">
            CONTATO
          </span>
        </div>
        {/* Eu escrevo o título principal. */}
        <h1 className="font-['Fraunces',Georgia,serif] text-3xl sm:text-4xl md:text-5xl text-[#102E4A] font-bold leading-tight">
          Vamos transformar sua presença visual juntos?
        </h1>
        {/* Eu explico como funciona o contato. */}
        <p className="text-sm sm:text-base text-[#4C6B8C] leading-relaxed">
          Preencha os dados abaixo para receber uma proposta personalizada ou fale comigo diretamente pelo WhatsApp ou Instagram.
        </p>
      </div>

      {/* Eu divido a tela entre o formulário e os canais diretos. */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Eu crio o cartão do formulário. */}
        <div className="lg:col-span-7 bg-[#FFFCF5] p-5 sm:p-7 md:p-10 rounded-2xl sm:rounded-3xl border border-[#E7DDC9] shadow-sm">
          {/* Eu mostro a mensagem de sucesso ou o formulário. */}
          {submitted ? (
            // Eu mostro o estado de sucesso depois do envio.
            <div className="text-center py-8 sm:py-12 space-y-4">
              {/* Eu desenho o círculo verde com o check. */}
              <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-xl sm:text-2xl">
                ✓
              </div>
              {/* Eu escrevo o título de sucesso. */}
              <h3 className="font-['Fraunces',Georgia,serif] text-xl sm:text-2xl font-bold text-[#102E4A]">
                Mensagem enviada com sucesso!
              </h3>
              {/* Eu personalizo a resposta com o nome digitado. */}
              <p className="text-xs text-[#4C6B8C] max-w-md mx-auto">
                Obrigada pelo contato, {formData.nome || 'amigo(a)'}! Em breve entrarei em contato via WhatsApp/e-mail com os detalhes da proposta.
              </p>
              {/* Eu permito voltar para o formulário. */}
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#102E4A] text-[#F9F3E3] text-xs font-semibold cursor-pointer"
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            // Eu mostro o formulário enquanto ele não foi enviado.
            <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-6">
              {/* Eu escrevo o título do formulário. */}
              <h3 className="font-['Fraunces',Georgia,serif] text-xl sm:text-2xl font-bold text-[#102E4A]">
                Envie sua mensagem
              </h3>

              {/* Eu coloco nome e e-mail lado a lado no desktop. */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                {/* Eu crio o campo de nome. */}
                <div>
                  {/* Eu escrevo o rótulo do nome. */}
                  <label className="block text-[11px] font-medium text-[#102E4A] mb-1 uppercase tracking-wider">
                    Seu Nome *
                  </label>
                  {/* Eu crio o input do nome. */}
                  <input
                    type="text"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    placeholder="Como prefere ser chamada?"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white border border-[#E7DDC9] focus:outline-none focus:border-[#102E4A] text-xs transition"
                  />
                </div>

                {/* Eu crio o campo de e-mail. */}
                <div>
                  {/* Eu escrevo o rótulo do e-mail. */}
                  <label className="block text-[11px] font-medium text-[#102E4A] mb-1 uppercase tracking-wider">
                    E-mail *
                  </label>
                  {/* Eu crio o input do e-mail. */}
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

              {/* Eu crio o campo de Instagram. */}
              <div>
                {/* Eu escrevo o rótulo do Instagram. */}
                <label className="block text-[11px] font-medium text-[#102E4A] mb-1 uppercase tracking-wider">
                  Instagram da Marca / Pessoal
                </label>
                {/* Eu crio o input do Instagram. */}
                <input
                  type="text"
                  value={formData.instagram}
                  onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                  placeholder="@seuusuario"
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white border border-[#E7DDC9] focus:outline-none focus:border-[#102E4A] text-xs transition"
                />
              </div>

              {/* Eu crio os chips de serviço de interesse. */}
              <div>
                {/* Eu escrevo o rótulo dos chips. */}
                <label className="block text-[11px] font-medium text-[#102E4A] mb-2 uppercase tracking-wider">
                  Serviço de Interesse
                </label>
                {/* Eu alinho os chips em linha e permito quebra. */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {/* Eu percorro as opções de serviço. */}
                  {['Social Media', 'Identidade Visual', 'Consultoria', 'Ainda não sei'].map((svc) => (
                    // Eu crio um chip para cada serviço.
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

              {/* Eu crio o campo de mensagem. */}
              <div>
                {/* Eu escrevo o rótulo da mensagem. */}
                <label className="block text-[11px] font-medium text-[#102E4A] mb-1 uppercase tracking-wider">
                  Conte um pouco sobre seu projeto *
                </label>
                {/* Eu crio o textarea da mensagem. */}
                <textarea
                  required
                  rows={4}
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  placeholder="Quais seus objetivos, prazos ou expectativas?"
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white border border-[#E7DDC9] focus:outline-none focus:border-[#102E4A] text-xs transition resize-none"
                ></textarea>
              </div>

              {/* Eu crio o botão de envio. */}
              <button
                type="submit"
                className="w-full bg-[#102E4A] hover:bg-[#102E4A]/90 text-[#F9F3E3] py-3.5 rounded-full text-xs font-semibold tracking-wide transition shadow cursor-pointer"
              >
                Enviar Solicitação de Orçamento
              </button>
              {/* Eu prometo resposta rápida abaixo do botão. */}
              <p className="text-[11px] text-[#4C6B8C] text-center">
                Resposta em até 24 horas úteis. Sem compromisso.
              </p>
            </form>
          )}
        </div>

        {/* Eu crio a coluna dos canais diretos. */}
        <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
          {/* Eu escrevo o título dos canais. */}
          <h3 className="font-['Fraunces',Georgia,serif] text-lg sm:text-xl font-bold text-[#102E4A]">
            Outros canais de contato
          </h3>

          {/* Eu crio o card do WhatsApp. */}
          <a
            href="https://wa.me/?text=Ol%C3%A1%2C%20%C3%89rika!%20Vim%20pelo%20seu%20site%20erikasantos.com.br"
            target="_blank"
            rel="noreferrer"
            className="p-4 sm:p-5 rounded-2xl bg-[#FFFCF5] hover:bg-white border border-[#E7DDC9] hover:border-[#6486AC] transition flex items-center justify-between group"
          >
            {/* Eu agrupo ícone e textos do WhatsApp. */}
            <div className="flex items-center gap-3.5 sm:gap-4">
              {/* Eu crio o círculo do ícone. */}
              <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-xl flex items-center justify-center text-[#102E4A] group-hover:text-[#6486AC] transition-colors shrink-0">
                {/* Eu desenho o ícone do WhatsApp. */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  {/* Eu uso o caminho oficial do balão do WhatsApp. */}
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </div>
              {/* Eu agrupo título e descrição do WhatsApp. */}
              <div>
                {/* Eu escrevo o título do canal. */}
                <h4 className="font-semibold text-sm text-[#102E4A]">WhatsApp Direto</h4>
                {/* Eu explico o tipo de atendimento. */}
                <p className="text-xs text-[#4C6B8C]">Atendimento ágil para dúvidas</p>
              </div>
            </div>
            {/* Eu desenho a seta do card. */}
            <svg className="w-4 h-4 text-[#4C6B8C] group-hover:translate-x-1 transition-transform shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              {/* Eu traço a seta diagonal. */}
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>

          {/* Eu crio o card de e-mail. */}
          <a
            href="mailto:contato@erikasantos.design"
            className="p-4 sm:p-5 rounded-2xl bg-[#FFFCF5] hover:bg-white border border-[#E7DDC9] hover:border-[#6486AC] transition flex items-center justify-between group"
          >
            {/* Eu agrupo ícone e textos do e-mail. */}
            <div className="flex items-center gap-3.5 sm:gap-4">
              {/* Eu crio o círculo do ícone de e-mail. */}
              <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-xl flex items-center justify-center text-[#102E4A] shrink-0">
                {/* Eu desenho o envelope. */}
                <svg className="w-5 h-5 fill-none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  {/* Eu traço o envelope com o vinco central. */}
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              {/* Eu agrupo título e endereço de e-mail. */}
              <div>
                {/* Eu escrevo o título do canal. */}
                <h4 className="font-semibold text-sm text-[#102E4A]">E-mail Profissional</h4>
                {/* Eu mostro o endereço de e-mail. */}
                <p className="text-xs text-[#4C6B8C]">contato@erikasantos.design</p>
              </div>
            </div>
            {/* Eu desenho a seta do card de e-mail. */}
            <svg className="w-4 h-4 text-[#4C6B8C] group-hover:translate-x-1 transition-transform shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              {/* Eu traço a seta diagonal. */}
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>

          {/* Eu crio o card do Instagram. */}
          <a
            href="https://instagram.com/erik4.designer"
            target="_blank"
            rel="noreferrer"
            className="p-4 sm:p-5 rounded-2xl bg-[#FFFCF5] hover:bg-white border border-[#E7DDC9] hover:border-[#6486AC] transition flex items-center justify-between group"
          >
            {/* Eu agrupo ícone e textos do Instagram. */}
            <div className="flex items-center gap-3.5 sm:gap-4">
              {/* Eu crio o círculo do ícone do Instagram. */}
              <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-xl flex items-center justify-center text-[#102E4A] group-hover:text-[#6486AC] transition-colors shrink-0">
                {/* Eu desenho o ícone do Instagram. */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  {/* Eu uso o caminho da câmera do Instagram. */}
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              {/* Eu agrupo título e usuário do Instagram. */}
              <div>
                {/* Eu escrevo o título do canal. */}
                <h4 className="font-semibold text-sm text-[#102E4A]">Instagram</h4>
                {/* Eu mostro o usuário. */}
                <p className="text-xs text-[#4C6B8C]">@erik4.designer</p>
              </div>
            </div>
            {/* Eu desenho a seta do card do Instagram. */}
            <svg className="w-4 h-4 text-[#4C6B8C] group-hover:translate-x-1 transition-transform shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              {/* Eu traço a seta diagonal. */}
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>

        </div>
      </div>
    </div>
  )
}
