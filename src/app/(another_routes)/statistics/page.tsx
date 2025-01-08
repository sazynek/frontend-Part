'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { StatPage } from '../../../pages/StatPage'

export default async function StatisticsPage() {
	const a = await cookies()
	const b = a.get('acc_token')
	// console.log(b?.value)
	if (b?.value !== 'undefined' && b?.value.length) {
		return (
			<div>
				<StatPage/>
			</div>
		)
	} else {
		return (
			<div>
				{/* <Blog /> */}
			</div>
		)
		redirect('login')
	}
}
