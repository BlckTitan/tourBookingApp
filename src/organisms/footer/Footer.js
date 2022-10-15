import React from 'react';
import { Link } from 'react-router-dom';
//styled-component
import { FooterStyle } from './style/Footer.style';
//icons
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
//import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
//import PinterestIcon from '@mui/icons-material/Pinterest';
//logo
import logo from '../../data/logo/LOGO-WLBT.png';


export default function Footer() {
  return (
    <FooterStyle>
        <div className='logo'>
          <img src={logo} alt=''/>
        </div>
        <div className='otherInfo'>
            <div className='socials'>
                <a target="blank" href="https://instagram.com/worldlinkbesttravelsandtours">
                  <InstagramIcon className='icon'/>
                </a>
                <a target="blank" href="https://www.facebook.com/worldlinkbesttravelandtours">
                  <FacebookOutlinedIcon className='icon'/>
                </a>
                <a target="blank" href="https://wa.me/message/KYRAGWC3FD6ND1">
                  <WhatsAppIcon className='icon'/>
                </a>
            </div>
            <div className='info'>
                <p>
                  1, Olaniyan Drive, Off Etiebets Place, 
                  Off Mobolaji Bank Anthony Way, G.R.A Ikeja, Lagos, Nigeria.
                </p>
            </div>
        </div>
    </FooterStyle>
  )
}
