
import Search from '../../../components/public/others/SearchHome';
import NavMenu from "../../../components/public/others/Navbar";
import ButtonsTop from "../../../components/public/buttons/ButtonHome";
import Buttons from "../../../components/public/buttons/ButtonTransparenciaDinamicy";
import Footer from "../../../components/public/others/Footer";
import buttonsNavbar from "../../../components/jsons/jsonButtons"


function Transparência() {
 
  return (

    <div>
      <NavMenu/>
      <div className="background-global">
      <Search/>
      </div>
      <ButtonsTop names={buttonsNavbar}/>
      
      <div className="section-title rotes_pages">
       <h6> Início / Transparência</h6>
      </div>
      <div className="section-title">
      <h5>
        <img className="icon-title" alt="Links Rápidos" src="/icons/seta-direita.svg" />
        Transparência</h5>
        <div className="border"></div>

      </div>
      <div className='fundo_svg'>
      <Buttons/>
      </div>
      <Footer/>
    </div>
  )
}

export default Transparência;
