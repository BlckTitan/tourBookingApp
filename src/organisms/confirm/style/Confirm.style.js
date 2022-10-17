import Styled from "styled-components";
export const ConfirmStyle = Styled.div`
    color: #272726;
    width: 100%;
    h1{
        margin: 1.5rem 0;
        font-size: 1.5vw;
    }

    div{
        margin-bottom: 1rem;
    }

    div.date,
    div.accomodation,
    div.otherInfo{
        display: flex;
        div{
            margin-right: 1.5rem;
        }
    }

    div.continue{
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
`;