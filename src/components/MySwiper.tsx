import { Flex, Slider } from 'antd'
import { FC, useState } from 'react'
import './componentStyle/componentStyle.scss'
import { IClassname, ISortDataProps } from '../types/types'
import clsx from 'clsx'

interface SortDataSwiper extends ISortDataProps, IClassname {
	selfField?: ''
}

export const MySwiper: FC<SortDataSwiper> = ({ className, setSData }) => {
	const [value, setValue] = useState([0, 0, 1000])
	const handleSwiper = (a: number[]) => {
		setSData(prev => ({ ...prev, praise: a[1] }))
		setValue(a)
	}
	return (
		<div className={clsx(className, ``)}>
			<Slider
				min={0}
				max={1000}
				range
				defaultValue={value}
				onChange={handleSwiper}
				styles={{
					track: {
						background: '#6c5fbc;',
					},
					handle: {
						color: '#6c5fbc',
					},
				}}
			/>
			<Flex
				justify='space-between'
				align='center'
				className='w-full text-gray-500 text-opacity-50 text-xs'
				gap={12}
			>
				<span>${0}</span>
				<span>$25</span>
				<span>$50</span>
				<span>$100</span>
				<span>$500</span>
				<span>${1000}</span>
			</Flex>
		</div>
	)
}
