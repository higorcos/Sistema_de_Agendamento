import "../../../styles/uniqueNews.css";
//import Slider from 'react-touch-drag-slider'
//import {Helmet} from "react-helmet";
//import  {  Helmet ,  HelmetProvider  }  from  'react-helmet-async' ;
import React from "react";
import api from "../../../services/api";
import CarouselIMG from "../img/CarouselIMG"
import Loading from "../others/Loading";
import {imagemURL, urlEmDeploy} from "../../../services/variables"
export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsLast: [],
      dataFormat: "",
      // UrlImg: [],
      renderLoading: true,
      multiImg: []
    };
  }

  componentDidUpdate() {
    const dateReq = this.state.newsLast[0].DATA_POST;
    const date = new Date(dateReq);
    date.setDate(date.getDate() + 1);
    const formatDate =
      date.getDate() + "/" + monthDigit(date) + "/" + date.getFullYear();
    //this.setState({data:formatDate})
    if (this.state.dataFormat === "") {
      this.setState({ dataFormat: formatDate });
    }

    function monthDigit(dateReq) {
      const dateString = dateReq.getMonth() + 1;
      if (dateString >= 10) {
        return dateString;
      } else {
        return "0" + dateString;
      }
    }    
}  
              
  componentDidMount() {
    api
      .post(`/news/unique/${this.props.idNoticias}`)
      .then((res) => {
        const result = res.data;
        if (result.err) {
          //this.setState({renderLoading: false});
        } else {
          //console.log(result);
          this.setState({ newsLast: result.res, renderLoading: false});
        }
      })
      .catch((err) => console.log("Ocorreu um erro, tente novamente ! DB") );
  }

  render() {
    return (
      <>
      {this.state.renderLoading ? <Loading/> : (<>
        {this.state.newsLast.map((news, i) => (
          <div className="card-unique-all" key={i}>

 {/*            < HelmetProvider > 
            <Helmet>
                                
            <title>{news.TITULO}</title>
                                       
           <meta property="fb:app_id" content="00"/>
            <meta property="og:title" content=''/>
            <meta property="og:description" content="Fique por dentro das informações"/>
            <meta property="og:type" content="article" />
            <meta property="og:url" content="www."/>
            <meta property="og:site_name" content="portal."/>
            <meta property="og:image" content={imagemURL + news.IMG}/>
                  
     
            </Helmet>
            </HelmetProvider> */}
            <div className="section-unique-title">
              <h2>
                <img
                  className="icon-title"
                  alt="notícias"
                  src="/icons/seta-direita.svg"
                />

                {news.TITULO}
              </h2>
            </div>
            <div>
              <div className="card-unique-news-data">
                <div className="card-info">
                <p>{this.state.dataFormat}</p>
                <div className="card-views-unique">
                  <p>{news.VISUALIZACAO}</p>
                  <img
                    alt="views"
                    src="/icons/views.svg"
                    className="icon-views icon-views-unique"
                  />
                </div>
                <div className="card-views-unique">
                  <p>{news.CATEGORIA}</p>
                 {/*  <img
                    alt="views"
                    src="/icons/views.svg"
                    className="icon-views icon-views-unique"
                  /> */}
                </div>
                </div>
                <div className="card-share-unique">
                 
                  <a
                    href={`https://api.whatsapp.com/send?text=${urlEmDeploy}/noticia/${news.ID}`}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      alt="views"
                      src="/icons/whatsapp.svg"
                      className="icon-share-unique"
                    />
                  </a>
                </div>
                
              </div>
              <hr className="hr-news-unique"></hr>
            </div>
            <div className="section-unique-news">
              <div className="cards-unique-news" key={i}>
                <div>
                  <img
                    alt="imagem da notícia"
                    src={news.IMG == 'logo.jpg' ? '/imagens/logo.jpg' : imagemURL + news.IMG }
                    className="card-unique-img"
                  />
                </div>
                <div className="card-unique-txt">
                  <div className="title-unique-body"></div>
                  <div
                    className="news-unique-body"
                    dangerouslySetInnerHTML={{ __html: news.CORPO_TEXTO }}
                  ></div>         
                </div>
              </div>
                <CarouselIMG img={news.MULTIPLE_IMG}/>
            </div>
          </div>
        ))}
        </>
        )}
      </>
    );
  }
}



