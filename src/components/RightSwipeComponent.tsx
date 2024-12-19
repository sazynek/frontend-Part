import { FC } from 'react'
import { RightImage } from './RightImage'
import { IClassname } from '../types/types'
import clsx from 'clsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import './SwiperCss/swiper.scss'
export const RightSwipeComponent: FC<IClassname> = ({ className }) => {
	return (
		<Swiper
			className={clsx(className, '')}
			spaceBetween={300}
			slidesPerView={1}
			width={600}
			pagination={{
				dynamicBullets: false,
				clickable: true,
			}}
			modules={[Pagination]}
		>
			<SwiperSlide
				className='left-32 align-middle flex top-[180px]'
				style={{ width: 900, height: 900 }}
			>
				<RightImage
					className=''
					title='Find Food With Love'
					subtitle='Eater is best food deliverer from the world. More than
						2k dishes include Asian, Chinese, Italian and many more
						out Dashboard helps you manage you to Orders and money'
				/>
			</SwiperSlide>
			<SwiperSlide
				className='ml-28 align-middle flex top-[180px]'
				style={{ width: 900, height: 900 }}
			>
				<RightImage
					title='Find Food With Love'
					subtitle='Eater is best food deliverer from the world. More than
						2k dishes include Asian, Chinese, Italian and many more
						out Dashboard helps you manage you to Orders and money'
				/>
			</SwiperSlide>
			<SwiperSlide
				className='ml-28 right-16 align-middle flex top-[180px]'
				style={{ width: 900, height: 900 }}
			>
				<RightImage
					title='Find Food With Love'
					subtitle='Eater is best food deliverer from the world. More than
						2k dishes include Asian, Chinese, Italian and many more
						out Dashboard helps you manage you to Orders and money'
				/>
			</SwiperSlide>
		</Swiper>
	)
}
