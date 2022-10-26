import Styled from "styled-components";

export const CarouselCard = Styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    -webkit-transition: background 4s ease-in-out;
    -moz-transition: background 4s ease-in-out;
    -ms-transition: background 4s ease-in-out;
    -o-transition: background 4s ease-in-out;
    transition: background 4s ease-in-out;
`;

export const CarouselImg = Styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-repeat: no-repeat;
    background-attachment: scroll;
    position: absolute;
`;