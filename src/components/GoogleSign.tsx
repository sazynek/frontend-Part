import { FaGoogle } from 'react-icons/fa'
export const GoogleSign = () => {
    const handleGoogleSign=()=>{

    }
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
