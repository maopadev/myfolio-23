/** @type {import('tailwindcss').Config} */
module.exports = {
	enabled: process.env.NODE_ENV === 'production',
	// classes that are generated dynamically, e.g. `rounded-${size}` and must
	// be kept
	safeList: [],
	content: ['./src/**/*.{astro,html,js,jsx,svelte,vue}'],
	theme: {
		letterSpacing: {
      zero: "-0.07em"
    },
		extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
			colors: {
        'bigstone': "#080808",
        'ocean-green': "#096162",
        'merino': '#F4ECE4',
        'victoria': '#5848A5',
				'papaya': '#FF7000'
      }
    },
	},
	plugins: [],
}
