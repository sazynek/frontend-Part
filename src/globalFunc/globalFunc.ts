export const isInt = (n: number) => {
	return Number(n) === n && n % 1 === 0
}

export class Count {
	constructor(private count: number[]) {}

	countFuncInt(countNumb: number, division: number = 6) {
		if (isInt(countNumb / division)) {
			this.count.push(countNumb)
			const length = this.count.length
			return Number(length)
		}
	}
}

export const formatCurrency = (numb: number) => {
	const { format } = new Intl.NumberFormat('Ru-ru', {
		style: 'currency',
		trailingZeroDisplay: 'stripIfInteger',
		currency: 'RUB',
	})
	return format(numb)
}

export const DateFunc = () => {
	const myDate = new Date(2050, 2, 3, 5, 1, 3, 4)
	return myDate
}
