import { useEffect, useState } from "react";
import api from "../../../services/api";
import "../../../styles/teste.css";
import Loading from "../others/Loading";

export default function SearchDatabase(prop) {
  const [wordSearch,setWordSearch ] = useState(prop.search.wordSearch);
  const databaseSearch = prop.search.database
  const [result, setResult] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false); //loading

  //console.log(prop)
  useEffect(()=>{
    
  
},[result])
  useEffect(() => {
    setRemoveLoading(false);
    setResult([]);

      switch (databaseSearch) {
      case 'noticias' :
    api
      .get(`/search/news/${wordSearch}`)
      .then((res) => {
        if (res.data.err) {
          //erro
        } else {
        setRemoveLoading(true);
          setResult(res.data.res);
          console.log(res.data.res);

        }
      })
      .catch((err) => {//não teve responta da api
      });
      break;
    case 'diario':
        api
      .get(`/search/diary/${wordSearch}`)
      .then((res) => {
        if (res.data.err) {
          //erro
        } else {
          setResult(res.data.res);
          console.log(res.data.res);

          setRemoveLoading(true);
        }
      })
      .catch((err) => {//não teve responta da api
      });
    break;
    case 'Legislação':
        api
      .get(`/search/legis/${wordSearch}`)
      .then((res) => {
        if (res.data.err) {
          //erro
        } else {
          setResult(res.data.res);
          console.log(res.data.res);

          setRemoveLoading(true);
        }
      })
      .catch((err) => {//não teve responta da api
      });
    break;
    case 'sacop':
        api
      .get(`/search/sacop/${wordSearch}`)
      .then((res) => {
        if (res.data.err) {
          //erro
        } else {
          setResult(res.data.res);
          console.log(res.data.res);

          setRemoveLoading(true);
        }
      })
      .catch((err) => {//não teve responta da api
      });
    break;
    case 'licitações':
        api
      .get(`/search/licit/${wordSearch}`)
      .then((res) => {
        if (res.data.err) {
          //erro
        } else {
          setResult(res.data.res);
          console.log(res.data.res);

          setRemoveLoading(true);
        }
      })
      .catch((err) => {//não teve responta da api
      });
    break;
    
    // No Default
    }
    
  }, [wordSearch]);



const dateRender = (dateReq) => {
    const date = new Date(dateReq);
    date.setDate(date.getDate() + 1);
    const formatDate =
      date.getDate() + "/" + monthDigit(date) + "/" + date.getFullYear();
  
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
  const switchResult = ()=>{
    switch (databaseSearch) {
        case 'noticias' :
            return(
            <>
              <div className="list-result">
                {result.map((x, id) => (
      
                  <div className="card-result" key={id}>
                    <div className="line-div"></div>
                    <a
                    target="_blank"
                    rel="noopener noreferrer"
                      href={"/noticia/"+ x.ID} className="link-news-card">
                        <h6 className="result-txt"><span>{x.TITULO}</span> <span>{dateRender(x.DATA)}</span></h6>
                          <p className="result-txt">{x.SEM_TAG}</p>
                    </a>
                  </div>
                ))}
              </div>
            </>
            )
        break;
        case 'diario':
            return(
            <>
            
              <div className="list-result">
                {result.map((x, id) => (
      
                  <div className="card-result" key={id}>
                    <div className="line-div"></div>
                    <a
                    target="_blank"
                    rel="noopener noreferrer"
                      href={"http://www.transparenciadministrativa.com.br/portalimagem/"+x.CNPJ+'/'+x.ARQUIVO} className="link-news-card">
                        <h6 className="result-txt"><span>{x.NUMERO} - Diário Oficial</span><span>{dateRender(x.DATA)}</span></h6>
                          {/* <p className="result-txt">{x.OBJETO_SACOP}</p> */}
                    </a>
                  </div>
                ))}
              </div>
            </>
            )
        break;
        case 'Legislação':
            return(
            <>
            
              <div className="list-result">
                {result.map((x, id) => (
      
                  <div className="card-result" key={id}>
                    <div className="line-div"></div>
                    <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"http://www.transparenciadministrativa.com.br/portalimagem/"+x.CNPJ+'/'+x.ARQUIVO} 
                    className="link-news-card">
                        <h6 className="result-txt">{x.TIPO}</h6>                      
                          <p className="result-txt">{x.LEI}</p>
                    </a>
                  </div>
                ))}
              </div>
            </>
            )
        break;
        case 'sacop':
            return(
            <>
               
              
                  <div className="list-result">
                    {result.map((x, id) => (
          
                      <div className="card-result" key={id}>
                        <div className="line-div"></div>
                        <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={"http://www.transparenciadministrativa.com.br/portalimagem/"+x.CNPJ_PORTAL+'/'+x.NOME_ARQUIVO} 
                        className="link-news-card">
                           <h6 className="result-txt"><span>{x.NUMERO_PROCESSO} - {x.ASSUNTO_DOC}</span> <span>{dateRender(x.DATA)}</span></h6>
                              <p className="result-txt">{x.OBJETO_SACOP}</p>
                        </a>
                      </div>
                    ))}
                  </div>
            </>
            )
        break;
        case 'licitações':
            return(
                <>
               
                  <div className="list-result">
                    {result.map((x, id) => (
          
                      <div className="card-result" key={id}>
                        <div className="line-div"></div>
                        <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={"http://www.transparenciadministrativa.com.br/portalimagem/"+x.CNPJ+'/'+x.ARQUIVO} 
                        className="link-news-card">
                           <h6 className="result-txt"><span>{x.NUMERO} - {x.FASE_LICITACAO} - {x.MODALIDADE_LICITACAO}</span>  <span>{dateRender(x.DATA)}</span></h6>                      
                              <p className="result-txt">{x.OBJETO_DESCRICAO}</p>
                        </a>
                      </div>
                    ))}
                  </div>
                </>
            )
        break;
       
       // No Default
    }
  }
  return (
    <>
      {!removeLoading ? <Loading /> :(
        <>
          {result.length !== 0 ? (<>{switchResult()}</>): <>
          <div className='none-result none-result-footer'>
            <p>Nenhum resultado encontrado</p>
        </div>
          </>}
      </>
      )
      }
      
    </>
  );
}


