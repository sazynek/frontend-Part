import { FC } from 'react'
import { Login } from './Login'

export const Register: FC = () => {
	return (
		<main>
			<Login
				LogOrSignup='login'
				btnTitle='sign up'
				title='Sign Up to eatly'
			/>
		</main>
	)
}
