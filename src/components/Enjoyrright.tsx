import Image from 'next/image'
import './../app/support.scss'
export const Enjoyrright = () => {
	return (
		<div className='relative'>
			<Image
				className='absolute right-14 -top-20 '
				src={'/tree-wave.svg'}
				alt='graf'
				width={38}
				sizes='100vh'
				height={33}
			/>
			<Image
				className='absolute right-16 -top-14 '
				src={'/firstpng.png'}
				alt='food'
				width={320}
				height={85}
			/>
			<Image
				src={'/main_food.png'}
				alt='food'
				width={450}
				height={470}
			/>
			<Image
				className='absolute -left-16 -bottom-9 '
				src={'/main_graf.png'}
				alt='graf'
				width={200}
				sizes='100vh'
				height={205}
			/>
			<Image
				className='absolute -left-16 -bottom-9 '
				src={'/tree-line.svg'}
				alt='graf'
				width={38}
				sizes='100vh'
				height={33}
			/>
		</div>
	)
}
