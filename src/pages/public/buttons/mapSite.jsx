import NavMenu from "../../../components/public/others/Navbar"
import SearchHome from "../../../components/public/others/SearchHome";
import Buttons from "../../../components/public/buttons/ButtonHome"
import Footer from "../../../components/public/others/Footer";
import MapSite from '../../../components/public/buttons/MapSite'

import buttonsNavbar from '../../../components/jsons/jsonButtons'
// import Teste from "../../../components/public/others/Teste";
export default function mapSite() {
 
  return ( 

    <div>
      <NavMenu></NavMenu>
      <div className="background-global">
      <SearchHome></SearchHome> 
      </div>
      <Buttons names={buttonsNavbar}linkFilter={["Mapa do Site"]}></Buttons>
      <MapSite/>
      <Footer></Footer>  
    </div>
  )
}


