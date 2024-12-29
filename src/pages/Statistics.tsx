'use client'
import { useQuery } from '@tanstack/react-query'
import { Container } from '../components/Container'
import {
	Bar,
	BarChart,
	CartesianGrid,
	Cell,
	Pie,
	PieChart,
	XAxis,
	YAxis,
} from 'recharts'
import React from 'react'
import axios from 'axios'
import { BigTitle } from '../components/BigTitle'

const colors = [
	'#0088FE',
	'#00C49F',
	'#FFBB28',
	'#FF8042',
	'red',
	'pink',
	'red',
	'blue',
	'orange',
	'purple',
]

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const getPath = (x, y, width, height) => {
	return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`
}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const TriangleBar = props => {
	const { fill, x, y, width, height } = props

	return (
		<path
			d={getPath(x, y, width, height)}
			stroke='none'
			fill={fill}
		/>
	)
}
export const Statistics = () => {
	const { data: statistics } = useQuery({
		queryKey: ['statistics'],
		queryFn: async () => {
			return (await axios.get('statistic')).data
		},
	})
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-ignore
	const stat = () => {
		const statist = statistics?.[0]
		return [
			{
				name: 'user',
				value: statist?.user?.length ?? 0,
			},
			{
				name: 'products',
				value: statist?.products?.length ?? 0,
			},
			{
				name: 'articles',
				value: statist?.articles?.length ?? 0,
			},
		]
	}
	const stat2 = () => {
		const statist = statistics?.[0]

		const a = statist?.products?.map(
			(item: { title: string; time: string }) => {
				// console.log(item)
				return {
					title: item?.title,
					pv: item.time,
					uv: item.time,
					amt: item.time,
				}
			},
		)
		return a
	}
	const stat3 = () => {
		const statist = statistics?.[0]

		const a = statist?.articles?.map(
			(item: { title: string; publicDate: string }) => {
				// console.log(item)
				return {
					title: item?.title,
					pv: +item.publicDate,
					uv: +item.publicDate,
					amt: +item.publicDate,
				}
			},
		)
		return a
	}
	console.log(stat3())

	return (
		<Container className='mx-auto w-full flex-col flex justify-center h-1/2 gap-32 mb-20'>
			<div>
				<BigTitle
					size={44}
					title='Information about eatly'
					wordSelect='eatly'
					center='center'
					className=''
				/>
				<PieChart
					className='mx-auto w-full h-full'
					width={1230}
					height={450}
				>
					<Pie
						data={stat()}
						dataKey='value'
						nameKey='name'
						cx='50%'
						cy='50%'
						outerRadius={100}
						className='fill-primary'
						strokeWidth={3}
					/>
					<Pie
						strokeWidth={3}
						data={stat()}
						dataKey='value'
						nameKey='name'
						cx='50%'
						cy='50%'
						innerRadius={140}
						outerRadius={180}
						className='fill-primary opacity-50'
						label
					/>
				</PieChart>
			</div>
			<div className=' '>
				<BigTitle
					size={44}
					title='Time of delivery'
					wordSelect='Time'
					center='center'
					className=''
				/>
				<BarChart
					className='right-[290px]'
					width={1890}
					height={500}
					data={stat2()}
					margin={{
						top: 0,
						right: 100,
						left: 0,
						bottom: 0,
					}}
				>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis
						dataKey='title'
						hide={false}
						type='category'
						allowDuplicatedCategory={true}
						allowDataOverflow={true}
						includeHidden={true}
						minTickGap={5}
						tickSize={10}
					/>
					<YAxis />
					<Bar
						dataKey='uv'
						fill='#8884d8'
						shape={<TriangleBar />}
						label={{ position: 'top' }}
					>
						{stat2()?.map((entry: string, index: number) => (
							<Cell
								key={`cell-${index}`}
								fill={colors[index % 20]}
							/>
						))}
					</Bar>
				</BarChart>
			</div>
		</Container>
	)
}
