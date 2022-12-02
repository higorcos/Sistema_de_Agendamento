import { useState,useEffect } from "react";
import api from "../../../services/api";
import style from "../../../styles/module/officeDiary.module.css";
import Loading from "../others/Loading";
import Pagination from 'react-bootstrap/Pagination';



export default function OfficeDiary() {
    const [diary,setDiary] = useState(null)
    const [removeLoading, setRemoveLoading] = useState(false)
    const [count, setCount] = useState(0)
    //count que ver do banco de dados
    const [countDivision, setCountDivision] = useState(0)

    const [wordSearch, setWordSearch] = useState('')
    const [datafour, setDataFour]= useState("")
    const [dataLastFour, setDataLastFour]= useState("")


    const [boxApresentacao, setBoxApresentacao]= useState(true)
    const [boxExediente, setBoxExediente]= useState(false)
    

    useEffect(()=>{
        api.get(`/oficial/diary/show/all/${count}`).then((result)=>{
            const data = result.data.res
            if(data.err){
            console.log("erro")
            }else{
                setDataFour( data.filter((d)=> data.indexOf(d) < 1 ))
                setDataLastFour( data.filter((d)=> data.indexOf(d) > 1 ))
                  
                setDiary(data)

                setRemoveLoading(true)
                //var numberResultAll = result.data.maxCount
                var numberResultAll = 889
                if(numberResultAll%25 == 0){
                setCountDivision(numberResultAll/25) //25 select que o banco de dados retorna
                }else{
                  setCountDivision(( 1 +(numberResultAll/25)).toFixed(0)) //25 select que o banco de dados retorna
                }
            }
        }).catch((err)=>{
            console.log("erro")

        })
    },[])


    const dateRender = (dateReq) => {
      const date = new Date(dateReq);
    date.setDate(date.getDate() + 1);

      const formatDate =
        (date.getDate()+1) + "/" + monthDigit(date) + "/" + date.getFullYear();
    
      return formatDate;
    };
    const monthDigit = (dateReq) => {
      const dateString = dateReq.getMonth() + 1;
      if (dateString >= 10) {
        return dateString;
      } else {
        return "0" + dateString;
      }
    };
    const handleSubmit= (e) =>{
      e.preventDefault();
      setRemoveLoading(false)

      api.get(`/search/diary/${wordSearch}`).then((result)=>{
        const data = result.data.res
            if(data.err){
            console.log("erro")
            }else{
              setDiary(data)
              setRemoveLoading(true)

              //mudar no futuro 
              setCountDivision(0)

            }
      }).catch((err)=>{})
    }
    return (
        <>
        <br/>
        <br/>
        <div className="section-title rotes_pages">
        <h6> Início / Diário Oficial / Diário Oficial Eletrônico </h6>
        </div>
         <div className="section-title">
          <h5>
            <img
              className="icon-title"
              alt="notícias"
              src="/icons/seta-direita.svg"
            />
           Diário Oficial
          </h5>
          <div className="border"></div>
        </div>

        {/* <h6 className={style.divtxt}>Informações</h6>
        <section className={style.InforDiary}>
        <div onClick={()=>setBoxApresentacao(true)}>Apresentação</div>
        <div onClick={()=>setBoxExediente(true)}>Expediente</div>
        </section> */}

        {!removeLoading ? <Loading/>: (<>
          
          {/* <form className={style.form}>
          <input
              type="text"
              name="filter" 
              placeholder="Pesquisar"
              className={style.diaryForms}
              
              value={wordSearch}
              onChange={(e) => setWordSearch(e.target.value)}
            /> <img src="/icons/search.svg" onClick={(e)=>handleSubmit(e)} alt="logo buscar" className="svg-search-other"/></form>
           */}
          <h6 className={style.divtxt}>Última publicação</h6>
          <div className={style.diary}>
            {datafour != null && (<>
            {datafour.map((x, id) => (
                      
              <div className={style.item2} key={id}>
                <img className={style.img2} src={"/icons/arquivoDiario.svg"}></img>
                <a target="_blank"
                rel="noopener noreferrer"
                href={"http://www.transparenciadministrativa.com.br/portalimagem/"+x.CNPJ+'/'+x.ARQUIVO} className={style.link}>
                    <h6 className="">{x.NUMERO}°</h6><p className={style.txtTitleDiary}>Diário Oficial</p><p className={style.txtTitleDiary}>{dateRender(x.DATA)}</p><p className={style.txtTitleDiary}><b>Tipo: </b> {x.TIPO=="" ? <>Indefinido</>:<>{x.TIPO}</>}</p></a>
              </div>
            
                ))}
            </>)}
          </div>
          <h6 className={style.divtxt}>Outros</h6>
          <div className={style.diary}>
            {dataLastFour != null && (<>
            {dataLastFour.map((x, id) => (
                      
              <div className={style.item2} key={id}>
                <img className={style.img} src={"/icons/arquivoDiario.svg"}></img>
                <a target="_blank"
                rel="noopener noreferrer"
                href={"http://www.transparenciadministrativa.com.br/portalimagem/"+x.CNPJ+'/'+x.ARQUIVO} className={style.link}>
                    <h6 className="">{x.NUMERO}°</h6><p className={style.txtTitleDiary}>Diário Oficial</p><p className={style.txtTitleDiary}>{dateRender(x.DATA)}</p><p className={style.txtTitleDiary}><b>Tipo: </b> {x.TIPO=="" ? <>Indefinido</>:<>{x.TIPO}</>}</p></a>
              </div>
            
                ))}
            </>)}
          </div>
          <div >
              {/* <br/>
              {countDivision == 0 ? <></> : <>

              <Pagination>
              <Pagination.Prev />
              {countDivision > 5 && <>
               
              </>}
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />
               <Pagination.Item>{countDivision}</Pagination.Item>
              <Pagination.Next />
              </Pagination>
              
              </>} */}
              
      </div>
          
          {boxApresentacao && <>
          <div className={style.boxInforDiary}>
            <div className={style.title}>
              <h5>Apresentação</h5>
              <div className="plus_icon_icon" >
              <img src="/icons/close.svg" alt="sair" className="icon_close_plus" onClick={()=>setBoxApresentacao(false)}/>
              </div>
            </div>
            <div className={style.txt}>
            <p>
              O Diário Oficial é o mecanismo utilizado pela Administração Pública para a divulgação dos atos oficiais em todas as esferas governamentais, com o objetivo de cumprir com o princípio da Publicidade e a lei da Transparência, garantindo a população e demais colaboradores as informações completas sobre as ações dos Poderes Municipais.
              </p>
            </div>
          </div>
          </>}
          {boxExediente && <>
          <div className={style.boxInforDiary}>
          <div className={style.title}>
              <h5>Expediente</h5>
              <div className="plus_icon_icon" >
              <img src="/icons/close.svg" alt="sair" className="icon_close_plus" onClick={()=>setBoxExediente(false)}/>
              </div>
            </div>
            <div className={style.txt}>
            
              <h6>Periocidade</h6>
              <p>De segunda à sexta-feira, com exceção de sábados, domingos e feriados (em casos de publicações excepcionais, os sábados, domingos e feriados são considerados para publicações)</p>


              <h6>Acervo</h6>
              <p>As publicações estão disponibilizadas no link: 
              *DOMINIO NOVO + /diario-oficial/diario-oficial-eletronico</p>


              <h6>Endereço Completo</h6>
              <p>Praça José Sarney, nº 178 – Centro, Santa Helena/MA</p>
              <p>CEP: 65.208-000</p>
              <p>Telefone: (98) 3382-0957</p>
              <p>Email: gabinete.pref.sh@gmail.com</p>
              <p>Horário de funcionamento: de segunda à sexta-feira, das 08h00 às 13h00</p>


              <h6>Responsável</h6>
              <p>Evanildo Gilmar Moreira Sobrinho</p>
              <p>Ato de nomeação: Portaria nº 118/GAB/2022 de 15 de setembro de 2022</p>
            </div>
          </div>
          </>}
              </>
               
               )}
        </>
    )

    
}

