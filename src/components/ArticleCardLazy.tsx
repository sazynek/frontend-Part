import dynamic from 'next/dynamic'
import { ClipLoader } from 'react-spinners'

export const ArticleCardLazy = dynamic(
	() => import('./ArticleCard').then(some => some.ArticleCard),
	{
		loading: () => (
			<div className='flex justify-center relative right-20'>
				<ClipLoader className='self-center' />
			</div>
		),
		ssr: false,
	},
)
