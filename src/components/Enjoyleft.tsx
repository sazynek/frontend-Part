import Text from 'antd/es/typography/Text'
import '../app/support.scss'
import { BigTitle } from './BigTitle'
import Paragraph from 'antd/es/typography/Paragraph'
import { DoubleBtn } from './DoubleBtn'
import Image from 'next/image'
import { Flex } from 'antd'
import { Rate } from 'antd'
export const Enjoyleft = () => {
	return (
		<div>
			<Text className='text-gray-500 opacity-80 leftLine ml-4'>
				OVER 1000 USERS
			</Text>
			<BigTitle
				size={75}
				title='Enjoy Foods All Over The World'
				wordSelect='World'
			/>
			<Paragraph className='w-[29rem] text-lg'>
				EatLy help you set saving goals, earn cash back offers, Go to
				disclaimer for more details and get paychecks up to two days
				early. Get a <span className='text-primary'>$20 bonus.</span>
			</Paragraph>
			<div className='w-1/2'>
				<div className='w-1/2 mt-20 mb-7'>
					<DoubleBtn
						firstBtn='Get Started'
						secondBtn='Go Pro'
					/>
				</div>
				<Flex justify='space-between'>
					<Image
						className='self-center'
						src={'trustpilot.svg'}
						alt='trustpilot'
						width={123}
						height={30}
					/>
					<Rate
						className='self-end'
						allowHalf
					/>
					<Text className='text-gray-500 self-end'>4900+</Text>
				</Flex>
			</div>
		</div>
	)
}
