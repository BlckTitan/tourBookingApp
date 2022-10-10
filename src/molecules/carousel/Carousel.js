import React, { useEffect, useState } from 'react';
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
                    src={index === currentImg && image.imgSrc}
                    alt=''  
                />
            ))
        }
    </CarouselCard>
    </>
  )
}
/**
 * https://images.unsplash.com/photo-1500301111609-42f1aa6df72a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80
 * https://images.unsplash.com/photo-1523225918988-00624e6d8fee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2011&q=80
 * https://images.unsplash.com/photo-1517258922744-606330ad6639?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80
 * https://images.unsplash.com/photo-1633503640089-9e31cbb0d6cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80
 * https://images.unsplash.com/photo-1585870463953-cef577799a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80
 */