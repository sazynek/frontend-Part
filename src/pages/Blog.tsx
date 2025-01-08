'use client'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FC, useEffect, useState } from 'react'
import { IArticles } from '../types/types'
import { Container } from '../components/Container'
import { BigTitle } from '../components/BigTitle'
const ARTICLES = 'articles'
import { FaArrowRight } from 'react-icons/fa'
import { FaArrowLeft } from 'react-icons/fa'
import clsx from 'clsx'
import { isInt } from '../globalFunc/globalFunc'

import { Button } from 'antd'

import { ArticleCardLazy } from '../components/ArticleCardLazy'
import { query } from '../providers/Providers'

export const Blog: FC = () => {
	const [go, setGo] = useState<number>(0)
	const [offset, setOffset] = useState<number>(6)

	const { data: articles } = useQuery<IArticles[]>({
		queryKey: [`${ARTICLES}`, offset],
		queryFn: async () => {
			return (
				await axios.get(`http://localhost:3100/${ARTICLES}`, {
					params: { offset },
				})
			).data
		},
	})
	const countPage = () => {
		if (articles?.length !== undefined) {
			if (isInt(articles?.length / 6) === true) {
				return Math.ceil(articles?.length / 6) + 1
			} else {
				return Math.ceil(articles?.length / 6)
			}
		}
	}

	const handleArrow = (
		multiplyNumber: number | null,
		direction: 'left' | 'right',
	) => {
		if (multiplyNumber !== null) {
			setGo(prev => prev + multiplyNumber)
			if (direction === 'right') setOffset(prev => prev + 6)
			if (direction === 'left') setOffset(prev => prev - 6)

			query.invalidateQueries()
		}
	}
	useEffect(() => {
		const TIME_OUT = setTimeout(() => {
			const windowSize = Number(window.screen.availHeight) / 2
			scrollTo({ behavior: 'smooth', top: windowSize })
		}, 200)

		return () => clearTimeout(TIME_OUT)
	}, [offset])
	console.log(offset)

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
						<ArticleCardLazy
							key={item.id}
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
					onClick={() => handleArrow(1630, 'left')}
					className='text-gray-600 cursor-pointer hover:text-gray-500 disabled:text-gray-400 transition-colors duration-100 border-0 p-5'
				>
					<FaArrowLeft size={40} />
				</Button>
				<Button
					disabled={-(1630 * countPage()!) === go - 1630}
					htmlType='button'
					variant='text'
					onClick={() => handleArrow(-1630, 'right')}
					className='text-gray-600 cursor-pointer hover:text-gray-500 disabled:text-gray-400 transition-colors duration-100 border-0 p-5'
				>
					<FaArrowRight size={40} />
				</Button>
			</div>
		</Container>
	)
}
