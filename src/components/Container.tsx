import { FC, PropsWithChildren } from 'react'
interface IContainer extends PropsWithChildren{
	className:string
}
export const Container: FC<IContainer> = ({ children,className }) => {
	return <div className={`max-w-[1300px] mx-auto ${className} `}>{children}</div>
}

