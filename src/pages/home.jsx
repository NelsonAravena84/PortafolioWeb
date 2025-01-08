import HeaderPortafolio from "../components/HeaderPortafolio";
import HeroPortafolio from "../components/HeroPortafolio";
import Habilidades from "../components/Habilidades";

function Home() {
  return (
    <>
      <main className="min-h-screen bg-[#000000] text-[#F0EDCF]">
        <HeaderPortafolio />
        <HeroPortafolio/>
        <Habilidades />
      </main>
    </>
  );
}

export default Home;
