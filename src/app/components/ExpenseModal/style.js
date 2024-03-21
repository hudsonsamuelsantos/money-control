'use client'

import { styled } from 'styled-components'

export const ExpenseModal = styled.div`
    .modal_open {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        backdrop-filter: brightness(40%) blur(2px);

        .modal {
            background-color: #f0f2f5;
            width: 600px;
            opacity: 1;
            padding: 2rem;
        }

        .modal_box {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            flex: 1;
            gap: 0.8rem ;

            span {
                font-size: 1.5em;
                margin-bottom: 0.8rem;
            }

            form {
                display: flex;
                flex-direction: column;
                gap: 0.8rem;

                input {
                    padding: 0.8em;
                    outline: none;
                    border-radius: 3px;
                    border: transparent;
                    font-size: medium;
                }

                .amount_input {
                    display: flex;
                    flex-direction: column;

                    small {
                        color: #7C7C8A;
                        padding: 0.4rem;
                    }
                }
            }

            .actions{
                display: flex;
                gap: 1.6rem;

                .cancel_button {
                    border: 2px red solid;
                    flex: 1;
                    opacity: 0.6;
                    color: red;
                    text-decoration: none;
                    text-align: center;
                    padding: 0.6rem;
                    transition: 300ms;
                    border-radius: 4px;
                    font-size: medium;
                    
                    &:hover {
                        opacity: 1;
                    }
                }

                .save_button {
                    flex: 1;
                    background-color: #81d8f7;
                    border: 2px #81d8f7 solid;
                    border-radius: 4px;
                    font-size: medium;
                    transition: 300ms;

                    &:hover {
                        opacity: 0.6;
                    }
                }
            }
        }
    }
`