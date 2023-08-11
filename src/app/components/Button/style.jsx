"use client"

import { styled } from "styled-components";

export const Button = styled.button`
    margin-top: 32px;
    margin-bottom: 32px;
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 4px;
    background-color: #81d8f7;
    font-weight: bold;
    font-size: 12px;
    transition: 0.15s;
    cursor: pointer;

    &:hover{
        opacity: 0.9;
    }
`;