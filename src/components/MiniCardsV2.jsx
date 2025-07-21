import { Card, Box, Typography } from "@mui/material";
import React from "react";

export default function MiniCardV2({ Icon, nombreicono }) {
  return (
    <Card
     sx={{
    backgroundColor: 'black',
    border: '1px solid gray',
    boxShadow: 'none',
    borderRadius: 2, // opcional, puedes ajustar
    color: 'gray',  // para texto blanco
    padding: 0.5       // opcional, ajusta si quieres margen interno
  }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center", 
          justifyContent: "center",
          gap: 0.5,
          width: "100%",
        }}
      >
        <Icon size={16} />
        <Typography variant="body2" sx={{ lineHeight: 1 }}>
          {nombreicono}
        </Typography>
      </Box>
    </Card>
  );
}
