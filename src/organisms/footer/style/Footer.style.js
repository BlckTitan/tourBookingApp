import Styled from "styled-components";

export const FooterStyle = Styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #272726;
        width: 100%;
        height: 15rem;
        padding: 0 12rem;
        div.logo{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            padding: 2rem 0;
            border-bottom: 1px solid #e8e8e8;
            img{
                width: 25rem;
                height: 5rem;
                object-fit: cover;
            } 
        }
        div.otherInfo{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            margin-top: 1rem;
            padding: 1rem;
            a, p{
                color: #e8e8e8;
                margin-right: 1rem;
                font-size: 1rem;
                .icon{
                    font-size: 2rem;
                }
            }
            a:hover{
                color: #e26329;
            }
        }
`;