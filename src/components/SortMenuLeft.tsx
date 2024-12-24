import { Carousel } from 'antd'
import Search from 'antd/es/input/Search'
import Image from 'next/image'

const imgSrc = ['food0.png', 'food1.png', 'food2.png', 'food3.png', 'food4.png']

export const SortMenuLeft = () => {
	return (
		<Carousel
			draggable
			autoplay
			infinite={true}
			className=''
			dots={{ className: 'bottom-8' }}
		>
			{imgSrc.map(item => (
				<div key={item}>
					<h3 className='bg-gray-100 px-20 pb-10 pt-5 flex justify-center min-h-[350px] h-[350px] align-middle rounded-lg select-none'>
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
			<div>
				<Search
				className='bg-red-500'
				/>
<div>hay</div>
			</div>
		</Carousel>
	)
}
