import { useContext} from 'react'
//context
import { StateContext } from '../../utilities/Utilities';

export default function Validation(){
    const {
        tours, dateFrom, dateTo, nights, step, setStep, firstName, lastName,
         otherName, email, phoneNumber, setErrorMessage, setErrorStatus
    } = useContext(StateContext);


    //checking for empty fields
    const emptyField = '';
    const emptyDate = '00/00/0000';
    
    switch (emptyField || emptyDate || '0') {
        case dateFrom:
            setErrorStatus(true)
            setErrorMessage('From date cannot be blank')
        break;
        case dateTo:
            setErrorStatus(true)
            setErrorMessage('To date cannot be blank')
        break;
        case nights:
            setErrorStatus(true)
            setErrorMessage('Nights cannot be 0')
        break;
        case tours:
            setErrorStatus(true)
            setErrorMessage('Tour cannot be blank')
        break;
        case firstName:
            setErrorStatus(true)
            setErrorMessage('First name cannot be blank')
        break;
        case otherName:
            setErrorStatus(true)
            setErrorMessage('Other name cannot be blank')
        break;
        case lastName:
            setErrorStatus(true)
            setErrorMessage('Last name cannot be blank')
        break;
        case email:
            setErrorStatus(true)
            setErrorMessage('Email cannot be blank')
        break;
        case phoneNumber:
            return( setErrorStatus(true),
            setErrorMessage('Phone number cannot be blank'));
        break;
        default:
            setErrorStatus(false)
            setStep(step+1)
        break;
    }
    
}
/**
 * //checking for number in input fields
    if(!isNaN(firstName)) {
        setErrorStatus(true)
        setErrorMessage('First name cannot be a number')
    }
 *  case firstName:
        setErrorStatus(true)
        setErrorMessage('First name cannot be a number')
    break;
    case otherName:
        setErrorStatus(true)
        setErrorMessage('Other name cannot be a number')
    break;
    case lastName:
        setErrorStatus(true)
        setErrorMessage('Last name cannot be a number')
    break;
    case email:
        setErrorStatus(true)
        setErrorMessage('Email cannot be number')
    break;    
    default:
        setErrorStatus(false)
        setStep(step+1)
    break;



    if ((firstName === emptyField)){
        setErrorMessage('First name cannot be blank')
        setErrorStatus(true)
    } else  if((lastName === emptyField)){
        setErrorMessage('Other name cannot be blank')  
        setErrorStatus(true)
    }else if((otherName === emptyField)){
        setErrorMessage('Last name cannot be blank')  
        setErrorStatus(true)
    }else if(email === emptyField){
        setErrorStatus(true)
        setErrorMessage('Email cannot be blank')
    }else if((phoneNumber === emptyField)){
        setErrorStatus(true)
        setErrorMessage('Phone number cannot be blank')
    } else{
        setErrorStatus(false)
    }

    if(errorStatus === false && errorMessage === ''){
        setStep(1)
    }

 */