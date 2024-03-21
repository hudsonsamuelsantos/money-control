'use client'

import { ModalProvider } from './context/ModalContext'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
	return (
		<ModalProvider>
			<html lang="pt-BR">
				<body className={inter.className}>{children}</body>
			</html>
		</ModalProvider>
	)
}
