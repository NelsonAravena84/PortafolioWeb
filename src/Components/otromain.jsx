import Tarjeta from "./Tarjeta";


function OtroMain(props){
    return (
    <main className="bg-[#fffcf2]">
        <section className=" px-8 py-16">
        <h2 className="text-2xl font-bold text-[#eb5e28] mb-10 text-center">{props.titulo}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mr-[20px]">
          <Tarjeta/>
          <Tarjeta/>
        </div>
      </section>
      </main>
    )
}

export default OtroMain;