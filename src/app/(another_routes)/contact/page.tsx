import { cookies } from 'next/headers'
import { Contact } from '../../../pages/Contact'
import { redirect } from 'next/navigation'

export default async function ContactPage() {
	const a = await cookies()
	const b = a.get('acc_token')
	// console.log(b?.value)
	if (b?.value !== 'undefined' && b?.value.length) {
		return (
			<div>
				<Contact />
			</div>
		)
	} else {
		redirect('login')
	}
}
