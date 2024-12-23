import { create } from 'zustand'
import { IMyCard } from '../types/types'

interface cart {
	cartItem: Omit<IMyCard, 'onClick'>[]
	setCart: (cartObj: Omit<IMyCard, 'onClick'>) => void
	getCart: () => Omit<IMyCard, 'onClick'>[]
	deleteCartItem: (cartObj: Omit<IMyCard, 'onClick'>) => unknown[] | void
}

export const useCart = create<cart>(set => ({
	cartItem: [],
	getCart: () => {
		const a: Omit<IMyCard, 'onClick'>[] = JSON.parse(
			localStorage.getItem('cartItem')!,
		)

		// if (a.length) return select
		return []
	},
	setCart: obj =>
		set(select => {
			const a = { cartItem: [...select.cartItem, obj] }
			// console.log(a.cartItem)

			localStorage.setItem('cartItem', JSON.stringify(a.cartItem))

			return { cartItem: a.cartItem }
		}),
	deleteCartItem: obj =>
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		set(select => {
			let result
			const items = select.cartItem
			const allSelect = items.filter(item => {
				if (
					obj.cost === item.cost &&
					obj.famous === item.famous &&
					obj.id === item.id &&
					obj.imgUrl === item.imgUrl &&
					obj.rating === item.rating &&
					obj.time === item.time &&
					obj.title === item.title
				)
					return true
			})
			const allAnother = items.filter(item => {
				if (
					obj.cost !== item.cost ||
					obj.famous !== item.famous ||
					obj.id !== item.id ||
					obj.imgUrl !== item.imgUrl ||
					obj.rating !== item.rating ||
					obj.time !== item.time ||
					obj.title !== item.title
				)
					return true
			})
			const [, ...anSpread] = allSelect

			if (allSelect.length !== 0) result = [...anSpread, ...allAnother]

			localStorage.setItem('cartItem', JSON.stringify(result))
			console.log(result)
			// console.log(result, '---', select.cartItem)
			return { cartItem: result }
		}),
}))
