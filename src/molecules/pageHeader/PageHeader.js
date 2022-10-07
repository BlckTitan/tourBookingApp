import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './style/PageHeader.style';
//icons
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export default function PageHeader() {
  return (
    <Container>
        <div><Link to="/" className='text logo'>Page Logo</Link></div>
        <ul>
            <li><PaidOutlinedIcon className='icon'/><Link className='text'>Admin fees</Link></li>
            <li><SmsOutlinedIcon className='icon'/><Link className='text'>Language & Currency</Link></li> 
            <li><Link className='text name'>Account name</Link></li>
            <li><LogoutOutlinedIcon className='icon'/><Link className='text'>Log out</Link></li>
        </ul>
    </Container>
  )
}
