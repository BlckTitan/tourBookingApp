import React from 'react';

//style
import { SuccessStyle } from './style/Success.style';
//import {StateContext} from '../../utilities/Utilities';
//icon
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function Success() {
//    const {setStep} = useContext(StateContext);
/*    
    const timeOut = () =>{
        setStep(0)
    }
    useEffect(()=>{
        setTimeout(timeOut(), 600000)
    }, [])
*/
  return (
    <SuccessStyle>
        <h1>Your booking was created Successfully!</h1>
        <CheckCircleOutlineIcon className='icon'/>
    </SuccessStyle>
  )
}
