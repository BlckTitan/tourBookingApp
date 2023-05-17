import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Container } from './style/PageHeader.style';
//icon
import MenuIcon from '@mui/icons-material/Menu';
//logo
//import logo from '../../data/logo/LOGO-WLBT.png'
import { StateContext } from '../../utilities/Utilities';
export default function PageHeader() {

  const {sidebar, setSidebar} = useContext(StateContext);

  return (
    <Container>
        <div className='logo'>
          <span onClick={
            (sidebar === 'hide') ? ()=>setSidebar('show') : ()=>setSidebar('hide')
            }>
              <MenuIcon className='icon burger'/>
          </span>
          <Link to="/" className='text logo'>
            <span className='logo_text'>WLBT</span>
          </Link>
        </div>
    </Container>
  )
}
