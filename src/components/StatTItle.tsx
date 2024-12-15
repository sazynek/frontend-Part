import Paragraph from 'antd/es/typography/Paragraph'
import Title from 'antd/es/typography/Title'
import { FC } from 'react'
import { IStatTItle } from '../types/types'

export const StatMyTItle:FC<IStatTItle> = ({title,paragraph}) => {
	return (
		<div>
			<Title className='font-bold text-white'>{title}</Title>
			<Paragraph className='text-gray-500'>{paragraph}</Paragraph>
		</div>
	)
}
