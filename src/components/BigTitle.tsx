import { FC } from 'react'
import { IBigTitle } from '../types/types'
import Title from 'antd/es/typography/Title'
import clsx from 'clsx'

export const BigTitle: FC<IBigTitle> = ({ title, wordSelect, size,center }) => {
	const a = title.split(' ')
	return (
		<Title className={clsx('flex w-auto  text-3xl flex-wrap -ml-5 ',{
			'justify-center':center
		})}>
			{a.map(item => (
				<div className='' key={item}>
					<div
					style={{fontSize:size }}
						className={clsx(` min-w-full min-h-24 mx-2`, {
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
