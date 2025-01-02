'use client'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { BigTitle } from './BigTitle'
import { IComments } from '../types/types'
import { Flex } from 'antd'
import './componentStyle/componentStyle.scss'
import { useState } from 'react'
import { CommentsComponentLazy } from './CommentsComponentLazy'

export const Comments = () => {
	const [move, setMove] = useState<number>(0)
	const { data } = useQuery<IComments[]>({
		queryKey: ['comments'],
		queryFn: async () => {
			return (await axios.get('http://localhost:3100/comments')).data
		},
	})
	const func = (e: { target: { scrollLeft: number } }) => {
		if (data?.length)
			setMove(Math.round(e.target.scrollLeft / (500 + data?.length)))
		// console.log()
	}
	// console.log(move)

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
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				onScroll={func}
			>
				<Flex className=' justify-between gap-32  ml-80 my-20  '>
					{data?.map((item, idx) => {
						return (
							<CommentsComponentLazy
								key={item.id}
								item={{ id: item.id, content: item.content }}
								idx={idx}
								move={move}
							/>
						)
					})}
				</Flex>
			</div>
		</div>
	)
}
