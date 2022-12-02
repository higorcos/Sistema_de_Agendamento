import "../../../styles/footer.css";


import api from '../../../services/api'
import { useEffect } from "react";
import { useState } from "react";

export default function Footer() {
  const [footer,setFooter] = useState([])

  useEffect(()=>{
    api.get(`/footer`).then((res)=>{
    if(res.data.err !== true){
        setFooter(res.data.res[0])
        //console.log(res.data.res[0])
      }
    }).catch((err)=> { })
  },[])


  return (
    <>
 <section className="main-footer">
    <div className="footer">
      <div className="footer-div " >
        <div className="div-list">
          <div className="list">
      
            <ul>
              <h2>Atendimento</h2>
              <li>
              <img
                  src="/icons/Atendimento.svg"
                  alt="logo localização"
                  className="svg-footer"
                />
                {footer.HORARIO_ESIC != undefined && footer.HORARIO_ESIC}</li>

              <li>
                <img
                  src="/icons/envelope.svg"
                  alt="logo email"
                  className="svg-footer img-aten"
                  />
                 {footer.SITE_EMAIL_FALECOMNOSCO} 
              </li>
              <li>
                  
                <img
                  src="/icons/telephone.svg"
                  alt="logo contato"
                  className="svg-footer img-aten"
                />
                {footer.TELEFONE_EESIC}

              </li>
              {/* <li><img src="/icons/telephone.svg" alt="logo contato 2" className="svg-footer" />(99) 3554-1112</li> */}
            </ul>
          </div>
          <div className="list">
            <ul>
              <h2>Localização</h2>
              <li>
                <img
                  src="/icons/geo-alt.svg"
                  alt="logo localização"
                  className="svg-footer"
                />
                {footer.ENDERECO}
              </li>
              <li>
              <img
                  src="/icons/MapaB.svg"
                  alt="logo MAPA"
                  className="svg-footer"
                />
              {footer.CIDADE}-{footer.UF} - CEP: {footer.CEP}
              </li>
              <li>
              <img
                  src="/icons/layers.svg"
                  alt="logo CNPJ"
                  className="svg-footer"
                />
              CNPJ: {footer.CNPJ}
              </li>
            </ul>
          </div>
          <div className="list">
            <ul>
              <h2>E-SIC</h2>
              <li>
              <img
                  src="/icons/geo-alt.svg"
                  alt="logo localização"
                  className="svg-footer"
                />
              {footer.ENDERECO}

            </li>
              <li>
              <img
                  src="/icons/MapaB.svg"
                  alt="logo mapa"
                  className="svg-footer"
                />
              {footer.CIDADE}-{footer.UF} - CEP: {footer.CEP}
                
                </li>
              <li>
                <img
                  src="/icons/envelope.svg"
                  alt="logo email"
                  className="svg-footer"
                />
                {footer.EMAIL_ESIC}

              </li>
            </ul>
          </div>
          <div className="list">
            <ul>
              <h2>Ouvidoria</h2>
             
              <li>
              <img
                  src="/icons/MapaB.svg"
                  alt="logo mapa"
                  className="svg-footer"
                />
              {footer.CIDADE}-{footer.UF} - CEP: {footer.CEP}
                
                </li>
              <li>
                <img
                  src="/icons/envelope.svg"
                  alt="logo email"
                  className="svg-footer"
                />
                {footer.EMAIL_OUVIDORIA}

              </li>
            </ul>
          </div>
        </div>
        <div className="card-external">

        <div className="card-social">
            {/* <a href={footer.LINK_WHATSAPP } 
            target="_blank"
            rel="noopener noreferrer"
            className="link-social">
              <img
                src="/icons/whatsapp.svg"
                alt="logo email"
                className="svg-footer-social"
              />
            </a> */}
            <a href={footer.LINK_INSTAGRAM } 
            target="_blank"
            rel="noopener noreferrer"
            className="link-social">
              <img
                src="/icons/instagram.svg"
                alt="logo email"
                className="svg-footer-social"
              />
            </a>
            <a href={footer.LINK_FACEBOOK } 
            target="_blank"
            rel="noopener noreferrer"
            className="link-social">
              <img
                src="/icons/facebook.svg"
                alt="logo email"
                className="svg-footer-social"
              />
            </a>
          </div>
        </div>
        
        <div className="link-end-footer">
          <a href="http://www.workcenter.slz.br/">
            Copyright © 2022 {footer.NOME} - Ma. Todos os
            direitos reservados.{" "}
          </a>
        </div>
      </div>
    </div>
    </section>
    </>
  );
}

