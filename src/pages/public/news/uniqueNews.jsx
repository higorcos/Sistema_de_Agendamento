import NavMenu from "../../../components/public/others/Navbar";
import Footer from "../../../components/public/others/Footer";
import UniqueNew from "../../../components/public/news/UniqueNews"
import { useParams } from "react-router-dom";

export default function NewsPage() {
     const {idNoticias} = useParams()
  return (

    <div> 
      <NavMenu/>
      <UniqueNew idNoticias={idNoticias}/>      
      <Footer/>
    </div>
  )
}
