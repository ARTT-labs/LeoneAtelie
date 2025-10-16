export default function Hero() {
  return (
    <section id="hero" className="pt-28 pb-20 flex flex-col items-center text-center">
      <img
        src="/hero-img.png"
        alt="Leone Ateliê"
        className="w-64 h-64 object-cover rounded-full mb-6"
      />
      <h1 className="text-5xl font-serif mb-3">
        TRANSFORMO MEMÓRIAS EM ARTE.
      </h1>
      <p className="text-lg mb-6">
        Peças únicas feitas à mão.
      </p>
      <a
        href="#catalog"
        className="bg-oliva text-beige px-6 py-3 rounded-md"
      >
        Ver catálogo completo
      </a>
    </section>
  );
}
