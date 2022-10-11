import React, { useEffect, useState } from 'react';
import img3 from './img/img3.jpg';
//style
import {CarouselImg, CarouselCard} from './style/Carousel.style';

export default function Carousel({imageData}) {
  const [currentImg, setCurrentImg] = useState(0);
    useEffect(()=>{
        setTimeout(carouselSlide, 60000)
        
    })
    const carouselSlide = () =>{
        setCurrentImg(currentImg + 1)
        if(currentImg > 4){
            setCurrentImg(0)
        }
    }
  return (
    
    <>
    <CarouselCard>
        {
            imageData.map((image, index) => (
                
                <CarouselImg key={index} 
                    src={(index === currentImg) ? image.imgSrc : img3}
                    alt=''  
                />
            ))
        }
    </CarouselCard>
    </>
  )
}