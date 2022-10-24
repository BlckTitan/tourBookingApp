import React from 'react';
//import React, { useEffect, useContext} from 'react';
//import { useNavigate } from 'react-router-dom';

//style
import { SuccessStyle } from './style/Success.style';
//import {StateContext} from '../../utilities/Utilities';

//icon
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

export default function Success() {
    /*const {setStep} = useContext(StateContext);
    const navigate = useNavigate();
   
    const timeOut = () =>{
      navigate('/')
    }

    setTimeout(timeOut(), 3000)
        */
  return (
    <SuccessStyle>
        <h1>Your booking was created Successfully!</h1>
        <CheckCircleOutlineIcon className='icon'/>
    </SuccessStyle>
  )
}
