import AdminNavbar from "../../../components/admin/Navbar"
import EditBanners from "../../../components/admin/banner/Edit"
import { useParams } from "react-router-dom";

export default function AdminEditBanner(){
    const {idBanner} = useParams()
  
    return (
        <>
        <AdminNavbar/>
        <div className='back'>
        <EditBanners id={idBanner}/>
        </div>
        </> 
    )
} 