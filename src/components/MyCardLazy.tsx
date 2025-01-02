import dynamic from 'next/dynamic'
import { ClipLoader } from 'react-spinners'

export const MyCardLazy = dynamic(
	() => import('./MyCard').then(some => some.MyCard),
	{
		loading: () => (
			<div className='flex justify-center relative right-20'>
				<ClipLoader className='self-center' />
			</div>
		),
		ssr: false,
	},
)
