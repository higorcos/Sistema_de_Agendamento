import AdminNavbar from "../../../components/admin/Navbar"
import EditBooking from "../../../components/admin/time/Edit"
import { useParams } from "react-router-dom";

export default function AdminEditBanner(){
    const {idTime} = useParams()
  
    return (
        <>
        <AdminNavbar/>
        <div className='back'>
        <EditBooking id={idTime}/>
        </div>
        </> 
    )
} 