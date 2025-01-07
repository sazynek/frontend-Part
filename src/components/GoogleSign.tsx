import { FaGoogle } from 'react-icons/fa'
// import { TiDeleteOutline } from 'react-icons/ti'
// import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
export const GoogleSign = () => {
	const router = useRouter()
	const handleGoogleSign = async () => {
		try {
			router.replace('http://localhost:3100/auth/google')
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-ignore
		} catch (e: { e: { message?: string } | unknown }) {
			console.log(e)
			throw new Error(`Error: ${e?.message ?? e}`, { cause: e })
		}
	}
	useEffect(() => {
		console.log('this is page')
	}, [router])
	return (
		<div
			onClick={handleGoogleSign}
			className={`
                bg-gray-200 
                bg-opacity-40 
                p-5 
                text-center 
                flex 
                justify-center 
                align-middle 
                rounded-xl 
                w-1/2 
                mx-auto 
                mb-8 
                hover:bg-opacity-80 
                cursor-pointer  
                transition-all 
                duration-100`}
		>
			<FaGoogle
				className='text-gray-900 text-center'
				size={30}
			/>
		</div>
	)
}
