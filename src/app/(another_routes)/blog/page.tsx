import { redirect } from 'next/navigation'
import { Blog } from '../../../pages/Blog'
import { cookies } from 'next/headers'


export default async function BlogPage() {
	const a = await cookies()
	const b = a.get('acc_token')

	// console.log(b?.value)
	if (b?.value !== 'undefined' && b?.value.length) {
		return (
			<div>
				<Blog />
			</div>
		)
	} else {
		redirect('login')
	}
}
