export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-beige shadow-sm z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <img src="/logo.svg" alt="Leone Ateliê" className="h-10" />
        <ul className="flex gap-6 text-sm font-medium">
          <li><a href="#about">Sobre</a></li>
          <li><a href="#catalog" >Catálogo</a></li>
          <li><a href="#testimonials">Depoimentos</a></li>
          <li><a href="#steps">Etapas</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
        <a
          href="#catalog"
          className="bg-olive text-beige px-4 py-2 rounded-md hover:bg-terracota transition"
        >
          Encomende
        </a>
      </nav>
    </header>
  );
}
