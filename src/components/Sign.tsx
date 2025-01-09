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
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { FaCheck } from 'react-icons/fa'
import { DateFunc } from '../globalFunc/globalFunc'
// import { second } from ''
// const jsonPlaceFolder = 'https://jsonplaceholder.typicode.com/users'
export const Sign: FC<ISign> = ({
	className,
	btnTitle,
	LogOrSignup,
	...rest
}) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { mutate: mutateEmail } = useMutation({
		mutationKey: ['email'],
		mutationFn: async (data: string) => {
			return await axios.post(
				`${process.env.SERVER}email`,
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				//@ts-ignore
				{ to: data },
				{ withCredentials: true },
			)
		},
	})
	const route = useRouter()

	const { mutate, data } = useMutation<unknown>({
		mutationKey: ['Auth'],
		mutationFn: async data => {
			const authFinish = btnTitle === 'sign in' ? '/login' : '/register'
			return await axios.post(
				`${process.env.SERVER}auth${authFinish}`,
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				//@ts-ignore
				{ ...data },
				{ withCredentials: true },
			)
		},
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		onSuccess: (data, variables: { email: string }) => {
			if (data !== undefined) {
				toast(`you ${btnTitle} in account, wait`, {
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
				if (variables?.email.length && variables?.email !== '') {
					mutateEmail(variables?.email)
				}
			}

			query.invalidateQueries()
		},
	})

	const [, setCookies, removeCookie] = useCookies(['acc_token'])
	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		if (data?.data?.acc_token) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-ignore
			setCookies('acc_token', data?.data?.acc_token, {
				path: '/',
				expires: DateFunc(),
			})
		} else {
			removeCookie('acc_token')
		}
		if (data !== undefined) {
			setTimeout(() => {
				route.replace('/home')
			}, 500)
		}
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
	}, [data, data?.data?.acc_token, removeCookie, route, setCookies])
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
										// eslint-disable-next-line @typescript-eslint/ban-ts-comment
										//@ts-ignore
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
						{
							// eslint-disable-next-line @typescript-eslint/ban-ts-comment
							//@ts-ignore
							rest?.errors?.username && (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									key={'error-username'}
									className='text-red-700 text-lg  font-thin italic my-2 '
								>
									{
										// eslint-disable-next-line @typescript-eslint/ban-ts-comment
										//@ts-ignore
										rest?.errors?.username?.message
									}
								</motion.div>
							)
						}
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
								// eslint-disable-next-line @typescript-eslint/ban-ts-comment
								//@ts-ignore
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
				{
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					//@ts-ignore
					rest?.errors?.email && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							key={'error-email'}
							className='text-red-700 text-lg  font-thin italic my-2 '
						>
							{
								// eslint-disable-next-line @typescript-eslint/ban-ts-comment
								//@ts-ignore
								rest?.errors?.email?.message
							}
						</motion.div>
					)
				}
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
								// eslint-disable-next-line @typescript-eslint/ban-ts-comment
								//@ts-ignore
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
				{
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					//@ts-ignore
					rest?.errors?.password && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							key={'error-password'}
							className='text-red-700 text-lg  font-thin italic my-2 '
						>
							{
								// eslint-disable-next-line @typescript-eslint/ban-ts-comment
								//@ts-ignore
								rest?.errors?.password?.message
							}
						</motion.div>
					)
				}
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
