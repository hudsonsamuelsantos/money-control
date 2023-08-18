"use client"

import { styled } from "styled-components";

export const ExpenseItem = styled.div`
    background-color: #fff;
    margin-top: 3px;
    border-radius: 0.25rem;
    height: 72px;
    display: flex;
    align-items: center;
    position: relative;

    span#description {
        position: absolute;
        left: 24px;
    }
    
    span#value {
        position: absolute;
        left: 280px;
    }

    span#date {
        position: absolute;
        left: 498px;
    }

    svg {
        position: absolute;
        right: 24px;
        cursor: pointer;
    }
`;