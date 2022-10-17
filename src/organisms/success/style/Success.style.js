import Styled from 'styled-components';

export const SuccessStyle = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
    height: 500px;
    text-align: center;
    padding: 5vw;
    .icon{
        position: absolute;
        top: 25%;
        opacity: 0.4;
        font-size: 15vw;
        color: #2a792c;
    }
`;