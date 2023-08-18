'use client'

import { styled } from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    padding-top: 32px;
`;

export const Table = styled.section`
    background-color: #f0f2f5;
    height: 100%;
    width: 100%;
    margin-top: calc(32px + 68px);
    display: flex;
    justify-content: center;

    .container {
        width: max-content;
        display: flex;
        flex-direction: column;
    }

    .cards_box {
        display: flex;
        justify-content: center;
        width: 100%;
        gap: 28px;
        margin-top: -68px;
    }

    .button_box {
        width: 160px;
    }

    .table_line {
        background-color: #fff;
        border-radius: 0.25rem;
        height: 72px;
        display: flex;
        align-items: center;
        padding: 24px;
        gap: 180px;
        color: #7C7C8A;
    }
`;