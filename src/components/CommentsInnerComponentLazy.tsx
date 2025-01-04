'use client'

import dynamic from 'next/dynamic'
import { ClipLoader } from 'react-spinners'

export const CommentsInnerComponentLazy = dynamic(
	() =>
		import('./CommentsInnerComponent').then(
			some => some.CommentsInnerComponent,
		),
	{
		loading: () => (
			<div className='flex justify-center relative right-20'>
				<ClipLoader className='self-center' />
			</div>
		),
		ssr: false,
	},
)
