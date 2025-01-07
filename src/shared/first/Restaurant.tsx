import { Flex } from 'antd'
import { BigTitle } from '../../components/BigTitle'
import Image from 'next/image'
import { Container } from '../../components/Container'
import Paragraph from 'antd/es/typography/Paragraph'
import Meta from 'antd/es/card/Meta'
import clsx from 'clsx'
import { v4 as uuid } from 'uuid'
import { IFood } from '../../types/types'
import { FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'
const food: IFood[] = [
	{
		id: uuid(),
		src: 'logoFood0.png',
		title: 'The Chicken King',
		time: 17,
		rating: 4.2,
		img: 'star.svg',
		status: 'Trending',
	},
	{
		id: uuid(),
		src: 'logoFood1.png',
		title: 'The Burger King',
		time: 24,
		rating: 4.4,
		img: 'star.svg',
		status: 'Healthy',
	},
	{
		id: uuid(),
		src: 'logoFood2.png',
		title: 'The Boss of Chicken King',
		time: 34,
		rating: 4.9,
		img: 'star.svg',
		status: 'Supreme',
	},
]
export const Restaurant = () => {
	return (
		<Container className=' mb-24'>
			<div className='text-center  mx-auto'>
				<BigTitle
					size={45}
					title='Our Top Restaurants'
					wordSelect='Restaurants'
					center='center'
				/>
			</div>
			<Flex gap={20}>
				{food.map(item => (
					<div
						className='border rounded-2xl    border-gray-300 border-opacity-50 hover:shadow-lg transition-shadow duration-100'
						key={item?.id}
					>
						<div className=' rounded-2xl p-5'>
							<Image
								alt='food'
								src={'/' + item.src}
								className='h-full  min-w-full p-0 m-0'
								width={600}
								height={600}
							/>
							<div className='ml-8 -mt-16'>
								<Paragraph
									className={clsx(
										'p-2 text-xs rounded-md flex justify-self-start  align-middle bg-opacity-50',
										{
											'bg-green-300 text-green-500 font-bold':
												item.status.toLowerCase() ===
												'supreme',
										},
										{
											'bg-red-300 text-red-500 font-bold':
												item.status.toLowerCase() ===
												'trending',
										},
										{
											'bg-yellow-300 text-yellow-500 font-bold':
												item.status.toLowerCase() ===
												'healthy',
										},
									)}
								>
									{item.status}
								</Paragraph>
								<Meta
									title={item.title}
									className='mb-2 font-extrabold text-4xl leading-8 mt-6'
								/>
								<Flex
									justify='left'
									gap={5}
									className='mt-5'
								>
									<Paragraph>{item.time + 'min'}</Paragraph>
									<Image
										className='self-start mt-0.5 mx-2'
										src={'/' + item.img}
										alt='star'
										width={20}
										height={20}
									/>
									<Paragraph>{item.rating}</Paragraph>
								</Flex>
							</div>
						</div>
					</div>
				))}
			</Flex>
			<Flex
				justify='right'
				className='mt-24 mb-24 '
			>
				<Link
					href={'/menu'}
					className='hover:opacity-80 transition-opacity duration-75'
				>
					<Paragraph className='text-gray-500 italic font-black flex gap-4 '>
						<span>View all</span>
						<FaArrowRight className='self-center' />
					</Paragraph>
				</Link>
			</Flex>
		</Container>
	)
}
