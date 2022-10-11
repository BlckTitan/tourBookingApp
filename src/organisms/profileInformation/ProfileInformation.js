import React, { useContext } from 'react';
//styled-component
import { ProfileInformationStyle } from './style/ProfileInformation.style';
//context
import { StateContext } from '../../utilities/Utilities';

export default function TourInformation() {
    const{
        firstName, setFirstName, lastName, setLastName, otherName, setOtherName, status, setStatus,
        gender, setGender, email, setEmail, phoneNumber, setPhoneNumber, step, setStep
    } = useContext(StateContext);

    const next = (e) =>{
        setStep(step+1)
    }
   
  return (
    <ProfileInformationStyle>

          <div className='firstName'>
            <label htmlFor='firstName'>First name
                <input type="text" id='firstName' value={firstName} required 
                    placeholder='James' onChange={(e)=>{setFirstName(e.target.value)}}
                />
            </label>
          </div>

         <div className='lastName'>
            <label htmlFor='lastName'>Last name
                <input type="text" id='lastName' value={lastName} required 
                onChange={(e)=>{setLastName(e.target.value)}} placeholder='David'/>
            </label>
         </div>

         <div className='otherNames'>
            <label htmlFor='otherNames'>Other names
                <input type="text" id='otherNames' value={otherName} required 
                onChange={(e)=>{setOtherName(e.target.value)}} placeholder='Clark'/>
            </label>
         </div>

         <div className='otherInfo'>
            <label htmlFor='status'>Marital status
                <select id='status' required
                     onChange={(e)=>{setStatus(e.target.value)}}
                >
                    <option value='single'>Single</option>
                    <option value='Married'>Married</option>
                </select>
            </label>
            <label htmlFor='gender'>Gender
                <select id='gender' required
                    onChange={(e)=>{setGender(e.target.value)}}
                >
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </select>
            </label>
         </div>

         <div className='email'>
            <label htmlFor='email'>Email
                <input type="email" id='email' value={email} required 
                onChange={(e)=>{setEmail(e.target.value)}}placeholder='email@email.com'/>
            </label>
         </div>

         <div className='phoneNumber'>
            <label htmlFor='phoneNumber'>Phone number (WhatsApp)
                <input type="text" className="phoneNumber" id='phoneNumber' value={phoneNumber} required 
                onChange={(e)=>{setPhoneNumber(e.target.value)}} placeholder='+ 234 813 000 0009'/>
            </label>
         </div>

         <div className='continue'>
          <button type='submit' onClick={(e)=>next(e)}>Continue</button>
         </div>

    </ProfileInformationStyle>
  )
}
