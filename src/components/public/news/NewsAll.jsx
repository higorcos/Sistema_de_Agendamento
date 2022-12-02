import "../../../styles/newsAll.css";
import React from "react";
import api from '../../../services/api'
import Loading from "../others/Loading";

import {imagemURL} from "../../../services/variables"


export default class newsAll extends React.Component{
  state={
    news:[],
    removeLoading: false
  }
  componentDidMount(){
  
    api.get('/news').then(res=>{

      const result = res.data
      if(result.err){
       //alert('Ocorreu um erro, tente novamente !')
      }else{
        this.setState({news:result.res, removeLoading:true})
      }

      }).catch((err) =>{} )
      //alert('Ocorreu um erro, tente novamente ! DB'))
      }  
      
    render(){

      return (
        <>
<section>
<div className="section-title rotes_pages">
       <h6> Início / Notícias</h6>
      </div>
<div className="section-title">
<h5>
<img
className="icon-title"
alt="Links Rápidos"
src="/icons/seta-direita.svg"
/>
Notícias
</h5>
<div className="border"></div>
</div>
 {!this.state.removeLoading && <Loading/> }

<div className="flex-news-all">
       {  this.state.news.map((news,i) =>
 
<div className="box-news-all" key={i}>
<a className="link-news-card" href={"/noticia/"+news.ID}>
<div className="card-news-all">
    <div className="card-news-all-img">
    <img alt="imagem da notícia" src={news.IMG == 'logo.jpg' ? '/imagens/logo.jpg' : imagemURL + news.IMG } className='img-news-all' />
  </div>
  <div className="card-news-all-txt card-txt2 ">
    <div className="title-body">
      <h6>{news.TITULO}</h6>
    </div>
    <div className="news-body2" dangerouslySetInnerHTML={{__html: news.CORPO_TEXTO}}>
    </div>
   
  <div className="txt-views link-news-card">
                  <div className="card-bottom">
                    <div className="category-nick-all">
                    <p>{news.CATEGORIA}</p>
                    </div>

                    <div className="card-views-all">
                    <p>{news.VISUALIZACAO}</p>
                      <img
                        alt="views"
                        src="/icons/views.svg"
                        className="icon-views"
                      />
                    </div>
                  </div>
                  </div>
  </div>
</div>
</a>
</div>





       )} 
       </div>
</section>
    </>
  );
}
}
