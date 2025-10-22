import aboutImage from "../assets/aboutImage.svg";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-stone-100 text-stone-800 py-16 md:py-20 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        {/* Texto à esquerda */}
        <div>
          <header className="mb-6">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
              <span className="block uppercase">Prazer,</span>
              <span className="block">Leone Ateliê</span>
            </h2>
          </header>

          <div className="space-y-4 text-base leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              <strong>Quisque eu velit turpis</strong>. Nunc imperdiet, nunc sed
              ullamcorper interdum, odio nunc mollis ligula, a posuere massa
              tellus in nulla.
            </p>
            <p>
              Duis orci quam, tempus quis nibh a, sodales mollis purus.{" "}
              <strong>
                Maecenas sit amet eleifend ante, eget tincidunt sapien
              </strong>
              . Sed posuere consequat elit ac suscipit.
            </p>
            <p>
              Sed varius aliquet rhoncus. Suspendisse et mauris volutpat sem
              accumsan dapibus nec at magna.{" "}
              <strong>Curabitur euismod est ut tempus lobortis</strong>.
            </p>
          </div>

          <div className="mt-8">
            <p className="text-sm text-stone-600">Com amor,</p>
            <p className="-mt-1 text-xl italic font-medium">Aninha</p>
          </div>
        </div>

        {/* Imagem à direita */}
        <div className="flex justify-center md:justify-end">
          <img
            src={aboutImage}
            alt="Peças artesanais do Leone Ateliê"
            className="w-full max-w-md rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
