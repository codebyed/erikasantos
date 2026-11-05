export function Footer() {
  return (
    <footer className="mt-16 sm:mt-20 border-t border-[#E7DDC9] px-4 sm:px-6 md:px-16 py-6 sm:py-8 bg-[#F9F3E3]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#4C6B8C]">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#102E4A] shrink-0">
            <path d="M12 0c1.1 7.4 4.6 10.9 12 12-7.4 1.1-10.9 4.6-12 12-1.1-7.4-4.6-10.9-12-12 7.4-1.1 10.9-4.6 12-12z" />
          </svg>
          <span className="font-['Fraunces',Georgia,serif] text-base font-bold text-[#102E4A]">
            érika designer
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 sm:gap-4 text-center">
          <span>© 2026 Érika Santos · Design com estratégia</span>
          <span className="hidden sm:inline">•</span>
          <a
            href="https://erikasantos.com.br"
            className="hover:text-[#102E4A] underline decoration-[#6486AC]"
          >
            erikasantos.com.br
          </a>
          <span className="hidden sm:inline">•</span>
          <a
            href="https://instagram.com/erik4.designer"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#102E4A]"
          >
            @erik4.designer
          </a>
          <span className="hidden sm:inline">•</span>
          <span>
            Desenvolvido por{" "}
            <a
              href="https://codebyed.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#102E4A] underline decoration-[#6486AC] font-semibold"
            >
              codebyed
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}