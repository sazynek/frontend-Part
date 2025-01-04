'use client'

import Link from 'next/link'

// import { map } from 'lodash-es'

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	console.log(error)

	return (
		<html>
			<body>
				<div className='h-screen w-full flex justify-center align-middle text-white flex-col bg-gradient-to-br from-[#6658b9] to-[#000]'>
					<div className='self-center shadow-md shadow-gray-900  p-20 rounded-lg'>
						<h1>Something went wrong!</h1>
						<h2>Error name is {error.name ?? 'unknown'}</h2>
						<div>
							Error message is {error?.message ?? 'unknown'}
						</div>
						<div>Error digest is {error?.digest ?? 'unknown'}</div>
						<div>Error cause is {error?.cause ?? 'unknown'}</div>

						<button onClick={() => reset()}>Try again</button>
						<Link href={'/'}>leave this page</Link>
					</div>
				</div>
			</body>
		</html>
	)
}
