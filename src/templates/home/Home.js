import React from 'react';
import { Link } from 'react-router-dom';
//styled components
import { Container } from './style/Homestyle';
//icons
import BedroomParentOutlinedIcon from '@mui/icons-material/BedroomParentOutlined';
import RowingIcon from '@mui/icons-material/Rowing';
import AttractionsIcon from '@mui/icons-material/Attractions';
import CarRentalIcon from '@mui/icons-material/CarRental';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function Home() {
  return (
    <Container>
      <div className='bookBG'>
        <img src='https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'/>
        <form>
          <div className='country'>
            <label htmlFor='country'>Destination, zone or hotel name</label>
            <input type="text" id='country'/>
          </div>

         <div className='duration'>
          <label htmlFor="forDate">
            From
            <input type="date" id='forDate'/>
          </label>
          <label htmlFor='toDate'>
            To
            <input type="date" id='toDate'/>
          </label>
          <label>
            Nghts
            <select>
              <option>1</option>
              <option>2</option>
            </select>
          </label>
         </div>

         <div className='accomodation'>
           <label>
              Rooms
              <select>
                <option>1</option>
                <option>2</option>
              </select>
            </label>
            <label>
              Adults
              <select>
                <option>1</option>
                <option>2</option>
              </select>
            </label>
            <label>
              Children
              <select>
                <option>1</option>
                <option>2</option>
              </select>
            </label>
         </div>

         <div className='search'>
          <button>Search</button>
         </div>
        </form>
      </div>
      <div className='navigation'>
        <ul className='secondaryNav'>
          <li><Link to="/#"><BedroomParentOutlinedIcon className='icon'/>Accomodation</Link></li>
          <li><Link to="/#"><RowingIcon className='icon'/>Activities</Link></li>
          <li><Link to="/#" className='text'><AttractionsIcon className='icon'/>Theme parks</Link></li>
          <li><Link to="/#"><AirportShuttleIcon className='icon'/>Transfers</Link></li>
          <li><Link to="/#"><CarRentalIcon className='icon'/>Car rental</Link></li>
        </ul>
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
