import NavMenu from "../../../components/public/others/Navbar";
import SearchHome from "../../../components/public/others/SearchHome";
import CardOffice from "../../../components/public/others/OfficeInfo"
import Footer from "../../../components/public/others/Footer";


export default function OfficePage() {

 
 
  return (

    <>  
    <div>
      <NavMenu></NavMenu>
      <div className="background-global">
      <SearchHome></SearchHome> 
      </div>
      <CardOffice/>
      <Footer></Footer>
      
    </div>
    </>
  )
}

