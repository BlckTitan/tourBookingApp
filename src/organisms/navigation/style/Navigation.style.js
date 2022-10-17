import Styled from "styled-components";

export const Nav = Styled.nav`
    width: 100%;
    height: 8vh;
    position: fixed;
    top: 0;
    z-index: 999;
    @media (max-width: 1024px){
        height: auto;
    }
`;