import Paragraph from 'antd/es/typography/Paragraph'
import { FC } from 'react'
import { IStatTItle } from '../types/types'
import cl from '../shared/first/stat.module.scss'
export const StatTItle: FC<IStatTItle> = ({ title, paragraph }) => {
	return (
		<div className='text-center w-1/2 mx-auto'>
			<Paragraph className={`font-bold text-white ${cl.fontSize}`}>
				{title}
			</Paragraph>
			<Paragraph className='text-gray-300 text-base  font-medium text-wrap '>
				{paragraph}
			</Paragraph>
		</div>
	)
}
