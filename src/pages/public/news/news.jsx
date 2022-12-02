import NavMenu from "../../../components/public/others/Navbar";
import SearchHome from "../../../components/public/others/SearchHome";
import Buttons from "../../../components/public/buttons/ButtonHome"
import NewsAll from "../../../components/public/news/NewsAll";
import Footer from "../../../components/public/others/Footer";

import buttonsNavbar from "../../../components/jsons/jsonButtons"

export default function NewsPage() {

  return (

    <div>
      <NavMenu/>
      
      <div className="background-global ">
      <SearchHome/> 
      </div>
      
      <Buttons names={buttonsNavbar}linkFilter={["Coronavírus (Covid-19)","Notícias","Diário Oficial","e-SIC","Nota Fiscal","Mapa do Site","Nota Fiscal Eletrônica","2ª via do IPTU","Certidões","Contracheque","Perguntas e Respostas"]}></Buttons>   
      <NewsAll/> 
      
      
      <Footer/>
     
    </div>
  )
}
