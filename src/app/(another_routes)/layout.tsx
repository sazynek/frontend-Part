import { ReactNode } from 'react'
import { Header } from '../../shared/Header'
import { Footer } from '../../shared/Footer'
import { Cart } from '../../components/Cart'
import { GetStaticPaths } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
	// Get all posts via API, file, etc.
	const posts = [
		{ id: '1' },
		{ id: '2' },
		{ id: '3' },
		{ id: '4' },
		{ id: '5' },
	] // Example
	const paths = posts.map(post => ({
		params: { id: post.id },
	}))
	return { paths, fallback: false }
}

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
