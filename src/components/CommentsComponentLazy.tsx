import dynamic from 'next/dynamic'
import { ClipLoader } from 'react-spinners'

export const CommentsComponentLazy = dynamic(
	() => import('./CommentsComponent').then(some => some.CommentsComponent),
	{
		loading: () => (
			<div className='flex justify-center relative right-20'>
				<ClipLoader className='self-center' />
			</div>
		),
		ssr: false,
	},
)
