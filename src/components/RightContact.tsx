import { Button, Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { Controller, Form, useFormContext } from 'react-hook-form'
import { BigTitle } from './BigTitle'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

export const RightContact = () => {
	const { mutate } = useMutation({
		mutationKey: ['comments-mutate'],
		mutationFn: async (data: {
			username: string
			email: string
			content: string
		}) => {
			return await axios.post(
				'comments',
				{
					name: data.username,
					email: data.email,
					content: data.content,
				},
				{ withCredentials: true },
			)
		},
	})
	const {
		formState: { errors },
		control,
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
		// mutate(data)
		console.log(data, 'rightContact data')
		return ''
	}
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
							{errors?.username?.message}
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
							{errors?.email?.message}
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
							{errors?.content?.message}
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
