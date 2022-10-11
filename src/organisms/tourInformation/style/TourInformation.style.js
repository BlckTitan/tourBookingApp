import Styled from "styled-components";
export const TourInformationStyle = Styled.div`
    
    input, select, span{
        margin-top: 0.5rem;
        height: 2.5rem;
        border-radius: 0.3rem;
        border: 0.3px solid #0077a3;
        padding: 0.5rem;
        font-size: 1.2rem;
        color: #272726;
    }
    div{
        margin-bottom: 1rem;
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
            width: 12rem;
            height: 3.5rem;
            color: #fff;
            border: 0;
            border-radius: 0.3rem;
            font-size: 1.2rem;
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
`;