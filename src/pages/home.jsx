import HeaderPortafolio from "../components/HeaderPortafolio";
import HeroPortafolio from "../components/HeroPortafolio";
import Habilidades from "../components/Habilidades";
import Projectos from "../components/Projectos";
import FooterPagina from "../components/Footer";

function Home() {
  return (
    <>
      <main className="min-h-screen bg-[#000000] text-[#F0EDCF]">
        <HeaderPortafolio />
        <HeroPortafolio/>
        <Habilidades />
        <Projectos/>
        <FooterPagina/>
      </main>
    </>
  );
}

export default Home;
