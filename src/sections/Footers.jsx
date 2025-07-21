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
        <Typography variant="h4" align="center" gutterBottom sx={{ fontFamily: 'Roboto' }}>
          ¿Quieres contactarme?
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4, fontFamily: 'Roboto' }}>
          Completa el siguiente formulario y te responderé lo antes posible.
        </Typography>

        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("¡Gracias por tu mensaje! 📩");
          }}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField
            label="Nombre"
            variant="outlined"
            required
            fullWidth
            InputProps={{ sx: { backgroundColor: "rgba(26,26,26,0.7)", color: "#fff" } }}
            InputLabelProps={{ sx: { color: "#bbb" } }}
          />
          <TextField
            label="Correo electrónico"
            type="email"
            variant="outlined"
            required
            fullWidth
            InputProps={{ sx: { backgroundColor: "rgba(26,26,26,0.7)", color: "#fff" } }}
            InputLabelProps={{ sx: { color: "#bbb" } }}
          />
          <TextField
            label="Mensaje"
            multiline
            rows={4}
            variant="outlined"
            required
            fullWidth
            InputProps={{ sx: { backgroundColor: "rgba(26,26,26,0.7)", color: "#fff" } }}
            InputLabelProps={{ sx: { color: "#bbb" } }}
          />
          <Button
            type="submit"
            variant="outlined"
            fullWidth
            sx={{
              mt: 1,
              borderColor: "#fff",
              color: "#fff",
              "&:hover": {
                borderColor: "#fff",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            Enviar
          </Button>
        </Box>

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
