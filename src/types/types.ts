import { Dispatch, PropsWithChildren, SetStateAction } from 'react'

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
		Praise,
		IClassname {
	alt?: string
	onClick?: (index?: string | undefined) => void
	mark?: boolean
	indexNumber?: number
	isCart?: boolean
	cartItemId?: string
	setItemSum?: (numb: number[] | number) => void
	isModal?: boolean
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
export interface IHref {
	href?: string
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

export interface IArticles extends IClassname, IHref {
	id: string
	title: string
	publicDate: string
	imgUrl: string
	author?: string | null
	updatedAt: string
	createdAt: string
}
export interface IParams {
	search?: string
	praise?: number
	categ?: 'chicken' | 'chicken_with_vegetables'
}

export interface ISortDataProps {
	go?: boolean
	SData?: IParams
	setSData: Dispatch<SetStateAction<IParams>>
	data?: IResponse[]
}

export interface IComments {
	id: string
	content: string
	createdAt: string
	updatedAt: string
	userId: string
}

export interface ICommentsComponent {
	item: {
		id: string
		content: string
	}
	idx: number
	move: number
}
