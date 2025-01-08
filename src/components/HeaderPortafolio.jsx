function HeaderPortafolio() {
  return (
    <header className="bg-[#000000] text-[#F0EDCF] py-12 px-6 sticky top-0 z-10 shadow-md">
      <div className="w-[700px] h-[50px] ml-[490px] rounded-xl border-4 border-[#0B60B0]">
        <nav className="flex mt-2 justify-center items-center max-w-6xl mx-auto">
          <ul className="flex space-x-6 ">
            <li
              href="#skills"
              className="hover:text-[#40A2D8] transition-colors"
            >
              Habilidades
            </li>
            <li
              href="#Projects"
              className="hover:text-[#40A2D8] transition-colors"
            >
              Proyectos
            </li>
            <li
              href="#contact"
              className="hover:text-[#40A2D8] transition-colors"
            >
              Contactos
            </li>
            <li
              href="#contact"
              className="hover:text-[#40A2D8] transition-colors"
            >
              Contactos
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default HeaderPortafolio;
