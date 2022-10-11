import React from 'react';
//organism
import { Container } from './style/Home.style';
import RegistrationForm from '../../organisms/registrationForm/RegistrationForm';
import Footer from '../../organisms/footer/Footer';
//import Activities from '../../organisms/activities/Activities';
//molecule
import Carousel from '../../molecules/carousel/Carousel';
//data
import {images} from '../../data/Data';
export default function Home() {
  return (
    <Container>

      <div className='formCarousel'>
        <Carousel imageData={images}/>
        <RegistrationForm/>
      </div>
      
      <Footer/>

    </Container>
  )
}
