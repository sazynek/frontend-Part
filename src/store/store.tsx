import { create } from 'zustand'

interface some {
	bears: number[]
	increasePopulation: (a: number) => void
	removeOneBears: (a: number) => void
	removeLastBears: () => void
}

export const useSome = create<some>(set => ({
	bears: [0, 2],
	increasePopulation: (a: number = 1) =>
		set(state => ({ bears: [...state.bears, a] })),
	removeOneBears: (a: number = 1) =>
		set(state => ({ bears: state.bears.filter(item => item !== a) })),
	removeLastBears: () =>
		set(state => ({
			bears: state.bears.filter(
				item => item !== state.bears[state.bears.length - 1],
			),
		})),
}))
