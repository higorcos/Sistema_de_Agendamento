import React, { useEffect, useState } from 'react';
import api from '../../../services/api';
import '../../../styles/buttonTransparencia.css'
import Loading from "../others/Loading";
import { imagemURL, tokenLink } from '../../../services/variables';

export default function ButtonTransparenciaDinamicy() {
  //const buttonTrans = prop.names;
  const [buttonTrans, setButtonTrans] = useState()
  const [removeLoading, setRemoveLoading] = useState(false)
    
  useEffect(()=>{
    const a = async () =>{

     await api.get('/button/show').then((res)=>{
      const data = res.data
      if(data.err){

      }else{
        //console.log(buttonTrans)
        setButtonTrans(data.res) 
        setRemoveLoading(true)
      }
    }).catch((err)=>{})
  }
  a()
  },[])


  const buttonToken = (link)=>{
    
    const txt = link.replace('{*}', tokenLink)
    
    console.log(txt)
    return txt
  }
  



    return (
      <>
      {!removeLoading ? <Loading/> :(<>
      <div className="container-card-transparencia">
              {buttonTrans !== undefined ? buttonTrans.map((button, i) =>{
      return(
      <a href={button.ID_TIPO == '2' ? buttonToken(button.LINK) : buttonToken(button.LINK)}
      className="link-button-transparencia" 
      target="_blank" rel="noopener noreferrer"
      title={`${button.NOME}`} key={i}>
     <div className="card-button-transparencia">
       <img
         src={button.IMG === 'iconPadrão.jpg' ? '/icons/Padrão.svg' : imagemURL+button.IMG }
         alt="ícones"
         className="svg-button-transparencia"
       />
       <p className="text-card-button-transparencia">
         {`${button.NOME}`}
       </p>
     </div>
   </a> )
   
}):<></>}
        </div></>)}
        </>
    );
  }
  