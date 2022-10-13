import React, { createContext, useState} from 'react';

export const StateContext = createContext();

export default function Utilities(props) {
    const [step, setStep] = useState(0)
    const [errorStatus, setErrorStatus] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    //form 1
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [otherName, setOtherName] = useState('');
    const [status, setStatus] = useState('Single');
    const [gender, setGender] = useState('Male');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    //form 2
    const [transfers, setTransfers] = useState('None');
    const [journey, setJourney] = useState('One-way');
    const [tours, setTours] = useState('1 - 2 tours');
    const [mealPlan, setMealPlan] = useState('None');
    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState("Seychelles");
    const [dateFrom, setDateFrom] = useState('00/00/0000');
    const [dateTo, setDateTo] = useState('00/00/0000');
    const [nights, setNights] = useState(0);
    const [ticket, setTicket] = useState('No');


  return (
    <StateContext.Provider 
        value={{
            firstName, setFirstName, lastName, setLastName, otherName, setOtherName, status, setStatus,
            gender, setGender, email, setEmail, phoneNumber, setPhoneNumber, transfers, setTransfers,
            tours, setTours, mealPlan, setMealPlan, rooms, setRooms, adults, setAdults, children, setChildren,
            country, setCountry, dateFrom, setDateFrom, dateTo, setDateTo, nights, setNights, step, setStep,
            age, setAge, journey, setJourney, ticket, setTicket, errorStatus, setErrorStatus, errorMessage, 
            setErrorMessage
        }}
    >
        {props.children}
    </StateContext.Provider>
  )
}
