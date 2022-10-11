import Styled from "styled-components";
export const ProfileInformationStyle = Styled.div`
    
    input, select, span{
        margin-top: 0.5rem;
        height: 2.5rem;
        border-radius: 0.3rem;
        border: 0.3px solid #0077a3;
        padding: 0.5rem;
        font-size: 1.2rem;
        color: #272726;
        width: 30rem;
    }
    div{
        margin-bottom: 1rem;
        label{
            display: flex;
            flex-direction: column;
            margin-right: 1.5rem;
            font-weight: 600;
        }
        input.phoneNumber{
            width: 20rem;
        }
    }
    div.otherInfo{
        display: flex;
        select{
            width: 10rem;
        }
    }
    div.continue{
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
        button:hover{
            background-color: #b44f20;
        }
    }
`;