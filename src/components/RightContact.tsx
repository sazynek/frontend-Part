import { Button, Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { Controller, Form, useFormContext } from 'react-hook-form'
import { BigTitle } from './BigTitle'

export const RightContact = () => {
	const {
		formState: { errors },
		control,
	} = useFormContext()

	const handleForm = ({ data }: { data: unknown }) => {
		console.log(data, 'rightContact data')
		return ''
	}
	return (
		<Form
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
					name='comment'
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
									'mb-6': !errors?.comment,
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
					{errors?.comment && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							key={'error-comment'}
							className='text-red-700 text-lg  font-thin italic my-2 '
						>
							{errors?.comment?.message}
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
					hay
				</Button>
			</div>
		</Form>
	)
}
