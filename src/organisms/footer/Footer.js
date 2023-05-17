import React from 'react';
//import { Link } from 'react-router-dom';
//styled-component
import { FooterStyle } from './style/Footer.style';
//icons
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
//logo
//import logo from '../../data/logo/LOGO-WLBT.png';


export default function Footer() {
  return (
    <FooterStyle>
        <div className='logo'>
          <span className='logo_text'>WLBT</span>
        </div>
        <div className='otherInfo'>
            <div className='socials'>
                <a target="blank" href="/#">
                  <InstagramIcon className='icon instagram'/>
                </a>
                <a target="blank" href="/#">
                  <FacebookOutlinedIcon className='icon facebook'/>
                </a>
                <a target="blank" href="/#">
                  <WhatsAppIcon className='icon whatsapp'/>
                </a>
            </div>
            <div className='info'>
                <p className='address'>
                  Ikeja, Lagos, Nigeria.
                </p>
            </div>
        </div>
    </FooterStyle>
  )
}
