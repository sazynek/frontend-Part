import { Flex } from 'antd'
import Paragraph from 'antd/es/typography/Paragraph'
import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

export const CommentsInnerComponent: FC<{ idx: number; move: number }> = ({
	idx,
	move,
}) => {
	return (
		<Flex className='justify-between mb-7 min-w-[400px]  transition-all duration-150 '>
			<Flex className='gap-5'>
				<Image
					className='self-start'
					src={'/man0.png'}
					alt='avatar'
					width={65}
					height={65}
				/>
				<div className='self-end '>
					<Paragraph
						className={clsx(
							`font-bold leading-3`,
							{
								'text-4xl': idx !== move,
							},
							{
								'text-xl': idx === move,
							},
						)}
					>
						Alexander R.
					</Paragraph>
					<Paragraph
						className={clsx(
							`text-gray-700 leading-3 transition-all duration-150 `,
							{
								'text-4xl': idx !== move,
							},
							{
								'text-xl': idx === move,
							},
						)}
					>
						01 Year With us
					</Paragraph>
				</div>
			</Flex>
			<div>
				<Image
					className='self-start fill-red-500'
					src={'/dblCommas.svg'}
					alt='avatar'
					width={65}
					height={65}
				/>
			</div>
		</Flex>
	)
}
