import { cookies } from 'next/headers'
import { Statistics } from '../../../pages/Statistics'
import { redirect } from 'next/navigation'

export default async function StatisticsPage() {
	const a = await cookies()
	const b = a.get('acc_token')
	// console.log(b?.value)
	if (b?.value !== 'undefined' && b?.value.length) {
		return (
			<div>
				<Statistics />
			</div>
		)
	} else {
		redirect('login')
	}
}
