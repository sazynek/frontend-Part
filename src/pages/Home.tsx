import { Enjoy } from '../shared/first/Enjoy'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import { Stat } from '../shared/first/Stat.tsx'
import { Dishes } from '../shared/first/Dishes'
import { Restaurant } from '../shared/first/Restaurant'
import { Accord } from '../components/Accord'
import { Comments } from '../components/Comments'
import { FC } from 'react'
import { TGoogle } from '../types/types'

export const Home: FC<TGoogle> = ({ google }) => {
	return (
		<main>
			<Enjoy />
			<Stat />
			<Restaurant />
			<Dishes />
			<Comments google={google} />
			<Accord />
		</main>
	)
}
