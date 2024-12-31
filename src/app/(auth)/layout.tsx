import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { AuthHeader } from '../../shared/AuthHeader'
import { AuthFooter } from '../../shared/AuthFooter'
export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function AuthLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<>
			<AuthHeader className='absolute top-5 left-14 z-10' />
			{children}
			<AuthFooter className=' px-10 w-[58%] absolute bottom-5' />
		</>
	)
}
