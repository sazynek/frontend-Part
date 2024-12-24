'use client'
import Card from 'antd/es/card/Card'
import Meta from 'antd/es/card/Meta'
import '../app/support.scss'
import { FC } from 'react'
import Image from 'next/image'
import { IMyCard, IResponse } from '../types/types'
import { FaBookmark, FaMinus } from 'react-icons/fa'
import clsx from 'clsx'
import Paragraph from 'antd/es/typography/Paragraph'
import Text from 'antd/es/typography/Text'
import { Flex } from 'antd'
import { FaPlus } from 'react-icons/fa6'

import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { query } from '../providers/Providers'

export const MyCard: FC<IMyCard> = ({
	cost,
	famous,
	id,
	imgUrl,
	rating,
	time,
	title,
	alt,
	userLike,
	isCart,
	cartItemId,
}) => {
	const mutation = useMutation({
		mutationKey: ['product-collections'],
		mutationFn: async () => {
			return await axios.post(
				'http://localhost:3100/product-collections',
				{
					cost,
					famous,

					imgUrl,
					rating,
					time,
					title,
					alt,
					userLike,
					cartItemId,
				},
			)
		},
		onSuccess: () => {
			query.invalidateQueries()
		},
	})
	const mutation2 = useMutation({
		mutationKey: ['product-collections'],
		mutationFn: async (id: string) => {
			return await axios.delete(
				`http://localhost:3100/product-collections/${id}`,
			)
		},
		onSuccess: () => {
			query.invalidateQueries()
		},
	})

	// const { deleteCartItem } = useCart(select => select)
	const handleAddCartItem = () => {
		mutation.mutate()
	}

	const handleDeleteCartItem = () => {
		// console.log(id)
		if (id !== '') mutation2.mutate(id)
	}

	//
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
		<Card
			className='w-full h-full p-5 relative'
			hoverable
			cover={
				<>
					{!isCart && (
						<FaBookmark
							onClick={() => userLikeThis(id)}
							className={clsx(
								'w-auto absolute right-3 top-3 cursor-pointer',
								{ 'text-red-500': userLike === true },
							)}
						/>
					)}
					<Image
						alt={alt ?? 'food'}
						src={'/' + imgUrl}
						className=' '
						width={400}
						height={400}
					/>
				</>
			}
		>
			<Paragraph
				className={clsx(
					'p-2 text-xs rounded-md flex justify-self-start  align-middle bg-opacity-50',
					{
						'bg-green-300 text-green-500 font-bold':
							famous.toLowerCase() === 'supreme',
					},
					{
						'bg-red-300 text-red-500 font-bold':
							famous.toLowerCase() === 'trending',
					},
					{
						'bg-yellow-300 text-yellow-500 font-bold':
							famous.toLowerCase() === 'healthy',
					},
				)}
			>
				{famous}
			</Paragraph>
			<Meta
				title={title}
				className='mb-2 font-extrabold text-4xl leading-8'
			/>
			<Flex
				justify='left'
				gap={5}
			>
				<Paragraph>{time + 'min'}</Paragraph>
				<Image
					className='self-start mt-0.5 mx-2'
					src={'/star.svg'}
					alt='star'
					width={20}
					height={20}
				/>
				<Paragraph>{rating}</Paragraph>
			</Flex>
			<Flex justify='space-between'>
				<Text className='my-0 py-0 leading-3 text-black text-lg font-bold self-center'>
					${cost}
					<span className='text-gray-500 text-sm font-bold'>.99</span>
				</Text>
				{!isCart && (
					<button
						onClick={handleAddCartItem}
						type='button'
						className='rounded-lg p-2 
					bg-gray-800 
					text-white 
					hover:bg-opacity-30 
					hover:text-gray-800 
					transition-colors 
					duration-150'
					>
						<FaPlus className='text-xl' />
					</button>
				)}
				{isCart && (
					<button
						onClick={handleDeleteCartItem}
						type='button'
						className='rounded-lg p-2 
					bg-gray-800 
					text-white 
					hover:bg-opacity-30 
					hover:text-gray-800 
					transition-colors 
					duration-150'
					>
						<FaMinus className='text-xl' />
					</button>
				)}
			</Flex>
		</Card>
	)
}
