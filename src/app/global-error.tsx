'use client'

import Link from "next/link"

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
				<h1>Something went wrong!</h1>
				<h2>Error name is {error.name ?? 'unknown'}</h2>
				<div>Error message is {error?.message ?? 'unknown'}</div>
				<div>Error digest is {error?.digest ?? 'unknown'}</div>
				<div>Error cause is {error?.cause ?? 'unknown'}</div>

				<button onClick={() => reset()}>Try again</button>
				<Link href={'/'}>leave this page</Link>

			</body>
		</html>
	)
}
