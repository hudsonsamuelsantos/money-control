"use client"

import { styled } from "styled-components";

export const Card = styled.div`
    background-color: #fff;
    width: 246px;
    height: 136px;
    border-radius: 0.25rem;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .value {
        font-size: 32px;
    }
`; 