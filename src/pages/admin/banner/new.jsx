import NewBanner from "../../../components/admin/banner/New"
import AdminNavbar from "../../../components/admin/Navbar"


export default function AdminBannerPage(){
    return (
        <>

        <AdminNavbar/>
        <div className='back'>
        <NewBanner/>
        </div>
        </> 
    )
}