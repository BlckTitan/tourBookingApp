import React from 'react';
import { ActivitiesStyle } from './style/Activities.style';

export default function Activities() {
   
  return (
    <ActivitiesStyle>
        <div className='activityBooking'>
            <h1>Enjoy a well deserved vacation trip.</h1>
            <p>
                Vacations will never be boring again. 
                You dream it, We make it happen.
                This is vacation redefined!
            </p>
        </div>
        <div className='activityImg'>
            <img
                src='https://images.unsplash.com/46/M1IHnsfYRz2ThTgzl6qz_canyousea.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80'
                alt=''
            />
            <form>
                <h3 className='title'>Choose your activities</h3>
                <label>
                    Activities
                    <input type="checkbox"/>
                </label>
                <div className='submit'>
                    <button>Book now</button>
                </div>
            </form>
        </div>
    </ActivitiesStyle>
  )
}
