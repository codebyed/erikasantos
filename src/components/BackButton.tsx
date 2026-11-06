interface BackButtonProps {
  onClick: () => void
}

export function BackButton({ onClick }: BackButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Voltar para a página anterior"
      className="group inline-flex items-center gap-2 rounded-full border border-[#E7DDC9] bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[1.2px] text-[#4C6B8C] shadow-xs transition hover:border-[#102E4A] hover:bg-white hover:text-[#102E4A] cursor-pointer"
    >
      <svg
        className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      <span>Voltar</span>
    </button>
  )
}
