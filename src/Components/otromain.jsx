import Tarjeta from "./Tarjeta";

function OtroMain(props) {
  return (
    <main className="bg-[#3d423c] min-h-screen flex items-center justify-center">
      <section className="px-8 py-16">
        <h2 className="text-2xl font-bold text-[#e0d206] mb-10 text-center">
          {props.titulo}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
          <Tarjeta
            subtitulo="Análisis de datos"
            descripción="Experiencia en análisis de datos y me especializo en áreas clave como el análisis exploratorio, modelado predictivo, análisis de series temporales, segmentación de clientes, optimización de procesos y visualización de datos. Mi objetivo es ayudar a las empresas a tomar decisiones informadas basadas en datos, mejorar la eficiencia operativa y obtener una ventaja competitiva."
          />
          <Tarjeta
            subtitulo="Desarrollo Web"
            descripción="Experiencia en desarrollo web Full Stack con el stack MERN (MongoDB, Express.js, React y Node.js). Me especializo en crear aplicaciones web completas, desde backend hasta frontend, incluyendo bases de datos, APIs y interfaces interactivas. Mi objetivo es desarrollar soluciones web escalables y robustas que satisfagan las necesidades de cada proyecto."
          />
          <Tarjeta
            subtitulo="Machine Learning"
            descripción="Experiencia en machine learning con Scikit-learn, especializado en la construcción de modelos predictivos y análisis exploratorios de datos. Implemento algoritmos supervisados y no supervisados, como regresión, clasificación y clustering, con el objetivo de resolver problemas complejos mediante aprendizaje automático."
          />
        </div>
      </section>
    </main>
  );
}

export default OtroMain;
