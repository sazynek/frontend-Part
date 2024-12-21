import { FC } from 'react'
import { IArticles } from '../types/types'
import { Card, Flex } from 'antd'
import Image from 'next/image'
import Title from 'antd/es/typography/Title'
import Paragraph from 'antd/es/typography/Paragraph'
import clsx from 'clsx'
import Link from 'next/link'

export const ArticleCard: FC<Partial<IArticles>> = ({
	imgUrl,
	author,
	publicDate,
	title,
	className,
	href
}) => {
	return (
		<Link href={href!} className={clsx('mb-16', className)}>
			<Card hoverable>
				<Image
					alt={title + ' article'}
					src={'/' + imgUrl}
					className='w-full'
					width={300}
					height={300}
					sizes='100vh'
				/>
				<div>
					<Title className='text-xl text-black font-black mt-2 mb-4'>
						{title}
					</Title>
					<Flex justify='space-between'>
						<Flex gap={15}>
							<Image
								alt={title + ' article'}
								src={'/avtor0.png'}
								className=' h-12 w-12 self-start'
								width={300}
								height={300}
							/>
							<div className='mt-2'>
								<Paragraph className='m-0 text-gray-500 opacity-80 text-xs'>
									Written By
								</Paragraph>
								<Paragraph className='font-bold'>
									{author ?? 'Perperzon'}
								</Paragraph>
							</div>
						</Flex>
						<div className='text-gray-500 self-end '>
							{publicDate}
						</div>
					</Flex>
				</div>
			</Card>
		</Link>
	)
}
