function Projectos() {
  return (
    <section id="proyectos" className="py-20 px-6 bg-[#000000]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#F0EDCF]">
          Projectos realizados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectoCard
            imagen="projecto1.png"
            titulo="Dashboard Gasolina Precio"
            descripción="Este proyecto tiene como objetivo el desarrollo de un dashboard que muestre el precio de la gasolina en Chile en tiempo real. El enfoque principal está en abordar los desafíos técnicos del back-end, permitiéndome mejorar mis habilidades en la gestión de datos y en la creación de infraestructuras robustas para manejar información en tiempo real."
            link = "#"
          />

          <ProjectoCard 
          imagen="projectos2.png"
          titulo="Web e-commerce "
          descripción="El proyecto consiste en desarrollar una página web e-commerce para un cliente real, con el objetivo de agilizar y automatizar el proceso de ventas. La plataforma facilitará la compra de productos de manera rápida y sencilla, mientras que el cliente podrá gestionar inventarios, precios y envíos de forma eficiente."
          />
        </div>
      </div>
    </section>
  );
}

export default Projectos;

function ProjectoCard({ titulo, descripción, imagen, link }) {
  return (
    <div className="bg-[#0B60B0] rounded-lg overflow-hidden shadow-lg">
      <img
        src={imagen}
        alt={titulo}
        width={600}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-[#F0EDCF]">
          {" "}
          {titulo}
        </h3>
        <p className="text-[#F0EDCF] mb-4">{descripción}</p>
        <a
          href={link}
          className="inline-block bg-[#40A2D8] text-[#000000] px-4 py-2 rounded font-semibold hover:bg-[#F0EDCF] transition-colors duration-300"
        >
          {" "}
          ver mi projecto
        </a>
      </div>
    </div>
  );
}
