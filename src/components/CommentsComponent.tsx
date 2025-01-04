'use client'
import { Flex, Rate } from 'antd'
import clsx from 'clsx'
import { FC } from 'react'
import { ICommentsComponent } from '../types/types'
import { CommentsInnerComponentLazy } from './CommentsInnerComponentLazy'
import { random } from 'lodash-es'

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
			{idx === move ? (
				<CommentsInnerComponentLazy
					idx={idx}
					move={move}
				/>
			) : (
				''
			)}
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
				<Rate
					className='self-end'
					count={5}
					value={random(5, true)}
				/>
			</div>
		</Flex>
	)
}
