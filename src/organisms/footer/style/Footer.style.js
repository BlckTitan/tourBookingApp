import Styled from "styled-components";

export const FooterStyle = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #272726;
    width: 100%;
    height: 16rem;
    padding: 0 12rem;
    div.logo{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 1rem 0;
        border-bottom: 1px solid #e8e8e8;
        img{
            width: 25rem;
            height: 5rem;
            object-fit: cover;
        }
        span.logo_text{
            display: inline-block;
            color: #fff;
            font-size: 4.5rem;
            font-weight: 600;
            margin-left: 1rem;
            border: none;
        }
    }
    div.otherInfo{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-top: 1rem;
        padding: 1vw;
        div.socials{
            width: 20vw;
            text-wrap: nowrap;
            
        }
        div.info{
            width: Calc(100% - 20vw);
            text-align: right;
        }
        a, p{
            color: #e8e8e8;
            margin-right: 1rem;
            font-size: 1rem;
            .icon{
                font-size: 2vw;
            }
            .icon.facebook{
                color: #35548e;
            }
            .icon.instagram{
                color: #8134AF;
            }
            .icon.whatsapp{
                color: #4AC958;
            }
        }
        a:hover{
            color: #e26329;
        }
    }

    //mobile responsiveness max-width 1024
    @media (max-width: 1024px){
        padding: 0 5rem;
        div.logo{
            img{
                width: 20rem;
                height: 5rem;
                object-fit: cover;
            } 
        }
        div.otherInfo{
            div.socials{
                width: 20vw;
                text-wrap: nowrap;
                
            }
           a, p{
                .icon{
                    font-size: 1.5rem;
                }
            }
        }
    }

    //mobile responsiveness max-width 768px
    @media (max-width: 768px){
        padding: 0 2.5rem;
        div.otherInfo{
            display: flex;
            flex-direction: column-reverse;
            align-items: center;
            text-align: center;
            div.socials{
                display: flex;
                justify-content: center;
                margin-top: 1rem;
            }
        }
    }

    //mobile responsiveness max-width 480px
    @media (max-width: 480px){
        padding: 0 1rem;
        text-align: center;

        div.logo{
            padding: 0.5rem 0;
            
            img{
                width: 15rem;
                height: 4rem;
                object-fit: cover;
            } 

        }

        div.otherInfo{
            div.socials{
                margin-top: 1rem;
            }
        }
     }
`;