// Eu importo os serviços e as etapas do processo que vêm dos dados.
import { PROCESS_STEPS, SERVICES } from '../data/services'
// Eu importo o tipo das abas para tipar a navegação.
import type { TabType } from '../types'

// Eu declaro as props da página de serviços.
interface ServicesPageProps {
  // Eu recebo o serviço que está selecionado no momento.
  selectedService: string
  // Eu recebo a função que troca o serviço selecionado.
  onSelectService: (service: string) => void
  // Eu recebo a função que troca de aba.
  onNavigate: (tab: TabType) => void
}

// Eu crio a página que apresenta os serviços e o processo.
export function ServicesPage({ selectedService, onSelectService, onNavigate }: ServicesPageProps) {
  // Eu trato o clique em "Solicitar Proposta" de um serviço.
  const handleServiceSelect = (serviceId: string) => {
    // Eu guardo o serviço escolhido.
    onSelectService(serviceId)
    // Eu levo a pessoa para o formulário de contato.
    onNavigate('contact')
  }

  // Eu retorno a estrutura da página.
  return (
    // Eu separo as seções com espaçamento vertical.
    <div className="space-y-12 sm:space-y-16">
      {/* Eu monto o cabeçalho centralizado da página. */}
      <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
        {/* Eu alinho a estrela com o rótulo. */}
        <div className="inline-flex items-center gap-2">
          {/* Eu desenho a estrela em azul. */}
          <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-[#6486AC] shrink-0">
            {/* Eu uso o caminho da estrela da marca. */}
            <path d="M12 0c1.1 7.4 4.6 10.9 12 12-7.4 1.1-10.9 4.6-12 12-1.1-7.4-4.6-10.9-12-12 7.4-1.1 10.9-4.6 12-12z" />
          </svg>
          {/* Eu escrevo o rótulo da seção. */}
          <span className="text-[10px] sm:text-[11px] font-semibold text-[#4C6B8C] tracking-[2px] uppercase">
            SERVIÇOS
          </span>
        </div>
        {/* Eu escrevo o título principal. */}
        <h1 className="font-['Fraunces',Georgia,serif] text-3xl sm:text-4xl md:text-5xl text-[#102E4A] font-bold leading-tight">
          Design com propósito para marcas que desejam crescer.
        </h1>
        {/* Eu explico a proposta dos serviços. */}
        <p className="text-sm sm:text-base text-[#4C6B8C] leading-relaxed">
          Cada serviço é pensado para resolver uma necessidade real do seu posicionamento, aliando apelo visual de alto nível e estratégia comercial.
        </p>
      </div>

      {/* Eu monto o grid com os três pacotes de serviço. */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {/* Eu percorro cada serviço da lista. */}
        {SERVICES.map((service) => (
          // Eu crio o card do serviço e destaco o que está selecionado.
          <div
            key={service.id}
            className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#FFFCF5] border transition flex flex-col justify-between ${
              selectedService === service.id
                ? 'border-[#102E4A] shadow-lg ring-1 ring-[#102E4A]'
                : 'border-[#E7DDC9] hover:border-[#6486AC]'
            }`}
          >
            {/* Eu agrupo ícone, título, descrição e entregáveis. */}
            <div className="space-y-4 sm:space-y-5">
              {/* Eu crio o círculo com o ícone do serviço. */}
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-[#102E4A]">
                {/* Eu desenho o ícone conforme o serviço. */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  {/* Eu mostro o ícone de lista para Social Media. */}
                  {service.icon === 'social' && (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  )}
                  {/* Eu mostro o ícone de lápis para Identidade Visual. */}
                  {service.icon === 'brand' && (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  )}
                  {/* Eu mostro o ícone de lâmpada para Consultoria. */}
                  {service.icon === 'consulting' && (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  )}
                </svg>
              </div>
              {/* Eu agrupo título e subtítulo do serviço. */}
              <div>
                {/* Eu mostro o título do serviço. */}
                <h3 className="font-['Fraunces',Georgia,serif] text-xl sm:text-2xl font-bold text-[#102E4A]">
                  {service.title}
                </h3>
                {/* Eu mostro a explicação curta do serviço. */}
                <p className="text-xs text-[#4C6B8C] mt-2 leading-relaxed">
                  {service.subtitle}
                </p>
              </div>
              {/* Eu separo a lista de entregáveis com uma borda. */}
              <div className="border-t border-[#E7DDC9] pt-4 space-y-2.5">
                {/* Eu escrevo o rótulo dos entregáveis. */}
                <p className="text-[11px] font-semibold text-[#102E4A] uppercase tracking-wider">Entregáveis:</p>
                {/* Eu listo cada entregável do serviço. */}
                <ul className="space-y-2 text-xs text-[#4C6B8C]">
                  {/* Eu percorro os entregáveis e crio um item para cada. */}
                  {service.deliverables.map((item) => (
                    // Eu uso o texto do entregável como key.
                    <li key={item} className="flex items-center gap-2">
                      {/* Eu coloco uma estrela como marcador. */}
                      <span className="text-[#6486AC]">✦</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Eu coloco o botão de proposta no fim do card. */}
            <div className="pt-6 sm:pt-8">
              {/* Eu levo o serviço escolhido para o contato. */}
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

      {/* Eu monto a seção que explica o processo de trabalho. */}
      <div className="pt-8 sm:pt-12 border-t border-[#E7DDC9] space-y-6 sm:space-y-8">
        {/* Eu centralizo o título da seção. */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          {/* Eu escrevo o rótulo pequeno do processo. */}
          <span className="text-[10px] sm:text-[11px] font-semibold text-[#6486AC] uppercase tracking-[2px]">PROCESSO</span>
          {/* Eu escrevo o título do processo. */}
          <h2 className="font-['Fraunces',Georgia,serif] text-2xl sm:text-3xl font-bold text-[#102E4A]">
            Como funciona nosso processo
          </h2>
        </div>

        {/* Eu monto o grid com as três etapas. */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Eu percorro as etapas do processo. */}
          {PROCESS_STEPS.map((step) => (
            // Eu crio o card de cada etapa.
            <div key={step.number} className="p-5 sm:p-6 rounded-2xl bg-[#FFFCF5] border border-[#E7DDC9]">
              {/* Eu mostro o número grande da etapa. */}
              <span className="text-2xl sm:text-3xl font-bold font-['Fraunces',Georgia,serif] text-[#6486AC]">
                {step.number}
              </span>
              {/* Eu mostro o título da etapa. */}
              <h4 className="font-bold text-sm sm:text-base text-[#102E4A] mt-2">{step.title}</h4>
              {/* Eu explico o que acontece na etapa. */}
              <p className="text-xs text-[#4C6B8C] mt-2 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Eu monto a faixa final de chamada para o WhatsApp. */}
      <div className="bg-[#102E4A] text-[#F9F3E3] p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Eu agrupo o título e o texto da faixa. */}
        <div className="space-y-2">
          {/* Eu escrevo a pergunta que chama a pessoa para o contato. */}
          <h3 className="font-['Fraunces',Georgia,serif] text-xl sm:text-2xl md:text-3xl font-bold">
            Não sabe qual serviço é o ideal?
          </h3>
          {/* Eu explico que ela pode chamar no WhatsApp. */}
          <p className="text-xs sm:text-sm text-[#F9F3E3]/80">
            Me chame no WhatsApp e vamos bater um papo rápido para entender seu momento.
          </p>
        </div>
        {/* Eu crio a área do botão de WhatsApp. */}
        <div className="flex flex-wrap items-center justify-center gap-4 w-full md:w-auto">
          {/* Eu abro o WhatsApp com uma mensagem pronta. */}
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
