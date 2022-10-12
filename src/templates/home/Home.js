import React, { useContext } from 'react';
//style
import { Container } from './style/Home.style';
//organism
//import Activities from '../../organisms/activities/Activities';
//context
import { StateContext } from '../../utilities/Utilities';

export default function Home() {

  const {errorMessage, setErrorMessage} = useContext(StateContext);

  return (
    <Container>

    </Container>
  )
}
