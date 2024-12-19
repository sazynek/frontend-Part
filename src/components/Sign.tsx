'use client'
import { Button, Input } from 'antd'
import { Controller, Form } from 'react-hook-form'
import { ISign } from '../types/types'
import { FC } from 'react'
import clsx from 'clsx'
import Paragraph from 'antd/es/typography/Paragraph'
import Link from 'next/link'
import './componentStyle/componentStyle.scss'
import Password from 'antd/es/input/Password'
import { motion, AnimatePresence } from 'framer-motion'
export const Sign: FC<ISign> = ({
	className,
	btnTitle,
	LogOrSignup,
	...rest
}) => {
	const handleForm = (data?: unknown) => {
		console.log(data ?? '')
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
