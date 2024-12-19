import Image from 'next/image'
import './../app/support.scss'
import { FC } from 'react'
import { IClassname } from '../types/types'
export const Enjoyrright: FC<IClassname> = ({
	className = 'right-14 -top-20',
}) => {
	return (
		<div className='relative'>
			<Image
				className={`w-auto h-auto absolute  ${className}`}
				src={'/tree-wave.svg'}
				alt='graf'
				width={38}
				sizes='100vh'
				height={33}
			/>
			<Image
				priority
				className='h-auto w-auto absolute right-16 -top-14 '
				src={'/firstpng.png'}
				alt='food'
				sizes='100vh'
				width={320}
				height={85}
			/>
			<Image
				priority
				className='w-auto h-auto '
				src={'/main_food.png'}
				alt='food'
				sizes='100vh'
				width={450}
				height={470}
			/>
			<Image
				className='w-auto h-auto absolute -left-16 -bottom-9 '
				src={'/main_graf.png'}
				alt='graf'
				width={200}
				sizes='100vh'
				height={205}
			/>
			<Image
				className='w-auto h-auto absolute -left-16 -bottom-9 '
				src={'/tree-line.svg'}
				alt='graf'
				width={38}
				sizes='100vh'
				height={33}
			/>
		</div>
	)
}
