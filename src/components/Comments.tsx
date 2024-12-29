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
export const Comments = () => {
	const { data } = useQuery<IComments[]>({
		queryKey: ['comments'],
		queryFn: async () => {
			return (await axios.get('/comments')).data
		},
	})
	const {} = useInView()
	return (
		<div className='mb-32 overflow-hidden '>
			<BigTitle
				size={44}
				title='Customer say'
				center='center'
				wordSelect='Customer'
				className='mt-10'
			/>
			<div className='scrollStyles '>
				<Flex className=' justify-between gap-32  ml-80 my-20'>
					{data?.map(item => (
						<Flex
							// eslint-disable-next-line @typescript-eslint/ban-ts-comment
							//@ts-ignore
							key={item.id}
							className=' bg-gray-100 w-[500px] rounded-lg p-5 flex-col'
						>
							<Flex className='justify-between mb-7 min-w-[400px] '>
								<Flex className='gap-5'>
									<Image
										className='self-start'
										src={'/man0.png'}
										alt='avatar'
										width={65}
										height={65}
									/>
									<div className='self-end '>
										<Paragraph className='font-bold leading-3'>
											Alexander R.
										</Paragraph>
										<Paragraph className='text-gray-700 leading-3'>
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
							<div className='mb-10'>{item.content}</div>
							<div className='flex h-full '>
								<Rate className='self-end' />
							</div>
						</Flex>
					))}
				</Flex>
			</div>
		</div>
	)
}
