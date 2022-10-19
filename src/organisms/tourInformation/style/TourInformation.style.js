import Styled from "styled-components";
export const TourInformationStyle = Styled.div`
    
    input, select, span{
        margin-top: 0.5rem;
        height: 2.5rem;
        border-radius: 0.3rem;
        border: 0.3px solid #0077a3;
        padding: 0.5rem;
        font-size: 1vw;
        color: #272726;
    }
    div{
        margin-bottom: 0.5rem;
        label{
            display: flex;
            flex-direction: column;
            margin-right: 1.5rem;
            font-weight: 600;
        }
    }
    & div.country{
        display: flex;
        flex-direction: column;
        select{
            width: 400px;
        }

    }
    & div.duration{
        display: flex;
        label{
            input{
                width: 10rem;
            }
            span{
                width: 3rem;
                height: 2.5rem;
                margin-top: 0.5rem;
                border-radius: 0.3rem;
                border: 1px solid #0077a3;
                background-color: #fff;
                text-align: center;
                line-height: 1.5rem;
                color: #272726;
            }
        }
    }
    & div.accomodation,
        div.tourTransfer{
        display: flex;
    }
    div.formNavigation{
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;
        button.next,
        button.previous{
            width: 12vw;
            height: 3.5rem;
            color: #fff;
            border: 0;
            border-radius: 0.3rem;
            font-size: 1.2vw;
            background-color: #e26329;
        }
        button.next:hover{
            background-color: #b44f20;
        }
        button.previous{
            background-color: gray;
        }
        button.previous:hover{
            background-color: #636e71;
        }
    
    }
    
    //responsive styling max-width 1024px
    @media (max-width: 1024px){
        input, select, span{
            margin-top: 0.3rem;
            height: 2rem;
            padding: 0.2rem;
            font-size: 0.8rem;
            color: #272726;
        }
        div{
            margin-bottom: 0.8rem;
        }
        & div.duration{
            label{
                span{
                    height: 2rem;
                    margin-top: 0.3rem;
                }
            }
        }
        div.formNavigation{
            button.next,
            button.previous{
                height: 3rem;
                font-size: 1rem;
            }
        }
    }

    //responsive styling max-width 600px
    @media (max-width: 600px){
        select{
            width: 8rem;
            font-size: 1rem;
        }

        input{
            font-size: 1rem;
        }

        div{
            margin-bottom: 0.8rem;
        }

        & div.country{
            select{
                width: 20rem;
            }
        }

        & div.duration{
            display: flex;
            flex-direction: column;
            label{
                margin-top: 0.3rem;
                span{
                    height: 2rem;
                    margin-top: 0.3rem;
                }
            }
        }

        & div.accomodation{
            display: flex;
            label{
              margin-top: 0.3rem;
              select{
                width: 4.5rem;
              }
              select.rating{
                width: 6rem;
              }
              select.adults,
              select.rooms{
                width: 2.5rem;
              }
            }
        }

        div.formNavigation{
            button.next,
            button.previous{
                width: 6rem;
                height: 3rem;
                font-size: 1rem;
            }
        }
    }

    //responsive styling max-width 480px
    @media (max-width: 480px){
        select{
            width: 15rem;
        }

        input{
            width: 10rem;
        }

        & div.country{
            select{
                width: 15rem;
            }
        }

        & div.duration{
            display: flex;
            flex-direction: column;
            label{
                margin-bottom: 00.3rem;
                span{
                    height: 2rem;
                    margin-top: 0.3rem;
                }
            }
        }

        & div.accomodation,
        div.tourTransfer{
            display: flex;
            flex-direction: column;
            label{
              margin-top: 0.3rem;
            }
        }

        div.formNavigation{
            button.next,
            button.previous{
                width: 20vw;
                height: 3rem;
                font-size: 1rem;
            }
        }
    }
`;