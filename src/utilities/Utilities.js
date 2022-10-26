import React, { createContext, useState} from 'react';

export const StateContext = createContext();

export default function Utilities(props) {

    const [step, setStep] = useState(0)
    const [errorStatus, setErrorStatus] = useState('false');
    const [errorMessage, setErrorMessage] = useState('');
    const [activeLink, setActiveLink] = useState('')
    const [confirmed, setConfirmed] = useState('false')
    const [sidebar, setSidebar] =  useState('hide');

    //form 1
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [otherName, setOtherName] = useState('None');
    const [status, setStatus] = useState('Single');
    const [gender, setGender] = useState('Male');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    //form 2
    const [transfers, setTransfers] = useState('One-way ($75)');
    const [tours, setTours] = useState('1 - 2 ($150)');
    const [mealPlan, setMealPlan] = useState('Room Only');
    const [rooms, setRooms] = useState('1');
    const [rating, setRating] = useState('3 Star');
    const [adults, setAdults] = useState('1');
    const [children, setChildren] = useState('0');
    const [age, setAge] = useState([]);
    const [country, setCountry] = useState("Seychelles");
    const [dateFrom, setDateFrom] = useState('00/00/0000');
    const [dateTo, setDateTo] = useState('00/00/0000');
    const [nights, setNights] = useState('0');
    const [ticket, setTicket] = useState('Yes');


  return (
    <StateContext.Provider 
        value={{
            firstName, setFirstName, lastName, setLastName, otherName, setOtherName, status, setStatus,
            gender, setGender, email, setEmail, phoneNumber, setPhoneNumber, transfers, setTransfers,
            tours, setTours, mealPlan, setMealPlan, rooms, setRooms, adults, setAdults, children, setChildren,
            country, setCountry, dateFrom, setDateFrom, dateTo, setDateTo, nights, setNights, step, setStep,
            age, setAge, ticket, setTicket, errorStatus, setErrorStatus, errorMessage, 
            setErrorMessage, rating, setRating, activeLink, setActiveLink, confirmed, setConfirmed,
            sidebar, setSidebar
        }}
    >
        {props.children}
    </StateContext.Provider>
  )
}
