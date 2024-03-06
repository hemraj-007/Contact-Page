/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        customBlue:'#a0e3f0',
      },
      fontFamily:{
        roboto:['Roboto','sans-serif']
      }
    },
  },
  plugins: [],
}

