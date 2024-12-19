import { ReactNode } from 'react'
import { Header } from '../../shared/Header'
import { Footer } from '../../shared/Footer'

export default function AnotherLayout({
	children,
}: Readonly<{ children: ReactNode }>) {
	return (
		<main>
			<Header />
			{children}
			<Footer />
		</main>
	)
}
