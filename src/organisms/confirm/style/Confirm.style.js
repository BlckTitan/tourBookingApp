import Styled from "styled-components";
export const ConfirmStyle = Styled.div`
    color: #272726;
    width: 100%;
    h1{
        margin: 1.5rem 0;
        font-size: 1.5vw;
    }

    div{
        margin-bottom: 0.8rem;
        span{
            font-weight: 600;
        }
    }

    div.date,
    div.accomodation,
    div.age,
    div.statusGender,
    div.otherInfo,
    div.name{
        display: flex;
        div{
            margin-right: 1.5rem;
        }
    }

    div.navigation{
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
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
        h1{
            margin-top: 0.5rem;
            margin-bottom: 1.5rem;
            font-size: 1.5rem;
        }

        div{
            margin-bottom: 0.7rem;
            font-size: 1rem;
            span{
                font-weight: 600;
            }
        }

        div.navigation{
            margin-top: 2rem;
            button.next,
            button.previous{
                width: 12vw;
                height: 3rem;
                font-size: 1rem;
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
    }

    //responsive styling max-width 768px
    @media (max-width: 768px){
       
        div.name,
        div.otherInfo{
            display: flex;
            flex-direction: column;
        }

        div.navigation{
            button.next,
            button.previous{
                width: 20vw;
            }
        }

    }

    //responsive styling max-width 600px
    @media (max-width: 600px){
        h1{
            text-align: center;
            font-size: 1.3rem;
        }

        div{
            margin-bottom: 0.5rem;
        }

        div.date,
        div.accomodation,
        div.age,
        div.statusGender,
        div.otherInfo,
        div.name{
            display: flex;
            div{
                margin-right: 1.5rem;
            }
        }
        div.date,
        div.accomodation,
        div.age,
        div.statusGender,
        div.otherInfo,
        div.name{
            display: flex;
            flex-direction: column;
            div{
                margin-right: 1rem;
            }
        }

        div.navigation{
            button.next,
            button.previous{
                width: 20vw;
            }
        }

    }

    //responsive styling max-width 480px
    @media (max-width: 480px){
        h1{
            text-align: center;
            font-size: 1.3rem;
        }

        div{
            margin-bottom: 0.5rem;
        }

        div.date,
        div.accomodation,
        div.age,
        div.statusGender,
        div.otherInfo,
        div.name{
            display: flex;
            div{
                margin-right: 1.5rem;
            }
        }
        div.date,
        div.accomodation,
        div.age,
        div.statusGender,
        div.otherInfo,
        div.name{
            display: flex;
            flex-direction: column;
            div{
                margin-right: 1rem;
            }
        }

        div.navigation{
            button.next,
            button.previous{
                width: 20vw;
            }
        }

    }
`;