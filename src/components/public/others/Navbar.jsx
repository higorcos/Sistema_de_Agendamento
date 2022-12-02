import "../../../styles/teste.css";
import "../../../styles/navbar.css";

import {NomePortal,NomeTipoPortal} from "../../../services/variables"


import jsonMenu from "../../jsons/jsonNavbar";
import { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
  
export default function Navbar() {
  const [statusNavbarleft, setStatusNavbarleft] = useState(false);
  const [increase, setIncrease]= useState(0)
  const [decrease, setDecrease]= useState(0)
  const [fontNormal, setFontNormal]= useState(0)
  const [fontSize2, setFontSize] = useState(100)
  const [scrollX, setScrollx] = useState(0)
  const [scrollAuto, setScrollAuto] = useState(true)
  const [count, setCount] = useState(0)

  const [lengthItens] = useState(jsonMenu.length* 220)

  const arrayMap = jsonMenu.map(
    (
      itens,
      indexArrayMap //vai percorrer o array e vai retornar os elementos da lista
    ) => sumList(itens, indexArrayMap)
  );
  function sumList(array, index) {
    //vai aplicar o jsx
    if(array.top_list !== undefined && array.top_list == true && array.sub_link !== undefined){
      return (
        <>
          <li className={"itens-navbar itens button-navbar"} key={index}>
            <div className="button-navbar-slider">

            <img
            src={`/icons/${array.img}.svg`}
            type="image/svg+xml"
            alt="ícones"
            className="svg svg-navbar"/> 
            {checkLink(array)}
            </div>
            <ul className="list-navbar lista-secundaria-navbar">
              {array.sub_link.map((itens, index) => sumList(itens, index))}
            </ul>
          
          </li>
        </>
      );
    }else if(array.top_list !== undefined && array.top_list == true && array.sub_link == undefined){
      return (
      <>
      <li className={"itens-navbar itens button-navbar"} key={index}>
        <a href={array.link} className="drop-navbar">
      <div className="button-navbar-slider">
      
        <img
          src={`/icons/${array.img}.svg`}
          type="image/svg+xml"
          alt="ícones"
          className="svg svg-navbar"
            /> 
              {array.name}
            </div>
            </a>
           
      </li>
    </>)
    }else{

   
    if (array.sub_link !== undefined) {
      // vai verificar se existe uma lista dentro de outra lista
  

      return (
        <>
          <li className={"itens-navbar itens sub-list"} key={index}>
            {checkLink(array)}
            <ul className="list-navbar lista-secundaria-navbar">
              {array.sub_link.map((itens, index) => sumList(itens, index))}
            </ul>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="itens-navbar itens sub-link" key={index}>
            <a href={array.link} className="drop-navbar">
              {array.name}
            </a>
          </li>
        </>
      );
    }}
  }
  //vai verificar se existe um link (o elemento pai de uma lista oculta não deve possuir link)
  function checkLink(array) {
    if (array.link !== undefined) {
      return (
        <a href={array.link} className="drop-navbar">
          <p>{array.name}</p>
        </a>
      );
    } else {
      return <p className="icon-drop drop-navbar">{array.name}</p>;
    }
  }
  const sidebar = () => {
    if (statusNavbarleft) {
      setStatusNavbarleft(false);
    } else {
      setStatusNavbarleft(true);
    }
  };
  const showSidebar = () => {
    return (
      <div className="div-sidebar-new">
        {jsonMenu.map((button, index) => (
          <ul key={index} className="new-nav">
            {button.link !== undefined ? (
              <a href={button.link} className="link-sidebar">
                {button.name}
              </a>
            ) : (
              <h6>{button.name}</h6>
            )}
            {button.sub_link !== undefined
              ? list_sub_link(button.sub_link)
              : ""}
          </ul>
        ))}
      </div>
    );
  };
  const list_sub_link = (array) => {
    return (
      <div className="sub-div-sidebar-new">
        {array.map((b, index) => (
          <li key={index} className="desq">
            {b.link !== undefined ? (
              <a href={b.link} className="desq link-sidebar">
                {b.name}
              </a>
            ) : (
              <h6 className="desq">{b.name}</h6>
            )}
            <ul>{b.sub_link !== undefined ? list_sub_link(b.sub_link) : ""}</ul>
          </li>
        ))}
      </div>
    );
  };
 
  useEffect(()=>{
    const elementBody = document.querySelector(':root');
    const  elementBtnIncreaseFont = document.getElementById('increase-font');
    // Valor de incremento ou decremento, equivale a 10% do valor do Body
    const increaseDecrease = 10;

         //Evento de click para aumentar a fonte
         const skip = fontSize2 + increaseDecrease
      
         setFontSize(Math.abs(skip));
         
         elementBtnIncreaseFont.addEventListener('click', function(event) {
          elementBody.style.fontSize = skip + '%';
        });
      // eslint-disable-next-line
  },[increase])
  useEffect(()=>{
    const elementBody = document.querySelector(':root');
    const  elementBtnDecreaseFont = document.getElementById('decrease-font');
    // Valor de incremento ou decremento, equivale a 10% do valor do Body
    const increaseDecrease = 10;
    if(fontSize2 > 100){

      const skip = fontSize2 - increaseDecrease
      
      setFontSize(Math.abs(skip));
      //Evento de click para diminuir a fonte
      elementBtnDecreaseFont.addEventListener('click', function(event) {
        elementBody.style.fontSize = skip + '%';
      
      });
    }
      
      // eslint-disable-next-line
  },[decrease])
  useEffect(()=>{
    const elementBody = document.querySelector(':root');
    const  elementBtnDecreaseFont = document.getElementById('normal-font');
    

         //Evento de click para voltar ao tamanho normal da fonte
        elementBtnDecreaseFont.addEventListener('click', function(event) {  
          setIncrease(0)
          setFontSize(100)  
          setDecrease(0)   
        elementBody.style.fontSize = 100 + '%';
      });
      // eslint-disable-next-line
  },[fontNormal])
  
  const keyIncrease = ()=>{
   /// document.getElementById("increase-font").click();
   console.log('aumentar')
  }
  const clickSegment = () =>{
    // eslint-disable-next-line
    if(localStorage.getItem('userway-s3') == 0 ){
      localStorage.setItem('userway-s3', 1)
      document.location.reload();
    }else{
      localStorage.setItem('userway-s3', 0)
      document.location.reload();

    }
  }

  // arrow slider  
  const  handleRightArrow= ()=>{
    setScrollAuto(false)
   
  
  var x=(scrollX+ 220)
    
  //nº de itens - (Tela * 4) 

  if(x < 0){ 
    setCount(count - 1)  
  }else{
    x=0
  }
  setScrollx(x)
  //console.log(x)
 //console.log("voltar scroll "+scrollX+ " Count:"+ count + " Lista" +lengthItens +" Tela "+ Math.round(window.innerWidth))
} 


  const handleLeftArrow = () =>{
  setScrollAuto(false)

  
  const x=(scrollX- 220)
    
  //nº de itens - (Tela * 4) 
  if(Math.round(window.innerWidth) <= 540){ //telas menores que 400px
    if(x >= ((220*1)-lengthItens) ){ 
      setCount(count + 1)
      setScrollx(x)
      //console.log("Avançar tela celular, scroll "+scrollX+ " Count:"+ count + " Lista" +lengthItens +" Tela "+ Math.round(window.innerWidth))
    }
  }else if(540 < Math.round(window.innerWidth) && Math.round(window.innerWidth) <= 770){
    if(x >= ((220*2)-lengthItens) ){ 
      setCount(count + 1)
      setScrollx(x)
      //console.log("Avançar tela celular, scroll "+scrollX+ " Count:"+ count + " Lista" +lengthItens +" Tela "+ Math.round(window.innerWidth))
    }
  }else if(770 < Math.round(window.innerWidth) && Math.round(window.innerWidth) <= 1070){
    if(x >= ((220*3)-lengthItens) ){ 
      setCount(count + 1)
      setScrollx(x)
      //console.log("Avançar tela celular, scroll "+scrollX+ " Count:"+ count + " Lista" +lengthItens +" Tela "+ Math.round(window.innerWidth))
    }
  }else{
  if(x >= ((220*4)-lengthItens) ){ 
    setCount(count + 1)
    setScrollx(x)
    //console.log("Avançar scroll "+scrollX+ " Count:"+ count + " Lista" +lengthItens +" Tela "+ Math.round(window.innerWidth))
  }
}}

  if(Math.round(window.innerWidth) <= 540){ //telas menores que 400px
    var lengthButtons = lengthItens -(220*1)
    var delayTransition = 100
  
  }else if(540 < Math.round(window.innerWidth) && Math.round(window.innerWidth) <= 770){
    var lengthButtons = lengthItens -(220*2)
    var delayTransition = 60

  }else if(770 < Math.round(window.innerWidth) && Math.round(window.innerWidth) <= 1070){
    var lengthButtons = lengthItens -(220*3)
    var delayTransition = 45
    
  }else{
    var lengthButtons = lengthItens -(220*4)
    var delayTransition = 35
  }
  var efect = keyframes`
          0% {
            margin-letf: 0; 
          }
          50%{
            margin-left: -${lengthButtons}px
          }
          100%{
            margin-left: 0
          }
`;
  var ListButtonsSlider = styled.div`
    display: flex;  
    animation: ${scrollAuto ? css`${efect} ${delayTransition}s linear infinite`: `none`};
    margin-left: ${scrollX};
    &:hover {
      animation-play-state: paused;
    } `


  return (
    <>
      <section className="div-navbar">
 
        <button onClick={() => sidebar()} className="button-menus-suspenso">
          <img
            src="/icons/list-menu.svg"
            alt="menu suspenso"
            className="icon-menus-suspenso"
          />
        </button>
        <div className="left-navbar-itens">
      <div className="box-accessible">     
    
      <i className="skip-icon"></i>

      <button 
      name="iAcessibilidade-button" 
      id="Acessibilidade-button" 
      className="button-acessibilidade"
      title="Acessibilidade"
      onClick={()=>{document.getElementsByClassName('uiiw')[0].click()}} 
      >Acessibilidade</button>
      <i className="skip-icon"></i>
      <button 
      name="iLibras-button" 
      id="Libras-button" 
      className="button-acessibilidade"
      title="Libras"
      onClick={()=>{document.getElementsByClassName('access-button')[0].click()}} 
      >Libras</button>
      <i className="skip-icon"></i>
      <button 
      name="iContraste-button" 
      id="Contraste-button" 
      className="button-acessibilidade"
      title="Contraste"
      onClick={()=>{clickSegment() }} 
      >Contraste</button>
      <i className="skip-icon"></i>
        <button 
        name="decrease-font" 
        id="decrease-font" 
        className="button-acessibilidade"
        title="Diminuir fonte"
        accessKey="-"
        // eslint-disable-next-line
        onClick={()=>setDecrease(decrease+1)}
        >A - [alt + -]</button>
      <button 
      name="normal-font" 
      id="normal-font" 
      title="Tamanho normal"
      className="button-acessibilidade"
      onClick={()=>setFontNormal(fontNormal+1)} 
        >A </button>
      <button 
      name="increase-font" 
      id="increase-font" 
      title="Aumentar fonte"
      className="button-acessibilidade"
      // eslint-disable-next-line
      accessKey="="
      onKeyDown={(e)=>{e.key === "p" && keyIncrease()}}
      onClick={()=>setIncrease(increase+1)} 
      >A + [alt + +]</button>
      <i className="skip-icon"></i>
      <a href="/mapa-site">
      <button 
      name="increase-font" 
      id="increase-font" 
      title="Mapa do site"
      className="button-acessibilidade"
      // eslint-disable-next-line
      >Mapa do site</button>
      </a>
      <i className="skip-icon"></i>

      
          </div>
          <div  className="container-navbar">
          <div className="nav-logo">

          <a href="/" className="card-logo">
             <img
              alt="Logo Portal"
              src="/imagens/logo.jpg"
              className="logo-top"
              /> 
            
            <div className="nav-name">
              <h3 className="Title-Navbar">{NomePortal}</h3>
              <hr className="Title-Navbar line"></hr>
              <h5 className="Title-Navbar">{NomeTipoPortal}</h5>
            </div>
          </a>
          </div>
              
        </div>

        <div className="container-menu-slider arrow-left arrow-right" >
          <div className="sombra"></div> 
          <div className="arrow-slider-menu" onClick={handleRightArrow}>
          <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24"><path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"/></svg>
          </div>
          <div className="arrow-slider-menu arrow-left"  onClick={handleLeftArrow}> 
          <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
          </div>
        <div className="navbar-button-list">
          {/* <ul className="list-navbar lista-primaria-navbar"
          style={{ margin: scrollX}}
          >{arrayMap}
          </ul>  */}

          <ListButtonsSlider  className="list-navbar lista-primaria-navbar" 
          style={{marginLeft: scrollX}}>
            {arrayMap}</ListButtonsSlider>
         
        </div>
          </div>

        </div>
        
      </section>

      {statusNavbarleft ? showSidebar() : ""}


    </>
  );
}
