'use client'
import { Input } from 'antd'
import { Controller, Form, useForm } from 'react-hook-form'
import { Container } from './Container'
export const Sign = () => {
	const { control, } = useForm()
	const handleForm = (data?) => {
		console.log(data ?? '')
	}
	return (
		<Container className=''>
			<Form
				control={control}
				onSubmit={handleForm}
			>
				<Controller
					name='first'
					control={control}
					render={({
						field: { ref, value, name, onBlur, onChange },
					}) => (
						<Input
							name={name}
							ref={ref}
							onChange={onChange}
							value={value}
							onBlur={onBlur}
						/>
					)}
				/>
			</Form>
		</Container>
	)
}
