'use client'
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { IResponse } from '../types/types'
import { MyCard } from '../components/MyCard'
import { BigTitle } from '../components/BigTitle'
import { Container } from '../components/Container'
import { query } from '../providers/Providers'
import { Accord } from '../components/Accord'
import { SortMenu } from '../shared/SortMenu'

export const Menu = () => {
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
	const userLikeThis = (index?: string | undefined) => {
		mutate(index)
	}

	products?.map(item => {
		console.log(item.categories[0].productCategories)
	})
	return (
		<>
			<Container className='mb-24'>
				<SortMenu />
				<div className='downLine mb-32 pb-16'>
					<div className='ml-6'>
						<BigTitle
							size={44}
							title='Chicken so Yummy'
							wordSelect='Yummy'
							className=''
						/>
					</div>
					<div className='grid grid-cols-5 gap-5'>
						{products?.map(item => {
							if (
								item.categories[0].productCategories ===
								'chicken'
							)
								return (
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
											userLike={
												item.statusProduct.userLike
											}
										/>
									</div>
								)
						})}
					</div>
				</div>
				<div>
					<div className='ml-6'>
						<BigTitle
							size={44}
							title='Chicken with Vegetables'
							wordSelect='Vegetables'
							className=''
						/>
					</div>
					<div className='grid grid-cols-5 gap-5'>
						{products?.map(item => {
							if (
								item.categories[0].productCategories ===
								'chicken_with_vegetables'
							)
								return (
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
											userLike={
												item.statusProduct.userLike
											}
										/>
									</div>
								)
						})}
					</div>
				</div>
			</Container>
			<Accord />
		</>
	)
}
