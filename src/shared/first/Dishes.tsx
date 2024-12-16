'use client'
import { Row } from 'antd'
import { BigTitle } from '../../components/BigTitle'
import { Container } from '../../components/Container'
// import { MyCard } from '../../components/MyCard'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { instance } from '../../api/Instance'
import { useEffect, useState } from 'react'

export const Dishes = () => {
	const [a, setA] = useState<boolean>(false)
	const server = async () => {
		const a = await fetch('http://localhost:3100/products')
		console.log(a)
	}
	useEffect(() => {
		server()
	}, [a])
	return (
		<Container className='mb-24'>
			<div className='text-center  mx-auto'>
				<BigTitle
					size={45}
					title='Our Top Restaurants'
					wordSelect='Restaurants'
					center='center'
				/>
			</div>
			<Row>
				{/* <MyCard />
				<MyCard />
				<MyCard /> */}
			</Row>
			<div onClick={() => setA(!a)}>click</div>
		</Container>
	)
}
