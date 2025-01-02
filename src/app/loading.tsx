'use client'
import { DotLoader } from 'react-spinners'
export const dynamicParams = true
export default function Loading() {
	return (
		<div className='h-screen w-full  flex justify-center align-middle'>
			<DotLoader
				className='self-center'
				size={200}
				color='#6c5fbc'
			/>
		</div>
	)
}
