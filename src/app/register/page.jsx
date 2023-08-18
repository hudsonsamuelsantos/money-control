"use client"

import Form from "../components/Form"
import Header from "../components/Header"
import Button from "../components/Button"
import * as S from "./style"
import Link from "next/link"

export default function Register() {
  return (
    <S.Main>
      <Header text="Registre-se e comece a usar!"/>
      <Form>
        <label>
          Seu nome
          <input type="text" name="name" id="name" placeholder="Nome"/>
        </label>
        <label>
          Endereço de e-mail
          <input type="email" name="email" id="email" placeholder="johndoe@example.com"/>
        </label>
        <label>
          Sua senha
          <input type="password" name="password" id="password" placeholder="***********"/>
        </label>
        <label>
          Confirme sua senha
          <input type="password" name="password" id="password" placeholder="***********"/>
        </label>
        <Button type="submit" text={'Cadastrar no sistema'} />
      </Form>
      <footer>
        <Link href="/login"
        >
          Já possui conta? Faça login agora!
        </Link>
      </footer>
    </S.Main>
  )
}