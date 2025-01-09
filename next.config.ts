import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	sassOptions: {
		silenceDeprecations: ['legacy-js-api'],
	},
	output: 'export',
	staticPageGenerationTimeout: 70000,

	experimental: {
		serverMinification: false,
	},
}

export default nextConfig
