import { Box, Typography } from "@mui/material";

export default function AboutMe() {
    return (
        <>
            <Box sx={{ mt: 3 }}>
                <Typography variant="h5" sx={{fontFamily: 'Roboto', color:'#aab0ff'}}>Sobre mi</Typography>
                
                <Typography variant="p" sx={{color: '#e6e8ff',fontFamily: 'Roboto'}}>
Ingeniero en Informática apasionado por crear soluciones tecnológicas que resuelven problemas reales. Tengo experiencia construyendo aplicaciones web completas desde frontend hasta backend, integrando sistemas IoT y procesando datos para generar valor práctico. Soy una persona curiosa y proactiva que disfruta aprendiendo nuevas tecnologías, optimizando la experiencia del usuario y entregando plataformas rápidas, escalables y mantenibles.                </Typography>
            
            </Box>
        </>

    )
}