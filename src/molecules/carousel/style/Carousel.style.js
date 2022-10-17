import Styled from "styled-components";

export const CarouselCard = Styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;
export const CarouselImg = Styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-repeat: no-repeat;
    background-attachment: scroll;
    position: absolute;
    transition: all 0.4s 0s ease-in-out;
`;