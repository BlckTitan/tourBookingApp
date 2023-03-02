import React, { useContext, useEffect }from 'react';
//style
import {Form} from './style/RegistrationForm.style';
//organisms
import TourInformation from '../tourInformation/TourInformation';
import ProfileInformation from '../profileInformation/ProfileInformation';
import Confirm from '../confirm/Confirm';
import Success from '../success/Success';
//useContext
import { StateContext } from '../../utilities/Utilities';

export default function RegistrationForm() {
    const {
        firstName, lastName, otherName, status, gender, email, phoneNumber, transfers, ticket,
        tours, mealPlan, rooms, adults, children, country, dateFrom, dateTo, nights, setNights, step, setStep,
        errorStatus, errorMessage, age, rating, setErrorStatus, setErrorMessage, confirmed, setConfirmed
    } = useContext(StateContext)

    useEffect(()=>{
        setNights(result)
        setErrorStatus('false')
        setConfirmed('false')
    }, [dateFrom, dateTo, errorStatus, confirmed])

    const formState = {
        firstName, lastName, otherName, status, gender, email, phoneNumber, transfers, tours, 
        mealPlan, rooms, adults, children, country, dateFrom, dateTo, nights, age, ticket,
        rating
    }

    //number of nights count
    const dateStart = new Date(dateFrom);
    const dateEnd = new Date(dateTo);
    const currentTime = (dateEnd - dateStart);
    if((Math.sign(currentTime) === -1)){
        setErrorStatus('true');
        setErrorMessage('Nights can not be a negative number');
    }else{
        var result = Math.ceil(currentTime / (1000 * 60 * 60 * 24));
    }
    
    const submitHandler = (e) =>{
        
        e.preventDefault();

        const config = {
          SecureToken : "b623a7bc-abfe-4f39-9aff-a5d8070b92b3",
          To : 'dorshman406@gmail.com',
          From : `${formState.email}`,
          Subject : `NEW TOUR BOOKING REQUEST`,
          Body : `
            First Name : ${formState.firstName}\n<br/>
            Other Name : ${formState.otherName}\n<br/>
            Last Name : ${formState.lastName}\n<br/>
            Marital Status : ${status}\n<br/>
            Gender : ${formState.gender}\n<br/>
            Email : ${formState.email}\n<br/>
            Phone Number : ${formState.phoneNumber}\n<br/>
            Destination : ${formState.country}\n<br/>
            Date From : ${formState.dateFrom}\n<br/>
            Date To : ${formState.dateTo}\n<br/>
            Nights : ${result}\n<br/>
            Rooms : ${formState.rooms}\n<br/>
            Rating : ${formState.rating}\n<br/>
            Adults : ${formState.adults}\n<br/>
            Children : ${formState.children}\n<br/>
            Age : ${formState.age}\n<br/>
            Board : ${formState.mealPlan}\n<br/>
            Tours : ${formState.tours}\n<br/>
            Airport Transfers : ${formState.transfers}\n<br/>
            Ticket: ${formState.ticket}\n<br/>
          `
        }

        if(window.Email && errorStatus === 'false' && confirmed === 'true'){
            window.Email.send(config).then(()=>{
                setStep(3)
            })
        }

    }
      
  return (
    <>
        <Form onSubmit={(e) => submitHandler(e)}>
            { step === 0 && <ProfileInformation/> }
            { (step === 1 && errorStatus === 'false') && <TourInformation/> }
            { (step === 2 && errorStatus === 'false') && <Confirm/> }
            { (step === 3 && confirmed === 'false') && <Success/> }
        </Form>
    </>
  )
}