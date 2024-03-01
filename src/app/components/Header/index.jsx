"use client"

import Image from "next/image"
import * as S from "./style"
import Logo from "@/../public/logo_bg_none.png"

export default function Header(props) {
    return (
        <S.Header>
            <Image 
                src={Logo}
                priority
                alt="Logo"
            />
            <h1>
                Money Control
            </h1>
            {!props.noText &&
                <h2>
                    {props.text}
                </h2>
            }
        </S.Header>
    )
}