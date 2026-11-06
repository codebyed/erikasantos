// Eu importo useState para controlar a animação do crachá.
import { useState, useRef, useEffect } from 'react'

// Eu crio o componente que monta o crachá e os selos flutuantes.
export function BadgeStage() {
  // Eu guardo se o crachá está balançando agora.
  const [isSwinging, setIsSwinging] = useState(false)
  // Eu crio uma referência para o elemento do crachá.
  const badgeRef = useRef<HTMLDivElement>(null)

  // Eu trato o clique no crachá.
  const handleClick = () => {
    // Eu ligo a animação de balanço.
    setIsSwinging(true)
    // Eu desligo a animação depois de 2,2 segundos, que é a duração do keyframe.
    setTimeout(() => setIsSwinging(false), 2200)
  }

  // Eu ajusto o ponto de origem da rotação depois que o componente monta.
  useEffect(() => {
    // Eu garanto que a referência já existe antes de mexer no estilo.
    if (badgeRef.current) {
      // Eu faço o crachá girar a partir do topo, como se estivesse pendurado.
      badgeRef.current.style.transformOrigin = 'top center'
    }
  }, [])

  // Eu retorno o palco visual do crachá.
  return (
    // Eu crio o container relativo que segura o brilho, os arcos, o crachá e os selos.
    <div className="relative flex justify-center items-start pt-1 sm:pt-0 min-h-[380px] sm:min-h-[460px] md:min-h-[560px] w-full max-w-[360px] sm:max-w-[420px] md:max-w-none mx-auto overflow-visible">
      {/* Eu coloco um brilho radial suave atrás do crachá. */}
      <div className="absolute top-8 sm:top-10 w-[280px] sm:w-[340px] md:w-[440px] h-[280px] sm:h-[340px] md:h-[440px] rounded-full [background-image:radial-gradient(ellipse_50%_50%_at_50%_50%,_#E8EFF7_0%,_#F5EEE1_72%,_#F9F3E3_100%)] -z-10 opacity-90 pointer-events-none"></div>

      {/* Eu desenho o primeiro arco decorativo do lado esquerdo. */}
      <svg
        viewBox="0 0 220 120"
        className="w-[160px] sm:w-[200px] md:w-[260px] h-[80px] sm:h-[100px] md:h-[130px] opacity-35 absolute -left-2 sm:-left-4 md:-left-8 top-44 sm:top-52 pointer-events-none -z-5"
      >
        {/* Eu traço uma curva fina em azul. */}
        <path d="M0 110c60-70 140-100 220-110" fill="none" stroke="#6486AC" strokeWidth="1" />
      </svg>

      {/* Eu desenho o segundo arco decorativo do lado direito. */}
      <svg
        viewBox="0 0 150 100"
        className="w-[100px] sm:w-[130px] md:w-[170px] h-[65px] sm:h-[80px] md:h-[110px] opacity-30 absolute right-0 sm:right-2 md:-right-4 top-28 sm:top-36 pointer-events-none -z-5"
      >
        {/* Eu traço a curva do arco direito. */}
        <path d="M0 0c40 40 90 70 150 100" fill="none" stroke="#6486AC" strokeWidth="1" />
      </svg>

      {/* Eu coloco o primeiro brilho em forma de estrela no topo esquerdo. */}
      <svg
        viewBox="0 0 24 24"
        className="w-3.5 h-3.5 fill-[#102E4A] absolute top-8 sm:top-12 left-6 sm:left-10 opacity-80 animate-pulse pointer-events-none"
      >
        {/* Eu uso o caminho da estrela de quatro pontas. */}
        <path d="M12 0c1.1 7.4 4.6 10.9 12 12-7.4 1.1-10.9 4.6-12 12-1.1-7.4-4.6-10.9-12-12 7.4-1.1 10.9-4.6 12-12z" />
      </svg>

      {/* Eu coloco o segundo brilho no canto inferior direito. */}
      <svg
        viewBox="0 0 24 24"
        className="w-4 h-4 fill-[#6486AC] absolute bottom-6 sm:bottom-8 right-8 sm:right-12 opacity-70 animate-pulse pointer-events-none"
        style={{ animationDelay: '-1.6s' }}
      >
        {/* Eu reuso o caminho da estrela, agora em azul. */}
        <path d="M12 0c1.1 7.4 4.6 10.9 12 12-7.4 1.1-10.9 4.6-12 12-1.1-7.4-4.6-10.9-12-12 7.4-1.1 10.9-4.6 12-12z" />
      </svg>

      {/* Eu monto o crachá com o cordão integrado na imagem. */}
      <div
        ref={badgeRef}
        onClick={handleClick}
        className={`relative z-10 flex justify-center items-center -mt-4 sm:-mt-6 md:-mt-10 -translate-x-2 sm:-translate-x-3 md:-translate-x-4 cursor-pointer transition-transform duration-400 ease-out ${
          isSwinging ? 'animate-badge-swing' : ''
        }`}
      >
        {/* Eu aplico a sombra projetada no crachá. */}
        <div className="bg-transparent filter drop-shadow-[0_15px_20px_rgba(16,46,74,0.18)]">
          {/* Eu carrego a imagem recortada do crachá. */}
          <img
            src="./erikasantos-assets/badge-erika-trim.png"
            alt="Crachá Érika Designer"
            className="w-[200px] sm:w-[245px] md:w-[285px] h-auto object-contain bg-transparent block"
          />
        </div>
      </div>

      {/* Eu posiciono o selo circular azul no canto superior direito. */}
      <img
        src="./erikasantos-assets/seal-blue-circular.png"
        alt="Selo circular"
        className="animate-seal-float absolute -top-2 sm:top-2 md:top-4 right-0 sm:right-2 md:right-4 w-20 sm:w-28 md:w-34 h-20 sm:h-28 md:h-34 -rotate-[8deg] z-20 drop-shadow-md hover:scale-110 hover:z-30 hover:drop-shadow-xl transition-transform duration-300 pointer-events-none sm:pointer-events-auto"
        style={{ animationDuration: '6s', animationDelay: '-1.2s' }}
      />

      {/* Eu posiciono a esfera de mármore azul no meio do lado direito. */}
      <img
        src="./erikasantos-assets/marble-blue-1.png"
        alt="Esfera mármore"
        className="animate-seal-float absolute top-44 sm:top-52 md:top-60 -right-1 sm:right-0 md:-right-2 w-14 sm:w-20 md:w-26 h-14 sm:h-20 md:h-26 rotate-[10deg] z-20 drop-shadow-md hover:scale-110 hover:z-30 hover:drop-shadow-xl transition-transform duration-300 pointer-events-none sm:pointer-events-auto"
        style={{ animationDuration: '5.2s', animationDelay: '-2.4s' }}
      />

      {/* Eu posiciono o selo cinza no canto inferior direito. */}
      <img
        src="./erikasantos-assets/seal-gray.png"
        alt="Selo érika designer"
        className="animate-seal-float absolute bottom-2 sm:bottom-4 md:bottom-6 right-2 sm:right-6 md:right-8 w-18 sm:w-24 md:w-30 h-18 sm:h-24 md:h-30 -rotate-[6deg] z-20 drop-shadow-md hover:scale-110 hover:z-30 hover:drop-shadow-xl transition-transform duration-300 pointer-events-none sm:pointer-events-auto"
        style={{ animationDuration: '7s', animationDelay: '-0.8s' }}
      />

      {/* Eu posiciono o selo estrela creme no topo esquerdo. */}
      <img
        src="./erikasantos-assets/seal-cream-star.png"
        alt="Selo estrela"
        className="animate-seal-float absolute top-10 sm:top-14 md:top-18 left-0 sm:left-2 md:left-6 w-12 sm:w-16 md:w-18 h-12 sm:h-16 md:h-18 rotate-[8deg] z-20 drop-shadow-md hover:scale-110 hover:z-30 hover:drop-shadow-xl transition-transform duration-300 pointer-events-none sm:pointer-events-auto"
        style={{ animationDuration: '4.8s', animationDelay: '-3s' }}
      />

      {/* Eu posiciono o selo navy com o "É" no canto inferior esquerdo. */}
      <img
        src="./erikasantos-assets/seal-navy-e.png"
        alt="Selo É"
        className="animate-seal-float absolute bottom-10 sm:bottom-16 md:bottom-20 left-1 sm:left-4 md:left-8 w-11 sm:w-14 md:w-16 h-11 sm:h-14 md:h-16 z-20 drop-shadow-md hover:scale-110 hover:z-30 hover:drop-shadow-xl transition-transform duration-300 pointer-events-none sm:pointer-events-auto"
        style={{ animationDuration: '6.4s', animationDelay: '-1.8s' }}
      />
    </div>
  )
}
