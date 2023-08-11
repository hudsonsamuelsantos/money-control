"use client"

import Image from "next/image"
import * as S from "./style"
import Logo from "@/../public/logo_bg_none.png"

export default function Header() {
    return (
        <S.Header>
            <Image src={Logo}/>
            <h1>
                Money Control
            </h1>
            <h2>
                Faça login e comece a usar!
            </h2>
        </S.Header>
    )
}