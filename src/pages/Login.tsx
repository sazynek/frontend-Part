'use client'
import { FC } from 'react'
import { Col, Flex, Row } from 'antd'
import { LoginComponent } from '../shared/auth/LoginComponent'
import { useForm } from 'react-hook-form'
import { RightSwipeComponent } from '../components/RightSwipeComponent'
import { ILogin } from '../types/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { schemaFunc } from '../components/schema/zodSchema'

export const Login: FC<ILogin> = ({ LogOrSignup, btnTitle, title }) => {

	const {
		control,
		reset,
		formState: { errors },
		clearErrors,
	} = useForm({
		resolver: zodResolver(schemaFunc(LogOrSignup === 'login' ? 1 : 0)),
		mode: 'onChange',
		defaultValues: {
			username: '',
			email: '',
			password: '',
		},
	})

	return (
		<main onClick={() => clearErrors()}>
			<Row gutter={0}>
				<Col span={14}>
					<Flex className='bg-white h-screen justify-center align-middle'>
						<LoginComponent
							LogOrSignup={LogOrSignup}
							btnTitle={btnTitle}
							title={title}
							className='self-center'
							control={control}
							reset={reset}
							errors={errors}
						/>
					</Flex>
				</Col>
				<Col span={10}>
					<Flex
						className='bg-red-500 h-screen justify-center align-middle '
						style={{ background: 'url("login_bg.png")' }}
					>
						<RightSwipeComponent className='self-center justify-self-center' />
					</Flex>
				</Col>
			</Row>
		</main>
	)
}
