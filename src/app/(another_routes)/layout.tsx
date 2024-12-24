import { ReactNode } from 'react'
import { Header } from '../../shared/Header'
import { Footer } from '../../shared/Footer'
import { Cart } from '../../components/Cart'

export default function AnotherLayout({
	children,
}: Readonly<{ children: ReactNode }>) {
	return (
		<main>
			<Header />
			<Cart />
			{children}
			<Footer />
		</main>
	)
}
