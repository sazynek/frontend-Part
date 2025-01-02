'use client'
import { Card, Flex } from 'antd'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { v4 as uuid } from 'uuid'
import { MySwiper } from './MySwiper'
import { FC, useState } from 'react'
import { ISortDataProps } from '../types/types'
import { Form } from 'react-hook-form'
import Paragraph from 'antd/es/typography/Paragraph'
const food = [
	{ id: uuid(), title: 'Meat', src: 'Hotdog.svg', category: 'chicken' },
	{
		id: uuid(),
		title: 'Veg',
		src: 'pizza.svg',
		category: 'chicken_with_vegetables',
	},
]

export const SortMenuRight: FC<ISortDataProps> = ({ setSData }) => {
	const [select, setSelect] = useState<boolean[]>([])
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-ignore
	const handleImageBtn = title => {
		if (title.title.includes('Veg')) setSelect([true, false])
		else setSelect([false, true])
	}
	const handleApplyBtn = () => {
		setSData(prev => ({
			...prev,
			categ:
				select[0] === true
					? 'chicken_with_vegetables'
					: select[1] === true
						? 'chicken'
						: 'chicken_with_vegetables',
		}))
	}

	return (
		<div>
			<Form onSubmit={handleApplyBtn}>
				<Card className='elevate w-1/2'>
					<div className='mb-0 font-bold text-2xl'>Category</div>
					<Flex
						justify='space-between'
						align='center'
						className='relative mb-32'
						gap={5}
					>
						{food.map((item, idx) => (
							<>
								<div
									onClick={() => handleImageBtn(item)}
									className={clsx(
										`absolute 
                                cursor-pointer 
                                my-5 
                                px-2 
                                py-2
                                hover:py-3 
                                hover:px-3 
                                rounded-xl 
                                border-opacity-0 border-4 
                                w-fit h-fit 
                                hover:border-opacity-60 
                                transition-all duration-100`,
										{
											'bg-yellow-500 border-yellow-500 top-0 left-1':
												item.title
													.toLowerCase()
													.includes('veg'),
											'bg-red-500 border-red-500 top-0 left-20 ':
												!item.title
													.toLowerCase()
													.includes('veg'),
										},
										{
											'bg-opacity-10':
												select[idx] === true,
										},
										{
											'bg-opacity-60 ':
												select[idx] === false,
										},
									)}
									key={item.id}
								>
									<Image
										className='absolute z-20'
										alt={`sort-item-food-${item.title}`}
										width={30}
										height={30}
										src={'/' + item.src}
									/>
									<div
										className={clsx(
											`text-sm text-black mt-10 font-bold text-center`,
											{
												'text-yellow-600': item.title
													.toLowerCase()
													.includes('veg'),
											},
											{
												'text-red-600': !item.title
													.toLowerCase()
													.includes('veg'),
											},
										)}
									>
										<input
											checked={!select[idx]}
											type='checkbox'
											className='z-10 absolute hidden'
										/>
										{item.title}
									</div>
								</div>
							</>
						))}
					</Flex>
					<h4 className='text-xl font-bold'>Sort By</h4>
					<Flex
						justify='space-between'
						align='center'
						gap={2}
						className='my-4'
					>
						<div className='text-gray-500 text-sm font-bold'>
							Recommended
						</div>
						<Link href={'#'}>
							<div className='capitalize text-primary font-bold cursor-pointer'>
								Fast delivery
							</div>
						</Link>
					</Flex>
					<div className='text-gray-500 text-sm font-bold mb-4'>
						Most Popular
					</div>
					<h4 className='text-xl font-bold mt-7 mb-4'>Price</h4>
					{/* swiper */}
					<MySwiper
						setSData={setSData}
						className={`mb-10`}
					/>
					<button
						type='submit'
						className='w-full text-center bg-primary  text-white text-lg rounded-xl py-4 flex justify-center align-middle hover:bg-opacity-90 transition-all duration-50 active:bg-purple-500 active:bg-opacity-70 mb-4'
					>
						Apply
					</button>
					<Paragraph className='text-gray-500  text-opacity-70 italic text-xs text-center flex justify-center align-middle h-full w-full'>
						Don&#8216;t forget to apply your changes.
					</Paragraph>
				</Card>
			</Form>
		</div>
	)
}
