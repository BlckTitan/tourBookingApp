import React, { useContext, useEffect } from 'react';
//styled-component
import { ConfirmStyle } from './style/Confirm.style';
//context
import { StateContext } from '../../utilities/Utilities';

export default function Confirm() {
    const{firstName, lastName, otherName, status, country, dateFrom, dateTo, result, rooms,
        gender, email, phoneNumber, rating, setStep, adults, children, mealPlan, tours, nights,
        setConfirmed, transfers, ticket
    } = useContext(StateContext);
   
    useEffect(()=>{
        setConfirmed('false');
    }, [setConfirmed])

  return (
    <ConfirmStyle>
            <h1> Kindly confirm your booking details</h1>

            <div className='personalInfo'>
                <div>First name : {firstName}</div>
                <div>Last name : {lastName}</div>
                <div>Other Names : {otherName}</div>
                <div>Marital Status : {status}</div>
                <div>Gender : {gender}</div>
                <div>Email : {email}</div>
                <div>Phone number : {phoneNumber}</div>
            </div>

            <div className='tourInfo'>
                <div>Destination : {country}</div>

                <div className='date'>
                    <div>From : {dateFrom}</div> 
                    <div>To : {dateTo}</div>
                    <div>Nights : {nights}</div>
                </div>
                
                <div className='accomodation'>
                    <div>Rating : {rating}</div>
                    <div>Rooms : {rooms}</div>
                    <div>Adults : {adults}</div>
                    <div>Children : {children}</div>
                </div>
                
                <div className='otherInfo'>
                    <div>Board : {mealPlan}</div>
                    <div>Tours Fares: {tours}</div>
                    <div>Airport Transfers: {transfers}</div>
                    <div>Discounted Ticket: {ticket}</div>
                </div>
            </div>
            
         <div className='continue'>
            <button className='previous' onClick={()=>{setStep(1)}}>Go back</button>
            <button className='next' type='submit'
                onClick={()=>setConfirmed('true')}
            >Finish</button>
         </div>

    </ConfirmStyle>
  )
}
