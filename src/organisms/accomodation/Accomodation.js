import React from 'react'
//styled-component
import { AccomodationStyle } from './style/Accomodation.style'

export default function Accomodation() {
  return (
    <AccomodationStyle>
        <img src='https://images.unsplash.com/photo-1585870463953-cef577799a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'/>
        <form>
          <div className='country'>
            <label htmlFor='country'>Destination, zone or hotel name</label>
            <input type="text" id='country'/>
          </div>

         <div className='duration'>
          <label htmlFor="forDate">
            From
            <input type="date" id='forDate'/>
          </label>
          <label htmlFor='toDate'>
            To
            <input type="date" id='toDate'/>
          </label>
          <label>
            Nghts
            <select>
              <option>1</option>
              <option>2</option>
            </select>
          </label>
         </div>

         <div className='accomodation'>
           <label>
              Rooms
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </label>
            <label>
              Adults
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </label>
            <label>
              Children
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
            </label>
         </div>

         <div className='search'>
          <button>Book now</button>
         </div>
        </form>
    </AccomodationStyle>
  )
}
