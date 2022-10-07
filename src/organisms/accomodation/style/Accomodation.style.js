import Styled from "styled-components";
export const AccomodationStyle = Styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: 700px;
    position: relative;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        background-repeat: no-repeat;
        background-attachment: scroll;
        z-index: 0;
    }
    & form{
        position: absolute;
        left: 3rem; 
        width: 800px;
        height: 400px;
        border-radius: .3rem;
        padding: 1.5rem 2rem;
        background: rgba(255, 255, 255, .6);
        color: #272726;
        font-size: 1rem;
        input, select{
            margin-top: 0.5rem;
            height: 2.5rem;
            border-radius: 0.3rem;
            border: 0.3px solid #0077a3;
            padding: 0.5rem;
            font-size: 1.2rem;
            color: gray;
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
            input{
                width: 400px;
            }

        }
        & div.duration{
            display: flex;
            label{
                input{
                    width: 10rem;
                }
            }
        }
        & div.accomodation{
            display: flex;
        }
        div.search{
            display: flex;
            justify-content: flex-end;
            margin-top: 2rem;
            button{
                width: 12rem;
                height: 3.5rem;
                color: #fff;
                border: 0;
                border-radius: 0.3rem;
                font-size: 1.2rem;
                background-color: #e26329;
            }
        }
    }
`;