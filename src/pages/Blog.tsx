'use client'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { FC, useRef, useState } from 'react'
import { IArticles } from '../types/types'
import { Container } from '../components/Container'
import { ArticleCard } from '../components/ArticleCard'
import { Col, Row } from 'antd'
import { BigTitle } from '../components/BigTitle'
const ARTICLES = 'articles'
import { FaArrowRight } from 'react-icons/fa'
import { FaArrowLeft } from 'react-icons/fa'
export const Blog: FC = () => {
	const innerWidth = window.innerWidth
	console.log('screen x', innerWidth)
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const a = useRef(2)
	const { data: articles } = useQuery<IArticles[]>({
		queryKey: [''],
		queryFn: async () => {
			return (await axios.get(`http://localhost:3100/${ARTICLES}`)).data
		},
	})
	const [go, setGo] = useState<number>(0)
	const handleArrow = (multiplyNumber: number | null) => {
		if (multiplyNumber !== null) {
			setGo(prev => prev + multiplyNumber)
		}
	}
	return (
		<Container className='overflow-visible'>
			<BigTitle
				size={44}
				title='Latest Articles'
				wordSelect='Articles'
				center='center'
				className=''
			/>

			{articles?.map(item => (
				<ArticleCard
					key={item.id}
					{...item}
				/>
			))}

			<div className='arrow flex justify-center w-full gap-20 my-24'>
				<FaArrowLeft
					onClick={() => handleArrow(-1700)}
					size={40}
					className='text-gray-600 cursor-pointer hover:text-gray-500 transition-colors duration-100'
				/>
				<FaArrowRight
					onClick={() => handleArrow(1700)}
					size={40}
					className='text-gray-600 cursor-pointer hover:text-gray-500 transition-colors duration-100'
				/>
			</div>
		</Container>
	)
}
