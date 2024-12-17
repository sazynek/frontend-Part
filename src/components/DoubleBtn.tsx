import { Button, Flex } from 'antd'
import { FC } from 'react'
import { IDoubleBtn } from '../types/types'
import Link from 'next/link'

export const DoubleBtn: FC<IDoubleBtn> = ({ firstBtn, secondBtn, LogReg }) => {
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
						<Link href={'login'}>
							<Button
								type='default'
								className='p-5 border-primary hover:border-opacity-80'
							>
								{firstBtn}
							</Button>
						</Link>
					</li>
					<li>
						<Link href={'register'}>
							<Button
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
