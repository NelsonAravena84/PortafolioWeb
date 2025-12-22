import { Avatar, Box, Typography } from "@mui/material";
import { Github, Linkedin } from "lucide-react";
import MiniCard from "./MiniCards";

export default function Navbar() {
  return (
    <>
      {/* AVATAR + TEXTO */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          mt: 5,
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src="/profile.png"
          sx={{
            width: { xs: 160, md: 230 },
            height: { xs: 160, md: 230 },
          }}
        />

        <Box
          sx={{
            ml: { xs: 0, md: 5 },
            mt: { xs: 3, md: 6 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontFamily: "Roboto", color: "#aab0ff" }}
          >
            Nelson Elías Aravena Sepúlveda
          </Typography>

          <Typography
            variant="h6"
            sx={{ fontFamily: "Roboto", color: "#e6e8ff" }}
          >
            Ingeniero en Informática
          </Typography>

          <Typography
            sx={{ fontFamily: "Roboto", color: "#e6e8ff" }}
          >
            [Desarrollo web Full Stack | Análisis de Datos | IoT | Sistemas
            Multiplataforma]
          </Typography>
        </Box>
      </Box>

      {/* ICONOS DE CONTACTO */}
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "flex-start" },
          gap: 2,
          mt: 4,
        }}
      >
        <MiniCard
          Icon={Github}
          label="GitHub"
          size={15}
          enlace="https://github.com/NelsonAravena84"
        />
        <MiniCard
          Icon={Linkedin}
          label="Linkedin"
          size={15}
          enlace="https://www.linkedin.com/in/nelson-aravena-sepulveda-cl/"
        />
      </Box>
    </>
  );
}
