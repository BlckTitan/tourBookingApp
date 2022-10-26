import React, { useContext, useEffect } from 'react';
//styled-component
import { ConfirmStyle } from './style/Confirm.style';
//context
import { StateContext } from '../../utilities/Utilities';

export default function Confirm() {
    const{firstName, lastName, otherName, status, country, dateFrom, dateTo, result, rooms,
        gender, email, phoneNumber, rating, setStep, adults, children, mealPlan, tours, nights,
        setConfirmed, transfers, ticket, age
    } = useContext(StateContext);
   
    useEffect(()=>{
        setConfirmed('false');
    }, [setConfirmed])

  return (
    <ConfirmStyle>
            <h1> Kindly confirm your booking details</h1>

            <div className='name'>
                <div>
                    <span>First name :</span> {firstName}
                </div>
                <div>
                    <span>Last name :</span> {lastName}
                </div>
                <div>
                    <span>Other Names :</span> {otherName}
                </div>
            </div>

            <div className='statusGender'>
                <div>
                    <span>Marital Status :</span> {status}
                </div>
                <div>
                    <span>Gender :</span> {gender}
                </div>
            </div>

            <div className='personalInfo'>
                <div>
                    <span>Email :</span> {email}
                </div>
                <div>
                    <span>Phone number :</span> {phoneNumber}
                </div>
            </div>

            <div className='tourInfo'>
                <div>
                    <span>Destination :</span> {country}
                </div>

                <div className='date'>
                    <div>
                        <span>From :</span> {dateFrom}
                    </div> 
                    <div>
                        <span>To :</span> {dateTo}
                    </div>
                    <div>
                        <span>Nights :</span> {nights}
                    </div>
                </div>
                
                <div className='accomodation'>
                    <div>
                        <span>Rating :</span> {rating}
                    </div>
                    <div>
                        <span>Rooms :</span> {rooms}
                    </div>
                    <div>
                        <span>Adults :</span> {adults}
                    </div>
                    <div>
                        <span>Children :</span> {children}
                    </div>
                </div>
                <div className='age'>
                    {
                        age.length <= 1 && 
                        <div>
                            <span>Age : </span>{age}
                        </div>
                    }
                    {
                        age.length > 1 && 
                        <div>
                            <span>Ages : </span>
                            {
                                `${(age[0] !== '0') ? age[0]+',' : ''} 
                                ${(age[1] !== '0') ? age[1]+',' : ''} 
                                ${(age[2] !== '0') ? age[2]+',' : ''}
                                ${(age[3] !== '0') ? age[3]+',' : ''} 
                                ${(age[4] !== '0') ? age[4]+',' : ''} 
                                ${(age[5] !== '0') ? age[5]+',' : ''}`
                            }
                        </div>
                    }
                </div>
                
                <div className='mealPlan'>
                    <div>
                        <span>Board : </span> {mealPlan}
                    </div>
                </div>

                <div className='otherInfo'>
                    <div>
                        <span>Tours Fares :</span> {tours}
                    </div>
                    <div>
                        <span>Airport Transfers :</span> {transfers}
                    </div>
                </div>

                <div className='ticket'>
                    <div>
                        <span>Discounted Ticket : </span> {ticket}
                    </div>
                </div>

            </div>
            
         <div className='navigation'>
            <button className='previous' onClick={()=>{setStep(1)}}>Go back</button>
            <button className='next' type='submit'
                onClick={()=>setConfirmed('true')}
            >Finish</button>
         </div>

    </ConfirmStyle>
  )
}
