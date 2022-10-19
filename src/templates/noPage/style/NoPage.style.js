import Styled from 'styled-components';

export const Container = Styled.div`
    width: 100%;
    height: Calc(100vh - 8rem);
    background-color: #e8e8e8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icon{
        font-size: 20rem;
        opacity: 0.3;
    }
    div.text{
        font-size: 3rem;
        color: gray;
    }
    
    //responsiveness max-width 1024
    @media (max-width: 600px){
        .icon{
            font-size: 10rem;
        }
        div.text{
            font-size: 2rem;
            text-align: center;
        }
    }
`;