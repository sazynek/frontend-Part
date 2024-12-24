import { Flex } from 'antd'
import { IClassname } from '../types/types'
import { FC } from 'react'
import clsx from 'clsx'

export const AuthFooter: FC<IClassname> = ({ className }) => {
	return (
		<Flex
			justify='space-between'
			gap={2}
			className={clsx(`text-gray-500`, className)}
		>
			<div>Privacy Policy</div>
			<div>Copyright 2022</div>
		</Flex>
	)
}
