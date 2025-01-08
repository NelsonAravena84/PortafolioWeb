function Habilidades(){
    return(
        <section id= "habilidades" className="py-20 px-6 bg-[#0B60B0]">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center text-[#F0EDCF]">Areas de Desempeño</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <CardHabilidades icon='./code.svg' titulo="Front End" tecnologias="React.js" tecnologias2 ="Tailwind CSS"/>
                    <CardHabilidades icon='./server.svg'titulo ="Back End" tecnologias="Express" tecnologias2 = "Noodemon"/>
                    <CardHabilidades icon='./data.svg' titulo = "Analisis de datos" tecnologias="Pandas" tecnologias2 ="R Studio"/>
                </div>
            </div>
        </section>
    )
}

export default Habilidades;

function CardHabilidades(props){
    return(
        <div className="bg-[#000000] p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4 text-[#40A2D8]">
                <img src={props.icon} width={"150px"}/>
            </div>
            <h3 className="text-2xl font-semibold mb-6 text-center text-[#F0EDCF]">{props.titulo}</h3>
            <ul className="space-y-6 text-xl list-disc">
                <li>{props.tecnologias}</li>
                <li>{props.tecnologias2}</li>
            </ul>
        </div>
    )
}