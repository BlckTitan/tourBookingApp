import React from 'react';
import { Outlet} from 'react-router-dom';
//organism
import Navigation from '../../organisms/navigation/Navigation';
//styled-components
import { Container } from './style/Layout.style';


export default function Layout() {
  return (
    <Container>
        <Navigation/>
        <main>
          <Outlet/>
        </main>
    </Container>
  )
}
