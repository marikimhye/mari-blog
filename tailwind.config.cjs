/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Pretendard Variable"', 'Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto', 'sans-serif'],
			},
			typography: {
				DEFAULT: {
					css: {
						fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
						fontSize: '1.05rem',
						lineHeight: '1.85',
						color: '#333',
						h1: {
							fontWeight: '700',
							letterSpacing: '-0.02em',
						},
						h2: {
							fontWeight: '600',
							letterSpacing: '-0.01em',
						},
						h3: {
							fontWeight: '600',
						},
						p: {
							marginTop: '1.2em',
							marginBottom: '1.2em',
						},
						a: {
							fontWeight: '500',
						},
						blockquote: {
							fontStyle: 'normal',
							fontWeight: '400',
						},
					},
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
	daisyui: {
		themes: true,
		darkTheme: "dark",
		logs: false,
	  }
}
