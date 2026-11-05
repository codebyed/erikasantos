export function BadgeStage() {
  return (
    <div className="relative flex justify-center items-start pt-1 sm:pt-0 min-h-[380px] sm:min-h-[460px] md:min-h-[560px] w-full max-w-[360px] sm:max-w-[420px] md:max-w-none mx-auto overflow-visible">

      {/* Glow Radial de fundo */}
      <div className="absolute top-8 sm:top-10 w-[280px] sm:w-[340px] md:w-[440px] h-[280px] sm:h-[340px] md:h-[440px] rounded-full [background-image:radial-gradient(ellipse_50%_50%_at_50%_50%,_#E8EFF7_0%,_#F5EEE1_72%,_#F9F3E3_100%)] -z-10 opacity-90 pointer-events-none"></div>

      {/* Arcos decorativos do design */}
      <svg
        viewBox="0 0 220 120"
        className="w-[160px] sm:w-[200px] md:w-[260px] h-[80px] sm:h-[100px] md:h-[130px] opacity-35 absolute -left-2 sm:-left-4 md:-left-8 top-44 sm:top-52 pointer-events-none -z-5"
      >
        <path
          d="M0 110c60-70 140-100 220-110"
          fill="none"
          stroke="#6486AC"
          strokeWidth="1"
        />
      </svg>

      <svg
        viewBox="0 0 150 100"
        className="w-[100px] sm:w-[130px] md:w-[170px] h-[65px] sm:h-[80px] md:h-[110px] opacity-30 absolute right-0 sm:right-2 md:-right-4 top-28 sm:top-36 pointer-events-none -z-5"
      >
        <path
          d="M0 0c40 40 90 70 150 100"
          fill="none"
          stroke="#6486AC"
          strokeWidth="1"
        />
      </svg>

      {/* Brilhos / Sparkles */}
      <svg
        viewBox="0 0 24 24"
        className="w-3.5 h-3.5 fill-[#102E4A] absolute top-8 sm:top-12 left-6 sm:left-10 opacity-80 animate-pulse pointer-events-none"
      >
        <path d="M12 0c1.1 7.4 4.6 10.9 12 12-7.4 1.1-10.9 4.6-12 12-1.1-7.4-4.6-10.9-12-12 7.4-1.1 10.9-4.6 12-12z" />
      </svg>

      <svg
        viewBox="0 0 24 24"
        className="w-4 h-4 fill-[#6486AC] absolute bottom-6 sm:bottom-8 right-8 sm:right-12 opacity-70 pointer-events-none"
      >
        <path d="M12 0c1.1 7.4 4.6 10.9 12 12-7.4 1.1-10.9 4.6-12 12-1.1-7.4-4.6-10.9-12-12 7.4-1.1 10.9-4.6 12-12z" />
      </svg>

      {/* Crachá Suspenso Transparente com Balanço no Hover */}
      <div className="relative z-10 flex flex-col items-center -mt-4 sm:-mt-6 md:-mt-10 hover-swing cursor-pointer group">

        {/* Fita azul do crachá */}
        <div className="relative -translate-x-1 w-3.5 sm:w-4 h-9 sm:h-10 bg-gradient-to-b from-[#102E4A] via-[#102E4A]/90 to-[#6486AC] rounded-t-sm shadow-sm mb-[-3px] sm:mb-[-4px] z-20 flex items-center justify-center">

          {/* Detalhe superior da fita */}
          <div className="absolute top-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-white to-[#AEB5BD] shadow-sm"></div>

        </div>

        {/* Encaixe prateado entre a fita e o crachá */}
        <div className="relative -translate-x-1 z-30 w-5 sm:w-6 h-6 sm:h-7 -mt-1 mb-[-9px] sm:mb-[-10px] rounded-sm border border-[#858C94] bg-gradient-to-r from-[#777F88] via-[#F5F6F7] to-[#858C94] shadow-[0_2px_5px_rgba(0,0,0,0.25)] flex items-center justify-center">

          {/* Reflexo metálico central */}
          <div className="w-1.5 sm:w-2 h-full rounded-sm bg-gradient-to-r from-[#A3AAB2] via-white to-[#A3AAB2] shadow-inner"></div>

        </div>

        {/* Imagem do Crachá com Fundo Transparente */}
        <div className="bg-transparent filter drop-shadow-[0_15px_20px_rgba(16,46,74,0.18)]">
          <img
            src="./erikasantos-assets/badge-erika-trim.png"
            alt="Crachá Érika Designer"
            className="w-[200px] sm:w-[245px] md:w-[285px] h-auto object-contain bg-transparent block"
          />
        </div>

      </div>

      {/* Selos flutuantes responsivos */}
      <img
        src="./erikasantos-assets/seal-blue-circular.png"
        alt="Selo circular"
        className="absolute -top-2 sm:top-2 md:top-4 right-0 sm:right-2 md:right-4 w-20 sm:w-28 md:w-34 h-20 sm:h-28 md:h-34 -rotate-[8deg] z-20 drop-shadow-md hover:scale-105 transition-transform pointer-events-none sm:pointer-events-auto"
      />

      <img
        src="./erikasantos-assets/marble-blue-1.png"
        alt="Esfera mármore"
        className="absolute top-44 sm:top-52 md:top-60 -right-1 sm:right-0 md:-right-2 w-14 sm:w-20 md:w-26 h-14 sm:h-20 md:h-26 rotate-[10deg] z-20 drop-shadow-md pointer-events-none"
      />

      <img
        src="./erikasantos-assets/seal-gray.png"
        alt="Selo érika designer"
        className="absolute bottom-2 sm:bottom-4 md:bottom-6 right-2 sm:right-6 md:right-8 w-18 sm:w-24 md:w-30 h-18 sm:h-24 md:h-30 -rotate-[6deg] z-20 drop-shadow-md pointer-events-none sm:pointer-events-auto"
      />

      <img
        src="./erikasantos-assets/seal-cream-star.png"
        alt="Selo estrela"
        className="absolute top-10 sm:top-14 md:top-18 left-0 sm:left-2 md:left-6 w-12 sm:w-16 md:w-18 h-12 sm:h-16 md:h-18 rotate-[8deg] z-20 drop-shadow-md pointer-events-none sm:pointer-events-auto"
      />

      <img
        src="./erikasantos-assets/seal-navy-e.png"
        alt="Selo É"
        className="absolute bottom-10 sm:bottom-16 md:bottom-20 left-1 sm:left-4 md:left-8 w-11 sm:w-14 md:w-16 h-11 sm:h-14 md:h-16 z-20 drop-shadow-md pointer-events-none sm:pointer-events-auto"
      />

    </div>
  );
}