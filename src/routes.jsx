import React from 'react';
import {  BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

//Outras páginas
import Home from "./pages/public/others/home";

//Lab
import CreatedLab from './pages/admin/lab/new'
import EditLab from './pages/admin/lab/edit'
import ListLab from "./pages/admin/lab/list";

//login && user
import Login from './pages/admin/user/login'
import CreatedUser from './pages/admin/user/createdUser'
import ListUser from './pages/admin/user/list';


//Time
import CreatedTime from './pages/admin/time/new';
import EditTime from './pages/admin/time/edit';
import ListTime from './pages/admin/time/list';


import CreatedBooking from './pages/admin/booking/new'
import ListBooking from './pages/admin/booking/list'
import Booking from './pages/admin/booking/edit'

import { useContext } from 'react';
import { AuthProvicer, AuthContext } from './contexts/auth';




export default function RoutesF(){

  const PrivateRoute = ({children}) =>{

    const {authenticated, loading} = useContext(AuthContext)
      if(loading){
        console.log('Carregando')
        return 
      }
      if(!authenticated){
        console.log('não tá logado') 
         return <Navigate to="/admin/login"/>
       }
        console.log('logado')
         
       return children   
      
    }
  
  
    return(
<>
  <BrowserRouter>
    <AuthProvicer>
      <Routes>

        {/* Outras páginas */}
        <Route exact path="/" element={<Home/>} />
            
         {/* Lab  */}
        <Route exact path="/admin/lab" element={<PrivateRoute><CreatedLab/></PrivateRoute>} />
        <Route exact path="/admin/lab/painel" element={<PrivateRoute><ListLab/></PrivateRoute>}/>
        <Route exact path="/admin/lab/edit/:idNoticias" element={<PrivateRoute><EditLab/></PrivateRoute>} />
        {/* time */}
        <Route exact path="/admin/time/painel" element={<PrivateRoute><ListTime/></PrivateRoute>} />
        <Route exact path="/admin/time/new" element={<PrivateRoute><CreatedTime/></PrivateRoute>} />
        <Route exact path="/admin/time/edit/:idTime" element={<PrivateRoute><EditTime/></PrivateRoute>} />

        {/* booking */}
        <Route exact path="/admin/lab/booking/new" element={<PrivateRoute><CreatedBooking/></PrivateRoute>} />
        <Route exact path="/admin/lab/booking/list/:idLab" element={<PrivateRoute><ListBooking/></PrivateRoute>} />
       
        <Route exact path="/admin/lab/booking/:idBooking" element={<PrivateRoute><Booking/></PrivateRoute>} />
        {/* <Route exact path="/admin/booking/painel" element={<PrivateRoute><ListTime/></PrivateRoute>} /> */}

        {/* login e user */}
        <Route exact path="/admin/login" element={<Login/>} />
        <Route exact path="/admin/login/created" element={<CreatedUser/>} />
        <Route exact path="/admin/user/painel" element={<PrivateRoute><ListUser/></PrivateRoute>} />

      </Routes>
    </AuthProvicer>
  </BrowserRouter>  
</>
    )
}
