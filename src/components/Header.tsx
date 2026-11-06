// Eu importo useState para controlar a abertura do menu no celular.
import { useState } from 'react'
// Eu importo o tipo que limita as abas possíveis.
import type { TabType } from '../types'

// Eu declaro as props que o cabeçalho recebe.
interface HeaderProps {
  // Eu recebo a aba ativa para marcar o link correspondente.
  activeTab: TabType
  // Eu recebo a função que troca de aba quando alguém clica no menu.
  onSelectTab: (tab: TabType) => void
}

// Eu crio o cabeçalho fixo com a marca e a navegação.
export function Header({ activeTab, onSelectTab }: HeaderProps) {
  // Eu guardo se o menu mobile está aberto.
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Eu centralizo o clique nos links do menu.
  const handleNavClick = (tab: TabType) => {
    // Eu aviso o App qual aba deve abrir.
    onSelectTab(tab)
    // Eu fecho o menu mobile depois do clique.
    setMobileMenuOpen(false)
  }

  // Eu retorno a estrutura do cabeçalho.
  return (
    // Eu deixo o cabeçalho fixo no topo, com fundo creme translúcido e desfoque.
    <header className="sticky top-0 z-50 bg-[#F9F3E3]/95 backdrop-blur-md border-b border-[#E7DDC9] px-4 sm:px-6 md:px-12 lg:px-16 py-3 sm:py-4">
      {/* Eu alinho marca, menu e botão de contato na mesma linha. */}
      <div className="max-w-6xl mx-auto flex items-center justify-between relative">
        {/* Eu transformo a marca em um botão que volta para a home. */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 group text-left cursor-pointer"
        >
          {/* Eu desenho a estrela ao lado do nome. */}
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4 fill-[#102E4A] group-hover:rotate-45 transition-transform duration-300 shrink-0"
          >
            {/* Eu uso o caminho da estrela da identidade visual. */}
            <path d="M12 0c1.1 7.4 4.6 10.9 12 12-7.4 1.1-10.9 4.6-12 12-1.1-7.4-4.6-10.9-12-12 7.4-1.1 10.9-4.6 12-12z" />
          </svg>
          {/* Eu escrevo o wordmark da marca. */}
          <span className="font-['Fraunces',Georgia,serif] text-xl sm:text-2xl font-bold text-[#102E4A] tracking-tight whitespace-nowrap">
            érika designer
          </span>
        </button>

        {/* Eu mostro a navegação completa apenas no desktop. */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[13px] font-medium tracking-wider">
          {/* Eu crio o link da home. */}
          <button
            onClick={() => handleNavClick('home')}
            className={`transition cursor-pointer ${
              activeTab === 'home'
                ? 'text-[#102E4A] font-semibold border-b-2 border-[#102E4A] pb-0.5'
                : 'text-[#4C6B8C] hover:text-[#102E4A]'
            }`}
          >
            Início
          </button>
          {/* Eu crio o link da galeria. */}
          <button
            onClick={() => handleNavClick('gallery')}
            className={`transition cursor-pointer ${
              activeTab === 'gallery'
                ? 'text-[#102E4A] font-semibold border-b-2 border-[#102E4A] pb-0.5'
                : 'text-[#4C6B8C] hover:text-[#102E4A]'
            }`}
          >
            Galeria de Arte
          </button>
          {/* Eu crio o link de serviços. */}
          <button
            onClick={() => handleNavClick('services')}
            className={`transition cursor-pointer ${
              activeTab === 'services'
                ? 'text-[#102E4A] font-semibold border-b-2 border-[#102E4A] pb-0.5'
                : 'text-[#4C6B8C] hover:text-[#102E4A]'
            }`}
          >
            Serviços
          </button>
          {/* Eu crio o link de contato. */}
          <button
            onClick={() => handleNavClick('contact')}
            className={`transition cursor-pointer ${
              activeTab === 'contact'
                ? 'text-[#102E4A] font-semibold border-b-2 border-[#102E4A] pb-0.5'
                : 'text-[#4C6B8C] hover:text-[#102E4A]'
            }`}
          >
            Contato
          </button>
        </nav>

        {/* Eu mostro o botão de contato apenas no desktop. */}
        <div className="hidden md:block">
          {/* Eu levo a pessoa direto para o formulário de contato. */}
          <button
            onClick={() => handleNavClick('contact')}
            className="inline-flex items-center gap-2 bg-[#102E4A] hover:bg-[#102E4A]/90 text-[#F9F3E3] px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition shadow-sm hover:shadow cursor-pointer"
          >
            {/* Eu escrevo o texto do botão. */}
            <span>Vamos conversar</span>
            {/* Eu desenho a setinha para cima e para a direita. */}
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              {/* Eu traço a seta diagonal. */}
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </button>
        </div>

        {/* Eu mostro o botão do menu apenas no celular. */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 -mr-1 rounded-lg text-[#102E4A] hover:bg-[#E7DDC9]/40 cursor-pointer"
          aria-label="Abrir Menu de Navegação"
        >
          {/* Eu desenho o ícone de menu ou de fechar, conforme o estado. */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {/* Eu troco o ícone quando o menu está aberto. */}
            {mobileMenuOpen ? (
              // Eu desenho um X para fechar o menu.
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Eu desenho as três linhas do menu hambúrguer.
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Eu mostro o menu suspenso quando ele está aberto no celular. */}
      {mobileMenuOpen && (
        // Eu empilho os links e o botão de contato.
        <div className="md:hidden pt-4 pb-2 border-t border-[#E7DDC9] mt-3 space-y-1.5 text-sm font-medium">
          {/* Eu crio o item da home no menu mobile. */}
          <button
            onClick={() => handleNavClick('home')}
            className={`block w-full text-left px-3.5 py-2.5 rounded-lg transition ${
              activeTab === 'home' ? 'bg-[#102E4A] text-[#F9F3E3]' : 'hover:bg-[#E7DDC9]/50 text-[#102E4A]'
            }`}
          >
            Início (Link na Bio)
          </button>
          {/* Eu crio o item da galeria no menu mobile. */}
          <button
            onClick={() => handleNavClick('gallery')}
            className={`block w-full text-left px-3.5 py-2.5 rounded-lg transition ${
              activeTab === 'gallery' ? 'bg-[#102E4A] text-[#F9F3E3]' : 'hover:bg-[#E7DDC9]/50 text-[#102E4A]'
            }`}
          >
            Galeria de Arte
          </button>
          {/* Eu crio o item de serviços no menu mobile. */}
          <button
            onClick={() => handleNavClick('services')}
            className={`block w-full text-left px-3.5 py-2.5 rounded-lg transition ${
              activeTab === 'services' ? 'bg-[#102E4A] text-[#F9F3E3]' : 'hover:bg-[#E7DDC9]/50 text-[#102E4A]'
            }`}
          >
            Serviços
          </button>
          {/* Eu crio o item de contato no menu mobile. */}
          <button
            onClick={() => handleNavClick('contact')}
            className={`block w-full text-left px-3.5 py-2.5 rounded-lg transition ${
              activeTab === 'contact' ? 'bg-[#102E4A] text-[#F9F3E3]' : 'hover:bg-[#E7DDC9]/50 text-[#102E4A]'
            }`}
          >
            Contato
          </button>
          {/* Eu coloco o botão de contato no fim do menu mobile. */}
          <div className="pt-2">
            {/* Eu levo a pessoa para o formulário de contato. */}
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full text-center bg-[#102E4A] text-[#F9F3E3] py-3 rounded-full text-xs font-semibold cursor-pointer shadow-sm"
            >
              Vamos conversar
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
