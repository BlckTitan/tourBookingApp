import Styled from 'styled-components';

export const SuccessStyle = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
    height: 500px;
    text-align: center;
    padding: 2rem 5vw;
    .icon{
        position: absolute;
        top: 25%;
        opacity: 0.4;
        font-size: 15vw;
        color: #2a792c;
    }
    @media (max-width: 1024px){
        padding: 5rem 5vw;
        .icon{
            opacity: 0.4;
            font-size: 30vw;
            color: #2a792c;
        }
    }
`;