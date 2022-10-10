import React, { useState } from 'react';
//styled-component
import { TourInformationStyle } from './style/TourInformation.style';
//data
import {location, meal, images} from '../../data/Data';


export default function TourInformation() {
    const [transfers, setTransfers] = useState(null);
    const [tours, setTours] = useState(null);
    const [mealPlan, setMealPlan] = useState(null);
    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(null);
    const [country, setCountry] = useState("Seychelles");
    const [dateFrom, setDateFrom] = useState(null);
    const [dateTo, setDateTo] = useState(null);
    const [nights, setNights] = useState(null);

    const formState = {
      transfers, tours, mealPlan,
      rooms, adults, children, 
      country, dateFrom, dateTo, nights
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
      To : 'pricelessvee@yahoo.com',
      From : 'dorshman406@gmail.com',
      Subject : "TOUR BOOKING REQUEST",
      Body : `
        Destination : ${formState.country}\n<br/>
        Date from : ${formState.dateFrom}\n<br/>
        Date to : ${formState.dateTo}\n<br/>
        Nights : ${result}\n<br/>
        Rooms : ${formState.rooms}\n<br/>
        Adults : ${formState.adults}\n<br/>
        Children : ${formState.children}\n<br/>
        Meal plan : ${formState.mealPlan}\n<br/>
        Tours : ${formState.tours}\n<br/>
        Car transfers : ${formState.transfers}\n<br/>
      `
    }

    if(window.Email){
      window.Email.send(config).then(()=>{alert('Form sent')})
    }
  }
  return (
    <TourInformationStyle>
        <form onSubmit={(e) => submitHandler(e)}>
          <div className='country'>
            <label htmlFor='country'>Destination, zone or hotel name</label>
            <select id='country' onClick={(e) => setCountry(e.target.value)}>
              {
                location.map((locations)=>(
                  <option key={locations.id}>{locations.country}</option>
                ))
              }
            </select>
          </div>

         <div className='duration'>
          <label htmlFor="forDate">
            From
            <input type="date" min="2022-10-10" id='forDate' required 
              onChange={
                (e)=>{
                  setDateFrom(e.target.value)
              }}
            />
          </label>
          <label htmlFor='toDate'>
            To
            <input type="date" id='toDate' required
              onChange={(e)=>{
                setDateTo(e.target.value)
            }}
            />
          </label>
          <label>
            Nghts
            <span>
              {
                (dateFrom !== null && dateTo !== null) ? result : 0
              }
            </span>
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
              <select onClick={(e) => setChildren(e.target.value)} required>
                <option value={null}>none</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
              </select>
            </label>
         </div>

         <div className='mealType'>
            <label htmlFor='mealType'>Meal plan</label>
            <select id='mealType' onClick={(e) => setMealPlan(e.target.value)} required>
              <>
                <option value={null}>none</option>
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
                <option value={null}>none</option>
                <option value={'1 - 2 tours'}>1 - 2 tours</option>
                <option value={'2 - 3 tours'}>2 - 3 tours</option>
                <option value={'3 - 4 tours'}>3 - 4 tours</option>
              </select>
            </label>
            
            <label>
              Car transfers
              <select onClick={(e) => setTransfers(e.target.value)} required>
                <option value={null}>none</option>
                <option value={'1 - 2 ($150)'}>1 - 2 ($150)</option>
                <option value={'2 - 3 ($150)'}>2 - 3 ($150)</option>
                <option value={'3 - 4 ($250)'}>3 - 4 ($250)</option>
                <option value={'4 - 5 ($300)'}>4 - 5 ($300)</option>
              </select>
            </label>
              {console.log(
                transfers, tours, mealPlan,
                 rooms, adults, children,
                 country, dateFrom, dateTo, result
              )}
         </div>

         <div className='search'>
          <button type='submit'>Book now</button>
         </div>

        </form>
    </TourInformationStyle>
  )
}
