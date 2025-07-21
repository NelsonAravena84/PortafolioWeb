import { Box, Container } from "@mui/material";
import Navbar from "../components/Navbar";
import AboutMe from "../sections/AboutMe";
import Projects from "../sections/Projects";
import Tecnologies from "../sections/Tecnologies";
import Footers from "../sections/Footers";

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 2,
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: 700, px: 4 }}>
        <Navbar />
        <AboutMe />
        <Projects />
        <Tecnologies />
        <Footers/>
      </Container>
    </Box>
  );
}
