import React from 'react';
import { Link } from 'react-router-dom';
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
  return (
    <Container>
        <ul>
            <li><Link to="/"><HomeIcon className='icon'/>Home</Link></li>
            <li><Link to="/bookings"><BookOnlineIcon className='icon'/>Bookings</Link></li>
        </ul>
    </Container>
  )
}