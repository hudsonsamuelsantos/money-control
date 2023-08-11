import { styled } from "styled-components";

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        color: #fff;
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 7px;
    }

    h2 {
        color: #7C7C8A;
        font-size: 18px;
        font-weight: normal;
        margin-bottom: 24px;
    }

    img {
        height: 120px;
        width: 120px;
        margin-bottom: 16px;
    }
`;