import React, { useEffect, useContext, useState } from 'react';
import Styled from 'styled-components';
//context
import { StateContext } from '../../utilities/Utilities';

const AgeChildren = Styled.div`
    display: flex;
    select{
        margin-right: 0.5rem;
    }
    @media (max-width: 600px){
        label{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            //grid-template-rows: repeat(3, 150px);
        }
        select{
            width: 3rem;
            margin-right: 0.5rem;
        }
    }
`;

export default function Age() {
    const {children, age, setAge} = useContext(StateContext);

    const [firstAge, setFirstAge] = useState('0')
    const [secondAge, setSecondAge] = useState('0')
    const [thirdAge, setThirdAge] = useState('0')
    const [fourthAge, setFourthAge] = useState('0')
    const [fifthAge, setFifthAge] = useState('0')
    const [sixthAge, setSixthAge] = useState('0')

    useEffect(()=>{
        updateAge()
    }, [firstAge, secondAge, thirdAge, fourthAge, fifthAge, sixthAge])
  
    const ageNumber = ['0+', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];

    const updateAge = () =>{
        
        setAge([firstAge, secondAge, thirdAge, fourthAge, fifthAge, sixthAge]);
        console.log(age)
    }

  return (
    <AgeChildren>
        {
            //1 child
            (children <= '1') &&
            <label>Age
            <select onClick={(e) => setFirstAge(e.target.value)} required>
                {ageNumber.map((ages, index)=>(
                    <option key={index} value={ages}>{ages}</option>
                    ))}
                </select>
            </label>
        }
        { 
            //2 children
            (children === '2') &&
            <label>Ages
                <div className='select'>
                    <select onClick={(e) => setFirstAge(e.target.value)} required>
                        {ageNumber.map((ages, index)=>(
                            <option key={index} value={ages}>{ages}</option>
                        ))}
                    </select>
                    <select onClick={(e) => setSecondAge(e.target.value)} required>
                        {ageNumber.map((ages, index)=>(
                            <option on key={index} value={ages}>{ages}</option>
                        ))}
                    </select>
                </div>
            </label>
        }

        {
            //3 children
            (children === '3') &&
            <label> Ages
                <div className='select'>
                    <select onClick={(e) => setFirstAge(e.target.value)} required>
                        {ageNumber.map((ages, index)=>(
                            <option key={index} value={ages}>{ages}</option>
                        ))}
                    </select>
                    <select onClick={(e) => setSecondAge(e.target.value)} required>
                        {ageNumber.map((ages, index)=>(
                            <option key={index} value={ages}>{ages}</option>
                        ))}
                    </select>
                    <select onClick={(e) => setThirdAge(e.target.value)} required>
                        {ageNumber.map((ages, index)=>(
                            <option key={index} value={ages}>{ages}</option>
                        ))}
                    </select>
                </div>
            </label>
        }

        {
            //4 children
            (children === '4') &&
            <label>Ages
                <div className='select'>
                    <select onClick={(e) => setFirstAge(e.target.value)} required>
                        {ageNumber.map((ages, index)=>(
                            <option key={index} value={ages}>{ages}</option>
                        ))}
                    </select>
                    <select onClick={(e) => setSecondAge(e.target.value)} required>
                        {ageNumber.map((ages, index)=>(
                            <option key={index} value={ages}>{ages}</option>
                        ))}
                    </select>
                    <select onClick={(e) => setThirdAge(e.target.value)} required>
                        {ageNumber.map((ages, index)=>(
                            <option key={index} value={ages}>{ages}</option>
                        ))}
                    </select>
                    <select onClick={(e) => setFourthAge(e.target.value)} required>
                        {ageNumber.map((ages, index)=>(
                            <option key={index} value={ages}>{ages}</option>
                        ))}
                    </select>
                </div>
            </label>
        }

        {
            //5 children
            (children === '5') && 
            <label>Ages
                <div className='select'>
                    <select onClick={(e) => setFirstAge(e.target.value)} required>
                        {ageNumber.map((ages, index)=>(
                            <option key={index} value={ages}>{ages}</option>
                        ))}
                    </select>
                    <select onClick={(e) => setSecondAge(e.target.value)} required>
                        {ageNumber.map((ages, index)=>(
                            <option key={index} value={ages}>{ages}</option>
                        ))}
                    </select>
                    <select onClick={(e) => setThirdAge(e.target.value)} required>
                        {ageNumber.map((ages, index)=>(
                            <option key={index} value={ages}>{ages}</option>
                        ))}
                    </select>
                    <select onClick={(e) => setFourthAge(e.target.value)} required>
                        {ageNumber.map((ages, index)=>(
                            <option key={index} value={ages}>{ages}</option>
                        ))}
                    </select>
                    <select onClick={(e) => setFifthAge(e.target.value)} required>
                        {ageNumber.map((ages, index)=>(
                            <option key={index} value={ages}>{ages}</option>
                        ))}
                    </select>
                </div>
            </label>
        }

        {
            //6 children
            (children === '6') &&
            <label>Ages
                <div className='select'>
                    <select onClick={(e) => setFirstAge(e.target.value)} required>
                        {ageNumber.map((ages, index)=>(
                            <option key={index} value={ages}>{ages}</option>
                        ))}
                    </select>
                    <select onClick={(e) => setSecondAge(e.target.value)} required>
                        {ageNumber.map((ages, index)=>(
                            <option key={index} value={ages}>{ages}</option>
                        ))}
                    </select>
                    <select onClick={(e) => setThirdAge(e.target.value)} required>
                        {ageNumber.map((ages, index)=>(
                            <option key={index} value={ages}>{ages}</option>
                        ))}
                    </select>
                    <select onClick={(e) => setFourthAge(e.target.value)} required>
                        {ageNumber.map((ages, index)=>(
                            <option key={index} value={ages}>{ages}</option>
                        ))}
                    </select>
                    <select onClick={(e) => setFifthAge(e.target.value)} required>
                        {ageNumber.map((ages, index)=>(
                            <option key={index} value={ages}>{ages}</option>
                        ))}
                    </select>
                    <select onClick={(e) => setSixthAge(e.target.value)} required>
                        {ageNumber.map((ages, index)=>(
                            <option key={index} value={ages}>{ages}</option>
                        ))}
                    </select>
                </div>
            </label>
        }
    </AgeChildren>
  )
}
