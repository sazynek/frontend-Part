import { Flex } from 'antd'
import Paragraph from 'antd/es/typography/Paragraph'

import { map } from 'lodash'
import { cookies } from 'next/headers'
import Link from 'next/link'
const anotherPage = ['home', 'menu', 'blog', 'contact']
const loginPage = ['login', 'register']
export default async function NotFound() {
	const cook = await cookies()
	const result = cook.get('acc_token')
	return (
		<div className='h-screen w-full flex justify-center align-middle text-white flex-col bg-gradient-to-br from-[#6658b9] to-[#000]'>
			<div className='self-center  mb-20 border-2 border-gray-900 shadow-md shadow-gray-900  p-20 rounded-lg mt-16'>
				<h1 className='text-3xl text-white font-black  flex text-center mb-16'>
					Not found page
					<div className='text-red-700 text-xs -mb-8 ml-1 self-end bg-white p-2 rounded-sm'>
						404 error
					</div>
				</h1>

				<Flex className='flex-col  self-center gap-7 mx-auto w-full text-center align-middle'>
					{map(result?.value ? anotherPage : loginPage, n => (
						<Link
							className='flex justify-center bg-primary rounded-lg p-2 pt-3 pb-0 w-full gap-2 h-full hover:shadow-md hover:shadow-primary hover:bg-opacity-70 transition-all duration-100'
							key={n}
							href={n}
						>
							<Paragraph
								key={n}
								className='text-white text-xl'
							>
								{n}
							</Paragraph>
						</Link>
					))}
				</Flex>
			</div>
		</div>
	)
}
