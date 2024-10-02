/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

    
      fontFamily:{
        Nunito:["Nunito", "sans-serif"],
      },
      screens: {
        'xs': {'max': '480px'}, // Custom breakpoint for larger screens
      },
      
    },
  },
  plugins: [
    function ({ addUtilities }) {
        addUtilities({
            '.scrollbar-hide': {
                'scrollbar-width': 'none', /* Firefox */
                '-ms-overflow-style': 'none', /* Internet Explorer and Edge */
                '&::-webkit-scrollbar': {
                    display: 'none', /* Safari and Chrome */
                },
            },
        })
    },
],
}