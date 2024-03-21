'use client'

import { useContext } from 'react'
import * as S from './style'
import { ModalContext } from '@/app/context/ModalContext'

export default function ExpenseModal() {

	const {isOpen, toggleModal} = useContext(ModalContext)

	if (isOpen) {
		return (
			<S.ExpenseModal>
				<div className='modal_open'>
					<div className="modal">
						<div className="modal_box">
							<span>
								Nova Transação
							</span>
							<form>
								<input 
									type="text" 
									name="" 
									id=""
									placeholder='Descrição'
								/>
								<div className='amount_input'>
									<input 
										type="number" 
										step="0.01" 
										id="amount" 
										name="amount" 
										placeholder="0,00" 
									/>
									<small>
										Use o sinal - (negativo) para despesas e , (vírgula) para casas decimais
									</small>
								</div>
								<input 
									type="date" 
									id="date" 
									name="date" 
								/>
								<div className="actions">
									<a href="#" className='cancel_button' onClick={toggleModal}>
											Cancelar
									</a>
									<button className='save_button'>
											Salvar
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>       
			</S.ExpenseModal>
		)
	}
}
