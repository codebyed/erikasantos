// Eu crio o componente de rodapé que aparece em todas as páginas.
export function Footer() {
  // Eu retorno a estrutura do rodapé.
  return (
    // Eu aplico borda superior, espaçamento e o fundo creme da marca.
    <footer className="mt-16 sm:mt-20 border-t border-[#E7DDC9] px-4 sm:px-6 md:px-16 py-6 sm:py-8 bg-[#F9F3E3]">
      {/* Eu organizo o conteúdo em coluna no mobile e em linha no desktop. */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#4C6B8C]">
        {/* Eu agrupo o símbolo e o nome da marca. */}
        <div className="flex items-center gap-2">
          {/* Eu desenho a estrela de quatro pontas da identidade. */}
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#102E4A] shrink-0">
            {/* Eu uso o mesmo caminho de estrela das outras seções. */}
            <path d="M12 0c1.1 7.4 4.6 10.9 12 12-7.4 1.1-10.9 4.6-12 12-1.1-7.4-4.6-10.9-12-12 7.4-1.1 10.9-4.6 12-12z" />
          </svg>
          {/* Eu escrevo o wordmark da Érika. */}
          <span className="font-['Fraunces',Georgia,serif] text-base font-bold text-[#102E4A]">
            érika designer
          </span>
        </div>

        {/* Eu agrupo o copyright e o crédito do desenvolvedor. */}
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-1 sm:gap-4 text-center">
          {/* Eu mostro o ano e os direitos reservados. */}
          <span>© 2026 Érika Santos · Todos os direitos reservados.</span>
          {/* Eu crio o link para o site do desenvolvedor. */}
          <a
            href="https://codebyed.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#102E4A] underline decoration-[#6486AC] font-semibold"
          >
            codebyed
          </a>
        </div>
      </div>
    </footer>
  )
}
