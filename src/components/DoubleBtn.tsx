import { Button, Flex } from 'antd'
import { FC } from 'react'
import { IDoubleBtn } from '../types/types'

export const DoubleBtn: FC<IDoubleBtn> = ({ firstBtn, secondBtn }) => {
	return (
		<div>
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
		</div>
	)
}
