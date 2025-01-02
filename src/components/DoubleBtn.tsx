import { Button, Flex } from 'antd'
import { FC } from 'react'
import { IDoubleBtn } from '../types/types'
import Link from 'next/link'
import { FaTruckLoading } from 'react-icons/fa'
import { toast } from 'react-toastify'

export const DoubleBtn: FC<IDoubleBtn> = ({ firstBtn, secondBtn, LogReg }) => {
	const handleLogin = () => {
		toast(`you ${firstBtn} from account`, {
			className: 'bg-red-200 bg-opacity-90',
			autoClose: 2000,
			closeButton() {
				return (
					<FaTruckLoading className='self-center text-red-400 size-10  ml-16' />
				)
			},
			closeOnClick: true,
			progressClassName: 'bg-red-500 text-green-500 h-10',
			position: 'bottom-left',
			hideProgressBar: true,
		})
	}

	const handleRegister = () => {
		toast(`you ${secondBtn} from account`, {
			className: 'bg-red-200 bg-opacity-90',
			autoClose: 2000,
			closeButton() {
				return (
					<FaTruckLoading className='self-center text-red-400 size-10  ml-16' />
				)
			},
			closeOnClick: true,
			progressClassName: 'bg-red-500 text-green-500 h-10',
			position: 'bottom-left',
			hideProgressBar: true,
		})
	}
	return (
		<div>
			{LogReg ? (
				<Flex
					className='self-center'
					component={'ul'}
					justify='space-between'
					gap={20}
				>
					<li>
						<Link href={'/login'}>
							<Button
								onClick={handleLogin}
								type='default'
								className='p-5 border-primary hover:border-opacity-80'
							>
								{firstBtn}
							</Button>
						</Link>
					</li>
					<li>
						<Link href={'/register'}>
							<Button
								onClick={handleRegister}
								type='primary'
								className='bg-primary hover:bg-opacity-80 rounded-xl p-5'
							>
								{secondBtn}
							</Button>
						</Link>
					</li>
				</Flex>
			) : (
				<Flex
					className='self-center'
					component={'ul'}
					justify='space-between'
					gap={20}
				>
					<li>
						<Button
							type='default'
							className='p-5 border-primary hover:border-opacity-80'
						>
							{firstBtn}
						</Button>
					</li>
					<li>
						<Button
							type='primary'
							className='bg-primary hover:bg-opacity-80 rounded-xl p-5'
						>
							{secondBtn}
						</Button>
					</li>
				</Flex>
			)}
		</div>
	)
}
