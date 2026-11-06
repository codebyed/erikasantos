// Eu importo o useState para controlar qual pergunta do FAQ está aberta.
import { useState } from 'react'
// Eu importo o componente do crachá que fica ao lado do texto principal.
import { BadgeStage } from '../components/BadgeStage'
// Eu importo o tipo das abas para tipar a navegação que recebo do App.
import type { TabType } from '../types'

// Eu declaro as props que a página inicial recebe.
interface BioPageProps {
  // Eu recebo a função que troca de aba e pode levar um serviço escolhido.
  onNavigate: (tab: TabType, service?: string) => void
}

// Eu monto a lista de perguntas frequentes que aparece no fim da página.
const FAQS = [
  // Eu começo a primeira pergunta sobre o processo de identidade visual.
  {
    // Eu escrevo a pergunta que a pessoa vê fechada.
    question: 'Como funciona o processo de criação da identidade visual?',
    // Eu escrevo a resposta que aparece quando ela abre.
    answer: 'Começamos com um diagnóstico da sua marca atual e dos seus objetivos. Depois crio moodboards, apresento conceitos de logotipo, paleta e tipografia. Após sua aprovação, entrego o brandbook completo com guia de uso e arquivos prontos para aplicação.'
  },
  // Eu começo a segunda pergunta sobre o prazo de branding.
  {
    // Eu escrevo a pergunta sobre o tempo de entrega.
    question: 'Quanto tempo leva para entregar um projeto de branding?',
    // Eu explico o prazo médio na resposta.
    answer: 'Um projeto completo de identidade visual leva em média 3 a 4 semanas, dependendo da complexidade e do número de revisões. Projetos de social media têm entrega contínua mensal.'
  },
  // Eu começo a terceira pergunta sobre o pacote de social media.
  {
    // Eu escrevo a pergunta sobre o que está incluso.
    question: 'O que está incluso no pacote de Social Media?',
    // Eu listo os itens do pacote na resposta.
    answer: 'Planejamento estratégico mensal, design de posts (feed + stories), capas de Reels, identidade visual dos destaques, copywriting e relatório visual de performance. Tudo alinhado à sua identidade de marca.'
  },
  // Eu começo a quarta pergunta sobre consultoria pontual.
  {
    // Eu escrevo a pergunta sobre contratar só uma consultoria.
    question: 'Posso contratar apenas uma consultoria pontual?',
    // Eu confirmo e explico o que a consultoria inclui.
    answer: 'Sim! A consultoria de 1h30 inclui diagnóstico visual do seu perfil, análise de presença digital, moodboard direcional e plano de ação. Você sai com clareza do que fazer nos próximos 30 dias.'
  },
  // Eu começo a quinta pergunta sobre pagamento e parcelamento.
  {
    // Eu escrevo a pergunta sobre como funciona o pagamento.
    question: 'Como é o pagamento? Tem parcelamento?',
    // Eu explico as condições de pagamento.
    answer: 'Projetos de branding: 50% na assinatura do contrato, 50% na entrega final. Social Media: pagamento mensal recorrente via PIX ou transferência. Parcelamento no cartão disponível sob consulta.'
  },
  // Eu começo a sexta pergunta sobre atendimento remoto.
  {
    // Eu escrevo a pergunta sobre clientes de outras cidades.
    question: 'Atende clientes de outras cidades/estados?',
    // Eu confirmo que o atendimento é remoto.
    answer: 'Sim, atendo 100% remoto. Toda a comunicação é via WhatsApp, e-mail e chamadas de vídeo. Clientes de todo o Brasil.'
  }
]

// Eu crio a página inicial no formato de Link na Bio.
export function BioPage({ onNavigate }: BioPageProps) {
  // Eu guardo o índice da pergunta aberta, ou null quando todas estão fechadas.
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Eu retorno a estrutura da página.
  return (
    // Eu separo as seções com espaçamento vertical responsivo.
    <div className="space-y-12 sm:space-y-16">
      {/* Eu monto a seção principal em duas colunas no desktop. */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-14 items-start">
        {/* Eu reservo a coluna do crachá. */}
        <div className="lg:col-span-5">
          {/* Eu renderizo o crachá com os selos flutuantes. */}
          <BadgeStage />
        </div>

        {/* Eu crio a coluna de conteúdo ao lado do crachá. */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 sm:space-y-6 pt-1 sm:pt-2">
          {/* Eu alinho a estrela com o texto de apresentação. */}
          <div className="inline-flex items-center gap-2">
            {/* Eu desenho a estrela em azul. */}
            <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-[#6486AC] shrink-0">
              {/* Eu uso o caminho da estrela da marca. */}
              <path d="M12 0c1.1 7.4 4.6 10.9 12 12-7.4 1.1-10.9 4.6-12 12-1.1-7.4-4.6-10.9-12-12 7.4-1.1 10.9-4.6 12-12z" />
            </svg>
            {/* Eu escrevo a especialidade da Érika. */}
            <span className="text-[10px] sm:text-[11px] font-semibold text-[#4C6B8C] tracking-[1.5px] sm:tracking-[2px] uppercase">
              DESIGNER GRÁFICO · IDENTIDADE & SOCIAL MEDIA
            </span>
          </div>

          {/* Eu escrevo o nome da marca em destaque. */}
          <h1 className="font-['Fraunces',Georgia,serif] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#102E4A] leading-[1.02] tracking-tight break-words">
            érika designer
          </h1>

          {/* Eu listo as três palavras-chave da marca. */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 text-[10px] sm:text-xs font-semibold tracking-[1.4px] sm:tracking-[1.6px] uppercase text-[#4C6B8C]">
            {/* Eu escrevo a primeira palavra-chave. */}
            <span>ESTRATÉGIA</span>
            {/* Eu coloco um ponto separador. */}
            <span className="text-[#6486AC]">•</span>
            {/* Eu escrevo a segunda palavra-chave. */}
            <span>CONEXÃO</span>
            {/* Eu coloco outro ponto separador. */}
            <span className="text-[#6486AC]">•</span>
            {/* Eu escrevo a terceira palavra-chave. */}
            <span>CRIATIVIDADE</span>
          </div>

          {/* Eu escrevo a frase de posicionamento da marca. */}
          <p className="text-sm sm:text-base md:text-lg text-[#4C6B8C] leading-relaxed max-w-xl font-normal">
            Sua marca merece transmitir o que você sente por ela, e eu cuido disso. Estratégia, identidade visual e presença digital pensadas para conectar e encantar.
          </p>

          {/* Eu monto a linha de ícones sociais e o botão de pacotes. */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 pt-1 sm:pt-2 w-full">
            {/* Eu agrupo os ícones sociais. */}
            <div className="flex items-center justify-center gap-3">
              {/* Eu crio o botão do Instagram. */}
              <a
                href="https://instagram.com/erik4.designer"
                target="_blank"
                rel="noreferrer"
                className="w-11 sm:w-12 h-11 sm:h-12 rounded-full bg-white border border-[#E7DDC9] flex items-center justify-center text-[#102E4A] hover:bg-[#102E4A] hover:text-[#F9F3E3] transition shadow-xs"
                title="Instagram @erik4.designer"
              >
                {/* Eu desenho o ícone do Instagram. */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  {/* Eu uso o caminho da câmera do Instagram. */}
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* Eu crio o botão de e-mail ao lado do Instagram. */}
              <a
                href="mailto:contato@erikasantos.design"
                className="w-11 sm:w-12 h-11 sm:h-12 rounded-full bg-white border border-[#E7DDC9] flex items-center justify-center text-[#102E4A] hover:bg-[#102E4A] hover:text-[#F9F3E3] transition shadow-xs"
                title="E-mail Profissional"
              >
                {/* Eu desenho o envelope. */}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  {/* Eu traço o envelope com o vinco central. */}
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              {/* Eu crio o botão do WhatsApp. */}
              <a
                href="https://wa.me/?text=Ol%C3%A1%2C%20%C3%89rika!%20Vim%20pelo%20seu%20site%20erikasantos.com.br"
                target="_blank"
                rel="noreferrer"
                className="w-11 sm:w-12 h-11 sm:h-12 rounded-full bg-white border border-[#E7DDC9] flex items-center justify-center text-[#102E4A] hover:bg-[#102E4A] hover:text-[#F9F3E3] transition shadow-xs"
                title="WhatsApp Direto"
              >
                {/* Eu desenho o balão do WhatsApp. */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  {/* Eu uso o caminho oficial do WhatsApp. */}
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
            </div>

            {/* Eu crio o botão que leva para os pacotes. */}
            <button
              onClick={() => onNavigate('services')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#102E4A] hover:text-[#F9F3E3] text-[#102E4A] border border-[#102E4A] px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs font-semibold tracking-wide transition shadow-sm cursor-pointer"
            >
              {/* Eu escrevo o texto do botão. */}
              <span>Conheça os pacotes e valores</span>
              {/* Eu desenho a seta para a direita. */}
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                {/* Eu traço a seta. */}
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Eu monto a seção de acesso rápido. */}
      <div className="pt-8 sm:pt-12 border-t border-[#E7DDC9]">
        {/* Eu centralizo o título da seção. */}
        <div className="text-center max-w-xl mx-auto space-y-2 mb-6">
          {/* Eu alinho a estrela com o rótulo. */}
          <div className="inline-flex items-center gap-2">
            {/* Eu desenho a estrela em azul. */}
            <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-[#6486AC] shrink-0">
              {/* Eu uso o caminho da estrela da marca. */}
              <path d="M12 0c1.1 7.4 4.6 10.9 12 12-7.4 1.1-10.9 4.6-12 12-1.1-7.4-4.6-10.9-12-12 7.4-1.1 10.9-4.6 12-12z" />
            </svg>
            {/* Eu escrevo o rótulo da seção. */}
            <span className="text-[10px] sm:text-[11px] font-semibold text-[#4C6B8C] tracking-[2px] uppercase">
              ACESSO RÁPIDO
            </span>
          </div>
          {/* Eu escrevo o título da seção. */}
          <h2 className="font-['Fraunces',Georgia,serif] text-xl sm:text-2xl font-bold text-[#102E4A]">
            Links Úteis
          </h2>
        </div>

        {/* Eu alinho os botões em linha no desktop e empilhados no mobile. */}
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:items-center">
          {/* Eu crio o botão que leva para a galeria. */}
          <button
            onClick={() => onNavigate('gallery')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#102E4A] hover:text-[#F9F3E3] text-[#102E4A] border border-[#102E4A] px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs font-semibold tracking-wide transition shadow-sm cursor-pointer"
          >
            {/* Eu desenho o ícone de imagem. */}
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {/* Eu traço o contorno da imagem. */}
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {/* Eu escrevo o texto do botão. */}
            <span>Galeria de Arte & Projetos</span>
          </button>

          {/* Eu crio o botão que leva para o pacote de social media. */}
          <button
            onClick={() => onNavigate('services', 'Social Media')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#102E4A] hover:text-[#F9F3E3] text-[#102E4A] border border-[#102E4A] px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs font-semibold tracking-wide transition shadow-sm cursor-pointer"
          >
            {/* Eu desenho o ícone de balão de mensagem. */}
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {/* Eu traço o balão com as linhas de texto. */}
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
            {/* Eu escrevo o texto do botão. */}
            <span>Social Media</span>
          </button>

          {/* Eu crio o botão que leva para identidade visual. */}
          <button
            onClick={() => onNavigate('services', 'Identidade Visual')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#102E4A] hover:text-[#F9F3E3] text-[#102E4A] border border-[#102E4A] px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs font-semibold tracking-wide transition shadow-sm cursor-pointer"
          >
            {/* Eu desenho o ícone de lápis. */}
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {/* Eu traço o lápis e a linha. */}
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
            {/* Eu escrevo o texto do botão. */}
            <span>Identidade Visual</span>
          </button>

          {/* Eu crio o botão de destaque para o WhatsApp. */}
          <a
            href="https://wa.me/?text=Ol%C3%A1%2C%20%C3%89rika!%20Vim%20pelo%20seu%20site%20erikasantos.com.br"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white border border-[#25D366] hover:border-[#1DA851] px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs font-semibold tracking-wide transition shadow-sm cursor-pointer"
          >
            {/* Eu desenho o ícone de conversa. */}
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {/* Eu traço o balão com os três pontos. */}
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            {/* Eu escrevo o texto do botão. */}
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Eu monto a seção de perguntas frequentes. */}
      <div className="pt-8 sm:pt-12 border-t border-[#E7DDC9] lg:max-w-[700px] lg:mx-auto">
        {/* Eu centralizo o cabeçalho do FAQ. */}
        <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
          {/* Eu alinho a estrela com o rótulo. */}
          <div className="inline-flex items-center gap-2">
            {/* Eu desenho a estrela em azul. */}
            <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-[#6486AC] shrink-0">
              {/* Eu uso o caminho da estrela da marca. */}
              <path d="M12 0c1.1 7.4 4.6 10.9 12 12-7.4 1.1-10.9 4.6-12 12-1.1-7.4-4.6-10.9-12-12 7.4-1.1 10.9-4.6 12-12z" />
            </svg>
            {/* Eu escrevo o rótulo da seção. */}
            <span className="text-[10px] sm:text-[11px] font-semibold text-[#4C6B8C] tracking-[2px] uppercase">
              PERGUNTAS FREQUENTES
            </span>
          </div>
          {/* Eu escrevo o título do FAQ. */}
          <h2 className="font-['Fraunces',Georgia,serif] text-2xl sm:text-3xl font-bold text-[#102E4A]">
            Dúvidas Comuns
          </h2>
          {/* Eu ofereço o WhatsApp para quem não encontrar a resposta. */}
          <p className="text-sm text-[#4C6B8C] leading-relaxed">
            Não encontrou sua resposta? <a href="https://wa.me/?text=Ol%C3%A1%2C%20%C3%89rika!%20Vim%20pelo%20seu%20site%20erikasantos.com.br" target="_blank" rel="noreferrer" className="text-[#6486AC] hover:underline font-medium">Chama no WhatsApp</a>
          </p>
        </div>

        {/* Eu empilho as perguntas com um pequeno espaço entre elas. */}
        <div className="space-y-3">
          {/* Eu percorro a lista de perguntas. */}
          {FAQS.map((faq, index) => (
            // Eu crio um details para cada pergunta, controlado pelo estado.
            <details
              key={index}
              className="group bg-white rounded-2xl border border-[#E7DDC9] hover:border-[#6486AC] transition-colors overflow-hidden"
              open={openFaq === index}
            >
              {/* Eu trato o clique no cabeçalho da pergunta. */}
              <summary
                onClick={(event) => {
                  // Eu impeço o comportamento nativo do details para o React controlar a abertura.
                  event.preventDefault()
                  // Eu abro a pergunta clicada ou fecho se ela já estiver aberta.
                  setOpenFaq((current) => (current === index ? null : index))
                }}
                className="flex items-center justify-between gap-4 p-5 sm:p-6 cursor-pointer list-none"
              >
                {/* Eu escrevo o texto da pergunta. */}
                <h3 className="font-semibold text-sm sm:text-base text-[#102E4A] leading-snug pr-8">
                  {faq.question}
                </h3>
                {/* Eu desenho a seta que gira quando a pergunta abre. */}
                <svg
                  className="w-5 h-5 text-[#6486AC] shrink-0 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  {/* Eu traço a seta para baixo. */}
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              {/* Eu escrevo a resposta com a animação de abertura. */}
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
