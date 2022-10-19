import React from 'react';
//style
import { Container } from './style/NoPage.style';

//icon
import CloudOffIcon from '@mui/icons-material/CloudOff';

export default function NoPage() {
  return (
    <Container>
      <CloudOffIcon className='icon'/>
      <div className='text'>Oops something happened..</div>
    </Container>
  )
}
