function HeroPortafolio() {
  return (
    <section className="py-20 px-6 bg-[#000000]">
      <div className="grid md:grid-cols-2 md:grid-flow-col grid-row-2 gap-4">
        <div className="max-w-6xl mx-auto ml-12 flex flex-col md:flex-row items-center justify-start">
          <div className="sm:w-1/2 xl:w-auto  mb-10 ">
            <h1 className="text-5xl font-bold mb-4 text-[#F0EDCF]">
              Nelson Aravena
            </h1>
            <h2 className="text-3xl mb-6 text-[#40A2D8]">
              Ingeniero en Informática
            </h2>
            <p className="mb-6 sm:text-sm xl:text-xl  text-[#F0EDCF]">
              Soy ingeniero en informática con experiencia en desarrollo web,
              gestión de bases de datos y análisis de datos. Tengo conocimientos
              en estadísticas y probabilidades, lo que me permite abordar
              problemas de forma analítica. Aunque estoy empezando en Machine
              Learning, sigo aprendiendo y expandiendo mis habilidades en esta
              área.
            </p>
            <a
              href="#contact"
              className="bg-[#0B60B0] text-[#F0EDCF] px-6 py-3 rounded-full font-semibold hover:bg-[#40A2D8] transition-colors duration-300"
            >
              Contactame
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex ml-0 sm:ml-96 justify-end">
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[#0B60B0]">
            <h1>Foto</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroPortafolio;
