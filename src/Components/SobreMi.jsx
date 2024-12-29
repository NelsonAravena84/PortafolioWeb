function Sobremi(props) {
  return (
    <section className="px-6 py-10 sm:py-24 lg:py-6 bg-[#3d423c]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
        {/* Imagen */}
        <div className="grid grid-cols-5 gap-6">
            {/* Desarrollo Web */}
            <img src={props.imagen2} width="60px" alt="Ícono" /> {/* Javascript Icon */}
            <img src={props.imagen4} width="60px" alt="Ícono" /> {/* React Icon */}
            <img src={props.imagen10} width="60px" alt="Ícono"/> {/* Html Icon */}
            <img src={props.imagen16} width="60px" alt="Ícono"/> {/* CSS Icon */}
            <img src={props.imagen9} width="60px" alt="Ícono" /> {/* NODE Icon */}

            {/* Python Skills */}
            <img src={props.imagen1} width="60px" alt="Ícono" />
            <img src={props.imagen3} width="60px" alt="Ícono" />
            <img src={props.imagen5} width="60px" alt="Ícono" />
            <img src={props.imagen6} width="60px" alt="Ícono" />
            <img src={props.imagen7} width="60px" alt="Ícono" />
            <img src={props.imagen8} width="60px" alt="Ícono" />
            <img src={props.imagen11} width="60px" alt="Ícono" />
            <img src={props.imagen12} width="60px" alt="Ícono" />
            <img src={props.imagen13} width="60px" alt="Ícono" />
            <img src={props.imagen15} width="60px" alt="Ícono" />
        </div>

        {/* Texto */}
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#e0d206]">
            MIS HABILIDADES{" "}
          </h1>
          <p className="text-[#e0d206] max-w-xl text-base sm:text-lg">
            Soy ingeniero en informática con experiencia en desarrollo web,
            gestión de bases de datos y análisis de datos. Tengo conocimientos
            en estadísticas y probabilidades, lo que me permite abordar
            problemas de forma analítica. Aunque estoy empezando en Machine
            Learning, sigo aprendiendo y expandiendo mis habilidades en esta
            área.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Sobremi;
