import { Button, Flex } from 'antd'
import Image from 'next/image'
import { FC } from 'react'
import { Container } from '../components/Container'
import '../app/support.scss'
import Link from 'next/link'
export const FooterHeaderLinks = [
	{ title: 'Menu', link: 'menu' },
	{ title: 'Blog', link: 'blog' },
	{ title: 'Contact', link: 'contact' },
]
export const Header: FC = () => {
	return (
		<header className='p-5 pt-10'>
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
						<Flex
							className='self-center'
							component={'ul'}
							justify='space-between'
							gap={20}
						>
							<li>
								<Button type='default' className='p-5 border-primary hover:border-opacity-80' >Login</Button>
							</li>
							<li>
								<Button type='primary' className='bg-primary hover:bg-opacity-80 rounded-xl p-5'>Sign up</Button>
							</li>
						</Flex>
					</Flex>
				</nav>
			</Container>
		</header>
	)
}
