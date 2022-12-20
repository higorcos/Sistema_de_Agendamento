import AdminNavbar from "../../../components/admin/Navbar"
import ListBooking from "../../../components/admin/booking/ListUser"
import { useParams } from "react-router-dom"

export default function AdminListBanner(){
    const {idLab} = useParams()
    
    return (
        <>
        <AdminNavbar/>
        <div className='back'>
        <ListBooking id={idLab}/>
        </div>
        </> 
    )
} 