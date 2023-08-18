"use client"

import Header from "../components/Header"
import * as S from "./style"
import ExpenseCard from "../components/ExpenseCard"
import Button from "../components/Button"
import ExpenseItem from "../components/ExpenseItem"

export default function Dashboard() {
    return (
      <S.Main>
        <Header noText/>
        <S.Table>
          <div className="container">
            <div className="cards_box">
              <ExpenseCard title="Entradas" up value="20,00"/>
              <ExpenseCard title="Saídas" down value="20,00"/>
              <ExpenseCard title="Total" all value="20,00"/>
            </div>
            <div className="button_box">
              <Button text="+ Adicionar Transação"/>   
            </div>
            <div className="table_line">
              <span>Descrição</span>
              <span>Valor</span>
              <span>Data</span>
            </div>
            <ExpenseItem description='teste' value='0,00' date='00/00/0000'/>
            <ExpenseItem description='teste' value='0,00' date='00/00/0000'/>
          </div>      
        </S.Table>
      </S.Main>
    )
  }