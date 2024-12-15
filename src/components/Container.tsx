import { FC, PropsWithChildren } from 'react'

export const Container: FC<PropsWithChildren> = ({ children }) => {
	return <div className='max-w-[1300px] mx-auto'>{children}</div>
}
