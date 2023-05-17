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
        span{
            display: none;
        }
        span.logo_text{
            display: inline-block;
            color: #fff;
            font-size: 1.5rem;
            font-weight: 600;
            margin-left: 1rem;
            border: none;
        }
    }

    //responsive layout
    @media (max-width: 1024px){
        height: 3rem;
        background-color: #272726;
        padding: 0 1rem;
        div.logo{
            img{
                width: 12rem;
            }
            span{
                display: block;
                text-align: center;
                line-height: 0.1rem;
                padding: 0.1rem;
                border: 0.1px solid gray;
                border-radius: 0.3rem;
                .icon.burger{
                    color: gray;
                    font-size: 1.8rem;
                }
            }
            span.logo_text{
                display: inline-block;
                margin-left: 2.5rem !important;
            }
        }
    }
`;
/**
*@media (max-width: 768px){

}
mobileS: '320px'
mobileM: '375px'
mobileL: '425px'
tablet: '768px'
laptop: '1024px'
laptopL: '1440px'
desktop: '2560px'
*/