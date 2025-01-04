'use client'
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { IParams, IResponse } from '../types/types'
import { BigTitle } from '../components/BigTitle'
import { Container } from '../components/Container'
import { query } from '../providers/Providers'
import { Accord } from '../components/Accord'
import { SortMenu } from '../shared/SortMenu'
import { FormProvider, useForm } from 'react-hook-form'
import { useState } from 'react'
import { MyCardLazy } from '../components/MyCardLazy'

export const Menu = () => {
	const [hay, setHay] = useState<boolean>(false)
	const { data: products } = useQuery<IResponse[]>({
		queryKey: ['products'],
		queryFn: async () =>
			(await axios.get('http://localhost:3100/products')).data,
	})
	const { mutate } = useMutation({
		mutationKey: ['mutate_status-prod'],
		mutationFn: async (index?: string | undefined) => {
			// eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
			const { statusProductId, statusProduct } = await products?.find(
				item => item.id === index,
			)!
			return await axios.put(
				`http://localhost:3100/status-product/${statusProductId}`,
				{
					userLike: !statusProduct?.userLike,
				},
			)
		},
		onSuccess: () => {
			query.invalidateQueries()
		},
	})
	const userLikeThis = (index?: string | undefined) => {
		mutate(index)
	}

	const method = useForm<IParams>({
		mode: 'onChange',
		defaultValues: {
			search: '',
			categ: 'chicken_with_vegetables',
			praise: 0,
		},
	})
	// const { reset } = method

	return (
		<>
			<Container className='mb-24'>
				<FormProvider {...method}>
					<SortMenu go={hay} />
				</FormProvider>
				<div
					className='downLine mb-32 pb-16'
					onClick={() => setHay(!hay)}
				>
					<div className='ml-6'>
						<BigTitle
							size={44}
							title='Chicken so Yummy'
							wordSelect='Yummy'
							className=''
						/>
					</div>
					<div className='grid grid-cols-5 gap-5'>
						{products?.map((item, indexNumber) => {
							if (
								item?.categories[0]?.productCategories ===
								'chicken'
							)
								return (
									<MyCardLazy
										isModal={false}
										indexNumber={indexNumber ?? ''}
										key={item?.id ?? ''}
										onClick={userLikeThis}
										cost={item?.praise?.cost ?? ''}
										famous={
											item?.statusProduct?.famous ?? ''
										}
										id={item?.id ?? ''}
										imgUrl={item?.imgUrl ?? ''}
										rating={
											item?.statusProduct?.rating ?? ''
										}
										time={item?.time ?? ''}
										title={item?.title ?? ''}
										alt='card'
										userLike={item?.statusProduct?.userLike}
									/>
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
						{products?.map((item, indexNumber) => {
							if (
								item?.categories[0]?.productCategories ===
								'chicken_with_vegetables'
							)
								return (
									<MyCardLazy
										isModal={false}
										indexNumber={indexNumber ?? ''}
										key={item?.id ?? ''}
										onClick={userLikeThis}
										cost={item?.praise?.cost ?? ''}
										famous={
											item?.statusProduct?.famous ?? ''
										}
										id={item?.id ?? ''}
										imgUrl={item?.imgUrl ?? ''}
										rating={
											item?.statusProduct?.rating ?? ''
										}
										time={item?.time ?? ''}
										title={item?.title ?? ''}
										alt='card'
										userLike={item?.statusProduct?.userLike}
									/>
								)
						})}
					</div>
				</div>
			</Container>
			<Accord />
		</>
	)
}
