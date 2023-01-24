/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,svelte,vue}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	enabled: process.env.NODE_ENV === 'production',
	safeList: [],
	darkMode: 'class',
	theme: {
		letterSpacing: {
      zero: "-0.07em"
    },
    fontFamily: {
      tusker: ['Tusker Grotesk', 'display']
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
        'ocean-green': '#009370',
        'forest': '#01503e',
        'ocean-dark': '#098064',
        'cultured': '#f0eee8',
				'papaya': '#f76e39',
      }
    },
	},
	plugins: [
    require('flowbite/plugin')
  ],
}
