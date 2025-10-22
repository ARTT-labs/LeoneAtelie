import heroImage from "../assets/heroImage.svg";
import stamp from "../assets/carimboAfeto.svg";

export default function Hero() {
  return (
    <section className="bg-[#bc865ab6] min-h-screen grid grid-cols-2">
      <div className="relative flex justify-center items-center py-16 px-8">
        <div>
          <img src={heroImage} alt="Transformo memórias em arte" className="w-full h-auto object-cover" />
        </div>
      </div>
      
      <div className="relative flex flex-col justify-center items-start px-16 text-left">
        <h1 className="text-7xl font-bold text-[#495234] leading-tight font-serif mb-4">
          TRANSFORMO <br/> MEMÓRIAS EM <br/> ARTE.
        </h1>
        <p className="text-2xl text-[#495234] font-serif mb-8">
          Peças únicas feitas à mão.
        </p>
        <a 
          href="#" 
          className=" text-white px-10 py-4 rounded-full font-serif text-xl"
        >
          Ver catálogo completo
        </a>

        <div className="absolute bottom-10 right-10">
          <img src={stamp} alt="Feito com Afeto" className="h-32 w-32" />
        </div>
      </div>
    </section>
  );
}
