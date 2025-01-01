'use client'
import { useCookies } from 'react-cookie'
import { DoubleBtn } from './DoubleBtn'
import { Button } from 'antd'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { query } from '../providers/Providers'
import { useRouter } from 'next/navigation'

export const LogOutBtn = () => {
	const route = useRouter()
	const [cookies, , removeCookie] = useCookies(['acc_token'])
	const { mutate } = useMutation({
		mutationKey: ['logOut'],
		mutationFn: async () => {
			return await axios.post(
				'http://localhost:3100/auth/logout',
				{},
				{ withCredentials: true },
			)
		},
		onSuccess: () => {
			query.invalidateQueries()
		},
	})

	const handleLogOut = () => {
		removeCookie('acc_token')
		mutate()

		route.replace('login')
	}
	const LOG_OUT = cookies['acc_token'] && cookies['acc_token'] !== 'undefined'
	return (
		<div>
			{LOG_OUT ? (
				<li>
					<Button
						onClick={handleLogOut}
						type='default'
						className='p-5 border-primary hover:border-opacity-80 text-center mr-10'
					>
						LogOut
					</Button>
				</li>
			) : (
				<DoubleBtn
					LogReg={true}
					firstBtn='Login'
					secondBtn='Sign up'
				/>
			)}
		</div>
	)
}
