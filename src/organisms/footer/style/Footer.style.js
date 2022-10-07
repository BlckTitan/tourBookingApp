import Styled from "styled-components";

export const FooterStyle = Styled.div`
    display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #272726;
        width: 100%;
        height: 300px;
        padding: 0 12rem;
        div.siteTitle{
            font-family: Times, 'Roboto',sans-serif, 'Montserrat';
            padding: 1.5rem 0;
            width: 100%;
            text-align: center;
            font-size: 4rem;
            color: #fff;
            border-bottom: 1px solid #e8e8e8; 
        }
        div.otherInfo{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            margin-top: 1rem;
            padding: 1rem;
            a{
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