import { useState } from 'react'
import { ProjectModal } from '../components/ProjectModal'
import { PROJECTS } from '../data/projects'
import type { Project } from '../types'

export function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = selectedCategory === 'Todos'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory)

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* Header da Galeria */}
      <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
        <div className="inline-flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-[#6486AC] shrink-0">
            <path d="M12 0c1.1 7.4 4.6 10.9 12 12-7.4 1.1-10.9 4.6-12 12-1.1-7.4-4.6-10.9-12-12 7.4-1.1 10.9-4.6 12-12z" />
          </svg>
          <span className="text-[10px] sm:text-[11px] font-semibold text-[#4C6B8C] tracking-[2px] uppercase">
            GALERIA & PORTFÓLIO
          </span>
        </div>
        <h1 className="font-['Fraunces',Georgia,serif] text-3xl sm:text-4xl md:text-5xl text-[#102E4A] font-bold leading-tight">
          Galeria de Arte & Trabalhos Selecionados
        </h1>
        <p className="text-sm sm:text-base text-[#4C6B8C] leading-relaxed">
          Uma curadoria visual de marcas, projetos gráficos e estratégias de conteúdo criadas por Érika Santos.
        </p>
      </div>

      {/* Filtros da Galeria */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-1 sm:pt-2">
        {['Todos', 'Social Media', 'Identidade Visual', 'Editorial', 'Direção de Arte'].map((cat) => (
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

      {/* Grid de Projetos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group bg-[#FFFCF5] hover:bg-white rounded-2xl sm:rounded-3xl border border-[#E7DDC9] hover:border-[#102E4A] overflow-hidden transition-all duration-300 shadow-xs hover:shadow-xl cursor-pointer flex flex-col justify-between"
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
            <div className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold text-[#6486AC] uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="font-['Fraunces',Georgia,serif] text-lg sm:text-xl font-bold text-[#102E4A] mt-1 group-hover:text-[#6486AC] transition">
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

      {/* Modal de Detalhe */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  )
}
