import Styled from "styled-components";
//import img from '../img/luca-mazzotta-ytrfvd7_4EU-unsplash.jpg';

export const Container = Styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    & div.bookBG{
        display: flex;
        justify-content: start;
        align-items: center;
        width: 100%;
        height: 500px;
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
            background: rgba(255, 255, 255, .2);
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
    }
    & div.navigation{
        width: 100%;
        height: 6rem;
        position: relative;
        ul{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 1000px;
            height: 9rem;
            padding: 1rem 2rem;
            background-color: #fff;
            position: absolute;
            top: 50px;
            left: 25%;
            right: 25%;
            color: #1B2F5D;
            box-shadow: 5px 5px #e8e8e8;
            li{
                
                
                a{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                    color: #1B2F5D;
                    font-weight: 500;
                    .icon{
                        font-size: 3rem;
                        margin-bottom: 0.5rem; 
                    }
                }
                a:hover{
                    color: #e26329;
                }
            }
        }

    }
    
    & footer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #272726;
        width: 100%;
        height: 400px;
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

    }
`;


//backdrop-filter: blur(100px);