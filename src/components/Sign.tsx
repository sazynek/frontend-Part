'use client'
import { Button, Input } from 'antd'
import { Controller, Form } from 'react-hook-form'
import { ISign } from '../types/types'
import { FC, useEffect } from 'react'
import clsx from 'clsx'
import Paragraph from 'antd/es/typography/Paragraph'
import Link from 'next/link'
import './componentStyle/componentStyle.scss'
import Password from 'antd/es/input/Password'
import { motion, AnimatePresence } from 'framer-motion'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { query } from '../providers/Providers'
import { useCookies } from 'react-cookie'
const jsonPlaceFolder = 'https://jsonplaceholder.typicode.com/users'
export const Sign: FC<ISign> = ({
	className,
	btnTitle,
	LogOrSignup,
	...rest
}) => {
	const { mutate, data } = useMutation({
		mutationKey: ['Auth'],
		mutationFn: async data => {
			const authFinish = btnTitle === 'sign in' ? '/login' : '/register'
			return await axios.post(
				`http://localhost:3100/auth${authFinish}`,
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				//@ts-ignore
				{ ...data },
				{ withCredentials: true },
			)
		},
		onSuccess: () => {
			query.invalidateQueries()
		},
	})
	const [cookies, setCookies] = useCookies(['acc_token', 'rf_token'])
	useEffect(() => {
		console.log("it's rf_token:", cookies['rf_token'])

		setCookies('acc_token', data?.data?.acc_token)
		// setCookies('rf_token')
	}, [data?.data?.acc_token, setCookies])
	const handleForm = ({
		data: { email, password, username: name },
	}: {
		data: { username?: string; email: string; password: string }
	}) => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		if (name !== '') mutate({ name, password, email })
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		else mutate({ password, email })
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		rest.reset()
	}
	return (
		<Form
			className={clsx(className, 'max-w-[350px] relative')}
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-ignore
			control={rest.control}
			onSubmit={handleForm}
		>
			{btnTitle === 'sign up' && (
				<>
					<Controller
						name={'username'}
						// eslint-disable-next-line @typescript-eslint/ban-ts-comment
						//@ts-ignore
						control={rest.control}
						rules={{
							required: true,
						}}
						render={({
							field: { ref, value, name, onBlur, onChange },
						}) => (
							<Input
								placeholder={name}
								name={name}
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
										'mb-6': !rest?.errors?.username,
									},
								)}
								ref={ref}
								onChange={onChange}
								value={value}
								onBlur={onBlur}
							/>
						)}
					/>
					<AnimatePresence initial={true}>
						{rest?.errors?.username && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								key={'error-username'}
								className='text-red-700 text-lg  font-thin italic my-2 '
							>
								{rest?.errors?.username?.message}
							</motion.div>
						)}
					</AnimatePresence>
				</>
			)}
			<Controller
				name='email'
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				//@ts-ignore
				control={rest.control}
				rules={{
					required: true,
				}}
				render={({ field: { ref, value, name, onBlur, onChange } }) => (
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
								'mb-6': !rest?.errors?.email,
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
				{rest?.errors?.email && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						key={'error-email'}
						className='text-red-700 text-lg  font-thin italic my-2 '
					>
						{rest?.errors?.email?.message}
					</motion.div>
				)}
			</AnimatePresence>
			<Controller
				name='password'
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				//@ts-ignore
				control={rest.control}
				rules={{
					required: true,
				}}
				render={({ field: { ref, value, name, onBlur, onChange } }) => (
					<Password
						placeholder={name}
						name={name}
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
								'mb-6': !rest?.errors?.password,
							},
						)}
						ref={ref}
						onChange={onChange}
						value={value}
						onBlur={onBlur}
					/>
				)}
			/>
			<AnimatePresence initial={true}>
				{rest?.errors?.password && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						key={'error-password'}
						className='text-red-700 text-lg  font-thin italic my-2 '
					>
						{rest?.errors?.password?.message}
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
				{btnTitle}
			</Button>
			<Paragraph className='text-center w-full'>
				Already Have An Account?
				<Link
					href={clsx({
						login: LogOrSignup === 'login',
						register: LogOrSignup === 'sign up',
					})}
					className='capitalize text-primary font-bold ml-2'
				>
					{LogOrSignup}
				</Link>
			</Paragraph>
		</Form>
	)
}
