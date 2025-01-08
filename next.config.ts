import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	sassOptions: {
		silenceDeprecations: ['legacy-js-api'],
	},
	staticPageGenerationTimeout: 70000,

	experimental: {
		serverMinification: false,
	},
}

export default nextConfig
