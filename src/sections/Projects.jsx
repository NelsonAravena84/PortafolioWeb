import { Box, Typography } from "@mui/material";
import BigCard from "../components/BigCards";
import { SiJavascript, SiReact, SiCloudflare, SiGit, SiPostgresql, SiExpress, SiPrisma, SiMui, SiRender,SiWordpress,SiElementor,SiWoo    } from 'react-icons/si';


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
      { icon: SiRender, nombre: "Render" }

    ],
    "Megatec": [
      { icon: SiWordpress, nombre: "WordPress" },
      { icon: SiElementor, nombre: "Elementor" },
      { icon: SiWoo, nombre: "WooCommerce" },
    ],
  }

  return (
    <>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" sx={{fontFamily: 'Roboto'}}>Proyectos Web</Typography>
        <Box sx={{ display: "grid", gap: 2, mt: 2 }}>
          <BigCard
            image='/logo.ico'
            titulo="Simple Ideas"
            subtitulo="E-Commerce"
            descripcion="Simpleideas es un ecommerce chileno de amigurumis artesanales que busca expandir sus ventas a nivel nacional con productos hechos a mano y personalizados."
            iconos={iconosPorProyecto["Simple Ideas"]}
            enlace = 'https://simpleideas.cl/' />

          <BigCard
            image='/mega.jpeg'
            titulo="MegaTec"
            subtitulo="E-Commerce"
            descripcion=" MegaTec tienda especializada en la venta de tecnología, ofreciendo productos modernos y accesibles para todo tipo de usuarios."
            iconos={iconosPorProyecto["Megatec"]}
            enlace='https://megatec.pe/'
             />

        </Box>
      </Box>
    </>
  )
}
