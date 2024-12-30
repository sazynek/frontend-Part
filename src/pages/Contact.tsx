'use client'
import { Col, Row } from 'antd'
import { LeftContact } from '../components/LeftContact'
import { RightContact } from '../components/RightContact'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from '../components/schema/zodSchema'

export const Contact = () => {
	const method = useForm({
		resolver: zodResolver(schema),
		mode: 'onChange',
		defaultValues: {
			username: '',
			email: '',
			content: '',
		},
	})
    const {clearErrors}=method
	return (
		<div className='pb-24' onClick={()=>clearErrors()}>
			<FormProvider {...method}>
				<Row
					align={'top'}
					justify={'space-between'}
				>
					<Col span={12}>
						<LeftContact />
					</Col>
					<Col
					
                        className='mr-36'
						span={10}
					>
						<RightContact />
					</Col>
				</Row>
			</FormProvider>
		</div>
	)
}
