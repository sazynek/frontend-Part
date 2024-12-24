import Image from 'next/image'
import { FC } from 'react'
import { IClassname } from '../types/types'
import clsx from 'clsx'
import Link from 'next/link'

export const AuthHeader: FC<IClassname> = ({ className }) => {
	return (
		<div className='relative'>
			<Link href={'/'}>
				<Image
					alt='eatly'
					src={'/Logo.png'}
					className={clsx(className, '')}
					width={110}
					height={110}
				/>
			</Link>
		</div>
	)
}
