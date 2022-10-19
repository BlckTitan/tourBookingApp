import Styled from "styled-components";
export const ProfileInformationStyle = Styled.div`
    
    input, select, span{
        margin-top: 0.5rem;
        border-radius: 0.3rem;
        border: 0.3px solid #0077a3;
        padding: 0.5rem 0.5rem;
        font-size: 1.2vw;
        color: #272726;
        width: 30vw;
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
            width: 12vw;
            height: 3.5rem;
            color: #fff;
            border: 0;
            border-radius: 0.3rem;
            font-size: 1.2vw;
            background-color: #e26329;
        }
        button:hover{
            background-color: #b44f20;
        }
    }

    //responsive styling max-width 1024px
    @media (max-width: 1024px){
            input, select, span{
            margin-top: 0.5rem;
            padding: 0.5rem 0.5rem;
            font-size: 1rem;
            width: 25rem;
        }
        div.continue{
            button{
                height: 3rem;
                font-size: 1rem;
            }
        }
    }
    //responsive styling max-width 768px
    @media (max-width: 768px){
        input, select, span{
            width: 20rem;
        }
        div.continue{
            button{
                height: 3rem;
                font-size: 1rem;
            }
        }
    }
    //responsive styling max-width 600px
    @media (max-width: 600px){
        input, select, span{
            margin-top: 0.2rem;
            //width: 15rem;
        }

        div.otherInfo{
            display: flex;
            flex-direction: column;
            label.gender{
                margin-top: 0.4rem;
            }
        }

        div.continue{
            button{
                width: 20vw;
                height: 3rem;
                font-size: 1rem;
            }
        }
    }
    //responsive styling max-width 480px
    @media (max-width: 480px){
        input, select, span{
            width: 60vw;
            margin-top: 0.2rem;
        }

        div.otherInfo{
            display: flex;
            flex-direction: column;
            label.gender{
                margin-top: 0.3rem;
            }
        }

        div{
            input.phoneNumber{
                width: 60vw;
            }
        }

        div.continue{
            button{
                width: 25vw;
                height: 3rem;
                font-size: 1rem;
            }
        }
    }
`;