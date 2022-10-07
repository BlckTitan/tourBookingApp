import React from 'react';
import { Link } from 'react-router-dom';
//styled components
import { Container } from './style/Homestyle';
import Accomodation from '../../organisms/accomodation/Accomodation';
//icons
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function Home() {
  return (
    <Container>
      <Accomodation/>
      <div className='body'>
        <div>
          Enjoy a well deserved vacation trip
        </div>
        <div></div>
      </div>
      <footer>
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
            <Link to="/#">Home</Link>
            <Link to="/#">About Us</Link>
            <Link to="/#">Terms and Conditions</Link>
            <Link to="/#">Booking</Link>
          </div>
        </div>
      </footer>
    </Container>
  )
}
/**
 * https://images.unsplash.com/photo-1500301111609-42f1aa6df72a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80
 * https://images.unsplash.com/photo-1523225918988-00624e6d8fee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2011&q=80
 * https://images.unsplash.com/photo-1517258922744-606330ad6639?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80
 * https://images.unsplash.com/photo-1633503640089-9e31cbb0d6cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80
 * https://images.unsplash.com/photo-1585870463953-cef577799a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80
 */