import { FC } from 'react'
import { Enjoy } from '../shared/first/Enjoy'
import { Stat } from '../shared/first/Stat'
import { Dishes } from '../shared/first/Dishes'

export const Home: FC = () => {
	return (
		<div className=''>
			<main>
				<Enjoy />
				<Stat />
				<Dishes/>
			</main>
		</div>
	)
}
