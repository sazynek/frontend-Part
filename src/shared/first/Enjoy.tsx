import { Col, Row } from 'antd'
import { Enjoyleft } from '../../components/Enjoyleft'
import { Enjoyrright } from '../../components/Enjoyrright'
import { Container } from '../../components/Container'

export const Enjoy = () => {
	return (
		<Container>
			<Row align={'middle'}>
				<Col span={12}>
					<Enjoyleft />
				</Col>
				<Col span={10} offset={2} >
					<Enjoyrright />
				</Col>
			</Row>
		</Container>
	)
}
