import Paragraph from 'antd/es/typography/Paragraph'
import Title from 'antd/es/typography/Title'
import { FC } from 'react'
import { IStatTItle } from '../types/types'

export const StatTItle: FC<IStatTItle> = ({ title, paragraph }) => {
	return (
		<div className='text-center w-1/2 mx-auto'>
			<Title className='font-bold text-white text-[43px]'>{title}</Title>
			<Paragraph className='text-gray-300 text-base  font-medium text-wrap '>
				{paragraph}
			</Paragraph>
		</div>
	)
}
