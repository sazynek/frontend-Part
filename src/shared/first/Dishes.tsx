'use client'
import { BigTitle } from '../../components/BigTitle'
import { Container } from '../../components/Container'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
// import { query } from '../../providers/Providers'
import { IResponse } from '../../types/types'
import { MyCardLazy } from '../../components/MyCardLazy'

export const Dishes = () => {
	const { data: products } = useQuery<IResponse[]>({
		queryKey: ['products'],
		queryFn: async () =>
			(await axios.get('http://localhost:3100/products')).data,
	})

	return (
		<Container className='mb-24'>
			<div className='text-center  mx-auto'>
				<BigTitle
					size={45}
					title='Our Top Dishes'
					wordSelect='Dishes'
					center='center'
				/>
			</div>
			<div className='grid grid-cols-5 gap-5'>
				{products?.map((item, index) => {
					return (
						index > 4 && (
							<div
								className=''
								key={item.id}
							>
								<MyCardLazy
									cost={item.praise.cost}
									famous={item.statusProduct.famous}
									id={item.id}
									imgUrl={item.imgUrl}
									rating={item.statusProduct.rating}
									time={item.time}
									title={item.title}
									alt='card'
									userLike={item.statusProduct.userLike}
								/>
							</div>
						)
					)
				})}
			</div>
		</Container>
	)
}
