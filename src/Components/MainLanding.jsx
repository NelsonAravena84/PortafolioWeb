function MainPagina() {
  return (
    <main className="pl-4 sm:w-full sm:h-full bg-[#fffcf2]">
      <section className="px-6 py-16 sm:py-24 lg:py-6 bg-[#fffcf2]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#eb5e28]">
              NELSON ELIAS ARAVENA SEPULVEDA
            </h1>
            <p className="text-[#403d39] max-w-xl text-base sm:text-lg">
            Soy ingeniero en informática con experiencia en desarrollo web, 
            gestión de bases de datos y análisis de datos. Tengo conocimientos en estadísticas 
            y probabilidades, lo que me permite abordar problemas de forma analítica. 
            Aunque estoy empezando en Machine Learning, sigo aprendiendo y expandiendo 
            mis habilidades en esta área.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#eb5e28] text-[#fffcf2] rounded hover:bg-[#403d39] transition-colors font-medium"
            >
              VER MIS PROJECTOS →
            </a>
          </div>

          {/* Imagen */}
          <div className="relative aspect-square w-[350px] sm:w-[400px] md:w-[500px] mx-auto rounded-full overflow-hidden bg-gradient-to-br from-[#eb5e28]/20 to-transparent">
            <img
              src="/placeholder.svg?height=500&width=500"
              width={500}
              height={500}
              className="object-cover rounded-full"
              alt="John Doe"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default MainPagina;
