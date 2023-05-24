const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						maxWidth: '65ch',
						"--tw-prose-body": theme("colors.sky.50"),
						"--tw-prose-code": theme("colors.sky.50"),
						"--tw-prose-code-background": theme("colors.sky.900"),
						"--tw-prose-links": theme("colors.sky.200"),
						'--tw-prose-bullets': theme("colors.sky.50"),
						'--tw-prose-invert-bullets': theme("colors.sky.50"),
					}
				}
			}),
			fontFamily: {
				mono: ["Space Mono", ...defaultTheme.fontFamily.mono],
				sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],

				display: ["Space Grotesk Variable", ...defaultTheme.fontFamily.mono],
				body: ["InterVariable", ...defaultTheme.fontFamily.sans],
			}
		},
	},
	plugins: [require('@tailwindcss/typography'),],
}
