import React, { useContext } from 'react';
//style
import { Container } from './style/Home.style';
import airplaneComp from './vids/airplaneCrossing.mp4'
import pier from './vids/woodenPier.mp4';
//organism
//import Activities from '../../organisms/activities/Activities';
//context
import { StateContext } from '../../utilities/Utilities';

export default function Home() {

  const {errorMessage, setErrorMessage} = useContext(StateContext);

  return (
    <Container>

      <div className='videoBg'>
        <video src={pier} autoPlay loop muted>
          <source src={airplaneComp} ></source>
          Your browser does not support this video
        </video>
      </div>

      <div className='textOverlay'>
        <h1>Enjoy a well deserved vacation trip.</h1>
        <p>
            Vacations will never be boring again. 
            You dream it, We make it happen.
            This is vacation redefined!
        </p>
      </div>

    </Container>
  )
}
