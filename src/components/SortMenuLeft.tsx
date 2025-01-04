import { Button, Carousel } from 'antd'
import Search from 'antd/es/input/Search'
import Image from 'next/image'
import { FaSearch } from 'react-icons/fa'
import { Controller, Form, useFormContext } from 'react-hook-form'
import { FC, MouseEvent, useState } from 'react'
import { IParams, ISortDataProps } from '../types/types'
import { useRouter } from 'next/navigation'

const imgSrc = ['food0.png', 'food1.png', 'food2.png', 'food3.png', 'food4.png']

export const SortMenuLeft: FC<ISortDataProps> = ({ setSData, data, SData }) => {
	const router = useRouter()
	const { control } = useFormContext()
	const [mdl, setMdl] = useState<boolean>(false)
	const handleSearch = ({
		data: { search },
	}: {
		data: Pick<IParams, 'search'>
	}) => {
		console.log({ search: search }, 'left')
		setMdl(false)
	}

	const handleModal = (
		e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
		index: string,
		indexNumber: number,
	) => {
		// console.log(`menu/${indexNumber}?id=${index}`)
		router.push(`menu/${indexNumber}?id=${index}`)
		setMdl(true)
	}

	return (
		<>
			<Carousel
				draggable
				autoplay
				infinite={true}
				className=''
				dots={{ className: 'bottom-8' }}
			>
				{imgSrc.map(item => (
					<div key={item}>
						<h3 className='bg-primary bg-opacity-20 px-20 pb-10 pt-5 flex justify-center min-h-[350px] h-[350px] align-middle rounded-lg select-none'>
							<Image
								src={'/' + item}
								alt='carousel-items'
								className='w-[300px] h-auto'
								sizes='100vh'
								width={1000}
								height={1000}
							/>
						</h3>
					</div>
				))}
			</Carousel>
			<div>
				<Form
					className='relative'
					control={control}
					onSubmit={handleSearch}
					onChange={e =>
						// eslint-disable-next-line @typescript-eslint/ban-ts-comment
						//@ts-ignore
						setSData(prev => ({ ...prev, search: e.target.value }))
					}
				>
					<Controller
						name='search'
						defaultValue=''
						control={control}
						render={({
							field: { name, onBlur, ref, onChange, value },
						}) => (
							<Search
								enterButton={
									<Button htmlType='submit'>
										<FaSearch className='text-primary' />
									</Button>
								}
								type='input'
								onBlur={onBlur}
								onChange={onChange}
								value={value}
								ref={ref}
								size='large'
								className='p-5 pl-0 mt-5 mb-7 z-40 relative'
								placeholder={name}
								name={name}
							/>
						)}
					/>
					{SData?.search !== '' && mdl !== true && (
						<div
							onBlur={() =>
								setSData({
									categ: 'chicken',
									praise: 0,
									search: '',
								})
							}
							className={`absolute   w-[96.4%] h-auto top-16 left-0.5 z-20 bg-gray-300 bg-opacity-70 rounded-xl font-bold text-primary border-4 shadow-sm shadow-primary border-t-0`}
						>
							{data?.map((item, indexNumber) => {
								return (
									<div
										className='p-5 rounded-xl hover:bg-gray-100 cursor-pointer'
										onClick={e =>
											handleModal(e, item.id, indexNumber)
										}
										key={item?.id ?? indexNumber}
									>
										{item?.title ?? 'no item'}
										
									</div>
								)
							})}
						</div>
					)}
				</Form>
				{/* {mdl===true &&<Modal/>} */}
				<div className='font-bold text-xl leading-10 -z-20 relative'>
					<span className='capitalize p-5 bg-gray-400 rounded-xl bg-opacity-10 '>
						Guarantees
					</span>{' '}
					and{' '}
					<span className='capitalize p-5 bg-primary rounded-xl bg-opacity-90'>
						quality
					</span>
				</div>
			</div>
		</>
	)
}
