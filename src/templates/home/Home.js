import React from 'react';
//organism
import { Container } from './style/Home.style';
import TourInformation from '../../organisms/tourInformation/TourInformation';
import ProfileInformation from '../../organisms/profileInformation/ProfileInformation'
import Footer from '../../organisms/footer/Footer';
//import Activities from '../../organisms/activities/Activities';
//molecule
import Carousel from '../../molecules/carousel/Carousel';
//data
import {location, meal, images} from '../../data/Data';
export default function Home() {
  return (
    <Container>
      <Carousel imageData={images}/>
      <ProfileInformation/>
      <Footer/>
    </Container>
  )
}
