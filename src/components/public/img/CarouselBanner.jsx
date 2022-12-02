import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../../../styles/banner.css";
import {imagemURL} from "../../../services/variables"

 
export default function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);
  const banner = props.objImg
  //console.log(banner)
  
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      {banner.length !== 0 &&(
    <Carousel activeIndex={index} onSelect={handleSelect} touch={true}>
      {banner.map((item,i)=>{
      return(
      <Carousel.Item key={i}>
        <img
          className="d-block w-100-banner"
           src={imagemURL + item.IMG} 
          // src={ item.IMG} 
          
          alt="Imagem Banner"
          />
          <Carousel.Caption>
          <a
          className="btn-banner-link"
          variant="primary"
          href={item.LINK}>
          
          </a>

      </Carousel.Caption>

      </Carousel.Item>
          )
        })}
    </Carousel>
     )}
    </>
  );
} 


// sfawfw8//*/

