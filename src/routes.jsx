import React from 'react';
import {  BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

//Outras páginas
import Home from "./pages/public/others/home";
import MapSite from './pages/public/buttons/mapSite';
import Transparencia from "./pages/public/buttons/transparencia";
import SearchDatabase from './pages/public/others/searchDatabase';
//Lab
import CreatedLab from './pages/admin/news/new'
import EditLab from './pages/admin/news/edit'
import ListLab from "./pages/public/news/list";

import OfficeDiary from './pages/public/others/officialDiary';

//login
import Login from './pages/admin/user/login'
import CreatedUser from './pages/admin/user/createdUser'
import ListUser from './pages/admin/user/list';

//competências
import CreatedOffice from './pages/admin/office/new'
import ShowOfficeInfo from "./pages/public/others/officeInfo"
import ListOffice from './pages/admin/office/list';
//Banner
import NewBanner from './pages/admin/banner/new';
import EditBanner from './pages/admin/banner/edit';
import ListBanner from './pages/admin/banner/list';


import Loading from './components/public/others/LoadingFull'
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
        <Route exact path="/informacoes-institucionais/registro-das-competencias" element={<ShowOfficeInfo/>} />
        <Route exact path="/pesquisar/:wordSearch/:database" element={<SearchDatabase/>}/>
        <Route exact path="/transparencia" element={<Transparencia/>} />
        <Route exact path="/mapa-site" element={<MapSite/>} />
        
        <Route exact path="/diario-oficial/diario-oficial-eletronico" element={<OfficeDiary/>} />
        
         {/* Lab  */}
        <Route exact path="/admin/lab" element={<PrivateRoute><CreatedLab/></PrivateRoute>} />
        <Route exact path="/admin/lab/painel" element={<PrivateRoute><ListLab/></PrivateRoute>}/>
        <Route exact path="/admin/lab/editar/:idNoticias" element={<PrivateRoute><EditLab/></PrivateRoute>} />

        {/* competências */}
        <Route exact path="/admin/competencias" element={<PrivateRoute><CreatedOffice/></PrivateRoute>} />
        <Route exact path="/admin/competencias/painel" element={<PrivateRoute><ListOffice/></PrivateRoute>} />



        {/* login e user */}
        <Route exact path="/admin/login" element={<Login/>} />
        <Route exact path="/admin/login/created" element={<CreatedUser/>} />
        <Route exact path="/admin/user/painel" element={<PrivateRoute><ListUser/></PrivateRoute>} />
        {/*  */}
        <Route exact path="/admin/user/editar/:idBanner" element={<PrivateRoute><EditBanner/></PrivateRoute>} />

        <Route exact path="/admin/banner/painel" element={<PrivateRoute><ListBanner/></PrivateRoute>} />
        <Route exact path="/admin/banner/new" element={<PrivateRoute><NewBanner/></PrivateRoute>} />

      </Routes>
    </AuthProvicer>
  </BrowserRouter> 
</>
    )
}
