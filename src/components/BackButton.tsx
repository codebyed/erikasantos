// Eu declaro as props que o botão de voltar recebe.
interface BackButtonProps {
  // Eu recebo a função que será chamada quando a pessoa clicar.
  onClick: () => void
}

// Eu crio o componente reutilizável de voltar.
export function BackButton({ onClick }: BackButtonProps) {
  // Eu retorno o botão com o visual de pill do site.
  return (
    // Eu uso type button para ele não enviar formulário sem querer.
    <button
      type="button"
      onClick={onClick}
      aria-label="Voltar para a página anterior"
      className="group inline-flex items-center gap-2 rounded-full border border-[#E7DDC9] bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[1.2px] text-[#4C6B8C] shadow-xs transition hover:border-[#102E4A] hover:bg-white hover:text-[#102E4A] cursor-pointer"
    >
      {/* Eu desenho a seta para a esquerda. */}
      <svg
        className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        aria-hidden="true"
      >
        {/* Eu uso o caminho de um chevron apontando para a esquerda. */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      {/* Eu escrevo o rótulo do botão. */}
      <span>Voltar</span>
    </button>
  )
}
