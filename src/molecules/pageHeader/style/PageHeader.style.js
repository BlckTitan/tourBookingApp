import Styled from "styled-components";

export const Container = Styled.div`
    display: flex;
    align-items: center;
    height: 3.5rem;
    background-color: #272726;
    padding: 0 1rem;
    div.logo{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        img{
            width: 15rem;
            height: 3.3rem;
            object-fit: cover;
        } 
    }
    ul{
        display:  flex;
        justify-content: end;
        width: 60%;
        li{
            display: flex;
            align-items: center;
            margin-right: 1rem;
            .icon{
                margin: .5rem;
            }
            .name{
                font-size:  1.2rem;
            }
            a{
                color: #e8e8e8;
            }
        }
    }
`;