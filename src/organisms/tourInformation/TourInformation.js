import React, { useContext } from 'react';
//styled-component
import { TourInformationStyle } from './style/TourInformation.style';
//data
import {location, meal} from '../../data/Data';
import { StateContext } from '../../utilities/Utilities';

export default function TourInformation() {
    const {setTransfers, setAge, setJourney,
      tours, setTours, setMealPlan, setRooms, setAdults, children, setChildren, setErrorStatus,
      setCountry, dateFrom, setDateFrom, dateTo, setDateTo, nights, step, setStep, setErrorMessage
       } = useContext(StateContext);

    const next = (e) =>{
      //checking for empty fields
      const emptyField = '';
      const emptyDate = '00/00/0000';
      
      switch (emptyField || emptyDate || '0') {
          case dateFrom:
              setErrorStatus(true)
              setErrorMessage('Start date cannot be blank')
          break;
          case dateTo:
              setErrorStatus(true)
              setErrorMessage('End date cannot be blank')
          break;
          case nights:
              setErrorStatus(true)
              setErrorMessage('Nights cannot be 0')
          break;
          case tours:
              setErrorStatus(true)
              setErrorMessage('Tour cannot be blank')
          break;
          default:
              setErrorStatus(false)
              setStep(step+1)
          break;
      }
  }
    
  return (
    <TourInformationStyle>
          <div className='country'>
            <label htmlFor='country'>Destination, zone or hotel name</label>
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
            <input type="date" min="2022-10-10" id='forDate' required  value={dateFrom}
              onChange={
                (e)=>{
                  setDateFrom(e.target.value)
              }}
            />
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
            <span>{(dateFrom !=='00/00/0000' && dateTo !=='00/00/0000') ? nights : 0}</span>
          </label>
         </div>

         <div className='accomodation'>
            <label>
              Rooms
              <select onClick={(e) => setRooms(e.target.value)}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
            </label>

            <label>
              Adults
              <select onClick={(e) => setAdults(e.target.value)}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
            </label>

            <label>
              Children
              <select  onClick={(e) => setChildren(e.target.value)} required>
                <option value={0}>none</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
              </select>
            </label>
            {
              (children > 0) &&

              <label>
                Age
                <select onClick={(e) => setAge(e.target.value)} required>
                  <option value={0}>0+</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                  <option value={11}>11</option>
                </select>
              </label>
            } 
         </div>

         <div className='mealType'>
            <label htmlFor='mealType'>Board</label>
            <select id='mealType' onClick={(e) => setMealPlan(e.target.value)} required>
              <>
                <option value='None'>none</option>
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
              Tours
              <select onClick={(e) => setTours(e.target.value)} required>
                <option value='1 - 2 tours'>1 - 2 tours</option>
                <option value='2 - 3 tours'>2 - 3 tours</option>
                <option value='3 - 4 tours'>3 - 4 tours</option>
              </select>
            </label>

            <label>
              Journey Type
              <select onClick={(e) => setJourney(e.target.value)} required>
                <option value='One-way'>One-way</option>
                <option value='Return'>Return</option>
              </select>
            </label>
            
            <label>
              Airport Transfers
              <select onClick={(e) => setTransfers(e.target.value)} required>
                <option value='1 - 2 ($150)'>1 - 2 ($150)</option>
                <option value='2 - 3 ($150)'>2 - 3 ($150)</option>
                <option value='3 - 4 ($250)'>3 - 4 ($250)</option>
                <option value='4 - 5 ($300)'>4 - 5 ($300)</option>
                <option value='Not applicable'>Not applicable</option>
              </select>
            </label>
         </div>

         <div className='ticket'>
            <label htmlFor='ticket'>Would you like a discounted air ticket?</label>
            <select id='ticket' onClick={(e) => setMealPlan(e.target.value)} required>
              <>
                <option value='No'>No</option>
                <option value='Yes'>Yes</option>
              </>
            </select>
         </div>

         <div className='formNavigation'>
          <button className='previous' onClick={()=>{setStep(0)}}>Go back</button>
          <button type="submit" className='next' onClick={()=>{next()}}>Continue</button>
         </div>

    </TourInformationStyle>
  )
}
