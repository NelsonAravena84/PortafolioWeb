import { Box, Typography } from "@mui/material";
import BigCard from "../components/BigCards";
import { SiJavascript,
  SiInfluxdb,
  SiNginx, 
  SiReact,
  SiNodedotjs,
  SiWebstorm,
  SiArduino,
  SiRailway,
  SiCloudflare, 
  SiGit, 
  SiPostgresql, 
  SiExpress, 
  SiPrisma, 
  SiMui, 
  SiRender,
  SiAstro ,
  SiDaisyui,
       } from 'react-icons/si';
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
    "JDCladding": [
      { icon: SiAstro, nombre: "Astro.js" },
      { icon: SiDaisyui , nombre: "Daisyui" },
      { icon: SiCloudflare, nombre: "Cloudflare" },
      { icon: SiPostgresql, nombre: "Postgre SQL" },
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
            image='/ja-logo.webp'
            titulo="JD Cladding Solutions SPA"
            subtitulo="Landing Page"
            descripcion="JD Cladding Solutions es una empresa chilena orientada a la instalación de techumbres, revestimientos, cielos modulares y celosías para proyectos residenciales y comerciales. Enfocada en clientes particulares y empresas a lo largo de todo Chile, ofreciendo materiales de primera calidad y cotización gratuita en menos de 48 horas."
            iconos={iconosPorProyecto["JDCladding"]}
            enlace='https://jainstalaciones-landing.jainstalacionesdev.workers.dev/'
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
