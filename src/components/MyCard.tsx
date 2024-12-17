import Card from 'antd/es/card/Card'
import Meta from 'antd/es/card/Meta'
import '../app/support.scss'
import { FC } from 'react'
import Image from 'next/image'
import { IMyCard } from '../types/types'
import { FaBookmark } from 'react-icons/fa'
import clsx from 'clsx'
import Paragraph from 'antd/es/typography/Paragraph'
import Text from 'antd/es/typography/Text'
import { Flex } from 'antd'
import { FaPlus } from 'react-icons/fa6'
export const MyCard: FC<IMyCard> = ({
	cost,
	famous,
	id,
	imgUrl,
	rating,
	time,
	title,
	alt,
	userLike,
	onClick,
}) => {
	return (
		<Card
			className='w-full h-full p-5 relative'
			hoverable
			cover={
				<>
					<FaBookmark
						onClick={() => onClick(id)}
						className={clsx(
							'w-auto absolute right-3 top-3 cursor-pointer',
							{ 'text-red-500': userLike === true },
						)}
					/>
					<Image
						alt={alt ?? 'food'}
						src={'/' + imgUrl}
						className=' '
						width={400}
						height={400}
					/>
				</>
			}
		>
			<Paragraph
				className={clsx(
					'p-2 text-xs rounded-md flex justify-self-start  align-middle bg-opacity-50',
					{
						'bg-green-300 text-green-500 font-bold':
							famous.toLowerCase() === 'supreme',
					},
					{
						'bg-red-300 text-red-500 font-bold':
							famous.toLowerCase() === 'trending',
					},
					{
						'bg-yellow-300 text-yellow-500 font-bold':
							famous.toLowerCase() === 'healthy',
					},
				)}
			>
				{famous}
			</Paragraph>
			<Meta
				title={title}
				className='mb-2 font-extrabold text-4xl leading-8'
			/>
			<Flex
				justify='left'
				gap={5}
			>
				<Paragraph>{time + 'min'}</Paragraph>
				<Image
					className='self-start mt-0.5 mx-2'
					src={'/star.svg'}
					alt='star'
					width={20}
					height={20}
				/>
				<Paragraph>{rating}</Paragraph>
			</Flex>
			<Flex justify='space-between'>
				<Text className='my-0 py-0 leading-3 text-black text-lg font-bold self-center'>
					${cost}
					<span className='text-gray-500 text-sm font-bold'>.99</span>
				</Text>
				<button
					type='button'
					className='rounded-lg p-2 bg-gray-800'
				>
					<FaPlus className=' text-white text-xl ' />
				</button>
			</Flex>
		</Card>
	)
}
