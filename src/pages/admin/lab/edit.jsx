import EditNews from "../../../components/admin/lab/Edit";
import AdminNavbar from "../../../components/admin/Navbar"
import { useParams } from "react-router-dom";


export default function AdminNewsPage(){
    const {idNoticias} = useParams()
    return (
        <>

        <AdminNavbar/>
        <div className='back'>
        <EditNews id={idNoticias}/>
        </div>
        </> 
    )
}