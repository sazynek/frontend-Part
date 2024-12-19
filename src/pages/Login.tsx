'use client'
import { FC } from 'react'
import { Col, Flex, Row } from 'antd'
import { LoginComponent } from '../shared/auth/LoginComponent'
import { useForm } from 'react-hook-form'
import { RightImage } from '../components/RightImage'

export const Login: FC = () => {
	const {
		control,
		reset,
		formState: { errors },
		clearErrors,
	} = useForm({
		mode: 'onChange',
		defaultValues: {
			username: '',
			email: '',
			passport: '',
		},
	})
	return (
		<main onClick={()=>clearErrors()}>
			<Row gutter={0}>
				<Col span={14}>
					<Flex className='bg-white h-screen justify-center align-middle'>
						<LoginComponent
							LogOrSignup='login'
							btnTitle='sign in'
							title='Sign Up to eatly'
							className='self-center'
							control={control}
							reset={reset}
							errors={errors}
						/>
					</Flex>
				</Col>
				<Col span={10}>
					<Flex
						className='bg-red-500 h-screen justify-center align-middle'
						style={{ background: 'url("login_bg.png")' }}
					>
						<RightImage className='self-center'/>
					</Flex>
				</Col>
			</Row>
		</main>
	)
}
