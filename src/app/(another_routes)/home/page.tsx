import { cookies } from 'next/headers'
import { Home } from '../../../pages/Home'
import { redirect } from 'next/navigation'

export default async function HomePage({
	searchParams,
}: {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	searchParams: Promise<any | undefined>
}) {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-ignore
	const google = await searchParams['google']

	const a = await cookies()
	const b = a.get('acc_token')
	// console.log(b?.value)
	if (b?.value !== 'undefined' && b?.value.length) {
		return (
			<div>
				<Home google={Boolean(google)} />
			</div>
		)
	} else {
		redirect('/login')
	}
}
