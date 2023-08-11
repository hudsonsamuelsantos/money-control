"use client"

import * as S from './style'

export default function Button({text}) {
    return (
        <S.Button type='submit'>
            {text}
        </S.Button>
    )
}