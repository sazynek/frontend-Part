import { FC } from 'react'
import { IRightImage } from '../types/types'
import { Enjoyrright } from './Enjoyrright'
import Paragraph from 'antd/es/typography/Paragraph'
import { BigTitle } from './BigTitle'
import clsx from 'clsx'
import { Flex } from 'antd'

export const RightImage: FC<IRightImage> = ({ className, subtitle, title }) => {
	return (
		<div className={clsx(className, 'w-full')}>
			<Flex className='flex-col'>
				<Enjoyrright />
				<div>
					<BigTitle
						wordSelect=''
						center='center'
						className='text-white mt-10 '
						size={44}
						title={title}
					/>
					<Paragraph className='text-base text-white text-center -mt-12'>
						{subtitle}
					</Paragraph>
				</div>
			</Flex>
		</div>
	)
}
