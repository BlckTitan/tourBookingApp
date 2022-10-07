import Styled from "styled-components";

export const Container = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
    background-color: #272726;
    font-size: 1rem;
    padding: 1rem;
    color: #e8e8e8;
    div{
        .logo{
            color: #e8e8e8;
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