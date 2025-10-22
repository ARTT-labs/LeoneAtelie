import logo from "../assets/logo.svg";

export default function Header() {
    return (
    <header className="w-full h-24 relative z-10 flex justify-center items-center">
      <div className="absolute inset-0"></div>
      
      <nav className="absolute left-0 top-1/2 -translate-y-1/2 transform pl-8">
        <ul className="flex items-center gap-4 bg-[#934D33] text-white px-6 py-2 rounded-full font-serif text-lg">
          <li>
            <a 
              href="#" 
              className="px-6 py-2"
              
            >
              Início
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="px-6 py-2"
         
            >
              Sobre
            </a>
          </li>
        </ul>
      </nav>

    
      <div className="flex-shrink-0 z-200">
        <img src={logo} alt="Leone Logo" className="h-40 w-40" />
      </div>

      <nav className="absolute right-0 top-1/2 -translate-y-1/2 transform pr-8">
        <ul className="flex items-center gap-4 bg-[#934D33] text-white px-6 py-2 rounded-full font-serif text-lg">
          <li>
            <a 
              href="#" 
              className="px-6 py-2"
         
            >
              Catálogo
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="px-6 py-2"
         
            >
              Encomende
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
