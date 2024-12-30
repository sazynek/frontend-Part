'use client'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { BigTitle } from './BigTitle'
import { IComments } from '../types/types'
import { Flex, Rate } from 'antd'
import './componentStyle/componentStyle.scss'
import Image from 'next/image'
import Paragraph from 'antd/es/typography/Paragraph'
import { useInView } from 'react-intersection-observer'
import clsx from 'clsx'
import { useState } from 'react'

export const Comments = () => {
	const [move, setMove] = useState<number>(0)
	const { data } = useQuery<IComments[]>({
		queryKey: ['comments'],
		queryFn: async () => {
			return (await axios.get('/comments')).data
		},
	})
	const { inView, ref } = useInView({})

	const func = e => {
		setMove(Math.round(e.target.scrollLeft / 500))
		// console.log()
	}
	console.log(move)

	return (
		<div className='mb-32 overflow-hidden '>
			<BigTitle
				size={44}
				title='Customer say'
				center='center'
				wordSelect='Customer'
				className='mt-10'
			/>

			<div
				className='scrollStyles '
				onScroll={func}
			>
				<Flex className=' justify-between gap-32  ml-80 my-20'>
					{data?.map((item, idx) => {
						// console.log(idx);

						return (
							<Flex
								ref={ref}
								id={`observe${item.id}`}
								// eslint-disable-next-line @typescript-eslint/ban-ts-comment
								//@ts-ignore
								key={item.id}
								className={clsx(
									` bg-gray-100 w-[500px] rounded-lg p-5 flex-col  transition-all duration-150 `,
									{
										' min-w-[600px] h-[440px]':
											idx === move,
									},
									{
										'min-w-[500px]  h-[400px]':
											idx !== move,
									},
								)}
							>
								<Flex className='justify-between mb-7 min-w-[400px]  transition-all duration-150 '>
									<Flex className='gap-5'>
										<Image
											className='self-start'
											src={'/man0.png'}
											alt='avatar'
											width={65}
											height={65}
										/>
										<div className='self-end '>
											<Paragraph
												className={clsx(
													`font-bold leading-3`,
													{
														'text-4xl':
															idx !== move,
													},
													{
														'text-xl': idx === move,
													},
												)}
											>
												Alexander R.
											</Paragraph>
											<Paragraph
												className={clsx(
													`text-gray-700 leading-3 transition-all duration-150 `,
													{
														'text-4xl':
															idx !== move,
													},
													{
														'text-xl': idx === move,
													},
												)}
											>
												01 Year With us
											</Paragraph>
										</div>
									</Flex>
									<div>
										<Image
											className='self-start fill-red-500'
											src={'/dblCommas.svg'}
											alt='avatar'
											width={65}
											height={65}
										/>
									</div>
								</Flex>
								<div
									className={clsx(
										`mb-10 transition-all duration-150 `,
										{
											'text-2xl': idx === move,
										},
										{
											'text-base': idx !== move,
										},
									)}
								>
									{item.content}
								</div>
								<div className='flex h-full '>
									<Rate className='self-end' />
								</div>
							</Flex>
						)
					})}
				</Flex>
			</div>
		</div>
	)
}
