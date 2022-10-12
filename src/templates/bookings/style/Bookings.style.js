import Styled from "styled-components";
//import img from '../img/luca-mazzotta-ytrfvd7_4EU-unsplash.jpg';

export const Container = Styled.div`
    width: 100%;
    height: 100%;
    & div.formCarousel{
        position: relative;
        width: 100%;
        height: 45rem;
        & div.form{
            display: flex;
            justify-content: start;
            align-items: center;
            width: 100%;
            & div.errorMessageBox{
                width: 25rem;
                height: auto;
                padding: 1rem;
                font-size: 1.2rem;
                position: absolute;
                left: 47%;
                top: 2rem;
                border-radius: 0.3rem;
                background-color: #FBCEB1;
                color: #922724;
                transition:  all 0.4s ease-in;
            }
        }
    }
`;

//backdrop-filter: blur(100px);