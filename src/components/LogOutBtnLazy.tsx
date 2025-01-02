'use client'
import dynamic from 'next/dynamic'
import { ClipLoader } from 'react-spinners'

export const LogOutBtnLazy = dynamic(
	() => import('./LogOutBtn').then(mod => mod.LogOutBtn),
	{
		loading: () => (
			<div className='flex justify-center relative right-20'>
				<ClipLoader className='self-center' />
			</div>
		),
		ssr: false,
	},
)
