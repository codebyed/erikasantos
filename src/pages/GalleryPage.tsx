// Eu importo useState para guardar o filtro e o projeto aberto no modal.
import { useState } from 'react'
// Eu importo o modal que mostra os detalhes de cada projeto.
import { ProjectModal } from '../components/ProjectModal'
// Eu importo a lista de projetos que alimenta a galeria.
import { PROJECTS } from '../data/projects'
// Eu importo o tipo Project para tipar o projeto selecionado.
import type { Project } from '../types'

// Eu crio a página que mostra a galeria de trabalhos.
export function GalleryPage() {
  // Eu começo o filtro na categoria "Todos".
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos')
  // Eu guardo qual projeto está aberto no modal, começando sem nenhum.
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Eu calculo a lista filtrada a cada renderização.
  const filteredProjects = selectedCategory === 'Todos'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory)

  // Eu retorno a estrutura da galeria.
  return (
    // Eu separo os blocos com espaçamento vertical.
    <div className="space-y-10 sm:space-y-12">
      {/* Eu monto o cabeçalho centralizado da galeria. */}
      <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
        {/* Eu alinho a estrela com o texto de apoio. */}
        <div className="inline-flex items-center gap-2">
          {/* Eu desenho a estrela em azul. */}
          <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-[#6486AC] shrink-0">
            {/* Eu uso o caminho da estrela da marca. */}
            <path d="M12 0c1.1 7.4 4.6 10.9 12 12-7.4 1.1-10.9 4.6-12 12-1.1-7.4-4.6-10.9-12-12 7.4-1.1 10.9-4.6 12-12z" />
          </svg>
          {/* Eu escrevo o rótulo da seção. */}
          <span className="text-[10px] sm:text-[11px] font-semibold text-[#4C6B8C] tracking-[2px] uppercase">
            GALERIA & PORTFÓLIO
          </span>
        </div>
        {/* Eu escrevo o título principal da galeria. */}
        <h1 className="font-['Fraunces',Georgia,serif] text-3xl sm:text-4xl md:text-5xl text-[#102E4A] font-bold leading-tight">
          Galeria de Arte & Trabalhos Selecionados
        </h1>
        {/* Eu explico o que a galeria reúne. */}
        <p className="text-sm sm:text-base text-[#4C6B8C] leading-relaxed">
          Uma curadoria visual de marcas, projetos gráficos e estratégias de conteúdo criadas por Érika Santos.
        </p>
      </div>

      {/* Eu monto a barra de filtros por categoria. */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-1 sm:pt-2">
        {/* Eu percorro as categorias disponíveis. */}
        {['Todos', 'Social Media', 'Identidade Visual', 'Editorial', 'Direção de Arte'].map((cat) => (
          // Eu crio um botão para cada categoria.
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-medium transition cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[#102E4A] text-[#F9F3E3] shadow-xs'
                : 'bg-white border border-[#E7DDC9] text-[#4C6B8C] hover:border-[#102E4A]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Eu monto o grid responsivo de projetos. */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Eu percorro os projetos já filtrados. */}
        {filteredProjects.map((project) => (
          // Eu crio o card clicável de cada projeto.
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group bg-[#FFFCF5] hover:bg-white rounded-2xl sm:rounded-3xl border border-[#E7DDC9] hover:border-[#102E4A] overflow-hidden transition-all duration-300 shadow-xs hover:shadow-xl cursor-pointer flex flex-col justify-between"
          >
            {/* Eu preparo a área da imagem com proporção fixa. */}
            <div className="relative aspect-[4/3] overflow-hidden bg-[#E8EFF7]">
              {/* Eu carrego a imagem do projeto. */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Eu mostro o ano no canto superior direito. */}
              <div className="absolute top-3 right-3 bg-[#102E4A]/80 backdrop-blur-xs text-[#F9F3E3] text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
                {project.year}
              </div>
            </div>

            {/* Eu organizo as informações do projeto abaixo da imagem. */}
            <div className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
              {/* Eu agrupo categoria, título e descrição. */}
              <div>
                {/* Eu mostro a categoria do projeto. */}
                <span className="text-[10px] font-semibold text-[#6486AC] uppercase tracking-wider">
                  {project.category}
                </span>
                {/* Eu mostro o título do projeto. */}
                <h3 className="font-['Fraunces',Georgia,serif] text-lg sm:text-xl font-bold text-[#102E4A] mt-1 group-hover:text-[#6486AC] transition">
                  {project.title}
                </h3>
                {/* Eu mostro a descrição curta com no máximo duas linhas. */}
                <p className="text-xs text-[#4C6B8C] mt-2 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Eu separo as tags e o link de ver projeto. */}
              <div className="pt-3 border-t border-[#E7DDC9]/70 flex items-center justify-between">
                {/* Eu listo todas as tags do projeto. */}
                <div className="flex flex-wrap gap-1.5">
                  {/* Eu crio uma pill para cada tag. */}
                  {project.tags.map((tag) => (
                    // Eu uso a tag como key porque ela é única no projeto.
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-[#E8EFF7] text-[#102E4A]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Eu escrevo o convite para abrir o projeto. */}
                <span className="text-xs font-semibold text-[#102E4A] group-hover:translate-x-1 transition-transform">
                  Ver ↗
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Eu renderizo o modal de detalhes do projeto selecionado. */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  )
}
