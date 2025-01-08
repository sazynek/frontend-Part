'use client'
import { useCookies } from 'react-cookie'
import { DoubleBtn } from './DoubleBtn'
import { Button } from 'antd'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { query } from '../providers/Providers'
import { useRouter } from 'next/navigation'
import { FaTruckLoading } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { DateFunc } from '../globalFunc/globalFunc'

export const LogOutBtn = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const route = useRouter()
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [cookies, setCookies, removeCookies] = useCookies(['acc_token'])
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
			setCookies('acc_token', undefined, {
				path: '/',
				expires: DateFunc(),
			})
			query.invalidateQueries()
		},
		onSettled: () => {
			setCookies('acc_token', undefined, {
				path: '/',
				expires: DateFunc(),
			})
			query.invalidateQueries()
		},
	})

	const handleLogOut = async () => {
		mutate()

		setCookies('acc_token', undefined, { path: '/', expires: DateFunc() })
		setTimeout(() => {
			removeCookies('acc_token', { path: '/' })
			route.replace('login')
		}, 500)
		toast('you logOut from account', {
			className: 'bg-red-200 bg-opacity-90',
			autoClose: 2000,
			closeButton() {
				return (
					<FaTruckLoading className='self-center text-red-400 size-10 ml-16' />
				)
			},
			closeOnClick: true,
			progressClassName: 'bg-red-500 text-green-500 h-10',
			position: 'bottom-left',
			hideProgressBar: true,
		})
	}

	const LOG_OUT = cookies['acc_token'] && cookies['acc_token'] !== 'undefined'
	return (
		<div>
			{LOG_OUT ? (
				<li onClick={handleLogOut}>
					<Button
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
