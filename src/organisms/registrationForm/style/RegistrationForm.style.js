import Styled from 'styled-components';

export const Form = Styled.form`
    position: absolute;
    top: 30px;
    left: 3vw; 
    width: 42vw;
    height: auto;
    border-radius: .3rem;
    padding: 1rem 2vw;
    background: rgba(255, 255, 255, .6);
    color: #272726;
    font-size: 1vw;
    overflow-y: auto;
    
    //responsive styling max-width 1024px
    @media (max-width: 1024px){
        top: 3rem;
        padding: 1.5rem 2rem;
        left: 10.5%;
        width: 80vw;
        height: auto;
       
        font-size: 1.5vw;
    }
    //responsive styling max-width 768px
    @media (max-width: 768px){
       font-size: 2vw;
    }

    //responsive styling max-width 600px
    @media (max-width: 600px){
        font-size: 1rem;
        height: 650px;
    }
`