import React from "react";
import CarouselIMG from "./CarouselBanner"
import api from "../../../services/api";
import Loading from "../others/Loading";

export default class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerImg: [],
      removeLoading: false
    };
  }

  componentDidUpdate() {
  
    }  
              
  componentDidMount() {
    api.get('/banner/show').then((res)=>{
      const result = res.data
      //console.log(result)
      if(result.err){
      }else{
        this.setState({removeLoading:true})
        this.setState({bannerImg : result.res})
        //console.log(this.state.bannerImg)
      }
      }).catch((err)=>{
      this.setState({removeLoading:true})
    })

  }

  render() {
    return (
      <>
      {!this.state.removeLoading && <Loading/>}
      {this.state.bannerImg !== undefined &&(
        <>
        <CarouselIMG objImg={this.state.bannerImg}/>
        </>
        )}
        
      </>
    );
  }
}



