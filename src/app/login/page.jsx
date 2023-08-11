"use client"

import Link from "next/link"
import Button from "../components/Button"
import Form from "../components/Form"
import Header from "../components/Header"
import * as S from "./style"

export default function Login() {
    return (
      <S.Main>
        <Header />
        <Form>
          <label>
            Endereço de e-mail
            <input type="email" name="email" id="email" placeholder="johndoe@example.com"/>
          </label>
          <label>
            Sua senha
            <input type="password" name="password" id="password" placeholder="***********"/>
          </label>
          <Button type="submit" text={'Entrar no sistema'} />
        </Form>
        <footer>
          <Link href="/register"
          >
            Não possui conta? Crie uma agora!
          </Link>
        </footer>
      </S.Main>
    )
  }