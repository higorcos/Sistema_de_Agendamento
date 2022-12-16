import React,{ createContext, useState} from "react";
import api from "../services/api";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

export const AuthContext = createContext()

export  const AuthProvicer =({children})=> {

    const [statusUser, setStatusUser] = useState(false)
    const [user,setUser] = useState(null)
    const [funcao,setFuncao] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();
    
    useEffect(()=>{
        const recoveryUser = localStorage.getItem('user')
        const recoveryToken = localStorage.getItem('tokenUser')
        const recoveryFuncion = localStorage.getItem('user_system')

        if(recoveryUser && recoveryToken && recoveryFuncion ){
            setUser(recoveryUser)
            setFuncao(recoveryFuncion)
            api.defaults.headers['x-access-token'] =  recoveryToken 
            setStatusUser(true)
        }else{
            setStatusUser(false)
        }
        setLoading(false)
         // eslint-disable-next-line
    },[])
    
    const login =(email, password)=>{
    api.post('/user/login',{
            email:email,
            matricula:password
    }).then((res)=>{
    if(!res.data.err){ // se autorização
        const token = res.data.token
        const dados = res.data.dados
        const funcao = dados.funcao_sistema
        setUser(dados.matricula)
        setFuncao(funcao)
        setStatusUser(true)
        
        localStorage.setItem('tokenUser',token)
        localStorage.setItem('user',user)
        localStorage.setItem('user_system', funcao)
        api.defaults.headers['x-access-token'] =  token
        
        if(funcao == "ADMIN"){
            navigate('/')
        }else{
            navigate('/userComun')

        }
        
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
      <AuthContext.Provider value={{authenticated: statusUser,user,funcao, loading, login, logout}}>
   {children}
    </AuthContext.Provider>
    )
}