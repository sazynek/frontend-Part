import { create } from 'zustand'
interface ICart {
	openCart: boolean
	setCart: (booleanParam: boolean) => void
}
interface ICartCount {
	sum: number
	setSum: (obj: number[]) => void
}

const openCartFunc = create<ICart>(set => {
	return {
		openCart: false,
		setCart: booleanParam =>
			set(() => {
				// console.log(state.openCart)

				return { openCart: booleanParam }
			}),
	}
})

const countCartSum = create<ICartCount>(set => ({
	sum: 0,
	setSum: obj =>
		set(() => {
			let sum
			if (Array.isArray(obj) && obj.length !== 0)
				sum = obj.reduce((acc, value) => Math.round(acc + value), 0)
			return { sum }
		}),
}))

export const CartFuncAll = {
	countCartSum,
	openCartFunc,
}
