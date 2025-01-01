import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.scss'
import { ReactNode } from 'react'
import { Providers } from './../providers/Providers'
import axios from 'axios'
// import { useCookies } from 'react-cookie'

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['400', '500', '700', '900'],
	variable: '--montserrat',
	preload: true,
})
axios.defaults.withCredentials = true
export const metadata: Metadata = {
	title: 'Create Next App',

	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${montserrat.className}  font-normal text-base`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
