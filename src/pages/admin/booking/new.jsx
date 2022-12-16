import NewBooking from "../../../components/admin/booking/New"
import AdminNavbar from "../../../components/admin/Navbar"


export default function AdminBannerPage(){
    return (
        <>

        <AdminNavbar/>
        <div className='back'>
        <NewBooking/>
        </div>
        </> 
    )
}