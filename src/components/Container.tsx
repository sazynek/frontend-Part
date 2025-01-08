import { FC } from 'react'
import { IContainer } from '../types/types'

export const Container: FC<IContainer> = ({ children, className }) => {
	return (
		<div className={`max-w-[1300px] mx-auto ${className} `}>{children}</div>
	)
}
