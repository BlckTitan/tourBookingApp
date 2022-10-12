import Styled from "styled-components";
//import img from '../img/luca-mazzotta-ytrfvd7_4EU-unsplash.jpg';

export const Container = Styled.div`

    width: 100%;
    height: Calc(100vh - 8rem);
    div.videoBg{
        width: 100%;
        height: 100%;
        video{
            width: 100%;
            height: 100%;
            left: 0;
            object-fit: cover;
        }
    }
    div.textOverlay{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 3.5rem 2.5rem;
        color: #0077a3;
        width: 100%;
        text-align: center;
        position: absolute;
        top: 0;
        h1{
            font-family: 'caveat';
            font-size: 6rem; 
            margin-bottom: 5rem;
        }
        p{
            font-family: 'caveat';
            font-size: 3.5rem;
        }
    }
    
    
`;

//backdrop-filter: blur(100px);