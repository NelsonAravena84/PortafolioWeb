import { Avatar, Box, Typography } from "@mui/material";
import { Github, Linkedin, Mail} from "lucide-react";
import MiniCard from "./MiniCards";

export default function Navbar() {
  return (
    <>

    {/* NOMBRE, PROFESION, ICONO */}
      <Box sx={{ display: "flex", mt:5 }}>
        <Avatar alt="Remy Sharp" src="/profile.png" sx={{ width: 230, height: 230 }} />
        <Box sx={{ ml: 5, mt:6}}>
          <Typography variant="h5" sx={{fontFamily: 'Roboto', color:'#aab0ff'}}>Nelson Elías Aravena Sepúlveda</Typography>
          <Typography  variant="h6" sx={{fontFamily: 'Roboto', color:'#e6e8ff'}}>Ingeniero en Informática </Typography>
          <Typography variant="p" sx={{fontFamily: 'Roboto', color:"#e6e8ff"}}>[Desarrollo web Full Stack | Análisis de Datos | IoT | Sistemas Multiplataforma] </Typography>
        </Box>
      </Box>

      {/* LISTA DE ICONOS CONTACTO */}
      <Box sx={{ display: "flex", gap: 2, mt:4}}>
        <MiniCard Icon={Github} label="GitHub" size={15} enlace="https://github.com/NelsonAravena84" />
        <MiniCard Icon={Linkedin} label="Linkedin" size={15}
        enlace="https://www.linkedin.com/in/nelson-aravena-sepulveda-cl/"/>
      </Box>

    </>
  )
}