import { Box, Typography } from "@mui/material";
import BigCard from "../components/BigCards";
import { SiJavascript,SiInfluxdb,SiNginx, SiReact,SiNodedotjs,SiWebstorm,SiArduino,SiRailway,SiCloudflare, SiGit, SiPostgresql, SiExpress, SiPrisma, SiMui, SiRender,SiWordpress,SiElementor,SiWoo    } from 'react-icons/si';
import {TbBrandThreejs} from "react-icons/tb";

export default function Projects() {

  const iconosPorProyecto = {
    "Simple Ideas": [
      { icon: SiReact, nombre: "React" },
      { icon: SiJavascript, nombre: "JavaScript" },
      { icon: SiCloudflare, nombre: "Cloudflare" },
      { icon: SiGit, nombre: "Git" },
      { icon: SiPostgresql, nombre: "Postgre SQL" },
      { icon: SiExpress, nombre: "Express" },
      { icon: SiPrisma, nombre: "Prisma" },
      { icon: SiMui, nombre: "Material MUI" },
      { icon: SiRailway, nombre: "Railway" }

    ],
    "Megatec": [
      { icon: SiWordpress, nombre: "WordPress" },
      { icon: SiElementor, nombre: "Elementor" },
      { icon: SiWoo, nombre: "WooCommerce" },
    ],
    "Tamaplant":[
      {icon: SiInfluxdb, nombre: "InfluxDB"},
      { icon: SiCloudflare, nombre: "Cloudflare" },
      { icon: SiNginx, nombre:"Nginx"},
      { icon: TbBrandThreejs, nombre:"Three.js"},
      { icon: SiNodedotjs, nombre:"Node.js"},
      { icon: SiArduino, nombre:"Arduino IDE"},
      { icon: SiWebstorm, nombre:"WebSocket"},

    ]
  }

  return (
    <>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" sx={{fontFamily: 'Roboto', color:'#e6e8ff'}}>Proyectos Web</Typography>
        <Box sx={{ display: "grid", gap: 2, mt: 2 }}>
          <BigCard
            image='/logo.ico'
            titulo="Simple Ideas"
            subtitulo="E-Commerce"
            descripcion="Simpleideas es un ecommerce chileno de amigurumis artesanales que busca expandir sus ventas a nivel nacional con productos hechos a mano y personalizados."
            iconos={iconosPorProyecto["Simple Ideas"]}
            enlace = 'https://simpleideas.cl/' />

          <BigCard
            image='/chipeLibrosLogo.png'
            titulo="Chipe/Libros"
            subtitulo="E-Commerce"
            descripcion="Chipe/Libros es un eccomerce chileno orientado a la venta de libros tanto nuevos como usados. Enfocado a estudiantes y lectores cotidianos. Ofreciendo precios accesibles y facilidad en la compra. Esto por un lado a través de la venta de libros nuevos y así mismo reciclados o de segunda mano."
            iconos={iconosPorProyecto["Simple Ideas"]}
            enlace='https://ecommercechipelibros.pages.dev/'
             />


          <Box sx={{mt:3}}>
          <Typography variant="h5" sx={{fontFamily: 'Roboto', mb:3, color:'#e6e8ff'}}>Proyectos IoT</Typography>
                <BigCard
            image='/tamaplant.png'
            titulo="TamaPlant"
            subtitulo="IoT Agricultura Inteligente"
            descripcion="TAMAPLANT es un sistema de monitoreo inteligente basado en internet de las cosas, diseñada para plantas en su fase de germinación y crecimiento inicial, está pensada para aficionados y pequeños productores que busquen optimizar el cuidado de sus plantas mediante tecnología accesible y de bajo costo."
            iconos={iconosPorProyecto["Tamaplant"]}
            enlace='https://tamaplant.pages.dev/about'
             />
          </Box>
        </Box>
      </Box>
    </>
  )
}
