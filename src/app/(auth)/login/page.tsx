import { cookies } from 'next/headers'
import { Login } from '../../../pages/Login'
import { redirect } from 'next/navigation'

export default async function LoginPage() {
	const a = await cookies()
	const b = a.get('acc_token')
	if (b?.value !== 'undefined' && b?.value.length) {
		redirect('/home?google=true')
	} else {
		return (
			<div className=''>
				<Login
					LogOrSignup='sign up'
					btnTitle='sign in'
					title='Sign in to eatly'
				/>
			</div>
		)
	}
}
