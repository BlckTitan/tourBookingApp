import React, { useContext, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
//style
import { Container } from './style/Home.style';
//videos
import airplaneComp from './vids/airplaneCrossing.mp4'
import pier from './vids/woodenPier.mp4';
//audio
import audioFile from './audio/soul.mp3';
//context
import { StateContext } from '../../utilities/Utilities';
//icons
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
//import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
//import PinterestIcon from '@mui/icons-material/Pinterest';

export default function Home() {
  
  const location = useLocation();
  const {setActiveLink} = useContext(StateContext)
  useEffect(()=>{
    setActiveLink(location.pathname)
  }, [location, setActiveLink])

  return (
    <Container>

      <div className='videoBg'>

        <video src={pier} autoPlay loop>
          <source src={airplaneComp} ></source>
          Your browser does not support this video
        </video>

        <audio src={audioFile} autoPlay loop>
          <source src={audioFile} type="audio/mpeg"/>
          Your browser does not support the audio.
        </audio>

      </div>

      <div className='textOverlay'>
        <h1>Enjoy a well deserved vacation.</h1>
        <p>
            Vacations will never be boring again. 
            You dream it, We make it happen.
            This is vacation redefined!
        </p>

      <div className='callToAction'>

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
        
          <Link to='/bookings'
            onClick={()=>{setActiveLink('active bookings')}}
          >
            <button>Book Now</button>
          </Link>
      </div>

      </div>

    </Container>
  )
}
