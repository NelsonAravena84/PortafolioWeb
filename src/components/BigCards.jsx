import { Avatar, Box, Card, Typography } from "@mui/material";
import { FaExternalLinkAlt } from "react-icons/fa";

import MiniCardV2 from "./MiniCardsV2";

export default function BigCard({ titulo, subtitulo, descripcion, iconos = [], image, enlace }) {
  return (
    <Card
      sx={{
        backgroundColor: 'rgba(10,10,10)',
        boxShadow: 'none',
        borderRadius: 2,
        color: 'gray',
        padding: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          width: "100%",
        }}
      >
        {/* Columna izquierda */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar
            alt="Remy Sharp"
            src={image}
            sx={{ width: 64, height: 64 }}
          />
          <Box>
            <Typography variant="h5" fontWeight={600}>
              {titulo}
            </Typography>
            <Typography color="text.secondary">{subtitulo}</Typography>
          </Box>
        </Box>

        {/* Ícono con enlace dinámico */}
        {enlace && (
          <a href={enlace} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt style={{ color: "gray", cursor: "pointer" }} />
          </a>
        )}
      </Box>

      <Typography sx={{ mt: 3, mb: 3, fontFamily: 'Roboto' }} color="text.primary">
        {descripcion}
      </Typography>

      {iconos.length > 0 && (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          {iconos.map((icono, i) => (
            <MiniCardV2 key={i} Icon={icono.icon} nombreicono={icono.nombre} />
          ))}
        </Box>
      )}
    </Card>
  );
}
