'use client'
import { Modal } from 'antd'
import Paragraph from 'antd/es/typography/Paragraph'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import { IResponse } from '../types/types'
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { MyCardLazy } from './MyCardLazy'
import { query } from '../providers/Providers'
import { Container } from './Container'

export const ModalMenu: FC<{
	param: string
	searchParams: string
	isModal: boolean
}> = ({ param, searchParams, isModal = true }) => {
	const { data: products } = useQuery<IResponse[]>({
		queryKey: ['products', searchParams],
		queryFn: async () =>
			(
				await axios.post(
					`${process.env.SERVER}products/filter`,
					{},
					{ params: { id: searchParams } },
				)
			).data,
	})
	const { mutate } = useMutation({
		mutationKey: ['mutate_status-prod'],
		mutationFn: async (index?: string | undefined) => {
			// eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
			const { statusProductId, statusProduct } = products?.find(
				item => item.id === index,
			)!
			return await axios.put(
				`${process.env.SERVER}status-product/${statusProductId}`,
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
		query.invalidateQueries()
	}

	const [modal, setModal] = useState(true)
	const router = useRouter()
	const handleRoute = () => {
		setModal(false)
		router.back()
	}
	// console.log(products)

	return isModal ? (
		<Modal
			onOk={handleRoute}
			onClose={handleRoute}
			onCancel={handleRoute}
			open={modal}
		>
			<div>
				<Paragraph>Product: {param}</Paragraph>
				{products?.map((item, indexNumber) => {
					// console.log(item)

					return (
						<MyCardLazy
							className='flex justify-center w-[45%] mx-auto'
							isModal={true}
							indexNumber={indexNumber ?? ''}
							key={'modalA' + item?.id || ''}
							onClick={userLikeThis}
							cost={item?.praise?.cost ?? ''}
							famous={item?.statusProduct?.famous ?? ''}
							id={item?.id ?? ''}
							imgUrl={item?.imgUrl ?? ''}
							rating={item?.statusProduct?.rating ?? ''}
							time={item?.time ?? ''}
							title={item?.title ?? ''}
							alt='card'
							userLike={item?.statusProduct?.userLike}
						/>
					)
				})}
			</div>
		</Modal>
	) : (
		<Container className='pb-24'>
			<div className='relative mb-24 w-1/2 mx-auto'>
				<Paragraph className='text-center font-bold absolute left-40 z-20 '>
					Product: {param}
				</Paragraph>
				{products?.map((item, indexNumber) => {
					return (
						<MyCardLazy
							className='flex justify-center w-[45%] mx-auto relative top-14 right-6 '
							isModal={true}
							indexNumber={indexNumber ?? ''}
							key={'modalB' + item?.id || ''}
							onClick={userLikeThis}
							cost={item?.praise?.cost ?? ''}
							famous={item?.statusProduct?.famous ?? ''}
							id={item?.id ?? ''}
							imgUrl={item?.imgUrl ?? ''}
							rating={item?.statusProduct?.rating ?? ''}
							time={item?.time ?? ''}
							title={item?.title ?? ''}
							alt='card'
							userLike={item?.statusProduct?.userLike}
						/>
					)
				})}
			</div>
		</Container>
	)
}
