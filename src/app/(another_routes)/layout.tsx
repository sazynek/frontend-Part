import { ReactNode } from 'react'
import { Header } from '../../shared/Header'
import { Footer } from '../../shared/Footer'

export default function AnotherLayout({
	children,
	parallel,
}: Readonly<{ children: ReactNode; parallel: ReactNode }>) {
	return (
		<main>
			<Header />
			
			{children}
			{parallel}
			<Footer />
		</main>
	)
}
