import { FC } from 'react'
import { RightImage } from './RightImage'
import { IClassname } from '../types/types'
import clsx from 'clsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
export const RightSwipeComponentf: FC<IClassname> = ({ className }) => {
	return (
		<div className={clsx(className, '')}>
			<Swiper
				pagination={{
					dynamicBullets: true,
					clickable: true,
				}}
				modules={[Pagination]}
			>
				<SwiperSlide>
					<RightImage
						title='Find Food With Love'
						subtitle='Eater is best food deliverer from the world. More than
						2k dishes include Asian, Chinese, Italian and many more
						out Dashboard helps you manage you to Orders and money'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<RightImage
						title='Find Food With Love'
						subtitle='Eater is best food deliverer from the world. More than
						2k dishes include Asian, Chinese, Italian and many more
						out Dashboard helps you manage you to Orders and money'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<RightImage
						title='Find Food With Love'
						subtitle='Eater is best food deliverer from the world. More than
						2k dishes include Asian, Chinese, Italian and many more
						out Dashboard helps you manage you to Orders and money'
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}
