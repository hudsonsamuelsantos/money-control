"use client"

import { MinusCircle } from '@phosphor-icons/react'
import * as S from './style'

export default function ExpenseItem(props) {
    return (
        <S.ExpenseItem>
            <span id='description'>
                {props.description}
            </span>
            <span id='value'>
                {props.value}
            </span>
            <span id='date'>
                {props.date}
            </span>
            <MinusCircle size={40} color='red'/>
        </S.ExpenseItem>
    )
}