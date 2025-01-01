import { cookies } from 'next/headers'
import { Home } from '../../../pages/Home'
import { redirect } from 'next/navigation'

export default async function HomePage() {
	const a = await cookies()
	const b = a.get('acc_token')
	// console.log(b?.value)
	if (b?.value !== 'undefined' && b?.value.length) {
		return (
			<div className=''>
				<Home />
			</div>
		)
	} else {
		redirect('login')
	}
}
