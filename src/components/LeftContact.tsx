import Image from 'next/image'

export const LeftContact = () => {
	return (
		<div className='relative'>
			<Image
				className='relative '
				alt='mobile_screen-background'
				src={'/Left.png'}
				sizes='100vh'
				width={450}
				height={600}
			/>
			<Image
				className='absolute -bottom-14 left-80'
				alt='mobile_screen'
				src={'/mobile_screen.png'}
				sizes='100vh'
				width={250}
				height={200}
			/>
		</div>
	)
}
