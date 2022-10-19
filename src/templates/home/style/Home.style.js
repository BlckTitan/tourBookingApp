import Styled from "styled-components";
//import img from '../img/luca-mazzotta-ytrfvd7_4EU-unsplash.jpg';

export const Container = Styled.div`
    @keyframes btnBounce {
        0% {
            animation-timing-function: ease-in-out;
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
        padding: 3.5rem 8vw;
        color: #0077a3;
        width: 100%;
        max-height: 30rem;
        text-align: center;
        position: absolute;
        top: 0;
        h1{
            //font-family: 'caveat';
            font-size: 5vw; 
            margin-bottom: 1.5rem;
        }
        p{
            font-family: 'kalam';
            font-size: 3vw;
            color: #E26329;
        }

        & div.callToAction{
            display: flex;
            justify-content: flex-end;
            align-items:  center;
            margin-top: 2rem;
            padding: 7rem 0;
            position: relative;
            width: 100%;
            height: 50rem;

            div.socials{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                position: fixed;
                bottom: 3vh;
                left: 2rem;
                opacity: 1;
                a{
                    margin: 0.3rem 0;
                    .icon{
                        font-size: 2.2vw;
                    }
                    .icon.facebook{
                        color: #35548e;
                    }
                    .icon.instagram{
                        color: #8134AF;
                    }
                    .icon.whatsapp{
                        color: #4AC958;
                    }
                }
                a:hover{
                    transform: scale(1.5);
                }
            }
            a{
                button{
                    width: 12rem;
                    height: 3.5rem;
                    border: 0;
                    color: #fff;
                    font-size: 1.2rem;
                    border-radius: 0.3rem;
                    background-color: #4169e1;
                    animation: btnBounce 4s ease-in-out 1s infinite normal none;
                }
                button:hover{
                    background-color: #3454b4;
                }
            }
        }
    }

    //responsive home style max-width 1024px
    @media (max-width: 1024px){
        height: Calc(100vh - 3rem);

        div.textOverlay{
            top: 8vh;
            padding: 0.5rem 1rem;
            h1{
                //font-family: 'caveat';
                font-size: 3rem; 
                text-align: center;
            }
            p{
                font-size: 2rem;
            }

            & div.callToAction{
                padding: 4rem 0;
                div.socials{
                    a{
                        .icon{
                            font-size: 1.5rem;
                        }
                    }
                }
                a{
                    button{
                        margin-top: 8rem;
                        width: 12rem;
                        height: 3.5rem;
                        font-size: 1.5rem;
                    }
                }
             }
        }
    }

    //responsive home style max-width 768px
    @media (max-width: 768px){
        height: Calc(100vh - 3rem);

        div.textOverlay{
            top: 8vh;
            padding: 0.5rem 1rem;
            h1{
                //font-family: 'caveat';
                font-size: 3rem; 
                text-align: center;
                margin-bottom: 2rem;
            }
            p{
                font-size: 2rem;
            }

            & div.callToAction{
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0;
                div.socials{
                    a{
                        .icon{
                            font-size: 1.5rem;
                        }
                    }
                }
                a{
                    button{
                        width: 12rem;
                        height: 3.5rem;
                        font-size: 1.5rem;
                    }
                }
             }
        }
    }

    //responsive home style max-width 600px
    @media (max-width: 600px){
        height: Calc(100vh - 3rem);

        div.textOverlay{
            padding: 2.5rem 1rem;
            top: 0;
             h1{
                 //font-family: 'caveat';
                 font-size: 3rem; 
                 margin-bottom: 2.5rem;
             }
             p{
                 font-size: 1.8rem;
             }
 

             & div.callToAction{
                padding: 2rem 0;
                div.socials{
                    a{
                        .icon{
                            font-size: 1.5rem;
                        }
                    }
                }
                a{
                    button{
                        width: 12rem;
                        height: 3.5rem;
                        font-size: 1.5rem;
                    }
                }
             }
         }
    }

    //responsive home style max-width 480px
    @media (max-width: 480px){
        height: Calc(100vh - 3rem);

        div.textOverlay{
            padding: 1.5rem 1rem;
            top: 0;
             h1{
                 //font-family: 'caveat';
                 font-size: 3.5rem; 
                 text-align: center;
                 margin-bottom: 1rem;
             }
             p{
                 font-size: 1.8rem;
             }
 

             & div.callToAction{
                display: flex;
                align-items: end;
                padding: 0;
                width: 100%;
                height: 5rem;
                div.socials{
                    bottom: 3vh;
                    left: 2rem;
                    opacity: 1;
                    a{
                        .icon{
                            font-size: 1.5rem;
                        }
                    }
                    a{
                        button{
                            margin-top: 0;
                            width: 12rem;
                            height: 3.5rem;
                            font-size: 1.5rem;
                        }
                    }
                }
             }
         }
 
     }
`;

//backdrop-filter: blur(100px);