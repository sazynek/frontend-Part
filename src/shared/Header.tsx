import { Flex } from 'antd'
import Image from 'next/image'
import { FC } from 'react'
import { Container } from '../components/Container'
import '../app/support.scss'
import Link from 'next/link'
import { DoubleBtn } from '../components/DoubleBtn'
export const FooterHeaderLinks = [
	{ title: 'Menu', link: 'menu' },
	{ title: 'Blog', link: 'blog' },
	{ title: 'Contact', link: 'contact' },
]
export const Header: FC = () => {
	return (
		<header className='p-5 pt-10 mb-24'>
			<Container>
				<nav>
					<Flex
						className='downLine'
						component={'ul'}
						justify='space-between'
					>
						<Flex
							className='w-[650px]'
							component='ul'
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
									<>
										<Link
											key={item.title}
											href={item.link}
										>
											<li className='h-full self-center'>
												{item.title}
											</li>
										</Link>
									</>
								))}
							</Flex>
						</Flex>
						<DoubleBtn
							firstBtn='Login'
							secondBtn='Sign up'
						/>
					</Flex>
				</nav>
			</Container>
		</header>
	)
}
