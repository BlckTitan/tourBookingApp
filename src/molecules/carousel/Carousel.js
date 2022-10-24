import React, { useEffect, useState } from 'react';
//import img1 from './img/img1.jpg';
//import img2 from './img/img3.jpg';
import img3 from './img/img5.jpg';
//style
import {CarouselImg, CarouselCard} from './style/Carousel.style';

export default function Carousel({imageData}) {
    const [currentImg, setCurrentImg] = useState(0);

    useEffect(()=>{
        setTimeout(carouselSlide, 5000)
    })

    const carouselSlide = () =>{
        setCurrentImg(currentImg + 1)
        if(currentImg > 2){
            setCurrentImg(0)
        }
    }

  return (
    
    <>
        <CarouselCard>
            {
                imageData.map((image, index) => (
                    
                    <CarouselImg key={index} 
                        //src={(index === currentImg) ? image.imgSrc : img3}
                        src={image.imgSrc}
                        alt=''  
                    />
                ))
            }
        </CarouselCard>
    </>
    
  )
}