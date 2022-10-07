import React from 'react';
import { Link } from 'react-router-dom';
//styled-Components
import { Container } from './style/Menu.style';
//icons
import HomeIcon from '@mui/icons-material/Home';
import BedroomParentOutlinedIcon from '@mui/icons-material/BedroomParentOutlined';
import RowingIcon from '@mui/icons-material/Rowing';
import AttractionsIcon from '@mui/icons-material/Attractions';
import CarRentalIcon from '@mui/icons-material/CarRental';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';

export default function Menu() {
  return (
    <Container>
        <ul>
            <li><Link to="/"><HomeIcon className='icon'/>Home</Link></li>
            <li><Link to="/#"><RowingIcon className='icon'/>Activities</Link></li>
            <li><Link to="/#"><AirportShuttleIcon className='icon'/>Transfers</Link></li>
        </ul>
    </Container>
  )
}
/*
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
*/
/* 
<li><Link to="/#"><TextSnippetOutlinedIcon className='icon'/>Quotes</Link></li>
<li><Link to="/#"><NotificationsNoneIcon className='icon'/>Notifications</Link></li>
<li><Link to="/#"><FavoriteBorderOutlinedIcon className='icon'/>Favorites</Link></li>
<li><Link to="/#"><ReceiptLongOutlinedIcon className='icon'/>Bookings</Link></li>
<li><Link to="/#"><HelpOutlineOutlinedIcon className='icon'/>Support</Link></li>
*/
//<div><Link><AddShoppingCartOutlinedIcon className='icon'/>Cart</Link></div>