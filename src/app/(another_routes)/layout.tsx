import { ReactNode } from 'react'
import { Header } from '../../shared/Header'
import { Footer } from '../../shared/Footer'
import { Cart } from '../../components/Cart'

export default function AnotherLayout({
	children,
	parallel,
}: Readonly<{ children: ReactNode; parallel: ReactNode }>) {
	return (
		<main>
			<Header />
			<Cart />
			{children}
			{parallel}
			<Footer />
		</main>
	)
}
