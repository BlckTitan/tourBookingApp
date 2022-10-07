import React from 'react';
import { Link } from 'react-router-dom';
//styled-Components
import { Container } from './style/Menu.style';
//icons
import HomeIcon from '@mui/icons-material/Home';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

export default function Menu() {
  return (
    <Container>
        <ul>
            <li>
              <Link to="/"><HomeIcon className='icon'/>Home</Link>
             
            </li>
            <li><Link to="/#"><TextSnippetOutlinedIcon className='icon'/>Quotes</Link></li>
            <li><Link to="/#"><NotificationsNoneIcon className='icon'/>Notifications</Link></li>
            <li><Link to="/#"><FavoriteBorderOutlinedIcon className='icon'/>Favorites</Link></li>
            <li><Link to="/#"><ReceiptLongOutlinedIcon className='icon'/>Bookings</Link></li>
            <li><Link to="/#"><HelpOutlineOutlinedIcon className='icon'/>Support</Link></li>
        </ul>
        <div><Link><AddShoppingCartOutlinedIcon className='icon'/>Cart</Link></div>
    </Container>
  )
}
/* 
<DropDown>
  <li><TextSnippetOutlinedIcon className='icon'/><Link to="/#">Accomodation</Link></li>
  <li><NotificationsNoneIcon className='icon'/><Link to="/#">Activities</Link></li>
  <li><FavoriteBorderOutlinedIcon className='icon'/><Link to="/#" className='text'>Theme parks</Link></li>
  <li><ReceiptLongOutlinedIcon className='icon'/><Link to="/#">Transfers</Link></li>
  <li><HelpOutlineOutlinedIcon className='icon'/><Link to="/#">Car rental</Link></li>
</DropDown>
*/