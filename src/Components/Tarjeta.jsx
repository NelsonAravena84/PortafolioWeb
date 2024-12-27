function Tarjeta(props){
    return (
        <div className="p-6 rounded-lg bg-[#ccc5b9]">
          <h3 className="text-xl font-semibold mb-6 text-[#252422]">{props.subtitulo}</h3>
          <p className="text-[#403d39] text-sm">
            Proficient in both front-end and back-end technologies, I deliver comprehensive solutions 
            that seamlessly integrate all aspects of web development.
          </p>
        </div>
    )
}

export default Tarjeta;