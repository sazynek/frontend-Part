import { FC } from 'react'
import { CiInstagram } from 'react-icons/ci'
import { FaVk } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa6'
import { Container } from '../components/Container'
import { Flex } from 'antd'
import { FooterHeaderLinks } from './Header'
import Link from 'next/link'
import Image from 'next/image'
import '../app/support.scss'
import Text from 'antd/es/typography/Text'
export const Footer: FC = () => {
	return (
		<footer className='pt-10'>
			<Container className='mb-24'>
				<Flex
					className='downLine mb-20'
					component={'ul'}
					justify='space-between'
				>
					<Link href={'/'}>
						<li>
							<Image
								className='self-center'
								src={'/Logo.png'}
								alt='logo'
								width={100}
								height={40}
							/>
						</li>
					</Link>
					<Flex
						className='self-center w-96'
						component={'ul'}
						justify='space-between'
					>
						{FooterHeaderLinks.map(item => (
							<Link
								key={item.title}
								href={item.link}
							>
								<li className='h-full self-center'>
									{item.title}
								</li>
							</Link>
						))}
					</Flex>
				</Flex>
				<Flex justify='space-between'>
					<Text>© 2023 EATLY All Rights Reserved.</Text>
					<Flex
						justify='space-between'
						className='w-44'
					>
						<Link href={'/'}>
							<CiInstagram
								size={25}
								className='cursor-pointer'
							/>
						</Link>

						<Link href={'/'}>
							<FaVk
								size={25}
								className='cursor-pointer'
							/>
						</Link>

						<Link href={'/'}>
							<FaFacebookF
								size={25}
								className='cursor-pointer'
							/>
						</Link>

						<Link href={'/'}>
							<FaTwitter
								size={25}
								className='cursor-pointer'
								fill='#6C5FBC'
							/>
						</Link>
					</Flex>
				</Flex>
			</Container>
		</footer>
	)
}
