'use client'
import { Col, Row } from 'antd'
import { SortMenuLeft } from '../components/SortMenuLeft'
import { SortMenuRight } from '../components/SortMenuRight'
import { BigTitle } from '../components/BigTitle'
import { FC, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { IParams, IResponse } from '../types/types'

export const SortMenu: FC<{ go: boolean }> = ({ go }) => {
	const [SData, setSData] = useState<IParams>({
		search: '',
		praise: 0,
		categ: 'chicken_with_vegetables',
	})
	const { data } = useQuery<IResponse[]>({
		queryKey: ['sortMenu', SData],
		queryFn: async () => {
			return (
				await axios.get('${process.env.SERVER}products/filter', {
					params: {
						search: SData.search!.trim(),
						praise: SData.praise ?? 0,
						categ: SData?.categ?.toLowerCase(),
					},
				})
			).data
		},
	})
	// console.log(SData)

	return (
		<div className='mb-52'>
			<div className='ml-6'>
				<BigTitle
					size={44}
					title='Search best food'
					wordSelect='Search'
					center='center'
					className=''
				/>
			</div>
			<Row
				align={'middle'}
				justify={'space-between'}
			>
				<Col span={12}>
					<SortMenuLeft
						go={go}
						SData={SData}
						data={data}
						setSData={setSData}
					/>
				</Col>
				<Col
					span={10}
					offset={2}
				>
					<SortMenuRight setSData={setSData} />
				</Col>
			</Row>
		</div>
	)
}
