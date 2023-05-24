const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				mono: ["Space Grotesk Variable", ...defaultTheme.fontFamily.mono],
				sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],

				display: ["Space Grotesk Variable", ...defaultTheme.fontFamily.mono],
				body: ["InterVariable", ...defaultTheme.fontFamily.sans],
			}
		},
	},
	plugins: [],
}
