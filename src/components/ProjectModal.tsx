// Eu importo o tipo Project para tipar o projeto que o modal recebe.
import type { Project } from '../types'

// Eu declaro as props do modal de projeto.
interface ProjectModalProps {
  // Eu recebo o projeto selecionado ou null quando o modal está fechado.
  project: Project | null
  // Eu recebo a função que fecha o modal.
  onClose: () => void
}

// Eu crio o componente que mostra os detalhes de um projeto.
export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Eu não renderizo nada quando não existe projeto selecionado.
  if (!project) return null

  // Eu retorno o overlay do modal.
  return (
    // Eu cubro a tela inteira com fundo escuro translúcido e desfoque.
    <div
      className="fixed inset-0 z-50 bg-[#102E4A]/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      {/* Eu crio o cartão branco do modal e paro a propagação do clique. */}
      <div
        className="bg-[#FFFCF5] max-w-xl w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E7DDC9] shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Eu coloco o botão de fechar no canto superior direito. */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-white/90 hover:bg-white text-[#102E4A] flex items-center justify-center shadow-md cursor-pointer text-sm font-bold"
          aria-label="Fechar"
        >
          ✕
        </button>

        {/* Eu permito rolar o conteúdo quando ele passa da altura da tela. */}
        <div className="max-h-[85vh] overflow-y-auto">
          {/* Eu mostro a imagem principal do projeto. */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full max-h-[260px] sm:max-h-[340px] object-cover"
          />
          {/* Eu organizo as informações do projeto com espaçamento vertical. */}
          <div className="p-5 sm:p-8 space-y-4">
            {/* Eu alinho a categoria e as tags na mesma linha. */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              {/* Eu mostro a categoria e o ano do projeto. */}
              <span className="text-xs font-semibold text-[#6486AC] uppercase tracking-wider">
                {project.category} · {project.year}
              </span>
              {/* Eu listo todas as tags do projeto. */}
              <div className="flex flex-wrap gap-1.5">
                {/* Eu percorro as tags e crio uma pill para cada uma. */}
                {project.tags.map((tag) => (
                  // Eu uso a própria tag como key, porque ela é única no projeto.
                  <span
                    key={tag}
                    className="text-[10px] sm:text-[11px] px-2.5 py-0.5 rounded-full bg-[#E8EFF7] text-[#102E4A] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Eu mostro o título do projeto em destaque. */}
            <h2 className="font-['Fraunces',Georgia,serif] text-2xl sm:text-3xl font-bold text-[#102E4A]">
              {project.title}
            </h2>

            {/* Eu mostro a descrição completa do projeto. */}
            <p className="text-xs sm:text-sm text-[#4C6B8C] leading-relaxed">
              {project.description}
            </p>

            {/* Eu separo as ações do modal com uma borda superior. */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3 border-t border-[#E7DDC9]">
              {/* Eu levo a pessoa para o WhatsApp com uma mensagem pronta sobre o projeto. */}
              <a
                href="https://wa.me/?text=Ol%C3%A1%2C%20%C3%89rika!%20Adorei%20o%20projeto%20no%20seu%20portfolio"
                target="_blank"
                rel="noreferrer"
                className="bg-[#102E4A] text-[#F9F3E3] hover:bg-[#102E4A]/90 px-6 py-3 rounded-full text-xs font-semibold text-center transition"
              >
                Quero um projeto parecido
              </a>
              {/* Eu abro o Instagram da Érika em uma nova aba. */}
              <a
                href="https://instagram.com/erik4.designer"
                target="_blank"
                rel="noreferrer"
                className="border border-[#102E4A] text-[#102E4A] hover:bg-white px-6 py-3 rounded-full text-xs font-semibold text-center transition"
              >
                Ver no Instagram @erik4.designer ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
