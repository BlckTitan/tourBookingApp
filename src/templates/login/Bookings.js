import React, { useContext, useEffect } from 'react';
//style
import { Container } from './style/Bookings.style';
//organism
import RegistrationForm from '../../organisms/registrationForm/RegistrationForm';
import Footer from '../../organisms/footer/Footer';
//import Activities from '../../organisms/activities/Activities';
//context
import { StateContext } from '../../utilities/Utilities';
//molecule
import Carousel from '../../molecules/carousel/Carousel';
//data
import {images} from '../../data/Data';

export default function Bookings() {
  
    const {errorMessage, setErrorMessage} = useContext(StateContext);

  useEffect(()=>{
    setTimeout(clearErrorMesssage, 5000)
  }, [errorMessage])

  const clearErrorMesssage = () =>{
      setErrorMessage('');
  }
  
  return (
    <Container>

      <div className='formCarousel'>
        <Carousel imageData={images}/>
        <div className='form'>
          <RegistrationForm/>
          {
            (errorMessage !== '') &&
            <div className='errorMessageBox'>
              {errorMessage}
            </div>
          }
        </div>
      </div>
      
      <Footer/>

    </Container>
  )
}
