import React from 'react';
import { Link } from 'react-router-dom';
//styled-component
import { FooterStyle } from './style/Footer.style';
//icons
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PinterestIcon from '@mui/icons-material/Pinterest';


export default function Footer() {
  return (
    <FooterStyle>
        <div className='siteTitle'>WLBT</div>
        <div className='otherInfo'>
            <div className='socials'>
                <Link to="/#"><InstagramIcon className='icon'/></Link>
                <Link to="/#"><FacebookOutlinedIcon className='icon'/></Link>
                <Link to="/#"><TwitterIcon className='icon'/></Link>
                <Link to="/#"><PinterestIcon className='icon'/></Link>
                <Link to="/#"><WhatsAppIcon className='icon'/></Link>
            </div>
            <div className='info'>
                <Link to="/">Home</Link>
                <Link to="/bookings">Bookings</Link>
                <Link to="/#">Terms and Conditions</Link>
            </div>
        </div>
    </FooterStyle>
  )
}
