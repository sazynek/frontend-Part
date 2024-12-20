import { PropsWithChildren } from 'react'

export interface IBigTitle extends IClassname {
	title: string
	wordSelect: string
	size: number
	center?: 'center'
}
export interface IDoubleBtn {
	firstBtn: string
	secondBtn: string
	LogReg?: boolean
}
export interface IStatTItle {
	title: string
	paragraph: string
}

export interface IMyCard
	extends Pick<IResponse, 'id' | 'title' | 'imgUrl' | 'time'>,
		StatusProduct,
		Praise {
	alt?: string
	onClick: (index?: string | undefined) => void
	mark?: boolean
	index?: string
}

export interface IResponse {
	id: string
	title: string
	imgUrl: string
	time: string
	updatedAt?: string
	createdAt?: string
	userId?: string
	praiseId: string
	statusProductId: string
	productCollectionsId: string
	categories: Category[]
	praise: Praise
	productCollections: ProductCollections
	statusProduct: StatusProduct
	user?: string
}

interface StatusProduct {
	famous: string
	rating: string
	userLike?: boolean
}

interface ProductCollections {
	allProductsUserBuy: unknown[]
}

interface Praise {
	cost: number
	praiseStatus?: string
}
interface Category {
	productCategories: string
}
type EnumStatus = 'Supreme' | 'Trending' | 'Healthy'

export interface IFood {
	id: string
	src: string
	title: string
	time: number
	rating: number
	img: string
	status: EnumStatus
}
export interface IContainer extends PropsWithChildren {
	className?: string
}
export interface IClassname {
	className?: string
}
export interface LoginProps extends IClassname, IRest {
	title: string
	btnTitle: string
	LogOrSignup: 'login' | 'sign up'
}

export interface ISign extends Omit<LoginProps, 'title'> {
	selfMethod?: string
}
export interface IRest {
	control: unknown
	reset: unknown
	errors: unknown
}
export interface IRightImage extends IClassname {
	title: string
	subtitle: string
}
export interface ILogin extends Pick<LoginProps, 'LogOrSignup'> {
	btnTitle: 'sign in' | 'sign up'
	title: 'Sign in to eatly' | 'Sign Up to eatly'
}
