"use client"

import { styled } from "styled-components";

export const Form = styled.form`
    width: 400px;

    label {
        display: flex;
        flex-direction: column;
        font-weight: bold;
        font-size: 16px;
        color: #E1E1E6;
        margin-top: 16px;
    }

    label input {
        outline: none;
        color: #7C7C8A;
        background-color: #202024;
        border: none;
        height: 48px;
        border-radius: 4px;
        padding: 12px 16px;
        margin-top: 12px;
    }
`;