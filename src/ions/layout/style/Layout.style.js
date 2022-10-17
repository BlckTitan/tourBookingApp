import Styled from 'styled-components';

export const Container = Styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    main{
        width: 100%;
        height: calc(100% - 8rem);
        position: absolute;
        top: 8rem;
        background-color: #e8e8e8;
    }
    @media (max-width: 1024px){
        main{
            height: calc(100% - 3rem);
            top: 3rem;
            display: flex;
            justify-content: center;
        }
    }
`;