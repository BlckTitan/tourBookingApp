import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
//styled-Components
import { Container } from './style/Menu.style';
//icons
import HomeIcon from '@mui/icons-material/Home';
//import BedroomParentOutlinedIcon from '@mui/icons-material/BedroomParentOutlined';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
//import AttractionsIcon from '@mui/icons-material/Attractions';
//import CarRentalIcon from '@mui/icons-material/CarRental';
//import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';

export default function Menu() {
  const location = useLocation();


  const [activeLink, setActiveLink] = useState(location.pathname)
  return (
    <Container>
        <ul>
            <li>
              <Link to="/" className={(activeLink === '/' || activeLink === 'active home') ? 'active home' :  'false'} onClick={()=>{setActiveLink('active home')}}>
                <HomeIcon className='icon'/>Home
              </Link>
            </li>
            <li>
              <Link to="/bookings" 
                className={(activeLink === '/bookings' || activeLink === 'active bookings') ? 'active bookings' :  'false'} onClick={()=>{setActiveLink('active bookings')}}>
                <BookOnlineIcon className='icon'/>Bookings
              </Link>
            </li>
        </ul>
    </Container>
  )
}