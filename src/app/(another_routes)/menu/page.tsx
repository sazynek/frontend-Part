import { cookies } from 'next/headers'
import { Menu } from '../../../pages/Menu'
import { redirect } from 'next/navigation'

export default async function MenuPage() {
		const a = await cookies()
		const b = a.get('acc_token')
		// console.log(b?.value)
		if (b?.value !== 'undefined' && b?.value.length) {
	return (
		<>
			<Menu />
		</>
	)}else{
		redirect('login')
	}
}
