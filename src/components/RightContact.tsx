import { Button, Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { Controller, Form, useFormContext } from 'react-hook-form'
import { BigTitle } from './BigTitle'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect } from 'react'
import { FaCheck } from 'react-icons/fa'
import { toast } from 'react-toastify'

import { TiDeleteOutline } from 'react-icons/ti'
import { query } from '../providers/Providers'

export const RightContact = () => {
	const { mutate, isSuccess } = useMutation({
		mutationKey: ['comments-mutate'],
		mutationFn: async (data: {
			username: string
			email: string
			content: string
		}) => {
			try {
				return await axios.post(
					'http://localhost:3100/comments',
					{
						// name: data.username,
						// email: data.email,
						content: data?.content,
					},
					{ withCredentials: true },
				)
			} catch (e) {
				console.log(`error ${e}`)

				throw new Error(`comment is not publish. Error: ${e}`)
			}
		},
		onSuccess: () => {
			toast('you comment was be add', {
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
			query.invalidateQueries()
		},
		onError: () => {
			toast('you comment was not be add', {
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
			query.invalidateQueries()
		},
	})
	const {
		formState: { errors },
		control,
		reset,
	} = useFormContext()

	const handleForm = ({
		data,
	}: {
		data: {
			username: string
			email: string
			content: string
		}
	}) => {
		mutate(data)
		// console.log(data, 'rightContact data')

		return ''
	}

	useEffect(() => {
		if (isSuccess) reset()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isSuccess])
	return (
		<Form
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-ignore
			control={control}
			onSubmit={handleForm}
		>
			<BigTitle
				size={44}
				title='Customer Supporter'
				wordSelect='Supporter'
				className=''
			/>
			<div className='-ml-5'>
				<Controller
					name='username'
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					//@ts-ignore
					control={control}
					rules={{
						required: true,
					}}
					render={({
						field: { ref, value, name, onBlur, onChange },
					}) => (
						<Input
							placeholder={name}
							className={clsx(
								`
						border-solid 
						border-primary 
						border-opacity-50 
						border-2 
						p-3 
						rounded-xl
						`,
								{
									'mb-6': !errors?.username,
								},
							)}
							name={name}
							ref={ref}
							onChange={onChange}
							value={value}
							onBlur={onBlur}
						/>
					)}
				/>
				<AnimatePresence initial={true}>
					{errors?.username && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							key={'error-username'}
							className='text-red-700 text-lg  font-thin italic my-2 '
						>
							{
								// eslint-disable-next-line @typescript-eslint/no-explicit-any
								errors?.username?.message as any
							}
						</motion.div>
					)}
				</AnimatePresence>
				<Controller
					name='email'
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					//@ts-ignore
					control={control}
					rules={{
						required: true,
					}}
					render={({
						field: { ref, value, name, onBlur, onChange },
					}) => (
						<Input
							placeholder={name}
							className={clsx(
								`
						border-solid 
						border-primary 
						border-opacity-50 
						border-2 
						p-3 
						rounded-xl
						`,
								{
									'mb-6': !errors?.email,
								},
							)}
							name={name}
							ref={ref}
							onChange={onChange}
							value={value}
							onBlur={onBlur}
						/>
					)}
				/>
				<AnimatePresence initial={true}>
					{errors?.email && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							key={'error-email'}
							className='text-red-700 text-lg  font-thin italic my-2 '
						>
							{
								// eslint-disable-next-line @typescript-eslint/no-explicit-any
								errors?.email?.message as any
							}
						</motion.div>
					)}
				</AnimatePresence>
				<Controller
					name='content'
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					//@ts-ignore
					control={control}
					rules={{
						required: true,
					}}
					render={({
						field: { ref, value, name, onBlur, onChange },
					}) => (
						<TextArea
							placeholder={name}
							className={clsx(
								`
						border-solid 
						border-primary 
						border-opacity-50 
						border-2 
						p-3
                        h-80 
						rounded-xl
						`,
								{
									'mb-6': !errors?.content,
								},
							)}
							name={name}
							ref={ref}
							onChange={onChange}
							value={value}
							onBlur={onBlur}
						/>
					)}
				/>
				<AnimatePresence initial={true}>
					{errors?.content && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							key={'error-comment'}
							className='text-red-700 text-lg  font-thin italic my-2 '
						>
							{
								// eslint-disable-next-line @typescript-eslint/no-explicit-any
								errors?.content?.message as any
							}
						</motion.div>
					)}
				</AnimatePresence>
				<Button
					htmlType='submit'
					variant='filled'
					className='uppercase bg-primary text-white 
				text-lg 
				font-bold
				p-5
				rounded-xl
				text-center 
				w-full 
				py-8 
				mb-5'
				>
					Submit
				</Button>
			</div>
		</Form>
	)
}
