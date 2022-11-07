import React, { useEffect, useState, useRef } from 'react';
import styled from "styled-components"
import Slider, {Settings} from 'react-slick';

const Brands = () =>
{
   const defaultSettings: Settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
  };
  const [nav1, setNav1] = React.useState<any>();
    const [nav2, setNav2] =  React.useState();
    const slider1 = React.useRef();
    const slider2 = React.useRef();
  return (
    <Container>
      <Wrapper>
        <div>
        <h2>Auto Play</h2>
          <Slider 
            asNavFor={nav2}
            {...defaultSettings}
         ref={slider1 => setNav1(slider1)}>  
            <div><h1>1</h1></div>
            <div><h1>1</h1></div>
            <div><h1>1</h1></div>
            <div><h1>1</h1></div>
            <div><h1>1</h1></div>
            
        </Slider>
      </div>
      </Wrapper>
    </Container>
  )
}

export default Brands

const MySlick = styled.div`


`

const Wrapper = styled.div`
  width:1200px;
  height:100px;
  display:flex;
  flex-direction: column;
 align-items: center;
 overflow: hidden;


 

  
@media screen and (max-width: 600px) {
    width:100%
    height:auto;
    
    }
`

const Container = styled.div`
width:100%;
height:100px;

display:flex;
justify-content: center;
align-items: center;


@media screen and (max-width: 600px) {
    width:100%
    height:100px;
    
    }
`