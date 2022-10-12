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
        firstName, lastName, otherName, status, gender, email, phoneNumber, transfers, journey, ticket,
        tours, mealPlan, rooms, adults, children, country, dateFrom, dateTo, nights, setNights, step, setStep,
        errorStatus, errorMessage, age
    } = useContext(StateContext)

    useEffect(()=>{
        setNights(result)
    }, [dateFrom, dateTo])

    const formState = {
        firstName, lastName, otherName, status, gender, email, phoneNumber, transfers, tours, 
        mealPlan, rooms, adults, children, country, dateFrom, dateTo, nights, age, journey, ticket
    }

    //number of nights count
    const dateStart = new Date(dateFrom);
    const dateEnd = new Date(dateTo);
    const currentTime = Math.abs(dateEnd - dateStart);
    const result = Math.ceil(currentTime / (1000 * 60 * 60 * 24));
    
    const submitHandler = (e) =>{
        
        e.preventDefault();

        const config = {
          SecureToken : "b623a7bc-abfe-4f39-9aff-a5d8070b92b3",
          To : 'ugorjivictoreze@gmail.com',
          From : 'dorshman406@gmail.com',
          Subject : "TOUR BOOKING REQUEST",
          Body : `
            First Name : ${formState.firstName}\n<br/>
            Last Name : ${formState.lastName}\n<br/>
            Other Names : ${formState.otherName}\n<br/>
            Marital Status : ${status}\n<br/>
            Gender : ${formState.gender}\n<br/>
            Email : ${formState.email}\n<br/>
            Phone Number : ${formState.phoneNumber}\n<br/>
            Destination : ${formState.country}\n<br/>
            Date From : ${formState.dateFrom}\n<br/>
            Date To : ${formState.dateTo}\n<br/>
            Nights : ${result}\n<br/>
            Rooms : ${formState.rooms}\n<br/>
            Adults : ${formState.adults}\n<br/>
            Children : ${formState.children}\n<br/>
            Age : ${formState.age}\n<br/>
            Board : ${formState.mealPlan}\n<br/>
            Tours : ${formState.tours}\n<br/>
            Journey Type : ${formState.journey}\n<br/>
            Airport Transfers : ${formState.transfers}\n<br/>
            Ticket: ${formState.ticket}\n<br/>
          `
        }

        if(window.Email && (errorStatus === false)){
            window.Email.send(config).then(()=>{
                setStep(3)
            })
        }

    }
      
  return (
    <>
        <Form onSubmit={(e) => submitHandler(e)}>
            { step === 0 && <ProfileInformation/> }
            { step === 1 && <TourInformation/> }
            { step === 2 && <Confirm/> }
            { step === 3 && <Success/> }
        </Form>
        {
            console.log(
                firstName, lastName, otherName, status, gender, email, phoneNumber, transfers, tours, 
                mealPlan, rooms, adults, children, country, dateFrom, dateTo, nights, journey, ticket,
                errorMessage
            )
        }
    </>
  )
}
