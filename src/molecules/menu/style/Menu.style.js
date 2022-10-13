import Styled from "styled-components";

export const Container = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    height: Calc(100% - 3rem);
    background-color: #fff;
    font-size: 1.1rem;
    padding: 0 1rem;
    color: #0077a3;
    cursor: pointer; 

    & ul{
        display:  flex;
        justify-content: start;
        width: 100%;
        & li{
            width: 8rem;
            & a{
                color: #0077a3;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                .icon{
                    margin: 0.5rem;
                    font-Size: 2rem;
                }
            }
            & a:hover{
                color: #e26329;
            }
            a.active.home, 
            a.active.bookings{
                color: #e26329;
            }
        }
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        a{
            color: #0077a3;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .icon{
                margin: 0.5rem;
                font-Size: 2rem;
            }
        }
        a:hover{
            color: #e26329;
        }           
    }
    
`;
/*
export const DropDown = Styled.ul`
    display: flex;
    flex-direction: column !important;
    align-items: start !important;
    width: 12rem !important;
    position: absolute;
    margin-top: 1rem;
    height: 8rem;
    border: 1px solid blue;
    background-color: #fff;
    li{
        display: flex;
        justify-content: center;
        align-items: center;
        a.text{
            display: flex !important;
            justify-content: flex-end !important;
            background-color: red;
            color: #0077a3;
            width: Calc(100% - 2rem) !important;
            padding: 0!important;
        }
        a:hover{
            color: #e26329;
        }
        .icon{
            width: 2rem;
            background-color: green;
        }
    }
`;
*/
//e26329