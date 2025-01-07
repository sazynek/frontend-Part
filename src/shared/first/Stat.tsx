import { Col, Row } from 'antd'
import { Container } from '../../components/Container'
import { StatTItle } from '../../components/StatTItle'
import { IStatTItle } from '../../types/types'
import cl from './stat.module.scss'
import { FC } from 'react'
const statData: IStatTItle[] = [
	{ title: '10K+', paragraph: 'Satisfied CostumersAll Great Over The World' },
	{
		title: '4M',
		paragraph: 'Healthy Dishes Sold Including Milk Shakes Smooth',
	},
	{
		title: '99.99%',
		paragraph: 'Reliable Customer Support We Provide Great Experiences',
	},
]
export const Stat: FC = () => {
	return (
		<div className={`h-full w-full p-10 mb-24 ${cl.bg}`}>
			<Container>
				<Row
					className='mt-10'
					align='middle'
				>
					{statData.map(item => (
						<Col
							key={item.title}
							span={8}
						>
							<StatTItle
								key={item.paragraph}
								paragraph={item.paragraph}
								title={item.title}
							/>
						</Col>
					))}
				</Row>
			</Container>
		</div>
	)
}
