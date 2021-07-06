import React from "react";
import './App.css';

import Carousel from 'react-bootstrap/Carousel';

const Maincontent = () => {
  return (
      <div className="bgr">
        <div className ="container">
          <div className ="row">
            <div className ="col">
            <Carousel>
  <Carousel.Item>
    <div  className="imgg">
    <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTONJGeSQ_qYH_LITjw6FZonegFc5Rdaiemxg&usqp=CAU"
      alt="First slide"
    /></div>
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <div className="imgg">
    <img 
      className="d-block w-100"
      src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p206x206/203497848_372947087587824_7242029369567176390_n.png?_nc_cat=106&ccb=1-3&_nc_sid=aee45a&_nc_ohc=y3oZxBrLDysAX9WMeAN&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=30&oh=450c270d5e9943dbf4687e4e1c1956f4&oe=60D84FF2"
      alt="Second slide"
    /></div>
    <Carousel.Caption>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <div className="imgg">
    <img 
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbqyAHiI17dq1o70RRv5khwi-1fr4jw1oQtg&usqp=CAU"
      alt="Third slide"
    /></div>
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

  
            </div>
          
            <div className="cc"><h1>Nouveautés</h1>
              <h3>/La ligne 4 du métro : Travaux de réfection de la voie ferrée au niveau de Bouchoucha - Bardo</h3>
              <h3>En raison des travaux de réfection de la voie au niveau de la station du métro n°4 la circulation automobile sera modifiée à partir de mercredi 07 avril 2021 à 20h00 jusqu’à lundi 26 avril 2021 à 05h0</h3>
            </div>
            
             
</div>
          </div>
        </div>
      
      
      
  );
}

export default Maincontent;