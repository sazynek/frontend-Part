'use client'
import { Flex, Rate } from 'antd'
import Paragraph from 'antd/es/typography/Paragraph'
import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'
import { ICommentsComponent } from '../types/types'

export const CommentsComponent: FC<ICommentsComponent> = ({
	item,
	idx,
	move,
}) => {
	return (
		<Flex
			id={`observe${item.id}`}
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-ignore
			key={item.id}
			className={clsx(
				` bg-gray-100 w-[500px] rounded-lg p-5 flex-col  transition-all duration-150 `,
				{
					' min-w-[600px] h-[440px]': idx === move,
				},
				{
					'min-w-[500px]  h-[400px]': idx !== move,
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
									'text-4xl': idx !== move,
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
									'text-4xl': idx !== move,
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
}
