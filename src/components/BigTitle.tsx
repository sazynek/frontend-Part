import { FC } from 'react'
import { IBigTitle } from '../types/types'
import Title from 'antd/es/typography/Title'
import clsx from 'clsx'

export const BigTitle: FC<IBigTitle> = ({ title, wordSelect, size }) => {
	const a = title.split(' ')
	return (
		<Title className='flex w-auto  text-3xl flex-wrap -ml-5'>
			{a.map(item => (
				<div key={item}>
					<div
					style={{fontSize:size }}
						className={clsx(`mx-2 min-w-full min-h-24`, {
							'text-primary': item === wordSelect,
						})}
					>
						{item}
					</div>
				</div>
			))}
		</Title>
	)
}
