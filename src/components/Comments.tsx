'use client'
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { IComments, TGoogle } from '../types/types'
import { Flex } from 'antd'
import './componentStyle/componentStyle.scss'
import { FC, useEffect, useState } from 'react'
import { CommentsComponentLazy } from './CommentsComponentLazy'
import { toast } from 'react-toastify'
import { FaCheck } from 'react-icons/fa'
import { query } from '../providers/Providers'
import { BigTitle } from './BigTitle'

export const Comments: FC<TGoogle> = ({ google }) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { mutate: mutateEmail } = useMutation({
		mutationKey: ['email'],
		mutationFn: async (data: string) => {
			return await axios.post(
				`http://localhost:3100/email`,
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				//@ts-ignore
				{ to: data },
				{ withCredentials: true },
			)
		},
	})
	const { mutate } = useMutation({
		mutationKey: ['email-rf-token'],
		mutationFn: async () => {
			return (
				await axios.post(
					'http://localhost:3100/auth/refresh_token',
					{},
					{ withCredentials: true },
				)
			).data
		},
		onSuccess: data => {
			if (data !== undefined) {
				if (data?.email.length && data?.email !== '') {
					mutateEmail(data?.email)
				}
			}

			query.invalidateQueries()
		},
	})

	useEffect(() => {
		if (google) {
			console.log(`i am work,i am ${google}`)

			mutate()
			toast('you sign up with google', {
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [google])
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
		<div className='mb-32 overflow-hidden w-full '>
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
