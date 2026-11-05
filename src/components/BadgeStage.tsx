
{/* Crachá suspenso */}
<div className="relative z-10 flex flex-col items-center -mt-4 sm:-mt-6 md:-mt-10 -translate-x-2 sm:-translate-x-3 md:-translate-x-4 hover-swing cursor-pointer group">

  {/* Fita superior de suspensão */}
  <div className="relative w-8 sm:w-10 md:w-12 h-14 sm:h-16 md:h-20 -translate-x-1 sm:-translate-x-1.5 bg-gradient-to-b from-[#102E4A] via-[#102E4A] to-[#6486AC] shadow-md rounded-b-sm flex justify-center">

    {/* Furo central para o prego */}
    <div className="absolute top-3 sm:top-4 w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full bg-[#F5EEE1] border border-[#6486AC]/50 shadow-inner"></div>

  </div>

  {/* Imagem original do crachá */}
  <div className="relative bg-transparent filter drop-shadow-[0_15px_20px_rgba(16,46,74,0.18)] -mt-3 sm:-mt-4 md:-mt-5">
    <img
      src="./erikasantos-assets/badge-erika-trim.png"
      alt="Crachá Érika Designer"
      className="w-[200px] sm:w-[245px] md:w-[285px] h-auto object-contain bg-transparent block"
    />
  </div>

</div>