import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function RootPage() {
	const a = await cookies()
	const b = a.get('acc_token')
	console.log()
	if (b?.value !== 'undefined' && b?.value.length) redirect('/home')
	else redirect('/login')
}
