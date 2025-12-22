import { Box, Button, Container, TextField, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'transparent', // fondo totalmente transparente
        color: "#fff",
        py: 6,
        mt: 6,
        borderTop: "1px solid rgba(255, 255, 255, 0.2)", // borde sutil blanco/transparente
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="caption"
          display="block"
          align="center"
          sx={{ mt: 6, color: "rgba(255,255,255,0.5)" }}
        >
          © {new Date().getFullYear()} Nelson Aravena. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
}
