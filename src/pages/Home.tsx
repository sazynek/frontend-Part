import { FC } from 'react'
import { Enjoy } from '../shared/first/Enjoy'
import { Stat } from '../shared/first/Stat'

export const Home: FC = () => {
	return (
		<div className=''>
			<main>
				<Enjoy />
				<Stat />
			</main>
		</div>
	)
}
