import React from 'react';
//molecules
import PageHeader from '../../molecules/pageHeader/PageHeader';
import Menu from '../../molecules/menu/Menu';
//styled-component
import { Nav } from './style/Navigation.style';

export default function Navigation() {
  return (
    <Nav>
        <PageHeader/>
        <Menu/>
    </Nav>
  )
}
