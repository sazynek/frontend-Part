import { Col, Row } from 'antd'
import { SortMenuLeft } from '../components/SortMenuLeft'
import { SortMenuRight } from '../components/SortMenuRight'
import { BigTitle } from '../components/BigTitle'

export const SortMenu = () => {
	return (
		<div>
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
					<SortMenuLeft />
				</Col>
				<Col
					span={10}
					offset={2}
				>
					<SortMenuRight />
				</Col>
			</Row>
		</div>
	)
}
