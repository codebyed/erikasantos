import React, { useState } from 'react'

interface Project {
  id: string
  title: string
  category: 'Identidade Visual' | 'Social Media' | 'Editorial' | 'Direção de Arte'
  description: string
  image: string
  year: string
  tags: string[]
}

const PROJECTS: Project[] = [
  {
    id: 'feed-erika',
    title: 'Feed & Presença Digital',
    category: 'Social Media',
    description: 'Direção de arte completa para feed do Instagram, unindo estética minimalista, contraste elegante e copywriting visual.',
    image: '/images/gallery/feed-portfolio.jpeg',
    year: '2026',
    tags: ['Instagram', 'Carrosséis', 'Posicionamento'],
  },
  {
    id: 'branding-autoral',
    title: 'Branding & Identidade Autoral',
    category: 'Identidade Visual',
    description: 'Construção conceitual de marca, tipografia personalizada, paleta terrosa e elementos gráficos exclusivos.',
    image: '/images/gallery/branding-identidade.png',
    year: '2026',
    tags: ['Logotipo', 'Brandbook', 'Tipografia'],
  },
  {
    id: 'selos-emblemas',
    title: 'Selos Gráficos & Emblemas',
    category: 'Editorial',
    description: 'Criação de insígnias, selos circulares e monogramas de alto valor para aplicações físicas e digitais.',
    image: '/images/gallery/selo-destaque.png',
    year: '2025',
    tags: ['Emblemas', 'Selos', 'Acabamentos'],
  },
  {
    id: 'social-posts',
    title: 'Social Media & Conteúdo Estratégico',
    category: 'Social Media',
    description: 'Composições com hierarquia tipográfica apurada, fotos autorais e ritmo visual para marcas de serviços e produtos.',
    image: '/images/gallery/social-media-post.png',
    year: '2026',
    tags: ['Design Gráfico', 'Stories', 'Reels'],
  },
  {
    id: 'editorial-papelaria',
    title: 'Design Editorial & Papelaria Fina',
    category: 'Editorial',
    description: 'Cartões de visita táteis, embalagens personalizadas e manuais impressos com atenção extrema a detalhes.',
    image: '/images/gallery/editorial-design.png',
    year: '2025',
    tags: ['Impressos', 'Papelaria', 'Embalagens'],
  },
  {
    id: 'direcao-criativa',
    title: 'Estratégia & Direção Criativa',
    category: 'Direção de Arte',
    description: 'Diagnóstico e consultoria 360° para reposicionar marcas e elevar a percepção de valor no mercado.',
    image: '/images/gallery/visual-strategy.png',
    year: '2026',
    tags: ['Consultoria', 'Direção de Arte', 'Moodboards'],
  },
]

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'gallery' | 'services' | 'contact'>('home')
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [selectedService, setSelectedService] = useState('Social Media')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Form states for contact
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    instagram: '',
    mensagem: '',
    servico: 'Social Media',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const filteredProjects = selectedCategory === 'Todos'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory)

  return (
    <div className="min-h-screen bg-[#F9F3E3] text-[#102E4A] font-[Poppins,system-ui,sans-serif] selection:bg-[#6486AC] selection:text-[#F9F3E3]">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#F9F3E3]/95 backdrop-blur-md border-b border-[#E7DDC9] px-6 md:px-16 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between relative">
          {/* Brand */}
          <button
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-2 group text-left cursor-pointer"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 fill-[#102E4A] group-hover:rotate-45 transition-transform duration-300"
            >
              <path d="M12 0c1.1 7.4 4.6 10.9 12 12-7.4 1.1-10.9 4.6-12 12-1.1-7.4-4.6-10.9-12-12 7.4-1.1 10.9-4.6 12-12z" />
            </svg>
            <span className="font-['Fraunces',Georgia,serif] text-2xl font-bold text-[#102E4A] tracking-tight">
              érika designer
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-wider">
            <button
              onClick={() => setActiveTab('home')}
              className={`transition cursor-pointer ${
                activeTab === 'home'
                  ? 'text-[#102E4A] font-semibold border-b-2 border-[#102E4A] pb-0.5'
                  : 'text-[#4C6B8C] hover:text-[#102E4A]'
              }`}
            >
              Início
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`transition cursor-pointer ${
                activeTab === 'gallery'
                  ? 'text-[#102E4A] font-semibold border-b-2 border-[#102E4A] pb-0.5'
                  : 'text-[#4C6B8C] hover:text-[#102E4A]'
              }`}
            >
              Galeria de Arte
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`transition cursor-pointer ${
                activeTab === 'services'
                  ? 'text-[#102E4A] font-semibold border-b-2 border-[#102E4A] pb-0.5'
                  : 'text-[#4C6B8C] hover:text-[#102E4A]'
              }`}
            >
              Serviços
            </button>
            <button
              onClick={() => setActiveTab('contact')}
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
              onClick={() => setActiveTab('contact')}
              className="inline-flex items-center gap-2 bg-[#102E4A] hover:bg-[#102E4A]/90 text-[#F9F3E3] px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition shadow-sm hover:shadow"
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
            className="md:hidden p-2 rounded-lg text-[#102E4A] hover:bg-[#E7DDC9]/40"
            aria-label="Menu"
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
          <div className="md:hidden pt-4 pb-2 border-t border-[#E7DDC9] mt-3 space-y-2 text-sm font-medium">
            <button
              onClick={() => {
                setActiveTab('home')
                setMobileMenuOpen(false)
              }}
              className={`block w-full text-left px-3 py-2 rounded-md ${
                activeTab === 'home' ? 'bg-[#102E4A] text-[#F9F3E3]' : 'hover:bg-[#E7DDC9]/50'
              }`}
            >
              Início (Link na Bio)
            </button>
            <button
              onClick={() => {
                setActiveTab('gallery')
                setMobileMenuOpen(false)
              }}
              className={`block w-full text-left px-3 py-2 rounded-md ${
                activeTab === 'gallery' ? 'bg-[#102E4A] text-[#F9F3E3]' : 'hover:bg-[#E7DDC9]/50'
              }`}
            >
              Galeria de Arte
            </button>
            <button
              onClick={() => {
                setActiveTab('services')
                setMobileMenuOpen(false)
              }}
              className={`block w-full text-left px-3 py-2 rounded-md ${
                activeTab === 'services' ? 'bg-[#102E4A] text-[#F9F3E3]' : 'hover:bg-[#E7DDC9]/50'
              }`}
            >
              Serviços
            </button>
            <button
              onClick={() => {
                setActiveTab('contact')
                setMobileMenuOpen(false)
              }}
              className={`block w-full text-left px-3 py-2 rounded-md ${
                activeTab === 'contact' ? 'bg-[#102E4A] text-[#F9F3E3]' : 'hover:bg-[#E7DDC9]/50'
              }`}
            >
              Contato
            </button>
            <div className="pt-2">
              <button
                onClick={() => {
                  setActiveTab('contact')
                  setMobileMenuOpen(false)
                }}
                className="w-full text-center bg-[#102E4A] text-[#F9F3E3] py-2.5 rounded-full text-xs font-semibold"
              >
                Vamos conversar
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 py-6 md:py-10">
        {/* ======================= ABA 1: LINK NA BIO (INÍCIO) ======================= */}
        {activeTab === 'home' && (
          <div className="space-y-16">
            {/* Hero Section - Link na Bio */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start pt-2">
              {/* Visual Stage com Crachá COLADO NO NAVBAR e com efeito de balanço no hover */}
              <div className="lg:col-span-5 relative flex justify-center items-start pt-0 min-h-[460px] md:min-h-[580px]">
                {/* Glow Radial de fundo */}
                <div className="absolute top-10 w-[340px] md:w-[440px] h-[340px] md:h-[440px] rounded-full [background-image:radial-gradient(ellipse_50%_50%_at_50%_50%,_#E8EFF7_0%,_#F5EEE1_72%,_#F9F3E3_100%)] -z-10 opacity-90"></div>

                {/* Arcos decorativos do design */}
                <svg
                  viewBox="0 0 220 120"
                  className="w-[200px] md:w-[260px] h-[100px] md:h-[130px] opacity-35 absolute -left-4 md:-left-8 top-52 pointer-events-none -z-5"
                >
                  <path d="M0 110c60-70 140-100 220-110" fill="none" stroke="#6486AC" strokeWidth="1" />
                </svg>
                <svg
                  viewBox="0 0 150 100"
                  className="w-[130px] md:w-[170px] h-[80px] md:h-[110px] opacity-30 absolute right-2 md:-right-4 top-36 pointer-events-none -z-5"
                >
                  <path d="M0 0c40 40 90 70 150 100" fill="none" stroke="#6486AC" strokeWidth="1" />
                </svg>

                {/* Brilhos / Sparkles pontuais */}
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#102E4A] absolute top-12 left-10 opacity-80 animate-pulse">
                  <path d="M12 0c1.1 7.4 4.6 10.9 12 12-7.4 1.1-10.9 4.6-12 12-1.1-7.4-4.6-10.9-12-12 7.4-1.1 10.9-4.6 12-12z" />
                </svg>
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#6486AC] absolute bottom-8 right-12 opacity-70">
                  <path d="M12 0c1.1 7.4 4.6 10.9 12 12-7.4 1.1-10.9 4.6-12 12-1.1-7.4-4.6-10.9-12-12 7.4-1.1 10.9-4.6 12-12z" />
                </svg>

                {/* Crachá Érika Santos:
                    - Colado no topo (ligado diretamente ao navbar)
                    - Background 100% TRANSPARENTE (sem fundo branco, sem bordas brancas)
                    - Efeito de balanço suave (hover-swing) como pêndulo preso pelo cordão ao passar o mouse
                */}
                <div className="relative z-10 flex flex-col items-center -mt-6 md:-mt-10 hover-swing cursor-pointer group">
                  {/* Fita / Cordão do crachá conectando ao topo */}
                  <div className="w-4 h-8 bg-gradient-to-b from-[#102E4A] via-[#102E4A]/80 to-[#6486AC] rounded-t-sm shadow-xs mb-[-4px] z-20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E7DDC9]"></div>
                  </div>

                  {/* Imagem do Crachá com Fundo Transparente */}
                  <div className="bg-transparent filter drop-shadow-[0_20px_25px_rgba(16,46,74,0.18)]">
                    <img
                      src="/erikasantos-assets/badge-erika-trim.png"
                      alt="Crachá Érika Designer"
                      className="w-[230px] sm:w-[260px] md:w-[285px] h-auto object-contain bg-transparent block"
                    />
                  </div>
                </div>

                {/* Selos flutuantes fiéis ao Pencil */}
                <img
                  src="/erikasantos-assets/seal-blue-circular.png"
                  alt="Selo circular"
                  className="absolute top-2 md:top-4 right-2 md:right-4 w-28 md:w-34 h-28 md:h-34 -rotate-[8deg] z-20 drop-shadow-md hover:scale-105 transition-transform"
                />
                <img
                  src="/erikasantos-assets/marble-blue-1.png"
                  alt="Esfera mármore"
                  className="absolute top-52 md:top-60 right-0 md:-right-2 w-20 md:w-26 h-20 md:h-26 rotate-[10deg] z-20 drop-shadow-md"
                />
                <img
                  src="/erikasantos-assets/seal-gray.png"
                  alt="Selo érika designer"
                  className="absolute bottom-4 md:bottom-6 right-6 md:right-8 w-24 md:w-30 h-24 md:h-30 -rotate-[6deg] z-20 drop-shadow-md"
                />
                <img
                  src="/erikasantos-assets/seal-cream-star.png"
                  alt="Selo estrela"
                  className="absolute top-14 md:top-18 left-2 md:left-6 w-16 md:w-18 h-16 md:h-18 rotate-[8deg] z-20 drop-shadow-md"
                />
                <img
                  src="/erikasantos-assets/seal-navy-e.png"
                  alt="Selo É"
                  className="absolute bottom-16 md:bottom-20 left-4 md:left-8 w-14 md:w-16 h-14 md:h-16 z-20 drop-shadow-md"
                />
              </div>

              {/* Conteúdo Link na Bio */}
              <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 pt-2">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2">
                  <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-[#6486AC]">
                    <path d="M12 0c1.1 7.4 4.6 10.9 12 12-7.4 1.1-10.9 4.6-12 12-1.1-7.4-4.6-10.9-12-12 7.4-1.1 10.9-4.6 12-12z" />
                  </svg>
                  <span className="text-[10px] md:text-[11px] font-semibold text-[#4C6B8C] tracking-[2px] uppercase">
                    DESIGNER GRÁFICO · IDENTIDADE & SOCIAL MEDIA
                  </span>
                </div>

                {/* Wordmark Principal */}
                <h1 className="font-['Fraunces',Georgia,serif] text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold text-[#102E4A] leading-[0.98] tracking-tight">
                  érika designer
                </h1>

                {/* Keywords Bar */}
                <div className="flex items-center gap-3 text-xs font-semibold tracking-[1.6px] uppercase text-[#4C6B8C]">
                  <span>ESTRATÉGIA</span>
                  <span className="text-[#6486AC]">•</span>
                  <span>CONEXÃO</span>
                  <span className="text-[#6486AC]">•</span>
                  <span>CRIATIVIDADE</span>
                </div>

                {/* Quote do Design */}
                <p className="text-base md:text-lg text-[#4C6B8C] leading-relaxed max-w-xl font-normal">
                  Sua marca merece transmitir o que você sente por ela, e eu cuido disso. Estratégia, identidade visual e presença digital pensadas para conectar e encantar.
                </p>

                {/* Botões Sociais e CTA Principal */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
                  {/* Linha de Ícones Sociais */}
                  <div className="flex items-center gap-3">
                    {/* Instagram @erik4.designer */}
                    <a
                      href="https://instagram.com/erik4.designer"
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 h-12 rounded-full bg-white border border-[#E7DDC9] flex items-center justify-center text-[#102E4A] hover:bg-[#102E4A] hover:text-[#F9F3E3] transition shadow-xs group/btn"
                      title="Instagram @erik4.designer"
                    >
                      <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/?text=Ol%C3%A1%2C%20%C3%89rika!%20Vim%20pelo%20seu%20site%20erikasantos.com.br"
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 h-12 rounded-full bg-white border border-[#E7DDC9] flex items-center justify-center text-[#102E4A] hover:bg-[#102E4A] hover:text-[#F9F3E3] transition shadow-xs"
                      title="WhatsApp Direto"
                    >
                      <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                    </a>
                    {/* Website Oficial */}
                    <a
                      href="https://erikasantos.com.br"
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 h-12 rounded-full bg-white border border-[#E7DDC9] flex items-center justify-center text-[#102E4A] hover:bg-[#102E4A] hover:text-[#F9F3E3] transition shadow-xs"
                      title="erikasantos.com.br"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8" />
                      </svg>
                    </a>
                  </div>

                  {/* CTA Botão Pacotes */}
                  <button
                    onClick={() => setActiveTab('services')}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#102E4A] hover:text-[#F9F3E3] text-[#102E4A] border border-[#102E4A] px-6 py-3.5 rounded-full text-xs font-semibold tracking-wide transition shadow-sm"
                  >
                    <span>Conheça os pacotes e valores</span>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Links Section (Cards do Link na Bio) */}
            <div className="pt-6 border-t border-[#E7DDC9]">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-semibold text-[#4C6B8C] tracking-[2px] uppercase">
                  ACESSO RÁPIDO · LINKS NA BIO
                </span>
                <span className="text-xs text-[#4C6B8C]">Clique para navegar</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Quick Link 1: Ver a Galeria Completa */}
                <div
                  onClick={() => setActiveTab('gallery')}
                  className="group bg-[#FFFCF5] hover:bg-white p-5 rounded-2xl border border-[#E7DDC9] hover:border-[#6486AC] shadow-xs hover:shadow-md transition cursor-pointer flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#E8EFF7] flex items-center justify-center text-[#102E4A] group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <svg className="w-4 h-4 text-[#4C6B8C] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-[#102E4A]">Galeria de Arte & Projetos</h3>
                    <p className="text-xs text-[#4C6B8C] mt-1">Conheça o portfólio selecionado</p>
                  </div>
                </div>

                {/* Quick Link 2: Social Media */}
                <div
                  onClick={() => {
                    setActiveTab('services')
                    setSelectedService('Social Media')
                  }}
                  className="group bg-[#FFFCF5] hover:bg-white p-5 rounded-2xl border border-[#E7DDC9] hover:border-[#6486AC] shadow-xs hover:shadow-md transition cursor-pointer flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#E8EFF7] flex items-center justify-center text-[#102E4A] group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                    </div>
                    <svg className="w-4 h-4 text-[#4C6B8C] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-[#102E4A]">Social Media</h3>
                    <p className="text-xs text-[#4C6B8C] mt-1">Pacotes mensais para Instagram</p>
                  </div>
                </div>

                {/* Quick Link 3: Identidade visual */}
                <div
                  onClick={() => {
                    setActiveTab('services')
                    setSelectedService('Identidade Visual')
                  }}
                  className="group bg-[#FFFCF5] hover:bg-white p-5 rounded-2xl border border-[#E7DDC9] hover:border-[#6486AC] shadow-xs hover:shadow-md transition cursor-pointer flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#E8EFF7] flex items-center justify-center text-[#102E4A] group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    </div>
                    <svg className="w-4 h-4 text-[#4C6B8C] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-[#102E4A]">Identidade visual</h3>
                    <p className="text-xs text-[#4C6B8C] mt-1">Branding do zero ou redesign</p>
                  </div>
                </div>

                {/* Quick Link 4: Falar no WhatsApp */}
                <a
                  href="https://wa.me/?text=Ol%C3%A1%2C%20%C3%89rika!%20Vim%20pelo%20seu%20site%20erikasantos.com.br"
                  target="_blank"
                  rel="noreferrer"
                  className="group bg-[#102E4A] hover:bg-[#102E4A]/90 p-5 rounded-2xl border border-[#102E4A] shadow-xs hover:shadow-md transition flex flex-col justify-between text-[#F9F3E3]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <svg className="w-4 h-4 text-[#F9F3E3]/70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-[#F9F3E3]">Falar no WhatsApp</h3>
                    <p className="text-xs text-[#F9F3E3]/80 mt-1">Tire dúvidas ou orçamentos</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ======================= ABA 2: GALERIA DE ARTE ======================= */}
        {activeTab === 'gallery' && (
          <div className="space-y-12">
            {/* Header da Galeria */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-[#6486AC]">
                  <path d="M12 0c1.1 7.4 4.6 10.9 12 12-7.4 1.1-10.9 4.6-12 12-1.1-7.4-4.6-10.9-12-12 7.4-1.1 10.9-4.6 12-12z" />
                </svg>
                <span className="text-[11px] font-semibold text-[#4C6B8C] tracking-[2px] uppercase">
                  GALERIA & PORTFÓLIO
                </span>
              </div>
              <h1 className="font-['Fraunces',Georgia,serif] text-4xl sm:text-5xl text-[#102E4A] font-bold leading-tight">
                Galeria de Arte & Trabalhos Selecionados
              </h1>
              <p className="text-base text-[#4C6B8C] leading-relaxed">
                Uma curadoria visual de marcas, projetos gráficos e estratégias de conteúdo criadas por Érika Santos.
              </p>
            </div>

            {/* Filtros da Galeria */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {['Todos', 'Social Media', 'Identidade Visual', 'Editorial', 'Direção de Arte'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#102E4A] text-[#F9F3E3] shadow-xs'
                      : 'bg-white border border-[#E7DDC9] text-[#4C6B8C] hover:border-[#102E4A]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid de Projetos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group bg-[#FFFCF5] hover:bg-white rounded-3xl border border-[#E7DDC9] hover:border-[#102E4A] overflow-hidden transition-all duration-300 shadow-xs hover:shadow-xl cursor-pointer flex flex-col justify-between"
                >
                  {/* Imagem do Projeto */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#E8EFF7]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-[#102E4A]/80 backdrop-blur-xs text-[#F9F3E3] text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {project.year}
                    </div>
                  </div>

                  {/* Detalhes do Projeto */}
                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-semibold text-[#6486AC] uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="font-['Fraunces',Georgia,serif] text-xl font-bold text-[#102E4A] mt-1 group-hover:text-[#6486AC] transition">
                        {project.title}
                      </h3>
                      <p className="text-xs text-[#4C6B8C] mt-2 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#E7DDC9]/70 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-[#E8EFF7] text-[#102E4A]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-xs font-semibold text-[#102E4A] group-hover:translate-x-1 transition-transform">
                        Ver ↗
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal de Detalhe de Projeto */}
            {selectedProject && (
              <div
                className="fixed inset-0 z-50 bg-[#102E4A]/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
                onClick={() => setSelectedProject(null)}
              >
                <div
                  className="bg-[#FFFCF5] max-w-2xl w-full rounded-3xl overflow-hidden border border-[#E7DDC9] shadow-2xl relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#102E4A] flex items-center justify-center shadow-md cursor-pointer"
                  >
                    ✕
                  </button>

                  <div className="max-h-[85vh] overflow-y-auto">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full max-h-[380px] object-cover"
                    />
                    <div className="p-8 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-[#6486AC] uppercase tracking-wider">
                          {selectedProject.category} · {selectedProject.year}
                        </span>
                        <div className="flex gap-2">
                          {selectedProject.tags.map((tag) => (
                            <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full bg-[#E8EFF7] text-[#102E4A] font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <h2 className="font-['Fraunces',Georgia,serif] text-3xl font-bold text-[#102E4A]">
                        {selectedProject.title}
                      </h2>

                      <p className="text-sm text-[#4C6B8C] leading-relaxed">
                        {selectedProject.description}
                      </p>

                      <div className="pt-4 flex flex-wrap gap-4 border-t border-[#E7DDC9]">
                        <a
                          href="https://wa.me/?text=Ol%C3%A1%2C%20%C3%89rika!%20Adorei%20o%20projeto%20no%20seu%20portfolio"
                          target="_blank"
                          rel="noreferrer"
                          className="bg-[#102E4A] text-[#F9F3E3] hover:bg-[#102E4A]/90 px-6 py-2.5 rounded-full text-xs font-semibold transition"
                        >
                          Quero um projeto parecido
                        </a>
                        <a
                          href="https://instagram.com/erik4.designer"
                          target="_blank"
                          rel="noreferrer"
                          className="border border-[#102E4A] text-[#102E4A] hover:bg-white px-6 py-2.5 rounded-full text-xs font-semibold transition"
                        >
                          Ver no Instagram @erik4.designer ↗
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ======================= ABA 3: SERVIÇOS ======================= */}
        {activeTab === 'services' && (
          <div className="space-y-16">
            {/* Header Serviços */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-[#6486AC]">
                  <path d="M12 0c1.1 7.4 4.6 10.9 12 12-7.4 1.1-10.9 4.6-12 12-1.1-7.4-4.6-10.9-12-12 7.4-1.1 10.9-4.6 12-12z" />
                </svg>
                <span className="text-[11px] font-semibold text-[#4C6B8C] tracking-[2px] uppercase">
                  SERVIÇOS
                </span>
              </div>
              <h1 className="font-['Fraunces',Georgia,serif] text-4xl sm:text-5xl text-[#102E4A] font-bold leading-tight">
                Design com propósito para marcas que desejam crescer.
              </h1>
              <p className="text-base text-[#4C6B8C] leading-relaxed">
                Cada serviço é pensado para resolver uma necessidade real do seu posicionamento, aliando apelo visual de alto nível e estratégia comercial.
              </p>
            </div>

            {/* Grid 3 Serviços */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Social Media */}
              <div
                className={`p-8 rounded-3xl bg-[#FFFCF5] border transition flex flex-col justify-between ${
                  selectedService === 'Social Media' ? 'border-[#102E4A] shadow-lg ring-1 ring-[#102E4A]' : 'border-[#E7DDC9] hover:border-[#6486AC]'
                }`}
              >
                <div className="space-y-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#E8EFF7] flex items-center justify-center text-[#102E4A]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-['Fraunces',Georgia,serif] text-2xl font-bold text-[#102E4A]">Social Media</h3>
                    <p className="text-xs text-[#4C6B8C] mt-2 leading-relaxed">
                      Estratégia visual e conteúdo contínuo para transformar seguidores em clientes fiéis.
                    </p>
                  </div>
                  <div className="border-t border-[#E7DDC9] pt-4 space-y-2.5">
                    <p className="text-[11px] font-semibold text-[#102E4A] uppercase tracking-wider">Entregáveis:</p>
                    <ul className="space-y-2 text-xs text-[#4C6B8C]">
                      <li className="flex items-center gap-2">
                        <span className="text-[#6486AC]">✦</span> Planejamento mensal de posts
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#6486AC]">✦</span> Design de carrosséis & capas de Reels
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#6486AC]">✦</span> Identidade de Stories & destaques
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#6486AC]">✦</span> Relatório de performance visual
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pt-8">
                  <button
                    onClick={() => {
                      setSelectedService('Social Media')
                      setFormData({ ...formData, servico: 'Social Media' })
                      setActiveTab('contact')
                    }}
                    className="w-full text-center bg-[#102E4A] hover:bg-[#102E4A]/90 text-[#F9F3E3] py-3 rounded-full text-xs font-semibold transition"
                  >
                    Solicitar Proposta
                  </button>
                </div>
              </div>

              {/* Card 2: Identidade Visual */}
              <div
                className={`p-8 rounded-3xl bg-[#FFFCF5] border transition flex flex-col justify-between ${
                  selectedService === 'Identidade Visual' ? 'border-[#102E4A] shadow-lg ring-1 ring-[#102E4A]' : 'border-[#E7DDC9] hover:border-[#6486AC]'
                }`}
              >
                <div className="space-y-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#E8EFF7] flex items-center justify-center text-[#102E4A]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-['Fraunces',Georgia,serif] text-2xl font-bold text-[#102E4A]">Identidade Visual</h3>
                    <p className="text-xs text-[#4C6B8C] mt-2 leading-relaxed">
                      Criação de logotipo, paleta, tipografia e diretrizes de marca completas e autorais.
                    </p>
                  </div>
                  <div className="border-t border-[#E7DDC9] pt-4 space-y-2.5">
                    <p className="text-[11px] font-semibold text-[#102E4A] uppercase tracking-wider">Entregáveis:</p>
                    <ul className="space-y-2 text-xs text-[#4C6B8C]">
                      <li className="flex items-center gap-2">
                        <span className="text-[#6486AC]">✦</span> Logo principal & variações/símbolos
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#6486AC]">✦</span> Paleta cromática e tipografia
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#6486AC]">✦</span> Brandbook completo com guia de uso
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#6486AC]">✦</span> Materiais impressos e digitais
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pt-8">
                  <button
                    onClick={() => {
                      setSelectedService('Identidade Visual')
                      setFormData({ ...formData, servico: 'Identidade Visual' })
                      setActiveTab('contact')
                    }}
                    className="w-full text-center bg-[#102E4A] hover:bg-[#102E4A]/90 text-[#F9F3E3] py-3 rounded-full text-xs font-semibold transition"
                  >
                    Solicitar Proposta
                  </button>
                </div>
              </div>

              {/* Card 3: Consultoria & Direção */}
              <div
                className={`p-8 rounded-3xl bg-[#FFFCF5] border transition flex flex-col justify-between ${
                  selectedService === 'Consultoria' ? 'border-[#102E4A] shadow-lg ring-1 ring-[#102E4A]' : 'border-[#E7DDC9] hover:border-[#6486AC]'
                }`}
              >
                <div className="space-y-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#E8EFF7] flex items-center justify-center text-[#102E4A]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-['Fraunces',Georgia,serif] text-2xl font-bold text-[#102E4A]">Consultoria & Direção</h3>
                    <p className="text-xs text-[#4C6B8C] mt-2 leading-relaxed">
                      Diagnóstico visual e direcionamento estratégico para elevar a percepção de valor.
                    </p>
                  </div>
                  <div className="border-t border-[#E7DDC9] pt-4 space-y-2.5">
                    <p className="text-[11px] font-semibold text-[#102E4A] uppercase tracking-wider">Entregáveis:</p>
                    <ul className="space-y-2 text-xs text-[#4C6B8C]">
                      <li className="flex items-center gap-2">
                        <span className="text-[#6486AC]">✦</span> Sessão individual de diagnóstico 1:1
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#6486AC]">✦</span> Análise detalhada do perfil e presença
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#6486AC]">✦</span> Moodboard e plano de ação estruturado
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#6486AC]">✦</span> Suporte de 15 dias via WhatsApp
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pt-8">
                  <button
                    onClick={() => {
                      setSelectedService('Consultoria')
                      setFormData({ ...formData, servico: 'Consultoria' })
                      setActiveTab('contact')
                    }}
                    className="w-full text-center bg-[#102E4A] hover:bg-[#102E4A]/90 text-[#F9F3E3] py-3 rounded-full text-xs font-semibold transition"
                  >
                    Solicitar Proposta
                  </button>
                </div>
              </div>
            </div>

            {/* Metodologia de Processo */}
            <div className="pt-12 border-t border-[#E7DDC9] space-y-8">
              <div className="text-center max-w-xl mx-auto space-y-2">
                <span className="text-[11px] font-semibold text-[#6486AC] uppercase tracking-[2px]">PROCESSO</span>
                <h2 className="font-['Fraunces',Georgia,serif] text-3xl font-bold text-[#102E4A]">
                  Como funciona nosso processo
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-[#FFFCF5] border border-[#E7DDC9]">
                  <span className="text-3xl font-bold font-['Fraunces',Georgia,serif] text-[#6486AC]">01</span>
                  <h4 className="font-bold text-base text-[#102E4A] mt-2">Briefing & Imersão</h4>
                  <p className="text-xs text-[#4C6B8C] mt-2 leading-relaxed">
                    Entendimento profundo do seu negócio, público, diferenciais e objetivos de mercado.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#FFFCF5] border border-[#E7DDC9]">
                  <span className="text-3xl font-bold font-['Fraunces',Georgia,serif] text-[#6486AC]">02</span>
                  <h4 className="font-bold text-base text-[#102E4A] mt-2">Criação & Conceito</h4>
                  <p className="text-xs text-[#4C6B8C] mt-2 leading-relaxed">
                    Pesquisa visual, moodboards e desenvolvimento de propostas exclusivas e autorais.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#FFFCF5] border border-[#E7DDC9]">
                  <span className="text-3xl font-bold font-['Fraunces',Georgia,serif] text-[#6486AC]">03</span>
                  <h4 className="font-bold text-base text-[#102E4A] mt-2">Apresentação & Entrega</h4>
                  <p className="text-xs text-[#4C6B8C] mt-2 leading-relaxed">
                    Apresentação guiada, ajustes finos e envio de todos os arquivos organizados com suporte.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Band */}
            <div className="bg-[#102E4A] text-[#F9F3E3] p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <h3 className="font-['Fraunces',Georgia,serif] text-2xl md:text-3xl font-bold">
                  Não sabe qual serviço é o ideal?
                </h3>
                <p className="text-xs md:text-sm text-[#F9F3E3]/80">
                  Me chame no WhatsApp e vamos bater um papo rápido para entender seu momento.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/?text=Ol%C3%A1%2C%20%C3%89rika!%20Vim%20pelo%20seu%20site%20erikasantos.com.br"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#F9F3E3] text-[#102E4A] hover:bg-white px-6 py-3 rounded-full text-xs font-semibold tracking-wide transition shadow"
                >
                  Conversar no WhatsApp ↗
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ======================= ABA 4: CONTATO ======================= */}
        {activeTab === 'contact' && (
          <div className="space-y-12">
            {/* Header Contato */}
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-[#6486AC]">
                  <path d="M12 0c1.1 7.4 4.6 10.9 12 12-7.4 1.1-10.9 4.6-12 12-1.1-7.4-4.6-10.9-12-12 7.4-1.1 10.9-4.6 12-12z" />
                </svg>
                <span className="text-[11px] font-semibold text-[#4C6B8C] tracking-[2px] uppercase">
                  CONTATO
                </span>
              </div>
              <h1 className="font-['Fraunces',Georgia,serif] text-4xl sm:text-5xl text-[#102E4A] font-bold leading-tight">
                Vamos transformar sua presença visual juntos?
              </h1>
              <p className="text-base text-[#4C6B8C] leading-relaxed">
                Preencha os dados abaixo para receber uma proposta personalizada ou fale comigo diretamente pelo WhatsApp ou Instagram.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Form Card */}
              <div className="lg:col-span-7 bg-[#FFFCF5] p-8 md:p-10 rounded-3xl border border-[#E7DDC9] shadow-sm">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl">
                      ✓
                    </div>
                    <h3 className="font-['Fraunces',Georgia,serif] text-2xl font-bold text-[#102E4A]">
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
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <h3 className="font-['Fraunces',Georgia,serif] text-2xl font-bold text-[#102E4A]">
                      Envie sua mensagem
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#102E4A] mb-1.5 uppercase tracking-wider">
                          Seu Nome *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.nome}
                          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                          placeholder="Como prefere ser chamada?"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#E7DDC9] focus:outline-none focus:border-[#102E4A] text-xs transition"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#102E4A] mb-1.5 uppercase tracking-wider">
                          E-mail *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="seuemail@exemplo.com"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#E7DDC9] focus:outline-none focus:border-[#102E4A] text-xs transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#102E4A] mb-1.5 uppercase tracking-wider">
                        Instagram da Marca / Pessoal
                      </label>
                      <input
                        type="text"
                        value={formData.instagram}
                        onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                        placeholder="@seuusuario"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E7DDC9] focus:outline-none focus:border-[#102E4A] text-xs transition"
                      />
                    </div>

                    {/* Chips Serviço */}
                    <div>
                      <label className="block text-xs font-medium text-[#102E4A] mb-2 uppercase tracking-wider">
                        Serviço de Interesse
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {['Social Media', 'Identidade Visual', 'Consultoria', 'Ainda não sei'].map((svc) => (
                          <button
                            key={svc}
                            type="button"
                            onClick={() => setFormData({ ...formData, servico: svc })}
                            className={`px-4 py-2 rounded-full text-xs font-medium transition cursor-pointer ${
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
                      <label className="block text-xs font-medium text-[#102E4A] mb-1.5 uppercase tracking-wider">
                        Conte um pouco sobre seu projeto *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.mensagem}
                        onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                        placeholder="Quais seus objetivos, prazos ou expectativas?"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E7DDC9] focus:outline-none focus:border-[#102E4A] text-xs transition resize-none"
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
              <div className="lg:col-span-5 space-y-4">
                <h3 className="font-['Fraunces',Georgia,serif] text-xl font-bold text-[#102E4A]">
                  Outros canais de contato
                </h3>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/?text=Ol%C3%A1%2C%20%C3%89rika!%20Vim%20pelo%20seu%20site%20erikasantos.com.br"
                  target="_blank"
                  rel="noreferrer"
                  className="p-5 rounded-2xl bg-[#FFFCF5] hover:bg-white border border-[#E7DDC9] hover:border-[#6486AC] transition flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#E8EFF7] flex items-center justify-center text-[#102E4A]">
                      <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-[#102E4A]">WhatsApp Direto</h4>
                      <p className="text-xs text-[#4C6B8C]">Atendimento ágil para dúvidas</p>
                    </div>
                  </div>
                  <svg className="w-4 h-4 text-[#4C6B8C] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>

                {/* E-mail contato@erikasantos.com.br */}
                <a
                  href="mailto:contato@erikasantos.com.br"
                  className="p-5 rounded-2xl bg-[#FFFCF5] hover:bg-white border border-[#E7DDC9] hover:border-[#6486AC] transition flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#E8EFF7] flex items-center justify-center text-[#102E4A]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-[#102E4A]">E-mail Profissional</h4>
                      <p className="text-xs text-[#4C6B8C]">contato@erikasantos.com.br</p>
                    </div>
                  </div>
                  <svg className="w-4 h-4 text-[#4C6B8C] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>

                {/* Instagram Direct @erik4.designer */}
                <a
                  href="https://instagram.com/erik4.designer"
                  target="_blank"
                  rel="noreferrer"
                  className="p-5 rounded-2xl bg-[#FFFCF5] hover:bg-white border border-[#E7DDC9] hover:border-[#6486AC] transition flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#E8EFF7] flex items-center justify-center text-[#102E4A]">
                      <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-[#102E4A]">Instagram</h4>
                      <p className="text-xs text-[#4C6B8C]">@erik4.designer</p>
                    </div>
                  </div>
                  <svg className="w-4 h-4 text-[#4C6B8C] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>

                {/* Site Oficial erikasantos.com.br */}
                <a
                  href="https://erikasantos.com.br"
                  target="_blank"
                  rel="noreferrer"
                  className="p-5 rounded-2xl bg-[#FFFCF5] hover:bg-white border border-[#E7DDC9] hover:border-[#6486AC] transition flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#E8EFF7] flex items-center justify-center text-[#102E4A]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-[#102E4A]">Website Oficial</h4>
                      <p className="text-xs text-[#4C6B8C]">erikasantos.com.br</p>
                    </div>
                  </div>
                  <svg className="w-4 h-4 text-[#4C6B8C] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-[#E7DDC9] px-6 md:px-16 py-8 bg-[#F9F3E3]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#4C6B8C]">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#102E4A]">
              <path d="M12 0c1.1 7.4 4.6 10.9 12 12-7.4 1.1-10.9 4.6-12 12-1.1-7.4-4.6-10.9-12-12 7.4-1.1 10.9-4.6 12-12z" />
            </svg>
            <span className="font-['Fraunces',Georgia,serif] text-base font-bold text-[#102E4A]">
              érika designer
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-center md:text-right">
            <span>© 2026 Érika Santos · Design com estratégia</span>
            <span>•</span>
            <a href="https://erikasantos.com.br" className="hover:text-[#102E4A] underline decoration-[#6486AC]">erikasantos.com.br</a>
            <span>•</span>
            <a href="https://instagram.com/erik4.designer" target="_blank" rel="noreferrer" className="hover:text-[#102E4A]">@erik4.designer</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
