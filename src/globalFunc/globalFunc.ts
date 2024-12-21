export const isInt = (n: number) => {
	return Number(n) === n && n % 1 === 0
}

export class Count {
	constructor(private count: number[]) {}

	countFuncInt(countNumb: number,division:number=6) {
		if (isInt((countNumb) / division)){
		this.count.push(countNumb)
		const length = this.count.length
		return Number(length)}
	}
}
