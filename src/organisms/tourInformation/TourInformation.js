import React, { useContext } from 'react';
//styled-component
import { TourInformationStyle } from './style/TourInformation.style';
//data
import {location, meal} from '../../data/Data';
import { StateContext } from '../../utilities/Utilities';


export default function TourInformation() {
    const {transfers, setTransfers,
      tours, setTours, mealPlan, setMealPlan, rooms, setRooms, adults, setAdults, children, setChildren,
      country, setCountry, dateFrom, setDateFrom, dateTo, setDateTo, nights, setNights, step, setStep,
      age, setAge, setJourney
    } = useContext(StateContext);
    
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
                  <option value={0}>none</option>
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
            <label htmlFor='mealType'>Meal plan</label>
            <select id='mealType' onClick={(e) => setMealPlan(e.target.value)} required>
              <>
                <option value='none'>none</option>
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
                <option value={0}>none</option>
                <option value={'1 - 2 tours'}>1 - 2 tours</option>
                <option value={'2 - 3 tours'}>2 - 3 tours</option>
                <option value={'3 - 4 tours'}>3 - 4 tours</option>
              </select>
            </label>

            <label>
              Journey type
              <select onClick={(e) => setJourney(e.target.value)} required>
                <option value='One-way'>One-way</option>
                <option value='Return'>Return</option>
              </select>
            </label>
            
            <label>
              Car transfers
              <select onClick={(e) => setTransfers(e.target.value)} required>
                <option value='none'>none</option>
                <option value={'1 - 2 ($150)'}>1 - 2 ($150)</option>
                <option value={'2 - 3 ($150)'}>2 - 3 ($150)</option>
                <option value={'3 - 4 ($250)'}>3 - 4 ($250)</option>
                <option value={'4 - 5 ($300)'}>4 - 5 ($300)</option>
              </select>
            </label>
         </div>

         <div className='formNavigation'>
          <button className='previous' onClick={()=>{setStep(0)}}>Go back</button>
          <button type="submit" className='next' onClick={()=>{setStep(2)}}>Continue</button>
         </div>

    </TourInformationStyle>
  )
}
