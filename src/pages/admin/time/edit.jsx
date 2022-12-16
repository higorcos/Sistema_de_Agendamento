import AdminNavbar from "../../../components/admin/Navbar"
import EditLab from "../../../components/admin/time/Edit"
import { useParams } from "react-router-dom";

export default function AdminEditBanner(){
    const {idTime} = useParams()
  
    return (
        <>
        <AdminNavbar/>
        <div className='back'>
        <EditLab id={idTime}/>
        </div>
        </> 
    )
} 