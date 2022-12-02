import { useEffect, useState } from "react"
import api from "../../../services/api"
import "../../../styles/OfficeInfo.css"
import {imagemURL} from "../../../services/variables"
import {NomePortal} from "../../../services/variables"
import Loading from "../others/Loading";



export default function OfficeInfo(){
    const [detailsBox, setDetailsBox] = useState(false)
    const [detailsData, setDetailsData] = useState('')
    const [name, setName] = useState('')
    const [office, setOffice] = useState('')
    const [id,setID]= useState('')

    const [dataOffice, setDataOffice] = useState([])
    const [dataOfficeOthers, setDataOfficeOthers] = useState([])

    const [removeLoading, setRemoveLoading] = useState(false)


  useEffect(()=>{
    setRemoveLoading(false)
    api.get('/office/show').then((res)=>{
      if(res.data.err){

      }else{  
        setDataOffice(res.data.Gabinete)
        setDataOfficeOthers(res.data.Outros)
        setRemoveLoading(true)
      }
    }).catch((err)=>{
      
    })
    // eslint-disable-next-line
  },[])
    
  useEffect(()=>{},[detailsBox])

  
const showDetails =(array)=>{
  setID(array.ID)
  setName(array.NOME)
  setOffice(array.CATEGORIA)
  setDetailsData(array.TEXTO_ATRIBUICAO)
  setDetailsBox(true)
}

return(<>
{removeLoading ? 
 (<>
 <div className="section-title rotes_pages">
    <h6> Início / Informações Institucionais / Registro das Competências</h6>
 </div>
  <div className="section-title">
  <h5>
  <img className="icon-title"
  alt="Links Rápidos"
  src="/icons/seta-direita.svg"
  />
   Registro das Competências - Gabinete
  </h5>
  <div className="border"></div>

  </div>
  <div className="cards-container">
  
  {dataOffice.map((data, i)=>{
    
    return(
    
          
             <ul className="cards" key={i}>
               <li>
                 <div className="card">
                   <img src={imagemURL+data.IMG} className="card__image" alt="" />
                   <div className="card__overlay">        
                     <div className="card__header">              
                       <img className="card__thumb" src={"/imagens/logo.jpg"} alt="" />
                       <div className="card__header-text">
                         <h3 className="card__title"> {data.NOME}</h3>
                         {data.ID_TIPO != 1 && (<>
                         <span className="card__status"> {data.TIPO}</span>
                         </>)}
                       </div>
                     </div>
                     <div className="card__description">
                     <p><strong>Cargo:</strong> {data.CATEGORIA}</p>
          
                         <p><strong>Endereço:</strong> {data.ENDERECO}</p>
                         <p><strong>Cidade:</strong> {NomePortal} - MA</p>
                         <p><strong>Cep:</strong> {data.CEP}</p>
                         <p><strong>Email:</strong> {data.EMAIL}</p>
                         <p><strong>Telefone de contato:</strong> {data.TELEFONE}</p>
                         <p><strong>Atendimento ao público:</strong> {data.ATENDIMENTO}</p>
                         <div className="Button_details" name={i}
                    
                       onClick={()=>{showDetails(data)}}>
                        
                       <p><strong>Texto de atribuição</strong></p>
                       <svg xmlns="http://www.w3.org/2000/svg" width="0.8rem" height="0.8rem" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                       <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                       <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                         </svg>
                         </div>
                     </div>
                   </div>
                 </div>
               </li>  
                 </ul>
             
    )
  })}
  </div>
   
  <div className="section-title">
  <h5>
  <img
  className="icon-title"
  alt="Links Rápidos"
  src="/icons/seta-direita.svg"
  />  Registro das Competências - Secretarias
  </h5>
  <div className="border"></div>

  </div>
  <div className="cards-container">
  {dataOfficeOthers.map((data, i)=>{
    
    return(
    
          
             <ul className="cards" key={i}>
               <li>
                 <div className="card">
                   <img src={imagemURL+data.IMG} className="card__image" alt="Representante" />
                   <div className="card__overlay">        
                     <div className="card__header">              
                       <img className="card__thumb" src={"/imagens/logo.jpg"} alt="logo" />
                       <div className="card__header-text">
                         <h3 className="card__title"> {data.NOME}</h3>
                         {data.ID_TIPO != 1 && (<>
                         <span className="card__status"> {data.TIPO}</span>
                         </>)}
                       </div>
                     </div>
                     <div className="card__description">
                     <p><strong>Cargo:</strong> {data.CATEGORIA}</p>
          
                         <p><strong>Endereço:</strong> {data.ENDERECO}</p>
                         <p><strong>Cidade:</strong> {NomePortal} - MA</p>
                         <p><strong>Cep:</strong> {data.CEP}</p>
                         <p><strong>Email:</strong> {data.EMAIL}</p>
                         <p><strong>Telefone de contato:</strong> {data.TELEFONE}</p>
                         <p><strong>Atendimento ao público:</strong> {data.ATENDIMENTO}</p>
                         <div className="Button_details" name={i}
                    
                       onClick={()=>{showDetails(data)}}>
                        
                       <p><strong>Texto de atribuição</strong></p>
                       <svg xmlns="http://www.w3.org/2000/svg" width="0.8rem" height="0.8rem" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                       <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                       <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                         </svg>
                         </div>
                     </div>
                   </div>
                 </div>
               </li>  
                 </ul>
             
    )
  })}
  
  </div>
  </>)
: <Loading/> }

  {detailsBox ? (<>
    <div className="card_plus" key={id}>
    <div onClick={()=>setDetailsBox(false)} className="box-detalis">

        <div className="Title_card_plus">
          <div className="title-plus-img">
            <img className="card__thumb" src={"/imagens/logo.jpg"} alt="logo Portal" />
          </div>
          <div className="tilte-plus-txt">
            <h3 className="card__title">{name}</h3>
            <span className="card__status">{office}</span>
          </div>
        </div>
      <div className="plus_icon_icon" >
        <img src="/icons/close.svg" alt="sair" className="icon_close_plus"/>
        </div>  
    </div>
    <div 
    dangerouslySetInnerHTML={{ __html: detailsData }}
    className='plus_txt'
    ></div>
    
    </div>
      </>):<></>}


</>
    )}