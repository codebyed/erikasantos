import { useState } from 'react'
import type { TabType } from '../types'

interface HeaderProps {
  activeTab: TabType
  onSelectTab: (tab: TabType) => void
}

export function Header({ activeTab, onSelectTab }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (tab: TabType) => {
    onSelectTab(tab)
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-[#F9F3E3]/95 backdrop-blur-md border-b border-[#E7DDC9] px-4 sm:px-6 md:px-12 lg:px-16 py-3 sm:py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between relative">
        {/* Brand */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 group text-left cursor-pointer"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4 fill-[#102E4A] group-hover:rotate-45 transition-transform duration-300 shrink-0"
          >
            <path d="M12 0c1.1 7.4 4.6 10.9 12 12-7.4 1.1-10.9 4.6-12 12-1.1-7.4-4.6-10.9-12-12 7.4-1.1 10.9-4.6 12-12z" />
          </svg>
          <span className="font-['Fraunces',Georgia,serif] text-xl sm:text-2xl font-bold text-[#102E4A] tracking-tight whitespace-nowrap">
            érika designer
          </span>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[13px] font-medium tracking-wider">
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

        {/* CTA Desktop */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNavClick('contact')}
            className="inline-flex items-center gap-2 bg-[#102E4A] hover:bg-[#102E4A]/90 text-[#F9F3E3] px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition shadow-sm hover:shadow cursor-pointer"
          >
            <span>Vamos conversar</span>
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 -mr-1 rounded-lg text-[#102E4A] hover:bg-[#E7DDC9]/40 cursor-pointer"
          aria-label="Abrir Menu de Navegação"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-4 pb-2 border-t border-[#E7DDC9] mt-3 space-y-1.5 text-sm font-medium">
          <button
            onClick={() => handleNavClick('home')}
            className={`block w-full text-left px-3.5 py-2.5 rounded-lg transition ${
              activeTab === 'home' ? 'bg-[#102E4A] text-[#F9F3E3]' : 'hover:bg-[#E7DDC9]/50 text-[#102E4A]'
            }`}
          >
            Início (Link na Bio)
          </button>
          <button
            onClick={() => handleNavClick('gallery')}
            className={`block w-full text-left px-3.5 py-2.5 rounded-lg transition ${
              activeTab === 'gallery' ? 'bg-[#102E4A] text-[#F9F3E3]' : 'hover:bg-[#E7DDC9]/50 text-[#102E4A]'
            }`}
          >
            Galeria de Arte
          </button>
          <button
            onClick={() => handleNavClick('services')}
            className={`block w-full text-left px-3.5 py-2.5 rounded-lg transition ${
              activeTab === 'services' ? 'bg-[#102E4A] text-[#F9F3E3]' : 'hover:bg-[#E7DDC9]/50 text-[#102E4A]'
            }`}
          >
            Serviços
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`block w-full text-left px-3.5 py-2.5 rounded-lg transition ${
              activeTab === 'contact' ? 'bg-[#102E4A] text-[#F9F3E3]' : 'hover:bg-[#E7DDC9]/50 text-[#102E4A]'
            }`}
          >
            Contato
          </button>
          <div className="pt-2">
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
