import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			colors: {
				button_default: '#282828',
				button_hover: '#6C6C6C',
				button_focus: '#FFF'
			},
			fontSize: {
				text_header: '16px'
			},
			borderRadius: {
				button_bRadius: 'rounded-md'
			}
		},
		screens: {
			'big-desktop': { max: '1440px' },
			'for-desktop': { max: "'1025px'" },
			'small-tablet': { max: '768px' },
			'mobile-adapt': { max: '576px' }
		}
	},
	plugins: []
}
export default config
