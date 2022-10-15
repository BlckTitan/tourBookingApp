import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './style/PageHeader.style';
//logo
import logo from '../../data/logo/LOGO-WLBT.png'
export default function PageHeader() {
  return (
    <Container>
        <div className='logo'>
          <Link to="/" className='text logo'>
            <img src={logo} alt=''/>
          </Link>
        </div>
    </Container>
  )
}
