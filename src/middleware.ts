import { NextRequest, NextResponse } from 'next/server'
import { DateFunc } from './globalFunc/globalFunc'

export default function Middleware(req: NextRequest) {
	const res = NextResponse.next()
	const acc = req.cookies.get('acc_token')
	if (
		acc?.value.length &&
		(acc.value !== 'undefined' || undefined) &&
		acc.name.length
	) {
		res.cookies.set(acc?.name as string, acc?.value as string, {
			path: '/',
			expires: DateFunc(),
		})
	}

	return res
}
