import React, { useContext, useEffect, useState } from 'react';
//styled-component
import { ProfileInformationStyle } from './style/ProfileInformation.style';
//context
import { StateContext } from '../../utilities/Utilities';
//validation
import Validation from '../../molecules/validation/Validation';

export default function TourInformation() {
    
    const [validateFields, setValidateFields] = useState()

    useEffect(()=>{
        setValidateFields('false')
    }, [validateFields])
    
    const{
        firstName, setFirstName, lastName, setLastName,
         otherName, setOtherName, setStatus, 
        setGender, email, setEmail, phoneNumber, setPhoneNumber,
    } = useContext(StateContext);

  return (
    <ProfileInformationStyle>

          <div className='firstName'>
            <label htmlFor='firstName'>First Name
                <input type="text" id='firstName' value={firstName} required 
                    placeholder='James' onChange={(e)=>{setFirstName(e.target.value)}}
                />
            </label>
          </div>

          <div className='otherNames'>
            <label htmlFor='otherNames'>Other Name
                <input type="text" id='otherNames' value={otherName} required 
                onChange={(e)=>{setOtherName(e.target.value)}} placeholder='Clark'/>
            </label>
         </div>

         <div className='lastName'>
            <label htmlFor='lastName'>Last Name
                <input type="text" id='lastName' value={lastName} required 
                onChange={(e)=>{setLastName(e.target.value)}} placeholder='David'/>
            </label>
         </div>

         <div className='otherInfo'>
            <label htmlFor='status'>Marital status
                <select id='status' 
                     onChange={(e)=>{setStatus(e.target.value)}}
                >
                    <option value='single'>Single</option>
                    <option value='Married'>Married</option>
                </select>
            </label>
            <label htmlFor='gender' className='gender'>Gender
                <select id='gender' 
                    onChange={(e)=>{setGender(e.target.value)}}
                >
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                </select>
            </label>
         </div>

         <div className='email'>
            <label htmlFor='email'>Email
                <input type="email" id='email' value={email} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                onChange={(e)=>{setEmail(e.target.value)}}placeholder='email@email.com'/>
            </label>
         </div>

         <div className='phoneNumber'>
            <label htmlFor='phoneNumber'>Phone number (WhatsApp)
                <input type="tel" className="phoneNumber" id='phoneNumber' value={phoneNumber} required 
                onChange={(e)=>{setPhoneNumber(e.target.value)}} placeholder='+ 234 813 000 0009'/>
            </label>
         </div>

         <div className='continue'>
          <button type='submit' onClick={()=>{setValidateFields('true')}}
          >Continue</button>
         </div>
            
         {
            (validateFields === 'true') && 
            <Validation 
                fields={{firstName, otherName, lastName, email, phoneNumber}}
                type='profile'
            />
        }
    </ProfileInformationStyle>
  )
}