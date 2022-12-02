import "../../../styles/searchHome.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {tokenLink, link} from "../../../services/variables"
import styled, { css } from "styled-components";



export default function SearchHome() {
  const [search,setSearch] = useState('')
  const [selectBox,setSelectBox] = useState(false)
  const [optionSelect, setOptionSelect] = useState('')


  const navigate = useNavigate()
  const radioSelect = [
    {
      nome:'Diário Oficial',
      valores: 'diario',
    }, 
    {
      nome:'Legislações',
      valores: 'Legislação',
    }, 
    {
      nome:'Licitações',
      valores: 'licitações',
    },
    {
      nome:'Sacop',
      valores: 'sacop',
    }, 
    {
      nome:'Noticias',
      valores: 'noticias',
    },
   
  ]
  const selectOpen = (e)=>{
    e.preventDefault();
    window.location.href =`${link}/portaltm/busca/index.xhtml?token=${tokenLink}&texto=${search}
      `
   //setSelectBox(true)
  

    
  }
  const selectClose = ()=>{
    setSelectBox(false)
    setOptionSelect('')
    
   }
  useEffect(()=>{
    
  if(optionSelect !== ''){
    selectClose()
    setOptionSelect('')

    navigate(`/pesquisar/${search}/${optionSelect}`)
    
  }
  
  },[optionSelect])
  //background


 

     var data = new Date();   //data
    // var hora = data.getHours(); // horas
    // //var hora = 0   //teste madrugada
    // //var hora = 11; //teste manhã
    // //var hora = 12  //teste tarde
    // //var hora = 18  //teste noite 
    
    
    

    // if (hora >= 0 && hora < 5) {
    //    //madrugada

    // } else if (hora >= 5 && hora < 12) {
    //     //bom dia
    //     var nameimg = "/imagens/04.JPG"
      

    // } else if (hora >= 12 && hora < 18) {
    //     //boa tarde
    //     var nameimg = "/imagens/01.JPG"
    //     console.log('12horas')
       
    // } else {
    //     // boa noite 
      // var nameimg = "/imagens/01.JPG"

    // }

    var img = ['/imagens/02.JPG','/imagens/04.JPG','/imagens/01.JPG'] 

    // localStorage.setItem('numberMinute",)
    // localStorage.setItem('IdImg',email)

    const numberMinute = localStorage.getItem('numberMinute')
    const idImg = localStorage.getItem('IdImg')
 
    console.log(data.getMinutes(), "atual")
    console.log(parseInt(numberMinute)+15 ,"salvo")
 
    if(numberMinute != null){
    if(parseInt(numberMinute)+15 >= 60){
    localStorage.setItem('numberMinute',data.getMinutes())

    }
    
    if(data.getMinutes() > parseInt(numberMinute) +1){
      console.log("mudar")

    if(parseInt(idImg) < img.length){
      const a = parseInt(idImg)+1
      var nameimg = img[a]
      if(nameimg == undefined){
        localStorage.setItem('IdImg', 0)
        var nameimg = img[0]
      }else{

        console.log(nameimg)
        localStorage.setItem('IdImg', a)
      }
    }else{
      localStorage.setItem('IdImg', 0)
      var nameimg = img[0]

    }  
    localStorage.setItem('numberMinute',data.getMinutes())

    }else{
      const a = parseInt(idImg) 
      var nameimg = img[a]
    }
    }else{
    var nameimg = img[0]
    console.log(img[0])
    localStorage.setItem('numberMinute',data.getMinutes())
    localStorage.setItem('IdImg', 0)
 
      
    }

  
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    
  }
  var BackgroundIMG = styled.div`
  background-image: url(${nameimg});
  //background-color: #e52323f2;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: rgb(0, 0, 0); 
  padding: 12%;
  `

  return (  
  <BackgroundIMG>
  <div className='container-search-txt'>
  <div className='container-search-txt1'>
   {/* <h1 className='txt-init'>Bem-Vindos</h1>
   <h5 className='txt-init'>Portal da transparência</h5> */}
 </div>
  </div>
  
  <form className='container-search' >   
    <input type="text" placeholder="Buscar" className="input-search" onChange={(e)=> setSearch(e.target.value)}/>
    <button  onClick={(e)=>selectOpen(e)}  className="link-search">
    <img src="/icons/search.svg" alt="logo buscar" className="svg-search"/></button>
  </form>




 {selectBox ? (
 <div className="box-select-search">
     <div onClick={()=>selectClose()}  className="close-box">
    <img src="/icons/close.svg" alt="cancelar consulta" className="svg-search"/></div>
  <form onSubmit={handleSubmit} className="form-search">
    <h5>
      Escolha onde deseja pesquisar por {" "+search}:
      
      </h5>

<div>

      {radioSelect.map((option,keyId)=>(
        <div key={keyId}className='optionSelect'>
      <input 
      type="radio" 
      id={option.valores} 
      name ='selecSearch' 
      value={option.valores}
      onChange={(e) =>  setOptionSelect(e.target.value)} 
    />
    <label 
    htmlFor={option.valores} >
     <h6>
      {option.nome}
     </h6>
    </label>
    <br/> 
        </div>
      ))}
  
      </div>
  <div>
      
  {/* <button type="submit"    className="link-search-box">Pesquisar</button> */}
  </div>
  </form>
  
  </div>): <></>}
 </BackgroundIMG>
  );
}

