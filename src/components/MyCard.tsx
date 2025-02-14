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
import { toast } from 'react-toastify'
import { FaCheck } from 'react-icons/fa'
import { TiDeleteOutline } from 'react-icons/ti'
import { ClipLoader } from 'react-spinners'
import Link from 'next/link'
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
	indexNumber,
	isModal,
	className,
}) => {
	const mutation = useMutation({
		mutationKey: ['product-collections'],
		mutationFn: async () => {
			return await axios.post(
				`${process.env.SERVER}product-collections`,
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
				`${process.env.SERVER}product-collections/${id}`,
			)
		},
		onSuccess: () => {
			query.invalidateQueries()
		},
	})

	// const { deleteCartItem } = useCart(select => select)
	const handleAddCartItem = () => {
		mutation.mutate()
		toast('you food was be add to cart', {
			className: 'bg-green-200 bg-opacity-90',
			autoClose: 2000,
			closeOnClick: true,
			closeButton() {
				return (
					<FaCheck className='self-center ml-16 mr-0 text-green-400 size-6' />
				)
			},
			progressClassName: 'bg-red-500 text-green-500 h-10',
			position: 'bottom-left',
			hideProgressBar: true,
		})
	}

	const handleDeleteCartItem = () => {
		// console.log(id)
		if (id !== '') {
			mutation2.mutate(id)
			toast('you food was be deleted from cart', {
				className: 'bg-red-200 bg-opacity-90',
				autoClose: 2000,
				closeButton() {
					return (
						<TiDeleteOutline className='self-center ml-2  text-red-400 size-10' />
					)
				},
				closeOnClick: true,
				progressClassName: 'bg-red-500 text-green-500 h-10',
				position: 'bottom-left',
				hideProgressBar: true,
			})
		}
	}

	//
	const { data: products } = useQuery<IResponse[]>({
		queryKey: ['products'],
		queryFn: async () =>
			(await axios.get(`${process.env.SERVER}products`)).data,
	})

	const { mutate } = useMutation({
		mutationKey: ['mutate_status-prod'],
		mutationFn: (index?: string | undefined) => {
			// eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
			const { statusProductId, statusProduct } = products?.find(
				item => item.id === index,
			)!
			return axios.put(
				`${process.env.SERVER}status-product/${statusProductId}`,
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
			className={clsx(`w-full h-full p-5 relative`, className)}
			hoverable
		>
			{!isCart && (
				<FaBookmark
					onClick={() => userLikeThis(id)}
					className={clsx(
						'w-auto absolute right-3 top-3 cursor-pointer z-20 ',
						{ 'text-red-500': userLike === true },
					)}
				/>
			)}
			{isModal ? (
				<>
					<Image
						alt={alt ?? 'food'}
						src={'/' + imgUrl}
						className=' '
						width={400}
						height={400}
					/>
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
				</>
			) : (
				<Link href={`/menu/${indexNumber}?id=${id}`}>
					<Image
						alt={alt ?? 'food'}
						src={'/' + imgUrl}
						className=' '
						width={400}
						height={400}
					/>
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
				</Link>
			)}
			{mutation.isPending || mutation2.isPending ? (
				<div className='flex justify-end relative '>
					<ClipLoader className='self-center' />
				</div>
			) : (
				<Flex justify='space-between'>
					<Text className='my-0 py-0 leading-3 text-black text-lg font-bold self-center'>
						${cost}
						<span className='text-gray-500 text-sm font-bold'>
							.99
						</span>
					</Text>
					{!isCart && (
						<button
							name='no-modal'
							onClick={handleAddCartItem}
							type='button'
							className='rounded-lg p-2 
					bg-gray-800 
					text-white 
					hover:bg-opacity-30 
					hover:text-gray-800 
					transition-colors 
					duration-150
					relative
					z-20
					'
						>
							<FaPlus className='text-xl' />
						</button>
					)}
					{isCart && (
						<button
							name='no-modal '
							onClick={handleDeleteCartItem}
							type='button'
							className='rounded-lg p-2 
					bg-gray-800 
					text-white 
					hover:bg-opacity-30 
					hover:text-gray-800 
					transition-colors 
					duration-150
					relative
					z-20
					'
						>
							<FaMinus className='text-xl' />
						</button>
					)}
				</Flex>
			)}
		</Card>
	)
}
