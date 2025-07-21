import { Box, Typography } from "@mui/material";

export default function AboutMe() {
    return (
        <>
            <Box sx={{ mt: 5 }}>
                <Typography variant="h5" sx={{fontFamily: 'Roboto'}}>Sobre mi</Typography>
                <Typography variant="p" sx={{color: 'gray',fontFamily: 'Roboto'}}>Estudiante de Ingeniería en Informática en su ultimo año, con experiencia en desarrollo web Full Stack. He trabajado con tecnologías como React, JavaScript y Material UI para el Front-end, y manejo bases de datos como PostgreSQL y MySQL en el Back-end. He desarrollado proyectos académicos, un e-commerce personal y realicé mi práctica profesional orientada al desarrollo Front-end, creando aplicaciones funcionales, responsivas y con enfoque en la experiencia de usuario. </Typography>
            </Box>
        </>

    )
}