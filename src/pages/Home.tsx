'use client'
import { FC, useState } from 'react'
import { Header } from '../shared/Header'
import { Footer } from '../shared/Footer'
import clsx from 'clsx'

export const Home: FC = () => {
	const [count, setCount] = useState<boolean>(false)
	return (
		<div className=''>
			<Header />
			<main
				onClick={() => setCount(!count)}
				className={clsx('p-5 transition-colors duration-150', {
					'bg-red-500': !count,
					'bg-green-500': count,
				})}
			>
				hay
				{/* any content */}
			</main>
			<Footer />
		</div>
	)
}
