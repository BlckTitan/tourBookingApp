import Styled from "styled-components";
//import img from '../img/luca-mazzotta-ytrfvd7_4EU-unsplash.jpg';

export const Container = Styled.div`
    @keyframes btnBounce {
        0% {
            animation-timing-function: ease-in;
            opacity: 1;
            transform: translateY(-45px);
        }

        24% {
            opacity: 1;
        }

        40% {
            animation-timing-function: ease-in;
            transform: translateY(-24px);
        }

        65% {
            animation-timing-function: ease-in;
            transform: translateY(-12px);
        }

        82% {
            animation-timing-function: ease-in;
            transform: translateY(-6px);
        }

        93% {
            animation-timing-function: ease-in;
            transform: translateY(-4px);
        }

        25%,
        55%,
        75%,
        87% {
            animation-timing-function: ease-out;
            transform: translateY(0px);
        }

        100% {
            animation-timing-function: ease-out;
            opacity: 1;
            transform: translateY(0px);
        }
    }
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
        padding: 3.5rem 8rem;
        color: #0077a3;
        width: 100%;
        max-height: 30rem;
        text-align: center;
        position: absolute;
        top: 0;
        h1{
            //font-family: 'caveat';
            font-size: 6rem; 
            margin-bottom: 1.5rem;
        }
        p{
            font-family: 'kalam';
            font-size: 4.5rem;
            color: #E26329;
        }

        & div.callToAction{
            display: flex;
            justify-content: flex-end;
            align-items:  center;
            margin-top: 2rem;
            padding: 7rem 0;
            width: 100%;
            height: 50rem;
            a{
                button{
                    width: 12rem;
                    height: 3.5rem;
                    border: 0;
                    color: #fff;
                    font-size: 1.2rem;
                    border-radius: 0.3rem;
                    background-color: royalblue;
                    animation: btnBounce 4s ease-in-out 1s infinite normal none;
                }
                button:hover{
                    background-color: #002366;
                }
            }
        }
    }
`;

//backdrop-filter: blur(100px);