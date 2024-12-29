import MainPagina from "../Components/MainLanding";
import OtroMain from "../Components/otromain";
import Sobremi from "../Components/SobreMi";
import Sobremi2 from "../Components/Sobremi2";
import FooterContacto from "../Components/Footer";
import MisProjectos from "../Components/MisProjectos";

function LandingMain() {
  return (
    <>
      <MainPagina />
      <OtroMain titulo="Mis areas de desarrollo" />
      <Sobremi
        imagen1="./iconopython.png"
        imagen2="javascript.png"
        imagen3="lenguajeR.png"
        imagen4="react.png"
        imagen5="sql.png"
        imagen6="tail.png"
        imagen7="excel.png"
        imagen8= "powerbi.png"
        imagen9="node.png"
        imagen10="html.png"
        imagen11="sele.png"
        imagen12="flask2.png"
        imagen13="scikit-learn.svg"
        imagen15="git.png"
        imagen16="css.png"
      />

      <Sobremi2 />
      <MisProjectos titulo= "Mis Projectos"/>
      <FooterContacto />


    </>
  );
}

export default LandingMain;
