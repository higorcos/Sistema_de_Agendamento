import React,{ createContext, useState} from "react";
import api from "../services/api";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

export const labContext = createContext()

export  const labProvicer =({children})=> {

    const [statusLab, setStatusLab] = useState(false)
    const [lab,setLab] = useState(null)
    
   
    
    useEffect(()=>{
        const recoveryLab = localStorage.getItem('ID_LAB')
        

        if(recoveryLab){
            setLab(recoveryLab)
            setStatusLab(true)
        }else{
            setStatusLab(false)
        }
        
         // eslint-disable-next-line
    },[])
    
    const setIdLab =(id)=>{
        setStatusLab(true)
        setLab(dados.matricula)
        localStorage.setItem('ID_LAB',lab)
    }
   
    return(
      <AuthContext.Provider value={{setIdLab,statusLab,lab}}>
    {children}
    </AuthContext.Provider>
    )
}