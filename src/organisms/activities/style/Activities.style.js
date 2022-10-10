import Styled from "styled-components";

export const ActivitiesStyle = Styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 500px;
    background-color: #291d16;
    & div.activityBooking{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 3.5rem 1.5rem;
        color: #d0c0b7;
        width: 70%;
        text-align: center;
        position: relative;
        @keyframes textSwingLeft{
            0%   {transform: translateX(-60%);}
            100% {transform: translateX(0);}
        }  100% {transform: translateX(0);}
        }
        h1{
            position: absolute;
            top: -25px;
            font-family: 'caveat';
            font-size: 5rem; 
            width: 800px;
            height: 200px;
            color: #533B2C;
            background-color: #E8E0DB;
            margin-bottom: 5rem;
            box-shadow: 4px 4px 6px #533B2C;
            animation-name: textSwingLeft;
            animation-duration: 4s;
        }
        p{
            position: absolute;
            bottom: 150px;
            font-family: 'caveat';
            font-size: 2rem;
            animation-duration: 4s;
        }
    }
    & div.activityImg{
        position: relative;
        width: 30%;
        height: 100%;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        form{
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 0;
            padding: 2.5rem 2.5rem;
            backdrop-filter: blur(3px);
            width: 100%;
            height: 100%;
            h3.title{
                font-family: 'caveat';
                color: #291d16;
                font-size: 3rem;
            }
            div.submit{
                display: flex;
                justify-content: end;
                button{
                    width: 12rem;
                    height: 4rem;
                    background-color: #458cc7;
                    color: #fff;
                    font-family: 'caveat';
                    font-size: 2rem;
                    border-radius: 5px;
                    border: 2px solid #4389c5;
                }
                button:hover{
                    background-color: #1c5884;
                    border: 2px solid #1c5885;
                }
            }
        }
    }
`;