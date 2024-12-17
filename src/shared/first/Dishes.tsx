'use client'
import { BigTitle } from '../../components/BigTitle'
import { Container } from '../../components/Container'
import { MyCard } from '../../components/MyCard'
import axios from 'axios'
import { useMutation, useQuery } from '@tanstack/react-query'
import { query } from '../../providers/Providers'
import { IResponse } from '../../types/types'

export const Dishes = () => {
	const { data: products } = useQuery<IResponse[]>({
		queryKey: ['products'],
		queryFn: async () =>
			(await axios.get('http://localhost:3100/products')).data,
	})

	const { mutate } = useMutation({
		mutationKey: ['mutate_status-prod'],
		mutationFn: (index?: string | undefined) => {
			// eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
			const { statusProductId, statusProduct } = products?.find(
				item => item.id === index,
			)!
			console.log(statusProductId, 'a is ')
			return axios.put(
				`http://localhost:3100/status-product/${statusProductId}`,
				{
					userLike: !statusProduct?.userLike,
				},
			)
		},
		onSuccess: ({ data }) => {
			console.log('is success', data, 'new data')
			query.invalidateQueries()
		},
	})

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const userLikeThis = (index?: string | undefined) => {
		mutate(index)
	}
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
				{products
					?.map((item,index) => {
						return (
							index>4 &&
							<div
								className=''
								key={item.id}
							>
								<MyCard
									onClick={userLikeThis}
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
					})
					}
			</div>
		</Container>
	)
}
