/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		backgroundImage:{
			imgCel1:"url('/assets/home/background-home-mobile.jpg')",
			imgTab1: "url('/assets/home/background-home-tablet.jpg')",
			imgPc1: "url('/assets/home/background-home-desktop.jpg')",
			imgCel2:"url('/assets/destination/background-destination-mobile.jpg')",
			imgTab2: "url('/assets/destination/background-destination-tablet.jpg')",
			imgPc2: "url('/assets/destination/background-destination-desktop.jpg')",
			imgCel3:"url('/assets/crew/background-crew-mobile.jpg')",
			imgTab3: "url('/assets/crew/background-crew-tablet.jpg')",
			imgPc3: "url('/assets/crew/background-crew-desktop.jpg')",
			imgCel4:"url('/assets/technology/background-technology-mobile.jpg')",
			imgTab4: "url('/assets/technology/background-technology-tablet.jpg')",
			imgPc4: "url('/assets/technology/background-technology-desktop.jpg')"
		}
	},
	plugins: [],
}
