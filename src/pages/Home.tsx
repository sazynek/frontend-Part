import { FC } from 'react'
import { Enjoy } from '../shared/first/Enjoy'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import { Stat } from '../shared/first/Stat.tsx'
import { Dishes } from '../shared/first/Dishes'
import { Restaurant } from '../shared/first/Restaurant'

export const Home: FC = () => {
	return (
		<main>
			<Enjoy />
			<Stat />
			<Restaurant />
			<Dishes />
		</main>
	)
}
