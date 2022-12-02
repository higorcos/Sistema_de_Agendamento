import React,{ createContext, useState} from "react";
import api from "../services/api";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

export const AuthContext = createContext()

export const AuthProvicer =({children})=> {

    const [statusUser, setStatusUser] = useState(false)
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();
    
    useEffect(()=>{
        const recoveryUser = localStorage.getItem('user')
        const recoveryToken = localStorage.getItem('tokenUser')

        if(recoveryUser && recoveryToken){
            setUser(recoveryUser)
            api.defaults.headers['x-access-token'] =  recoveryToken
            setStatusUser(true)
        }else{
            setStatusUser(false)
        }
        setLoading(false)
         // eslint-disable-next-line
    },[])
    
    const login =(email, password)=>{

    api.post('/login',{
            email:email,
            password:password
    }).then((res)=>{
    if(res.data.auth){ // se autorização
        const token = res.data.token
        setUser(email)
        setStatusUser(true)
        
        localStorage.setItem('tokenUser',token)
        localStorage.setItem('user',email)
        api.defaults.headers['x-access-token'] =  token
        navigate('/admin/noticias/painel')
        
        }else{// se não tiver autorização
            setStatusUser(false)

        alert('Login invalido')
        navigate(0);
        
            
        }
    }).catch((err)=> {
        setStatusUser(false)

        alert('Login invalido')
        navigate(0);
   
    })
    }
    const logout =()=>{
      localStorage.removeItem('user')
      localStorage.removeItem('tokenUser')
      api.defaults.headers['x-access-token'] =  null
      setUser(null)
      setStatusUser(false)

    }
    return(
      <AuthContext.Provider value={{authenticated: statusUser,user, loading, login, logout}}>
   {children}
    </AuthContext.Provider>
    )
}