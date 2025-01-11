function FooterPagina() {
  return (
    <footer id="contacto" className="py-8 px-6 bg-[#40A2D8]">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <p className="text-lg font-semibold text-[#000000]">hecho por: Nelson Aravena</p>
        <p className="text-sm text-[#000000]">
          &copy; {new Date().getFullYear()} Todos los derechos reservados.
        </p>
        <a
          href="www.linkedin.com/in/nelson-aravena-sepulveda-cl"
          className="text-[#000000] hover:text-[#0B60B0] transition-colors duration-300"
        >
        <img src="linkedin.png" width={30}/>
        </a>
      </div>
    </footer>
  );
}

export default FooterPagina;