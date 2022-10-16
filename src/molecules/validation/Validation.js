import React, { useContext } from 'react'
import { StateContext } from '../../utilities/Utilities'

export default function Validation(props) {

 const {setStep, errorStatus, errorMessage, setErrorMessage, setErrorStatus} = useContext(StateContext)

 const nextStep = (Render) => {
    if((errorStatus === 'false') && (errorMessage === '')){
        setStep(Render)
    }
 }

  const validateProfile = () =>{
    let emptyField = '';
    let inputField = false;
    switch ( emptyField || inputField) {

        case props.fields.firstName:
            setErrorMessage('First name cannot be blank')  
            setErrorStatus('true')
        break;
        case isNaN(props.fields.firstName):
            setErrorMessage('First name cannot be a number')  
            setErrorStatus('true')
        break;
        case props.fields.otherName:
            setErrorMessage('Other name cannot be blank') 
            setErrorStatus('true')
        break;
        case isNaN(props.fields.otherName):
            setErrorMessage('Other name cannot be a number') 
            setErrorStatus('true')
        break;
        case props.fields.lastName:
            setErrorMessage('Last name cannot be blank') 
            setErrorStatus('true')
        break;
        case isNaN(props.fields.lastName):
            setErrorMessage('Last name cannot be a number') 
            setErrorStatus('true')
        break;
        case props.fields.email:
            setErrorStatus('true')
            setErrorMessage('Email cannot be blank')
        break;
        case props.fields.phoneNumber:
            setErrorStatus(true)
            setErrorMessage('Phone number cannot be blank')
        break;
        default:
            setErrorStatus('false')
            nextStep(1)
        break;
    }
  }

  //validating tour
  const validateTour = () =>{
     //checking for empty fields
     const emptyField = '';
     const emptyDate = '00/00/0000';
     
     switch (emptyField || emptyDate || '0') {
         case props.fields.dateFrom:
             setErrorStatus('true')
             setErrorMessage('Start date cannot be blank')
         break;
         case props.fields.dateTo:
             setErrorStatus('true')
             setErrorMessage('End date cannot be blank')
         break;
         case props.fields.nights:
             setErrorStatus('true')
             setErrorMessage('Nights cannot be 0')
         break;
         default:
             setErrorStatus('false')
             nextStep(2);
         break;
     }
  }


  return (
        <>
            {(props.type === 'profile') && validateProfile()}
            {(props.type === 'tour') && validateTour()}
        </>
  )
}
/**
 * 
 *const {children, setAge} = useContext(StateContext);
  
  const ageNumber = ['0+', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']
  
  //1 child
  if(children.length <== 1){
    <select onClick={(e) => setAge(e.target.value)} required>
        {ageNumber.map((ages, index)=>(
            <option key={index} value={ages}>{ages}</option>
        ))}
    </select>
  }

  //2 children
  if(children.length === 2){
    <select onClick={(e) => setAge(e.target.value)} required>
        {ageNumber.map((ages, index)=>(
            <option key={index} value={ages}>{ages}</option>
        ))}
    </select>
    <select onClick={(e) => setAge(e.target.value)} required>
        {ageNumber.map((ages, index)=>(
            <option key={index} value={ages}>{ages}</option>
        ))}
    </select>
  }

  //3 children
  if(children.length === 3){
    <select onClick={(e) => setAge(e.target.value)} required>
        {ageNumber.map((ages, index)=>(
            <option key={index} value={ages}>{ages}</option>
        ))}
    </select>
    <select onClick={(e) => setAge(e.target.value)} required>
        {ageNumber.map((ages, index)=>(
            <option key={index} value={ages}>{ages}</option>
        ))}
    </select>
    <select onClick={(e) => setAge(e.target.value)} required>
        {ageNumber.map((ages, index)=>(
            <option key={index} value={ages}>{ages}</option>
        ))}
    </select>
  }

  //4 children
  if(children.length === 4){
        <select onClick={(e) => setAge(e.target.value)} required>
            {ageNumber.map((ages, index)=>(
                <option key={index} value={ages}>{ages}</option>
            ))}
        </select>
        <select onClick={(e) => setAge(e.target.value)} required>
            {ageNumber.map((ages, index)=>(
                <option key={index} value={ages}>{ages}</option>
            ))}
        </select>
        <select onClick={(e) => setAge(e.target.value)} required>
            {ageNumber.map((ages, index)=>(
                <option key={index} value={ages}>{ages}</option>
            ))}
        </select>
        <select onClick={(e) => setAge(e.target.value)} required>
            {ageNumber.map((ages, index)=>(
                <option key={index} value={ages}>{ages}</option>
            ))}
        </select>
    }

    //5 children
    if(children.length === 5){
        <select onClick={(e) => setAge(e.target.value)} required>
            {ageNumber.map((ages, index)=>(
                <option key={index} value={ages}>{ages}</option>
            ))}
        </select>
        <select onClick={(e) => setAge(e.target.value)} required>
            {ageNumber.map((ages, index)=>(
                <option key={index} value={ages}>{ages}</option>
            ))}
        </select>
        <select onClick={(e) => setAge(e.target.value)} required>
            {ageNumber.map((ages, index)=>(
                <option key={index} value={ages}>{ages}</option>
            ))}
        </select>
        <select onClick={(e) => setAge(e.target.value)} required>
            {ageNumber.map((ages, index)=>(
                <option key={index} value={ages}>{ages}</option>
            ))}
        </select>
        <select onClick={(e) => setAge(e.target.value)} required>
            {ageNumber.map((ages, index)=>(
                <option key={index} value={ages}>{ages}</option>
            ))}
        </select>
    }

    //6 children
    if(children.length === 6){
        <select onClick={(e) => setAge(e.target.value)} required>
            {ageNumber.map((ages, index)=>(
                <option key={index} value={ages}>{ages}</option>
            ))}
        </select>
        <select onClick={(e) => setAge(e.target.value)} required>
            {ageNumber.map((ages, index)=>(
                <option key={index} value={ages}>{ages}</option>
            ))}
        </select>
        <select onClick={(e) => setAge(e.target.value)} required>
            {ageNumber.map((ages, index)=>(
                <option key={index} value={ages}>{ages}</option>
            ))}
        </select>
        <select onClick={(e) => setAge(e.target.value)} required>
            {ageNumber.map((ages, index)=>(
                <option key={index} value={ages}>{ages}</option>
            ))}
        </select>
        <select onClick={(e) => setAge(e.target.value)} required>
            {ageNumber.map((ages, index)=>(
                <option key={index} value={ages}>{ages}</option>
            ))}
        </select>
        <select onClick={(e) => setAge(e.target.value)} required>
            {ageNumber.map((ages, index)=>(
                <option key={index} value={ages}>{ages}</option>
            ))}
        </select>
    }
 */