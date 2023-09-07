/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}"
	],
  theme: {
	  extend: {
		  colors : {
			  'orange' : '#e89c3b',
			  'green' : '#69aa36',
			  'black-overlay' : 'rgba(0, 0, 0, 0.6)',
			  'black-overlay-2' : 'rgba(0, 0, 0, 0.2)',
		  },
		  keyframes : {
			  showIn : {
				  'to' : {
					  left : '0'
				  }
			  }
		  },
		  animation : {
			  showIn : 'showIn 1s linear forwards'
		  },
		  gridTemplateColumns : {
			  'pc' : '25.6% 1fr'
		  }
	  },
  },
  plugins: [],
}

