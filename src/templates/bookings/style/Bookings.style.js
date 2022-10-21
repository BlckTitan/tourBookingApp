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
                width: 25vw;
                height: auto;
                padding: 1vw;
                font-size: 1.2vw;
                position: absolute;
                left: 48vw;
                top: 2rem;
                border-radius: 0.3rem;
                background-color: #FBCEB1;
                color: #922724;
                transition:  all 0.4s ease-in;
            }
        }
    }

    //responsive layout
    @media (max-width: 1024px){
        & div.formCarousel{
            & div.form{
                & div.errorMessageBox{
                    width: 20rem;
                    height: auto;
                    padding: 0.5rem;
                    font-size: 1rem;
                    position: absolute;
                    left: 10.5%;
                    top: 0.4rem;
                    border-radius: 0.3rem;
                }
            }
        }
    }

    //responsive layout
    @media (max-width: 480px){
        & div.formCarousel{
            & div.form{
                & div.errorMessageBox{
                    width: 15rem; 
                }
            }
        }
    }
`;

//backdrop-filter: blur(100px);