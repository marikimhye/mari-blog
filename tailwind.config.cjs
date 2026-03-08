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
						fontSize: '1.0625rem',
						lineHeight: '1.75',
						letterSpacing: '0',
						color: '#333',
						wordBreak: 'keep-all',
						h1: {
							fontWeight: '700',
							letterSpacing: '-0.02em',
							fontSize: '1.75rem',
							marginBottom: '0.5rem',
						},
						h2: {
							fontWeight: '700',
							letterSpacing: '-0.01em',
							fontSize: '1.625rem',
							marginTop: '2.5rem',
							marginBottom: '0.75rem',
						},
						h3: {
							fontWeight: '600',
							fontSize: '1.2rem',
							marginTop: '2rem',
							marginBottom: '0.5rem',
						},
						p: {
							marginTop: '0',
							marginBottom: '0.75rem',
						},
						a: {
							fontWeight: '500',
						},
						blockquote: {
							fontStyle: 'normal',
							fontWeight: '400',
						},
						li: {
							marginTop: '0.25rem',
							marginBottom: '0.25rem',
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
