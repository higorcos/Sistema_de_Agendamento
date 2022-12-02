import NavMenu from "../../../components/public/others/Navbar";
import SearchDatabase from "../../../components/public/others/SearchDatabase";
import Footer from "../../../components/public/others/Footer";
import { useParams } from "react-router-dom";

export default function SearchDatabasePage() {
        const wordSearch = useParams()
      
  return (

    <div>
      <NavMenu></NavMenu>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
      <SearchDatabase search={wordSearch}/>
      <Footer></Footer>
    </div>
  )
}

