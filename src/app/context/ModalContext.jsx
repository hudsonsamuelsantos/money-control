import { createContext, useState } from 'react'

export const ModalContext = createContext()

export const ModalProvider = ({children}) => {
	
	const [isOpen, setIsOpen] = useState(false)

	const toggleModal = () => {
		setIsOpen(isOpen === false ? true : false)
	}
    
	return (
		<ModalContext.Provider value={{isOpen, toggleModal}}>
			{children}
		</ModalContext.Provider>
	)
}