import React, { useState, useContext, useEffect } from 'react';
//styled-component
import { TourInformationStyle } from './style/TourInformation.style';
//data
import {location, meal} from '../../data/Data';
import { StateContext } from '../../utilities/Utilities';

export default function TourInformation() {
    const {setTransfers, setAge, errorStatus, errorMessage,
      tours, setTours, setMealPlan, setRooms, setAdults, children, setChildren, setErrorStatus,
      setCountry, dateFrom, setDateFrom, dateTo, setDateTo, nights, step, setStep, setErrorMessage,
      setRating
    } = useContext(StateContext);

    const [currentDate, setCurrentDate] = useState('0000-00-00')
    const date = new Date()

    useEffect(()=>{
      setErrorStatus('false')
      setCurrentDate(`'${date.getFullYear()}-${date.getMonth()}-${date.getDay()}'`)
    }, [errorStatus, currentDate])

    const validate = (e) =>{
      //checking for empty fields
      const emptyField = '';
      const emptyDate = '00/00/0000';
      
      switch (emptyField || emptyDate || '0') {
          case dateFrom:
              setErrorStatus('true')
              setErrorMessage('Start date cannot be blank')
          break;
          case dateTo:
              setErrorStatus('true')
              setErrorMessage('End date cannot be blank')
          break;
          case nights:
              setErrorStatus('true')
              setErrorMessage('Nights cannot be 0')
          break;
          case tours:
              setErrorStatus('true')
              setErrorMessage('Tour cannot be blank')
          break;
          default:
              setErrorStatus('false')
              nextStep();
          break;
      }
  }
  const nextStep = () => {
    
    if(errorStatus === 'false'){
      setStep(2)
    }
  }
    
  return (
    <TourInformationStyle>
          <div className='country'>
            <label htmlFor='country'>Destination, zone</label>
            <select id='country' onClick={(e) => setCountry(e.target.value)}>
              {
                location.map((locations)=>(
                  <option key={locations.id} value={location.country}>{locations.country}</option>
                ))
              }
            </select>
          </div>

         <div className='duration'>
          <label htmlFor="forDate">
            From
            <input type="date" 
            min={`"${date.getFullYear()}-${date.getMonth()}-${date.getDay()}"`}
            id='forDate' required  value={dateFrom}
              onChange={
                (e)=>{
                  setDateFrom(e.target.value)
              }}
            />
            {console.log(currentDate.toString())}
          </label>
          <label htmlFor='toDate'>
            To
            <input type="date" id='toDate' required value={dateTo}
              onChange={(e)=>{
                setDateTo(e.target.value)
            }}
            />
          </label>
          <label>
            Nghts
            <span>{(dateFrom !== '00/00/0000' && dateTo !== '00/00/0000') ? nights : '0'}</span>
          </label>
         </div>

         <div className='accomodation'>

          <label>
              Hotel Rating
              <select onClick={(e) => setRating(e.target.value)}>
                <option value='3 Star'>3 Star</option>
                <option value='4 Star'>4 Star</option>
                <option value='5 Star'>5 Star</option>
              </select>
            </label>

            <label>
              Rooms
              <select onClick={(e) => setRooms(e.target.value)}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
              </select>
            </label>

            <label>
              Adults
              <select onClick={(e) => setAdults(e.target.value)}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
              </select>
            </label>

            <label>
              Children
              <select  onClick={(e) => setChildren(e.target.value)} required>
                <option value='0'>none</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
              </select>
            </label>
            {
              (children > 0) &&

              <label>
                Age
                <select onClick={(e) => setAge(e.target.value)} required>
                  <option value='0+'>0+</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                  <option value='7'>7</option>
                  <option value='8'>8</option>
                  <option value='9'>9</option>
                  <option value='10'>10</option>
                  <option value='11'>11</option>
                </select>
              </label>
            } 
         </div>

         <div className='mealType'>
            <label htmlFor='mealType'>Board</label>
            <select id='mealType' onClick={(e) => setMealPlan(e.target.value)} required>
              <>
                {
                  meal.map((meals)=>(
                    <option key={meals.id} value={meals.type}>{meals.type}</option>
                  ))
                }
              </>
            </select>
         </div>

         <div className='tourTransfer'>
           <label>
              Tours Fares
              <select onClick={(e) => setTours(e.target.value)} required>
                <option value='1 - 2 ($150)'>1 - 2 ($150)</option>
                <option value='2 - 3 ($150)'>2 - 3 ($150)</option>
                <option value='3 - 4 ($250)'>3 - 4 ($250)</option>
                <option value='4 - 5 ($300)'>4 - 5 ($300)</option>
                <option value='Not applicable'>Not applicable</option>
              </select>
            </label>

            <label>
              Airport Transfers
              <select onClick={(e) => setTransfers(e.target.value)} required>
                <option value='One-way ($75)'>One-way ($75)</option>
                <option value='Return ($150)'>Return</option>
              </select>
            </label>
            
         </div>

         <div className='ticket'>
            <label htmlFor='ticket'>Would you like to purchase a discounted air ticket?</label>
            <select id='ticket' onClick={(e) => setMealPlan(e.target.value)} required>
              <>
                <option value='Yes'>Yes</option>
                <option value='No'>No</option>
              </>
            </select>
         </div>

         <div className='formNavigation'>
          <button className='previous' onClick={()=>{setStep(0)}}>Go back</button>
          <button type="submit" className='next' onClick={()=>{validate()}}>Continue</button>
         </div>
    </TourInformationStyle>
  )
}
