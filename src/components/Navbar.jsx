import { Avatar, Box, Typography } from "@mui/material";
import { Github, Linkedin, Mail} from "lucide-react";
import MiniCard from "./MiniCards";

export default function Navbar() {
  return (
    <>

    {/* NOMBRE, PROFESION, ICONO */}
      <Box sx={{ display: "flex", mt:5 }}>
        <Avatar alt="Remy Sharp" src="/selfie.webp" sx={{ width: 86, height: 86 }} />
        <Box sx={{ ml: 2, mt:0}}>
          <Typography variant="h5" sx={{fontFamily: 'Roboto'}}>Nelson Aravena</Typography>
          <Typography  variant="h6" sx={{fontFamily: 'Roboto'}}>Ingeniero en Informática </Typography>
          <Typography variant="p" sx={{fontFamily: 'Roboto'}}>[Desarrollador Full-Stack] </Typography>
        </Box>
      </Box>

      {/* LISTA DE ICONOS CONTACTO */}
      <Box sx={{ display: "flex", gap: 2, mt:2}}>
        <MiniCard Icon={Github} label="GitHub" size={15} enlace="https://github.com/NelsonAravena84" />
        <MiniCard Icon={Linkedin} label="Linkedin" size={15}
        enlace="https://www.linkedin.com/in/nelson-aravena-sepulveda-cl/"/>
      </Box>

    </>
  )
}