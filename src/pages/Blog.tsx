'use client'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { FC, useState } from 'react'
import { IArticles } from '../types/types'
import { Container } from '../components/Container'
import { BigTitle } from '../components/BigTitle'
const ARTICLES = 'articles'
import { FaArrowRight } from 'react-icons/fa'
import { FaArrowLeft } from 'react-icons/fa'
import clsx from 'clsx'
import { isInt } from '../globalFunc/globalFunc'
import { ArticleCard } from '../components/ArticleCard'
import { Button } from 'antd'

export const Blog: FC = () => {
	const [go, setGo] = useState<number>(0)
	const { data: articles } = useQuery<IArticles[]>({
		queryKey: [`${ARTICLES}`],
		queryFn: async () => {
			return (await axios.get(`http://localhost:3100/${ARTICLES}`)).data
		},
	})
	const countPage = () => {
		if (articles?.length !== undefined)
			return Math.ceil(articles?.length / 6)
	}

	const handleArrow = (multiplyNumber: number | null) => {
		if (multiplyNumber !== null) {
			setGo(prev => prev + multiplyNumber)
		}
	}

	return (
		<Container className='overflow-hidden'>
			<BigTitle
				size={44}
				title='Latest Articles'
				wordSelect='Articles'
				center='center'
				className='mt-10'
			/>
			<div
				className={`grid grid-rows-2 gap-10  grid-flow-col transition-all duration-150 ggg`}
				style={{ translate: go }}
			>
				{articles?.map((item, idx) => {
					return (
						<ArticleCard
							key={idx}
							href='/'
							className={clsx(
								`max-w-[400px] max-h-[400px] h-[400px] w-[400px]`,
								{ 'mr-[310px]': isInt((idx + 1) / 6) },
							)}
							{...item}
						/>
					)
				})}
			</div>
			<div className='arrow flex justify-center w-full gap-20 my-24'>
				<Button
					disabled={go === 0}
					htmlType='button'
					variant='text'
					onClick={() => handleArrow(1630)}
					className='text-gray-600 cursor-pointer hover:text-gray-500 disabled:text-gray-400 transition-colors duration-100 border-0 p-5'
				>
					<FaArrowLeft size={40} />
				</Button>
				<Button
					disabled={-(1630 * countPage()!) / 2 === go}
					htmlType='button'
					variant='text'
					onClick={() => handleArrow(-1630)}
					className='text-gray-600 cursor-pointer hover:text-gray-500 disabled:text-gray-400 transition-colors duration-100 border-0 p-5'
				>
					<FaArrowRight size={40} />
				</Button>
			</div>
			<div className='text-red-500 bg-blue-500 p-5'>{45}</div>
		</Container>
	)
}
