import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	sassOptions: {
		silenceDeprecations: ['legacy-js-api'],
	},
	async rewrites() {
		return [
			{
				source: '/:path*',
				destination: 'http://localhost:3100/:path*',
				basePath: false,
			},
		]
	},
}

export default nextConfig
