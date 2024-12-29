function Tarjeta(props){
    return (
        <div className="p-6 rounded-lg bg-gradient-to-br from-[#e0d206]/20 to-transparent">
          <h3 className="text-xl font-semibold mb-6 text-[#e0d206]">{props.subtitulo}</h3>
          <img src={props.image} width="1020px"/>
          <p className="text-[#e0d206] text-sm">
          {props.descripción}
          </p>
        </div>
    )
}

export default Tarjeta;