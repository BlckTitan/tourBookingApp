import Styled from "styled-components";

export const Container = Styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: start;
    background-color: #fff;
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
    color: #0077a3;
    cursor: pointer; 

    & ul{
        display:  flex;
        justify-content: start;
        width: 100%;
        & li{
            width: 8rem;
            & a.active.home,
            & a.active.bookings,
            & a.false{
                color: #0077a3;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                .icon{
                    font-Size: 2vw;
                }
            }
            & a:hover{
                color: #e26329;
            }
            a.active.home, 
            a.active.bookings{
                color: #e26329;
            }
        }
    }

    //responsive layout
    @media (max-width: 1024px){
        background: red;
        transition-property: width;
        transition-timing-function: linear;
        transition-duration: 10s;
        transition-delay: 1s;
        width: 30vw;
        padding: 0;
        border-top: 0.1px solid gray;
        & ul.show{
            display:  flex;
            flex-direction: column;
            text-align: left;
            background-color: #272726;
            height: 35vh;
            padding-top: 2.5rem;
            & li{
                width: 100%;
                height: 5vh;
                display: flex;
                align-items: center;
                margin-bottom: 0.5rem;
                & a.active.home,
                & a.active.bookings,
                & a.false{
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                    //color: #0077a3;
                    font-size: 1.3rem;
                    color: #e26329;
                    width: 100%;
                    height: 100%;
                    padding: 0 1rem;
                    div.icon{
                        .icon{
                            font-Size: 2.8vw;
                            margin-right: 1rem;
                        }
                    }
                }
                a.false{
                    color: #0077a3;
                }
                a.active.home:hover,
                a.active.bookings:hover,
                a.false:hover{
                    color: #e26329;
                    background-color: rgba(255, 255, 255, 0.2);
                }
            }
            
        }
        ul.hide{
            display: none;
        }

    }
    
`;
//e26329