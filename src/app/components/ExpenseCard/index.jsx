"use client"

import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from '@phosphor-icons/react'
import * as S from './style'

export default function ExpenseCard(props) {
    return (
        <S.Card>
            <div>
                <span>{props.title}</span>
                {props.up &&
                    <ArrowCircleUp size={40} color='green'/>
                }
                {props.down &&
                    <ArrowCircleDown size={40} color='red'/>
                }
                {props.all &&
                    <CurrencyDollar size={40}/>
                }
            </div>
            <span className="value">R$ {props.value}</span>
        </S.Card>
    )
}