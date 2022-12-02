import "../../../styles/news.css";
import React from "react";
import api from "../../../services/api";
import {imagemURL} from "../../../services/variables"
import Loading from "../others/Loading";

export default class News extends React.Component {
  state = {
    newsLast: [],
    removeLoading: false
  };
  componentDidMount() {
    api
      .get("/searchLast/8")
      .then((res) => {
        const result = res.data;
        if (result.err) {
        } else {
          //console.log(result);
          this.setState({ newsLast: result.res, removeLoading:true });
          
        }
      })
      .catch((err) => /* alert("Ocorreu um erro, tente novamente ! DB") */console.log('Ocorreu um erro, tente novamente'));
  }  

  render() {
    return (
      <>
      {/* Rota Principal */}
        <div className="section-title">
          <h5>
            <img
              className="icon-title"
              alt="notícias"
              src="/icons/seta-direita.svg"
            />
           Notícias
          </h5>
          <div className="border"></div>
        </div>

        {!this.state.removeLoading && <Loading/> }

        <section className="section-container fundo_svg">
          <div className="container-news">
          {this.state.newsLast != undefined ? (<>
          
            {this.state.newsLast.map((news, i) => (
              <div className="container-card-news " key={i}>
                <a
                  className="card-link-news-row link-news-card"
                  href={"/noticia/" + news.ID}
                >
                  <div className="div-card-img" >
                    <img
                      alt="imagem da notícia"
                      src={news.IMG == 'logo.jpg' ? '/imagens/logo.jpg' : imagemURL + news.IMG }
                      className="card-img"
                    />
                  </div>
              <div className="card-link-news-row" >

                  <div className="card-txt">
                    <h6>{news.TITULO}</h6>
                  </div>
                  <div className="news-body">
                     <p >{news.CORPO_TEXTO}</p> 
                    
                  </div>
                  <div className="txt-views link-news-card">
                    <div className="category-nick">
                    <p>{news.CATEGORIA}</p>
                    </div>

                    <div className="card-views">
                    <p>{news.VISUALIZACAO}</p>
                      <img
                        alt="views"
                        src="/icons/views.svg"
                        className="icon-views"
                      />
                    </div>
                  </div>
                  </div>
                </a>
              </div>
            ))}</>) : (<></>)}
          </div>
        </section>
      </>
    );
  }
}
