import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {imagemURL} from "../../../services/variables"


export default function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);
  const img = props.img
  
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      {img[0] !== null &&(
    <Carousel activeIndex={index} onSelect={handleSelect} touch={true}>
      

     
      {img.map((item,i)=>{
return(

  
  <Carousel.Item key={i}>
        <img
          className="d-block w-100 w-100-newsImgs"
          src={imagemURL + item} 
          alt="First slide"
          />
    

      </Carousel.Item>
          )
        })}
    </Carousel>
     )}
    </>
  );
}

