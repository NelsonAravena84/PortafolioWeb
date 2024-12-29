function FooterContacto() {
  return (
    <footer className="bg-[#3d423c] text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Sección de Texto Principal */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
          <p className=" text-[#e0d206] text-sm font-semibold">Hecho con 💻 por [Nelson Aravena] © 2024. Todos los derechos reservados.</p>

          </div>

          {/* Texto y grid de Contacto */}
          <div className="mt-6 text-center">
            <div className="grid grid-cols-2 gap-4 justify-items-center">           
              {/* Icono de LinkedIn (Imagen personalizada) */}
              <a
                href="https://www.linkedin.com/in/tu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <img
                  src="lnked.png"
                  alt="LinkedIn"
                  width="60px"
                />{" "}
                {/* Reemplaza con tu imagen */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterContacto;
